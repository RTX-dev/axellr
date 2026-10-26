import { DISCORD_CATEGORIES } from '../../data/commands'

export default function DiscordCmdsWindow() {
  return (
    <>
      <div className="cmds-header">
        <div className="cmds-prefix">Préfixe : <code>//</code></div>
        <div className="cmds-count">50+ commandes disponibles</div>
      </div>

      {DISCORD_CATEGORIES.map(cat => (
        <div key={cat.name} className="cmd-category">
          <div className="cmd-cat-title">
            <span className="cat-dot" style={{ background: cat.color }} />
            {cat.name}
          </div>
          <div className="cmd-list">
            {cat.commands.map(c => (
              <div key={c.cmd} className="cmd-item">
                <code>{c.cmd}</code>
                <span>{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
