// Calculus Explainer: Kickoff Presentation
// Created with PptxGenJS

const PptxGenJS = require("pptxgenjs");

const pres = new PptxGenJS();

// Set default properties
pres.defineLayout({ name: "LAYOUT1", width: 10, height: 7.5 });
pres.defineLayout({ name: "LAYOUT2", width: 10, height: 7.5 });

// Color palette
const colors = {
  darkBlue: "1e3a8a",
  cyan: "06b6d4",
  pink: "ec4899",
  white: "ffffff",
  lightGray: "f3f4f6",
  darkGray: "374151",
  textDark: "1f2937",
};

// Helper function for title slides
function addTitleSlide(pres, title, subtitle, notes) {
  let slide = pres.addSlide();
  slide.background = { color: colors.darkBlue };

  slide.addText(title, {
    x: 0.5,
    y: 2.5,
    w: 9,
    h: 1.5,
    fontSize: 54,
    bold: true,
    color: colors.white,
    align: "center",
    fontFace: "Inter",
  });

  slide.addText(subtitle, {
    x: 0.5,
    y: 4.2,
    w: 9,
    h: 1.5,
    fontSize: 28,
    color: colors.cyan,
    align: "center",
    fontFace: "Inter",
  });

  if (notes) {
    slide.addNotes(notes);
  }
}

// Helper function for content slides
function addContentSlide(pres, title, content, notes) {
  let slide = pres.addSlide();
  slide.background = { color: colors.white };

  // Title bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.8,
    fill: { color: colors.darkBlue },
    line: { type: "none" },
  });

  slide.addText(title, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.5,
    fontSize: 36,
    bold: true,
    color: colors.white,
    fontFace: "Inter",
  });

  // Content
  slide.addText(content, {
    x: 0.8,
    y: 1.2,
    w: 8.4,
    h: 5.5,
    fontSize: 18,
    color: colors.textDark,
    align: "left",
    fontFace: "Inter",
  });

  // Accent line
  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 7.3,
    w: 0.3,
    h: 0.2,
    fill: { color: colors.cyan },
    line: { type: "none" },
  });

  if (notes) {
    slide.addNotes(notes);
  }
}

// SLIDE 1: Title Slide
addTitleSlide(
  pres,
  "CALCULUS EXPLAINER",
  "Interactive 3D Math Visualization for A-Level Students",
  "Good morning everyone! Welcome to the Calculus Explainer project. Over the next two weeks, we're going to build something really cool — an AI-powered web app that helps students understand calculus through 3D visualization. By the end, you'll have shipped a full-stack application to production, and you'll have learned modern development practices. Let's get started!"
);

// SLIDE 2: The Problem
addContentSlide(
  pres,
  "THE PROBLEM",
  "📚 Calculus is abstract and hard to visualize:\n\n• What does a derivative really mean?\n• How do integrals relate to area?\n• Why do these concepts matter?\n\n❌ Result: Many students give up or memorize without understanding.",
  "Calculus is hard. Many A-level students find it abstract and confusing. Teachers can explain it, but without seeing it visually, it's hard to internalize. We're building a tool to solve this — a visual, interactive way to learn."
);

// SLIDE 3: The Solution
addContentSlide(
  pres,
  "THE SOLUTION: CALCULUS EXPLAINER",
  "An interactive 3D web app where students can:\n\n✓ Visualize functions in 3D\n✓ See derivatives as tangent lines\n✓ Understand integrals as area under curves\n✓ Get AI-powered explanations of concepts\n✓ Learn by doing, not just watching",
  "Here's what we're building. An interactive app with beautiful 3D visualizations. You enter a function, and the app shows you the curve in 3D. You can then explore its derivative — watch the tangent line move along the curve. For integrals, you'll see the area under the curve light up. And Claude AI will explain what's happening in natural language."
);

// SLIDE 4: Tech Stack
addContentSlide(
  pres,
  "TECH STACK",
  "Frontend (JavaScript)        Backend (Python)\n├─ React                      ├─ FastAPI\n├─ Three.js (3D graphics)    ├─ NumPy (math)\n└─ Vite (fast build)         ├─ SymPy (symbolic math)\n                             └─ Claude API (AI)\n\nDeployment              Tools\n├─ Vercel (frontend)    ├─ Git & GitHub\n└─ Railway (backend)    └─ GitHub Actions (CI/CD)",
  "We're using modern, industry-standard tools. React for the user interface, Three.js for stunning 3D graphics, FastAPI for a lightweight backend, and Claude AI for intelligent explanations. We'll deploy using Vercel for the frontend and Railway for the backend — both of which auto-deploy when you push code."
);

// SLIDE 5: Team Roles
addContentSlide(
  pres,
  "TEAM STRUCTURE",
  "👨‍🎨 3D Graphics Lead\n   └─ Build 3D visualizations with Three.js\n\n⚛️ Frontend Developer (1-2)\n   └─ Build React components & UI\n\n🐍 Backend Developer\n   └─ Build FastAPI endpoints & math logic\n\n🚀 DevOps Lead\n   └─ Set up Git workflow & deployment",
  "We've organized into four roles. If you're the 3D Graphics lead, you'll become a Three.js expert. If you're frontend, you'll learn React deeply. Backend means Python and math libraries. And DevOps means you'll ship our code to production. Everyone will learn all these technologies, but you'll specialize in your role."
);

// SLIDE 6: Timeline
addContentSlide(
  pres,
  "PROJECT TIMELINE",
  "WEEK 1: FOUNDATION\n├─ Day 1-2: Setup & learning\n├─ Day 3-4: Build core components\n└─ Day 5: Full-stack integration\n\nWEEK 2: FEATURES & SHIP\n├─ Day 1-2: Build derivatives feature\n├─ Day 3-4: Build integrals feature\n└─ Day 5: Polish, deploy, demo\n\n🎉 End Result: Live, production app",
  "Here's the timeline. Week 1 is all about foundation — setting up your development environment, learning the tools, and getting the basic architecture working. By Friday of week 1, the frontend should talk to the backend. Week 2 is feature work. You'll add the derivatives visualization, then integrals, then polish it up."
);

// SLIDE 7: Learning Outcomes
addContentSlide(
  pres,
  "WHAT YOU'LL LEARN",
  "Technical Skills:\n✓ Full-stack web development\n✓ 3D graphics with Three.js\n✓ AI integration (Claude API)\n✓ DevOps & deployment (CI/CD)\n\nDeveloper Skills:\n✓ Git workflow & code review\n✓ Agile methodology\n✓ Building for real users\n✓ Shipping code to production",
  "By the end of this project, you'll have real, production-level skills. You'll understand how modern web apps are built. You'll have shipped code. You'll know how to use Git professionally. And you'll have a project you can show to universities or potential employers."
);

// SLIDE 8: Development Process
addContentSlide(
  pres,
  "OUR DEVELOPMENT PROCESS",
  "1️⃣ PLAN → Break work into tasks\n2️⃣ CODE → Create feature branch & commit\n3️⃣ REVIEW → Create PR & get feedback\n4️⃣ TEST → Run tests & fix bugs\n5️⃣ DEPLOY → Merge, CI auto-tests, deploy\n6️⃣ ITERATE → Repeat for next feature\n\n👉 This is how professional teams work!",
  "This is how professional software teams work. Each pull request is reviewed by at least one other person. This catches bugs early and helps everyone learn. It might feel like overhead at first, but it's how we build reliable, maintainable software."
);

// SLIDE 9: Daily Standup
addContentSlide(
  pres,
  "DAILY STANDUP (10 MINUTES)",
  "Every day at 9:00 AM:\n\n📝 YESTERDAY: What did you complete?\n📝 TODAY: What will you work on?\n📝 BLOCKERS: What's preventing progress?\n\n💡 This keeps us in sync and helps each other.\n⏱️ Tip: Don't spend more than 15 min stuck alone.",
  "Every morning, we'll spend 10 minutes doing a standup. Each person shares three things: what they finished yesterday, what they're working on today, and any blockers. It keeps everyone in sync. If someone is blocked, the team can help unblock them immediately."
);

// SLIDE 10: Getting Help
addContentSlide(
  pres,
  "YOU'RE STUCK? HERE'S WHAT TO DO",
  "1. Google it 🔍\n   └─ Most problems have solutions online\n\n2. Check the docs 📖\n   └─ Official docs almost always have your answer\n\n3. Ask a teammate 💬\n   └─ #dev-help channel or ask next to them\n\n⏱️ Time limit: Don't spend more than 15 min alone.",
  "Don't get stuck alone for hours. If you're struggling, try Googling, then check the docs, then ask the team. Asking questions is how junior developers learn fastest."
);

// SLIDE 11: Success Criteria
addContentSlide(
  pres,
  "WHAT DOES SUCCESS LOOK LIKE?",
  "By Friday, Week 2:\n\n✅ App is deployed and live\n✅ Users can input functions & see 3D graph\n✅ Derivatives visualization works smoothly\n✅ Integrals visualization works smoothly\n✅ Claude AI gives helpful explanations\n✅ Code is on GitHub with clean history\n✅ Team can walk through the architecture\n\n🎉 Result: Shipped product that helps students",
  "Here's what we're aiming for. By next Friday, this app should be live. A student can go to a URL, enter a function, and see it visualized in 3D. They can explore the derivative and integral, and Claude will explain what's happening."
);

// SLIDE 12: Stretch Goals
addContentSlide(
  pres,
  "STRETCH GOALS (If Ahead)",
  "If we finish early:\n\n⭐ Limits explorer\n⭐ Save/share visualization links\n⭐ Dark mode toggle\n⭐ Mobile-responsive design\n⭐ Performance optimization\n⭐ Additional math features\n⭐ Comprehensive testing\n⭐ Linear Algebra phase (v2)",
  "If we're moving fast and finish the core features, there are lots of cool things we can add. You'll help decide what to work on next based on what's interesting."
);

// SLIDE 13: Resources & Support
addContentSlide(
  pres,
  "YOU'RE NOT ALONE",
  "Documentation in repo:\n├─ Setup Instructions\n├─ GitHub Repo Structure\n├─ Starter Code Template\n├─ Day-by-Day Task Breakdown\n├─ Learning Resources\n└─ API Documentation\n\nGet Help:\n├─ #dev-help Slack channel\n├─ Ask your team lead\n└─ Google + Stack Overflow",
  "You have everything you need to succeed. There's comprehensive documentation in the repo. There's a Slack channel for questions. And there are thousands of examples online. You're not learning in isolation — you're part of a team, and you're learning the same tools that professionals use every day."
);

// SLIDE 14: Questions?
let slide = pres.addSlide();
slide.background = { color: colors.lightGray };
slide.addText("QUESTIONS?", {
  x: 0.5,
  y: 2,
  w: 9,
  h: 1,
  fontSize: 48,
  bold: true,
  color: colors.darkBlue,
  align: "center",
  fontFace: "Inter",
});
slide.addText(
  "Let's talk about roles, tools, timeline, learning resources, or anything else!",
  {
    x: 1,
    y: 3.5,
    w: 8,
    h: 1.5,
    fontSize: 22,
    color: colors.textDark,
    align: "center",
    fontFace: "Inter",
  }
);
slide.addNotes(
  "This is your chance to ask anything. Don't worry about 'dumb' questions — there are no dumb questions. If something isn't clear, ask now. Better to clarify before we start than to discover confusion mid-project."
);

// SLIDE 15: Next Steps
addContentSlide(
  pres,
  "NEXT STEPS",
  "By End of Today:\n✓ Understand project vision\n✓ Know your role\n✓ Get set up locally\n✓ Make your first commit\n\nTomorrow Morning:\n├─ 9:00 AM: First daily standup\n├─ 9:15 AM: Project walkthrough\n└─ 10:00 AM: Start coding!\n\nThis afternoon:\n└─ Ask for help if you get stuck",
  "Let's wrap up. Today is setup day. By end of day, you should have the app running locally and have made your first commit. We'll do our first standup tomorrow morning at 9 AM. From then on, we're building."
);

// SLIDE 16: Closing
slide = pres.addSlide();
slide.background = { color: colors.darkBlue };
slide.addText("LET'S BUILD SOMETHING AWESOME", {
  x: 0.5,
  y: 2,
  w: 9,
  h: 1,
  fontSize: 52,
  bold: true,
  color: colors.cyan,
  align: "center",
  fontFace: "Inter",
});
slide.addText("🚀", {
  x: 4,
  y: 3.2,
  w: 2,
  h: 0.8,
  fontSize: 60,
  align: "center",
});
slide.addText("Calculus Explainer\n2-Week Full-Stack Project", {
  x: 0.5,
  y: 4.2,
  w: 9,
  h: 1,
  fontSize: 28,
  color: colors.white,
  align: "center",
  fontFace: "Inter",
});
slide.addText("Questions? Slack #dev-help\nLet's make this the best project ever!", {
  x: 0.5,
  y: 5.5,
  w: 9,
  h: 1,
  fontSize: 18,
  color: colors.pink,
  align: "center",
  fontFace: "Inter",
});
slide.addNotes(
  "This is going to be a great two weeks. You're going to learn a ton, ship real code, and have something impressive to show off. Let's make it happen. See you tomorrow at 9 AM standup. In the meantime, get your environment set up. Have fun! 🚀"
);

// Save the presentation
pres.save({
  outputType: "file",
  filename: "/Users/su/Documents/Claude/Projects/WorkExperience/Calculus-Explainer-Kickoff.pptx",
});

console.log("✅ Presentation created successfully!");
