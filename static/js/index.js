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

const copyButton = document.querySelector('[data-copy-bibtex]');
if (copyButton) {
  const label = copyButton.querySelector('[data-copy-label]');
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(document.querySelector('[data-bibtex]').textContent);
      label.textContent = 'Copied!';
    } catch (e) {
      label.textContent = 'Copy failed';
    }
    setTimeout(() => { label.textContent = 'Copy'; }, 1600);
  });
}
