'use strict';
(() => {
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
