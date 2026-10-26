import GitLabHeatmap from '../GitLabHeatmap'

export default function AboutWindow() {
  return (
    <div className="about-wrap">
      <div className="about-top">
        <div className="avatar">AX</div>
        <div className="about-info">
          <h2>Axel Leroy</h2>
          <p className="about-role">Développeur FullStack &amp; Cybersécurité</p>
          <div className="about-badges">
            <span className="badge">Bretagne, France</span>
            <span className="badge">BTS SIO SLAM</span>
          </div>
        </div>
      </div>
      <div className="about-bio">
        <p>Étudiant en BTS SIO à l'AFTEC de Rennes, je me spécialise dans le développement web et la cybersécurité. Je combine créativité et rigueur technique pour concevoir des solutions innovantes.</p>
        <p>Mon objectif : devenir un développeur fullstack capable de créer des applications performantes et sécurisées. En dehors du code : fitness, jeux vidéo et automobile.</p>
      </div>
      <div className="about-links">
        <a href="https://linkedin.com/in/axel-leroy-it" target="_blank" rel="noreferrer" className="alink">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          axel-leroy-it
        </a>
        <a href="mailto:axelleroy@duck.com" className="alink">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
          </svg>
          axelleroy@duck.com
        </a>
        <a href="https://gitlab.com" target="_blank" rel="noreferrer" className="alink">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
          </svg>
          GitLab
        </a>
      </div>
      <GitLabHeatmap />
    </div>
  )
}
