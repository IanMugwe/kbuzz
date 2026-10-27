  (function () {
    // Filter pills: visual toggle (stories get wired to real categories later)
    document.querySelectorAll('[data-kb-filter]').forEach(function (group) {
      group.addEventListener('click', function (e) {
        var btn = e.target.closest('.kb-pill');
        if (!btn) return;
        group.querySelectorAll('.kb-pill').forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      });
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    // Reveal blocks as they scroll into view
    document.documentElement.classList.add('kb-js');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.kb-rise').forEach(function (el) { io.observe(el); });

    // Count stats up from zero the first time they are seen
    var counter = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        counter.unobserve(entry.target);
        var el = entry.target, end = +el.dataset.kbCount, start = performance.now();
        (function tick(now) {
          var k = Math.min(1, (now - start) / 1600);
          el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US') + (k === 1 ? '+' : '');
          if (k < 1) requestAnimationFrame(tick);
        })(start);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll('[data-kb-count]').forEach(function (el) { counter.observe(el); });
  })();
