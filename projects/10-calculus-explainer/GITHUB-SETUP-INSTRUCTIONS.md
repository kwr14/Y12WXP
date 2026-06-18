# GitHub Setup Instructions

**For:** Setting up the remote GitHub repository and pushing the Calculus Explainer project

---

## 📋 What You Have

A local Git repository at: `/Users/su/work/Y12WXP/` (or wherever you moved it)

**Current status:**
- ✅ 16 project files committed
- ✅ Branch structure created (develop, feature branches)
- ✅ `.gitignore` file added (when local setup completes)
- ⏳ Ready to push to GitHub

---

## 🚀 Step 1: Create GitHub Repository

### On GitHub.com:

1. Go to **github.com** and sign in to your account
2. Click **"+" → New repository**
3. Configure:
   - **Repository name:** `calculus-explainer` (or `Y12WXP`)
   - **Description:** "Interactive 3D web app for visualizing calculus concepts"
   - **Visibility:** Public (so students can learn from it)
   - **Initialize:** Don't check "Add README" (we already have one)
   - Click **"Create repository"**

4. You'll see the quick setup page. Copy the HTTPS URL (looks like):
   ```
   https://github.com/kwr14/calculus-explainer.git
   ```

---

## 🔗 Step 2: Connect Local Repo to GitHub

On your Mac, run these commands:

```bash
# Navigate to your local repo
cd /Users/su/work/Y12WXP

# Add the remote GitHub repository
git remote add origin https://github.com/kwr14/calculus-explainer.git

# Verify it worked
git remote -v
# Should show:
# origin  https://github.com/kwr14/calculus-explainer.git (fetch)
# origin  https://github.com/kwr14/calculus-explainer.git (push)
```

---

## 🌳 Step 3: Set Up Branches

```bash
cd /Users/su/work/Y12WXP

# Rename master to main (modern convention)
git branch -m master main

# Create develop branch (for integration)
git checkout -b develop
git push -u origin develop

# Create feature branches for each role
git checkout main
git checkout -b feature/3d-graphics-setup
git push -u origin feature/3d-graphics-setup

git checkout main
git checkout -b feature/frontend-setup
git push -u origin feature/frontend-setup

git checkout main
git checkout -b feature/backend-setup
git push -u origin feature/backend-setup

git checkout main
git checkout -b feature/devops-setup
git push -u origin feature/devops-setup

# Go back to main
git checkout main
```

---

## 📤 Step 4: Push to GitHub

```bash
cd /Users/su/work/Y12WXP

# Push main branch with all commits
git push -u origin main

# Push all branches at once
git push --all -u

# Verify
git branch -r
# Should show:
# origin/main
# origin/develop
# origin/feature/3d-graphics-setup
# origin/feature/frontend-setup
# origin/feature/backend-setup
# origin/feature/devops-setup
```

---

## ✅ Step 5: Verify on GitHub

1. Go to your GitHub repository URL
2. You should see:
   - ✅ All 16 files committed
   - ✅ Branch selector showing `main`, `develop`, and feature branches
   - ✅ Commit history with your initial commit
   - ✅ `.gitignore` file present

---

## 🔐 Step 6: Configure Branch Protection (Optional but Recommended)

On GitHub, go to **Settings → Branches**:

1. Click **"Add rule"** under "Branch protection rules"
2. Apply to branch: `main`
3. Check:
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging
4. Save

This enforces code review before merging to main.

---

## 🎯 Step 7: Clone for Your Team

Once pushed, team members can clone with:

```bash
git clone https://github.com/kwr14/calculus-explainer.git
cd calculus-explainer
npm install  # if needed
```

---

## 📊 Branch Structure Explanation

| Branch | Purpose | Who Uses | When |
|--------|---------|----------|------|
| `main` | Production-ready code | Everyone | Final, tested code only |
| `develop` | Integration branch | All devs | Where features come together |
| `feature/3d-graphics-setup` | 3D Graphics work | 3D Graphics dev | Day 1-2 setup |
| `feature/frontend-setup` | Frontend work | Frontend dev | Day 1-2 setup |
| `feature/backend-setup` | Backend work | Backend dev | Day 1-2 setup |
| `feature/devops-setup` | DevOps work | DevOps dev | Day 1-2 setup |

**Workflow:**
1. Students create feature branches from `develop`
2. Complete their work
3. Create PR to `develop`
4. Get code review
5. Merge to `develop`
6. At end of week, merge `develop` → `main`

---

## 🔑 Recommended Settings

### GitHub Repository Settings:

**General:**
- ✅ Require branches to be up to date before merging
- ✅ Automatically delete head branches

**Code security and analysis:**
- ✅ Enable Dependabot alerts
- ✅ Enable Dependabot security updates

---

## 📚 Useful Git Commands for Your Team

```bash
# Clone the repo
git clone https://github.com/kwr14/calculus-explainer.git

# See all branches
git branch -a

# Switch to a branch
git checkout feature/frontend-setup

# Create a new branch from develop
git checkout develop
git checkout -b feature/your-feature-name

# Push your branch
git push -u origin feature/your-feature-name

# Pull latest changes
git pull origin develop

# See commit history
git log --oneline --graph --all
```

---

## ✨ You're Done!

Once you've completed these steps:
- ✅ GitHub repository is set up
- ✅ All branches are in place
- ✅ Team can clone and start working
- ✅ Code review process is configured

Your project is ready to launch! 🚀

---

## 🆘 Troubleshooting

**"fatal: 'origin' does not appear to be a 'git' repository"**
→ Run `git remote add origin <URL>` first

**"Permission denied (publickey)"**
→ Set up SSH key: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

**"fatal: A branch named 'main' already exists"**
→ You already have main branch, skip the rename step

**"fatal: 'origin' does not appear to be a 'git' repository"**
→ Make sure you're in the repo directory: `cd /Users/su/work/Y12WXP`

---

**Need help? Refer to:** https://docs.github.com/en/get-started

