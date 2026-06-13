# Calculus Explainer: Local Development Setup

**For:** Year 12 A-level students  
**Duration:** ~30-45 minutes to complete  
**Prerequisites:** Git installed, basic terminal familiarity

---

## ✅ Pre-Setup Checklist

Before starting, ensure you have:
- [ ] Git installed (`git --version`)
- [ ] Node.js 18+ installed (`node --version`)
- [ ] Python 3.9+ installed (`python3 --version`)
- [ ] A code editor (VS Code recommended)
- [ ] GitHub account created
- [ ] Access to the Calculus Explainer GitHub repo

---

## 🚀 Part 1: Clone & Initial Setup (10 min)

### **Step 1: Clone the repository**
```bash
git clone https://github.com/kwr14/calculus-explainer.git
cd calculus-explainer
```

### **Step 2: Clone the repo locally with your assigned branch**
```bash
# Check what branch you're on (should be main)
git branch

# Create your own working branch
git checkout -b feature/your-name
# Example: git checkout -b feature/alice-3d-graphics
```

### **Step 3: Verify directory structure**
```bash
ls -la
# You should see: frontend/, backend/, docs/, .github/
```

---

## 🎨 Part 2: Frontend Setup (15 min)

### **Step 1: Navigate to frontend folder**
```bash
cd frontend
```

### **Step 2: Install Node dependencies**
```bash
npm install
# Wait for this to complete (2-3 min)
```

### **Step 3: Verify Three.js is installed**
```bash
npm list three
# Should show: three@latest
```

### **Step 4: Start the development server**
```bash
npm run dev
# You should see: "Local: http://localhost:5173"
```

### **Step 5: Open in browser**
- Go to `http://localhost:5173`
- You should see a basic React app with a 3D canvas
- **If you see errors:** Check browser console (F12) for details

### **Step 6: Keep this running**
- Leave this terminal open; it will hot-reload as you save changes

---

## 🐍 Part 3: Backend Setup (15 min)

### **Step 1: Open a new terminal and navigate to backend**
```bash
# In a NEW terminal (keep frontend running in the other)
cd calculus-explainer/backend
```

### **Step 2: Install uv (Python package manager)**

**uv** is a fast, modern replacement for `pip` and `venv`. Install it once:

```bash
# macOS / Linux:
curl -LsSf https://astral.sh/uv/install.sh | sh

# Windows (PowerShell):
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Restart your terminal, then check it works: `uv --version`

> uv is written in Rust and installs packages 10–100× faster than pip. It manages virtual environments automatically — no need to think about activating them.

### **Step 3: Install Python dependencies**
```bash
uv venv
uv pip install -r requirements.txt
# This installs: fastapi, uvicorn, numpy, sympy, anthropic
```

### **Step 4: Create a `.env` file for API keys**
```bash
# In the backend folder, create a file called .env
touch .env

# Add your Claude API key (get from https://console.anthropic.com)
echo "CLAUDE_API_KEY=sk-ant-xxxxx" >> .env
```

⚠️ **IMPORTANT:** Never commit `.env` to GitHub. It's already in `.gitignore`.

### **Step 5: Start the backend server**
```bash
uv run python main.py
# You should see: "Uvicorn running on http://127.0.0.1:8000"
```

### **Step 6: Test the API**
Open your browser and go to:
```
http://localhost:8000/docs
```

You should see the **FastAPI interactive docs** (Swagger UI). This is your API testing playground.

---

## 🔗 Part 4: Connect Frontend to Backend (5 min)

### **Step 1: Check the frontend API configuration**

In `frontend/src/api/client.js`, verify the backend URL:
```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
```

### **Step 2: Test the connection**

In your React app (browser), open the developer console (F12) and check:
- [ ] No CORS errors
- [ ] No 404 errors
- [ ] Frontend can communicate with backend

If you see CORS errors, the backend's CORS settings need adjustment. Ask your DevOps person or check `backend/main.py`.

---

## 🎓 Part 5: Verify Everything Works

### **Test 1: Frontend loads**
- [ ] http://localhost:5173 loads without errors
- [ ] You see a 3D canvas
- [ ] Browser console (F12) shows no errors

### **Test 2: Backend is running**
- [ ] http://localhost:8000/docs opens Swagger UI
- [ ] You can see API endpoints listed

### **Test 3: Frontend → Backend communication**
- [ ] Click "Test API" button in the app (if available)
- [ ] Check network tab (F12 → Network) to see API calls
- [ ] Response should come back successfully

### **Test 4: Try a calculation**
- [ ] Input a function (e.g., `x**2`)
- [ ] Click "Calculate Derivative"
- [ ] You should see a result in the 3D view and explanation

---

## 📝 Part 6: Git Workflow Setup

### **Step 1: Verify your git config**
```bash
git config user.name "Your Name"
git config user.email "your.email@school.ac.uk"
```

### **Step 2: Create your feature branch (if not done already)**
```bash
git checkout -b feature/your-feature-name
# Example: feature/alice-derivatives-ui
```

### **Step 3: Make a small test commit**
```bash
# Make a small change (e.g., edit a comment)
git add .
git commit -m "test: verify git setup"
git push origin feature/your-feature-name
```

### **Step 4: Create a Pull Request**
- Go to GitHub repo
- You should see a notification to "Compare & pull request"
- Click it and describe your change
- Wait for code review before merging

---

## 🆘 Troubleshooting

### **Frontend won't start**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### **Backend won't start**
```bash
# Check Python version
python3 --version  # Should be 3.9+

# Reinstall dependencies
uv pip install -r requirements.txt

# Check if port 8000 is in use
lsof -i :8000  # Kill the process if needed
```

### **CORS errors**
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution:** Backend needs CORS enabled. Check `backend/main.py`:
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### **Claude API key not working**
- [ ] Verify the key starts with `sk-ant-`
- [ ] Check it's in `.env` (not in code)
- [ ] Go to https://console.anthropic.com and verify it's active
- [ ] Restart the backend server after updating `.env`

### **Port already in use**
```bash
# Port 5173 (frontend):
lsof -i :5173 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Port 8000 (backend):
lsof -i :8000 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

---

## ✅ You're Set Up!

Once all tests pass:
1. Slack/Discord your DevOps person: "✅ Setup complete!"
2. Check the task board for your first assignment
3. Create your first feature branch
4. Join daily standup

---

## 📞 Need Help?

- **Technical issue?** Ask in #dev-help channel or ping your DevOps lead
- **Git problem?** Check the [Git Cheat Sheet](./docs/git-cheatsheet.md)
- **API question?** Open http://localhost:8000/docs and explore

**Enjoy building! 🚀**
