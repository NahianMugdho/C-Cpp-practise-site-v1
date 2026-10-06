// অনলাইন কম্পাইলার (Compiler Explorer / godbolt.org) দিয়ে কোড চালানো।
// GitHub Pages স্ট্যাটিক হোস্টিং — তাই নিজের সার্ভার নেই, ব্রাউজার থেকেই সরাসরি API কল করা হয়।
const BASE = 'https://godbolt.org/api'
const FALLBACK = { c: 'cg132', 'c++': 'g132' }
const cache = {}

async function pickCompiler(lang) {
  if (cache[lang]) return cache[lang]
  try {
    const r = await fetch(`${BASE}/compilers/${lang}?fields=id,name,semver,instructionSet`, {
      headers: { Accept: 'application/json' },
    })
    const list = await r.json()
    const gcc = list
      .filter((c) => /^x86-64 gcc \d+(\.\d+)*$/.test(c.name) && (!c.instructionSet || c.instructionSet === 'amd64'))
      .sort((a, b) => parseFloat(b.name.split(' ').pop()) - parseFloat(a.name.split(' ').pop()))
    if (gcc.length) return (cache[lang] = gcc[0].id)
  } catch {
    /* fallback below */
  }
  return (cache[lang] = FALLBACK[lang])
}

const text = (arr) => (arr || []).map((x) => x.text).join('\n')

export async function runOnline({ lang, source, stdin }) {
  const gl = lang === 'c' ? 'c' : 'c++'
  const id = await pickCompiler(gl)
  const body = {
    source,
    lang: gl,
    options: {
      userArguments: lang === 'c' ? '-lm' : '',
      executeParameters: { args: [], stdin: stdin || '' },
      compilerOptions: { executorRequest: true },
      filters: { execute: true },
      tools: [],
      libraries: [],
    },
    allowStoreCodeDebug: false,
  }
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), 25000)
  try {
    const res = await fetch(`${BASE}/compiler/${id}/compile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    })
    if (!res.ok) throw new Error(`সার্ভার সাড়া দিয়েছে: ${res.status}`)
    const j = await res.json()
    const build = j.buildResult || {}
    if (build.code && build.code !== 0) {
      return { stage: 'compile', error: text(build.stderr) || text(j.stderr) || 'Compile error', stdout: '' }
    }
    return { stage: 'run', code: j.code, stdout: text(j.stdout), stderr: text(j.stderr) }
  } finally {
    clearTimeout(t)
  }
}
