import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/projects'
import { awards } from '../data/site'

export default function Home() {
  const featuredProject = projects.find(project => project.slug === 'steps-of-tranquility') ?? projects[0]

  return <>
    <section className="hero">
      <img src={featuredProject.image} alt={featuredProject.alt} />
      <div className="hero-shade" />
      <div className="hero-title"><p>Architectural Designer · Computational Designer</p><span>Architecture, computation and artificial intelligence</span></div>
      <div className="hero-index"><span>Featured project</span><span>{featuredProject.title}<br />Burnaby · 2025</span></div>
      <a className="scroll-cue" href="#selected">Scroll →</a>
    </section>

    <section className="intro-band">
      <p className="display-copy">I design architecture through the combined lenses of <em>space, systems and computation.</em></p>
      <p>Based in Melbourne, my work moves between architectural design, parametric workflows, artificial intelligence and visual communication.</p>
    </section>

    <section className="page-section" id="selected">
      <SectionHeader number="01" title="Selected work" text="Projects and research across architecture, computational design and emerging technologies." />
      <div className="project-list">{projects.slice(0, 4).map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      <Link className="text-link" to="/work">View all projects <span>→</span></Link>
    </section>

    <section className="dark-section">
      <SectionHeader number="02" title="Recognition" text="Selected awards, exhibitions and editorial coverage." />
      <div className="recognition-list">{awards.slice(0, 5).map((item) => {
        const content = <><span>{item.year}</span><strong>{item.title}</strong><span>{item.detail}</span></>
        return item.url ? <a className="recognition-row" key={item.title} href={item.url} target="_blank" rel="noopener noreferrer">{content}</a> : <div className="recognition-row" key={item.title}>{content}</div>
      })}</div>
      <Link className="text-link light" to="/awards">Awards + press archive <span>→</span></Link>
    </section>

    <section className="bio-section">
      <SectionHeader number="03" title="Profile" />
      <div className="bio-grid"><p className="display-copy">Shuai “Daniel” Zhang is an architectural designer interested in how <em>new tools reshape design thinking.</em></p><div><p>His practice explores the productive overlap between architecture, computation and artificial intelligence, from parametric systems and digital workflows to visualisation and spatial research.</p><Link className="text-link" to="/about">Read profile <span>→</span></Link></div></div>
    </section>
    <section className="contact-banner"><p>Have a project, opportunity or idea in mind?</p><Link to="/contact">Let’s talk <span>→</span></Link></section>
  </>
}
