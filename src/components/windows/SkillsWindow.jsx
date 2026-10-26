const TREE = [
  {
    name: 'Développement',
    children: [
      {
        name: 'Frontend',
        children: [
          { name: 'HTML5 & CSS3', type: 'file' },
          { name: 'React',        type: 'file' },
          { name: 'Tailwind CSS', type: 'file' },
        ],
      },
      {
        name: 'Backend',
        children: [
          { name: 'PHP',      type: 'file' },
          { name: 'Node.js',  type: 'file' },
          { name: 'Laravel',  type: 'file' },
          { name: 'API REST', type: 'globe' },
        ],
      },
    ],
  },
  {
    name: 'Bases de données',
    children: [
      { name: 'SQL & MySQL', type: 'db'   },
      { name: 'DBeaver',     type: 'gear' },
    ],
  },
  {
    name: 'Outils',
    children: [
      { name: 'Git & GitLab', type: 'terminal' },
      { name: 'Docker',       type: 'gear'     },
      { name: 'VSCode',       type: 'file'     },
      { name: 'GLPI',         type: 'gear'     },
      { name: 'Wireshark',    type: 'globe'    },
    ],
  },
  {
    name: 'Systèmes & Réseaux',
    children: [
      { name: 'Windows Server',      type: 'gear'     },
      { name: 'Windows',             type: 'gear'     },
      { name: 'MAC OS',              type: 'terminal' },
      { name: 'Linux',               type: 'terminal' },
      { name: 'VMware',              type: 'gear'     },
      { name: 'Cisco Packet Tracer', type: 'globe'    },
    ],
  },
]

const FolderIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <path d="M1 4a1 1 0 0 1 1-1h4l1.5 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4z" />
  </svg>
)

const FileIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <path d="M9 1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6L9 1z" />
    <polyline points="9 1 9 6 14 6" />
  </svg>
)

const GlobeIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <circle cx="8" cy="8" r="6" />
    <path d="M2 8h12M8 2c-2 2-3 3.5-3 6s1 4 3 6M8 2c2 2 3 3.5 3 6s-1 4-3 6" />
  </svg>
)

const GearIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <circle cx="8" cy="8" r="2.5" />
    <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" />
  </svg>
)

const DbIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <ellipse cx="8" cy="4" rx="5" ry="2" />
    <path d="M3 4v8c0 1.1 2.24 2 5 2s5-.9 5-2V4" />
    <path d="M3 8c0 1.1 2.24 2 5 2s5-.9 5-2" />
  </svg>
)

const ICONS = {
  file:     <FileIcon />,
  globe:    <GlobeIcon />,
  gear:     <GearIcon />,
  db:       <DbIcon />,
  terminal: <span className="sk-term">&gt;_</span>,
  folder:   <FolderIcon />,
}

function countAll(items) {
  let dirs = 0, files = 0
  for (const item of items) {
    if (item.children) {
      dirs++
      const sub = countAll(item.children)
      dirs += sub.dirs
      files += sub.files
    } else {
      files++
    }
  }
  return { dirs, files }
}

function TreeNode({ item, prefix, isLast }) {
  const hasChildren = !!item.children
  const connector   = prefix === '' ? '' : (isLast ? '└── ' : '├── ')
  const childPrefix = prefix + (isLast ? '    ' : '│   ')

  return (
    <>
      <div className={`sk-row${prefix === '' ? ' sk-root' : ''}`}>
        <span className="sk-pre">{prefix}{connector}</span>
        <span className={`sk-ico sk-ico-${hasChildren ? 'folder' : item.type}`}>
          {hasChildren ? <FolderIcon /> : ICONS[item.type]}
        </span>
        <span className={hasChildren ? (prefix === '' ? 'sk-cat' : 'sk-subcat') : 'sk-leaf'}>
          {item.name}
        </span>
      </div>

      {hasChildren && item.children.map((child, i) => (
        <TreeNode
          key={child.name}
          item={child}
          prefix={childPrefix}
          isLast={i === item.children.length - 1}
        />
      ))}

      {prefix === '' && <div className="sk-gap" />}
    </>
  )
}

export default function SkillsWindow() {
  const { dirs, files } = countAll(TREE)
  return (
    <div className="sk-tree">
      <div className="sk-header">skills/</div>
      <div className="sk-gap" />
      {TREE.map((item, i) => (
        <TreeNode key={item.name} item={item} prefix="" isLast={i === TREE.length - 1} />
      ))}
      <div className="sk-footer">{dirs} directories, {files} files</div>
    </div>
  )
}
