import React, { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { LANGS, getItem, getIndex, items, isLang } from '../lib/data.js'
import { CodeBlock, Terminal } from '../components/Code.jsx'
import { useSolved } from '../lib/storage.js'

export default function Read() {
  const { lang, id } = useParams()
  const [both, setBoth] = useState(false)
  const [solved] = useSolved(lang)
  if (!isLang(lang)) return <Navigate to="/" replace />
  const it = getItem(lang, id)
  if (!it) return <Navigate to={`/${lang}`} replace />
  const list = items(lang)
  const idx = getIndex(lang, id)
  const prev = list[idx - 1]
  const next = list[idx + 1]
  const other = lang === 'c' ? 'cpp' : 'c'
  const otherItem = getItem(other, id)

  return (
    <>
      <div className="crumbs">
        <Link to={`/${lang}`}>{LANGS[lang].label}</Link> <span>›</span> <span>{it.sectionNo}. {it.sectionTitle.split('(')[0]}</span>
      </div>
      <div className="page-head">
        <div>
          <span className={`pill pill-${lang}`}>{LANGS[lang].label}</span>
          <h1>
            <span className="pno big">{it.no}</span> {it.name} {solved[id] && <span className="tick">✓</span>}
          </h1>
        </div>
        <div className="row">
          <button className={`btn ${both ? 'btn-on' : ''}`} onClick={() => setBoth(!both)}>
            C ↔ C++ পাশাপাশি
          </button>
          <Link className="btn btn-primary" to={`/${lang}/practice/${id}`}>⌨ প্র্যাক্টিস করো</Link>
        </div>
      </div>

      {it.tip && (
        <div className="tip">
          <b>মনে রাখার কৌশল</b>
          <p>{it.tip}</p>
        </div>
      )}

      {both ? (
        <div className="grid2 tight">
          <div>
            <CodeBlock code={getItem('c', id).code} label="C" lang="c" />
            <Terminal title="C আউটপুট" text={getItem('c', id).output} stdin={getItem('c', id).input} />
          </div>
          <div>
            <CodeBlock code={getItem('cpp', id).code} label="C++" lang="cpp" />
            <Terminal title="C++ আউটপুট" text={getItem('cpp', id).output} stdin={getItem('cpp', id).input} />
          </div>
        </div>
      ) : (
        <>
          <CodeBlock code={it.code} label={LANGS[lang].label} lang={lang} />
          <Terminal title="আউটপুট" text={it.output} stdin={it.input} />
          {otherItem && (
            <p className="small muted">
              এই প্রোগ্রামটি <Link to={`/${other}/read/${id}`}>{LANGS[other].label}-এ দেখো</Link>
            </p>
          )}
        </>
      )}
      {it.flags.includes('address') && (
        <p className="small muted">ℹ️ address প্রতিবার আলাদা আসে (0x7ffe… এর মান বদলায়) — মান নয়, ধরনটা দেখো।</p>
      )}
      {it.flags.includes('needsFile') && (
        <p className="small muted">ℹ️ এই প্রোগ্রাম চালানোর আগে আগের ফাইল-রাইটিং প্রোগ্রাম (৯.১) একবার চালাতে হবে।</p>
      )}

      <div className="pager">
        {prev ? <Link className="btn" to={`/${lang}/read/${prev.id}`}>← {prev.no} {prev.name}</Link> : <span />}
        {next ? <Link className="btn" to={`/${lang}/read/${next.id}`}>{next.no} {next.name} →</Link> : <span />}
      </div>
    </>
  )
}
