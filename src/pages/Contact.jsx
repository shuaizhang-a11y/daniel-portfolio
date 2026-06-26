import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const submit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Design enquiry from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:hello@danielshuaizhang.com?subject=${subject}&body=${body}`
  }
  return <div className="inner-page contact-page">
    <div className="page-title"><span className="eyebrow">Melbourne · Australia</span><h1>Let’s make<br />something considered.</h1><p>For collaborations, exhibitions, publications and design enquiries.</p></div>
    <div className="contact-grid">
      <div className="contact-details"><div><span>Email</span><a href="mailto:hello@danielshuaizhang.com">hello@danielshuaizhang.com</a></div><div><span>Studio focus</span><p>Architecture, public space, computational design and visual research.</p></div></div>
      <form onSubmit={submit}><label>Name<input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></label><label>Email<input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></label><label>Message<textarea required rows="5" value={form.message} onChange={e => setForm({...form, message: e.target.value})} /></label><button type="submit">Open email draft →</button><small>This static form opens your email application.</small></form>
    </div>
  </div>
}
