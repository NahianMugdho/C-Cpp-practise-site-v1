import React, { useState, useMemo } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { LANGS, sections, isLang, items } from '../lib/data.js'
import { useSolved } from '../lib/storage.js'

export default function LangPage() {
  const { lang } = useParams()
  const [q, setQ] = useState('')
  const [solved] = useSolved(lang)
  const secs = useMemo(() => (isLang(lang) ? sections(lang) : []), [lang])
  if (!isLang(lang)) return <Navigate to="/" replace />
  const total = items(lang).length
  const done = Object.keys(solved).length
  const needle = q.trim().toLowerCase()
  const filtered = secs
    .map((s) => ({
      ...s,
      items: s.items.filter(
        (i) => !needle || i.name.toLowerCase().includes(needle) || i.no.includes(needle) || i.id.includes(needle)
      ),
    }))
    .filter((s) => s.items.length)

  return (
    <>
      <div className="page-head">
        <div>
          <span className={`pill pill-${lang}`}>{LANGS[lang].label}</span>
          <h1>{LANGS[lang].full}</h1>
          <p className="muted">প্র্যাক্টিস সম্পন্ন: {done}/{total}</p>
        </div>
        <div className="seg">
          <Link className={lang === 'c' ? 'on' : ''} to="/c">C</Link>
          <Link className={lang === 'cpp' ? 'on' : ''} to="/cpp">C++</Link>
        </div>
      </div>
      <div className="bar"><i style={{ width: `${(done / total) * 100}%` }} /></div>

      <div className="toolbar">
        <input
          className="input"
          type="search"
          placeholder="প্রোগ্রাম খোঁজো… (যেমন: prime, stack, ১.৪)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <div className="chips">
        {secs.map((s) => (
          <a key={s.id} className="chip" href={`#sec-${s.id}`} onClick={(e) => {
            e.preventDefault()
            document.getElementById(`sec-${s.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}>
            {s.no}. {s.title.split('(')[0].trim()}
          </a>
        ))}
      </div>

      {filtered.length === 0 && <p className="muted">কিছু পাওয়া যায়নি।</p>}
      {filtered.map((s) => (
        <section key={s.id} id={`sec-${s.id}`} className="sec">
          <h2>
            <span className="sec-no">{s.no}</span> {s.title}
          </h2>
          <ul className="plist">
            {s.items.map((i) => (
              <li key={i.id} className={solved[i.id] ? 'done' : ''}>
                <Link className="pname" to={`/${lang}/read/${i.id}`}>
                  <span className="pno">{i.no}</span>
                  <span>{i.name}</span>
                  {solved[i.id] && <span className="tick" title="প্র্যাক্টিস সম্পন্ন">✓</span>}
                </Link>
                <span className="pact">
                  <Link className="btn btn-sm" to={`/${lang}/read/${i.id}`}>পড়ো</Link>
                  <Link className="btn btn-sm btn-primary" to={`/${lang}/practice/${i.id}`}>প্র্যাক্টিস</Link>
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}
