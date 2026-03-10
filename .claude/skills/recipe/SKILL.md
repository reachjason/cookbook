---
name: recipe
description: Write a new recipe for the cookbook in an elevated, Michelin-star home-cook style. Use when asked to add a recipe, write a recipe, or given a dish name to add. Triggers on "add a recipe for...", "give me the recipe for...", "write up...".
allowed-tools: Read, Write, Bash, Glob, WebFetch
argument-hint: "<dish-name> [reference-url]"
---

# Recipe Writer

Write a new recipe and add it to the cookbook.

## Voice & Style

Read `brand.md` if it exists for the full brand guide. The core writing principles:

- **Confident and opinionated.** Write like someone who has made this dish a hundred times. State what works and why. "This is non-negotiable" is better than "you might want to try".
- **Technique over novelty.** Explain the why behind each step. Every instruction should teach something — the reader should understand the food better after reading it.
- **Warm but not chatty.** No exclamation marks, no "yummy!", no "let's get started!". The warmth comes from sharing knowledge generously, not from enthusiasm.
- **Headnotes that tell a story.** The intro paragraph should set context: where the dish comes from, what makes this version different, what the key insight is. It should make someone want to cook it.
- **Notes that are genuinely useful.** Each note should contain a specific, actionable insight — ingredient substitutions, make-ahead strategy, the one mistake that ruins the dish. No filler.

## Process

1. **Parse the request.** Extract the dish name from `$ARGUMENTS`. If a URL is provided, fetch it with WebFetch to understand the reference recipe's approach — but never copy it. Use it as inspiration for technique and ratios only.

2. **Read the existing recipes.** Glob `recipes/*.md` and read 1-2 to match the established format, frontmatter structure, and level of detail.

3. **Write the recipe.** Create a new markdown file at `recipes/<slug>.md` with this structure:

```yaml
---
title: "Recipe Title"
tags: [category, cuisine, protein, method, dietary]
servings: N
prep_time: "X min"
cook_time: "Y min"
difficulty: easy | medium | hard
source: "original"
date_added: YYYY-MM-DD
---
```

Then the markdown body:

```markdown
# Recipe Title

[Headnote: 2-4 sentences. What this dish is, what makes this version special, the key technique.]

## Ingredients

### [Component Group]
- ingredient with specific quantity and form (e.g. "finely sliced", "grated on a microplane")

[Repeat for each component group]

## Instructions

1. **Bold action verb.** Detailed instruction with timing, visual cues, and the reason behind the technique.

[Continue numbered steps]

## Notes

- **Bold topic.** Specific, opinionated, actionable note.
```

4. **Slug conventions.** Use lowercase, hyphenated: `coconut-prawn-curry.md`, `palak-paneer.md`. No numbers, no dates in the filename.

5. **Tags.** Include: one category (main, appetizer, side, dessert, snack), cuisine, key protein/ingredient, cooking method if notable, dietary flags (vegetarian, vegan, gluten-free). Keep tags lowercase and hyphenated.

6. **Build.** Run `node scripts/build-recipes.js` to regenerate the recipe data.

7. **Confirm.** Tell the user the recipe is ready and offer to commit and push.

## Writing Checklist

- [ ] Headnote tells a story and names the key technique
- [ ] Ingredients are grouped by component with specific quantities and prep instructions
- [ ] Every step has a bold verb opener, timing, and visual cues
- [ ] Steps explain WHY, not just what (e.g. "ice bath stops the cooking and locks in colour")
- [ ] Notes are genuinely useful — substitutions, make-ahead, the one mistake to avoid
- [ ] No exclamation marks, no "enjoy!", no "serve and dig in!"
- [ ] Difficulty is honest: easy (one-pot, forgiving), medium (some technique), hard (timing-critical, multi-component)
- [ ] Today's date in frontmatter

## Do Not

- Copy recipes from reference URLs — use them for technique inspiration only
- Use vague quantities ("some", "a bit of", "to taste" as the only measurement)
- Write generic steps ("cook until done") — give specific times and visual cues
- Add steps that don't teach anything
- Use emoji or casual internet-recipe language
