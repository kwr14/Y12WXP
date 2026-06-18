# 🚀 Calculus Explainer: Launch Checklist

**For:** Project Manager / School Leadership  
**Purpose:** Everything you need to launch the project  
**Status:** Ready to launch!

---

## 📦 What You Have

You now have **9 comprehensive, production-ready documents**:

### **1. Project Documents** (What to show stakeholders)
- ✅ **Calculus-Explainer-Project-Brief.md** — Full project overview, timeline, learning outcomes
- ✅ **Parent-Stakeholder-Summary.md** — Explain the project to parents and school leadership

### **2. Student Guides** (What students read first)
- ✅ **1-Setup-Instructions.md** — Step-by-step local dev setup (Day 1)
- ✅ **2-GitHub-Repo-Structure.md** — Best practices for code organization and Git workflow
- ✅ **3-Starter-Code-Template.md** — Boilerplate code ready to clone
- ✅ **4-Day-by-Day-Task-Breakdown.md** — Detailed 2-week sprint with specific tasks
- ✅ **5-Learning-Resources.md** — Curated tutorials and docs for each role
- ✅ **Quick-Reference-Guide.md** — Cheat sheet students can print and keep handy

### **3. Project Artifacts** (For management)
- ✅ **GitHub-Repo-README.md** — Professional repo README
- ✅ **Project-Tasks.csv** — All tasks in spreadsheet format (import to Trello/Linear)
- ✅ **Student-Onboarding-Email.md** — Email template to send to students pre-project
- ✅ **6-Kickoff-Slide-Deck.md** — 16-slide presentation outline with speaker notes

### **4. Bonus Resources** (You're getting these too!)
- ✅ **create-presentation.js** — JavaScript to generate PPTX (run locally)

---

## ✅ Pre-Launch (This Week)

### Step 1: Create GitHub Repository
- [ ] Create GitHub org/team if needed
- [ ] Create repo from starter template (or manually copy folder structure from **2-GitHub-Repo-Structure.md**)
- [ ] Add team members as collaborators
- [ ] Enable branch protection on `main`
- [ ] Create PR template (in `.github/pull_request_template.md`)
- [ ] Copy **GitHub-Repo-README.md** to main README

### Step 2: Set Up Tools & Access
- [ ] Create/confirm Slack workspace and #dev-help channel
- [ ] Set up project board (GitHub Projects, Trello, or Linear)
- [ ] Import tasks from **Project-Tasks.csv** into your project board
- [ ] Get Claude API key from https://console.anthropic.com (if using AI features)
- [ ] Set up Vercel account (for frontend deployment)
- [ ] Set up Railway/Render account (for backend deployment)

### Step 3: Prepare for Day 1
- [ ] Assign roles to each student
- [ ] Print out **Quick-Reference-Guide.md** (one per student)
- [ ] Review **Calculus-Explainer-Project-Brief.md** so you can answer questions
- [ ] Test the setup instructions yourself (ensure they work)
- [ ] Convert **6-Kickoff-Slide-Deck.md** to PPTX or PowerPoint
  - Option A: Use the **create-presentation.js** script (run locally)
  - Option B: Manually create slides from the markdown outline
  - Option C: Share the markdown directly (readable but less polished)

### Step 4: Send Pre-Project Communications
- [ ] Send **Student-Onboarding-Email.md** to all students (1 week before)
- [ ] Send **Parent-Stakeholder-Summary.md** to parents (optional but recommended)
- [ ] Share **Setup Instructions** with students (they should read before Day 1)
- [ ] Invite students to Slack #dev-help channel

### Step 5: Final Checks
- [ ] Verify all students have GitHub accounts
- [ ] Verify all students have installed: Git, Node.js, Python, VS Code
- [ ] Test internet/network connectivity for demo
- [ ] Have backup internet (hotspot) in case WiFi fails
- [ ] Print materials:
  - [ ] **Quick-Reference-Guide.md** (1 per student)
  - [ ] **2-GitHub-Repo-Structure.md** (optional, for reference)
  - [ ] Team role assignments
  - [ ] First day schedule

---

## 🎯 Day 1 Schedule (Use This)

### **9:00 AM — Kickoff Presentation** (30 min)
- Show **6-Kickoff-Slide-Deck.md** (as PPTX or just present the content)
- Cover: Project vision, tech stack, roles, timeline, success criteria
- Show the mockup/visual of what the final app looks like
- Q&A

### **9:30 AM — Technical Walkthrough** (15 min)
- Architecture overview (frontend ↔ backend ↔ 3D visualization)
- Show the starter code structure
- Explain Git workflow and daily process

### **10:00 AM — Local Dev Setup** (60-90 min)
- Everyone works through **1-Setup-Instructions.md**
- You circulate to help and unblock
- Goal: Everyone has frontend + backend running locally

### **11:45 AM — First Git Commit** (30 min)
- Students make a small change
- Commit and push to GitHub
- Create their first Pull Request
- Get code reviewed by a peer

### **12:30 PM — Lunch**

### **1:30 PM — Role-Specific Kickoff** (30-60 min)
- Meet by role: 3D Graphics, Frontend, Backend, DevOps
- Review starter code for that role
- Assign first set of tasks from **4-Day-by-Day-Task-Breakdown.md**
- Answer role-specific questions

### **2:30 PM — Start Building** (rest of day)
- Begin Task 2.1 (Three.js), Task 2.2 (React UI), Task 2.3 (FastAPI), etc.
- You're available for questions
- Students commit regularly

---

## 📅 Daily Standup Ritual

Every morning at 9:00 AM (after Day 1):

1. Gather the team
2. Each person says (2 min each):
   - ✅ What I finished yesterday
   - 📝 What I'm working on today
   - 🚧 Blockers (if any)
3. You unblock any issues
4. Everyone codes

**Total time:** 10 minutes

---

## 📊 Weekly Check-Ins

### **Friday of Week 1** (End of Day)
- [ ] Ask each student: What did you build?
- [ ] Verify frontend and backend are working locally
- [ ] Check GitHub commit history (is work being logged?)
- [ ] Any unexpected blockers? Address them
- [ ] Celebrate small wins

### **Friday of Week 2** (End of Day — DEMO)
- [ ] App is deployed and live
- [ ] Students present their work (15-20 min demo)
- [ ] Show code on GitHub
- [ ] Highlight what they learned
- [ ] Take group photo/video

---

## 🚨 Troubleshooting Scenarios

### "Nothing runs on my computer"
→ Check **Setup-Instructions.md** section "Troubleshooting"

### "Students aren't committing"
→ Pair them up, have one drive, one navigate. Make first commit together.

### "Feature is too hard"
→ Break it into smaller tasks. Let students pair on it.

### "Student wants to quit"
→ Listen to them. Show them the final product they're building. Remind them it's normal to struggle. Offer pairing/mentorship.

### "We're ahead of schedule"
→ Pick a stretch goal from **4-Day-by-Day-Task-Breakdown.md**

### "We're behind schedule"
→ Focus on core features. Stretch goals are optional.

---

## 📈 Measuring Success

### **Technical Success**
- ✅ App is deployed and live
- ✅ All core features work (derivatives, integrals, AI explanations)
- ✅ Code is on GitHub with clean history
- ✅ Tests pass, no major bugs

### **Learning Success**
- ✅ Students can explain the architecture
- ✅ Students made meaningful commits
- ✅ Students received and acted on code review feedback
- ✅ Students shipped to production

### **Team Success**
- ✅ Attended daily standups
- ✅ Helped each other unblock
- ✅ Made time for learning (followed learning resources)
- ✅ Did code reviews collaboratively

---

## 🎬 Post-Project (Week After)

### **Share the Work**
- [ ] Create a landing page on the web (GitHub Pages or simple HTML)
- [ ] Share GitHub repo publicly (it's educational!)
- [ ] Post screenshot/demo video to school newsletter
- [ ] Celebrate on social media (if appropriate)

### **Student Reflections**
- [ ] Have each student write a post-mortem: "What I learned"
- [ ] Collect these for portfolio use
- [ ] Ask what they'd do differently

### **Feedback for Next Time**
- [ ] Survey students: What was hard? What was easy? What would help?
- [ ] Keep what worked, adjust what didn't
- [ ] Document lessons learned

---

## 📚 Documents Quick Reference

**Showing to:**

| Audience | Documents |
|----------|-----------|
| **Students** | 1, 2, 3, 4, 5, Quick Ref |
| **Parents** | Parent-Stakeholder-Summary |
| **School Leadership** | Project Brief, Parent Summary |
| **GitHub Repo** | GitHub-Repo-README |
| **Project Board** | Project-Tasks.csv |
| **Day 1 Meeting** | Kickoff Slide Deck |

---

## 🔗 Where Everything Is

All files are in: `/Users/su/Documents/Claude/Projects/WorkExperience/`

- `Calculus-Explainer-Project-Brief.md` — The big-picture document
- `1-Setup-Instructions.md` → `5-Learning-Resources.md` — Student onboarding
- `GitHub-Repo-README.md` — Copy to your GitHub repo main README
- `Project-Tasks.csv` — Import to Trello/Linear/GitHub Projects
- `Student-Onboarding-Email.md` — Template to customize and send
- `Parent-Stakeholder-Summary.md` — Send to parents
- `6-Kickoff-Slide-Deck.md` → Convert to PPTX or present directly
- `Quick-Reference-Guide.md` — Print and hand out to students
- `LAUNCH-CHECKLIST.md` — This file!

---

## 🎓 The Learning Journey (What Students Will Experience)

**Day 1:**
- "Wow, this is a real project!"
- Frustration: Getting environment set up
- Success: First commit merged

**Days 2-5 (Week 1):**
- "I have no idea what I'm doing"
- Pain: Learning curves, debugging
- Progress: "Wait, it works!"

**Days 1-2 (Week 2):**
- "I'm actually building features"
- Confidence: "I know what I'm doing now"
- Momentum: Shipping code fast

**Days 3-5 (Week 2):**
- "We're almost done!"
- Pride: "I built this!"
- Celebration: App is live

**Friday:**
- Demo day magic
- "I can't believe I did this"
- They're developers now

---

## 💪 Your Role as Manager

You're not writing the code. You're:
- **Unblocking** — Removing obstacles
- **Mentoring** — Showing them how to think like developers
- **Celebrating** — Recognizing effort and progress
- **Guiding** — Keeping them on the 2-week timeline
- **Supporting** — When they're frustrated or stuck

---

## 🌟 Final Thoughts

This is a real, ambitious, achievable project for bright A-level students. You have everything you need to launch successfully. The materials are comprehensive, the timeline is realistic, and the learning is profound.

Your students will:
- Understand how real software teams work
- Ship production code
- Learn modern development tools
- Build something they can be proud of
- Have a portfolio project for universities/careers

**You're giving them a gift.** 🎁

---

## ✅ Final Checklist Before Launch

**Week Before:**
- [ ] GitHub repo created and ready
- [ ] Slack channel set up
- [ ] Project board populated with tasks
- [ ] Onboarding email sent to students
- [ ] Parent summary sent (optional)
- [ ] Slide deck converted to PPTX or ready to present

**Day Before:**
- [ ] You've tested setup instructions on your own computer
- [ ] Slides are prepared and tested
- [ ] Room/Zoom link is ready
- [ ] Materials printed (Quick Reference Guide)
- [ ] Students confirmed attendance

**Day 1 Morning:**
- [ ] You're 15 minutes early
- [ ] Slides loaded and tested
- [ ] Zoom/room set up and tested
- [ ] Coffee prepared ☕

**Kickoff Time:**
- [ ] 🚀 Let's go!

---

## 🎉 You're Ready

Everything is prepared. You have:
✅ Complete project documentation  
✅ Student onboarding materials  
✅ Day-by-day task breakdown  
✅ Learning resources  
✅ Setup instructions  
✅ Communication templates  

**You're set to launch. Let's build something amazing!**

---

**Questions? Everything is documented. Refer to the specific document for that topic.**

**Need help? Adapt any document to your context, needs, or timeline. These are templates — make them yours.**

**Ready?** Show that kickoff slide deck and say: "For the next two weeks, you're going to build something incredible. Let's go! 🚀"

---

*Last updated: May 21, 2026*  
*Created by: Claude AI Assistant*  
*For: Sheen Upholstery / A-Level Work Experience Team*
