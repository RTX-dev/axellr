import { useState } from 'react'
import Window from '../Window'
import { E5_PROOFS } from '../../data/e5'

const ImgPlaceholder = ({ label }) => (
  <div className="proof-img-slot" data-label={label}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
    <span>Image à ajouter</span>
  </div>
)

export default function E5ProofWindow({ id }) {
  const proof = E5_PROOFS[id]
  const [lightbox, setLightbox] = useState(null)
  if (!proof) return null

  const heights = { 'e5-c1': '380px', 'e5-c2': '440px', 'e5-c3': '520px', 'e5-c4': '380px', 'e5-c5': '380px', 'e5-c6': '420px' }

  return (
    <Window id={id} title={proof.winTitle} width="580px" height={heights[id]}>
      <div className="proof-wrap">
        <p className="proof-desc">{proof.desc}</p>
        <div className="proof-meta">
          {proof.tags.map(tag => (
            <span key={tag} className="proof-tag">{tag}</span>
          ))}
        </div>
        <div className="proof-imgs">
          {proof.images.map(img => {
            if (!img.src) return <ImgPlaceholder key={img.label} label={img.label} />
            if (img.src.endsWith('.pdf')) return (
              <div key={img.label} className="proof-pdf-slot" data-label={img.label}>
                <iframe src={img.src} title={img.label} />
                <a href={img.src} target="_blank" rel="noreferrer" className="proof-pdf-open">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Ouvrir le PDF
                </a>
              </div>
            )
            return (
              <div key={img.label} className="proof-img-slot has-img" data-label={img.label}
                onClick={() => setLightbox(img)} style={{ cursor: 'zoom-in' }}>
                <img src={img.src} alt={img.label} />
              </div>
            )
          })}
        </div>
      </div>

      {lightbox && (
        <div className="cert-lightbox" onClick={() => setLightbox(null)}>
          <div className="cert-lb-inner" onClick={e => e.stopPropagation()}>
            <div className="cert-lb-header">
              <span className="cert-lb-title">{lightbox.label}</span>
              <button className="cert-lb-close" onClick={() => setLightbox(null)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="cert-lb-img-wrap">
              <img src={lightbox.src} alt={lightbox.label} className="cert-lb-img" />
            </div>
          </div>
        </div>
      )}
    </Window>
  )
}
