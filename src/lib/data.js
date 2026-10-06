import raw from '../data/notes.json'

export const LANGS = {
  c: { key: 'c', label: 'C', full: 'C প্রোগ্রামিং', ext: 'c', godbolt: 'c' },
  cpp: { key: 'cpp', label: 'C++', full: 'C++ প্রোগ্রামিং', ext: 'cpp', godbolt: 'c++' },
}

const flat = {}
for (const l of ['c', 'cpp']) {
  flat[l] = raw[l].flatMap((s) =>
    s.items.map((it) => ({ ...it, sectionId: s.id, sectionNo: s.no, sectionTitle: s.title }))
  )
}

export const sections = (lang) => raw[lang]
export const items = (lang) => flat[lang]
export const getItem = (lang, id) => flat[lang].find((i) => i.id === id)
export const getIndex = (lang, id) => flat[lang].findIndex((i) => i.id === id)
export const cheat = (lang) => raw.cheat[lang]
export const isLang = (l) => l === 'c' || l === 'cpp'
export const TOTAL = flat.c.length
