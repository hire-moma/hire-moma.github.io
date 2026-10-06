document.querySelectorAll('#compare-tabs a').forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('#compare-tabs li').forEach(li => li.classList.toggle('is-active', li === tab.parentNode));
    document.querySelectorAll('.compare-row').forEach(row => {
      const shown = '#' + row.id === tab.getAttribute('href');
      row.classList.toggle('is-hidden', !shown);
      row.querySelectorAll('video').forEach(v => {
        v.currentTime = 0;
        shown ? v.play() : v.pause();
      });
    });
  });
});
