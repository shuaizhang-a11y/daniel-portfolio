import { useEffect } from 'react'

function upsert(selector, create) {
  let el = document.head.querySelector(selector)
  if (!el) { el = create(); document.head.appendChild(el) }
  return el
}

export default function useDocumentMeta({ title, description, canonical, ogTitle, ogDescription }) {
  useEffect(() => {
    const prevTitle = document.title
    const descEl = upsert('meta[name="description"]', () => { const m = document.createElement('meta'); m.setAttribute('name', 'description'); return m })
    const prevDesc = descEl.getAttribute('content')
    const canonicalEl = upsert('link[rel="canonical"]', () => { const l = document.createElement('link'); l.setAttribute('rel', 'canonical'); return l })
    const prevCanonical = canonicalEl.getAttribute('href')
    const ogTitleEl = upsert('meta[property="og:title"]', () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:title'); return m })
    const prevOgTitle = ogTitleEl.getAttribute('content')
    const ogDescEl = upsert('meta[property="og:description"]', () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:description'); return m })
    const prevOgDesc = ogDescEl.getAttribute('content')

    if (title) document.title = title
    if (description) descEl.setAttribute('content', description)
    if (canonical) canonicalEl.setAttribute('href', canonical)
    if (ogTitle) ogTitleEl.setAttribute('content', ogTitle)
    if (ogDescription) ogDescEl.setAttribute('content', ogDescription)

    return () => {
      document.title = prevTitle
      if (prevDesc !== null) descEl.setAttribute('content', prevDesc)
      if (prevCanonical !== null) canonicalEl.setAttribute('href', prevCanonical)
      else canonicalEl.remove()
      if (prevOgTitle !== null) ogTitleEl.setAttribute('content', prevOgTitle)
      if (prevOgDesc !== null) ogDescEl.setAttribute('content', prevOgDesc)
    }
  }, [title, description, canonical, ogTitle, ogDescription])
}
