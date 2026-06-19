import { skills, software } from '../data/site'

export default function About() {
  return <div className="inner-page">
    <div className="page-title"><span className="eyebrow">Profile</span><h1>About</h1></div>
    <div className="about-hero">
      <div className="portrait-placeholder"><span>Portrait<br />placeholder</span></div>
      <div><p className="display-copy">Shuai “Daniel” Zhang is an architectural designer working across <em>architecture, computation and AI.</em></p><p>Based in Melbourne, Australia, his interests include parametric design, digital workflows, artificial intelligence, environmental analysis, BIM and architectural visualisation.</p><p>This biography is intentionally concise and uses only supplied information. Replace it with your full professional biography when ready.</p><a className="button-link" href="/documents/REPLACE-WITH-CV.txt" download>Download CV ↘</a></div>
    </div>
    <div className="profile-sections">
      <section><span className="eyebrow">Skills</span><div className="tag-list">{skills.map(x => <span key={x}>{x}</span>)}</div></section>
      <section><span className="eyebrow">Software</span><div className="tag-list">{software.map(x => <span key={x}>{x}</span>)}</div></section>
      <section><span className="eyebrow">Selected experience</span><div className="placeholder-list"><p>[Job title] <span>[Practice · Location · Dates]</span></p><p>[Job title] <span>[Practice · Location · Dates]</span></p></div></section>
      <section><span className="eyebrow">Education</span><div className="placeholder-list"><p>[Degree] <span>[Institution · Location · Year]</span></p></div></section>
    </div>
  </div>
}
