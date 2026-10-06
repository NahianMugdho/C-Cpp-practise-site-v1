import { useEffect, useState, useCallback } from 'react'

// localStorage কখনো কখনো কাজ করে না (private window ইত্যাদি) — তাই সবকিছু try/catch এ
export const read = (key, fallback) => {
  try {
    const v = localStorage.getItem(key)
    return v == null ? fallback : JSON.parse(v)
  } catch {
    return fallback
  }
}
export const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* ignore */
  }
}

const EVT = 'cn-progress'

export function useSolved(lang) {
  const key = `cn:solved:${lang}`
  const [solved, setSolved] = useState(() => read(key, {}))
  useEffect(() => {
    const on = () => setSolved(read(key, {}))
    on() // ভাষা (C ↔ C++) বদলালে সেই ভাষার প্রগ্রেস আবার লোড করো
    window.addEventListener(EVT, on)
    return () => window.removeEventListener(EVT, on)
  }, [key])
  const mark = useCallback(
    (id, val = true) => {
      const cur = read(key, {})
      if (val) cur[id] = true
      else delete cur[id]
      write(key, cur)
      setSolved({ ...cur })
      window.dispatchEvent(new Event(EVT))
    },
    [key]
  )
  return [solved, mark]
}

export function useTheme() {
  const [theme, setTheme] = useState(() => read('cn:theme', 'auto'))
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'auto') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', theme)
    write('cn:theme', theme)
  }, [theme])
  return [theme, setTheme]
}
