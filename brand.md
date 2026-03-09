# The Cookbook — Brand Guide

## Brand Essence

The Cookbook is a personal recipe collection inspired by the warmth of Dishoom's Bombay cafe aesthetic — nostalgic, generous, and deeply inviting. Every design choice should feel like stepping into a well-loved kitchen: warm lighting, worn wood, handwritten notes tucked into the pages of a family recipe book.

The tone is hospitable, never fussy. We write like we cook — with care, warmth, and the quiet confidence of someone who has made this dish a hundred times.

---

## Voice & Tone

- **Warm and personal** — "From our kitchen to yours", not "Browse our recipe database"
- **Understated confidence** — no exclamation marks, no hard sells, no clickbait
- **Storytelling over instruction** — recipes have context: where they came from, why they matter
- **Hospitable** — the reader is always a welcome guest at the table

### Do

- "Recipes gathered from kitchens, travels, and the people who made them feel like home."
- "Made with love and a well-seasoned pan"
- "This one seems to have slipped off the table."

### Don't

- "Check out our amazing recipes!"
- "Click here to get started"
- "Error 404: Page not found"

---

## Colour Palette

All colours lean warm — no cool greys, no pure whites, no blue-tinted shadows.

### Primary

| Name         | Hex       | CSS Variable          | Usage                          |
|--------------|-----------|-----------------------|--------------------------------|
| Ink          | `#1c1917` | `--color-ink`         | Primary text, headings         |
| Cream        | `#f5efe0` | `--color-cream`       | Page background                |
| Burgundy     | `#7c2d12` | `--color-burgundy`    | Accent, active states, links   |

### Secondary

| Name         | Hex       | CSS Variable          | Usage                          |
|--------------|-----------|-----------------------|--------------------------------|
| Gold         | `#b45309` | `--color-gold`        | Decorative elements, ornaments |
| Gold Muted   | `#c4956a` | `--color-gold-muted`  | Dividers, borders, subtle accents |
| Stone        | `#8c7e6a` | `--color-stone`       | Secondary text, metadata       |

### Supporting

| Name         | Hex       | CSS Variable          | Usage                          |
|--------------|-----------|-----------------------|--------------------------------|
| Cream Light  | `#faf7f0` | `--color-cream-light` | Hover backgrounds, subtle fills |
| Cream Dark   | `#e8dfce` | `--color-cream-dark`  | Borders, dividers              |
| Ink Light    | `#44403c` | `--color-ink-light`   | Body text, prose               |
| Ink Muted    | `#78716c` | `--color-ink-muted`   | Labels, tertiary text          |
| Stone Light  | `#a89a86` | `--color-stone-light` | Tags, lightest text            |
| Warm White   | `#fefcf8` | `--color-warm-white`  | Card hover background          |
| Burgundy Deep| `#5c1a08` | `--color-burgundy-deep` | Reserved for dark contexts   |
| Burgundy Hover| `#9a3412`| `--color-burgundy-hover` | Link/button hover states    |
| Gold Light   | `#d4a574` | `--color-gold-light`  | Reserved for lighter accents   |

---

## Typography

### Typefaces

- **Display / Headings:** Playfair Display (serif) — elegant, high-contrast, evokes vintage print. Used for all titles, section headings, and decorative text.
- **Body:** Gill Sans (sans-serif) — clean, humanist, warm. Falls back through Gill Sans MT, Helvetica Neue, Helvetica, Arial.

### Hierarchy

| Element              | Font            | Weight | Size (mobile) | Size (desktop) | Style         |
|----------------------|-----------------|--------|---------------|----------------|---------------|
| Site title           | Playfair Display| 400    | 1.35rem       | 1.75rem        | Uppercase, 0.18em tracking |
| Hero title           | Playfair Display| 400    | 2.25rem       | 4rem           | Uppercase, 0.08–0.1em tracking |
| Recipe page title    | Playfair Display| 400    | 2rem          | 3.25rem        | Uppercase, 0.06–0.08em tracking |
| Section heading (h2) | Playfair Display| 400    | 1.125rem      | 1.25rem        | Uppercase, 0.12–0.15em tracking |
| Sub-heading (h3)     | Playfair Display| 600    | 1rem          | 1.0625rem      | Italic |
| Body prose           | Gill Sans       | 400    | 1rem          | 1.0625rem      | 1.8–1.85 line height |
| Tagline / intro      | Playfair Display| 400    | 1rem          | 1.125rem       | Italic, stone colour |
| Metadata             | Gill Sans       | 400    | 0.75rem       | 0.8125rem      | 0.04em tracking |
| Tags / labels        | Gill Sans       | 400    | 0.625rem      | 0.6875rem      | Uppercase, 0.08–0.12em tracking |

### Principles

- Headings are always **uppercase** with generous letter-spacing — this creates the vintage print / art deco feel
- Body text is never uppercase
- Italic serif is used for taglines, subtitles, and introductory recipe paragraphs — it creates warmth and intimacy
- Tags and labels use small uppercase sans-serif — functional and unobtrusive

---

## Decorative Elements

### Dividers

Horizontal rules use a fading gold gradient (`transparent → gold-muted → transparent`) with a centered diamond ornament (`◆ ◆ ◆`) in gold. They provide breathing room between sections without hard visual breaks.

### Art Deco Corners

Recipe cards feature subtle corner flourishes — thin gold lines at top-left and bottom-right corners (1.5px, 16px on mobile, 24px on desktop). These brighten on hover, reinforcing the art deco motif.

### Paper Texture

A fixed, low-opacity (3%) SVG noise overlay sits across the entire page, simulating the feel of textured paper stock.

---

## Spacing & Layout

- **Max content width:** 56rem (max-w-4xl)
- **Side padding:** 1.25rem mobile / 2rem tablet / 3rem desktop
- **Content should always feel centered and generously spaced** — never cramped, never flush to edges
- **Prose max-width:** 40rem, centered within the container — optimal reading line length
- The design breathes. When in doubt, add more space, not less.

---

## Interaction & Motion

- **Page transitions:** Gentle fade-in (0.6–0.8s ease-out)
- **Card entrance:** Staggered fade-in-up (0.5s ease-out, 80ms delay between cards)
- **Hover states:** Cards lift 2px with a warm shadow; titles shift to burgundy; deco corners brighten
- **Links:** Burgundy with underline, shift to lighter burgundy on hover
- **Tag pills:** Border highlight on hover; burgundy fill when active
- All transitions use ease-out timing — nothing should feel abrupt

---

## Imagery (Future)

When photography is added:
- Warm, natural lighting — no flash, no clinical studio shots
- Overhead or 45-degree angles preferred
- Muted, warm colour grading consistent with the cream/gold palette
- Food should look home-cooked, not styled — a bit of mess is welcome
- Linen napkins, worn wood surfaces, brass utensils over stainless steel

---

## What This Brand Is Not

- **Not clinical or minimal** — we are warm, not cold
- **Not loud or playful** — we are confident, not eager
- **Not rustic-kitschy** — we are refined, not shabby
- **Not modern-tech** — we are timeless, not trendy

The closest reference point is a well-kept notebook in a Bombay cafe: slightly faded, deeply personal, and full of things worth passing on.
