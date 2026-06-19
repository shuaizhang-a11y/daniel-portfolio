import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const content = {
  computational: {
    eyebrow: 'Tools as design partners',
    title: 'Computational Design',
    intro: 'Systems for exploring more possibilities, structuring complexity and carrying design intelligence across a project.',
    topics: ['Rhino + Grasshopper', 'Parametric modelling', 'Environmental analysis', 'Structural optimisation', 'BIM workflows', 'Python + GhPython', 'Data-driven design'],
    items: projects.filter(p => p.category === 'Computational Design' || p.category === 'Research'),
  },
  ai: {
    eyebrow: 'Emerging design intelligence',
    title: 'AI + Research',
    intro: 'Research into how machine intelligence can expand architectural analysis, representation and spatial ideation.',
    topics: ['AI in architecture', 'Generative AI', 'ComfyUI + LoRA', 'Machine learning', 'Data encoding', 'LLM-assisted workflows', 'Spatial classification'],
    items: projects.filter(p => p.category === 'Artificial Intelligence' || p.category === 'Research'),
  },
}

export default function Focus({ mode }) {
  const page = content[mode]
  return <div className="inner-page focus-page">
    <div className="page-title"><span className="eyebrow">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.intro}</p></div>
    <div className="topic-grid">{page.topics.map((topic, i) => <div key={topic}><span>{String(i + 1).padStart(2, '0')}</span><p>{topic}</p></div>)}</div>
    <div className="focus-statement"><span className="eyebrow">Approach</span><p className="display-copy">Computation is most useful when it does more than automate—it should <em>open up a richer design conversation.</em></p></div>
    <div className="project-list">{page.items.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
  </div>
}
