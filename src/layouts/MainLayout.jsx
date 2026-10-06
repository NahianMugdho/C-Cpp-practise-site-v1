import React from 'react'
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'
import { useTheme } from '../lib/storage.js'

// কোনো কারণে (এক্সটেনশন/ট্রান্সলেট ইত্যাদি) পেজ ভেঙে গেলে সাদা স্ক্রিনের বদলে বাটন দেখাবে
class Boundary extends React.Component {
  state = { err: false }
  static getDerivedStateFromError() {
    return { err: true }
  }
  componentDidUpdate(prev) {
    if (prev.resetKey !== this.props.resetKey && this.state.err) this.setState({ err: false })
  }
  render() {
    if (!this.state.err) return this.props.children
    return (
      <div className="card">
        <h3>পেজটি লোড হয়নি</h3>
        <p className="muted">ব্রাউজার ট্রান্সলেট/এক্সটেনশন বন্ধ করে আবার চেষ্টা করো।</p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>রিলোড</button>
      </div>
    )
  }
}

export default function MainLayout() {
  const [theme, setTheme] = useTheme()
  const { pathname } = useLocation()
  React.useEffect(() => {
    // {} দিয়ে লেখা জরুরি: effect থেকে কিছু return করলে React সেটাকে cleanup ফাংশন ভাবে
    try {
      window.scrollTo(0, 0)
    } catch {
      /* ignore */
    }
  }, [pathname])
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
      <main className="wrap main" key={pathname}>
        <Boundary resetKey={pathname}>
          <Outlet />
        </Boundary>
      </main>
      <footer className="foot">
        <div className="wrap">C ও C++ এক্সাম নোট · কোড পড়ো, নিজে লেখো, আউটপুট মেলাও</div>
      </footer>
    </>
  )
}
