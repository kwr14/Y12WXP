# Physics Simulation

**Difficulty:** ⭐⭐⭐⭐ (A-Level)
**Duration:** 2 weeks (10 days)
**Team size:** 3–4 students
**Curriculum links:** Physics (Mechanics, Circular Motion, Oscillations), Maths (Vectors, Calculus, Numerical Methods)

---

## What you're building

An interactive physics simulation playground with three real simulations: **projectile motion** (launch an object at any angle and velocity under any gravitational field), **orbital mechanics** (a planet orbiting a star, with adjustable masses and distances), and a **spring-mass system** (a mass on a spring with adjustable stiffness and damping). All simulations run in real time on an HTML Canvas, with parameter sliders and live equation displays that update as you drag.

## Why this project matters

Physical simulation is at the heart of game engines (Unity, Unreal), scientific research software, engineering tools, and special effects in films. The maths you do in A-Level Physics and Maths — Newton's laws, vectors, differential equations — is exactly what runs inside these simulations. Building your own means you'll understand them from the ground up, not just as abstract formulae. CERN, NASA, and Deepmind all employ physicists who can code. This is what that looks like at age 16.

---

## What you'll ship

**Simulation 1 — Projectile Motion:**
- Canvas animation of a projectile arc
- Sliders for: launch angle (0°–90°), initial velocity (0–100 m/s), gravity (1–25 m/s²)
- Shows: trajectory arc, maximum height, range, time of flight
- Displays the equations of motion updating in real time
- Trace mode: show the path taken

**Simulation 2 — Orbital Mechanics:**
- A star (yellow circle) at the centre; a planet orbits around it
- Sliders for: planet mass, star mass, initial orbital radius
- Shows: orbital period, velocity at current position
- Displays Kepler's Third Law equation
- Can add a second planet to show gravitational interaction (stretch)

**Simulation 3 — Spring-Mass System:**
- A mass hanging on a spring, oscillating vertically
- Sliders for: spring constant k (N/m), mass (kg), damping coefficient
- Shows: period, amplitude, energy stored
- Displays the SHM equation `x(t) = A·cos(ωt + φ)`
- Plots displacement vs time on a live graph

**Navigation:** a home screen with three cards linking to each simulation.

---

## Tech stack

| Layer | Technology | Why |
|-------|-----------|-----|
| UI framework | React 18 (Vite) | Component structure for the three simulations |
| Animation | HTML Canvas API + `requestAnimationFrame` | The standard way to do smooth animations in the browser |
| Maths | Vanilla JavaScript | Newton's laws expressed directly in code |
| Charts | Canvas (drawn manually) or Recharts | The displacement chart in the SHM simulator |
| Styling | CSS | Dark theme suits a physics app |

---

## The physics you'll implement

### Projectile motion (Euler's method)

At each time step `dt`:
```javascript
// Euler's method — numerical integration
vx = vx                    // horizontal velocity constant
vy = vy - g * dt           // vertical velocity decreases due to gravity

x = x + vx * dt
y = y + vy * dt

// Stop when y < 0 (hit the ground)
```

### Orbital mechanics

```javascript
// Newton's law of gravitation
const G = 6.674e-11
const r = distance(planet, star)
const F = G * planet.mass * star.mass / (r * r)

// Direction of force (towards the star)
const theta = Math.atan2(star.y - planet.y, star.x - planet.x)
const ax = F / planet.mass * Math.cos(theta)
const ay = F / planet.mass * Math.sin(theta)

// Update velocity and position (Euler)
planet.vx += ax * dt
planet.vy += ay * dt
planet.x += planet.vx * dt
planet.y += planet.vy * dt
```

### Spring-mass system (SHM)

```javascript
// Hooke's law + damping
const omega = Math.sqrt(k / m)           // angular frequency
const displacement = y - equilibrium
const springForce = -k * displacement
const dampingForce = -damping * vy

const ay = (springForce + dampingForce) / m

vy += ay * dt
y += vy * dt
```

---

## Team roles

| Role | Responsibilities |
|------|----------------|
| **Canvas / Animation Lead** | `requestAnimationFrame` loop, Canvas drawing functions, coordinate transforms |
| **Physics Engine** | Implementing the three physics models, parameter calculations, numerical integration |
| **UI Developer** | Sliders, equation display, home screen, navigation, responsive layout |
| **Tester / PM** | Validating physics against known answers, documentation, managing tasks |

---

## 2-week day-by-day plan

### Week 1: Canvas and first simulation

**Day 1 — Setup and Canvas basics**
- Everyone: create Vite + React project, push to GitHub
- Canvas: understand how Canvas works — draw a circle, animate it moving across the screen
- All: read about `requestAnimationFrame` and the game loop pattern
- Physics: plan the data structures for each simulation (position, velocity, parameters)

**Day 2 — The animation loop**
- Canvas: build the `useAnimationLoop` hook:
  ```javascript
  function useAnimationLoop(callback) {
    const rafRef = useRef()
    useEffect(() => {
      const loop = (timestamp) => {
        callback(timestamp)
        rafRef.current = requestAnimationFrame(loop)
      }
      rafRef.current = requestAnimationFrame(loop)
      return () => cancelAnimationFrame(rafRef.current)
    }, [callback])
  }
  ```
- Canvas: build `drawScene(canvas, state)` — clears the canvas and draws all objects
- UI: build the parameter slider component

**Day 3 — Projectile motion**
- Physics: implement the projectile simulation state machine (idle → flying → landed)
- Physics: implement Euler's method for projectile motion
- Canvas: draw the trajectory trace
- UI: wire up the sliders for angle, velocity, gravity

**Day 4 — Projectile polish**
- Physics: calculate and display max height, range, time of flight
- UI: render the live equations: `x = v₀cosθ·t`, `y = v₀sinθ·t - ½gt²`
- All: test against hand-calculated values to verify the physics

**Day 5 — End-of-week demo**
- All: ensure projectile simulation is fully working and polished
- Canvas: start orbital mechanics canvas setup
- PM: demo to mentor; collect feedback; update task list for week 2

### Week 2: Orbital mechanics, SHM, and integration

**Day 6 — Orbital mechanics**
- Physics: implement Newton's gravitational force and Euler integration for orbits
- Canvas: draw the star, planet, and orbital trail
- UI: add sliders for masses and initial radius
- Physics: calculate and display orbital period and velocity

**Day 7 — Orbital mechanics polish**
- Physics: add a second planet (stretch)
- UI: display Kepler's Third Law: `T² ∝ r³`
- Canvas: show the gravitational force vector as an arrow
- All: verify orbital period matches analytical prediction

**Day 8 — Spring-mass system**
- Physics: implement SHM with Hooke's law and damping
- Canvas: animate the spring (draw a zigzag line that stretches/compresses)
- UI: add sliders for k, m, and damping
- Data Viz: plot displacement vs time in real time

**Day 9 — Testing and documentation**
- Tester: validate physics against A-Level formulae
- All: fix any bugs
- PM: write the README; document the physics equations used and where they come from

**Day 10 — Demo**
- All: present all three simulations; explain the physics and the code

---

## Learning outcomes

**Technical:**
- HTML Canvas API: drawing shapes, lines, text, clearing and redrawing
- `requestAnimationFrame` for smooth 60fps animation
- Numerical integration (Euler's method) — a fundamental technique in scientific computing
- React hooks (`useRef`, `useEffect`, `useCallback`) for managing animation lifecycle
- Coordinate system transforms (canvas y-axis is flipped vs physics convention)

**Transferable:**
- Connecting mathematical formulae directly to running code
- Understanding that games and simulations are just physics equations running thousands of times per second
- Debugging by comparing simulation output to analytical solutions
- Communicating complex technical concepts visually

---

## Stretch goals

1. **Runge-Kutta integration**: replace Euler's method with RK4 for more accurate simulations (huge jump in stability for orbital mechanics)
2. **Collision detection**: add multiple projectiles that bounce off each other
3. **N-body simulation**: multiple planets interacting gravitationally (gets computationally intensive — good to explore optimisation)
4. **Energy graphs**: for the spring system, plot kinetic energy, potential energy, and total energy on separate traces to demonstrate conservation of energy
5. **Export animation**: use the Canvas `captureStream` API to record the simulation as a video

---

## Getting started

1. **Create the project**:
   ```bash
   npm create vite@latest physics-simulation -- --template react
   npm run dev
   ```
2. **Start with Canvas basics** — before touching physics, build a React component that renders a Canvas and draws a bouncing ball:
   ```jsx
   // The key pattern:
   const canvasRef = useRef(null)
   useEffect(() => {
     const canvas = canvasRef.current
     const ctx = canvas.getContext('2d')
     // draw something
   }, [])
   return <canvas ref={canvasRef} width={800} height={600} />
   ```
3. **Validate your physics early**: for projectile motion, calculate by hand what the range should be for 45° at 50 m/s — then check your simulation gives the same answer

**Useful links:**
- HTML Canvas tutorial (MDN): https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
- `requestAnimationFrame` guide: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
- Euler's method explained: https://en.wikipedia.org/wiki/Euler_method
- Projectile motion (A-Level): https://www.physicsclassroom.com/class/vectors/Lesson-2/What-is-a-Projectile
- Simple Harmonic Motion (A-Level): https://isaacphysics.org/topics/shm
