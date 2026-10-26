import { useState } from 'react'
import { Reveal, Lightbox } from './components/ui'
import { E5_COMPETENCIES, E5_PROOFS } from './data/e5'
import { DISCORD_CATEGORIES } from './data/commands'

const GitLabIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)

function Nav() {
  const links = [
    ['#about', 'À propos'],
    ['#projects', 'Projets'],
    ['#skills', 'Compétences'],
    ['#xp', 'Parcours'],
    ['#certs', 'Certifications'],
    ['#e5', 'E5'],
    ['#contact', 'Contact'],
  ]
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-logo">
          <span className="nav-mark">A</span>
          Axel&nbsp;Leroy
        </a>
        <div className="nav-links">
          {links.map(([href, label], i) => (
            <a key={href} href={href} className={i > 3 ? '' : 'hide-sm'}>{label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero wrap" id="top">
      <div className="hero-glow" />
      <span className="hero-eyebrow"><span className="dot" /> Disponible pour alternance &amp; stages</span>
      <h1>Développeur <em>FullStack</em> &amp; Cybersécurité</h1>
      <p>
        Étudiant en BTS SIO à Rennes, je conçois des applications web performantes et sécurisées.
        Bretagne, France.
      </p>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">Découvrir mes projets <ArrowIcon /></a>
        <a href="#contact" className="btn btn-ghost">Me contacter</a>
      </div>
    </header>
  )
}

function About() {
  return (
    <section className="section wrap" id="about">
      <Reveal>
        <div className="section-head">
          <span className="kicker">01 — À propos</span>
          <h2>Créativité et rigueur technique</h2>
        </div>
        <div className="about-grid">
          <div className="about-bio">
            <p className="serif">
              Étudiant en BTS SIO à l'AFTEC de Rennes, je me spécialise dans le développement
              web et la cybersécurité. Je combine créativité et rigueur technique pour
              concevoir des solutions innovantes.
            </p>
            <p>
              Mon objectif : devenir un développeur fullstack capable de créer des applications
              performantes et sécurisées. En dehors du code : fitness, jeux vidéo et automobile.
            </p>
            <div className="tags">
              <span>Bretagne, France</span>
              <span>BTS SIO SLAM</span>
              <span>AFTEC Rennes</span>
            </div>
          </div>
          <div className="about-side">
            <a href="https://linkedin.com/in/axel-leroy-it" target="_blank" rel="noreferrer" className="card fact">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <div><b>LinkedIn</b> axel-leroy-it</div>
            </a>
            <a href="mailto:axelleroy@duck.com" className="card fact">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
              </svg>
              <div><b>Email</b> axelleroy@duck.com</div>
            </a>
            <a href="https://gitlab.com/axellr" target="_blank" rel="noreferrer" className="card fact">
              <GitLabIcon />
              <div><b>GitLab</b> gitlab.com/axellr</div>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Projects({ onDiscord }) {
  return (
    <section className="section wrap" id="projects">
      <Reveal>
        <div className="section-head">
          <span className="kicker">02 — Projets</span>
          <h2>Ce que je construis</h2>
        </div>
        <div className="projects-grid">
          <div className="card project-card">
            <h3>Portfolio BTS</h3>
            <p>Site web professionnel pour présenter mes compétences et réalisations BTS SIO. Design moderne et responsive avec animations fluides.</p>
            <div className="tags">
              <span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>Responsive</span>
            </div>
          </div>
          <div className="card project-card">
            <h3>Bot Discord</h3>
            <p>Bot JavaScript multi-fonctionnel pour la gestion et la modération de serveurs Discord. Commandes personnalisées, système de logs et automatisation de tâches.</p>
            <div className="tags">
              <span>JavaScript</span><span>Node.js</span><span>Discord.js</span><span>API</span>
            </div>
            <button className="project-link" onClick={onDiscord}>
              Voir les commandes (50+) <ArrowIcon />
            </button>
          </div>
          <div className="card project-card">
            <h3>Projet Application</h3>
            <p>Application web de gestion développée en PHP sur Laravel. Système de gestion des utilisateurs, authentification sécurisée et interface admin.</p>
            <div className="tags">
              <span>PHP</span><span>Laravel</span><span>Tailwind CSS</span><span>MySQL</span>
            </div>
            <a href="https://gitlab.com/axellr/app_natation_axell" target="_blank" rel="noreferrer" className="project-link">
              <GitLabIcon /> Voir le projet
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

const SKILLS = [
  { name: 'Développement', items: ['HTML5 & CSS3', 'React', 'Tailwind CSS', 'PHP', 'Node.js', 'Laravel', 'API REST'] },
  { name: 'Bases de données', items: ['SQL & MySQL', 'DBeaver'] },
  { name: 'Outils', items: ['Git & GitLab', 'Docker', 'VSCode', 'GLPI', 'Wireshark'] },
  { name: 'Systèmes & Réseaux', items: ['Windows Server', 'Windows', 'macOS', 'Linux', 'VMware', 'Cisco Packet Tracer'] },
]

function Skills() {
  return (
    <section className="section wrap" id="skills">
      <Reveal>
        <div className="section-head">
          <span className="kicker">03 — Compétences</span>
          <h2>Ma boîte à outils</h2>
        </div>
        <div className="skills-grid">
          {SKILLS.map(s => (
            <div key={s.name} className="card skill-card">
              <h3>{s.name}</h3>
              <ul>{s.items.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

const PRO_ITEMS = [
  {
    title: 'Développeur IA',
    date: 'Janvier 2026',
    company: 'LERY Technologie · Cesson-Sévigné',
    desc: "Développement d'une IA personnalisée basée sur Ollama pour fournir des conseils de conduite adaptés aux données utilisateur. Preprocessing et tests d'utilisabilité.",
    tags: ['Ollama', 'Python', 'ML', 'API'],
  },
  {
    title: 'Stagiaire Développeur PHP',
    date: 'Juin 2025',
    company: 'LERY Technologie · Cesson-Sévigné',
    desc: 'Stage développement web PHP/Laravel. Réalisation de pages dynamiques, intégration de composants réutilisables et connexion base de données MySQL.',
    tags: ['PHP', 'Laravel', 'MySQL', 'MVC'],
  },
  {
    title: 'Stage Support Informatique',
    date: '2019 – 2022',
    company: 'Veraltis · Landerneau',
    desc: 'Support technique N1/N2, installation et configuration de postes Windows, dépannage réseau, gestion de tickets GLPI, rédaction de documentation.',
    tags: ['Windows', 'Réseaux', 'GLPI', 'Support IT'],
  },
]

const EDU_ITEMS = [
  {
    title: 'BTS SIO option SLAM',
    date: '2024 – 2026',
    company: 'AFTEC · Rennes',
    desc: "Services Informatiques aux Organisations, spécialité développement d'applications (SLAM). Formation en cours.",
    tags: ['Dev', 'Cybersécurité', 'Réseaux'],
  },
  {
    title: 'Bac Pro Systèmes Numériques',
    date: '2019 – 2022',
    company: 'La Croix Rouge La Salle · Brest',
    desc: 'Diplôme obtenu en 2022. Systèmes numériques, réseaux informatiques et électronique.',
    tags: ['Réseaux', 'Electronique', 'Systèmes'],
  },
]

function Experience() {
  const Section = ({ label, items }) => (
    <>
      <div className="xp-subhead">{label}</div>
      {items.map(item => (
        <div key={item.title} className="xp-item">
          <span className="xp-date">{item.date}</span>
          <div>
            <h3>{item.title}</h3>
            <p className="xp-company">{item.company}</p>
            <p>{item.desc}</p>
            <div className="tags">{item.tags.map(t => <span key={t}>{t}</span>)}</div>
          </div>
        </div>
      ))}
    </>
  )
  return (
    <section className="section wrap" id="xp">
      <Reveal>
        <div className="section-head">
          <span className="kicker">04 — Parcours</span>
          <h2>Expériences &amp; formation</h2>
        </div>
        <Section label="// expériences professionnelles" items={PRO_ITEMS} />
        <Section label="// formation" items={EDU_ITEMS} />
      </Reveal>
    </section>
  )
}

const CNIL_MODULES = [
  { num: '01', title: 'Le RGPD et ses notions clés', date: 'Oct. 2024', file: '/docs/certifs/Certificat_module_1_page-0001.jpg' },
  { num: '02', title: 'Les bases légales', date: '2024', file: '/docs/certifs/Attestation_module_2_page-0001.jpg' },
  { num: '03', title: 'Les droits des personnes', date: '2024', file: '/docs/certifs/Certificat_module_3_page-0001.jpg' },
  { num: '04', title: 'Les obligations du responsable de traitement', date: '2024', file: '/docs/certifs/Certificat_mudule_4_page-0001.jpg' },
  { num: '05', title: 'La sécurité des données personnelles', date: '2024', file: '/docs/certifs/Certificat_module_5_page-0001.jpg' },
]

const CISCO_CERTS = [
  { title: 'Networking Basics', date: 'Fév. 2026', file: '/docs/certifs/NetworkingBasicsUpdate20260211-33-yk9zbg_page-0001.jpg' },
  { title: 'Networking Devices and Basic Configuration', date: 'Fév. 2026', file: '/docs/certifs/NetworkingDevicesandBasicConfigUpdate20260211-31-effdmg_page-0001.jpg' },
  { title: 'Network Addressing & Basic Troubleshooting', date: 'Fév. 2026', file: '/docs/certifs/NetworkAddressingandBasicTroubleshootingUpdate20260211-31-rby6my_page-0001.jpg' },
]

function Certifications({ onOpen }) {
  return (
    <section className="section wrap" id="certs">
      <Reveal>
        <div className="section-head">
          <span className="kicker">05 — Certifications</span>
          <h2>Formations certifiantes</h2>
        </div>

        <div className="cert-group">
          <h3>CNIL · L'Atelier RGPD</h3>
          <p className="sub">5 modules complétés</p>
          <div className="cert-list">
            {CNIL_MODULES.map(m => (
              <button key={m.num} className="cert-item" onClick={() => onOpen({ title: m.title, file: m.file })}>
                <span className="t">{m.num}. {m.title}<span className="d">{m.date}</span></span>
                <ArrowIcon />
              </button>
            ))}
          </div>
        </div>

        <div className="cert-group">
          <h3>Cisco Networking Academy</h3>
          <p className="sub">3 certifications</p>
          <div className="cert-list">
            {CISCO_CERTS.map(c => (
              <button key={c.title} className="cert-item" onClick={() => onOpen({ title: c.title, file: c.file })}>
                <span className="t">{c.title}<span className="d">{c.date}</span></span>
                <ArrowIcon />
              </button>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function E5({ onOpen }) {
  return (
    <section className="section wrap" id="e5">
      <Reveal>
        <div className="section-head">
          <span className="kicker">06 — BTS SIO · SLAM · Session 2025</span>
          <h2>Épreuve E5</h2>
          <p style={{ color: 'var(--ink-soft)', maxWidth: '64ch' }}>
            Production et fourniture de services informatiques. Cette épreuve valide les
            compétences techniques acquises en développement (SLAM).
          </p>
        </div>

        <a href="/docs/Tableau_synth%C3%A8se-SIO-AXELLEROY_PDF.pdf" target="_blank" rel="noreferrer" className="card e5-doc">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent-deep)" strokeWidth="1.5" strokeLinecap="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          <div style={{ flex: 1 }}>
            <span className="name">Tableau de Synthèse</span>
            <span className="meta">Option : SLAM · Session : 2025</span>
          </div>
          <ArrowIcon />
        </a>

        <div className="e5-grid">
          {E5_COMPETENCIES.map(comp => (
            <button key={comp.id} className="e5-comp" onClick={() => onOpen({
              title: `${comp.num} — ${comp.title}`,
              ...E5_PROOFS[comp.id],
            })}>
              <div>
                <span className="e5-num">{comp.num}</span>
                <h4>{comp.title}</h4>
                <p>{comp.project}</p>
              </div>
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const data = new FormData(e.target)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })
      setSent(true)
    } catch {
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section wrap" id="contact">
      <Reveal>
        <div className="section-head">
          <span className="kicker">07 — Contact</span>
          <h2>Travaillons ensemble</h2>
        </div>
        <div className="contact-grid">
          <div className="card">
            <a href="mailto:axelleroy@duck.com" className="contact-item">
              <span className="ci-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <div><span className="ci-label">Email</span><div className="ci-val">axelleroy@duck.com</div></div>
            </a>
            <a href="https://linkedin.com/in/axel-leroy-it" target="_blank" rel="noreferrer" className="contact-item">
              <span className="ci-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </span>
              <div><span className="ci-label">LinkedIn</span><div className="ci-val">axel-leroy-it</div></div>
            </a>
            <div className="contact-item">
              <span className="ci-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div><span className="ci-label">Localisation</span><div className="ci-val">Bretagne, France</div></div>
            </div>
          </div>

          <div className="card">
            {sent ? (
              <div className="contact-success">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Message envoyé — je vous répondrai dans les plus brefs délais.
              </div>
            ) : (
              <form className="contact-form" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <div className="cf-field">
                  <label className="cf-label">Nom</label>
                  <input className="cf-input" type="text" name="nom" placeholder="Votre nom" required />
                </div>
                <div className="cf-field">
                  <label className="cf-label">Email</label>
                  <input className="cf-input" type="email" name="email" placeholder="votre@email.com" required />
                </div>
                <div className="cf-field">
                  <label className="cf-label">Message</label>
                  <textarea className="cf-textarea" name="message" placeholder="Votre message..." rows="5" required />
                </div>
                <button className="cf-submit" type="submit" disabled={loading}>
                  {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function DiscordLightbox({ onClose }) {
  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lb-inner" onClick={e => e.stopPropagation()}>
        <div className="lb-header">
          <span>Bot Discord — commandes</span>
          <button className="lb-close" onClick={onClose} aria-label="Fermer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="lb-body">
          {DISCORD_CATEGORIES.map(cat => (
            <div key={cat.name} style={{ marginBottom: 24 }}>
              <h4 style={{ fontSize: 15, marginBottom: 10, color: cat.color }}>{cat.name}</h4>
              <ul style={{ listStyle: 'none' }}>
                {cat.commands.map(cmd => (
                  <li key={cmd.cmd} style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 12, fontSize: 13.5, padding: '6px 0', borderBottom: '1px solid var(--line)' }}>
                    <code className="mono" style={{ color: 'var(--accent-deep)' }}>{cmd.cmd}</code>
                    <span style={{ color: 'var(--ink-soft)' }}>{cmd.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Legal() {
  return (
    <section className="section wrap legal" id="legal">
      <Reveal>
        <div className="section-head">
          <span className="kicker">08 — Informations</span>
          <h2>Mentions légales</h2>
        </div>
        <div className="about-grid">
          <div>
            <h3>Responsable de la publication</h3>
            <ul>
              <li><b>Nom</b> Axel Leroy</li>
              <li><b>Adresse</b> 35500 Vitré</li>
              <li><b>Email</b> axell29@protonmail.com</li>
              <li><b>Tél</b> Non communiqué</li>
            </ul>
            <h3>Hébergement</h3>
            <ul>
              <li><b>Propriétaire</b> Netlify, Inc.</li>
              <li><b>Adresse</b> 44 Montgomery Street, Suite 300, San Francisco, CA 94104, États-Unis</li>
              <li><b>Site</b> <a href="https://www.netlify.com" target="_blank" rel="noreferrer">netlify.com</a></li>
            </ul>
          </div>
          <div>
            <h3>Propriété intellectuelle</h3>
            <p>Le contenu de ce site est protégé par des droits d'auteur. Toute reproduction est interdite sans autorisation préalable, sauf pour les éléments placés sous licence libre.</p>
            <h3>Confidentialité</h3>
            <p>Ce site n'utilise pas de cookies à des fins publicitaires ou de personnalisation. Les données collectées via le formulaire de contact (prénom, e-mail, message) sont utilisées uniquement pour répondre à vos demandes. Vous disposez d'un droit d'accès, de rectification et de suppression à tout moment.</p>
            <h3>Conditions d'utilisation</h3>
            <p>L'utilisation de ce site implique l'acceptation des présentes conditions. Toute utilisation à des fins illégales est strictement interdite.</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default function App() {
  const [lightbox, setLightbox] = useState(null)
  const [discordOpen, setDiscordOpen] = useState(false)

  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Projects onDiscord={() => setDiscordOpen(true)} />
        <Skills />
        <Experience />
        <Certifications onOpen={setLightbox} />
        <E5 onOpen={setLightbox} />
        <Contact />
        <Legal />
      </main>
      <footer className="footer wrap">
        <span>© 2025 Axel Leroy — Rennes, Bretagne</span>
        <span>
          <a href="https://gitlab.com/axellr" target="_blank" rel="noreferrer">GitLab</a>
          &nbsp;·&nbsp;
          <a href="https://linkedin.com/in/axel-leroy-it" target="_blank" rel="noreferrer">LinkedIn</a>
          &nbsp;·&nbsp;
          <a href="#legal">Mentions légales</a>
        </span>
      </footer>

      <Lightbox data={lightbox} onClose={() => setLightbox(null)} />
      {discordOpen && <DiscordLightbox onClose={() => setDiscordOpen(false)} />}
    </>
  )
}
