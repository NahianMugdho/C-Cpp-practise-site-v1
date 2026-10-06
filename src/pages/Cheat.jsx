import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { cheat, isLang } from '../lib/data.js'

function Block({ b }) {
  if (b.type === 'h') return <h3 className="ch">{b.text}</h3>
  if (b.type === 'p') return <p>{b.text}</p>
  const [head, ...rows] = b.rows
  return (
    <div className="tbl-wrap">
      <table className="tbl">
        <thead>
          <tr>{head.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Cheat() {
  const { lang } = useParams()
  if (!isLang(lang)) return <Navigate to="/cheatsheet/c" replace />
  return (
    <>
      <div className="page-head">
        <div>
          <h1>চিটশিট</h1>
          <p className="muted">পরীক্ষার আগের দ্রুত রিভিশন</p>
        </div>
        <div className="seg">
          <Link className={lang === 'c' ? 'on' : ''} to="/cheatsheet/c">C রিভিশন</Link>
          <Link className={lang === 'cpp' ? 'on' : ''} to="/cheatsheet/cpp">C → C++</Link>
        </div>
      </div>
      {cheat(lang).map((sec, i) => (
        <section key={i} className="sec">
          <h2>{sec.title}</h2>
          {sec.blocks.map((b, j) => <Block key={j} b={b} />)}
        </section>
      ))}
    </>
  )
}
