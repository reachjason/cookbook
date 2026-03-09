import { useParams, Link } from 'react-router-dom'
import recipes from '../data/recipes.json'

export default function Recipe() {
  const { slug } = useParams()
  const recipe = recipes.find((r) => r.slug === slug)

  if (!recipe) {
    return (
      <div className="hero">
        <h2 className="hero-title">Recipe Not Found</h2>
        <p className="hero-subtitle">
          This one seems to have slipped off the table.
        </p>
        <Link to="/" className="recipe-back" style={{ marginTop: '2rem', display: 'inline-block' }}>
          ← Back to all recipes
        </Link>
      </div>
    )
  }

  const { meta, html } = recipe

  return (
    <article className="animate-fade recipe-article">
      <div className="recipe-back-row">
        <Link to="/" className="recipe-back">
          ← All Recipes
        </Link>
      </div>

      <header className="recipe-header">
        <h1 className="recipe-page-title">{meta.title}</h1>

        <div className="recipe-meta-bar">
          {meta.difficulty && (
            <span><strong>Difficulty</strong> {meta.difficulty}</span>
          )}
          {meta.prep_time && (
            <span><strong>Prep</strong> {meta.prep_time}</span>
          )}
          {meta.cook_time && (
            <span><strong>Cook</strong> {meta.cook_time}</span>
          )}
          {meta.servings && (
            <span><strong>Serves</strong> {meta.servings}</span>
          )}
          {meta.source && (
            <span><strong>Source</strong> {meta.source}</span>
          )}
        </div>

        <div className="recipe-tag-row">
          {meta.tags?.map((tag) => (
            <Link key={tag} to={`/?tag=${tag}`} className="recipe-tag">
              {tag}
            </Link>
          ))}
        </div>
      </header>

      <div className="divider">
        <span className="divider-ornament">◆ ◆ ◆</span>
      </div>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  )
}
