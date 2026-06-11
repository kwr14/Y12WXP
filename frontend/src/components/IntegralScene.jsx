import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { evaluate } from 'mathjs'

const X_MIN = -6, X_MAX = 6, SEGMENTS = 300

function evalFn(expr, x) {
  try { return evaluate(expr, { x }) } catch { return NaN }
}

function numericalIntegral(expr, a, b, n = 1000) {
  const h = (b - a) / n
  let sum = 0
  for (let i = 0; i <= n; i++) {
    const x = a + i * h
    const y = evalFn(expr, x)
    if (!isFinite(y)) continue
    const w = (i === 0 || i === n) ? 1 : (i % 2 === 0 ? 2 : 4)
    sum += w * y
  }
  return (h / 3) * sum
}

export default function IntegralScene({ fnString, lowerBound, upperBound, onResult }) {
  const mountRef = useRef(null)
  const stateRef = useRef({})

  useEffect(() => {
    const el = mountRef.current
    if (!el) return
    const W = el.clientWidth, H = el.clientHeight

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0d0d1a)

    const camera = new THREE.PerspectiveCamera(60, W / H, 0.01, 500)
    camera.position.set(0, 2, 12)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.06

    const grid = new THREE.GridHelper(20, 20, 0x222244, 0x1a1a33)
    grid.rotation.x = Math.PI / 2
    scene.add(grid)

    const axMat = new THREE.LineBasicMaterial({ color: 0x3a3a5c })
    scene.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-7,0,0), new THREE.Vector3(7,0,0)]),
      axMat
    ))
    scene.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,-5,0), new THREE.Vector3(0,5,0)]),
      axMat
    ))

    stateRef.current = { scene, camera, renderer, controls }

    const onResize = () => {
      const W2 = el.clientWidth, H2 = el.clientHeight
      camera.aspect = W2 / H2
      camera.updateProjectionMatrix()
      renderer.setSize(W2, H2)
    }
    window.addEventListener('resize', onResize)

    let rafId
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      controls.dispose()
      renderer.dispose()
      el.removeChild(renderer.domElement)
    }
  }, [])

  useEffect(() => {
    const { scene } = stateRef.current
    if (!scene) return

    scene.children.filter(c => c.userData.dynamic).forEach(c => scene.remove(c))

    // Curve
    const pts = []
    for (let i = 0; i <= SEGMENTS; i++) {
      const x = X_MIN + (X_MAX - X_MIN) * (i / SEGMENTS)
      const y = evalFn(fnString, x)
      if (isFinite(y) && Math.abs(y) < 20) pts.push(new THREE.Vector3(x, y, 0))
    }
    if (pts.length > 1) {
      const curve = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({ color: 0x4f8ef7 })
      )
      curve.userData.dynamic = true
      scene.add(curve)
    }

    // Shaded area (rectangles)
    const numRects = 80
    const a = Math.min(lowerBound, upperBound)
    const b = Math.max(lowerBound, upperBound)
    if (a !== b) {
      const dx = (b - a) / numRects
      for (let i = 0; i < numRects; i++) {
        const x0 = a + i * dx
        const x1 = x0 + dx
        const y  = evalFn(fnString, (x0 + x1) / 2)
        if (!isFinite(y)) continue
        const h   = Math.abs(y)
        const yOff = y > 0 ? h / 2 : -h / 2
        const geo = new THREE.PlaneGeometry(dx * 0.95, h)
        const mat = new THREE.MeshBasicMaterial({
          color: y >= 0 ? 0x4f8ef7 : 0xff6b9d,
          transparent: true,
          opacity: 0.45,
          side: THREE.DoubleSide,
        })
        const rect = new THREE.Mesh(geo, mat)
        rect.position.set((x0 + x1) / 2, yOff, 0)
        rect.userData.dynamic = true
        scene.add(rect)
      }

      // Bound lines
      ;[a, b].forEach((bx, idx) => {
        const by = evalFn(fnString, bx)
        const bPts = [new THREE.Vector3(bx, 0, 0), new THREE.Vector3(bx, isFinite(by) ? by : 0, 0)]
        const bLine = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(bPts),
          new THREE.LineBasicMaterial({ color: idx === 0 ? 0x00ff88 : 0xff8c00, linewidth: 2 })
        )
        bLine.userData.dynamic = true
        scene.add(bLine)
      })

      // Numerical integral
      const area = numericalIntegral(fnString, a, b)
      if (isFinite(area)) onResult?.({ type: 'integral', area, lower: a, upper: b, fn: fnString })
    }
  }, [fnString, lowerBound, upperBound])

  const area = numericalIntegral(fnString, Math.min(lowerBound, upperBound), Math.max(lowerBound, upperBound))

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      <div className="scene-label">Shaded area = definite integral</div>
      {isFinite(area) && (
        <div className="result-badge">
          ∫ f(x) dx = {area.toFixed(4)}
        </div>
      )}
    </div>
  )
}
