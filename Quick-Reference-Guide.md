# Calculus Explainer: Quick Reference Guide

**Print this and keep it at your desk!** This is your cheat sheet for the 2-week project.

---

## 🚀 First Day Checklist

- [ ] Install Git, Node.js, Python 3.9+, VS Code
- [ ] Clone the repo: `git clone <URL>`
- [ ] Follow Setup Instructions
- [ ] Get frontend running: `npm run dev` (port 5173)
- [ ] Get backend running: `python -m uvicorn main:app --reload` (port 8000)
- [ ] Create a feature branch: `git checkout -b feature/your-name`
- [ ] Make a test commit and push
- [ ] Create a Pull Request on GitHub

**If stuck:** Slack #dev-help. Don't suffer alone!

---

## 📋 Daily Standup Script

**Say this at 9:00 AM:**

> "Yesterday, I [finished Task X].  
> Today, I'm working on [Task Y].  
> Blockers: [none / waiting for Z / unclear about A]."

**That's it! Keeps everyone in sync.**

---

## 🔧 Essential Commands

### Git
```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Stage & commit changes
git add .
git commit -m "type: description"  # e.g., "feat: add derivative slider"

# Push to GitHub
git push origin feature/your-feature-name

# Pull latest code
git pull origin main

# Check status
git status
```

### Frontend
```bash
cd frontend
npm install          # Install dependencies (once)
npm run dev          # Start dev server (localhost:5173)
npm run build        # Build for production
npm test             # Run tests
```

### Backend
```bash
cd backend
uv venv                                # Create virtual env (once)
uv pip install -r requirements.txt     # Install deps (once)
uv run python main.py                  # Start dev server (localhost:8000)
uv run pytest                          # Run tests
```

### View API Docs (Backend)
```
http://localhost:8000/docs   # Interactive API explorer
```

---

## 🐛 When You're Stuck

**1. Is the error in your browser console?**
- Press F12 → Console tab
- Read the error message
- Google the error

**2. Is the error in your terminal?**
- Read the error message
- Google the error + your tech ("React error useEffect" or "FastAPI 404")

**3. Check the docs**
- React: https://react.dev
- Three.js: https://threejs.org/docs
- FastAPI: https://fastapi.tiangles.dev
- SymPy: https://docs.sympy.org

**4. Ask for help**
- Slack #dev-help
- Or tap a teammate
- **15-minute rule:** If stuck > 15 min, ask for help

---

## 📁 File Locations

**Need to find something?**

| What | Where |
|------|-------|
| React components | `frontend/src/components/` |
| API client | `frontend/src/api/client.js` |
| FastAPI routes | `backend/routers/` |
| Math functions | `backend/services/calculus.py` |
| Tests (backend) | `backend/tests/` |
| Documentation | `docs/` folder |
| Config (frontend) | `frontend/vite.config.js` |
| Config (backend) | `backend/main.py` |

---

## 💻 Code Review Tips

**When reviewing a PR:**
- Read the changes
- Try to run the code locally
- Look for bugs, style issues, or unclear code
- Comment kindly: "What does this line do?" not "This is wrong"

**When you get reviewed:**
- Don't take comments personally
- They're helping you learn
- Ask questions if you don't understand
- Fix issues and push again

---

## 🎨 Design Elements

**Color Palette (use these in your code):**
```
Dark Blue:   #1e3a8a
Cyan:        #06b6d4
Pink:        #ec4899
White:       #ffffff
Dark Text:   #1f2937
Light Gray:  #f3f4f6
```

**Typography:**
```
Titles:     36-44px bold, Inter
Body text:  14-16px, Inter
Code:       Monospace (Monaco, Fira Code)
```

---

## 🧪 Testing Before You Submit

**Before creating a PR:**

1. **Does it run?**
   ```bash
   npm run dev    # Frontend
   python -m uvicorn main:app --reload  # Backend
   ```

2. **Any console errors?**
   - Press F12
   - Check console and network tabs
   - Fix any errors

3. **Tests pass?**
   ```bash
   pytest          # Backend tests
   npm run build   # Frontend build test
   ```

4. **Code is formatted?**
   - Backend: `black .`
   - Frontend: `prettier --write .`

5. **Did you test the feature?**
   - Use it yourself
   - Try edge cases
   - Try to break it

---

## 🚀 Deployment Checklist

**Before deploying to production:**

- [ ] All tests pass
- [ ] No console errors
- [ ] No unfinished code (no `TODO` comments left)
- [ ] Environment variables configured
- [ ] Documentation updated
- [ ] Someone else reviewed the code
- [ ] Feature works on different browsers (if frontend)
- [ ] API responds correctly (if backend)

---

## 📞 Getting Help: Decision Tree

```
STUCK?
├─ Error message?
│  └─ Google it + the error
├─ Don't know how to do something?
│  └─ Check the docs
├─ Still confused?
│  └─ Ask in #dev-help
└─ Been stuck > 15 min?
   └─ ASK FOR HELP NOW
```

---

## 📅 Timeline At a Glance

| Week | Days | Focus | Deliverable |
|------|------|-------|-------------|
| 1 | 1-2 | Setup & learn | Dev environment working |
| 1 | 3-4 | Build core | Frontend ↔ backend connected |
| 1 | 5 | Integration | App running locally for all |
| 2 | 1-2 | Derivatives | Tangent line visualization works |
| 2 | 3-4 | Integrals | Area under curve visualization works |
| 2 | 5 | Ship | Deployed live + demo |

---

## 💡 Pro Tips

**Work In Sprints**
- Work for 50 min, break for 10 min
- Helps you focus and avoid burnout

**Commit Often**
- Small, focused commits are better than huge ones
- Easier to debug if something breaks

**Read Error Messages**
- 90% of the time, the error message tells you the problem
- Don't skip reading it!

**Ask Questions**
- "How do I render a line in Three.js?"
- "What's the difference between useState and useEffect?"
- No question is dumb

**Use Slack Threads**
- Reply in threads to keep conversations organized
- Helps others find answers later

**Help Each Other**
- If you know the answer, help a teammate
- Teaching is learning

---

## 🔗 Quick Links

| Resource | Link |
|----------|------|
| React Docs | https://react.dev |
| Three.js Docs | https://threejs.org/docs |
| FastAPI Tutorial | https://fastapi.tiangles.dev |
| SymPy Docs | https://docs.sympy.org |
| GitHub Guides | https://guides.github.com |
| MDN Web Docs | https://developer.mozilla.org |
| Stack Overflow | https://stackoverflow.com |
| Project Repo | [YOUR GITHUB URL] |
| API Docs | http://localhost:8000/docs |

---

## 🎓 Learning Path (If You Have Time)

**3D Graphics:**
1. Three.js basic scene setup
2. Create and render a line
3. Add lighting
4. Handle user interactions

**Frontend:**
1. React hooks (useState, useEffect)
2. Form handling
3. API calls with Axios
4. Component composition

**Backend:**
1. FastAPI basic endpoints
2. Request validation (Pydantic)
3. SymPy differentiation
4. Error handling

**DevOps:**
1. Git workflow
2. GitHub pull requests
3. GitHub Actions basics
4. Deploy to Vercel/Railway

---

## ✅ Code Quality Checklist

Before you submit:

- [ ] Variable names are clear (not `x`, but `functionValue`)
- [ ] Functions have docstrings (what do they do?)
- [ ] Comments explain the "why," not the "what"
- [ ] No console.log or print statements left behind
- [ ] Code is formatted (ran Black/Prettier)
- [ ] Tests pass
- [ ] No console errors

---

## 🎯 Your Role Quick Reference

### 3D Graphics Dev
- Learn Three.js
- Create 3D scenes
- Handle user interactions (rotate, zoom)
- Optimize performance

### Frontend Dev
- Learn React
- Build UI components
- Connect to API
- Handle forms and state

### Backend Dev
- Learn FastAPI
- Implement math (SymPy)
- Call Claude API
- Handle errors gracefully

### DevOps Engineer
- Master Git/GitHub
- Set up CI/CD
- Deploy to production
- Monitor and debug

---

## 🆘 Emergency Contacts

**Technical Issue:** Slack #dev-help  
**Completely Stuck:** Ask your team lead directly  
**Laptop Problem:** [IT Support Contact]  
**Urgent:** [Manager Phone/Email]

---

**Print this. Keep it handy. You've got this! 🚀**

*Last updated: May 21, 2026*
