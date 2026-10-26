const MIN_W = 300
const MIN_H = 200

export default class WindowManager {
  constructor() {
    this.zBase = 200
    this.drag = null
    this.resize = null
    this.isMobile = window.innerWidth < 768
    this._bind()
    this._initAll()
  }

  _bind() {
    if (!this.isMobile) {
      document.addEventListener('mousemove', e => this._onMove(e))
      document.addEventListener('mouseup', () => this._onUp())
    }
  }

  _initAll() {
    document.querySelectorAll('[data-open]').forEach(btn => {
      btn.addEventListener('click', () => this.open(btn.dataset.open))
    })
    document.querySelectorAll('.window').forEach(win => this._initWin(win))

    const glow = document.querySelector('.cursor-glow')
    if (glow) {
      document.addEventListener('mousemove', e => {
        glow.style.left = e.clientX + 'px'
        glow.style.top = e.clientY + 'px'
      })
    }
  }

  _initWin(win) {
    const titlebar = win.querySelector('.titlebar')
    const btnClose = win.querySelector('.btn-close')
    const btnMax = win.querySelector('.btn-max')

    if (!this.isMobile) {
      titlebar.addEventListener('mousedown', e => {
        if (e.target.closest('.win-controls')) return
        e.preventDefault()
        this._front(win)
        this.drag = {
          win,
          ox: e.clientX - win.offsetLeft,
          oy: e.clientY - win.offsetTop,
        }
        document.body.classList.add('no-select')
      })

      win.querySelectorAll('.rh').forEach(rh => {
        rh.addEventListener('mousedown', e => {
          e.preventDefault()
          e.stopPropagation()
          this._front(win)
          this.resize = {
            win,
            dir: rh.dataset.dir,
            sx: e.clientX, sy: e.clientY,
            sw: win.offsetWidth, sh: win.offsetHeight,
            sl: win.offsetLeft, st: win.offsetTop,
          }
          document.body.classList.add('no-select')
        })
      })

      win.addEventListener('mousedown', () => this._front(win))
    }

    btnClose?.addEventListener('click', e => { e.stopPropagation(); this.close(win) })
    btnMax?.addEventListener('click', e => { e.stopPropagation(); this._toggleMax(win) })
  }

  _onMove(e) {
    if (this.drag) {
      const { win, ox, oy } = this.drag
      let x = e.clientX - ox
      let y = e.clientY - oy
      x = Math.max(-win.offsetWidth + 80, Math.min(window.innerWidth - 80, x))
      y = Math.max(0, Math.min(window.innerHeight - 38, y))
      win.style.left = x + 'px'
      win.style.top = y + 'px'
    }

    if (this.resize) {
      const { win, dir, sx, sy, sw, sh, sl, st } = this.resize
      const dx = e.clientX - sx
      const dy = e.clientY - sy
      let nw = sw, nh = sh, nl = sl, nt = st

      if (dir.includes('e')) nw = Math.max(MIN_W, sw + dx)
      if (dir.includes('s')) nh = Math.max(MIN_H, sh + dy)
      if (dir.includes('w')) { nw = Math.max(MIN_W, sw - dx); nl = sl + sw - nw }
      if (dir.includes('n')) { nh = Math.max(MIN_H, sh - dy); nt = st + sh - nh }

      win.style.width = nw + 'px'
      win.style.height = nh + 'px'
      win.style.left = nl + 'px'
      win.style.top = nt + 'px'
    }
  }

  _onUp() {
    this.drag = null
    this.resize = null
    document.body.classList.remove('no-select')
  }

  _front(win) {
    this.zBase++
    win.style.zIndex = this.zBase
  }

  _toggleMax(win) {
    if (win._maximized) {
      const s = win._savedState
      win.style.left = s.left
      win.style.top = s.top
      win.style.width = s.width
      win.style.height = s.height
      win._maximized = false
    } else {
      win._savedState = {
        left: win.style.left, top: win.style.top,
        width: win.style.width, height: win.style.height,
      }
      const m = 16
      win.style.left = m + 'px'
      win.style.top = m + 'px'
      win.style.width = (window.innerWidth - m * 2) + 'px'
      win.style.height = (window.innerHeight - m * 2) + 'px'
      win._maximized = true
    }
    this._front(win)
  }

  open(id) {
    const win = document.getElementById('w-' + id)
    if (!win) return

    if (win.classList.contains('visible')) {
      this._front(win)
      return
    }

    if (!win._everOpened) {
      if (!this.isMobile) {
        const openCount = document.querySelectorAll('.window.visible').length
        const off = openCount * 26
        const vw = window.innerWidth, vh = window.innerHeight
        const ww = win.offsetWidth || parseInt(win.style.width) || 500
        const wh = win.offsetHeight || parseInt(win.style.height) || 420
        win.style.left = Math.max(20, (vw - ww) / 2 + off) + 'px'
        win.style.top = Math.max(20, (vh - wh) / 2 + off) + 'px'
      }
      win._everOpened = true
    }

    win.classList.remove('closing')
    win.classList.add('visible')
    this._front(win)
  }

  close(win) {
    win.classList.add('closing')
    win.addEventListener('animationend', () => {
      win.classList.remove('visible', 'closing')
    }, { once: true })
  }
}
