# Calculus Explainer

**Difficulty:** ⭐⭐⭐⭐⭐ (A-Level stretch)
**Duration:** 2 weeks (10 days)
**Team size:** 3–4 students
**Curriculum links:** A-Level Maths (Calculus, Differentiation, Integration, Series), Computer Science

---

## What you're building

An interactive 3D visualisation tool for A-Level calculus concepts. Users can explore derivatives, integrals, and Taylor series through animated 3D graphs built with Three.js, with sliders to adjust parameters and see the maths update in real time. The app has a React frontend (with Three.js for 3D rendering) backed by a Python FastAPI server that performs the mathematical calculations.

## Why this project matters

Calculus is one of the most powerful tools in mathematics and physics, but it can be hard to build intuition for. The best way to understand what a derivative means is to *see* the tangent line sliding along a curve. The best way to understand integration is to *watch* the area fill up. 3D visualisation tools like Mathematica, GeoGebra, and Desmos are used by universities worldwide — this project is a simpler version of exactly those tools, built from scratch.

This is the most technically ambitious project in the programme. It brings together 3D graphics, a Python backend, and complex mathematical concepts. If your team has some prior coding experience and strong Maths, this is the challenge to pick.

---

## What you'll ship

**Module 1 — Differentiation:**
- 3D graph of a polynomial function `f(x)`
- A tangent plane (or tangent line in 2D mode) that slides along the curve
- Sliders for the polynomial coefficients
- Live display of `f'(x)` and its value at the current point
- Animated "secant line becoming tangent" to illustrate the limit definition of a derivative

**Module 2 — Integration:**
- 3D graph with Riemann sum rectangles that fill in the area under the curve
- Slider to control the number of rectangles (n = 1 to 1000)
- Watch the approximation converge to the exact integral as n increases
- Live display of the current approximation vs the exact value

**Module 3 — Taylor Series:**
- Graph of `sin(x)` (or `e^x`)
- Animated addition of Taylor series terms one by one
- Watch the polynomial approximation improve as more terms are added
- Display the current Taylor polynomial formula

**Navigation:** home screen with three module cards.

---

## Tech stack

| Layer | Technology | Why |
|-------|-----------|-----|
| 3D graphics | Three.js | Industry-standard WebGL library; used in games, data viz, and scientific tools |
| Frontend | React 18 + `@react-three/fiber` | React wrapper for Three.js — much easier than raw Three.js |
| Maths helpers | `@react-three/drei` | Ready-made Three.js helpers (cameras, grid, text) |
| Backend | Python 3 + FastAPI | FastAPI is fast to write, great at maths APIs |
| Maths computation | NumPy + SymPy | NumPy for numerical arrays; SymPy for symbolic differentiation |
| Communication | REST API | Frontend sends parameters; backend returns computed points |

---

## This project comes with full documentation

This project was developed in detail before the work experience programme began. The `projects/10-calculus-explainer/` folder contains:

| File | Contents |
|------|---------|
| [README-START-HERE.md](./README-START-HERE.md) | **Start here** — overview, quick start, and navigation guide |
| [Calculus-Explainer-Project-Brief.md](./Calculus-Explainer-Project-Brief.md) | Full project specification |
| [1-Setup-Instructions.md](./1-Setup-Instructions.md) | Step-by-step environment setup |
| [2-GitHub-Repo-Structure.md](./2-GitHub-Repo-Structure.md) | Recommended file structure |
| [3-Starter-Code-Template.md](./3-Starter-Code-Template.md) | Starter code for frontend and backend |
| [4-Day-by-Day-Task-Breakdown.md](./4-Day-by-Day-Task-Breakdown.md) | Detailed day-by-day plan |
| [5-Learning-Resources.md](./5-Learning-Resources.md) | Links and reading for every technology |
| [6-Kickoff-Slide-Deck.md](./6-Kickoff-Slide-Deck.md) | Presentation slides for Day 1 |
| [Quick-Reference-Guide.md](./Quick-Reference-Guide.md) | Commands and snippets to keep open while coding |
| `frontend/` | Complete React + Three.js starter code |
| `backend/` | Complete Python FastAPI starter code |

**If you pick this project, read [README-START-HERE.md](./README-START-HERE.md) immediately after this brief.**

---

## Team roles

| Role | Responsibilities |
|------|----------------|
| **3D Graphics Developer** | Three.js/React Three Fiber setup, 3D curve rendering, tangent line animation |
| **Backend / Maths Developer** | Python FastAPI, NumPy/SymPy calculations, API endpoints |
| **Frontend Developer** | React components, sliders, navigation, connecting to backend API |
| **Tester / PM** | Verifying mathematical correctness, documentation, managing tasks |

---

## High-level day-by-day plan

For the detailed day-by-day plan, see [4-Day-by-Day-Task-Breakdown.md](./4-Day-by-Day-Task-Breakdown.md). In summary:

**Week 1:** Set up React Three Fiber and the Python backend; render a basic 3D curve; implement the differentiation module.

**Week 2:** Build the integration (Riemann sums) and Taylor series modules; connect all sliders to the backend; polish the UI and prepare the demo.

---

## Getting started

1. **Read [README-START-HERE.md](./README-START-HERE.md)** — this is the most important first step. It gives you a complete picture of the project and the quickest path to getting something running.

2. **Follow [1-Setup-Instructions.md](./1-Setup-Instructions.md)** to install all dependencies for both the frontend and backend.

3. **Use the starter code in [3-Starter-Code-Template.md](./3-Starter-Code-Template.md)** — don't start from scratch. The starter code handles the hardest parts of the Three.js setup.

---

## Learning outcomes

**Technical:**
- Three.js and WebGL: 3D rendering in the browser
- `@react-three/fiber`: React integration for 3D scenes
- Python FastAPI: building a REST API with Python
- NumPy: numerical computation (array maths, linspace, numerical differentiation)
- SymPy: symbolic maths (exact differentiation and integration)
- Full-stack architecture with a JavaScript frontend and Python backend

**Transferable:**
- Connecting mathematical concepts to code implementations
- 3D thinking: coordinate systems, cameras, lighting
- The value of visualisation for building intuition
- Working with a large, pre-existing codebase and documentation

---

## Stretch goals

1. **Multivariable calculus**: extend to 3D surfaces (functions of two variables) and visualise partial derivatives as tangent planes
2. **Differential equations**: visualise the solution to `dy/dx = f(x, y)` using a slope field
3. **Fourier series**: similar to Taylor series — decompose a square wave into sine/cosine components and animate the convergence
4. **User-defined functions**: let users type any function (e.g. `sin(x^2) + e^(-x)`) and visualise it
5. **Export image**: render the current 3D view as a PNG for use in notes or presentations

---

## Note on difficulty

This is genuinely the hardest project in the programme. You should expect:
- Three.js to have a steep learning curve (stick with it — it gets easier)
- The Python backend to require careful setup (follow the instructions exactly)
- The maths to be challenging to implement correctly (validate against Wolfram Alpha)

That said, the starter code does a lot of the heavy lifting. Your job in two weeks is to understand it, extend it, and make it your own. That is harder than starting from scratch in some ways, but you'll end up with something much more impressive.

Pick this project if: your team has at least one person who has coded before, at least one person doing A-Level Maths, and you all want a genuine challenge.
