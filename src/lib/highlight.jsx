import React from 'react'

const KW = new Set(
  'auto break case const continue default do else enum extern for goto if inline register return sizeof static struct switch typedef union volatile while using namespace class public private protected new delete this template typename try catch throw true false nullptr bool'.split(
    ' '
  )
)
const TYPES = new Set(
  'int char float double long short unsigned signed void FILE size_t string vector cout cin endl cerr ifstream ofstream fstream queue stack map set pair NULL EOF'.split(
    ' '
  )
)

const RE =
  /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|(^[ \t]*#[ \t]*\w+(?:[ \t]*<[^>\n]+>|[ \t]*"[^"\n]*")?)|(\b\d+(?:\.\d+)?[fFlLuU]*\b)|([A-Za-z_]\w*)/gm

export function highlight(code) {
  const out = []
  let last = 0
  let m
  let k = 0
  RE.lastIndex = 0
  while ((m = RE.exec(code))) {
    if (m.index > last) out.push(code.slice(last, m.index))
    const [tok, com, str, pre, num, id] = m
    let cls = null
    if (com) cls = 'tk-com'
    else if (str) cls = 'tk-str'
    else if (pre) cls = 'tk-pre'
    else if (num) cls = 'tk-num'
    else if (id) {
      if (KW.has(id)) cls = 'tk-kw'
      else if (TYPES.has(id)) cls = 'tk-ty'
      else if (code[RE.lastIndex] === '(') cls = 'tk-fn'
    }
    out.push(cls ? <span key={k++} className={cls}>{tok}</span> : tok)
    last = RE.lastIndex
  }
  if (last < code.length) out.push(code.slice(last))
  return out
}
