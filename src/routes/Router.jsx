import { createBrowserRouter, Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import Home from '../pages/Home.jsx'
import LangPage from '../pages/Lang.jsx'
import Read from '../pages/Read.jsx'
import Practice from '../pages/Practice.jsx'
import Cheat from '../pages/Cheat.jsx'

// GitHub Pages প্রজেক্ট সাইটে URL হয় /repo-name/cpp/... — তাই repo-নাম নিজে থেকে বের করে basename বানানো হয়
// (নিজের ডোমেইন বা user.github.io রুটে হলে basename খালি থাকে)
const ROUTE_ROOTS = ['c', 'cpp', 'cheatsheet']
const first = window.location.pathname.split('/').filter(Boolean)[0]
const basename = first && !ROUTE_ROOTS.includes(first) ? `/${first}` : ''

const NotFound = () => (
  <div className="card" style={{ margin: '40px auto', maxWidth: 480 }}>
    <h3>পেজটি পাওয়া যায়নি</h3>
    <p className="muted">লিংকটা ঠিক আছে কিনা দেখো।</p>
    <Link className="btn btn-primary" to="/">হোমে যাও</Link>
  </div>
)

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/:lang', element: <LangPage /> },
        { path: '/:lang/read/:id', element: <Read /> },
        { path: '/:lang/practice/:id', element: <Practice /> },
        { path: '/cheatsheet/:lang', element: <Cheat /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  { basename }
)

export default router
