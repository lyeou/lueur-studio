'use strict';
(() => {
  // Match decoration endpoints after wrapping, responsive layout and font loading.
  const copy = document.querySelector('.hero-copy');
  const heading = copy?.querySelector('h1');
  const explanation = copy?.querySelector('.studio-explanation');
  const rail = copy?.querySelector('.hero-flourish-rail');
  const alignFlourish = () => {
    if (!heading || !explanation || !rail) return;
    const parent = copy.getBoundingClientRect();
    const start = heading.getBoundingClientRect().top - parent.top;
    const end = explanation.getBoundingClientRect().bottom - parent.top;
    // Visible alpha bounds of the original artwork after its existing -10deg tilt.
    const visibleTop = 0.01729;
    const visibleSpan = 0.933167;
    const compact = window.matchMedia('(max-width: 1100px)').matches;
    const height = compact ? Math.min((end - start) / visibleSpan, 38 * 598 / 240) : (end - start) / visibleSpan;
    const top = compact ? (start + end - height) / 2 : start - visibleTop * height;
    rail.style.setProperty('--flourish-top', `${top}px`);
    rail.style.setProperty('--flourish-height', `${height}px`);
  };
  alignFlourish();
  if (copy && 'ResizeObserver' in window) new ResizeObserver(alignFlourish).observe(copy);
  document.fonts?.ready.then(alignFlourish);
  const saved = new Map();
  const list = document.getElementById('saved-ideas-list');
  const feedback = document.getElementById('save-feedback');
  document.querySelectorAll('.save-idea').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => {
      const { idea, label } = button.dataset;
      const selected = !saved.has(idea);
      if (selected) saved.set(idea, label); else saved.delete(idea);
      button.setAttribute('aria-pressed', String(selected));
      button.setAttribute('aria-label', `${selected ? 'Remove' : 'Save'} ${label}`);
      button.querySelector('span').textContent = selected ? 'Saved' : 'Save idea';
      list.replaceChildren();
      if (!saved.size) {
        const li = document.createElement('li');
        li.textContent = 'No ideas saved yet. Explore the workshop themes above.';
        list.append(li);
      }
      saved.forEach((name, key) => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#idea-${key}`;
        link.textContent = name;
        li.append(link);
        list.append(li);
      });
      feedback.textContent = `${label} ${selected ? 'saved to' : 'removed from'} your collection.`;
    });
  });
  const menu = document.querySelector('.atelier-menu');
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
  document.addEventListener('click', event => {
    if (menu?.open && !menu.contains(event.target)) menu.open = false;
  });
})();
