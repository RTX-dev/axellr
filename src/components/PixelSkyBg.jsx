import { useEffect, useRef } from 'react'

const PIXEL = 8

function makeStars(w, h) {
  return Array.from({ length: 90 }, () => ({
    x: Math.random() * w,
    y: (Math.random() * h) * 0.65,
    size: Math.random() < 0.8 ? 2 : 3,
    phase: Math.random() * Math.PI * 2,
    speed: 0.008 + Math.random() * 0.02,
  }))
}

function makeClouds(w, h) {
  return Array.from({ length: 5 }, (_, i) => ({
    x: Math.random() * w,
    y: 40 + Math.random() * (h * 0.3),
    speed: 0.08 + Math.random() * 0.12,
    scale: 2 + Math.floor(Math.random() * 2),
    i,
  }))
}

function px(ctx, x, y, w, h, color) {
  ctx.fillStyle = color
  ctx.fillRect(Math.floor(x / PIXEL) * PIXEL, Math.floor(y / PIXEL) * PIXEL, w * PIXEL, h * PIXEL)
}

function drawCloud(ctx, cx, cy, s, colors) {
  const shape = [
    [0, 2, 6, 2],
    [1, 1, 4, 1],
    [2, 0, 2, 1],
  ]
  for (const [ox, oy, w, h] of shape) {
    px(ctx, cx + ox * s * PIXEL, cy + oy * s * PIXEL, w * s, h * s, colors[0])
  }
  px(ctx, cx + 1 * s * PIXEL, cy + 1 * s * PIXEL, 4 * s, 1, colors[1])
}

function hillPath(seed, baseY, amp) {
  const pts = []
  for (let i = 0; i <= 24; i++) {
    const n = Math.sin(i * 0.9 + seed) * 0.55 + Math.sin(i * 0.35 + seed * 1.7) * 0.45
    pts.push(baseY - n * amp)
  }
  return pts
}

function drawHills(ctx, w, h, theme, t, mx) {
  const layers = theme === 'dark'
    ? [
        { seed: 3.1, base: 0.80, amp: 70, color: '#0d0b08', par: 10 },
        { seed: 5.7, base: 0.88, amp: 55, color: '#15120d', par: 18 },
      ]
    : [
        { seed: 3.1, base: 0.80, amp: 70, color: '#e8ddc8', par: 10 },
        { seed: 5.7, base: 0.88, amp: 55, color: '#f2ead8', par: 18 },
      ]

  for (const L of layers) {
    const pts = hillPath(L.seed, h * L.base, L.amp)
    ctx.fillStyle = L.color
    const off = mx * L.par
    for (let c = 0; c * PIXEL < w + PIXEL; c++) {
      const x = c * PIXEL
      const fi = (x + off) / (w / 24)
      const i0 = Math.floor(((fi % 24) + 24) % 24)
      const i1 = (i0 + 1) % 24
      const frac = fi - Math.floor(fi)
      const y = pts[i0] + (pts[i1] - pts[i0]) * frac
      const col = Math.floor(x / PIXEL)
      ctx.fillRect(col * PIXEL, y, PIXEL, h - y)
    }
  }
}

function drawSun(ctx, x, y, t, dark) {
  if (!dark) {
    px(ctx, x, y, 5, 5, '#f5c518')
    px(ctx, x + PIXEL, y + PIXEL, 3, 3, '#ffd94d')
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + t * 0.3
      const rx = x + 2.5 * PIXEL + Math.cos(a) * 5 * PIXEL
      const ry = y + 2.5 * PIXEL + Math.sin(a) * 5 * PIXEL
      px(ctx, rx, ry, 1, 1, '#f5c518')
    }
  } else {
    px(ctx, x, y, 5, 5, '#f4ede2')
    px(ctx, x + 2 * PIXEL, y + 1 * PIXEL, 3, 3, '#16130f')
    px(ctx, x + 1 * PIXEL, y + 3 * PIXEL, 3, 2, '#f4ede2')
  }
}

export default function PixelSkyBg() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let animId
    let w, h, stars, clouds
    let mouseX = 0, targetX = 0
    const t0 = performance.now()

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      stars = makeStars(w, h)
      clouds = makeClouds(w, h)
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = e => { targetX = (e.clientX / window.innerWidth - 0.5) * 2 }
    window.addEventListener('mousemove', onMove)

    const loop = () => {
      const t = (performance.now() - t0) / 1000
      const theme = document.documentElement.dataset.theme || 'dark'
      const dark = theme === 'dark'
      mouseX += (targetX - mouseX) * 0.04

      ctx.clearRect(0, 0, w, h)

      // Ciel
      ctx.fillStyle = dark ? '#16130f' : '#faf9f5'
      ctx.fillRect(0, 0, w, h)

      if (dark) {
        // Étoiles scintillantes
        for (const s of stars) {
          const tw = 0.4 + 0.6 * Math.abs(Math.sin(t * s.speed * 60 + s.phase))
          ctx.globalAlpha = tw
          ctx.fillStyle = s.size > 2 ? '#ffd9a0' : '#f4ede2'
          ctx.fillRect(s.x, s.y, s.size, s.size)
        }
        ctx.globalAlpha = 1
        // Lune avec halo
        const mg = ctx.createRadialGradient(w * 0.82, h * 0.16, 0, w * 0.82, h * 0.16, 90)
        mg.addColorStop(0, 'rgba(244,237,226,0.10)')
        mg.addColorStop(1, 'transparent')
        ctx.fillStyle = mg
        ctx.fillRect(w * 0.82 - 100, h * 0.16 - 100, 200, 200)
        drawSun(ctx, w * 0.82 - 2.5 * PIXEL, h * 0.16 - 2.5 * PIXEL, t, true)
      } else {
        // Soleil avec rayons tournants + halo
        const sg = ctx.createRadialGradient(w * 0.18, h * 0.15, 0, w * 0.18, h * 0.15, 120)
        sg.addColorStop(0, 'rgba(245,197,24,0.14)')
        sg.addColorStop(1, 'transparent')
        ctx.fillStyle = sg
        ctx.fillRect(0, 0, w, h * 0.6)
        drawSun(ctx, w * 0.18, h * 0.15, t, false)
        // Nuages dérivants
        for (const c of clouds) {
          c.x += c.speed
          if (c.x > w + 80) c.x = -140
          drawCloud(ctx, c.x + mouseX * 12, c.y, c.scale, ['#efe6d2', '#faf6ea'])
        }
      }

      // Collines parallax (les deux thèmes)
      drawHills(ctx, w, h, theme, t, mouseX)

      animId = requestAnimationFrame(loop)
    }
    animId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas ref={ref} className="pixel-sky-bg" />
}
