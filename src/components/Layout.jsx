import React from 'react'
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'
import { useTheme } from '../lib/storage.js'

export default function Layout() {
  const [theme, setTheme] = useTheme()
  const { pathname } = useLocation()
  React.useEffect(() => window.scrollTo(0, 0), [pathname])
  const next = { auto: 'light', light: 'dark', dark: 'auto' }
  const icon = { auto: '🌓', light: '☀️', dark: '🌙' }
  return (
    <>
      <header className="top">
        <div className="wrap top-in">
          <Link to="/" className="brand">
            <span className="brand-mark">{'{ }'}</span>
            <span>কোড নোট</span>
          </Link>
          <nav className="nav">
            <NavLink to="/" end>হোম</NavLink>
            <NavLink to="/c">C</NavLink>
            <NavLink to="/cpp">C++</NavLink>
            <NavLink to="/cheatsheet/c">চিটশিট</NavLink>
          </nav>
          <button className="btn btn-ghost btn-sm theme" onClick={() => setTheme(next[theme])} title={`থিম: ${theme}`}>
            {icon[theme]}
          </button>
        </div>
      </header>
      {/* <main className="wrap main">
        <Outlet />
      </main> */}
      <main className="wrap main">
  <Outlet key={pathname} />
</main>
      <footer className="foot">
        <div className="wrap">C ও C++ এক্সাম নোট · কোড পড়ো, নিজে লেখো, আউটপুট মেলাও</div>
      </footer>
    </>
  )
}
