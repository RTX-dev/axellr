const APP_BUTTONS = [
  {
    id: 'about',
    label: 'about.txt',
    icon: (
      <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: 'projects',
    label: 'projects/',
    icon: (
      <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: 'skills',
    label: 'skills.json',
    icon: (
      <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 'xp',
    label: 'xp.log',
    icon: (
      <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    id: 'contact',
    label: 'contact.md',
    icon: (
      <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    id: 'e5',
    label: 'E5.pdf',
    icon: (
      <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    id: 'certifications',
    label: 'certifs/',
    icon: (
      <svg className="app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

export default function Desktop() {
  return (
    <div className="desktop">
      <div className="hero">
        <h1 className="hero-name anim-hero">
          <span className="mono">whoami</span>
        </h1>
        <p className="hero-sub anim-hero" style={{ animationDelay: '0.1s' }}>Développeur FullStack &amp; Cybersécurité</p>
      </div>

      <div className="app-grid">
        {APP_BUTTONS.map(({ id, label, icon }, i) => (
          <button
            key={id}
            className="app-btn anim-btn"
            data-open={id}
            style={{ animationDelay: `${0.2 + i * 0.06}s` }}
          >
            {icon}
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="desktop-footer">
        <span className="kb-hint">clic pour ouvrir &nbsp;·&nbsp; drag pour déplacer &nbsp;·&nbsp; bords pour redimensionner</span>
        <button className="legal-link" data-open="legal">Mentions légales</button>
      </div>
    </div>
  )
}
