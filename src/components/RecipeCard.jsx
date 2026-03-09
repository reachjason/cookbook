import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe, index = 0 }) {
  const { slug, meta } = recipe

  return (
    <Link
      to={`/recipe/${slug}`}
      className="recipe-card deco-border animate-in"
      style={{ animationDelay: `${0.1 + index * 0.08}s` }}
    >
      <h3 className="recipe-card-title">{meta.title}</h3>

      <div className="recipe-card-meta">
        {meta.difficulty && <span className="capitalize">{meta.difficulty}</span>}
        {meta.prep_time && <span>{meta.prep_time} prep</span>}
        {meta.cook_time && <span>{meta.cook_time} cook</span>}
        {meta.servings && <span>Serves {meta.servings}</span>}
      </div>

      <div className="recipe-card-tags">
        {meta.tags?.map((tag) => (
          <span key={tag} className="recipe-card-tag">{tag}</span>
        ))}
      </div>
    </Link>
  )
}
