# Lueur Studio — Website Visual Style Guide

Version: 1.0 (proposed, pending visual preference confirmation)

## 1. Visual worldview
Lueur Studio is **A Collected Little World**: a sunlit, tactile, thoughtfully collected world where beginner-friendly making feels joyful, comfortable, and personal. Combine warm lived-in interiors, editorial scrapbook composition, and restrained playful hand-drawn details. The site must first explain the workshop offering and then evoke its atmosphere.

**Feels like:** an inviting creative studio, a curated personal photo album, and a small independent lifestyle brand.
**Does not feel like:** SaaS/AI startup, luxury hotel, children's craft school, generic ecommerce template, overloaded vintage flea market, or cafe-only website.

## 2. Color tokens
```css
:root {
  --color-canvas: #F6F0E5;
  --color-paper: #FFF9F0;
  --color-sand: #E7D9C4;
  --color-ink: #49352C;
  --color-muted: #806F60;
  --color-terracotta: #B77B5C;
  --color-butter: #C7A65D;
  --color-olive: #798067;
  --color-line: #D3C4AF;
}
```
Target visual surface distribution: 50% canvas, 25% sand/paper, 15% dark text and dark accents, 7% terracotta, 3% butter/other accents. This is a compositional guide, not a rigid per-page quota. Keep UI light; blue, purple, pink belong in photography or occasional seasonal motifs, not global primary UI colors without approval. Ensure text contrast meets WCAG AA.

## 3. Typography
- Display: Cormorant Garamond or Fraunces, fallback Georgia/serif; used for hero and editorial headings.
- Body/UI: DM Sans or Manrope, fallback system sans-serif; used for paragraphs, navigation, buttons, labels, prices, dates.
- Handwriting: optional, only short decorative phrases; never for functional information.
- Desktop: hero 64–88px; H1 52–64px; H2 36–48px; H3 23–28px; body 16–18px; meta 13–14px.
- Mobile: hero 42–52px; H1 36–44px; H2 29–36px; H3 21–24px; body 16px; meta 13–14px.
- Display line-height 0.98–1.15; body 1.55–1.7. Body text measure 55–75 characters. Use strong readable contrast.

## 4. Layout, density and whitespace
- Structure: 12-column desktop grid; max-width 1280px; desktop gutters 48–80px; mobile gutters 20–24px.
- Section spacing: desktop 104–144px; mobile 64–88px.
- Composition: roughly 70% calm, regular layout and 30% controlled editorial variation.
- Editorial image offsets: desktop 12–32px; mobile 8–16px. One focal overlap per image group; do not overlap body copy, forms, prices or CTA.
- Workshop, shop, booking, and pricing details always use regular, scannable layouts.
- Alternate image-rich and whitespace-rich sections; never stack several dense collage sections consecutively.

## 5. Photography and cropping
- Hero: 4:5 or 3:4 editorial photo, subject and making environment visible.
- Workshop result: 4:5, full finished object visible; include close-up and process photos where possible.
- Shop: 1:1 or 4:5 consistent within each product grid; show materials, dimensions, variants, real usage.
- Lifestyle: 3:4 or 2:3, natural compositions with breathing room.
- Material detail: 1:1 or 3:2, visible textile texture and handwork.
- Editorial collage: one main image and 1–3 smaller supporting images; retain a clear visual hierarchy.
- Prefer side sunlight, warm wood, fabric, hands at work, finished objects, candid activity, natural shadows and authentic textures.
- Do not present inspiration photos as actual studio or customer photos. No fake reviews or fictitious product/event details. Always use appropriate image rights and alt text.

## 6. Navigation
- Desktop: actual brand logo left, links Workshops / Shop / Our Story / What's Next, with Workshops visually prioritized. Height 76–88px.
- Sticky navigation may use warm paper backdrop and subtle border; do not use glassmorphism.
- Mobile: logo + accessible menu button; simple vertical expanded menu; no complex takeover animations.
- Maintain keyboard focus, active-page indication and readable labels.

## 7. Buttons and links
- Primary CTA: dark ink fill, light cream text, 8px radius, height 48–52px, horizontal padding 22–28px. Default text: **Explore Our Workshops**.
- Secondary: transparent or paper background, 1px ink border, same geometry.
- Hover: color shifts slightly; arrow may translate 2–4px; duration 180–250ms.
- Active: subtle pressed feedback; focus-visible: distinct high-contrast outline.
- No giant pill buttons, glowing gradients, or fake 3D controls.
- Do not imply bookings or purchases are open before launch. Use clear Coming Soon / Booking Opens Soon states.

## 8. Cards, labels and editorial windows
- Workshop card: clear photo, title, duration, beginner suitability, seasonal/availability status and action.
- Shop card: product image, name, price if confirmed or clearly qualified, availability, action.
- Prefer image + typography on page background rather than enclosing everything in white rounded boxes.
- Images: radius 0–8px; cards: 4–10px; buttons: 8px.
- Paper/postcard frames, vintage labels, stamps and window motifs are permitted only for occasional storytelling sections; never for critical booking, payment or form interfaces.

## 9. Material, border, shadow and light
- Warm matte paper is the base material; fabric and wood textures appear chiefly in actual photography.
- Optional subtle paper grain overlay at 2–4% opacity; never compromise readability.
- Borders: 1px var(--color-line), occasionally 2px for special paper-style frames.
- Shadows: soft warm-brown only, e.g. `0 6px 20px rgba(73,53,44,.08)`; avoid large floating card shadows.
- Highlights: natural photo highlights and subtle interactive brightening, not metallic gradients or neon bloom.

## 10. Decorative elements
- Brand motifs: use existing approved logo-associated linework, subtle stars or light marks.
- Material motifs: small grids, stitched lines, paper corners, stripes, irregular hand-drawn curves.
- Emotional motifs: tiny flowers, bows, soft circles, seasonal drawings, used sparingly.
- Limit to 1–3 decorative groups per desktop section; reduce further on mobile.
- Decorations never substitute for functional labels, accessible icons or navigation.
- Do not reproduce third-party cartoon characters, patterns, packaging or branding.

## 11. Motion, hover and pointer
- Use system pointer by default. Optional `View` cursor only on non-critical editorial imagery; never hide default pointer for essential actions.
- Image hover: scale <=1.02, duration 250–350ms, with overflow clipped.
- Card hover: optional translateY(-2px) or subtle brighten; no exaggerated 3D tilt.
- Links: subtle underline reveal; buttons: small color/arrow change.
- Scroll reveal: opacity 0→1 and translateY(12–20px), 400–600ms; trigger once.
- Mobile: no hover-dependent functionality; use visible tap/active feedback.
- Respect `prefers-reduced-motion: reduce`; disable nonessential transforms and reveals.
- No scroll hijacking, perpetual floating objects, particle cursors, large parallax, intrusive transitions or autoplay audio.

## 12. Responsive behavior
- Desktop >=1024px: 12-column layout, 2-column hero, 3-column workshop/shop grid where space allows.
- Tablet 768–1023px: simpler 2-column grids, reduced offsets and section spacing.
- Mobile <=767px: single-column storytelling and product detail, selectively 2-column compact cards only if readable.
- Touch targets >=44x44px; body >=16px; no clipped text or overlapping CTAs.
- Mobile first viewport must identify Lueur Studio as a beginner-friendly creative workshop and show a meaningful action, not only a mood photograph.
- Test at 320, 375, 390, 768, 1024 and 1440px widths.

## 13. Page-specific guidance
- **Home:** clear studio introduction, warm real-work hero, primary Explore Our Workshops CTA, preview of confirmed workshops, product showcase, story, future plans and email/Instagram follow-up.
- **Workshops:** confirmed Fabric Creation themes only; fabric coasters and seasonal Christmas ornaments. Finished objects first; beginner-friendly, solo-friendly, duration and availability easy to find. Do not invent dates/prices.
- **Shop:** display Lueur-designed products with ecommerce-like clarity, but no live checkout until operationally ready. Distinguish confirmed prices, estimates and Coming Soon.
- **Our Story:** brand philosophy led, not an overly intimate founder biography. Explain why making matters and what the experience offers.
- **What's Next:** curated upcoming concepts and workshops; optional voting on Lueur-selected concepts, clearly label tentative vs confirmed plans.

## 14. Accessibility and performance
- WCAG AA contrast targets: 4.5:1 for ordinary text and 3:1 for large text / relevant UI boundaries.
- Semantic headings, accessible navigation, descriptive alt text, keyboard-visible focus, properly labeled forms and state messages.
- Serve optimized responsive images; lazy-load below-the-fold media; reserve aspect-ratio to avoid layout shifts.
- No critical content hidden until animation or hover; maintain usability with JS-reduced and reduced-motion settings where practical.

## 15. Explicit anti-template prohibitions
- No purple/blue AI gradients, glassmorphism, neon strokes, floating glossy orbs, generic 3D blobs.
- No endless repeated centered headline + three identical round cards + CTA sections.
- No giant meaningless slogan that obscures the workshop offer.
- No 24px rounded corners and heavy drop shadows on every element.
- No generic fake testimonial portraits, fabricated workshop images, fake inventory or booking times.
- No cartoon-heavy children's craft aesthetic or inaccessible formal luxury hotel aesthetic.
- No full-page faux vintage paper, illegible script paragraphs, overwhelming collage or decorative UI windows around checkout.

## 16. Acceptance criteria
1. Within the first viewport, visitors can identify what Lueur Studio offers and find Explore Our Workshops.
2. Site feels warm, tactile, editorial and gently playful without becoming cluttered or childish.
3. Workshop and shop imagery accurately shows the actual objects and their use.
4. Navigation, text, availability, price and actions are clearer than decorations.
5. Desktop and mobile both feel intentionally composed; reduced motion and keyboard access work.
6. Prelaunch states are truthful; no fabricated social proof or operational claims.

## 17. Approval status
This is a **proposed** visual system inferred from 15 inspiration images and confirmed brand positioning. The user has not yet separately confirmed every visual choice. Especially validate dark-brown intensity, cartoon motifs, transparent layers, handwriting, stripes, paper texture and collage density before treating these as final brand standards.
