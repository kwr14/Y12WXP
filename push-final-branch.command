#!/bin/bash
set -e
cd "$(dirname "$0")"

echo "🌿 Creating 'final' branch and pushing the complete app..."

# Remove stale lock if present
[ -f .git/index.lock ] && rm -f .git/index.lock

# Make sure we're on main and up to date
git checkout main 2>/dev/null || true
git pull origin main 2>/dev/null || true

# Create the final branch (delete it first if it already exists locally)
git branch -D final 2>/dev/null || true
git checkout -b final

# Stage everything
git add -A

# Commit
git commit -m "feat: complete calculus explainer app

- React + Three.js frontend (DerivativeScene, IntegralScene, LimitScene)
- ControlPanel with function input, sliders, exact-calculation button
- ExplanationPanel with Claude AI explanations
- FastAPI backend: /api/math/derivative, /integral, /evaluate
- /api/ai/explain endpoint (Claude Haiku)
- SymPy symbolic maths (exact derivatives & integrals)
- Pytest unit tests (6 tests)
- GitHub Actions CI (backend tests + frontend build)
- Docker + docker-compose support
- Full README with setup instructions"

# Push
echo "🚀 Pushing to GitHub..."
git push -u origin final --force

echo ""
echo "✅  Done!  Branch 'final' is live at:"
echo "   https://github.com/kwr14/Y12WXP/tree/final"
