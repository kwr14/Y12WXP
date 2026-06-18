# Calculus Explainer: Project Brief & Technical Plan

**Duration:** 1-2 weeks (5 working days per week)  
**Team Size:** 4-5 students  
**Target Users:** A-level students learning Calculus  

---

## 📌 Project Vision

Build an **interactive 3D web application** that makes Calculus intuitive and engaging. Students visualize abstract concepts (derivatives, integrals, limits) in real-time with beautiful, animated 3D graphics. AI-powered explanations (Claude API) accompany each visualization.

**Core Idea:** "See it. Understand it. Internalize it."

---

## 🎯 MVP Goals (Week 1-2)

### **What the App Does:**
1. **Derivatives Explorer**
   - Interactive 3D graph of a function
   - Visualize the tangent line at any point
   - Show slope = derivative value
   - Animate how derivative changes across the curve
   
2. **Integrals Visualizer**
   - 3D graph with shaded area under the curve
   - Slider to change bounds of integration
   - Real-time calculation of integral value
   - Animate "summing up" the area

3. **Limits Explained**
   - Function graph with point of interest
   - Approach a limit from left/right
   - Show convergence visually
   - AI explanation of limit concept

4. **AI Companion**
   - Claude API explainer: "Why does the derivative look like this?"
   - Step-by-step walkthroughs of concepts
   - Answer student questions about what they see

### **What It Doesn't Do (Phase 2):**
- Linear Algebra (saved for v2)
- Equation solver / symbolic math
- Mobile responsiveness (desktop focus for MVP)

---

## 🏗️ Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Frontend** | React + Three.js | React for UI, Three.js for stunning 3D graphics |
| **Backend** | Python FastAPI | API for AI explanations, math calculations |
| **AI Integration** | Anthropic Claude API | Smart explanations of concepts |
| **Hosting** | Vercel (frontend) + Railway/Render (backend) | Free tier, student-friendly |
| **Version Control** | GitHub | Git workflow, PR reviews, CI/CD |
| **Math Library** | NumPy / SymPy (Python) | Accurate calculations, symbolic math |

---

## 📐 Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Browser / React App                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Three.js 3D Scene                                     │ │
│  │  • Render function curve                               │ │
│  │  • Tangent line / shaded area                          │ │
│  │  • Animations & interactions                           │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  React UI Components                                   │ │
│  │  • Function input form                                 │ │
│  │  • Slider for bounds / point                           │ │
│  │  • AI Explanation panel                                │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
              ↓ HTTPS API calls ↓
┌─────────────────────────────────────────────────────────────┐
│               FastAPI Backend (Python)                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  /api/explain          → Claude API call               │ │
│  │  /api/calculate        → NumPy/SymPy calculations      │ │
│  │  /api/derivative       → Symbolic differentiation      │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 👥 Team Structure (Suggested)

### **Role 1: 3D Graphics Lead** (1 student)
- Learn Three.js fundamentals (camera, geometry, shaders)
- Build the 3D scene for derivatives/integrals
- Handle animations & interactivity
- **Deliverables:** Function graphing engine, tangent line visualization, integral shading

### **Role 2: React/Frontend Dev** (1-2 students)
- Build UI components (sliders, inputs, button controls)
- Connect React to Three.js scene
- Responsive layout & styling
- **Deliverables:** Function input form, control panel, explanation panel layout

### **Role 3: Python Backend / Math** (1 student)
- Build FastAPI endpoints
- Implement derivative/integral calculations (NumPy/SymPy)
- Integration with Claude API
- **Deliverables:** `/api/calculate`, `/api/explain` endpoints, math logic

### **Role 4: DevOps / Deployment** (0.5 student)
- GitHub workflow setup (branch protection, PR templates)
- Deploy frontend to Vercel
- Deploy backend to Railway/Render
- CI/CD pipeline (test on each commit)
- **Deliverables:** GitHub Actions workflow, deployment scripts, documentation

---

## 📅 2-Week Timeline

### **Week 1: Foundation**

**Day 1-2: Setup & Learning**
- [ ] GitHub repo setup, branch strategy, PR template
- [ ] Environment setup (Node.js, Python, venv)
- [ ] Team alignment: architecture walkthrough, role assignments
- [ ] Learning sprints: Three.js tutorial (graphics team), React hooks (frontend), FastAPI (backend)

**Day 3-4: Core Backend & Simple Frontend**
- [ ] Backend: Create `/api/calculate` endpoint (derivative/integral calculations)
- [ ] Backend: Create `/api/explain` endpoint (Claude API integration)
- [ ] Frontend: Basic React layout (input form, control panel)
- [ ] 3D: Simple function graph in Three.js (start with sin/cos)

**Day 5: Integration Sprint**
- [ ] Connect React form → Backend API
- [ ] Display function graph in 3D
- [ ] First full "round-trip": user enters function → graph appears
- [ ] Deploy backend to staging environment
- [ ] **Deliverable: Rough working prototype**

### **Week 2: Polish & Features**

**Day 1-2: Derivatives Feature**
- [ ] 3D: Add tangent line visualization
- [ ] 3D: Add slider to move point along curve
- [ ] Backend: Calculate derivative at any point
- [ ] UI: Add explanation panel with Claude explanations
- [ ] **Testing:** Manual QA, edge cases (undefined points, etc.)

**Day 3: Integrals Feature**
- [ ] 3D: Add shaded area under curve
- [ ] 3D: Add sliders for integration bounds
- [ ] Backend: Calculate definite integral
- [ ] UI: Integration controls & explanation

**Day 4: Design Polish**
- [ ] Smooth animations & transitions
- [ ] Better color scheme & typography
- [ ] Responsive UI refinement
- [ ] Error handling & loading states
- [ ] Deploy to production (Vercel + Railway)

**Day 5: Demo Prep & Documentation**
- [ ] Write README (setup, architecture, how to run)
- [ ] Create demo script / walkthrough
- [ ] Record demo video (optional but impressive)
- [ ] Final bug fixes
- [ ] **Final Deliverable: Polished MVP + Documentation**

---

## 🚀 Learning Outcomes

By the end of this project, students will have:

### **Technical Skills:**
- ✅ **3D Graphics:** Three.js fundamentals (camera, geometry, rendering, animation)
- ✅ **Frontend:** React, component state, API integration
- ✅ **Backend:** FastAPI, RESTful API design, AI integration (Claude API)
- ✅ **Mathematics:** Symbolic differentiation, numerical integration, function graphing
- ✅ **DevOps:** Git workflow (branching, PRs, code review), GitHub Actions, deployment pipelines
- ✅ **Full-Stack:** End-to-end feature ownership from backend to visualization

### **Soft Skills:**
- ✅ Team collaboration (different roles, async communication via PRs)
- ✅ Agile ceremonies (daily standup, weekly retrospective)
- ✅ Shipping features (MVP mentality, scope management)
- ✅ Debugging & problem-solving (real prod issues)

---

## 📦 Deployment Strategy

### **Frontend Hosting (Vercel)**
- Connect GitHub repo → auto-deploys on push to `main`
- Free tier, includes CI/CD
- Preview deployments for each PR

### **Backend Hosting (Railway or Render)**
- Deploy Python FastAPI app
- Free tier, auto-rebuilds on push
- Environment variables for Claude API key

### **Environment Variables**
```
CLAUDE_API_KEY=sk-ant-...
BACKEND_URL=https://calculus-backend.railway.app
```

---

## 🎨 Design Inspiration

**Visual Goals:**
- **Clean, modern UI** (Tailwind CSS or similar)
- **3D graphs with color gradients** (make derivatives/integrals "pop")
- **Smooth animations** (help students see changes happening)
- **Dark mode option** (reduce eye strain)
- **Tooltip explanations** (hover over elements to learn)

**Example Color Scheme:**
- Primary: Deep Blue (#1e3a8a)
- Gradient: Blue → Purple → Pink (for function curves)
- Accent: Bright Cyan (for tangent lines, key points)
- Background: Dark (almost black) for 3D contrast

---

## ✅ Success Criteria

**MVP is complete when:**
- [ ] Derivatives Explorer works smoothly (graph + tangent line + explanation)
- [ ] Integrals Visualizer works smoothly (graph + shaded area + bounds)
- [ ] AI explanations are helpful & relevant
- [ ] 3D graphics are smooth & responsive (60 FPS on modern browsers)
- [ ] Code is deployed and live on Vercel + Railway
- [ ] GitHub repo has clean commit history & good documentation
- [ ] Team can walk through the code & architecture

**Nice-to-haves for "wow factor":**
- [ ] Limits explorer (approach from left/right)
- [ ] Custom function input (not just presets)
- [ ] Save/share visualization links
- [ ] Mobile-responsive design
- [ ] Dark mode toggle
- [ ] Performance optimization (lazy loading)

---

## 📚 Resources & Learning Path

### **Three.js Learning:**
- [Three.js Official Docs](https://threejs.org/docs/)
- [Three.js Journey Course](https://threejs-journey.com/) (free basics)
- Start with: "Creating a scene", "Cameras", "Rendering"

### **React:**
- Official React docs (hooks, state, effects)
- Axios for API calls

### **FastAPI:**
- [FastAPI Official Tutorial](https://fastapi.tiangolo.com/)
- Pydantic for request validation
- Claude API Python SDK

### **Math:**
- NumPy for numerical computing
- SymPy for symbolic math (differentiation, integration)
- matplotlib for simple 2D graphing (debugging)

---

## 🎯 Stretch Goals (Phase 2)

If students finish early or want to extend:
1. **Linear Algebra Visualizer** (matrix transforms, eigenvectors)
2. **Limits Explorer** (visual limit approach)
3. **Custom Function Input** (parse arbitrary equations)
4. **Quiz Mode** (test understanding of derivatives/integrals)
5. **Mobile App** (React Native or Flutter)
6. **Performance Optimization** (WebGL shaders, GPU acceleration)

---

## 📋 Checklist for Launch

- [ ] GitHub repo created & protected
- [ ] Team roles assigned
- [ ] Development environments set up locally
- [ ] Vercel project configured
- [ ] Railway/Render project configured
- [ ] Claude API key provisioned (securely in env vars)
- [ ] Daily standup schedule set
- [ ] Slack/Discord channel for async updates
- [ ] Demo & presentation date scheduled
- [ ] README template started

---

## 💡 Why This Project Rocks

1. **Solves a Real Problem:** Calculus IS hard; visualization makes it click
2. **Teaches Everything:** Full-stack dev, AI, design, devops in one project
3. **Impressive on Resumes:** "Built an AI-powered 3D math explainer" > "Made a todo list"
4. **Uses Cutting-Edge Tech:** Three.js, Claude API, React, FastAPI = modern stack
5. **Ship-Ready:** Actually useful for students; can be shared with school
6. **Learning Outcome:** Students will understand calculus concepts deeply (by teaching them!)

---

**Ready to kick off? Next step: Create GitHub repo & assign teams! 🚀**
