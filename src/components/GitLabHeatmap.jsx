import { useEffect, useState } from 'react'

const COLS  = 52  // semaines
const DAYS  = 7
const USER  = 'axellr'

const LEVELS = [
  'rgba(255,255,255,0.05)',
  'rgba(16,185,129,0.25)',
  'rgba(16,185,129,0.50)',
  'rgba(16,185,129,0.75)',
  'rgba(16,185,129,1.00)',
]

function getLevel(count) {
  if (!count) return 0
  if (count <= 2)  return 1
  if (count <= 5)  return 2
  if (count <= 9)  return 3
  return 4
}

function buildGrid(data) {
  // Dernière case = aujourd'hui, on remonte 52 semaines
  const today = new Date()
  const start = new Date(today)
  start.setDate(today.getDate() - (COLS * DAYS - 1))

  const grid   = []   // grid[col][row]
  const months = []   // { label, col }
  let lastMonth = -1

  for (let col = 0; col < COLS; col++) {
    const week = []
    for (let row = 0; row < DAYS; row++) {
      const d = new Date(start)
      d.setDate(start.getDate() + col * DAYS + row)
      const key   = d.toISOString().split('T')[0]
      const count = data[key] || 0
      week.push({ date: key, count, level: getLevel(count) })

      if (row === 0 && d.getMonth() !== lastMonth) {
        months.push({ label: d.toLocaleDateString('fr-FR', { month: 'short' }), col })
        lastMonth = d.getMonth()
      }
    }
    grid.push(week)
  }

  const total = Object.values(data).reduce((a, b) => a + b, 0)
  return { grid, months, total }
}

export default function GitLabHeatmap() {
  const [state, setState] = useState(null)

  useEffect(() => {
    const since = new Date()
    since.setFullYear(since.getFullYear() - 1)
    const sinceStr = since.toISOString().split('T')[0]

    // Récupère les events GitLab paginés et agrège par date
    const fetchAll = async () => {
      // 1. Récupérer l'ID numérique de l'utilisateur
      const userRes = await fetch(`https://gitlab.com/api/v4/users?username=${USER}`)
      const users   = await userRes.json()
      const userId  = users[0]?.id
      if (!userId) throw new Error('user not found')

      // 2. Récupérer les events paginés
      let page = 1
      const counts = {}
      while (true) {
        const res = await fetch(
          `https://gitlab.com/api/v4/users/${userId}/events?after=${sinceStr}&per_page=100&page=${page}`
        )
        if (!res.ok) break
        const items = await res.json()
        if (!items.length) break
        for (const e of items) {
          const date = e.created_at?.split('T')[0]
          if (date) counts[date] = (counts[date] || 0) + 1
        }
        if (items.length < 100) break
        page++
      }
      return counts
    }

    fetchAll()
      .then(data => setState(buildGrid(data)))
      .catch(() => setState({ error: true }))
  }, [])

  if (!state)         return <div className="gl-heatmap gl-loading">Chargement…</div>
  if (state.error)    return null

  const { grid, months, total } = state
  const DAY_LABELS = ['L', '', 'M', '', 'J', '', 'D']

  return (
    <div className="gl-heatmap">
      <div className="gl-header">
        <span className="gl-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/>
            <circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>
          </svg>
          Activité <span>GitLab</span>
        </span>
        <span className="gl-total">{total} contributions cette année</span>
      </div>

      <div className="gl-grid-wrap">
        {/* Labels jours */}
        <div className="gl-day-labels">
          {DAY_LABELS.map((l, i) => <span key={i}>{l}</span>)}
        </div>

        {/* Grille + mois */}
        <div className="gl-right">
          <div className="gl-months">
            {months.map(m => (
              <span key={m.label + m.col} style={{ gridColumn: m.col + 1 }}>{m.label}</span>
            ))}
          </div>
          <div className="gl-grid">
            {grid.map((week, ci) => (
              <div key={ci} className="gl-week">
                {week.map((cell, ri) => (
                  <div
                    key={ri}
                    className="gl-cell"
                    style={{ background: LEVELS[cell.level] }}
                    title={cell.count ? `${cell.date} — ${cell.count} contribution${cell.count > 1 ? 's' : ''}` : cell.date}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="gl-legend">
        <span>Moins</span>
        {LEVELS.map((c, i) => <div key={i} className="gl-cell" style={{ background: c }} />)}
        <span>Plus</span>
      </div>
    </div>
  )
}
