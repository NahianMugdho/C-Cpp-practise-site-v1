import React from 'react'
import { Link } from 'react-router-dom'
import { LANGS, sections, items, TOTAL } from '../lib/data.js'
import { useSolved } from '../lib/storage.js'

function LangCard({ lang }) {
  const [solved] = useSolved(lang)
  const done = Object.keys(solved).length
  const secs = sections(lang)
  return (
    <div className={`card lang-card lang-${lang}`}>
      <div className="lang-badge">{LANGS[lang].label}</div>
      <h2>{LANGS[lang].full}</h2>
      <p className="muted">
        {secs.length}টি অধ্যায় · {items(lang).length}টি প্রোগ্রাম · বাংলা কমেন্ট ও মনে রাখার কৌশল
      </p>
      <div className="bar"><i style={{ width: `${(done / TOTAL) * 100}%` }} /></div>
      <p className="small muted">প্র্যাক্টিস করেছ: {done}/{TOTAL}</p>
      <div className="row">
        <Link className="btn btn-primary" to={`/${lang}`}>শুরু করো →</Link>
        <Link className="btn" to={`/${lang}/read/1-1`}>প্রথম প্রোগ্রাম</Link>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">এক্সাম প্রস্তুতি</p>
        <h1>
          কোড পড়ো। <em>নিজে লেখো।</em>
          <br />
          আউটপুট মেলাও।
        </h1>
        <p className="lead">
          C ও C++ — বেসিক থেকে ডেটা স্ট্রাকচার পর্যন্ত ৯০টি করে প্রোগ্রাম। প্রতিটিতে বাংলা কমেন্ট, মনে রাখার কৌশল আর যাচাই করা আউটপুট।
        </p>
      </section>

      <section className="grid2">
        <LangCard lang="c" />
        <LangCard lang="cpp" />
      </section>

      <section className="modes">
        <div className="card">
          <div className="mode-ico">📖</div>
          <h3>পড়ার মোড</h3>
          <p className="muted">
            কোড, কৌশল ও আউটপুট একসাথে। C আর C++ পাশাপাশি রেখে তুলনা করো।
          </p>
        </div>
        <div className="card">
          <div className="mode-ico">⌨️</div>
          <h3>প্র্যাক্টিস মোড</h3>
          <p className="muted">
            শুধু নাম আর নমুনা আউটপুট দেখে নিজে কোড লেখো। চালিয়ে আউটপুট মেলাও — মিললে ✓ চিহ্ন পাবে।
          </p>
        </div>
        <div className="card">
          <div className="mode-ico">🧾</div>
          <h3>চিটশিট</h3>
          <p className="muted">কুইক রিভিশন টেবিল আর C ↔ C++ কনভার্সন নোট — পরীক্ষার আগের শেষ দেখা।</p>
          <Link to="/cheatsheet/c" className="small">দেখো →</Link>
        </div>
      </section>
    </>
  )
}
