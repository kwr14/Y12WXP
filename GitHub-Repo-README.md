# Calculus Explainer

> Interactive 3D web app that visualizes calculus concepts (derivatives, integrals, limits) with AI-powered explanations.

**Status:** 🚀 In Development (Week 1-2 A-Level Project)  
**Demo:** [Coming soon]  
**Documentation:** See `docs/` folder

---

## 🎯 Project Overview

Calculus is abstract. This app makes it intuitive by letting students **see** mathematical concepts in real 3D, explore them interactively, and understand them through AI explanations.

### What It Does

- 📊 **Visualize Functions in 3D** — Enter a function, see it plotted beautifully
- 📈 **Explore Derivatives** — Watch tangent lines move along curves
- ∫ **Understand Integrals** — See area under curves light up
- 🤖 **AI Explanations** — Claude explains what's happening

### What It Doesn't Do (Yet)

- Linear algebra (Phase 2)
- Mobile apps (desktop focus)
- Equation solver / symbolic simplification

---

## 🛠️ Tech Stack

| Layer | Tech | Why |
|-------|------|-----|
| **Frontend** | React + Three.js | Modern UI + stunning 3D graphics |
| **Backend** | Python FastAPI | Fast, lightweight, type-safe |
| **Math** | NumPy + SymPy | Numerical & symbolic calculations |
| **AI** | Claude API | Natural language explanations |
| **DevOps** | Git + GitHub Actions | Professional workflow + CI/CD |
| **Hosting** | Vercel + Railway | Zero-config deployment |

---

## 📁 Project Structure

```
calculus-explainer/
├── frontend/                 # React + Vite + Three.js
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page layouts
│   │   ├── hooks/           # Custom React hooks
│   │   ├── api/             # API client
│   │   ├── styles/          # CSS
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/                  # FastAPI + Python
│   ├── main.py             # Entry point
│   ├── routers/            # API endpoints
│   ├── services/           # Business logic
│   ├── tests/              # Unit tests
│   ├── requirements.txt
│   └── Dockerfile
│
├── docs/                    # Documentation
│   ├── SETUP.md           # Local dev setup
│   ├── ARCHITECTURE.md     # System design
│   ├── API.md             # API docs
│   └── DEPLOYMENT.md      # Deploy guide
│
├── .github/
│   └── workflows/         # CI/CD pipelines
│
└── README.md (you are here)
```

---

## 🚀 Quick Start

### Option 1: Local Development

**Prerequisites:** Node.js 18+, Python 3.9+, Git

```bash
# Clone
git clone https://github.com/kwr14/calculus-explainer.git
cd calculus-explainer

# Frontend
cd frontend
npm install
npm run dev          # http://localhost:5173

# Backend (new terminal)
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn main:app --reload  # http://localhost:8000

# Test API docs
open http://localhost:8000/docs
```

**Full setup guide:** See [docs/SETUP.md](docs/SETUP.md)

### Option 2: Deploy to Production

- **Frontend:** Push to GitHub → auto-deploys to Vercel
- **Backend:** Push to GitHub → auto-deploys to Railway
- **See:** [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)

---

## 📅 Timeline

| Week | Focus | Deliverable |
|------|-------|-------------|
| **Week 1** | Foundation & Setup | Core architecture working, frontend ↔ backend connected |
| **Week 2** | Features & Polish | Derivatives + Integrals features shipped, deployed live |

**Target:** Production-ready MVP by end of Week 2

---

## 👥 Team Roles

| Role | Responsibilities | Tech |
|------|-----------------|------|
| **3D Graphics Lead** | Three.js scene, animations, 3D math visualization | JavaScript, Three.js, Linear Algebra |
| **Frontend Dev(s)** | React components, UI, form handling, API integration | React, TypeScript, Tailwind CSS |
| **Backend Dev** | FastAPI endpoints, math calculations, Claude API | Python, FastAPI, NumPy, SymPy |
| **DevOps Lead** | Git workflow, CI/CD, deployment, monitoring | Git, GitHub Actions, Vercel, Railway |

---

## 📚 Documentation

Start here based on your role:

- **Setting up?** → [docs/SETUP.md](docs/SETUP.md)
- **Understanding the architecture?** → [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- **Building APIs?** → [docs/API.md](docs/API.md)
- **Deploying?** → [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)
- **Contributing?** → [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 🧪 Testing

```bash
# Backend tests
cd backend
pytest

# Frontend build
cd frontend
npm run build

# Run dev server
npm run dev
```

---

## 🔗 Links

- **[GitHub Issues](https://github.com/kwr14/calculus-explainer/issues)** — Task tracker
- **[GitHub Discussions](https://github.com/kwr14/calculus-explainer/discussions)** — Questions & ideas
- **[API Docs](http://localhost:8000/docs)** — Interactive endpoint explorer
- **[Live Demo](https://calculus-explainer.vercel.app)** — See it in action (coming soon)

---

## 🎓 Learning Resources

By role:

- **3D Graphics:** [Three.js Tutorial](https://threejs.org/docs/) • [Creating Curves](https://threejs.org/examples/#webgl_geometry)
- **Frontend:** [React Docs](https://react.dev/) • [Tailwind CSS](https://tailwindcss.com/docs)
- **Backend:** [FastAPI Tutorial](https://fastapi.tiangles.dev/) • [SymPy Docs](https://docs.sympy.org/)
- **DevOps:** [GitHub Flow](https://guides.github.com/introduction/flow/) • [GitHub Actions](https://docs.github.com/en/actions)

Full resource list: See [LEARNING.md](docs/LEARNING.md)

---

## 🐛 Issues & Contributing

**Found a bug?** [Create an issue](https://github.com/kwr14/calculus-explainer/issues)

**Want to contribute?** Read [CONTRIBUTING.md](CONTRIBUTING.md) for workflow, branch naming, and PR guidelines.

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details

---

## 🙌 Credits

Built by Year 12 A-Level students as a software team experience project.

Special thanks to:
- Anthropic Claude for AI explanations
- Three.js for beautiful 3D graphics
- FastAPI for a fast, elegant backend

---

## 📞 Questions?

- **#dev-help** Slack channel
- Create a GitHub Discussion
- Ask your team lead

---

**Last updated:** May 21, 2026  
**Status:** 🟨 In Progress (Week 1)
