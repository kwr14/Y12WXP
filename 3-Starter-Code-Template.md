# Starter Code Template

**For:** Initial project setup  
**Purpose:** Boilerplate for all team members to clone and build upon

---

## 📦 What's Included

This starter template includes:
- ✅ React project with Vite
- ✅ Three.js scene setup
- ✅ FastAPI backend with example endpoints
- ✅ GitHub Actions CI/CD setup
- ✅ Docker configuration for easy deployment
- ✅ Example components and utilities

---

## 🎬 Getting Started with Starter Code

### **1. One-time: Clone the starter template**

```bash
git clone https://github.com/kwr14/calculus-explainer.git
cd calculus-explainer
```

The repo will have the complete structure already set up.

---

## 📁 Frontend Starter Code

### **File: `frontend/src/components/ThreeDScene.jsx`**

```jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDScene = ({ functionString }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add lighting
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Create a simple function curve
    const createCurve = (func, xMin = -5, xMax = 5, segments = 100) => {
      const points = [];
      for (let i = 0; i <= segments; i++) {
        const x = xMin + (xMax - xMin) * (i / segments);
        let y = 0;
        try {
          // Simple evaluation (use math.js for complex expressions)
          y = eval(func);
        } catch (e) {
          console.error('Error evaluating function:', e);
        }
        points.push(new THREE.Vector3(x, y, 0));
      }
      return points;
    };

    // Plot the function
    const curve = createCurve(functionString);
    const geometry = new THREE.BufferGeometry().setFromPoints(curve);
    const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    const line = new THREE.Line(geometry, material);
    scene.add(line);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [functionString]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '600px',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    />
  );
};

export default ThreeDScene;
```

### **File: `frontend/src/api/client.js`**

```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const client = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// API endpoints
export const api = {
  // Math calculations
  calculateDerivative: (functionString, xValue) =>
    client.post('/api/math/derivative', {
      function: functionString,
      x: xValue,
    }),

  calculateIntegral: (functionString, a, b) =>
    client.post('/api/math/integral', {
      function: functionString,
      bounds: { lower: a, upper: b },
    }),

  calculateFunction: (functionString, xValue) =>
    client.post('/api/math/evaluate', {
      function: functionString,
      x: xValue,
    }),

  // AI explanations
  explain: (concept) =>
    client.post('/api/ai/explain', {
      concept: concept,
    }),

  explainDerivative: (functionString, xValue) =>
    client.post('/api/ai/explain-derivative', {
      function: functionString,
      x: xValue,
    }),

  // Health check
  health: () => client.get('/health'),
};

export default client;
```

### **File: `frontend/src/hooks/useApi.js`**

```javascript
import { useState, useCallback } from 'react';
import { api } from '../api/client';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = useCallback(async (apiCall) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiCall;
      return response.data;
    } catch (err) {
      setError(err.response?.data?.detail || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { callApi, loading, error };
};
```

### **File: `frontend/src/App.jsx`**

```jsx
import React, { useState } from 'react';
import ThreeDScene from './components/ThreeDScene';
import FunctionInput from './components/FunctionInput';
import './App.css';

function App() {
  const [functionString, setFunctionString] = useState('Math.sin(x)');
  const [mode, setMode] = useState('derivatives'); // derivatives, integrals, limits

  return (
    <div className="app">
      <header className="header">
        <h1>📊 Calculus Explainer</h1>
        <p>Visualize derivatives, integrals, and limits in 3D</p>
      </header>

      <main className="main">
        <aside className="sidebar">
          <FunctionInput
            value={functionString}
            onChange={setFunctionString}
          />

          <div className="mode-selector">
            <h3>Mode</h3>
            <button
              className={mode === 'derivatives' ? 'active' : ''}
              onClick={() => setMode('derivatives')}
            >
              📈 Derivatives
            </button>
            <button
              className={mode === 'integrals' ? 'active' : ''}
              onClick={() => setMode('integrals')}
            >
              ∫ Integrals
            </button>
            <button
              className={mode === 'limits' ? 'active' : ''}
              onClick={() => setMode('limits')}
            >
              lim Limits
            </button>
          </div>
        </aside>

        <section className="content">
          <ThreeDScene functionString={functionString} />
          <div className="explanation">
            <h3>Explanation</h3>
            <p>AI-powered explanation will appear here...</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
```

---

## 🐍 Backend Starter Code

### **File: `backend/main.py`**

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Create FastAPI app
app = FastAPI(
    title="Calculus Explainer API",
    description="AI-powered math visualization backend",
    version="0.1.0"
)

# Add CORS middleware for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Import routers
from routers import math, ai, health

# Include routers
app.include_router(health.router)
app.include_router(math.router, prefix="/api/math", tags=["math"])
app.include_router(ai.router, prefix="/api/ai", tags=["ai"])

@app.get("/")
async def root():
    return {
        "message": "Calculus Explainer API",
        "docs": "/docs",
        "version": "0.1.0"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

### **File: `backend/routers/math.py`**

```python
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import numpy as np
import sympy as sp

router = APIRouter()

class FunctionRequest(BaseModel):
    function: str
    x: float = None
    bounds: dict = None

@router.post("/evaluate")
async def evaluate_function(request: FunctionRequest):
    """Evaluate a function at a given x value"""
    try:
        x = request.x
        result = eval(request.function.replace('Math.', 'np.'))
        return {"result": float(result)}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/derivative")
async def calculate_derivative(request: FunctionRequest):
    """Calculate the derivative of a function"""
    try:
        x = sp.Symbol('x')
        func = sp.sympify(request.function.replace('Math.', ''))
        derivative = sp.diff(func, x)
        
        if request.x is not None:
            derivative_value = float(derivative.subs(x, request.x))
            return {
                "derivative": str(derivative),
                "value_at_x": derivative_value,
                "x": request.x
            }
        return {"derivative": str(derivative)}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/integral")
async def calculate_integral(request: FunctionRequest):
    """Calculate the definite integral of a function"""
    try:
        x = sp.Symbol('x')
        func = sp.sympify(request.function.replace('Math.', ''))
        
        if request.bounds:
            a = request.bounds.get('lower', 0)
            b = request.bounds.get('upper', 1)
            integral = sp.integrate(func, (x, a, b))
            return {
                "integral": str(integral),
                "value": float(integral),
                "bounds": {"lower": a, "upper": b}
            }
        else:
            indefinite = sp.integrate(func, x)
            return {"indefinite_integral": str(indefinite)}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
```

### **File: `backend/routers/ai.py`**

```python
from fastapi import APIRouter
from pydantic import BaseModel
import os
from anthropic import Anthropic

router = APIRouter()

# Initialize Anthropic client
client = Anthropic()

class ExplainRequest(BaseModel):
    concept: str

class ExplainDerivativeRequest(BaseModel):
    function: str
    x: float

@router.post("/explain")
async def explain_concept(request: ExplainRequest):
    """Get an AI explanation of a calculus concept"""
    try:
        message = client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=500,
            messages=[
                {
                    "role": "user",
                    "content": f"Explain this calculus concept in simple terms suitable for A-level students:\n\n{request.concept}"
                }
            ]
        )
        return {
            "explanation": message.content[0].text,
            "concept": request.concept
        }
    except Exception as e:
        return {"error": str(e)}

@router.post("/explain-derivative")
async def explain_derivative(request: ExplainDerivativeRequest):
    """Get an AI explanation of a derivative"""
    try:
        message = client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=500,
            messages=[
                {
                    "role": "user",
                    "content": f"I'm learning calculus. Explain what the derivative of {request.function} means at x={request.x}. Keep it simple and intuitive."
                }
            ]
        )
        return {
            "explanation": message.content[0].text,
            "function": request.function,
            "x": request.x
        }
    except Exception as e:
        return {"error": str(e)}
```

### **File: `backend/routers/health.py`**

```python
from fastapi import APIRouter

router = APIRouter(tags=["health"])

@router.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "ok",
        "service": "Calculus Explainer API"
    }
```

### **File: `backend/requirements.txt`**

```
fastapi==0.104.1
uvicorn==0.24.0
python-dotenv==1.0.0
pydantic==2.5.0
numpy==1.24.3
sympy==1.12
anthropic==0.21.0
pytest==7.4.3
pytest-asyncio==0.21.1
```

### **File: `backend/.env.example`**

```
CLAUDE_API_KEY=your-key-here
```

---

## 🚀 GitHub Actions Workflow

### **File: `.github/workflows/ci.yml`**

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: "3.9"

      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install uv
        uses: astral-sh/setup-uv@v3

      - name: Install Python dependencies
        run: |
          cd backend
          uv pip install --system -r requirements.txt

      - name: Run Python tests
        run: |
          cd backend
          uv run pytest

      - name: Install Node dependencies
        run: |
          cd frontend
          npm install

      - name: Build frontend
        run: |
          cd frontend
          npm run build

```

---

## 📦 Docker Support

### **File: `backend/Dockerfile`**

```dockerfile
FROM python:3.11-slim

# Install uv (fast Python package manager)
COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv

WORKDIR /app

COPY requirements.txt .
RUN uv pip install --system --no-cache -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

---

## ✅ What Students Need to Know

1. **Frontend uses Vite** (fast dev server, modern tooling)
2. **Three.js is already configured** (just import and use)
3. **Backend uses FastAPI** (async, auto-docs, type hints)
4. **Claude API is wrapped** in `routers/ai.py` (ready to use)
5. **Math calculations use SymPy** (symbolic math library)
6. **API is already connected** via `frontend/src/api/client.js`
7. **Python deps managed with uv** — faster than pip, no manual venv activation

---

## 🔧 Quick Commands

```bash
# Frontend
cd frontend && npm install && npm run dev

# Backend (uv handles the virtual environment automatically)
cd backend && uv venv && uv pip install -r requirements.txt && uv run python main.py

# Tests
cd backend && uv run pytest

# Build for production
cd frontend && npm run build
```

---

## 📚 Next Steps

1. Clone this repo
2. Follow Setup Instructions (doc #1)
3. Check the GitHub Repo Structure (doc #2)
4. Start coding!

**The starter code is production-ready but intentionally minimal. Your job is to add the features!** 🚀
