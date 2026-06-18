# Mood Journal

**Difficulty:** ⭐⭐ (GCSE)
**Duration:** 2 weeks (10 days)
**Team size:** 3–4 students
**Curriculum links:** Computer Science, PSHE, Psychology

---

## What you're building

A daily mood tracking web app that lets users log how they're feeling (on a scale of 1–5, with an emoji), add a short note about their day, and view their mood history as an interactive chart. Everything runs in the browser — no server required. The app saves data using `localStorage`, which means it persists between page reloads without needing a database.

## Why this project matters

Mental health awareness apps are one of the fastest-growing categories in consumer software. Apps like Daylio and Reflectly have millions of users. Mood tracking is also used in clinical psychology research and by GPs to monitor patients with depression and anxiety. Your app is a simplified but real version of something people genuinely use and value.

---

## What you'll ship

The MVP (Minimum Viable Product) includes:

- A **mood entry form**: a slider or 5-button selector for mood (1–5), an emoji picker, a text field for a daily note, and a "Save" button
- A **mood history list**: a scrollable list of past entries showing date, mood score, emoji, and note
- A **mood chart**: a line chart (using Chart.js) showing mood over time, with dates on the x-axis
- **Persistent storage**: entries saved to `localStorage` so they survive a page refresh
- **Delete entry**: the ability to remove a past entry
- A clean, pleasant UI with at least two colour themes

---

## Tech stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Structure | HTML5 | The skeleton of every webpage |
| Styling | CSS3 | Layout, colours, animations |
| Logic | Vanilla JavaScript (ES6+) | DOM manipulation, events, data storage |
| Charts | Chart.js (v4) | Free, easy-to-use chart library — one `<script>` tag |
| Storage | localStorage API | Browser-native key-value storage, no server needed |

No frameworks, no build tools, no command line needed to get started. Open the HTML file in a browser and you're running.

---

## Team roles

| Role | Responsibilities |
|------|----------------|
| **UI Designer / HTML+CSS** | Page layout, form design, colour scheme, responsive styling, emoji picker |
| **JS Developer** | Mood entry logic, saving/loading from localStorage, delete functionality |
| **Data Visualisation** | Chart.js integration, chart configuration, date formatting |
| **Tester / PM** | Writing test cases, finding bugs, keeping the task board up to date, README |

---

## 2-week day-by-day plan

### Week 1: Build the core

**Day 1 — Setup and planning**
- Everyone: read this brief, set up VS Code and Git, clone the repository
- PM: create the task board (GitHub Issues or a simple list)
- All: sketch the UI on paper — what does the app look like?
- All: agree on the colour scheme and overall aesthetic

**Day 2 — HTML structure**
- HTML+CSS: build the page structure (`index.html`): header, entry form, history section
- JS Developer: study the localStorage API (`MDN localStorage guide`)
- Data Viz: explore Chart.js documentation and examples

**Day 3 — Core JavaScript**
- JS Developer: implement `saveMoodEntry(mood, emoji, note)` — saves to localStorage
- JS Developer: implement `loadMoodEntries()` — reads from localStorage and returns array
- HTML+CSS: style the form, mood selector buttons, and overall layout

**Day 4 — Display entries + chart**
- JS Developer: implement `renderEntryList()` — creates HTML elements for each entry
- Data Viz: integrate Chart.js and render a basic line chart
- HTML+CSS: style the entry list cards and chart container

**Day 5 — Integration and first working version**
- All: get everything connected and working together
- Test: can you add an entry, see it in the list, see it in the chart, and reload the page without losing data?
- PM: demo to mentor; collect feedback; update task list for week 2

### Week 2: Polish and expand

**Day 6 — Delete and edit**
- JS Developer: add delete functionality (button on each entry)
- JS Developer: add edit functionality (click entry to edit note/mood)
- HTML+CSS: style the delete/edit buttons

**Day 7 — Chart improvements**
- Data Viz: add mood emoji labels on the chart
- Data Viz: add a date range filter (show last 7 days / 30 days / all time)
- Data Viz: show average mood score in a summary card

**Day 8 — UX polish**
- HTML+CSS: add smooth transitions and animations
- HTML+CSS: implement a second colour theme (light/dark toggle)
- All: fix any bugs from the feedback on Day 5

**Day 9 — Testing and documentation**
- Tester: systematically test every feature; log bugs as GitHub issues
- All: fix the most important bugs
- PM: write the README (what the project is, how to open it, who built it)

**Day 10 — Demo**
- All: final polish
- All: prepare 5-minute presentation
- All: demo to the group

---

## Learning outcomes

**Technical:**
- HTML document structure and semantic elements
- CSS layout (flexbox), variables, and responsive design
- JavaScript: DOM manipulation, event listeners, functions, arrays, objects
- localStorage: reading, writing, and parsing JSON data
- Chart.js: creating and configuring a line chart
- Git: branching, committing, and pull requests

**Transferable:**
- Breaking a project into tasks and estimating time
- Working in a team with a shared codebase
- Testing your own work systematically
- Communicating technical decisions to non-technical stakeholders

---

## Stretch goals

1. **Export to CSV**: add a button that downloads mood history as a CSV file (useful for self-reflection or sharing with a counsellor)
2. **Streak counter**: show how many consecutive days the user has logged an entry
3. **Mood statistics**: weekly/monthly average, best day of the week, longest streak
4. **Reminder notification**: use the browser's Notification API to remind the user to log their mood at a set time
5. **Multiple users**: store data per username (still in localStorage) so different people can use the same device

---

## Getting started

1. **Create the repository**: one person creates a new GitHub repository called `mood-journal`, adds the rest of the team as collaborators, and everyone clones it
2. **Create the file structure**:
   ```
   mood-journal/
   ├── index.html
   ├── style.css
   ├── script.js
   └── README.md
   ```
3. **Stub out the HTML**: put the basic page structure in `index.html` with placeholder sections for the form, history, and chart — then run it in a browser to confirm it loads

**Useful links:**
- Chart.js docs: https://www.chartjs.org/docs/latest/
- localStorage MDN guide: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- CSS Flexbox guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Emoji list reference: https://unicode.org/emoji/charts/emoji-list.html
