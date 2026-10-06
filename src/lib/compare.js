// আউটপুট মেলানোর নিয়ম: প্রতি লাইনের শেষের ফাঁকা স্পেস আর শেষের খালি লাইন ইগনোর করা হয়
// address (0x7ffe...) প্রতিবার আলাদা হয় — তাই address-flag থাকলে সেগুলো মাস্ক করা হয়
export function normalize(s, maskAddr = false) {
  let t = (s ?? '').replace(/\r\n?/g, '\n')
  if (maskAddr) t = t.replace(/0x[0-9a-fA-F]+/g, '0xADDR')
  return t
    .split('\n')
    .map((l) => l.replace(/[ \t]+$/g, ''))
    .join('\n')
    .replace(/\n+$/g, '')
    .replace(/^\n+/g, '')
}

export function compare(expected, actual, maskAddr = false) {
  const e = normalize(expected, maskAddr).split('\n')
  const a = normalize(actual, maskAddr).split('\n')
  const n = Math.max(e.length, a.length)
  const rows = []
  let ok = true
  for (let i = 0; i < n; i++) {
    const same = e[i] === a[i]
    if (!same) ok = false
    rows.push({ n: i + 1, e: e[i], a: a[i], same })
  }
  return { ok, rows }
}
