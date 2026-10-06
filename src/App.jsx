// import React from 'react'
// import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
// import Layout from './components/Layout.jsx'
// import Home from './pages/Home.jsx'
// import LangPage from './pages/Lang.jsx'
// import Read from './pages/Read.jsx'
// import Practice from './pages/Practice.jsx'
// import Cheat from './pages/Cheat.jsx'

// // HashRouter: GitHub Pages-এ রিফ্রেশ দিলেও 404 আসে না
// export default function App() {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path=":lang" element={<LangPage />} />
//           <Route path=":lang/read/:id" element={<Read />} />
//           <Route path=":lang/practice/:id" element={<Practice />} />
//           <Route path="cheatsheet/:lang" element={<Cheat />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Route>
//       </Routes>
//     </HashRouter>
//   )
// }
// App.jsx
import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import LangPage from './pages/Lang.jsx'
import Read from './pages/Read.jsx'
import Practice from './pages/Practice.jsx'
import Cheat from './pages/Cheat.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Specific route গুলো আগে রাখুন */}
          <Route path="cheatsheet/:lang" element={<Cheat />} />
          
          {/* Dynamic sub-routes */}
          <Route path=":lang/read/:id" element={<Read />} />
          <Route path=":lang/practice/:id" element={<Practice />} />
          
          {/* Dynamic top-level route */}
          <Route path=":lang" element={<LangPage />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}