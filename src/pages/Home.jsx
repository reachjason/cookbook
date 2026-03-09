import { useState, useMemo } from 'react'
import recipes from '../data/recipes.json'
import TagFilter from '../components/TagFilter'
import RecipeCard from '../components/RecipeCard'

export default function Home() {
  const [activeTag, setActiveTag] = useState(null)

  const allTags = useMemo(() => {
    const tagSet = new Set()
    recipes.forEach((r) => r.meta.tags?.forEach((t) => tagSet.add(t)))
    return [...tagSet].sort()
  }, [])

  const filtered = activeTag
    ? recipes.filter((r) => r.meta.tags?.includes(activeTag))
    : recipes

  return (
    <div>
      <div className="hero">
        <h2 className="hero-title">Welcome to<br />the Table</h2>
        <p className="hero-subtitle">
          Recipes gathered from kitchens, travels, and the people
          who made them feel like home.
        </p>
        <div className="divider hero-divider">
          <span className="divider-ornament">◆ ◆ ◆</span>
        </div>
      </div>

      <TagFilter tags={allTags} activeTag={activeTag} onTagClick={setActiveTag} />

      {filtered.length > 0 ? (
        <div className="recipe-grid">
          {filtered.map((recipe, i) => (
            <RecipeCard key={recipe.slug} recipe={recipe} index={i} />
          ))}
        </div>
      ) : (
        <p className="text-center py-16" style={{ color: 'var(--color-stone)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
          No recipes found for this tag yet.
        </p>
      )}
    </div>
  )
}
