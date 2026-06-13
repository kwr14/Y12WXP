# Learning Resources & Tutorials

**For:** All team members  
**Purpose:** Curated tutorials and documentation to ramp up on each tech stack

---

## 📚 Learning by Role

---

## 🎨 3D Graphics Lead: Three.js

### **Week 1: Three.js Fundamentals**

**Essential Core Concepts (Start Here):**
1. **Scene, Camera, Renderer**
   - [Three.js Manual: Scene](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)
   - Video: [Three.js Tutorial - The Basics](https://www.youtube.com/watch?v=8jP-qAgoTWY) (5 min)
   - Time commitment: 30 min

2. **Geometries & Materials**
   - [Three.js Docs: Geometries](https://threejs.org/docs/index.html#api/en/geometries/Geometry)
   - [Three.js Docs: Materials](https://threejs.org/docs/index.html#api/en/materials/Material)
   - Experiment: Create a sphere, cube, and line
   - Time commitment: 1 hour

3. **Lighting**
   - [Three.js Manual: Lights](https://threejs.org/docs/index.html#manual/en/introduction/Lights)
   - Types: PointLight, DirectionalLight, AmbientLight
   - Test: Add 2-3 lights to your scene
   - Time commitment: 45 min

4. **Animation Loop (requestAnimationFrame)**
   - [MDN: requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
   - Concept: FPS, delta time, smooth updates
   - Time commitment: 30 min

**Practice Project:**
Create a rotating cube with 2 lights. Should take 1-2 hours.

### **Week 1: Function Graphing**

5. **Creating Curves from Data**
   - [Three.js Example: Line](https://threejs.org/examples/#webgl_geometry_minecraft)
   - Approach: Array of Vector3 points → BufferGeometry → Line
   - Code: [Creating a line from points](https://threejs.org/docs/index.html#api/en/geometries/BufferGeometry)
   - Time commitment: 1 hour

6. **Interactive Controls**
   - [Three.js Example: OrbitControls](https://threejs.org/examples/#webgl_controls_orbit)
   - Let user rotate/zoom the 3D scene
   - Install: `npm install three/examples/jsm/controls/OrbitControls`
   - Time commitment: 1 hour

**Your Task for Week 1:**
Render sin(x) as a 3D curve, allow user to rotate it.

### **Week 2: Advanced Features**

7. **Drawing Shapes (Tangent Line)**
   - [Three.js: Creating geometry procedurally](https://threejs.org/docs/index.html#api/en/geometries/BufferGeometry)
   - Create line from point A to point B
   - Color it differently (cyan/magenta)
   - Time commitment: 1 hour

8. **Shaders (Optional, but cool)**
   - [Three.js Manual: Shaders](https://threejs.org/docs/index.html#manual/en/introduction/Custom-buffergeometry)
   - For advanced visual effects
   - Skip for MVP, revisit later
   - Time commitment: 2+ hours (skip if time-constrained)

**Your Task for Week 2:**
Add tangent line visualization, animate slider changes smoothly.

### **Key Concepts Checklist**

- [ ] Scene setup and basic rendering
- [ ] Create and render a line
- [ ] Add lighting
- [ ] Handle window resize
- [ ] Orbit controls (rotate/zoom)
- [ ] Update geometry dynamically
- [ ] No memory leaks on re-renders

### **Debugging Three.js**

**Common Issues:**
- Black screen: Check camera position (`camera.position.z = 10`)
- Nothing renders: Verify geometry has points and material is visible
- Slow performance: Check for memory leaks (DevTools → Memory tab)
- 3D looks wrong: Adjust camera far plane (`camera.far = 1000`)

**Debugging Tools:**
- [Three.js Inspector Chrome Extension](https://chrome.google.com/webstore/detail/three-js-inspector/dneaknljnubomkeiccbinignmmmbicge) - Inspect scene graph
- Browser DevTools: Console for errors, Performance tab for FPS

---

## ⚛️ Frontend Developer: React + Vite

### **Week 1: React Fundamentals**

**Already familiar with React?** Skip to "Vite & Build Optimization"

1. **React Basics (if new)**
   - [Official React Tutorial](https://react.dev/learn) - Start with "UI as a tree"
   - Focus sections: Components, JSX, Props, State (useState)
   - Time commitment: 2-3 hours

2. **Hooks (useState, useEffect, useCallback)**
   - [React Hooks Docs](https://react.dev/reference/react)
   - Key hooks: `useState`, `useEffect`, `useRef`, `useCallback`, `useContext`
   - Practice: Build a counter, todo list
   - Time commitment: 2 hours

3. **Side Effects (useEffect)**
   - [useEffect: The complete guide](https://react.dev/reference/react/useEffect)
   - Cleanup functions, dependency arrays
   - Time commitment: 1 hour

### **Week 1: Vite & Project Setup**

4. **Vite Basics**
   - [Vite Official Docs](https://vitejs.dev/guide/)
   - Benefits: Fast dev server, instant HMR
   - Commands: `npm run dev`, `npm run build`, `npm run preview`
   - Time commitment: 30 min

5. **Styling with Tailwind CSS**
   - [Tailwind CSS Docs](https://tailwindcss.com/docs)
   - Already installed in starter template
   - Approach: Utility-first CSS classes
   - Practice: Style a card, button, form
   - Time commitment: 1 hour

### **Week 1: Component Work**

6. **Build FunctionInput Component**
   - Controlled form input for function string
   - Validation (basic)
   - Call prop function on submit
   - Time commitment: 1-2 hours

7. **Build ExplanationPanel Component**
   - Display text (AI explanations)
   - Handle loading state
   - Handle error state
   - Time commitment: 1 hour

### **Week 2: API Integration**

8. **Axios for API Calls**
   - [Axios Docs](https://axios-http.com/)
   - Setup: `npm install axios`
   - Create API client with base URL
   - Time commitment: 1 hour

9. **useApi Custom Hook**
   - Encapsulate API logic
   - Handle loading, error, success states
   - Return data and helper functions
   - Time commitment: 1-2 hours

10. **Connecting to Backend**
    - Wire FunctionInput → API call → ExplanationPanel
    - Handle async operations
    - Show loading/error states
    - Time commitment: 2 hours

### **Key Concepts Checklist**

- [ ] Functional components with hooks
- [ ] Props and state management
- [ ] Form handling and submission
- [ ] API integration with Axios
- [ ] Error handling and loading states
- [ ] CSS-in-JS or Tailwind styling
- [ ] Component lifecycle (mount, update, unmount)

### **React + Three.js Integration**

**Special challenge:** Integrating Three.js into React

11. **useRef for DOM Access**
    - [React useRef](https://react.dev/reference/react/useRef)
    - Access DOM directly for Three.js container
    - Time commitment: 30 min

12. **Custom Hook: useThreeScene**
    - Encapsulate Three.js logic
    - Handle cleanup on unmount
    - Accept props and update scene
    - Example code in Starter Code doc
    - Time commitment: 2 hours

---

## 🐍 Backend Developer: FastAPI + Python

### **Week 1: FastAPI Basics**

1. **FastAPI Introduction**
   - [FastAPI Official Tutorial](https://fastapi.tiangolo.com/tutorial/)
   - Start with: Creating your first API, Path parameters, Query parameters
   - Time commitment: 2 hours

2. **Request/Response Models (Pydantic)**
   - [Pydantic Docs](https://docs.pydantic.dev/latest/)
   - Define request shapes with BaseModel
   - Automatic validation and documentation
   - Time commitment: 1 hour

3. **Error Handling**
   - [FastAPI Exception handling](https://fastapi.tiangolo.com/tutorial/handling-errors/)
   - Return proper HTTP status codes
   - Custom error responses
   - Time commitment: 30 min

4. **CORS Setup**
   - [FastAPI CORS middleware](https://fastapi.tiangodb.tiangles.dev/tutorial/cors/)
   - Allow requests from frontend
   - Configure allowed origins
   - Time commitment: 30 min

### **Week 1: Math & Science Libraries**

5. **NumPy Crash Course**
   - [NumPy Tutorial](https://numpy.org/doc/stable/user/index.html) - Start with "Getting Started"
   - Arrays, operations, numerical computing
   - Time commitment: 1 hour
   - Practice: Create array, do math, reshape

6. **SymPy for Symbolic Math**
   - [SymPy Documentation](https://docs.sympy.org/latest/index.html)
   - Symbols, expressions, differentiation, integration
   - Key functions: `symbols()`, `diff()`, `integrate()`, `sympify()`
   - Time commitment: 2 hours

7. **SymPy Deep Dive: Derivatives**
   - [SymPy: Differentiation](https://docs.sympy.org/latest/guides/solving/solving-guide.html#derivatives)
   - Calculate derivatives symbolically
   - Evaluate at specific points
   - Code: [Derivative example](https://docs.sympy.org/latest/modules/calculus/index.html)
   - Time commitment: 1 hour

8. **SymPy Deep Dive: Integration**
   - [SymPy: Integration](https://docs.sympy.org/latest/modules/integrals/integrals.html)
   - Indefinite integrals (antiderivatives)
   - Definite integrals (with bounds)
   - Time commitment: 1 hour

### **Week 2: AI Integration**

9. **Anthropic Claude API**
   - [Anthropic API Docs](https://docs.anthropic.com)
   - Setup: `uv pip install anthropic` (or it's already in `requirements.txt`)
   - Authentication with API key
   - Basic message creation
   - Time commitment: 1 hour

10. **Claude for Explanations**
    - Design prompts for calculus explanations
    - Call Claude API from FastAPI
    - Format responses nicely
    - Time commitment: 1-2 hours

### **Testing Backend Code**

11. **Pytest Basics**
    - [Pytest Docs](https://docs.pytest.org/en/stable/contents.html)
    - Write test functions
    - Run tests with `pytest`
    - Time commitment: 1 hour

12. **Testing FastAPI Endpoints**
    - [FastAPI Testing](https://fastapi.tiangles.dev/tutorial/testing/)
    - TestClient for making requests
    - Test success and error cases
    - Time commitment: 1-2 hours

### **Key Concepts Checklist**

- [ ] Create FastAPI app with endpoints
- [ ] Pydantic models for validation
- [ ] Error handling with proper HTTP status codes
- [ ] SymPy for symbolic differentiation
- [ ] SymPy for symbolic integration
- [ ] Anthropic API integration
- [ ] Unit tests with pytest

### **Quick Reference Commands**

```bash
# Start dev server
python -m uvicorn main:app --reload

# Run tests
pytest

# Check code style
pip install black && black .

# View API docs
# Go to http://localhost:8000/docs
```

---

## 🚀 DevOps Lead: Git, GitHub, Deployment

### **Week 1: Git & GitHub Workflow**

1. **Git Basics (if new)**
   - [Git Official Tutorial](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
   - Concepts: Commits, branches, merging
   - Time commitment: 1-2 hours

2. **Branching Strategy**
   - [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
   - Feature branches, pull requests, code review
   - Time commitment: 30 min

3. **GitHub Issues & Project Board**
   - Create issues, assign labels, organize sprints
   - Link PRs to issues (fixes #123)
   - Time commitment: 30 min

4. **Git Cheat Sheet for Your Team**
   - See `docs/git-cheatsheet.md` in the repo
   - Common commands, branching, conflict resolution
   - Time commitment: Reference material

### **Week 1: CI/CD Pipeline**

5. **GitHub Actions Basics**
   - [GitHub Actions Documentation](https://docs.github.com/en/actions)
   - Workflows, triggers, jobs, steps
   - Time commitment: 1-2 hours

6. **Setting Up Tests in CI**
   - Create `.github/workflows/ci.yml`
   - Run pytest on push
   - Run npm tests on push
   - Time commitment: 2 hours

7. **Linting & Code Quality**
   - [Black (Python code formatter)](https://black.readthedocs.io/en/stable/)
   - [Prettier (JavaScript formatter)](https://prettier.io/docs/en/index.html)
   - Add to CI pipeline to enforce style
   - Time commitment: 1 hour

### **Week 2: Deployment**

8. **Vercel (Frontend Hosting)**
   - [Vercel Docs](https://vercel.com/docs)
   - Sign up, connect GitHub repo
   - Auto-deploy on push to main
   - Set environment variables
   - Time commitment: 1 hour

9. **Railway.app or Render (Backend Hosting)**
   - [Railway Docs](https://docs.railway.app/) OR [Render Docs](https://render.com/docs)
   - Deploy Python FastAPI app
   - Configure environment variables
   - Set up custom domain (optional)
   - Time commitment: 1-2 hours

10. **Environment Variables in Production**
    - Never commit secrets
    - Use `.env` locally (in `.gitignore`)
    - Set in hosting platform dashboard
    - Document in `.env.example`
    - Time commitment: 30 min

### **Monitoring & Debugging**

11. **Logs & Error Tracking**
    - Check deployment logs (Vercel, Railway)
    - Set up basic error alerts
    - Time commitment: 30 min

12. **Performance Monitoring**
    - [Vercel Analytics](https://vercel.com/analytics)
    - Check page speed, FCP, LCP
    - Time commitment: 30 min (initial setup)

### **Key Concepts Checklist**

- [ ] Git branching and merging
- [ ] GitHub Pull Requests and code review
- [ ] GitHub Actions CI/CD
- [ ] Deploying frontend to Vercel
- [ ] Deploying backend to Railway/Render
- [ ] Managing environment variables
- [ ] Monitoring and debugging production issues

### **Quick Commands for Team**

```bash
# Git workflow
git checkout -b feature/your-feature
git add .
git commit -m "feat: description"
git push origin feature/your-feature
# Then create PR on GitHub

# Run full CI locally before pushing
cd backend && pytest
cd ../frontend && npm run build

# Verify formatting
black . && prettier --write .
```

---

## 📖 Useful General Resources

### **Math Resources**
- [Khan Academy: Calculus](https://www.khanacademy.org/math/calculus-1) - If students need math review
- [3Blue1Brown: Essence of Calculus](https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr) - Beautiful visual explanations

### **Web Development Basics**
- [MDN Web Docs: HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs: CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### **Dev Tools**
- [VS Code User Guide](https://code.visualstudio.com/docs/introvideos/basics)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Postman API Testing](https://learning.postman.com/docs/getting-started/overview/)

### **Design & UX**
- [Figma Tutorials](https://www.figma.com/resources/assets/learn-design/) (if doing mockups)
- [Material Design](https://material.io/) - Design guidelines

---

## 🎯 Learning Schedule

**Week 1:**
- Day 1-2: Role-specific fundamentals (2-3 hours learning)
- Day 3-5: Hands-on practice building components

**Week 2:**
- Day 1-3: Advanced topics, integration
- Day 4-5: Polish, optimization, deployment

**Pro Tip:** Learn by doing! Don't spend all day in tutorials. Read docs, then code immediately.

---

## 💬 Getting Help

**If you're stuck:**
1. **Google it** - Most issues are common, solutions are online
2. **Check the docs** - The official docs usually have your answer
3. **Ask the team** - #dev-help channel or standup
4. **Code review** - Others might spot what you missed

**Remember:** Stuck for >15 min? Ask for help. That's how we learn faster.

---

## ✅ By End of Week 1, You Should Know:

- **3D Graphics:** How to create and render a 3D scene with Three.js
- **Frontend:** How to build React components and integrate them
- **Backend:** How to build FastAPI endpoints and use SymPy for math
- **DevOps:** How to set up CI/CD and deploy an app

---

**Happy Learning! 🚀 And remember: you don't need to memorize everything. Knowing where to find answers is the real superpower.**
