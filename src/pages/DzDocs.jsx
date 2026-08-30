import { Link, Navigate, useParams } from 'react-router-dom'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { dzDocOrder, dzDocs } from '../data/dzDocs'

function DocBlocks({ blocks }) {
  return blocks.map((block, i) => {
    if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
    if (block.type === 'p') return <p key={i}>{block.text}</p>
    if (block.type === 'list') return <ul key={i}>{block.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
    if (block.type === 'table') return (
      <div className="doc-table-wrap" key={i}>
        <table>
          <thead><tr>{block.headers.map((h, j) => <th key={j}>{h}</th>)}</tr></thead>
          <tbody>{block.rows.map((row, j) => <tr key={j}>{row.map((cell, k) => <td key={k}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
    )
    return null
  })
}

export default function DzDocs() {
  const { doc } = useParams()
  const entry = dzDocs[doc]
  if (!entry) return <Navigate to="/work/dz-planning-tools" replace />

  useDocumentMeta({
    title: `${entry.title} — DZ Planning Tools | Daniel Zhang`,
    description: entry.intro,
    canonical: `https://danielshuaizhang.com/work/dz-planning-tools/${doc}`,
    ogTitle: `${entry.title} — DZ Planning Tools`,
    ogDescription: entry.intro,
  })

  return <div className="inner-page dz-doc-page">
    <div className="dz-doc-nav">
      <Link to="/work/dz-planning-tools" className="text-link dz-doc-back"><span>←</span> DZ Planning Tools</Link>
      <nav aria-label="Documentation">{dzDocOrder.map(slug => <Link key={slug} to={`/work/dz-planning-tools/${slug}`} className={slug === doc ? 'active' : ''}>{dzDocs[slug].title}</Link>)}</nav>
    </div>

    <div className="page-title dz-doc-title">
      <span className="eyebrow">{entry.eyebrow}</span>
      <h1>{entry.title}</h1>
      <p>{entry.intro}</p>
    </div>

    <div className="dz-doc-body">
      <DocBlocks blocks={entry.blocks} />
    </div>
  </div>
}
