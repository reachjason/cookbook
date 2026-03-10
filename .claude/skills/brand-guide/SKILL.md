---
name: brand-guide
description: Generate or update a brand guide (brand.md) from the project's existing code, CSS tokens, typography, components, and copy. Use when asked to create a brand guide, document the design system, or capture the visual identity.
allowed-tools: Read, Glob, Grep, Write, Edit
argument-hint: "[output-filename]"
---

# Brand Guide Generator

Generate a comprehensive brand guide by auditing the project's codebase. Output as a markdown file.

## Process

1. **Audit the design tokens.** Read the CSS/Tailwind theme configuration to extract:
   - Full colour palette with hex values, CSS variable names, and intended usage
   - Typography: font families, weights, sizes at each breakpoint, line heights, letter-spacing
   - Spacing scale and layout constraints (max-widths, padding progressions)

2. **Audit the components.** Read all component files to identify:
   - Decorative elements (dividers, ornaments, borders, textures)
   - Interaction patterns (hover states, transitions, animations with timing)
   - Card/container patterns and their visual treatment

3. **Audit the copy.** Read all pages and layout files to capture:
   - Voice and tone patterns from headings, taglines, empty states, error pages
   - Do/don't examples drawn from actual copy in the codebase
   - The emotional register — is it warm, clinical, playful, formal?

4. **Write the brand guide.** Structure the output as:

```
# [Project Name] — Brand Guide

## Brand Essence
One paragraph capturing the soul of the project.

## Voice & Tone
- Core principles (3-4 bullet points)
- Do / Don't examples from actual codebase copy

## Colour Palette
### Primary
Table: Name | Hex | CSS Variable | Usage
### Secondary
Table: Name | Hex | CSS Variable | Usage
### Supporting
Table: Name | Hex | CSS Variable | Usage

## Typography
### Typefaces
Description of each font and its role.
### Hierarchy
Table: Element | Font | Weight | Size (mobile) | Size (desktop) | Style notes

## Decorative Elements
Describe dividers, borders, textures, ornaments with specifics.

## Spacing & Layout
Max-widths, padding scale, content width, breathing room principles.

## Interaction & Motion
Animations, hover states, transitions with exact timing values.

## Imagery (if applicable)
Photography direction, colour grading, composition guidance.

## What This Brand Is Not
4-5 contrast statements to prevent drift.
```

5. **Cross-reference.** Verify every colour, font size, and animation value in the guide against the actual CSS. Do not invent values — only document what exists in the code.

## Output

Write to `$ARGUMENTS` if provided, otherwise `brand.md` in the project root. If the file already exists, read it first and update it to reflect the current state of the codebase rather than rewriting from scratch.

## Rules

- Every value in the guide must trace back to a line in the codebase
- Use the project's own language and copy style when writing the prose sections
- Include mobile and desktop values wherever breakpoints exist
- Do not add aspirational content — document what is, not what could be
