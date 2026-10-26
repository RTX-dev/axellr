const DIRS = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw']

export default function Window({ id, title, width = '500px', height = '420px', children }) {
  return (
    <div className="window" id={`w-${id}`} style={{ width, height }}>
      {DIRS.map(dir => <div key={dir} className="rh" data-dir={dir} />)}
      <div className="titlebar">
        <div className="win-controls win-controls-spacer" aria-hidden="true" />
        <span className="win-title">{title}</span>
        <div className="win-controls">
          <button className="btn-min">−</button>
          <button className="btn-max">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{pointerEvents:'none'}}>
              <rect x="1" y="1" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.3"/>
            </svg>
          </button>
          <button className="btn-close">✕</button>
        </div>
      </div>
      <div className="win-body">
        {children}
      </div>
    </div>
  )
}
