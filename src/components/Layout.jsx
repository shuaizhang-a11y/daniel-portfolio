import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  ['/work', 'Work'],
  ['/computational-design', 'Computational Design'],
  ['/ai-research', 'AI + Research'],
  ['/about', 'About'],
  ['/awards', 'Awards + Press'],
  ['/contact', 'Contact'],
]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="site-shell">
      <header className="header">
        <Link className="brand" to="/" aria-label="Daniel Zhang home">
          <span>DZ</span>
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>
        <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
          {links.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div><span className="eyebrow">Daniel Zhang</span><p>Architecture, computation<br />and artificial intelligence.</p></div>
        <div className="footer-links"><Link to="/work">Selected work</Link><Link to="/about">Profile</Link><Link to="/contact">Start a conversation</Link></div>
        <div className="footer-meta"><span>Melbourne, Australia</span><span>© {new Date().getFullYear()}</span></div>
      </footer>
    </div>
  )
}
