import { useState } from 'react'

const CNIL_MODULES = [
  { num: '01', title: 'Le RGPD et ses notions clés',                  date: 'Oct. 2024', file: '/docs/certifs/Certificat_module_1_page-0001.jpg' },
  { num: '02', title: 'Les bases légales',                            date: '2024',       file: '/docs/certifs/Attestation_module_2_page-0001.jpg' },
  { num: '03', title: 'Les droits des personnes',                     date: '2024',       file: '/docs/certifs/Certificat_module_3_page-0001.jpg' },
  { num: '04', title: 'Les obligations du responsable de traitement', date: '2024',       file: '/docs/certifs/Certificat_mudule_4_page-0001.jpg' },
  { num: '05', title: 'La sécurité des données personnelles',         date: '2024',       file: '/docs/certifs/Certificat_module_5_page-0001.jpg' },
]

const CISCO_CERTS = [
  { title: 'Networking Basics',                          date: 'Fév. 2026', file: '/docs/certifs/NetworkingBasicsUpdate20260211-33-yk9zbg_page-0001.jpg' },
  { title: 'Networking Devices and Basic Configuration', date: 'Fév. 2026', file: '/docs/certifs/NetworkingDevicesandBasicConfigUpdate20260211-31-effdmg_page-0001.jpg' },
  { title: 'Network Addressing & Basic Troubleshooting', date: 'Fév. 2026', file: '/docs/certifs/NetworkAddressingandBasicTroubleshootingUpdate20260211-31-rby6my_page-0001.jpg' },
]

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const BadgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
)

function CertItem({ num, title, date, file, onClick }) {
  return (
    <button className="cert-item" onClick={() => onClick({ title, file })}>
      {num && <span className="cert-num">{num}</span>}
      <span className="cert-title">{title}</span>
      <div className="cert-meta">
        <span className="cert-date">{date}</span>
        <svg className="cert-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </button>
  )
}

export default function CertificationsWindow() {
  const [active, setActive] = useState(null)

  return (
    <>
      <div className="cert-wrap">

        {/* ── CNIL ── */}
        <div className="cert-group">
          <div className="cert-group-header">
            <div className="cert-group-icon cnil"><ShieldIcon /></div>
            <div>
              <div className="cert-group-name">CNIL · L'Atelier RGPD</div>
              <div className="cert-group-sub">5 modules complétés</div>
            </div>
          </div>
          <div className="cert-list">
            {CNIL_MODULES.map(m => (
              <CertItem key={m.num} {...m} onClick={setActive} />
            ))}
          </div>
        </div>

        {/* ── Cisco ── */}
        <div className="cert-group">
          <div className="cert-group-header">
            <div className="cert-group-icon cisco"><BadgeIcon /></div>
            <div>
              <div className="cert-group-name">Cisco Networking Academy</div>
              <div className="cert-group-sub">3 certifications</div>
            </div>
          </div>
          <div className="cert-list">
            {CISCO_CERTS.map(c => (
              <CertItem key={c.title} {...c} onClick={setActive} />
            ))}
          </div>
        </div>

      </div>

      {/* ── Lightbox ── */}
      {active && (
        <div className="cert-lightbox" onClick={() => setActive(null)}>
          <div className="cert-lb-inner" onClick={e => e.stopPropagation()}>
            <div className="cert-lb-header">
              <span className="cert-lb-title">{active.title}</span>
              <button className="cert-lb-close" onClick={() => setActive(null)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="cert-lb-img-wrap">
              <img src={active.file} alt={active.title} className="cert-lb-img" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
