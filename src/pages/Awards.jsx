import { awards } from '../data/site'

const groups = ['Award', 'Press', 'Interview', 'Exhibition']

export default function Awards() {
  return <div className="inner-page awards-page">
    <div className="page-title"><span className="eyebrow">Archive</span><h1>Awards + Press</h1><p>A publication-style index of recognition, editorial coverage and interviews.</p></div>
    <div className="archive-groups">{groups.map((group) => {
      const items = awards.filter(item => item.type === group)
      if (!items.length) return null
      return <section className="archive-group" key={group}>
        <span className="eyebrow">{group === 'Award' ? 'Awards' : `${group}s`}</span>
        <div className="archive-list">{items.map((item, i) => {
          const content = <><span>{item.year}</span><h2>{item.title}</h2><p>{item.detail}{item.url && <span aria-hidden="true">↗</span>}</p></>
          return item.url ? <a className="archive-item" key={`${item.title}-${i}`} href={item.url} target="_blank" rel="noopener noreferrer">{content}</a> : <article key={`${item.title}-${i}`}>{content}</article>
        })}</div>
      </section>
    })}</div>
  </div>
}
