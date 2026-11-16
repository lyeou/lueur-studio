import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import CircularCarousel from './components/CircularCarousel/CircularCarousel';
import './shop-carousel.css';

const items = [
  { src: './public/images/coasters.webp', alt: 'Fabric coasters with embroidered and appliqué details', title: 'Fabric Coasters', subtitle: '£15 · Coming soon' },
  { src: './public/images/scrunchies.webp', alt: 'Brown fabric scrunchies in dotted, checked and floral patterns', title: 'Scrunchies', subtitle: '£20 · Coming soon' },
  { src: './public/images/canvas-tote.webp', alt: 'Checked tote style reference; final backpack photograph to follow', title: 'Backpack', subtitle: '£30 · Style reference · Coming soon' }
];

function ShopCarousel() {
  const root = useRef(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => setReduced(query.matches);
    query.addEventListener('change', change);
    return () => query.removeEventListener('change', change);
  }, []);
  useEffect(() => {
    const region = root.current?.querySelector('.circular-carousel');
    region?.setAttribute('aria-label', 'Lueur collection preview');
    root.current?.querySelector('.circular-carousel__live')?.setAttribute('aria-live', paused ? 'polite' : 'off');
  }, [paused, reduced]);
  const step = key => {
    setPaused(true);
    root.current?.querySelector('.circular-carousel')?.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
  };
  if (reduced) return <p className="shop-carousel-reduced">Reduced motion is on. Browse the collection below.</p>;
  return <div ref={root} onFocusCapture={event => {
    if (event.target.closest('.circular-carousel')) setPaused(true);
  }}>
    <div className="shop-carousel-stage">
      <CircularCarousel items={items} preset="cylinder" intro="rise" cardWidth={220} aspectRatio={1} speed={14} captions
        autoplay={paused ? 'off' : 'drift'} fadeColor="#F6F0E5" innerShade={0.92} cornerRadius={8} />
    </div>
    <div className="shop-carousel-controls" role="group" aria-label="Collection carousel controls">
      <button type="button" onClick={() => step('ArrowLeft')} aria-label="Previous product">←</button>
      <button type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused}>{paused ? 'Resume rotation' : 'Pause rotation'}</button>
      <button type="button" onClick={() => step('ArrowRight')} aria-label="Next product">→</button>
    </div>
    <p className="shop-carousel-help">Drag to explore, or use the arrow controls. Select a card to bring it forward.</p>
  </div>;
}

const mount = document.getElementById('shop-circular-carousel');
if (mount) createRoot(mount).render(<ShopCarousel />);
