import { Link } from 'react-router-dom'

const areas = [
  'Architecture and public space',
  'Landscape-integrated design',
  'Computational design',
  'AI-assisted design research',
  'Architectural visualisation',
  'Spatial storytelling',
]

export default function About() {
  return <div className="inner-page studio-profile">
    <section className="studio-hero">
      <span className="eyebrow">Studio profile</span>
      <h1>Architecture, computation and atmosphere.</h1>
      <p>Shuai Zhang’s work explores the intersection of architecture, landscape, computation and visual culture. The projects presented here investigate atmosphere, material presence and spatial experience through built-form studies, public space proposals, computational design processes and image-based architectural research.</p>
    </section>

    <section className="studio-section">
      <span className="eyebrow">Approach</span>
      <p>The work is shaped by a careful balance between spatial clarity, environmental sensitivity and digital experimentation. Across architecture, public space and computational research, the practice focuses on creating calm, legible and emotionally resonant spaces that connect people, landscape and atmosphere.</p>
    </section>

    <section className="studio-section studio-areas">
      <span className="eyebrow">Areas of Work</span>
      <div>{areas.map((area) => <p key={area}>{area}</p>)}</div>
    </section>

    <section className="studio-section">
      <span className="eyebrow">Recognition</span>
      <p>Selected works have been recognised by international design awards and featured by design publications including MUSE Design Awards, DNA Paris Design Awards, International Design Awards, German Design Award, Architecture MasterPrize, New York Architectural Design Awards and Designboom.</p>
      <Link className="text-link" to="/awards">Awards + press <span>→</span></Link>
    </section>

    <section className="studio-contact">
      <p>For collaborations, exhibitions, publications or design enquiries, please get in touch.</p>
      <Link to="/contact">Contact <span>→</span></Link>
    </section>
  </div>
}
