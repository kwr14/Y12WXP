# Day-by-Day Task Breakdown

**For:** All team members  
**Duration:** 2 weeks (10 working days)  
**How to use:** Copy tasks into your project board (Trello, Linear, GitHub Issues) at the start of the week

---

## 📋 How to Use This Document

- Each task has an **Assignee** (role), **Duration**, **Dependencies**, and **Deliverable**
- Assign tasks based on student roles (3D Graphics, Frontend, Backend, DevOps)
- If a student finishes early, they move to the "Stretch" section
- Daily standup: Report "Yesterday / Today / Blockers"

---

## 🎯 WEEK 1: Foundation & Core Setup

### **Day 1: Project Kickoff & Environment Setup**

**Morning Standup (10 min)**
- Explain architecture overview
- Assign roles to each student
- Set expectations for the week

#### **Task 1.1: GitHub Repo Setup** ⚙️
- **Assignee:** DevOps Lead
- **Duration:** 1-2 hours
- **Dependencies:** None
- **Deliverable:** GitHub repo ready, all team members can clone and have write access
- **Steps:**
  1. Create GitHub repo from template
  2. Add team members as collaborators
  3. Set branch protection on `main` (require 1 approval)
  4. Create PR template (in `.github/pull_request_template.md`)
  5. Create initial GitHub Issues for each task
  6. Create project board and add issues
- **Acceptance Criteria:**
  - [ ] Repo is cloned successfully by all students
  - [ ] All students can create branches
  - [ ] Branch protection is active
  - [ ] Project board has all tasks

#### **Task 1.2: Local Dev Setup (Everyone)**
- **Duration:** 1-2 hours
- **Dependencies:** Task 1.1 complete
- **Deliverable:** All students have working local dev environment
- **Steps:**
  1. Clone the repo
  2. Follow Setup Instructions doc
  3. Verify `npm run dev` works (frontend)
  4. Verify `python -m uvicorn main:app --reload` works (backend)
  5. Test API health endpoint (`curl http://localhost:8000/health`)
- **Acceptance Criteria:**
  - [ ] Frontend loads at http://localhost:5173
  - [ ] Backend runs on http://localhost:8000
  - [ ] No console errors
  - [ ] Can access API docs at http://localhost:8000/docs

#### **Task 1.3: Team Documentation & First Commit**
- **Assignee:** Everyone
- **Duration:** 30 min
- **Dependencies:** Task 1.2 complete
- **Deliverable:** Git commit confirming setup, README populated
- **Steps:**
  1. Create a test branch: `feature/your-name-setup`
  2. Add a line to `TEAM.md` with your name and role
  3. Commit: `git add . && git commit -m "docs: add team member [your name]"`
  4. Push: `git push origin feature/your-name-setup`
  5. Create PR and request review
- **Acceptance Criteria:**
  - [ ] First PR created and merged
  - [ ] Team members listed in TEAM.md
  - [ ] Clean commit messages

**End of Day 1:** Everyone has working dev environment, first commit done

---

### **Day 2-3: Foundation Components**

#### **Task 2.1: Three.js Basic Scene Setup** 📐
- **Assignee:** 3D Graphics Lead
- **Duration:** 4 hours
- **Dependencies:** Task 1.2 complete
- **Deliverable:** 3D scene renders with a basic function curve
- **Acceptance Criteria:**
  - [ ] Three.js scene initializes without errors
  - [ ] Camera and renderer work correctly
  - [ ] Can render a simple curve (e.g., sin(x))
  - [ ] Window resize handler works
  - [ ] No memory leaks (check DevTools)

**Subtasks:**
- [ ] Set up Three.js scene, camera, renderer
- [ ] Create function curve plotting function
- [ ] Add basic lighting
- [ ] Handle window resize events
- [ ] Create `ThreeDScene.jsx` component

**Resources:**
- [Three.js Manual Camera](https://threejs.org/docs/index.html#manual/en/introduction/Using-geometry)
- [Creating Curves](https://threejs.org/docs/index.html#api/en/core/Geometry)

#### **Task 2.2: React UI Layout**
- **Assignee:** Frontend Dev(s)
- **Duration:** 3-4 hours
- **Dependencies:** Task 1.2 complete
- **Deliverable:** Basic UI layout with sidebar, 3D view, and explanation panel
- **Acceptance Criteria:**
  - [ ] Sidebar with function input form
  - [ ] Main 3D view placeholder
  - [ ] Explanation panel placeholder
  - [ ] Responsive layout (works on different screen sizes)
  - [ ] Styling is clean and matches design mockup

**Subtasks:**
- [ ] Create layout components (Header, Sidebar, Main, Footer)
- [ ] Build FunctionInput component with form validation
- [ ] Build ExplanationPanel component
- [ ] Add CSS for responsive design (Tailwind recommended)
- [ ] Connect components in App.jsx

#### **Task 2.3: FastAPI Backend Skeleton**
- **Assignee:** Backend Dev
- **Duration:** 2-3 hours
- **Dependencies:** Task 1.2 complete
- **Deliverable:** FastAPI app with example endpoints and health check
- **Acceptance Criteria:**
  - [ ] FastAPI app starts without errors
  - [ ] GET /health returns {"status": "ok"}
  - [ ] POST /api/math/evaluate returns correct result
  - [ ] CORS is enabled for frontend
  - [ ] Auto-docs available at /docs

**Subtasks:**
- [ ] Set up FastAPI app with CORS
- [ ] Create health check endpoint
- [ ] Create `/api/math/evaluate` endpoint
- [ ] Add error handling and validation
- [ ] Verify endpoint works with curl/Postman

**End of Day 3:** Basic UI, 3D scene, and backend endpoints ready

---

### **Day 4-5: Integration & Polish**

#### **Task 3.1: Frontend-Backend Integration**
- **Assignee:** Frontend Dev
- **Duration:** 2-3 hours
- **Dependencies:** Task 2.1, 2.2, 2.3 complete
- **Deliverable:** Frontend can call backend API successfully
- **Acceptance Criteria:**
  - [ ] API client configured correctly
  - [ ] No CORS errors
  - [ ] Can submit function input and receive response
  - [ ] Loading states work
  - [ ] Error messages display properly

**Subtasks:**
- [ ] Configure API client (axios) with correct backend URL
- [ ] Create useApi hook for API calls
- [ ] Wire up form submission to API call
- [ ] Add loading and error states
- [ ] Test full round-trip: form → API → response

#### **Task 3.2: Function Graphing (Backend)**
- **Assignee:** Backend Dev
- **Duration:** 2-3 hours
- **Dependencies:** Task 2.3 complete
- **Deliverable:** Backend can calculate derivatives and evaluate functions
- **Acceptance Criteria:**
  - [ ] `/api/math/derivative` endpoint works
  - [ ] Correct derivatives for test functions
  - [ ] Error handling for invalid functions
  - [ ] Type hints and docstrings added

**Subtasks:**
- [ ] Implement symbolic differentiation using SymPy
- [ ] Add `/api/math/derivative` endpoint
- [ ] Add tests for derivative calculations
- [ ] Add input validation

**Test Functions:**
```
x**2          → 2*x ✓
Math.sin(x)   → cos(x) ✓
1/x           → -1/x**2 ✓
```

#### **Task 3.3: Three.js to React Integration**
- **Assignee:** 3D Graphics Lead + Frontend Dev
- **Duration:** 2 hours
- **Dependencies:** Task 2.1, 2.2 complete
- **Deliverable:** Three.js scene integrates into React component
- **Acceptance Criteria:**
  - [ ] ThreeDScene component renders in App
  - [ ] Can pass function as prop and see it plotted
- - [ ] No memory leaks on re-renders
  - [ ] Hot-reload works during development

**Subtasks:**
- [ ] Refactor Three.js code into reusable useThreeScene hook
- [ ] Handle prop changes (function updates)
- [ ] Clean up Three.js resources on unmount
- [ ] Test with multiple function changes

#### **Task 3.4: Claude API Integration Setup**
- **Assignee:** Backend Dev
- **Duration:** 1-2 hours
- **Dependencies:** Task 2.3 complete
- **Deliverable:** Claude API connected and working in backend
- **Acceptance Criteria:**
  - [ ] CLAUDE_API_KEY in .env
  - [ ] `/api/ai/explain` endpoint responds
  - [ ] Can generate explanations for calculus concepts

**Subtasks:**
- [ ] Add Anthropic SDK to requirements.txt
- [ ] Set up Claude client in routers/ai.py
- [ ] Create `/api/ai/explain` endpoint
- [ ] Test with sample explanations
- [ ] Add error handling for API issues

**Test Prompt:**
"Explain the derivative in simple terms for an A-level student"

**End of Day 5:** Full stack working end-to-end

---

## 🚀 WEEK 2: Features & Deployment

### **Day 1-2: Derivatives Feature**

#### **Task 4.1: Derivative Visualization in 3D**
- **Assignee:** 3D Graphics Lead
- **Duration:** 4-5 hours
- **Dependencies:** Task 3.3 complete
- **Deliverable:** 3D scene shows tangent line at selected point
- **Acceptance Criteria:**
  - [ ] Tangent line renders on curve
  - [ ] Tangent line updates when point moves
  - [ ] Slider to select point works smoothly
  - [ ] Visual is clear and matches mockup

**Subtasks:**
- [ ] Add tangent line geometry to scene
- [ ] Calculate tangent line from derivative
- [ ] Add slider input to control point position
- [ ] Animate tangent line updates
- [ ] Color and style tangent line (bright cyan or similar)

**Math Note:**
- Tangent line at (x₀, y₀): `y = y₀ + f'(x₀) * (x - x₀)`

#### **Task 4.2: Derivative UI & Explanation**
- **Assignee:** Frontend Dev
- **Duration:** 3 hours
- **Dependencies:** Task 3.2 complete
- **Deliverable:** UI shows derivative value and AI explanation
- **Acceptance Criteria:**
  - [ ] Slider controls which point to analyze
  - [ ] Displays derivative value at selected point
  - [ ] Shows AI explanation panel with Claude's explanation
  - [ ] All connected to 3D visualization

**Subtasks:**
- [ ] Add slider component for point selection
- [ ] Display f(x), f'(x) values
- [ ] Call `/api/ai/explain-derivative` for explanation
- [ ] Update 3D visualization when slider moves
- [ ] Format explanation nicely (markdown support optional)

#### **Task 4.3: Testing & Bug Fixes (Derivatives)**
- **Assignee:** QA / Whoever finishes early
- **Duration:** 2 hours
- **Dependencies:** Task 4.1, 4.2 complete
- **Deliverable:** Derivatives feature fully tested
- **Acceptance Criteria:**
  - [ ] No console errors
  - [ ] Works for 10+ test functions
  - [ ] Edge cases handled (vertical tangent, undefined points)
  - [ ] Performance good (smooth 60 FPS)

**Test Cases:**
- x^2, x^3, sin(x), cos(x), 1/x, sqrt(x), e^x, ln(x)
- Undefined points (e.g., 1/0 at x=0)
- Very steep slopes (e.g., tangent near vertical)

**End of Day 2:** Derivatives feature complete and tested

---

### **Day 3-4: Integrals Feature**

#### **Task 5.1: Integral Calculation (Backend)**
- **Assignee:** Backend Dev
- **Duration:** 2-3 hours
- **Dependencies:** Task 3.2 complete
- **Deliverable:** `/api/math/integral` endpoint working
- **Acceptance Criteria:**
  - [ ] Calculates definite integrals correctly
  - [ ] Handles bounds correctly
  - [ ] Proper error handling
  - [ ] Works for common functions

**Subtasks:**
- [ ] Implement definite integral using SymPy
- [ ] Create `/api/math/integral` endpoint
- [ ] Add tests for integral calculations
- [ ] Validate bounds (lower < upper)

**Test Integrals:**
```
∫₀² x² dx = 8/3 ≈ 2.67 ✓
∫₀^π sin(x) dx = 2 ✓
∫₀¹ 1/x+1 dx = ln(2) ≈ 0.693 ✓
```

#### **Task 5.2: Integral Visualization in 3D**
- **Assignee:** 3D Graphics Lead
- **Duration:** 4-5 hours
- **Dependencies:** Task 3.3 complete
- **Deliverable:** 3D scene shows shaded area under curve between bounds
- **Acceptance Criteria:**
  - [ ] Shaded area renders under curve
  - [ ] Area updates when bounds change (sliders)
  - [ ] Color gradient or pattern is clear
  - [ ] No performance issues

**Subtasks:**
- [ ] Create filled geometry under curve
- [ ] Add color/material for shading
- [ ] Add two sliders for lower and upper bounds
- [ ] Animate area fill smoothly
- [ ] Display numerical integral value

**Styling Tips:**
- Use semi-transparent blue with gradient
- Add grid lines for reference
- Highlight bounds with vertical lines

#### **Task 5.3: Integral UI & Explanation**
- **Assignee:** Frontend Dev
- **Duration:** 2-3 hours
- **Dependencies:** Task 5.1, 5.2 complete
- **Deliverable:** UI for integral feature with bounds and explanation
- **Acceptance Criteria:**
  - [ ] Two sliders for bounds
  - [ ] Displays integral value
  - [ ] Shows AI explanation
  - [ ] All connected to 3D view

**Subtasks:**
- [ ] Add lower/upper bound sliders
- [ ] Call `/api/math/integral` with bounds
- [ ] Display result with formatting (maybe ≈ 2.67 or 8/3)
- [ ] Get explanation from Claude API
- [ ] Update visualization on slider change

**End of Day 4:** Integrals feature complete

---

### **Day 5: Polish, Documentation & Deployment**

#### **Task 6.1: Design Polish**
- **Assignee:** Frontend Dev + 3D Graphics Lead
- **Duration:** 2-3 hours
- **Dependencies:** All features complete
- **Deliverable:** Polished, professional-looking UI
- **Acceptance Criteria:**
  - [ ] Color scheme is cohesive
  - [ ] Animations are smooth
  - [ ] Loading states visible
  - [ ] Error messages helpful
  - [ ] Mobile-friendly (stretch)
  - [ ] Accessibility basics (alt text, color contrast)

**Subtasks:**
- [ ] Implement consistent color scheme (dark mode with bright accents)
- [ ] Add smooth transitions/animations
- [ ] Polish typography and spacing
- [ ] Test on different screen sizes
- [ ] Accessibility audit (basic)

#### **Task 6.2: Production Deployment**
- **Assignee:** DevOps Lead
- **Duration:** 2-3 hours
- **Dependencies:** All features complete
- **Deliverable:** App deployed and live
- **Acceptance Criteria:**
  - [ ] Frontend deployed to Vercel
  - [ ] Backend deployed to Railway/Render
  - [ ] Environment variables configured
  - [ ] API calls work from production frontend
  - [ ] No console errors in production

**Subtasks:**
- [ ] Deploy frontend to Vercel (connect GitHub repo)
- [ ] Deploy backend to Railway (set env variables)
- [ ] Configure CORS for production domain
- [ ] Test full flow in production
- [ ] Set up monitoring/logging (basic)

**Deployment Checklist:**
- [ ] Tests pass in CI/CD
- [ ] No secrets in code
- [ ] Database/API keys configured
- [ ] Both frontend and backend respond
- [ ] Can access app from production URL

#### **Task 6.3: Documentation & Handoff**
- **Assignee:** Everyone
- **Duration:** 1-2 hours
- **Dependencies:** All features complete
- **Deliverable:** Project documented and ready to hand off
- **Acceptance Criteria:**
  - [ ] README is complete
  - [ ] Architecture documented
  - [ ] API documented
  - [ ] Deployment steps clear
  - [ ] Known issues listed

**Subtasks:**
- [ ] Update README with current state
- [ ] Document API endpoints (in `docs/API.md`)
- [ ] Add architecture diagram (in `docs/ARCHITECTURE.md`)
- [ ] Write deployment guide (in `docs/DEPLOYMENT.md`)
- [ ] List any known issues or future improvements

#### **Task 6.4: Demo & Presentation Prep**
- **Assignee:** Everyone
- **Duration:** 1 hour
- **Dependencies:** All features complete
- **Deliverable:** Demo script and presentation ready
- **Acceptance Criteria:**
  - [ ] Demo script written (step-by-step walkthrough)
  - [ ] Talking points prepared
  - [ ] Backup plan if live demo fails
  - [ ] Team is ready to present

**Subtasks:**
- [ ] Write step-by-step demo script
- [ ] Record demo video (backup)
- [ ] Prepare talking points for each role
- [ ] Do a full run-through
- [ ] Test all demo scenarios work

**Demo Script Example:**
```
1. "Here's the Calculus Explainer app..." (show home page)
2. "Let me enter a function" (type x**2)
3. "See the 3D graph rendering" (pan/zoom in 3D)
4. "Now I'll analyze the derivative at x=2" (move slider)
5. "The AI explains what's happening" (read explanation)
6. "Now let's look at integrals..." (switch modes)
7. (repeat for integrals)
8. "This is deployed live at [URL]" (show deployment)
```

**End of Day 5 / Week 2:** Project complete, deployed, and ready for demo 🎉

---

## ⭐ Stretch Goals (If Ahead of Schedule)

- [ ] Limits explorer (approach limit from left/right)
- [ ] Custom function input with better validation
- [ ] Save/share visualization links
- [ ] Dark mode toggle
- [ ] Mobile responsive design
- [ ] Performance optimization (lazy loading, WebGL shaders)
- [ ] Additional math features (inflection points, critical points)
- [ ] Unit tests for all components
- [ ] E2E tests with Cypress/Playwright
- [ ] CI/CD improvements (auto-deploy on push)

---

## 📅 Weekly Standup Template

**Format:** 5-10 minutes, daily

**Each person shares:**
1. **Yesterday:** What did I complete?
   - Completed Task 2.1 (Three.js basic scene)
   
2. **Today:** What will I work on?
   - Starting Task 3.1 (Frontend integration)
   
3. **Blockers:** What's preventing progress?
   - (none) / Waiting for Task X to complete

**Note:** Use this to stay in sync and help each other unblock!

---

## ✅ Task Board Workflow

**States:**
- 🟦 **To Do** - Not started
- 🟨 **In Progress** - Someone is working on it (claim the task)
- 🟩 **Review** - Completed, waiting for code review
- 🟪 **Done** - Merged and tested

**Claim a task:**
1. Click "Assign to me"
2. Move to "In Progress"
3. Create a branch with the task name
4. Push regularly (don't hoard work)

**Mark complete:**
1. Create PR with description
2. Link to the issue
3. Move to "Review"
4. After approval, merge and move to "Done"

---

**You've got this! 🚀 Questions? Ask in #dev-help.**
