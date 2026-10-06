import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { LANGS, getItem, getIndex, items, isLang } from '../lib/data.js'
import { CodeBlock, Terminal } from '../components/Code.jsx'
import { read, write, useSolved } from '../lib/storage.js'
import { compare } from '../lib/compare.js'
import { runOnline } from '../lib/run.js'

const SKELETON = {
  c: '#include <stdio.h>\n\nint main() {\n    \n    return 0;\n}\n',
  cpp: '#include <iostream>\nusing namespace std;\n\nint main() {\n    \n    return 0;\n}\n',
}

function Diff({ result }) {
  return (
    <div className="diff">
      <div className="diff-h"><span>#</span><span>প্রত্যাশিত</span><span>তোমার</span></div>
      {result.rows.map((r) => (
        <div key={r.n} className={`diff-r ${r.same ? '' : 'bad'}`}>
          <span>{r.n}</span>
          <pre>{r.e ?? <i className="muted">—</i>}</pre>
          <pre>{r.a ?? <i className="muted">—</i>}</pre>
        </div>
      ))}
    </div>
  )
}

export default function Practice() {
  const { lang, id } = useParams()
  if (!isLang(lang)) return <Navigate to="/" replace />
  const it = getItem(lang, id)
  if (!it) return <Navigate to={`/${lang}`} replace />
  return <Editor key={`${lang}-${id}`} lang={lang} it={it} />
}

function Editor({ lang, it }) {
  const id = it.id
  const draftKey = `cn:draft:${lang}:${id}`
  const [code, setCode] = useState(() => read(draftKey, ''))
  const [stdin, setStdin] = useState(it.input)
  const [hint, setHint] = useState(false)
  const [sol, setSol] = useState(false)
  const [busy, setBusy] = useState(false)
  const [res, setRes] = useState(null) // {kind, verdict?, stdout, error?, note?}
  const [pasted, setPasted] = useState('')
  const [pasteRes, setPasteRes] = useState(null)
  const [solved, mark] = useSolved(lang)
  const taRef = useRef(null)
  const mask = it.flags.includes('address')

  useEffect(() => {
    const t = setTimeout(() => write(draftKey, code), 300)
    return () => clearTimeout(t)
  }, [code, draftKey])

  const list = items(lang)
  const idx = getIndex(lang, id)
  const prev = list[idx - 1]
  const next = list[idx + 1]

  const onKey = (e) => {
    const ta = e.target
    if (e.key === 'Tab') {
      e.preventDefault()
      const s = ta.selectionStart, en = ta.selectionEnd
      const v = code.slice(0, s) + '    ' + code.slice(en)
      setCode(v)
      requestAnimationFrame(() => (ta.selectionStart = ta.selectionEnd = s + 4))
    } else if (e.key === 'Enter') {
      const s = ta.selectionStart
      const lineStart = code.lastIndexOf('\n', s - 1) + 1
      const line = code.slice(lineStart, s)
      let indent = (line.match(/^[ \t]*/) || [''])[0]
      if (/\{\s*$/.test(line)) indent += '    '
      e.preventDefault()
      const v = code.slice(0, s) + '\n' + indent + code.slice(ta.selectionEnd)
      setCode(v)
      requestAnimationFrame(() => (ta.selectionStart = ta.selectionEnd = s + 1 + indent.length))
    }
  }

  const verdictFor = (stdout) => {
    const sameInput = stdin.trim() === it.input.trim()
    if (!sameInput) return { verdict: null, note: 'ইনপুট বদলেছ — তাই প্রত্যাশিত আউটপুটের সাথে মেলানো হয়নি।' }
    const c = compare(it.output, stdout, mask)
    if (c.ok) mark(id, true)
    return { verdict: c }
  }

  const run = async () => {
    if (!code.trim()) return setRes({ kind: 'err', error: 'আগে কিছু কোড লেখো 🙂' })
    setBusy(true)
    setRes(null)
    try {
      const r = await runOnline({ lang, source: code, stdin })
      if (r.stage === 'compile') setRes({ kind: 'compile', error: r.error })
      else setRes({ kind: 'run', stdout: r.stdout, stderr: r.stderr, exit: r.code, ...verdictFor(r.stdout) })
    } catch (e) {
      setRes({
        kind: 'net',
        error:
          'অনলাইন কম্পাইলারে পৌঁছানো যায়নি (ইন্টারনেট/ব্লক হতে পারে)। নিচের “নিজের কম্পাইলারে চালিয়েছ?” অংশ ব্যবহার করে আউটপুট পেস্ট করে মেলাও।',
      })
    } finally {
      setBusy(false)
    }
  }

  const checkPaste = () => {
    const c = compare(it.output, pasted, mask)
    setPasteRes(c)
    if (c.ok) mark(id, true)
  }

  return (
    <>
      <div className="crumbs">
        <Link to={`/${lang}`}>{LANGS[lang].label}</Link> <span>›</span> <span>প্র্যাক্টিস</span>
      </div>
      <div className="page-head">
        <div>
          <span className={`pill pill-${lang}`}>{LANGS[lang].label}</span>
          <h1>
            <span className="pno big">{it.no}</span> {it.name} {solved[id] && <span className="tick">✓</span>}
          </h1>
        </div>
        <Link className="btn" to={`/${lang}/read/${id}`}>📖 পড়ার মোডে</Link>
      </div>

      <div className="prac">
        <div className="prac-l">
          <div className="card">
            <h3>কাজ</h3>
            <p>
              <b>{it.name}</b> প্রোগ্রামটি {LANGS[lang].label}-এ লেখো, যেন নিচের ইনপুটে ঠিক নিচের আউটপুট আসে।
            </p>
            <Terminal title="প্রত্যাশিত আউটপুট" text={it.output} stdin={it.input} />
            {mask && <p className="small muted">address-এর মান প্রতিবার আলাদা — মেলানোর সময় 0x… অংশ ধরা হয় না।</p>}
            {it.flags.includes('needsFile') && (
              <p className="small muted">এই প্রোগ্রামে আগে তৈরি করা ফাইল লাগে (৯.১) — অনলাইন চালানোয় নাও মিলতে পারে; নিজের কম্পাইলারে চালিয়ে পেস্ট করো।</p>
            )}
          </div>
          <div className="card">
            <div className="row between">
              <h3>হিন্ট</h3>
              <button className="btn btn-sm" onClick={() => setHint(!hint)}>{hint ? 'লুকাও' : 'দেখো'}</button>
            </div>
            {hint ? <p>{it.tip || 'এই প্রোগ্রামে আলাদা হিন্ট নেই।'}</p> : <p className="muted small">আটকে গেলে খুলে দেখো।</p>}
          </div>
          <div className="card">
            <div className="row between">
              <h3>উত্তর কোড</h3>
              <button className="btn btn-sm" onClick={() => setSol(!sol)}>{sol ? 'লুকাও' : 'দেখো'}</button>
            </div>
            {!sol && <p className="muted small">আগে নিজে চেষ্টা করো, তারপর মিলিয়ে নাও।</p>}
          </div>
        </div>

        <div className="prac-r">
          <div className="editor">
            <div className="code-bar">
              <span className={`pill pill-${lang}`}>main.{LANGS[lang].ext}</span>
              <span className="grow" />
              <button className="btn btn-ghost btn-sm" onClick={() => setCode(SKELETON[lang])}>স্কেলেটন</button>
              <button className="btn btn-ghost btn-sm" onClick={() => setCode('')}>মুছো</button>
            </div>
            <textarea
              ref={taRef}
              className="ta"
              spellCheck={false}
              autoCapitalize="off"
              autoCorrect="off"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={onKey}
              placeholder={`// এখানে ${LANGS[lang].label} কোড লেখো…`}
              rows={16}
            />
          </div>

          <div className="stdin">
            <label className="small muted" htmlFor="stdin">ইনপুট (stdin)</label>
            <textarea id="stdin" className="ta ta-sm" spellCheck={false} value={stdin} onChange={(e) => setStdin(e.target.value)} rows={2} />
          </div>

          <div className="row">
            <button className="btn btn-primary" disabled={busy} onClick={run}>
              {busy ? 'চলছে…' : '▶ চালাও ও মেলাও'}
            </button>
            {solved[id] ? (
              <button className="btn" onClick={() => mark(id, false)}>✓ সম্পন্ন — চিহ্ন তুলে দাও</button>
            ) : (
              <button className="btn" onClick={() => mark(id, true)} title="নিজে মিলিয়ে দেখলে হাতে চিহ্ন দাও">নিজে মিলিয়েছি ✓</button>
            )}
          </div>

          {res && (
            <div className="result">
              {res.kind === 'run' && res.verdict && (
                <div className={`verdict ${res.verdict.ok ? 'ok' : 'no'}`}>
                  {res.verdict.ok ? '✅ আউটপুট মিলেছে! দারুণ।' : '❌ আউটপুট মেলেনি — পার্থক্যগুলো দেখো'}
                </div>
              )}
              {res.kind === 'run' && !res.verdict && <div className="verdict info">{res.note}</div>}
              {res.kind === 'compile' && (
                <>
                  <div className="verdict no">⚠️ কম্পাইল এরর</div>
                  <pre className="errbox">{res.error}</pre>
                </>
              )}
              {(res.kind === 'net' || res.kind === 'err') && <div className="verdict info">{res.error}</div>}
              {res.kind === 'run' && (
                <>
                  {res.verdict && !res.verdict.ok && <Diff result={res.verdict} />}
                  <Terminal title={`তোমার আউটপুট${res.exit ? ` (exit code ${res.exit})` : ''}`} text={res.stdout} />
                  {res.stderr ? <pre className="errbox">{res.stderr}</pre> : null}
                </>
              )}
            </div>
          )}

          <details className="card paste">
            <summary>নিজের কম্পাইলারে চালিয়েছ? আউটপুট পেস্ট করে মেলাও</summary>
            <p className="small muted">অনলাইন কম্পাইলার না চললে (বা ফাইল/অ্যাড্রেসের প্রোগ্রামে) নিজের পিসিতে চালিয়ে আউটপুট এখানে পেস্ট করো।</p>
            <textarea className="ta ta-sm" rows={4} value={pasted} onChange={(e) => setPasted(e.target.value)} placeholder="তোমার প্রোগ্রামের আউটপুট…" />
            <div className="row">
              <button className="btn btn-primary btn-sm" onClick={checkPaste}>মেলাও</button>
            </div>
            {pasteRes && (
              <>
                <div className={`verdict ${pasteRes.ok ? 'ok' : 'no'}`}>{pasteRes.ok ? '✅ মিলেছে!' : '❌ মেলেনি'}</div>
                {!pasteRes.ok && <Diff result={pasteRes} />}
              </>
            )}
          </details>
        </div>
      </div>

      {sol && (
        <div className="solution">
          <CodeBlock code={it.code} label={`উত্তর (${LANGS[lang].label})`} lang={lang} />
        </div>
      )}

      <div className="pager">
        {prev ? <Link className="btn" to={`/${lang}/practice/${prev.id}`}>← {prev.no} {prev.name}</Link> : <span />}
        {next ? <Link className="btn" to={`/${lang}/practice/${next.id}`}>{next.no} {next.name} →</Link> : <span />}
      </div>
    </>
  )
}
