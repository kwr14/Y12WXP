# Flashcard App

**Difficulty:** ⭐⭐ (GCSE)
**Duration:** 2 weeks (10 days)
**Team size:** 3–4 students
**Curriculum links:** Computer Science, any revision subject

---

## What you're building

A revision flashcard app where students create decks of cards on any subject, flip them to reveal answers, and track their performance. The app implements **spaced repetition** — a scientifically proven study technique where cards you get wrong are shown again sooner than cards you got right. Everything runs in the browser using React, with data saved in localStorage.

## Why this project matters

Spaced repetition is used by Anki (30+ million users), Duolingo, and countless medical and law schools because it is genuinely one of the most effective study methods ever researched. You'll be building a real implementation of the same algorithm. This app could actually help your classmates revise — and it's a project you can use yourself.

---

## What you'll ship

- **Deck management**: create, rename, and delete flashcard decks (e.g. "Biology GCSE", "French vocab")
- **Card editor**: add, edit, and delete cards within a deck (front = question, back = answer)
- **Study mode**: cards displayed one at a time; click to flip; rate yourself (Got it / Nearly / Didn't get it)
- **Spaced repetition**: cards rated "Didn't get it" reappear after 1 card; "Nearly" after 5; "Got it" after the deck is complete
- **Progress tracking**: show how many cards in each deck are "learned" vs "still learning"
- **localStorage persistence**: decks and progress survive a page reload

---

## Tech stack

| Layer | Technology | Why |
|-------|-----------|-----|
| UI framework | React 18 (via Vite) | Component-based UI — ideal for something with lots of interactive state |
| Styling | CSS modules or plain CSS | Scoped styles, no extra dependencies |
| State management | React `useState` and `useReducer` | Manage deck data, current card, flip state |
| Storage | localStorage | Simple persistence without a backend |
| Build tool | Vite | Fast dev server; instant hot reload |

---

## Team roles

| Role | Responsibilities |
|------|----------------|
| **React Developer (Components)** | Builds `DeckList`, `CardEditor`, `FlipCard`, `StudyMode` components |
| **State Manager** | Designs the data model, implements spaced repetition logic, manages localStorage |
| **Styling / UX** | CSS for the flip animation, card layout, deck browser, responsive design |
| **Tester / PM** | Tests all user flows, manages issues, writes documentation |

---

## 2-week day-by-day plan

### Week 1: Foundation

**Day 1 — Setup and design**
- Everyone: set up the Vite + React project (`npm create vite@latest flashcard-app -- --template react`)
- All: run it locally (`npm install && npm run dev`) and confirm it opens in the browser
- All: sketch the UI — what screens does the app have? (Deck list → Deck detail → Study mode)
- State Manager: design the data model (what does a deck look like? a card? a progress record?)

**Day 2 — Data model and storage**
- State Manager: implement `deckStore.js` — functions to load/save decks from localStorage
- State Manager: define the data shape:
  ```javascript
  // A deck
  { id: "abc123", name: "Biology", cards: [...] }
  // A card
  { id: "def456", front: "What is osmosis?", back: "...", interval: 1, nextReview: 0 }
  ```
- React Developer: stub out the main app components with placeholder content

**Day 3 — Deck management screen**
- React Developer: build `DeckList` (shows all decks, with card count)
- React Developer: build `NewDeckForm` (input + button to create a deck)
- Styling: style the deck list as a grid of cards

**Day 4 — Card editor screen**
- React Developer: build `DeckDetail` (list of cards in a deck)
- React Developer: build `CardForm` (front/back text areas, save button)
- State Manager: wire up add/delete card functions

**Day 5 — Flip card and study mode (basic)**
- React Developer: build `FlipCard` component with CSS flip animation
- React Developer: build basic `StudyMode` — show one card at a time, flip to reveal
- All: test the complete flow: create deck → add cards → study mode
- PM: demo to mentor; collect feedback

### Week 2: Spaced repetition and polish

**Day 6 — Spaced repetition algorithm**
- State Manager: implement the rating system:
  ```javascript
  function rateCard(card, rating) {
    // rating: 'got_it' | 'nearly' | 'missed'
    // Update card.interval and card.nextReview
  }
  ```
- State Manager: implement `getCardsForReview(deck)` — returns cards due for review in the right order
- React Developer: add the three rating buttons to StudyMode

**Day 7 — Progress tracking**
- React Developer: build `ProgressBar` component — shows learned/remaining for a deck
- React Developer: show "Deck complete!" screen when all cards are reviewed
- State Manager: calculate and display overall stats

**Day 8 — Import/export**
- State Manager: implement export to JSON (download your decks as a file)
- State Manager: implement import from JSON (load a shared deck)
- Styling: final UI polish — transitions, hover effects, mobile layout

**Day 9 — Testing and documentation**
- Tester: test all edge cases (empty deck, single card, duplicate names)
- All: fix priority bugs
- PM: write the README

**Day 10 — Demo**
- All: final polish, practice the demo
- Demo: show creating a deck, adding cards, studying, and the spaced repetition in action

---

## Learning outcomes

**Technical:**
- React components, props, and state (`useState`)
- React event handling and controlled inputs
- Component composition (nested components)
- CSS flip animations using `transform: rotateY(180deg)`
- Data modelling (how to represent complex objects)
- Implementing an algorithm from a specification
- localStorage with JSON serialization/deserialization

**Transferable:**
- Understanding how popular apps work under the hood
- Decomposing a complex feature (spaced repetition) into small functions
- UX thinking: what makes a study tool pleasant to use?

---

## Stretch goals

1. **Keyboard shortcuts**: flip card with spacebar, rate with 1/2/3 keys — much faster to study
2. **Markdown support**: allow bold, italic, and code blocks in card content using a library like `marked`
3. **Image cards**: allow images on the front of a card (uploaded or via URL)
4. **Study statistics**: show a calendar heatmap of study sessions (like GitHub's contribution graph)
5. **Share decks**: generate a shareable URL or QR code that encodes a deck as a URL parameter

---

## Getting started

1. **Create the Vite + React project**:
   ```bash
   npm create vite@latest flashcard-app -- --template react
   cd flashcard-app
   npm install
   npm run dev
   ```
2. **Push to GitHub**: initialise git, create a repository, push the starter code
3. **Plan your components**: before writing any logic, sketch the component tree on paper — which components will exist, what data each one needs

**Useful links:**
- React docs (start here): https://react.dev/learn
- Vite docs: https://vitejs.dev/guide/
- CSS flip card tutorial: https://www.w3schools.com/howto/howto_css_flip_card.asp
- Spaced repetition explained: https://ncase.me/remember/ (interactive article)
