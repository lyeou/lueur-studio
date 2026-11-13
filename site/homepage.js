'use strict';
(() => {
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
  const status = document.getElementById('workshop-slide-status');
  let current = 0;
  const show = index => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
    status.textContent = `${current + 1} of ${slides.length}: ${slides[current].querySelector('h3').textContent}`;
  };
  controls.hidden = false;
  show(0);
  dots.forEach(dot => dot.addEventListener('click', () => { show(Number(dot.dataset.slide)); }));
  controls.querySelectorAll('[data-slide-step]').forEach(button => button.addEventListener('click', () => { show(current + Number(button.dataset.slideStep)); }));
  document.querySelectorAll('a[href^="#idea-"]').forEach(link => link.addEventListener('click', () => {
    const index = slides.findIndex(slide => `#${slide.id}` === link.getAttribute('href'));
    if (index >= 0) { show(index); }
  }));
})();
