import React, { useState } from 'react'
import { highlight } from '../lib/highlight.jsx'

export function CodeBlock({ code, label, lang }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch {
      /* ignore */
    }
  }
  const lines = code.split('\n').length
  return (
    <div className="code">
      <div className="code-bar">
        <span className={`pill pill-${lang || 'c'}`}>{label}</span>
        <span className="muted small">{lines} লাইন</span>
        <button className="btn btn-ghost btn-sm" onClick={copy}>
          {copied ? '✓ কপি হয়েছে' : 'কপি'}
        </button>
      </div>
      <pre>
        <code>{highlight(code)}</code>
      </pre>
    </div>
  )
}

export function Terminal({ title, text, stdin }) {
  return (
    <div className="term">
      <div className="term-bar">{title}</div>
      {stdin ? (
        <div className="term-in">
          <span className="muted small">ইনপুট:</span> <code>{stdin.trim().split('\n').join('  ↵  ')}</code>
        </div>
      ) : null}
      <pre>{text === '' ? <span className="muted">(কোনো আউটপুট নেই)</span> : text}</pre>
    </div>
  )
}
