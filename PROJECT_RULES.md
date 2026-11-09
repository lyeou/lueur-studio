# Lueur Studio — PROJECT_RULES.md

> Project constitution for the Lueur Studio website. Version 1.0, 9 November 2026.
> Status: brand decisions are confirmed; numeric design tokens are implementation defaults pending visual review.

## 0. Authority, scope, and change control

This file is the primary source of truth for Lueur Studio's brand identity, site purpose, content architecture, design intent, and UX constraints. Read it **before every design, coding, refactoring, or content task**. Do not silently replace its requirements with generic templates, framework defaults, or reference-image aesthetics.

Priority order:
1. **P0 — Immutable without explicit owner approval:** brand positioning, philosophy, user promise, primary user journey, confirmed page architecture, authenticity, beginner accessibility, solo-friendly participation, and prelaunch truthfulness.
2. **P1 — Governed design rules:** art direction, typography roles, colors, image handling, layout, components, and motion. Small implementation refinements are allowed if consistent; substantive direction changes require approval.
3. **P2 — Engineering choices:** framework, file organization, component composition, build tooling, and implementation details may be selected pragmatically, subject to P0/P1.

When instructions conflict: follow the owner's **latest explicit confirmation**; then this file for unmodified rules; then `docs/STYLE_GUIDE.md` for compatible implementation detail; then other project documents. If a later request conflicts with a P0 rule, explain the conflict and ask for explicit permission before changing that rule. Do not treat an AI-generated suggestion, moodboard image, or sample mockup as owner approval. Never rewrite or delete this file's core rules without explicit owner permission. Record approved amendments in a dated change log.

## 1. Brand identity and background [P0]

- **Brand:** Lueur Studio.
- **Philosophy:** **The Joy of Making**.
- **Established brand expressions:** **A Little Joy, Made by You.** and **Make a little joy.** Preserve spelling and meaning; do not invent a replacement slogan.
- **Positioning:** a welcoming, beginner-friendly creative studio offering thoughtfully designed, practical, personalisable making experiences. Guests may come alone or with friends, create at their own pace, and take home an object they enjoy using or keeping.
- **Experience promise:** a beautiful, usable result **and** an enjoyable, relaxed making process. Neither should be sacrificed for the other.
- **Brand principles:** *Design is the entry point; experience is the product; culture is the depth.* The finished object helps spark the desire to participate.
- **Not:** a professional craft school, a compulsory social club, a children's crafts website, a luxury hotel, a cafe, a generic e-commerce store, or a brand permanently limited to sewing.
- **Scope:** start with Fabric Creation workshops, while preserving room for future creative materials, independently designed lifestyle products, and collaborations.
- **Location context:** London, UK. Do not invent a physical studio address or claim a permanent venue exists.
- **Brand-story emphasis:** the philosophy and joy of creating, **not** a founder-biography-led story. Do not publish founders' names, photos, biographies, or personal details without approval.

**Approved short positioning direction:** “A welcoming creative studio for beginners, where you can slow down, make something lovely, and enjoy a little time for yourself or with friends.” This is recommended explanatory copy, not an immutable slogan.

## 2. Website purpose and release phases [P0]

The site must make a new visitor understand **what Lueur Studio is, what they can make, why it feels approachable, and what to do next**. Its emotional outcome is: “This looks like such a lovely place to spend an afternoon” and “I’d love to try making something myself.” Beauty without comprehension is failure.

**Phase 1 — prelaunch (current):** polished, honest brand preview. Explain the studio; show confirmed workshop concepts and real samples; showcase independent products; introduce brand philosophy and upcoming ideas; capture interest via Instagram, email updates, and curated polls. **No fake booking, shopping, inventory, payment, reviews, or event dates.**

**Phase 2 — operating business (later):** on-site workshop booking (date, time, party size, payment, confirmation), and eventual shop checkout, inventory and fulfilment. Do not implement or imply these features are active until explicitly commissioned and operationally ready.

Primary homepage action: **Explore Our Workshops**. Prelaunch follow-on conversion: **Be the First to Know** / **Keep Me Posted** for workshop announcements. Instagram follow and curated interest polls are supporting actions. Do not make Shop checkout the primary action at prelaunch.

## 3. Audience, barriers, and trust [P0]

Audience is defined by motivation, not assumed demographic stereotypes:
- **Solo curious beginner:** wants a peaceful creative afternoon without pressure to socialise.
- **Friends planning an outing:** wants a shared, enjoyable, achievable activity and something to take home.
- **Design/lifestyle enthusiast:** cares about attractive, functional, personalisable everyday objects.

Every workshop experience must answer, without requiring the visitor to dig through a FAQ:
- Do I need prior experience? **No experience needed**, subject to actual workshop testing.
- Can I attend alone? **Yes; solo guests are welcome**, with no compulsory socialising.
- What will I make? Show the **actual finished object** and variations.
- How does it work? Show simple steps and the level of guidance.
- How long, how much, where, and what is included? Show **verified** facts or clearly mark **TBC**.
- Can I come with friends? Explain group participation without implying unconfirmed availability.

Use authentic samples, process photography, actual event images and permissioned testimonials when available. Never fabricate customer reviews, beginner results, venue imagery or attendance claims. Trust comes from clarity and proof, not decorative badges.

## 4. Brand feeling and art direction [P0/P1]

**Core art-direction sentence:** **“A French-inspired creative brand that doesn't take itself too seriously.”**
**Supporting concept:** **“Sunlit French Nostalgia with a Playful Twist.”**
**Design principle:** *The layout is considered. The personality is playful.*

The site should feel like a sunlit French-inspired creative atelier, a carefully collected lifestyle scrapbook, and a thoughtful independent design brand. It should be bright, relaxed, tactile, approachable, gently nostalgic and subtly mischievous. The visitor notices comfort first, then discovers small visual surprises.

Express this concretely through:
- warm cream canvas, soft natural daylight, timber, cotton/linen and authentic craft photography;
- elegant editorial serif headings with readable functional sans-serif text;
- intentional whitespace and disciplined information hierarchy;
- occasional offset postcard/photo arrangements, tiny doodled stars, imperfect hand-drawn curves, subtle stripes or gingham;
- warm brown, terracotta, butter-yellow and occasional restrained seasonal accent colors;
- calm, responsive interactions with modest playful feedback.

**Never interpret “French” as ornate palace luxury, all-gold decoration, inaccessible haute couture, or stiff formality. Never interpret “playful” as childish rainbow UI, excessive cartoon characters, or chaotic scrapbook clutter.**

## 5. Color system [P1]

The **latest confirmed balance** is **light cream, sunshine and ease as the dominant mood**, with warm brown/vintage collection depth and a stronger touch of **French playfulness**. Earlier darker moodboards are secondary reference, not authorization for a dark site.

Suggested CSS tokens (working defaults; refine against actual logo and real photography, with owner review):

```css
:root {
  --canvas: #F6F0E5;
  --paper: #FFF9F0;
  --sand: #E7D9C4;
  --ink: #49352C;
  --muted-ink: #806F60;
  --line: #D3C4AF;
  --terracotta: #B77B5C;
  --butter: #C7A65D;
  --olive: #798067;
  --soft-blue: #7E91AC;
}
```

**Visual weight, not exact pixel quotas:** approximately **55% cream/light**, **20% warm vintage browns**, **15% terracotta/coral warmth**, **10% playful accents** (butter yellow, occasional soft blue, olive or soft pink). The dark brown should mainly support legibility and small emphases, **not** become the main background across the site. Keep bright colors concentrated in labels, art details, seasonal content and real products; do not randomly recolor every CTA.

Ensure WCAG AA text contrast (normally at least 4.5:1 for normal text); test all token combinations. Never rely on hue alone to communicate status.

## 6. Typography and copy [P1]

- **Display:** characterful, legible editorial serif (candidate: Cormorant Garamond or Fraunces); use for hero, section headings and short brand statements. Confirm font licensing and rendering before use.
- **Body/UI:** clean, readable sans-serif (candidate: DM Sans or Manrope); use for body copy, prices, dates, labels, buttons, form fields and policy text.
- **Handwritten accent:** optional and sparse; use only for short decorative notes, never for essential information. Reuse the official logo artwork rather than recreating its lettering in an unrelated font.
- **English is the public website language.** Tone: warm, natural, slightly poetic, gently playful, but unambiguous for instructions, prices, availability and policies.

Working type scale:

| Role | Desktop | Mobile | Guidance |
|---|---|---|---|
| Hero | 64–88px | 42–52px | line-height ~1.0–1.1 |
| Page H1 | 52–64px | 36–44px | line-height ~1.1 |
| Section H2 | 36–48px | 29–36px | line-height ~1.12–1.2 |
| Card H3 | 23–28px | 21–24px | line-height ~1.2 |
| Body | 16–18px | 16px | line-height ~1.55–1.7 |
| Small/meta | 13–14px | 13–14px | maintain legibility |
| Buttons | 14–16px | 15–16px | never decorative script |

Target body line lengths around 55–75 English characters on desktop. Preserve semantic heading order. Use natural case rather than ALL CAPS everywhere. Do not make poetic copy substitute for a plain explanation of the service.

## 7. Layout, density, whitespace, layering [P1]

- **Editorial structure, not arbitrary chaos:** as a working heuristic, ~70% orderly reading and ~30% controlled visual variation. This is not a hard numerical quota.
- Max content width ~1280px; desktop horizontal padding ~48–80px; mobile ~20–24px.
- Main section vertical rhythm: desktop ~104–144px; mobile ~64–88px; tighten where content requires continuity.
- Use a responsive 12-column desktop grid; use 2 columns on tablets and 1 column on small screens for most editorial content.
- One focal image per collage, with 1–3 supporting elements; optional offsets ~12–32px desktop and ~8–16px mobile. Decorative rotations generally within ±2–3 degrees.
- Never offset booking facts, prices, essential buttons, accessibility labels, or form fields merely for visual novelty.
- Layered paper/photo edges and tiny overlapping tags are permitted only when they do not cover the subject, body text, or interactive targets.
- Alternate calm, spacious sections with occasional denser editorial sections. Do not make every section a collage or every section an identical three-card grid.

## 8. Photography, image cropping, and provenance [P0/P1]

Image categories must remain distinct:
1. **Official brand assets:** approved Lueur logo, typography/artwork, packaging marks, and brand graphics. Preserve originals; do not redraw or recolor the logo without approval.
2. **Actual Lueur work:** real workshop prototypes, samples, products, materials, process photos and venue/event photos. Use for claims about what customers can make or buy.
3. **Reference/moodboard images:** external inspiration from interiors, vintage objects, cats, balloons, cafes, books, street scenes, old software, etc. **Not production assets.** Do not paste into the live site without rights and explicit approval; do not copy other brands' trademarks, illustrations or packaging.
4. **Conceptual/AI visuals:** only for clearly labeled exploratory concepts, never as misleading evidence of real workshops, venue, customers or finished goods.

Preferred imagery: warm side daylight, tactile fabric, natural wrinkles, real hands making objects, warm wood, thoughtful product still lifes, and objects in everyday use. Avoid fake staged stock-model smiles, heavy orange filters, artificial blur, or lighting that hides product details.

Suggested ratios: hero 4:5 or 3:4 where appropriate; workshop card 4:5; product card 1:1 or 4:5; lifestyle 3:4 or 2:3; process detail 1:1 or 3:2. Preserve important product edges, shape and scale. Workshop detail pages must show at least one clear, unambiguous finished-object photograph. Use descriptive alt text; decorative images can have empty alt.

## 9. Navigation, buttons, cards, labels, windows [P1]

**Navigation:** official logo; `Workshops`, `Shop`, `Our Story`, `What's Next`; direct anchors from the homepage and real routes for detail pages. Desktop nav approx 76–88px high; mobile compact logo + accessible menu. Optional sticky header with warm paper background; no heavy frosted glass treatment.

**Buttons:** primary dark warm brown fill with cream text, restrained 8px corner radius, height ~48–52px; secondary thin brown outline on light background; text links for tertiary actions. Avoid universal oversized pill buttons, glowing gradients and thick shadows. The main hero CTA is exactly **Explore Our Workshops**. Use meaningful labels: `Discover the Workshop`, `Explore the Collection`, `View Details`, `Have Your Say`, `Get in Touch`, `Be the First to Know`, `Keep Me Posted`.

**Cards:** photography-led, minimal framing; use light surfaces or no outer card container when possible. Workshop cards must show image, name, confirmed status and relevant verified details. Product cards show image, title, and confirmed/estimated price or `Coming Soon`. Do not create a generic dashboard of identical floating cards.

**Labels:** small paper-like tags for `Coming Soon`, `Seasonal Special`, `In Development`, etc. Labels must reflect actual status, not imply a launch or stock state that has not been confirmed.

**Windows:** retro browser/paper-window metaphors may appear as small decorative editorial elements only. Never use fake desktop operating-system windows as the main interface for booking, payment, forms or navigation. Do not add them just because a moodboard includes old software.

**Icons:** simple thin-line icons or small imperfect hand-drawn brand doodles; use consistent stroke and optical weight. Essential controls must use recognizable icons and visible text where appropriate. No random emoji icon system.

## 10. Materials, borders, shadows, highlights, texture [P1]

- Paper: warm ivory and extremely subtle grain; avoid unreadable faux-aged parchment.
- Textile: show through **real images** and occasional small pattern details; do not wallpaper every section with linen texture.
- Timber: primarily a photography element, not a wood-grain UI background.
- Metal/ceramic/glass: appear as real objects; avoid metallic-gradient buttons and faux-3D bevels.
- Borders: mostly 1px warm taupe (`--line`); use 2px selectively for special paper cards.
- Radius: images ~0–8px; content cards ~4–10px; buttons ~8px. Variation should be deliberate.
- Shadow: subtle and warm, e.g. `0 6px 20px rgba(73,53,44,.08)`; avoid floating, high-elevation material-design cards.
- Highlights: natural photographic glints and small interaction changes, not artificial neon glow.
- Background grain: optional very low contrast (~2–4% opacity) only after checking performance and readability.
- Stripes/gingham: limited to small labels, dividers, editorial backgrounds or product-associated graphics. No overwhelming full-page repeating patterns.

## 11. Motion and interaction [P1]

Motion should feel like gently turning pages and noticing small details, never like a technology demo.

- Button hover: slight tone change, optional arrow shift 2–4px, ~180–300ms.
- Image hover: subtle scale up to 1.02, ~250–350ms, without hiding information.
- Card hover: slight lift up to 2px or image change; preserve layout.
- Scroll entrance: optional fade and 12–20px vertical movement, ~400–600ms; avoid repetitive reveal on every scroll.
- Cursor: default native pointer is preferred. A tiny custom `View` hint may be tested only on nonessential desktop imagery, never on critical controls; preserve precise pointing.
- Click/tap: immediate visible pressed/focus state and clear loading/success/error feedback for forms.
- Respect `prefers-reduced-motion`; avoid scroll hijacking, auto-playing decorative particle storms, constant floating objects, long page transitions, intrusive parallax or motion-dependent content.
- All functionality must work without hover, with keyboard navigation, and with touch.

## 12. Site information architecture [P0]

**Confirmed primary sections:** `Home`, `Workshops`, `Shop`, `Our Story`, `What's Next`.

Use a long-scrolling editorial homepage plus dedicated workshop and product detail pages. Supporting contact, privacy/policies, and survey content may be separate pages or sections as appropriate.

### Home
Purpose: immediately explain the studio, establish its atmosphere, and route visitors to workshops. Hero must contain recognizable Lueur identity, **The Joy of Making**, a plain-language explanation of beginner-friendly creative workshops, authentic visual proof, and **Explore Our Workshops**.

### Workshops
Primary initial category: **Fabric Creation**. Confirmed initial themes: **fabric coasters** and **Christmas ornaments** (fixed-date seasonal special, not year-round availability). These are themes under Fabric Creation, **not** separate main craft categories. Do not add embroidery, knitting, mosaic, scrunchies, pouches or tote workshops as live offerings until confirmed; future ideas may be identified as such.

Each workshop detail: real finished-object photos, description, what guests make, simple steps, skill level, personalisation options within provided base templates, duration, price, location, inclusions, solo/friends guidance, date/status, FAQ and relevant policies. Mark unknown facts `TBC`. In prelaunch, use announcement signup, not a fake `Book Now`.

### Shop
Show **independently designed/made Lueur products**, not workshop participants' sample outcomes. Prelaunch shop is a product showcase designed to scale into real commerce later. Product detail: real photos, name, description, materials, dimensions, variations, care, availability, and confirmed price or explicitly marked estimate/`Coming Soon`. Do not activate purchase/checkout before launch approval.

### Our Story
Lead with **The Joy of Making**, the pleasure of creativity, useful everyday beauty, accessible making and personal expression. Avoid long corporate histories or founder-first bios. Prefer authentic process, materials and atmosphere photography.

### What's Next
Present future workshop ideas, product designs and potential collaborations. Distinguish `Confirmed`, `In Development`, and `Exploring`. Let visitors vote only among **Lueur-curated** ideas; customer feedback informs priority but does not replace brand design judgement. Do not present speculative plans as commitments.

### Private Events
Mention the possibility of private creative gatherings and route enquiries through approved Instagram/email channels. Specific dates, sizes, themes and pricing are individually confirmed. Do not build an elaborate private-event booking system in v1.

### Footer / supporting content
Official logo, Instagram, approved email/contact method, London context, essential navigation, privacy policy and relevant legal notices. Do not publish unapproved contact details or invented venue information.

## 13. Homepage content order [P0]

Preserve the following **information hierarchy**; adjust minor section spacing and responsive placement without reversing the journey:

1. **Hero / Home:** identity, clear studio explanation, warm authentic image, primary CTA `Explore Our Workshops`.
2. **The Experience:** beginner-friendly, creative freedom, solo-or-with-friends reassurance.
3. **Workshops:** confirmed fabric coaster and seasonal Christmas ornament themes; status and detail links.
4. **How It Works:** simple process such as choose materials → make it yours → take it home, verified against actual workshop operations.
5. **Shop:** independently designed Lueur products, clearly marked prelaunch availability.
6. **Private Events:** short invitation and contact route.
7. **Our Story:** brand philosophy and tactile visual storytelling.
8. **What's Next:** curated future concepts and optional interest poll.
9. **Stay in the Loop:** email signup and Instagram follow.
10. **Footer:** contact, navigation, legal and privacy information.

The hero must not be a cryptic full-screen moodboard. Workshops should have greater prominence than Shop at prelaunch. A visitor should not need to scroll through a long founder story before discovering what can be made.

## 14. Mobile and accessibility [P0/P1]

Mobile is a first-class experience, not a compressed desktop screenshot.

- Breakpoints are implementation choices; practical starting points: <768px mobile, 768–1023px tablet, >=1024px desktop.
- Mobile: single-column content for most sections; compact navigation; horizontal padding 20–24px; body text at least 16px; visible CTA early in the first viewport or immediately following the hero explanation.
- Do not preserve desktop overlap if it causes clipping, tiny imagery, horizontal scrolling or obstructed controls. Re-stack collages into readable sequences.
- Tap targets at least 44×44px where feasible; visible keyboard focus; logical tab and reading order; semantic HTML; descriptive form labels and errors; adequate contrast; reduced-motion support.
- No hover-only product information, hidden booking states, inaccessible carousels or auto-playing motion essential to understanding the site.
- Optimize responsive images, lazy-load noncritical assets, avoid layout shifts and maintain reasonable performance on mobile connections.

## 15. Content, data, and legal integrity [P0]

- Store workshops, products and future projects in maintainable structured content with fields for name, description, media, category, availability/status, date, duration, price, and relevant links. Unknown values remain unknown.
- Never fabricate testimonials, ratings, event attendance, venues, addresses, bookings, prices, stock, deadlines, product photos or press mentions.
- Marketing email signup requires clear purpose, appropriate consent handling, unsubscribe method and privacy disclosure. Do not automatically subscribe users merely because they participate in a poll.
- Respect applicable UK privacy, electronic-marketing, accessibility and cookie requirements; do not enable nonessential analytics/marketing cookies without the required consent.
- Never assume a workshop can be booked, a product can be bought, or a physical venue exists until owner-confirmed operational readiness.
- Use owner-approved, licensed media only. External moodboards are analytical references, not rights-cleared site assets.

## 16. Explicitly forbidden generic design patterns [P0/P1]

Do **not** introduce:
- SaaS/AI-style purple-blue gradients, neon glows, giant blurred orbs, glassmorphism cards, or glossy 3D illustrations.
- Generic centered headline + three identical oversized rounded cards repeated in every section.
- Uniform 24px-radius pill-heavy UI, large floating white cards, thick material-design shadows, or generic dashboard aesthetics.
- An all-black or predominantly dark-brown site that ignores the latest confirmed light, sunny direction.
- Excessive gold filigree, baroque ornament, luxury-hotel styling, wedding-brand styling or inaccessible high-fashion minimalism.
- Children's craft-school graphics, dominant cartoon mascots, candy-rainbow palettes or copied toy characters.
- Cafe/restaurant, travel resort or homewares-only branding that obscures the creative workshop business.
- Full-screen abstract slogan with no service explanation; fake social proof; generic smiling stock groups; fabricated venues or products.
- Intrusive animation, custom cursor that reduces usability, scroll trapping, oversized parallax, nonfunctional CTAs, or misleading purchase controls.
- Dense scrapbook layering everywhere; unreadable paper textures; arbitrary doodles with no role; decorative fonts for operational details.
- Direct reproduction of third-party moodboard images, copyrighted illustrations, logos, packaging or distinctive product designs.

## 17. Design and development acceptance tests [P0/P1]

Before merging a feature or releasing a page, verify:

1. A first-time visitor can identify the site as a **beginner-friendly creative workshop studio** within seconds.
2. The page communicates both a **beautiful finished object** and a **comfortable making experience**.
3. Solo participation is visibly welcomed and no compulsory socializing is implied.
4. Workshop/product status, price, date and booking/purchase capability are accurate.
5. `Explore Our Workshops` is the main homepage action; prelaunch signup works and has clear consent.
6. The visual system remains **bright cream, sunlit, tactile, editorial, French-inspired and gently playful**, not dark luxury, children's crafts or generic SaaS.
7. Real Lueur media is distinguished from external reference images and conceptual visuals.
8. Mobile navigation, text, forms, links, image crops and interactive targets remain usable.
9. Contrast, keyboard focus, semantic structure, reduced motion and meaningful image alt text are checked.
10. No unapproved brand rule, logo, slogan, page category or core journey has changed.

## 18. Workflow for Codex and future agents

At the start of **every** task:
1. Read `PROJECT_RULES.md` in full; read `docs/STYLE_GUIDE.md` if present.
2. Identify which P0/P1 rules apply to the requested work.
3. Check existing assets and content; do not assume files, photos, prices or operational details exist.
4. Implement the smallest coherent change that preserves the established brand and information architecture.
5. Test desktop, mobile, accessibility, content truthfulness and navigation/CTA behavior as relevant.
6. In the delivery summary, identify any assumptions, unresolved decisions and potential conflicts with this document.

**If a request would change a P0 rule or substantially alter P1 art direction, stop and request explicit owner approval.** Do not modify `PROJECT_RULES.md` itself unless the owner specifically authorizes that modification. When authorized, keep a dated entry below describing what changed and why.

## 19. Change log

- **2026-11-09 — v1.0:** Initial project constitution based on confirmed Lueur Studio brand, site strategy and latest art direction: light, sunlit French nostalgia with playful independent-brand character. Numeric tokens are implementation proposals rather than independently approved brand assets.
