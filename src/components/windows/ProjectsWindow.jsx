const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const GitLabIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
  </svg>
)

export default function ProjectsWindow() {
  return (
    <div className="projects-list">

      <div className="project-card">
        <div className="project-top">
          <h3>Portfolio BTS</h3>
          <div className="project-actions">
            <a href="#" target="_blank" rel="noreferrer" title="Voir le projet"><ExternalIcon /></a>
          </div>
        </div>
        <p>Site web professionnel pour présenter mes compétences et réalisations BTS SIO. Design moderne et responsive avec animations fluides.</p>
        <div className="tags">
          <span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>Responsive</span>
        </div>
      </div>

      <div className="project-card">
        <div className="project-top">
          <h3>Bot Discord</h3>
          <div className="project-actions">
            <a href="#" target="_blank" rel="noreferrer" title="GitLab"><GitLabIcon /></a>
          </div>
        </div>
        <p>Bot JavaScript multi-fonctionnel pour la gestion et la modération de serveurs Discord. Commandes personnalisées, système de logs et automatisation de tâches.</p>
        <div className="tags">
          <span>JavaScript</span><span>Node.js</span><span>Discord.js</span><span>API</span>
        </div>
        <button className="cmd-open-btn" data-open="discord-cmds">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          Voir les commandes (50+)
        </button>
      </div>

      <div className="project-card">
        <div className="project-top">
          <h3>Projet Application</h3>
          <div className="project-actions">
            <a href="#" target="_blank" rel="noreferrer" title="GitLab"><GitLabIcon /></a>
          </div>
        </div>
        <p>Application web de gestion développée en PHP sur Laravel. Système de gestion des utilisateurs, authentification sécurisée et interface admin.</p>
        <div className="tags">
          <span>PHP</span><span>Laravel</span><span>Tailwind CSS</span><span>MySQL</span>
        </div>
        <a href="https://gitlab.com/axellr/app_natation_axell" target="_blank" rel="noreferrer" className="cmd-open-btn">
          <GitLabIcon />
          Voir le projet
        </a>
      </div>

    </div>
  )
}
