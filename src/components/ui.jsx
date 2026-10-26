import { useEffect, useRef, useState } from 'react'

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function Lightbox({ data, onClose }) {
  if (!data) return null
  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lb-inner" onClick={e => e.stopPropagation()}>
        <div className="lb-header">
          <span>{data.title}</span>
          <button className="lb-close" onClick={onClose} aria-label="Fermer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="lb-body">
          {data.desc && <p>{data.desc}</p>}
          {data.tags && <div className="tags">{data.tags.map(t => <span key={t}>{t}</span>)}</div>}
          {data.images?.map(img => (
            <div key={img.src}>
              <img src={img.src} alt={img.label} />
              {img.label && <span className="lb-caption">{img.label}</span>}
            </div>
          ))}
          {data.file && <img src={data.file} alt={data.title} />}
        </div>
      </div>
    </div>
  )
}
