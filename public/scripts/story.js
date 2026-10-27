(function () {
  // Copy-link share button
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(btn.dataset.copy).then(function () {
        var icon = btn.querySelector('.material-symbols-outlined');
        icon.textContent = 'check';
        setTimeout(function () { icon.textContent = 'link'; }, 1600);
      });
    });
  });

  // Gallery lightbox
  var dialog = document.querySelector('.kb-lightbox');
  var items = Array.prototype.slice.call(document.querySelectorAll('.kb-gallery__item'));
  if (!dialog || !items.length || !dialog.showModal) return;
  var img = dialog.querySelector('img');
  var cap = dialog.querySelector('figcaption');
  var current = 0;

  function show(i) {
    current = (i + items.length) % items.length;
    var item = items[current];
    img.src = item.dataset.full;
    img.alt = item.querySelector('img').alt;
    cap.textContent = item.dataset.caption;
  }
  items.forEach(function (item, i) {
    item.addEventListener('click', function () { show(i); dialog.showModal(); });
  });
  dialog.querySelector('.kb-lightbox__close').addEventListener('click', function () { dialog.close(); });
  dialog.querySelector('.kb-lightbox__nav--prev').addEventListener('click', function () { show(current - 1); });
  dialog.querySelector('.kb-lightbox__nav--next').addEventListener('click', function () { show(current + 1); });
  dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
})();
