export default function LegalWindow() {
  return (
    <div className="legal-wrap">

      {/* ── Mentions légales ── */}
      <section className="legal-section">
        <h2>Mentions légales</h2>

        <div className="legal-block">
          <h3>Responsable de la publication</h3>
          <ul>
            <li><span>Nom</span>Axel Leroy</li>
            <li><span>Adresse</span>35500 Vitré</li>
            <li><span>Email</span>axell29@protonmail.com</li>
            <li><span>Tél</span>Non communiqué</li>
          </ul>
        </div>

        <div className="legal-block">
          <h3>Hébergement</h3>
          <ul>
            <li><span>Propriétaire</span>Netlify, Inc.</li>
            <li><span>Adresse</span>44 Montgomery Street, Suite 300, San Francisco, CA 94104, États-Unis</li>
            <li><span>Site</span><a href="https://www.netlify.com" target="_blank" rel="noreferrer">netlify.com</a></li>
          </ul>
        </div>

        <div className="legal-block">
          <h3>Propriété intellectuelle</h3>
          <p>Le contenu de ce site est protégé par des droits d'auteur. Toute reproduction est interdite sans autorisation préalable, sauf pour les éléments placés sous licence libre.</p>
        </div>
      </section>

      {/* ── Politique de confidentialité ── */}
      <section className="legal-section">
        <h2>Politique de confidentialité</h2>

        <div className="legal-block">
          <h3>Cookies &amp; Données personnelles</h3>
          <p>Ce site n'utilise pas de cookies à des fins publicitaires ou de personnalisation. Seuls des cookies techniques nécessaires à la navigation peuvent être utilisés. Les données collectées via les formulaires sont utilisées uniquement pour répondre à vos demandes. Vous disposez d'un droit d'accès, de rectification et de suppression.</p>
        </div>

        <div className="legal-block">
          <h3>Données collectées</h3>
          <ul>
            <li><span>Type</span>Uniquement via le formulaire de contact : prénom, e-mail, message</li>
            <li><span>Utilisation</span>Pour répondre à vos demandes uniquement</li>
            <li><span>Vos droits</span>Accès, modification ou suppression de vos données à tout moment</li>
          </ul>
        </div>

        <div className="legal-block">
          <h3>Conditions d'utilisation</h3>
          <p>L'utilisation de ce site implique l'acceptation des présentes conditions. Toute utilisation à des fins illégales est strictement interdite.</p>
        </div>
      </section>

    </div>
  )
}
