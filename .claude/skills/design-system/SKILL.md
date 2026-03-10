---
name: design-system
description: Apply or rework a brand aesthetic to the site based on a reference brand or style direction. Use when asked to "make it look like...", "style it like...", "apply X brand aesthetic", or "redesign the look and feel". Triggers on brand names, aesthetic descriptions, or design direction requests.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, WebFetch
argument-hint: "<brand-or-aesthetic> [specific-direction]"
---

# Design System — Brand Aesthetic Application

Rework the site's visual identity to match a reference brand or aesthetic direction.

## Process

### 1. Research the Reference

Parse `$ARGUMENTS` for the target brand or aesthetic (e.g. "Dishoom", "Aesop", "Japanese minimalism", "1920s art deco").

Identify the brand's core design characteristics. For known brands, draw on:
- **Colour temperature** — warm/cool, muted/saturated, light/dark
- **Typography style** — serif/sans, display weights, spacing conventions
- **Decorative language** — ornamental, minimal, geometric, organic
- **Spatial philosophy** — dense/airy, symmetric/asymmetric
- **Interaction feel** — subtle/pronounced, fast/slow, playful/refined
- **Copy tone** — formal/casual, warm/clinical, verbose/terse

### 2. Audit the Current System

Read the existing design tokens and components:

```bash
# Find the CSS/theme source
glob: src/**/*.css, tailwind.config.*, src/**/theme.*

# Find all components
glob: src/components/**/*.{jsx,tsx,vue,svelte}

# Find layout and page files
glob: src/{pages,layouts,app}/**/*
```

Map what exists:
- Colour palette (variable names, hex values, usage)
- Typography (fonts, sizes, weights, line-heights per breakpoint)
- Spacing and layout (max-widths, padding, gaps)
- Decorative elements (borders, shadows, dividers, textures)
- Animations and transitions (durations, easing, properties)
- Copy and microcopy (headers, taglines, empty states, CTAs)

### 3. Design the New System

Create a mapping from the current system to the target aesthetic:

**Colour palette:**
- Choose 2-3 primary colours that define the brand feel
- Build 3-4 supporting/neutral tones
- Define semantic usage: background, text, accent, hover, muted, border
- Ensure sufficient contrast ratios (4.5:1 minimum for body text)

**Typography:**
- Select typefaces (Google Fonts preferred for web). Maximum 2 families.
- Define the full hierarchy: display, h1-h3, body, small, label
- Set letter-spacing and text-transform conventions
- Define mobile and desktop sizes for every level

**Decorative elements:**
- Design dividers, ornaments, or borders that match the brand language
- Define card/container treatment (borders, shadows, backgrounds)
- Add texture overlays if the brand calls for it

**Motion:**
- Set transition timing that matches the brand feel (refined = slower ease-out, playful = spring, minimal = fast linear)
- Define entrance animations if appropriate
- Set hover state behaviour

**Copy tone:**
- Rewrite all microcopy (tagline, footer, empty states, error pages) to match the brand voice
- Keep it short — a few words of copy set more tone than any CSS change

### 4. Implement

Apply changes in this order:

1. **Update `index.html`** — Add new font imports (Google Fonts `<link>` tags)
2. **Update CSS theme tokens** — Rewrite the colour palette, font variables, and any custom properties
3. **Update CSS component styles** — Rework each section: header, hero, cards, tags, prose, footer, decorative elements. Add responsive breakpoints for every size change.
4. **Update components** — Change copy, adjust class names if structural changes are needed
5. **Update layout** — Adjust max-widths, padding scale, spacing if the brand calls for more/less breathing room

### 5. Verify

- Run `npx vite build` to confirm no errors
- Check that all responsive breakpoints are in place (mobile, tablet, desktop)
- Verify touch targets are at least 44px on mobile
- Ensure no inline styles for values that should be responsive

### 6. Document

If `brand.md` exists, update it to reflect the new design system. If it doesn't exist, offer to generate one using `/brand-guide`.

## Design Principles

Regardless of the target brand:

- **Warmth comes from colour temperature and copy, not from decoration.** A warm site can be minimal.
- **Typography does 80% of the work.** Get the fonts, sizes, and spacing right before touching anything else.
- **Restraint over excess.** Two well-chosen colours beat six mediocre ones. One good font beats three clashing ones.
- **Motion should feel inevitable, not decorative.** Every animation should have a purpose — drawing attention, providing feedback, or creating continuity.
- **Mobile is not a scaled-down desktop.** Rethink spacing, font sizes, and touch targets at every breakpoint.

## Common Brand Mappings

Quick reference for frequently requested aesthetics:

| Brand/Style | Colour Temp | Type | Decoration | Space | Motion |
|---|---|---|---|---|---|
| Dishoom | Warm cream/burgundy/gold | Serif display + humanist sans | Art deco corners, gold dividers | Generous | Slow fade-in |
| Aesop | Cool sand/brown/black | Mono serif (Suisse) | Almost none | Very generous | Minimal |
| Muji | Neutral warm white/grey | Clean sans (system) | None | Airy, grid-based | None |
| Art Deco | Gold/black/cream | Geometric display serif | Geometric borders, fan motifs | Symmetric | Subtle |
| Scandi | White/pale wood/black | Rounded sans | Thin lines only | Open, asymmetric | Gentle |
| Japanese | Off-white/charcoal/red accent | Mixed serif + sans | Minimal, ink-brush touches | Asymmetric, generous | Slow, deliberate |

## Do Not

- Use more than 2 font families
- Add decorative elements that don't match the brand language
- Forget mobile breakpoints — every font-size, padding, and gap needs a mobile value
- Change functionality or routing — this skill is visual only
- Leave the old brand guide if one exists — update or replace it
