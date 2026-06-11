import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { evaluate } from 'mathjs'

const X_MIN = -6, X_MAX = 6, SEGMENTS = 300

function evalFn(expr, x) {
  try { return evaluate(expr, { x }) } catch { return NaN }
}

function approachLimit(expr, point, steps = 20) {
  const leftVals  = []
  const rightVals = []
  for (let i = 1; i <= steps; i++) {
    const h = 0.5 / i
    leftVals.push({ x: point - h, y: evalFn(expr, point - h) })
    rightVals.push({ x: point + h, y: evalFn(expr, point + h) })
  }
  return { leftVals, rightVals }
}

export default function LimitScene({ fnString, limitPoint, onResult }) {
  const mountRef = useRef(null)
  const stateRef = useRef({})
  const [animStep, setAnimStep] = useState(0)

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
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-7,0,0), new THREE.Vector3(7,0,0)]), axMat))
    scene.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,-5,0), new THREE.Vector3(0,5,0)]), axMat))

    stateRef.current = { scene, camera, renderer, controls }

    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(el.clientWidth, el.clientHeight)
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

    // Curve (with gap at limit point)
    const ptsLeft = [], ptsRight = []
    for (let i = 0; i <= SEGMENTS; i++) {
      const x = X_MIN + (X_MAX - X_MIN) * (i / SEGMENTS)
      if (Math.abs(x - limitPoint) < 0.05) continue
      const y = evalFn(fnString, x)
      if (!isFinite(y) || Math.abs(y) > 20) continue
      if (x < limitPoint) ptsLeft.push(new THREE.Vector3(x, y, 0))
      else ptsRight.push(new THREE.Vector3(x, y, 0))
    }
    ;[ptsLeft, ptsRight].forEach(pts => {
      if (pts.length < 2) return
      const c = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({ color: 0x4f8ef7 })
      )
      c.userData.dynamic = true
      scene.add(c)
    })

    // Approach points
    const { leftVals, rightVals } = approachLimit(fnString, limitPoint, 12)
    const showCount = Math.min(animStep + 1, 12)

    leftVals.slice(0, showCount).forEach(({ x, y }, i) => {
      if (!isFinite(y)) return
      const geo = new THREE.SphereGeometry(0.08 - i * 0.004, 10, 10)
      const mat = new THREE.MeshBasicMaterial({ color: 0xa855f7 })
      const m = new THREE.Mesh(geo, mat)
      m.position.set(x, y, 0)
      m.userData.dynamic = true
      scene.add(m)
    })
    rightVals.slice(0, showCount).forEach(({ x, y }, i) => {
      if (!isFinite(y)) return
      const geo = new THREE.SphereGeometry(0.08 - i * 0.004, 10, 10)
      const mat = new THREE.MeshBasicMaterial({ color: 0xff8c00 })
      const m = new THREE.Mesh(geo, mat)
      m.position.set(x, y, 0)
      m.userData.dynamic = true
      scene.add(m)
    })

    // Vertical dashed line at limit point
    const vPts = [new THREE.Vector3(limitPoint, -5, 0), new THREE.Vector3(limitPoint, 5, 0)]
    const vLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(vPts),
      new THREE.LineDashedMaterial({ color: 0xffffff, opacity: 0.3, transparent: true, dashSize: 0.3, gapSize: 0.2 })
    )
    vLine.computeLineDistances()
    vLine.userData.dynamic = true
    scene.add(vLine)

    // Estimate limit
    const limitEst = leftVals[leftVals.length - 1]?.y
    if (limitEst !== undefined && isFinite(limitEst)) {
      onResult?.({ type: 'limit', estimate: limitEst, point: limitPoint, fn: fnString })
    }
  }, [fnString, limitPoint, animStep])

  // Auto-animate approach
  useEffect(() => {
    setAnimStep(0)
    const id = setInterval(() => setAnimStep(s => {
      if (s >= 11) { clearInterval(id); return s }
      return s + 1
    }), 220)
    return () => clearInterval(id)
  }, [fnString, limitPoint])

  const limitEst = (() => {
    try {
      const h = 1e-7
      const l = evalFn(fnString, limitPoint - h)
      const r = evalFn(fnString, limitPoint + h)
      if (isFinite(l) && isFinite(r) && Math.abs(l - r) < 0.01) return (l + r) / 2
    } catch {}
    return null
  })()

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      <div className="scene-label">
        Purple = left approach &nbsp;|&nbsp; Orange = right approach
      </div>
      {limitEst !== null && (
        <div className="result-badge">
          lim (x→{limitPoint}) = {limitEst.toFixed(4)}
        </div>
      )}
    </div>
  )
}
