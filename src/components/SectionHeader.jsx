export default function SectionHeader({ number, title, text }) {
  return <div className="section-header"><span className="section-number">{number}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}
