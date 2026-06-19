import { awards } from '../data/site'

export default function Awards() {
  return <div className="inner-page">
    <div className="page-title"><span className="eyebrow">Archive</span><h1>Awards + Press</h1><p>A chronological record of recognition, exhibitions, publications and media coverage.</p></div>
    <div className="archive-list">{awards.map((item, i) => <article key={`${item.title}-${i}`}><span>{item.year}</span><span>{item.type}</span><h2>{item.title}</h2><p>{item.detail}</p></article>)}</div>
    <p className="placeholder-note">Items marked TBC are supplied names awaiting confirmed project details and dates.</p>
  </div>
}
