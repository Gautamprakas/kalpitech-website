import { useState } from 'react'
import Icon from './Icon'
import { contact } from '../data/content'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    setStatus('sending')
    try {
      const res = await fetch(contact.formspreeEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    'Hi Kalpitech, I would like to discuss a project.',
  )}`

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Get In Touch</span>
          <h2>Let's talk about your project</h2>
          <p>Tell us what you need — we'll get back to you with a free quote, usually within a day.</p>
        </div>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required placeholder="Your name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="form-row">
              <label htmlFor="message">Project details</label>
              <textarea id="message" name="message" rows="5" required placeholder="Tell us a bit about what you need built..." />
            </div>
            <button type="submit" className="btn btn--primary btn--block" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'sent' && <p className="form-status form-status--ok">Thanks! We'll get back to you soon.</p>}
            {status === 'error' && (
              <p className="form-status form-status--error">
                Something went wrong. Please email us directly at {contact.email}.
              </p>
            )}
          </form>

          <div className="contact-info">
            <a className="contact-info__item" href={`mailto:${contact.email}`}>
              <Icon name="mail" size={20} />
              <span>{contact.email}</span>
            </a>
            {contact.phones.map((phone) => (
              <a className="contact-info__item" href={`tel:+91${phone}`} key={phone}>
                <Icon name="phone" size={20} />
                <span>+91 {phone}</span>
              </a>
            ))}
            <a className="contact-info__item" href={whatsappHref} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={20} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
