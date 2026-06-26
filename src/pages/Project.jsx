import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Project() {
  const { slug } = useParams()
  const index = projects.findIndex(p => p.slug === slug)
  if (index < 0) return <Navigate to="/404" replace />
  const project = projects[index]
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  return <article className="project-page">
    <div className="project-hero"><img src={project.image} alt={project.alt} /><div className="project-hero-title"><span>{project.category} · {project.year}</span><h1>{project.title}</h1></div></div>
    <div className="project-summary">
      <div className="project-data"><div><span>Location</span><strong>{project.location}</strong></div><div><span>Year</span><strong>{project.year}</strong></div><div><span>Type</span><strong>{project.type}</strong></div><div><span>Role</span><strong>{project.role}</strong></div></div>
      <p className="lead">{project.description}</p>
    </div>
    <div className="project-story"><section><span className="eyebrow">01 · Design concept</span><p>{project.concept}</p></section><section><span className="eyebrow">02 · Process + methodology</span><p>{project.method}</p></section></div>
    <div className="gallery-grid"><img src={project.image} alt={project.alt} loading="lazy" /><div className="diagram-placeholder"><span>Drawing / diagram placeholder</span><small>Replace with project-specific content</small></div><img src={project.image} alt={`${project.title} detail view placeholder`} loading="lazy" /></div>
    {project.recognition.length > 0 && <section className="project-recognition"><span className="eyebrow">Recognition</span>{project.recognition.map((item) => item.url ? <a className="recognition-link" key={item.title} href={item.url} target="_blank" rel="noopener noreferrer">{item.title}<span aria-hidden="true">↗</span></a> : <p className="recognition-link recognition-link-disabled" key={item.title}>{item.title}</p>)}</section>}
    <nav className="project-nav" aria-label="Project navigation"><Link to={`/work/${prev.slug}`}><span>← Previous</span><strong>{prev.title}</strong></Link><Link to={`/work/${next.slug}`}><span>Next →</span><strong>{next.title}</strong></Link></nav>
  </article>
}
