# Calculus Explainer: Kickoff Presentation

**For:** Project launch meeting  
**Duration:** 30-40 minutes  
**Format:** Presentation slides with speaker notes

---

## 📊 Slide Deck Structure

### **Slide 1: Title Slide**

**Visual:** Bold title, project logo/mockup background

```
CALCULUS EXPLAINER
Interactive 3D Math Visualization for A-Level Students

Week-Long Software Team Experience
May 2026
```

**Speaker Notes:**
"Good morning everyone! Welcome to the Calculus Explainer project. Over the next two weeks, we're going to build something really cool — an AI-powered web app that helps students understand calculus through 3D visualization. By the end, you'll have shipped a full-stack application to production, and you'll have learned modern development practices. Let's get started!"

---

### **Slide 2: The Problem**

**Visual:** Split screen — left: confused student, right: light bulb moment

```
THE PROBLEM

"Calculus is abstract. Students struggle to visualize:
• What does a derivative really mean?
• How do integrals relate to area?
• Why do these concepts matter?

Result: Many students give up or memorize without understanding."
```

**Speaker Notes:**
"Calculus is hard. Many A-level students find it abstract and confusing. Teachers can explain it, but without seeing it visually, it's hard to internalize. We're building a tool to solve this — a visual, interactive way to learn."

---

### **Slide 3: The Solution**

**Visual:** Screenshot of 3D graph, smooth transitions, colorful

```
THE SOLUTION: CALCULUS EXPLAINER

An interactive 3D web app where students can:
✓ Visualize functions in 3D
✓ See derivatives as tangent lines
✓ Understand integrals as area under curves
✓ Get AI-powered explanations of concepts
✓ Learn by doing, not just watching
```

**Speaker Notes:**
"Here's what we're building. An interactive app with beautiful 3D visualizations. You enter a function, and the app shows you the curve in 3D. You can then explore its derivative — watch the tangent line move along the curve. For integrals, you'll see the area under the curve light up. And Claude AI will explain what's happening in natural language. It's learning by seeing and doing."

---

### **Slide 4: Tech Stack**

**Visual:** Icons/logos for each technology

```
TECH STACK

Frontend (JavaScript)          Backend (Python)
├─ React                      ├─ FastAPI
├─ Three.js (3D graphics)    ├─ NumPy (math)
└─ Vite (fast build)         ├─ SymPy (symbolic math)
                             └─ Claude API (AI)

Deployment
├─ Vercel (frontend)
└─ Railway (backend)

Tools
├─ Git & GitHub
└─ GitHub Actions (CI/CD)
```

**Speaker Notes:**
"We're using modern, industry-standard tools. React for the user interface, Three.js for stunning 3D graphics, FastAPI for a lightweight backend, and Claude AI for intelligent explanations. We'll deploy using Vercel for the frontend and Railway for the backend — both of which auto-deploy when you push code. And we'll use Git and GitHub for version control and collaboration."

---

### **Slide 5: Team Roles**

**Visual:** 4 circles with icons for each role

```
TEAM STRUCTURE

👨‍🎨 3D Graphics Lead
└─ Build 3D visualizations with Three.js
└─ Create smooth animations
└─ Handle user interactivity (zoom, rotate)

⚛️ Frontend Developer (1-2)
└─ Build React components
└─ Create UI forms and controls
└─ Connect frontend to backend

🐍 Backend Developer
└─ Build FastAPI endpoints
└─ Implement math calculations (derivatives, integrals)
└─ Integrate Claude AI

🚀 DevOps Lead
└─ Set up Git workflow
└─ Configure CI/CD pipeline
└─ Deploy to production
```

**Speaker Notes:**
"We've organized into four roles. If you're the 3D Graphics lead, you'll become a Three.js expert. If you're frontend, you'll learn React deeply. Backend means Python and math libraries. And DevOps means you'll ship our code to production. Everyone will learn all these technologies, but you'll specialize in your role. And we'll rotate or pair up as needed."

---

### **Slide 6: Project Timeline**

**Visual:** Gantt chart or timeline visualization

```
WEEK 1: FOUNDATION
├─ Day 1-2: Setup & learning
├─ Day 3-4: Build core components
└─ Day 5: Full-stack integration

WEEK 2: FEATURES & SHIP
├─ Day 1-2: Build derivatives feature
├─ Day 3-4: Build integrals feature
├─ Day 5: Polish, deploy, demo

End Result: Live, production app 🎉
```

**Speaker Notes:**
"Here's the timeline. Week 1 is all about foundation — setting up your development environment, learning the tools, and getting the basic architecture working. By Friday of week 1, the frontend should talk to the backend. Week 2 is feature work. You'll add the derivatives visualization, then integrals, then polish it up. By day 5, it's deployed and live. We'll do a final demo on Friday afternoon."

---

### **Slide 7: Learning Outcomes**

**Visual:** Icons/badges for each skill

```
WHAT YOU'LL LEARN

Technical Skills:
✓ Full-stack web development (frontend + backend)
✓ 3D graphics with Three.js
✓ AI integration (Claude API)
✓ Math libraries (NumPy, SymPy)
✓ DevOps & deployment (CI/CD, hosting)

Developer Skills:
✓ Git workflow & code review
✓ Agile methodology (standups, sprints)
✓ Building for real users
✓ Shipping code to production
✓ Problem-solving & debugging
```

**Speaker Notes:**
"By the end of this project, you'll have real, production-level skills. You'll understand how modern web apps are built. You'll have shipped code. You'll know how to use Git professionally. And you'll have a project you can show to universities or potential employers. This is exactly how work happens in real software teams."

---

### **Slide 8: The Development Process**

**Visual:** Circular diagram: Idea → Code → Review → Test → Deploy → Learn

```
OUR DEVELOPMENT PROCESS

1️⃣ PLAN
   ├─ Break work into small tasks
   ├─ Assign to team members
   └─ Estimate time needed

2️⃣ CODE
   ├─ Create a feature branch
   ├─ Write code
   └─ Commit frequently

3️⃣ REVIEW
   ├─ Push code to GitHub
   ├─ Create a Pull Request
   └─ Get feedback from teammates

4️⃣ TEST
   ├─ Run automated tests
   ├─ Manual testing
   └─ Fix bugs

5️⃣ DEPLOY
   ├─ Merge to main branch
   ├─ GitHub Actions auto-tests
   └─ Auto-deploy to production

6️⃣ ITERATE
   └─ Repeat for next feature
```

**Speaker Notes:**
"This is how professional software teams work. It's not just 'write code and ship it.' There's planning, code review, testing, and careful deployment. Each pull request is reviewed by at least one other person. This catches bugs early and helps everyone learn. It might feel like overhead at first, but it's how we build reliable, maintainable software."

---

### **Slide 9: Daily Standup**

**Visual:** 3 columns: Yesterday | Today | Blockers

```
DAILY STANDUP (10 MINUTES)

What we do at 9:00 AM every day:

YESTERDAY: What did you complete?
"I finished Task 2.1: Three.js basic scene"

TODAY: What will you work on?
"I'm starting Task 3.1: Frontend integration"

BLOCKERS: What's preventing progress?
"Waiting for the backend API to be ready"
(Or: "None — I'm unblocked and ready to go!")

👉 This keeps us in sync and helps each other.
```

**Speaker Notes:**
"Every morning, we'll spend 10 minutes doing a standup. Each person shares three things: what they finished yesterday, what they're working on today, and any blockers. It keeps everyone in sync. If someone is blocked, the team can help unblock them immediately. It's not about status reports — it's about helping each other move forward."

---

### **Slide 10: Getting Help**

**Visual:** Decision tree flowchart

```
YOU'RE STUCK. WHAT DO YOU DO?

Try this sequence:
1. Google it 🔍
   └─ Most problems have solutions online

2. Check the docs 📖
   └─ Official docs almost always have your answer

3. Ask a teammate 💬
   └─ #dev-help channel or ask next to them

4. Ask your manager 👥
   └─ If no one else knows

⏱️ Time limit: Don't spend more than 15 min alone.
   Asking for help is not weakness — it's smart.
```

**Speaker Notes:**
"Don't get stuck alone for hours. If you're struggling, try Googling, then check the docs, then ask the team. If you're stuck for more than 15 minutes, ask for help. That's the smart way to work. Asking questions is how junior developers learn fastest."

---

### **Slide 11: Success Criteria**

**Visual:** Checklist or trophy

```
WHAT DOES SUCCESS LOOK LIKE?

By Friday, Week 2:

✅ App is deployed and live on the internet
✅ Users can input a function and see 3D graph
✅ Derivatives visualization works smoothly
✅ Integrals visualization works smoothly
✅ Claude AI gives helpful explanations
✅ Code is on GitHub with clean history
✅ Team can walk through the architecture
✅ No major bugs or crashes

🎉 Result: Shipped product that actually helps students learn math
```

**Speaker Notes:**
"Here's what we're aiming for. By next Friday, this app should be live. A student can go to a URL, enter a function, and see it visualized in 3D. They can explore the derivative and integral, and Claude will explain what's happening. The code is version-controlled, documented, and deployed. That's success."

---

### **Slide 12: Stretch Goals**

**Visual:** Stars or rocket icon

```
STRETCH GOALS (If We're Ahead)

If we finish the core features early:
⭐ Limits explorer (visual limit approach)
⭐ Custom function input validation
⭐ Save/share visualization links
⭐ Dark mode toggle
⭐ Mobile-responsive design
⭐ Performance optimization
⭐ Additional math features
⭐ Comprehensive testing
⭐ Linear Algebra phase (v2)

💡 Pick what excites you when we get there!
```

**Speaker Notes:**
"If we're moving fast and finish the core features, there are lots of cool things we can add. We can build a limits explorer, optimize performance, add mobile support, even start on linear algebra. You'll help decide what to work on next based on what's interesting."

---

### **Slide 13: Resources & Support**

**Visual:** Links and contact info

```
YOU'RE NOT ALONE

Documentation (in the repo):
├─ Setup Instructions
├─ GitHub Repo Structure
├─ Starter Code Template
├─ Day-by-Day Task Breakdown
├─ Learning Resources (tutorials & links)
└─ API Documentation

Get Help:
├─ #dev-help Slack channel
├─ Ask me or your lead
└─ Google + Stack Overflow

Tools You'll Use:
├─ VS Code (editor)
├─ GitHub (version control)
├─ Postman (API testing)
└─ Chrome DevTools (debugging)
```

**Speaker Notes:**
"You have everything you need to succeed. There's comprehensive documentation in the repo. There's a Slack channel for questions. And there are thousands of examples online. You're not learning in isolation — you're part of a team, and you're learning the same tools that professionals use every day."

---

### **Slide 14: Questions?**

**Visual:** Large question mark, inviting

```
QUESTIONS?

Let's talk about:
├─ Roles & responsibilities
├─ Tools & setup
├─ Timeline or expectations
├─ Learning resources
└─ Anything else!

💬 Questions are good. They show you're thinking.
```

**Speaker Notes:**
"This is your chance to ask anything. Don't worry about 'dumb' questions — there are no dumb questions. If something isn't clear, ask now. Better to clarify before we start than to discover confusion mid-project."

---

### **Slide 15: Next Steps**

**Visual:** Roadmap or checklist

```
NEXT STEPS

By End of Today:
1. ✓ Understand the project vision
2. ✓ Know your role
3. ✓ Get set up locally (follow Setup Instructions)
4. ✓ Make your first commit (verify Git works)
5. ✓ Join #dev-help Slack channel

Tomorrow Morning:
├─ 9:00 AM: First daily standup
├─ 9:15 AM: Project walkthrough
└─ 10:00 AM: Start coding!

This afternoon:
└─ Ask for help if you get stuck
```

**Speaker Notes:**
"Let's wrap up. Today is setup day. By end of day, you should have the app running locally and have made your first commit. We'll do our first standup tomorrow morning at 9 AM. From then on, we're building. You have everything you need. Let's ship something great!"

---

### **Slide 16: Closing Slide**

**Visual:** Team photo or inspirational image with code/3D graphics

```
LET'S BUILD SOMETHING AWESOME 🚀

Calculus Explainer
2-Week Full-Stack Project

Questions? Slack #dev-help
Let's make this the best project ever!

"The best time to plant a tree was 20 years ago.
The second best time is now." — Chinese Proverb
```

**Speaker Notes:**
"This is going to be a great two weeks. You're going to learn a ton, ship real code, and have something impressive to show off. Let's make it happen. See you tomorrow at 9 AM standup. In the meantime, get your environment set up. Have fun! 🚀"

---

## 🎨 Design Tips for Slides

- **Color Scheme:** Dark background (dark blue #1e3a8a) with bright accents (cyan #06b6d4, pink #ec4899)
- **Typography:** Large, readable fonts (sans-serif like Inter or Roboto)
- **Code Snippets:** Use monospace font (Monaco or Fira Code), syntax highlighting
- **Icons:** Use simple, consistent icons (Heroicons or Feather Icons recommended)
- **Animations:** Minimal animations (fade in, slide in) — don't overdo it
- **Whitespace:** Plenty of breathing room, not crowded

---

## 📝 How to Present

**Before the Presentation:**
- [ ] Practice at least once
- [ ] Know your role/topic well
- [ ] Test all links and demos
- [ ] Have backup plan if tech fails (screenshot of app)

**During the Presentation:**
- [ ] Make eye contact with the room
- [ ] Speak clearly and at a good pace
- [ ] Pause for questions
- [ ] If someone asks something you don't know, "Great question — let me look that up and get back to you"
- [ ] Show the app early if possible (visual engagement)

**After the Presentation:**
- [ ] Hang around for informal questions
- [ ] Take feedback on what was unclear

---

## 🎯 Presentation Checklist

- [ ] Slide 1: Title + project vision
- [ ] Slide 2-3: Problem & solution
- [ ] Slide 4: Tech stack
- [ ] Slide 5: Team roles
- [ ] Slide 6: Timeline
- [ ] Slide 7: Learning outcomes
- [ ] Slide 8: Development process (Git, review, deploy)
- [ ] Slide 9: Daily standup
- [ ] Slide 10: Getting help
- [ ] Slide 11: Success criteria
- [ ] Slide 12: Stretch goals
- [ ] Slide 13: Resources
- [ ] Slide 14: Q&A
- [ ] Slide 15: Next steps
- [ ] Slide 16: Closing + inspiration

---

## 💡 Live Demo Script (Optional)

If you want to show the app during the presentation:

```
"Let me show you what the finished app will look like...
 (navigate to deployed app)
 
 Here's the home page. Enter a function...
 (type x**2)
 
 The app renders the curve in 3D. You can rotate, zoom...
 (interact with the 3D scene)
 
 Now watch the derivative tangent line...
 (move the slider)
 
 And Claude AI explains what's happening:
 'The derivative of x² is 2x, which means the rate of change...'
 
 That's what we're building over the next two weeks!"
```

**Note:** If live demo fails, have a screenshot or video backup.

---

**Ready to inspire your team! 🚀**
