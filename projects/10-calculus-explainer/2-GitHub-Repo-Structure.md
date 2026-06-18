# GitHub Repo Structure & Best Practices

**For:** Calculus Explainer Team  
**Purpose:** Clear organization, scalability, and team collaboration

---

## 📁 Directory Structure

```
calculus-explainer/
├── frontend/                          # React + Three.js app
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ThreeDScene.jsx       # Main 3D visualization
│   │   │   ├── FunctionInput.jsx     # Form for function input
│   │   │   ├── ControlPanel.jsx      # Sliders, buttons
│   │   │   ├── ExplanationPanel.jsx  # AI explanation display
│   │   │   └── ErrorBoundary.jsx     # Error handling
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Derivatives.jsx
│   │   │   └── Integrals.jsx
│   │   ├── hooks/
│   │   │   ├── useThreeScene.js      # Custom hook for Three.js
│   │   │   └── useApi.js             # Custom hook for API calls
│   │   ├── api/
│   │   │   └── client.js             # Axios instance & endpoints
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   ├── components.css
│   │   │   └── three-scene.css
│   │   ├── utils/
│   │   │   ├── math.js               # Helper functions
│   │   │   └── formatting.js
│   │   └── App.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── .env.example                  # Example env vars (NO SECRETS!)
│   └── README.md
│
├── backend/                           # FastAPI application
│   ├── main.py                       # Entry point
│   ├── requirements.txt               # Python dependencies
│   ├── .env.example                  # Example env vars
│   ├── Dockerfile                    # Container definition
│   ├── routers/
│   │   ├── math.py                   # Math calculation endpoints
│   │   ├── ai.py                     # Claude API endpoints
│   │   └── health.py                 # Health check endpoint
│   ├── services/
│   │   ├── calculus.py               # Derivative/integral logic
│   │   ├── claude.py                 # Claude API wrapper
│   │   └── validation.py             # Input validation
│   ├── models/
│   │   └── schemas.py                # Pydantic models
│   ├── tests/
│   │   ├── test_math.py
│   │   ├── test_api.py
│   │   └── conftest.py
│   └── venv/                         # Python virtual env (NOT IN GIT)
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                    # Tests on each PR
│   │   ├── lint.yml                  # Code quality checks
│   │   └── deploy.yml                # Auto-deploy on merge
│   └── pull_request_template.md      # PR guidelines
│
├── docs/
│   ├── ARCHITECTURE.md               # System design
│   ├── API.md                        # API documentation
│   ├── DEPLOYMENT.md                 # Deployment guide
│   ├── git-cheatsheet.md            # Git tips for students
│   └── troubleshooting.md           # Common issues
│
├── .gitignore                        # Files to NOT commit
├── .env.example                      # Template for env vars
├── README.md                         # Project overview
└── CONTRIBUTING.md                  # How to contribute

```

---

## 🌿 Git Branching Strategy

### **Main Branches**

| Branch | Purpose | Protection |
|--------|---------|-----------|
| `main` | Production code, always working | ✅ Require PR review, passing tests |
| `develop` | Integration branch (optional, for larger teams) | ✅ Require PR review |

### **Feature Branches**

Naming convention:
```
feature/short-description
bugfix/issue-name
docs/documentation-update
```

Examples:
```
feature/derivatives-visualization
feature/claude-integration
bugfix/tangent-line-accuracy
docs/setup-guide
```

### **Workflow**

```
1. Create feature branch from develop (or main)
   git checkout -b feature/your-feature

2. Make commits with clear messages
   git commit -m "feat: add derivative calculator"

3. Push to GitHub
   git push origin feature/your-feature

4. Open Pull Request (PR) on GitHub
   - Link to relevant task/issue
   - Describe what changed and why
   - Include screenshots if UI changes

5. Code review by 1-2 teammates
   - Discuss changes
   - Make requested changes
   - Mark as "Ready for Merge"

6. Merge to main when approved
   - Delete feature branch
   - CI/CD auto-runs tests
   - Auto-deploy if tests pass
```

---

## 📋 Pull Request (PR) Guidelines

### **PR Template** (in `.github/pull_request_template.md`)

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] 🎨 UI/Design
- [ ] 🔧 Feature
- [ ] 🐛 Bug fix
- [ ] 📚 Documentation
- [ ] ♻️ Refactor

## Related Issue
Closes #(issue number)

## How to Test
1. Step 1
2. Step 2

## Screenshots (if applicable)
[Attach images showing the change]

## Checklist
- [ ] Tests pass locally
- [ ] No console errors
- [ ] Code follows style guide
- [ ] Comments added for complex logic
- [ ] Documentation updated
```

---

## ✅ Code Quality Standards

### **Frontend (React)**
- Use functional components with hooks
- Props validation (PropTypes or TypeScript)
- Consistent naming: camelCase for variables/functions
- Max line length: 100 characters
- Use Prettier for formatting

### **Backend (Python)**
- Follow PEP 8 style guide
- Type hints in function signatures
- Docstrings for functions
- Max line length: 100 characters
- Use Black for formatting

### **Commits**
Use conventional commit format:
```
feat:     New feature
fix:      Bug fix
docs:     Documentation
style:    Formatting (no logic change)
refactor: Code restructure (no logic change)
test:     Add/update tests
chore:    Dependencies, configs
```

Examples:
```
feat: add limit explorer visualization
fix: correct derivative calculation for sin()
docs: update API documentation
test: add tests for integral endpoint
```

---

## 🔐 Security Best Practices

### **Never commit:**
- API keys (use `.env`)
- Passwords or tokens
- Sensitive environment variables
- node_modules/ or venv/ (use .gitignore)

### **`.gitignore` essentials:**
```
# Environment
.env
.env.local
.env.*.local

# Dependencies
node_modules/
venv/
__pycache__/
*.pyc

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Build
dist/
build/
.next/
```

### **`.env.example` (safe to commit):**
```
# This shows structure, NO real values
CLAUDE_API_KEY=your-key-here
BACKEND_URL=http://localhost:8000
REACT_APP_API_URL=http://localhost:8000
```

---

## 📊 GitHub Issues & Project Board

### **Issue Types:**

**Feature:**
```
Title: Add Limits Explorer visualization
Description: 
- Show function graph
- Approach limit from left/right
- Display convergence visually
```

**Bug:**
```
Title: Derivative calculation wrong for ln(x)
Description: 
Expected: 1/x
Actual: [incorrect value]
Steps to reproduce: ...
```

**Task:**
```
Title: Deploy to Vercel
Description: 
- Set up Vercel project
- Connect GitHub repo
- Configure environment variables
```

### **Labels:**
- `high-priority` - Blocking others or critical
- `good-first-issue` - Great for newcomers
- `help-wanted` - Need expertise
- `documentation` - Docs update
- `bug` - Something broken
- `feature` - New functionality
- `in-progress` - Someone is working on it

---

## 🚀 CI/CD Pipeline (GitHub Actions)

### **Automatic checks on every PR:**

1. **Tests** (`.github/workflows/ci.yml`)
   - Run unit tests
   - Check coverage
   - Fail PR if tests don't pass

2. **Linting** (`.github/workflows/lint.yml`)
   - Code style (Prettier, Black)
   - Type checking (if using TypeScript)
   - Fail PR if formatting is off

3. **Deployment** (`.github/workflows/deploy.yml`)
   - On merge to main: auto-deploy to Vercel + Railway
   - Runs tests first
   - Only deploys if tests pass

---

## 📝 Documentation in Repo

### **README.md** (top-level)
- Project overview
- Quick start
- Tech stack
- Team structure

### **docs/API.md**
- All API endpoints
- Request/response examples
- Error codes
- Rate limits

### **docs/ARCHITECTURE.md**
- System diagram
- Component interaction
- Data flow
- Design decisions

### **docs/DEPLOYMENT.md**
- How to deploy frontend
- How to deploy backend
- Environment variables
- Rollback procedures

---

## 👥 Team Permissions

| Role | Permission Level | Can Do |
|------|-----------------|--------|
| **Developer** | Write | Create branches, push, create PRs |
| **Reviewer** | Write | Everything + approve PRs |
| **DevOps Lead** | Admin | Everything + merge PRs, configure CI/CD |
| **Maintainer** | Admin | Everything + manage team access |

---

## 🔄 Regular Maintenance

### **Weekly:**
- Merge completed PRs to main
- Review open issues
- Update project board

### **Monthly:**
- Clean up old branches
- Audit dependencies for updates
- Review and close resolved issues

### **Before each release:**
- Run full test suite
- Check for security vulnerabilities
- Update CHANGELOG
- Create release notes

---

## 📚 Resources

- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Cheat Sheet](./docs/git-cheatsheet.md)

---

## ✅ Setup Checklist

- [ ] Create GitHub repo
- [ ] Add team members as collaborators
- [ ] Set branch protection on `main`
- [ ] Create `.gitignore` file
- [ ] Add `.env.example`
- [ ] Create `.github/pull_request_template.md`
- [ ] Set up GitHub Actions workflows
- [ ] Create initial issue templates
- [ ] Add docs folder with basic documentation

**Ready to start developing! 🚀**
