export default function TagFilter({ tags, activeTag, onTagClick }) {
  return (
    <div className="tag-bar">
      <button
        onClick={() => onTagClick(null)}
        className={`tag-pill ${activeTag === null ? 'active' : ''}`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick(tag)}
          className={`tag-pill ${activeTag === tag ? 'active' : ''}`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
