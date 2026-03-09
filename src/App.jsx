import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Recipe from './pages/Recipe'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        <Route path="*" element={
          <div className="hero">
            <h2 className="hero-title">Lost in the Kitchen</h2>
            <p className="hero-subtitle">
              This page doesn't seem to exist. Shall we head back?
            </p>
            <a href="/" className="recipe-back" style={{ marginTop: '2rem', display: 'inline-block' }}>
              ← Back to recipes
            </a>
          </div>
        } />
      </Routes>
    </Layout>
  )
}
