import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { categories, projects } from '../data/projects'

export default function Work() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? projects : projects.filter(p => p.category === filter)
  return <div className="inner-page">
    <div className="page-title"><span className="eyebrow">Selected portfolio · 2023—2025</span><h1>Work</h1><p>Architecture as a field of spatial, material and computational inquiry.</p></div>
    <div className="filters" role="group" aria-label="Filter projects">{categories.map(category => <button key={category} className={filter === category ? 'active' : ''} onClick={() => setFilter(category)}>{category}</button>)}</div>
    <div className="project-list">{visible.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
  </div>
}
