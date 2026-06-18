#!/bin/bash
set -e

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$REPO_DIR"

echo "📁 Working in: $REPO_DIR"

# Remove stale lock if present
if [ -f .git/index.lock ]; then
  echo "🔓 Removing stale git lock..."
  rm -f .git/index.lock
fi

# Stage and commit
echo "📦 Staging files..."
git add -A

if git diff --cached --quiet; then
  echo "✅ Nothing to commit — already up to date."
else
  git commit -m "Initial commit: Work experience project files for Y12 students"
  echo "✅ Committed."
fi

# Set remote if not already set
if ! git remote get-url origin &>/dev/null; then
  git remote add origin https://github.com/kwr14/Y12WXP.git
fi

# Push using gh (handles auth automatically)
echo "🚀 Pushing to GitHub..."
gh repo set-default kwr14/Y12WXP 2>/dev/null || true
git push -u origin main

echo ""
echo "✅ Done! Visit: https://github.com/kwr14/Y12WXP"
