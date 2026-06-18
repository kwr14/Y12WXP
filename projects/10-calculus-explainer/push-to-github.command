#!/bin/bash
cd "$(dirname "$0")"

# Remove stale lock if present
[ -f .git/index.lock ] && rm -f .git/index.lock

git add -A
git diff --cached --quiet || git commit -m "Initial commit: Work experience project files for Y12 students"
git remote get-url origin &>/dev/null || git remote add origin https://github.com/kwr14/Y12WXP.git
gh repo set-default kwr14/Y12WXP 2>/dev/null || true
git push -u origin main

echo ""
echo "Done! https://github.com/kwr14/Y12WXP"
