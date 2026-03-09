import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const recipesDir = path.resolve('recipes')
const outputPath = path.resolve('src/data/recipes.json')

const files = fs.readdirSync(recipesDir).filter(
  (f) => f.endsWith('.md') && f !== 'TEMPLATE.md'
)

const recipes = files.map((file) => {
  const raw = fs.readFileSync(path.join(recipesDir, file), 'utf-8')
  const { data, content } = matter(raw)
  const slug = file.replace(/\.md$/, '')
  const html = marked(content)

  return {
    slug,
    meta: data,
    html,
  }
})

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, JSON.stringify(recipes, null, 2))
console.log(`Built ${recipes.length} recipe(s) → src/data/recipes.json`)
