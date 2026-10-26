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

function Section({ label, items }) {
  return (
    <div className="xp-section">
      <div className="xp-section-label">{label}</div>
      {items.map((item, i) => (
        <div key={i} className="xp-item">
          <div className="xp-content">
            <div className="xp-header">
              <h3>{item.title}</h3>
              <span className="xp-date">{item.date}</span>
            </div>
            <p className="xp-company">{item.company}</p>
            <p className="xp-desc">{item.desc}</p>
            <div className="tags">
              {item.tags.map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ExperienceWindow() {
  return (
    <div className="xp-list">
      <Section label="// expériences professionnelles" items={PRO_ITEMS} />
      <Section label="// formation" items={EDU_ITEMS} />
    </div>
  )
}
