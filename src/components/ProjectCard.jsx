import { Link } from 'react-router-dom'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <article className="project-card" style={{ '--delay': `${index * 60}ms` }}>
      <Link to={`/work/${project.slug}`} className="project-image-wrap">
        <img src={project.image} alt={project.alt} width={project.width} height={project.height} loading="lazy" decoding="async" />
        <span className="view-label">View project →</span>
      </Link>
      <div className="project-card-meta">
        <div><h3><Link to={`/work/${project.slug}`}>{project.title}</Link></h3><p>{project.description}</p></div>
        <div className="project-facts"><span>{project.category}</span><span>{project.location}</span><span>{project.year}</span></div>
      </div>
    </article>
  )
}
