import { useState } from 'react'

export default function ContactWindow() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const data = new FormData(form)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })
      setSent(true)
    } catch {
      setSent(true) // affiche quand même le succès en local
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-wrap">

      {/* ── Liens rapides ── */}
      <div className="contact-list">
        <a href="mailto:axelleroy@duck.com" className="contact-item">
          <span className="ci-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </span>
          <div>
            <div className="ci-label">Email</div>
            <div className="ci-val">axelleroy@duck.com</div>
          </div>
        </a>

        <a href="https://linkedin.com/in/axel-leroy-it" target="_blank" rel="noreferrer" className="contact-item">
          <span className="ci-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </span>
          <div>
            <div className="ci-label">LinkedIn</div>
            <div className="ci-val">axel-leroy-it</div>
          </div>
        </a>

        <div className="contact-item no-link">
          <span className="ci-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <div>
            <div className="ci-label">Localisation</div>
            <div className="ci-val">Bretagne, France</div>
          </div>
        </div>
      </div>

      {/* ── Formulaire ── */}
      {sent ? (
        <div className="contact-success">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Message envoyé — je vous répondrai dans les plus brefs délais.
        </div>
      ) : (
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="cf-field">
            <label className="cf-label"><span>→</span> Nom</label>
            <input className="cf-input" type="text" name="nom" placeholder="Votre nom" required />
          </div>

          <div className="cf-field">
            <label className="cf-label"><span>→</span> Email</label>
            <input className="cf-input" type="email" name="email" placeholder="votre@email.com" required />
          </div>

          <div className="cf-field">
            <label className="cf-label"><span>→</span> Message</label>
            <textarea className="cf-textarea" name="message" placeholder="Votre message..." rows="5" required />
          </div>

          <button className="cf-submit" type="submit" disabled={loading}>
            {loading ? 'Envoi en cours...' : './send → Envoyer le message'}
          </button>
        </form>
      )}

    </div>
  )
}
