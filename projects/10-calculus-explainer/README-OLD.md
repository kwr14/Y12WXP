# Calculus Explainer 📊

An interactive **3D web app** for visualising calculus concepts — derivatives, integrals, and limits — with AI-powered explanations powered by Claude.

Built as a work-experience project for Year 12 A-level students.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Derivative Explorer** | Plot any function, drag a slider to move along the curve, watch the tangent line update in real time |
| **Integral Visualiser** | Shade the area under the curve, adjust integration bounds, see the exact value computed symbolically |
| **Limit Explorer** | Animate left & right approach to any limit point, see whether they converge |
| **AI Explanations** | One click asks Claude to explain what you're looking at in plain English |
| **Exact Maths** | Backend uses SymPy for symbolic differentiation and integration (not just numerical approximation) |
| **3D Graphics** | Three.js scene — orbit, zoom, rotate |

---

## 🚀 How to run it (local development)

### Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | ≥ 18 | https://nodejs.org |
| Python | ≥ 3.11 | https://python.org |
| Git | any | https://git-scm.com |

You also need an **Anthropic API key** for the AI explanations (get one free at https://console.anthropic.com).

---

### 1 — Clone the repo

```bash
git clone https://github.com/kwr14/WXP.git
cd WXP
git checkout final
```

---

### 2 — Set up the backend

```bash
cd backend

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate        # macOS / Linux
# venv\Scripts\activate         # Windows

# Install Python dependencies
pip install -r requirements.txt

# Add your API key
cp .env.example .env
# Open .env and set:  ANTHROPIC_API_KEY=sk-ant-...

# Start the backend server
python main.py
# → running at http://localhost:8000
# → API docs at http://localhost:8000/docs
```

---

### 3 — Set up the frontend

Open a **new terminal tab**:

```bash
cd frontend

# Install Node dependencies
npm install

# Start the dev server
npm run dev
# → running at http://localhost:5173
```

---

### 4 — Open the app

Visit **http://localhost:5173** in your browser.

> **Note:** The 3D visualiser works without the backend. You only need the backend running if you want exact symbolic calculations or AI explanations.

---

## 🐳 Run with Docker (optional)

If you have Docker installed you can start both services with one command:

```bash
# From the repo root
ANTHROPIC_API_KEY=sk-ant-... docker-compose up
```

Then open http://localhost:5173.

---

## 🧪 Run the tests

```bash
cd backend
source venv/bin/activate
pytest tests/ -v
```

Expected output: 6 passing tests covering derivatives, integrals, and function evaluation.

---

## 📁 Project structure

```
WXP/
├── frontend/                   React + Vite + Three.js
│   ├── src/
│   │   ├── App.jsx             Main app layout + state
│   │   ├── components/
│   │   │   ├── DerivativeScene.jsx   3D derivative visualiser
│   │   │   ├── IntegralScene.jsx     3D integral visualiser
│   │   │   ├── LimitScene.jsx        3D limit visualiser
│   │   │   ├── ControlPanel.jsx      Left sidebar (inputs & sliders)
│   │   │   └── ExplanationPanel.jsx  Right sidebar (AI explanations)
│   │   └── api/client.js       Axios API wrapper
│   └── package.json
│
├── backend/                    Python FastAPI
│   ├── main.py                 App entry point
│   ├── routers/
│   │   ├── math_router.py      /api/math/* (derivative, integral, evaluate)
│   │   ├── ai_router.py        /api/ai/explain (Claude API)
│   │   └── health_router.py    /health
│   ├── tests/
│   │   └── test_math.py        Pytest unit tests
│   ├── requirements.txt
│   └── Dockerfile
│
├── .github/workflows/ci.yml    GitHub Actions (tests + build on every push)
├── docker-compose.yml
└── README.md
```

---

## 🔌 API reference

| Method | Endpoint | Body | Returns |
|--------|----------|------|---------|
| POST | `/api/math/derivative` | `{function, x?}` | symbolic derivative + optional value at x |
| POST | `/api/math/integral` | `{function, bounds?}` | definite or indefinite integral |
| POST | `/api/math/evaluate` | `{function, x}` | f(x) at a point |
| POST | `/api/ai/explain` | `{mode, function, ...}` | Claude explanation |
| GET  | `/health` | — | service status |

Interactive docs: http://localhost:8000/docs (Swagger UI).

---

## 🧑‍💻 Tech stack

| Layer | Technology |
|-------|-----------|
| 3D Graphics | [Three.js](https://threejs.org) |
| Frontend framework | [React 18](https://react.dev) + [Vite](https://vitejs.dev) |
| Maths parsing (frontend) | [math.js](https://mathjs.org) |
| Backend | [FastAPI](https://fastapi.tiangolo.com) (Python) |
| Symbolic maths | [SymPy](https://sympy.org) |
| AI | [Anthropic Claude API](https://docs.anthropic.com) |
| CI/CD | [GitHub Actions](https://github.com/features/actions) |
| Deployment | Vercel (frontend) + Railway (backend) |

---

## 🎓 Learning goals

By working on this project, students practice:

- **Git workflow** — branches, pull requests, code review, commit messages
- **Full-stack development** — React frontend calling a Python backend
- **3D graphics** — Three.js scene setup, geometry, animation
- **AI integration** — calling the Anthropic API from Python
- **Testing** — writing pytest unit tests for an API
- **DevOps** — CI/CD with GitHub Actions, Docker, cloud deployment

---

## 🤝 Contributing (for work-experience students)

1. Pick a task from the GitHub Issues board
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your work with clear messages: `git commit -m "Add tangent line animation"`
4. Push and open a Pull Request to `develop`
5. Request a code review from a teammate

---

## 📄 Licence

MIT — free to use and learn from.
