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

(() => {
  const carousel = document.querySelector('.workshop-carousel');
  const controls = document.querySelector('.workshop-controls');
  if (!carousel || !controls) return;
  const slides = [...carousel.querySelectorAll('.arch-card')];
  const dots = [...controls.querySelectorAll('[data-slide]')];
  const play = controls.querySelector('.workshop-play');
  const status = document.getElementById('workshop-slide-status');
  let current = 0;
  let timer;
  const show = index => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
    status.textContent = `${current + 1} of ${slides.length}: ${slides[current].querySelector('h3').textContent}`;
  };
  const stop = () => {
    clearInterval(timer); timer = undefined;
    play.textContent = '▶︎'; play.setAttribute('aria-label', 'Play workshop slideshow');
    play.setAttribute('aria-pressed', 'false');
  };
  controls.hidden = false;
  show(0);
  dots.forEach(dot => dot.addEventListener('click', () => { stop(); show(Number(dot.dataset.slide)); }));
  controls.querySelectorAll('[data-slide-step]').forEach(button => button.addEventListener('click', () => { stop(); show(current + Number(button.dataset.slideStep)); }));
  play.addEventListener('click', () => {
    if (timer) { stop(); return; }
    play.textContent = 'Ⅱ'; play.setAttribute('aria-label', 'Pause workshop slideshow');
    play.setAttribute('aria-pressed', 'true');
    timer = setInterval(() => show(current + 1), 6000);
  });
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('pointerenter', stop);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
  document.querySelectorAll('a[href^="#idea-"]').forEach(link => link.addEventListener('click', () => {
    const index = slides.findIndex(slide => `#${slide.id}` === link.getAttribute('href'));
    if (index >= 0) { stop(); show(index); }
  }));
})();
