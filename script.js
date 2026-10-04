// Progressive enhancement: without JavaScript, every project stays visible.
const filters = document.querySelector('.filters');
const cards = [...document.querySelectorAll('.project')];
if (filters && cards.length) {
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const category = button.dataset.filter;
    filters.querySelectorAll('button').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    cards.forEach(card => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
    });
    const count = cards.filter(card => !card.hidden).length;
    document.querySelector('#filter-status').textContent = `${count} projects shown.`;
  });
}
