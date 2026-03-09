import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="site-header">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          <Link to="/" className="no-underline">
            <h1 className="site-title">The Cookbook</h1>
          </Link>
          <span className="site-tagline hidden sm:block">
            From our kitchen to yours
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        {children}
      </main>

      <footer className="site-footer">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="divider">
            <span className="divider-ornament">◆ ◆ ◆</span>
          </div>
          <p>Made with love and a well-seasoned pan</p>
        </div>
      </footer>
    </div>
  )
}
