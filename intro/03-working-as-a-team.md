# Working as a Software Team

Software is almost never built by one person. Even a small startup has engineers, designers, and product managers working together on the same codebase. Knowing how to collaborate on code is one of the most valuable skills you can develop — and it's one that interviews and internship applications specifically look for.

This guide covers the workflows, conventions, and habits that make software teams work well.

---

## How real software teams are organised

Most software teams follow some version of the **agile** methodology. Here's what that means in practice:

**Roles in a typical team:**

| Role | Responsibilities |
|------|----------------|
| **Product Manager (PM)** | Decides what to build and why; keeps the team focused on the user |
| **Tech Lead / Architect** | Makes the big technical decisions; reviews code; unblocks others |
| **Frontend Developer** | Builds what the user sees: UI, layout, interactions |
| **Backend Developer** | Builds the server, API, database |
| **Designer / UX** | Makes the product look good and easy to use |
| **QA / Tester** | Finds bugs before users do |

In a small team like yours, people wear multiple hats. That's normal. Agree on who is primarily responsible for what at the start of the project.

**Sprints:** Work is organised into short cycles called sprints (usually 1–2 weeks). At the start of a sprint, the team agrees on a set of tasks to complete. At the end, they demo what they built and reflect on how the sprint went.

Your entire work experience is essentially one sprint.

---

## Git: the tool that makes collaboration possible

Without version control, two people editing the same file will overwrite each other's work. Git solves this. It:

- Tracks every change to every file, with a message explaining why
- Lets multiple people work on different things simultaneously
- Lets you undo mistakes by going back to any previous state
- Provides a shared history of everything the team has ever done

**GitHub** is a website that hosts your git repository in the cloud so everyone on the team can access it.

---

## The Git workflow you'll use

### Step 1: Clone the repository

One person creates the repository on GitHub; everyone else clones it:

```bash
git clone https://github.com/your-org/your-repo.git
cd your-repo
```

### Step 2: Create a branch for your work

Never work directly on `main`. Create a branch for each feature or task:

```bash
git checkout -b feature/add-login-form
```

Use descriptive branch names: `feature/chart-component`, `fix/broken-submit-button`, `docs/update-readme`.

### Step 3: Make your changes and commit them

```bash
# See what's changed
git status

# Stage the files you want to commit
git add src/LoginForm.jsx

# Commit with a message
git commit -m "Add login form with email and password fields"
```

### Step 4: Push your branch to GitHub

```bash
git push origin feature/add-login-form
```

### Step 5: Open a Pull Request (PR)

On GitHub, click "Compare & pull request". Write a short description of what you changed and why. Ask a teammate to review it.

### Step 6: Review and merge

Your reviewer reads the code, leaves comments, and approves (or requests changes). Once approved, you merge the PR into `main`.

### Step 7: Pull the latest changes

Before starting your next branch, always pull the latest version of `main`:

```bash
git checkout main
git pull origin main
```

Then create a new branch and repeat.

---

## Writing good commit messages

A commit message is a note to your future self (and your teammates). Make it count.

**Bad commit messages:**
```
fixed stuff
update
asdfghjkl
WIP
changes
```

**Good commit messages:**
```
Add mood chart to the history page
Fix crash when localStorage is empty on first load
Remove console.log statements before demo
Update Chart.js to v4 to fix pie chart rendering
```

**The rule of thumb:** if you can't describe your commit in one sentence, it's probably too big. Commit small, commit often.

---

## How to resolve merge conflicts (don't panic)

A merge conflict happens when two people change the same lines of the same file. Git can't automatically decide which version to keep, so it asks you.

A conflict looks like this in your file:

```
<<<<<<< HEAD
const greeting = "Hello";
=======
const greeting = "Hi there";
>>>>>>> feature/update-greeting
```

Everything between `<<<<<<< HEAD` and `=======` is your version. Everything between `=======` and `>>>>>>>` is the incoming version.

To resolve it:
1. Delete the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
2. Keep whichever version is correct (or combine them)
3. Save the file
4. `git add` the file
5. `git commit` to complete the merge

VS Code has a built-in merge conflict resolver (it shows buttons: "Accept Current", "Accept Incoming", "Accept Both"). Use that — it's much easier than editing the raw text.

**The best way to avoid merge conflicts:** communicate with your team. If two people are working on the same file, coordinate so you're editing different sections. And pull `main` frequently so you're not working with a stale version.

---

## Daily standups

Every morning, before you write a single line of code, the whole team stands up (literally — standing keeps it short) and each person says three things:

1. **What I did yesterday** — one or two sentences
2. **What I'm doing today** — one or two sentences
3. **Any blockers** — things stopping you from making progress

The whole thing should take 5 minutes, not 30. It's not a status report for a manager — it's the team synchronising so you can help each other.

If someone has a blocker, someone else should offer to help — but have that conversation *after* the standup, not during it.

**Example:**
> "Yesterday I got the Chart.js library set up and the mood data displaying as a line chart. Today I'm going to add the date range filter. No blockers."

---

## Communication tips

**Ask questions early.** The longer you sit stuck on something without asking, the more time gets wasted. Most problems are solved in two minutes when you ask the right person. Most blockers that last hours are because someone was too embarrassed to ask.

**Describe problems precisely.** "It's broken" is not a useful bug report. "When I click Submit with an empty form, the page goes blank and the browser console shows `TypeError: Cannot read properties of undefined`" — that's useful.

**Unblock yourself first, then ask.** Before asking for help, try:
1. Re-reading the error message carefully
2. Googling the exact error message
3. Asking Claude or ChatGPT (with full context)
4. Checking the library's documentation
5. Looking at a working example

If none of that worked after 20 minutes, ask a teammate or mentor.

**Speak up in reviews.** When you review someone else's code, leave specific comments — even if it's just "I didn't know you could do it this way, neat!" Code review is how knowledge spreads through a team.

---

## Agile/sprint mindset

A few principles worth remembering throughout the two weeks:

**Done is better than perfect.** A working feature that's a bit rough is more valuable than a polished feature that isn't finished. Ship first, polish second.

**Break tasks into small pieces.** "Build the dashboard" is not a task you can do in an afternoon. "Add a card component that displays a single mood entry" is. Small tasks are easier to estimate, easier to review, and more satisfying to complete.

**Demo frequently.** Show what you've built, even when it's not finished. Demos catch misunderstandings early ("wait, I thought it was supposed to show weekly data, not daily?").

**Retrospectives are honest.** At the end of your sprint (Day 10), be honest about what went well and what didn't. The goal isn't to blame anyone — it's to learn what to do differently next time.

---

## Quick reference

```bash
# Start working on something new
git checkout main
git pull origin main
git checkout -b feature/your-feature-name

# Save your work
git add .
git commit -m "Short description of what you did"

# Share your work
git push origin feature/your-feature-name

# Get someone else's changes
git pull origin main

# See what's changed
git status
git log --oneline
```

Next up: [04-using-ai-as-a-developer.md](./04-using-ai-as-a-developer.md)
