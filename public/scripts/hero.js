  (function () {
    // Set this to the Radio 98.4 stream URL to make "Listen Now" play real audio.
    var STREAM_URL = '';

    var hero = document.getElementById('home');
    var header = document.getElementById('site-header');
    if (!hero) return;

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var finePointer = window.matchMedia('(pointer: fine)').matches;

    // ---------- Header: transparent over the hero, solid after scrolling ----------
    function syncHeader() {
      if (header) header.classList.toggle('is-scrolled', window.scrollY > 40);
    }
    syncHeader();
    window.addEventListener('scroll', syncHeader, { passive: true });

    // ---------- Radio toggle (hero card + docked player share one state) ----------
    var playing = false;
    var audio = STREAM_URL ? new Audio(STREAM_URL) : null;
    if (audio) audio.preload = 'none';
    var toggles = document.querySelectorAll('[data-radio-toggle]');

    function setPlaying(next) {
      playing = next;
      if (audio) {
        if (playing) audio.play().catch(function () { setPlaying(false); });
        else audio.pause();
      }
      toggles.forEach(function (btn) {
        btn.setAttribute('aria-pressed', String(playing));
        var icon = btn.querySelector('.material-symbols-outlined');
        if (icon) icon.textContent = playing ? 'pause' : 'play_arrow';
        var label = btn.querySelector('.kb-hero__listen-label');
        if (label) label.textContent = playing ? 'NOW PLAYING' : 'LISTEN NOW';
      });
    }
    toggles.forEach(function (btn) {
      btn.addEventListener('click', function () { setPlaying(!playing); });
    });

    // ---------- Waveform canvas ----------
    var canvas = document.getElementById('kb-wave');
    var ctx = canvas.getContext('2d');
    var word = document.getElementById('kb-word');
    var inner = hero.querySelector('.kb-hero__inner');
    var title = hero.querySelector('.kb-hero__title');
    var W = 0, H = 0, dpr = 1, colorGrad = null, fadeGrad = null;
    var BAR = 3, GAP = 3, bars = [], targets = [];

    function layoutWave() {
      var wordTop = inner.offsetTop + title.offsetTop + word.offsetTop;
      var wordH = word.offsetHeight;
      var top = wordTop + wordH * 0.32;
      H = Math.round(wordH * 0.75);
      W = hero.clientWidth;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.style.top = top + 'px';
      canvas.style.height = H + 'px';
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      colorGrad = ctx.createLinearGradient(0, 0, W, 0);
      colorGrad.addColorStop(0, '#dc2626');
      colorGrad.addColorStop(0.36, '#e11d2a');
      colorGrad.addColorStop(0.5, '#f5b400');
      colorGrad.addColorStop(0.62, '#f5b400');
      colorGrad.addColorStop(0.72, '#10b981');
      colorGrad.addColorStop(1, '#10b981');

      fadeGrad = ctx.createLinearGradient(0, 0, W, 0);
      fadeGrad.addColorStop(0, 'rgba(0,0,0,0)');
      fadeGrad.addColorStop(0.06, 'rgba(0,0,0,1)');
      fadeGrad.addColorStop(0.8, 'rgba(0,0,0,1)');
      fadeGrad.addColorStop(0.92, 'rgba(0,0,0,0)');

      var n = Math.ceil(W / (BAR + GAP));
      while (bars.length < n) { bars.push(Math.random()); targets.push(Math.random()); }
      bars.length = targets.length = n;
    }

    var energy = 0.45, pointerU = -1, pointerBoost = 0;

    function drawWave(t) {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = colorGrad;
      var mid = H / 2, n = bars.length;
      for (var i = 0; i < n; i++) {
        // drift each bar toward a fresh random target so the band feels "live"
        if (Math.random() < 0.06) targets[i] = Math.random();
        bars[i] += (targets[i] - bars[i]) * 0.18;
        var u = i / n;
        var env = 0.3 + 0.7 * Math.pow(Math.abs(Math.sin(u * 9.5 + t * 0.6) * Math.cos(u * 3.1 - t * 0.35)), 0.8);
        var pulse = 0.35 + 0.65 * Math.abs(Math.sin(u * 40 + t * 3.2));
        var boost = pointerU < 0 ? 0 : Math.exp(-Math.pow(u - pointerU, 2) / 0.0035) * pointerBoost;
        var a = mid * Math.min(1, (env * pulse * (0.35 + 0.65 * bars[i]) * energy) + boost * 0.7);
        a = Math.max(1, a);
        ctx.fillRect(i * (BAR + GAP), mid - a, BAR, a * 2);
      }
      // fade both ends into the background
      ctx.globalCompositeOperation = 'destination-in';
      ctx.fillStyle = fadeGrad;
      ctx.fillRect(0, 0, W, H);
    }

    // ---------- Parallax (pointer + scroll) ----------
    var layers = [].map.call(hero.querySelectorAll('[data-depth]'), function (el) {
      return { el: el, depth: parseFloat(el.dataset.depth) || 0 };
    });
    var mx = 0, my = 0, tx = 0, ty = 0;

    if (finePointer && !reduceMotion) {
      hero.addEventListener('pointermove', function (e) {
        var r = hero.getBoundingClientRect();
        tx = ((e.clientX - r.left) / r.width) * 2 - 1;
        ty = ((e.clientY - r.top) / r.height) * 2 - 1;
        pointerU = (e.clientX - r.left) / r.width;
      });
      hero.addEventListener('pointerleave', function () { tx = ty = 0; pointerU = -1; });
    }

    function applyParallax() {
      var sy = Math.min(window.scrollY, hero.offsetHeight);
      layers.forEach(function (l) {
        var x = mx * l.depth;
        var y = my * l.depth * 0.6 + -sy * (l.depth / 60);
        l.el.style.transform = 'translate3d(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px,0)';
      });
    }

    // ---------- Main loop (paused while the hero is off-screen) ----------
    var running = false, visible = true, start = performance.now();

    function frame(now) {
      if (!visible) { running = false; return; }
      var t = (now - start) / 1000;
      mx += (tx - mx) * 0.06;
      my += (ty - my) * 0.06;
      energy += ((playing ? 1 : 0.45) - energy) * 0.05;
      pointerBoost += ((pointerU < 0 ? 0 : 1) - pointerBoost) * 0.08;
      applyParallax();
      drawWave(t);
      requestAnimationFrame(frame);
    }
    function startLoop() {
      if (running || reduceMotion) return;
      running = true;
      requestAnimationFrame(frame);
    }

    function init() {
      layoutWave();
      if (reduceMotion) { drawWave(0); } else { startLoop(); }
      hero.classList.add('is-ready');
    }

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        layoutWave();
        if (reduceMotion) drawWave(0);
      }, 120);
    });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible) startLoop();
      }).observe(hero);
    }

    // Re-measure once the display font is in, since it changes the word's height.
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(init);
  })();
