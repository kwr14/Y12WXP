import React, { useEffect, useRef, useMemo } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { evaluate, derivative as mathDerivative, parse } from 'mathjs'

const X_MIN = -6, X_MAX = 6, SEGMENTS = 300

function evalFn(expr, x) {
  try { return evaluate(expr, { x }) } catch { return NaN }
}

function evalDerivative(expr, x) {
  try {
    const d = mathDerivative(expr, 'x')
    return evaluate(d.toString(), { x })
  } catch {
    // numerical fallback
    const h = 1e-5
    return (evalFn(expr, x + h) - evalFn(expr, x - h)) / (2 * h)
  }
}

export default function DerivativeScene({ fnString, xValue, onResult }) {
  const mountRef = useRef(null)
  const stateRef = useRef({})

  const slope = useMemo(() => {
    const s = evalDerivative(fnString, xValue)
    return isFinite(s) ? s : null
  }, [fnString, xValue])

  useEffect(() => {
    if (slope !== null) onResult?.({ type: 'derivative', slope, x: xValue, fn: fnString })
  }, [slope, xValue, fnString])

  useEffect(() => {
    const el = mountRef.current
    if (!el) return
    const W = el.clientWidth, H = el.clientHeight

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0d0d1a)

    // Camera
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.01, 500)
    camera.position.set(0, 2, 12)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.06

    // Grid
    const grid = new THREE.GridHelper(20, 20, 0x222244, 0x1a1a33)
    grid.rotation.x = Math.PI / 2
    scene.add(grid)

    // Axes
    const axMat = new THREE.LineBasicMaterial({ color: 0x3a3a5c })
    const axPts = [
      new THREE.Vector3(-7, 0, 0), new THREE.Vector3(7, 0, 0),
      new THREE.Vector3(0, -5, 0), new THREE.Vector3(0, 5, 0),
    ]
    const axGeo = new THREE.BufferGeometry().setFromPoints(axPts.slice(0, 2))
    scene.add(new THREE.Line(axGeo, axMat))
    const axGeo2 = new THREE.BufferGeometry().setFromPoints(axPts.slice(2))
    scene.add(new THREE.Line(axGeo2, axMat))

    stateRef.current = { scene, camera, renderer, controls }

    // Resize
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

  // Redraw curve + tangent when fn or x changes
  useEffect(() => {
    const { scene } = stateRef.current
    if (!scene) return

    // Remove old curve/tangent/point objects
    const toRemove = scene.children.filter(c => c.userData.dynamic)
    toRemove.forEach(c => scene.remove(c))

    // Curve
    const pts = []
    for (let i = 0; i <= SEGMENTS; i++) {
      const x = X_MIN + (X_MAX - X_MIN) * (i / SEGMENTS)
      const y = evalFn(fnString, x)
      if (isFinite(y) && Math.abs(y) < 20) pts.push(new THREE.Vector3(x, y, 0))
      else if (pts.length > 1) break
    }
    if (pts.length > 1) {
      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      const mat = new THREE.LineBasicMaterial({ color: 0x4f8ef7, linewidth: 2 })
      const curve = new THREE.Line(geo, mat)
      curve.userData.dynamic = true
      scene.add(curve)
    }

    // Tangent line
    const y0 = evalFn(fnString, xValue)
    const m  = evalDerivative(fnString, xValue)
    if (isFinite(y0) && isFinite(m)) {
      const tLen = 3
      const tPts = [
        new THREE.Vector3(xValue - tLen, y0 - m * tLen, 0),
        new THREE.Vector3(xValue + tLen, y0 + m * tLen, 0),
      ]
      const tGeo = new THREE.BufferGeometry().setFromPoints(tPts)
      const tMat = new THREE.LineBasicMaterial({ color: 0x00d4ff, linewidth: 3 })
      const tangent = new THREE.Line(tGeo, tMat)
      tangent.userData.dynamic = true
      scene.add(tangent)

      // Point on curve
      const sphereGeo = new THREE.SphereGeometry(0.12, 16, 16)
      const sphereMat = new THREE.MeshBasicMaterial({ color: 0x00ff88 })
      const sphere = new THREE.Mesh(sphereGeo, sphereMat)
      sphere.position.set(xValue, y0, 0)
      sphere.userData.dynamic = true
      scene.add(sphere)
    }
  }, [fnString, xValue])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      <div className="scene-label">Drag to orbit · Scroll to zoom</div>
      {slope !== null && (
        <div className="result-badge">
          f ′({xValue.toFixed(2)}) = {slope.toFixed(4)}
        </div>
      )}
    </div>
  )
}
