# Finance Tracker

**Difficulty:** ⭐⭐⭐ (GCSE/A-Level transition)
**Duration:** 2 weeks (10 days)
**Team size:** 3–4 students
**Curriculum links:** Maths, Economics, Computer Science

---

## What you're building

A personal income and expense tracker. Users add transactions (amount, category, date, description), view their spending broken down by category, see monthly summaries in charts, set budget limits per category, and get warned when they're approaching their limit. All data lives in localStorage, with an optional Node.js + SQLite backend as a stretch goal.

## Why this project matters

Personal finance apps — Monzo, YNAB, Emma, Copilot — are some of the most-used apps in the UK. Understanding where your money goes is one of the most practical life skills there is, and almost nobody is taught it formally. Building this app requires you to model real financial data, implement real calculations, and make design decisions about what information is most useful to the user. Those decisions are exactly what product managers and engineers at fintech companies make every day.

---

## What you'll ship

- **Transaction list**: add, edit, and delete transactions with amount, category, date, and description
- **Category system**: predefined categories (Food, Transport, Entertainment, Utilities, Income, Other) with custom category support
- **Dashboard**: monthly balance (income minus expenses), current month's spending by category
- **Charts**: a pie chart of spending by category and a bar chart of monthly spending over the past 6 months (Recharts)
- **Budget limits**: set a monthly limit per category; progress bar shows how much of the budget is used; warning at 80%
- **CSV export**: download all transactions as a spreadsheet
- **Filter and search**: filter transactions by date range, category, or keyword

---

## Tech stack

| Layer | Technology | Why |
|-------|-----------|-----|
| UI framework | React 18 (Vite) | Managing complex form and filter state |
| Charts | Recharts | PieChart for category breakdown, BarChart for monthly trends |
| Storage | localStorage (primary) | Simple, works without a backend |
| Optional backend | Node.js + Express + better-sqlite3 | Persistent storage that survives clearing the browser |
| Styling | CSS or Tailwind CSS | Tailwind is worth learning if anyone wants to try it |

---

## Team roles

| Role | Responsibilities |
|------|----------------|
| **Transaction Developer** | Add/edit/delete form, transaction list, filter/search functionality |
| **Data / Calculations** | Budget calculations, monthly summaries, CSV export, localStorage |
| **Data Visualisation** | Recharts pie and bar charts, budget progress bars, dashboard |
| **Tester / PM** | Edge case testing, category management, documentation |

---

## 2-week day-by-day plan

### Week 1: Core transactions

**Day 1 — Setup and data model**
- Everyone: create Vite + React project, push to GitHub
- Data: design the data model:
  ```javascript
  // A transaction
  {
    id: "abc123",
    type: "expense",  // or "income"
    amount: 45.50,
    category: "Food",
    date: "2025-06-15",
    description: "Tesco weekly shop"
  }
  ```
- All: sketch the app layout — what screens/sections does it have?

**Day 2 — Transaction CRUD**
- Transaction Developer: build `AddTransactionForm` (amount, category dropdown, date, description)
- Data: implement `saveTransaction`, `loadTransactions`, `deleteTransaction` using localStorage
- Transaction Developer: build `TransactionList` — table of all transactions

**Day 3 — Filtering and search**
- Transaction Developer: add filter controls: by month, by category, by type (income/expense)
- Transaction Developer: add a search input (filter by description text)
- Data: implement filtered/sorted versions of the transaction list

**Day 4 — Monthly summary calculations**
- Data: implement `getMonthlySummary(transactions, month)` — returns `{ income, expenses, balance, byCategory }`
- Data: implement `getLast6MonthsSummary(transactions)` — returns array for the bar chart
- Dashboard Developer: build the summary cards (total income, total expenses, balance)

**Day 5 — First working version**
- Data Viz: build the category pie chart with Recharts
- All: connect the dashboard to real data
- PM: demo to mentor; collect feedback

### Week 2: Budgets, charts, and polish

**Day 6 — Budget system**
- Data: implement `setBudget(category, amount)` and `getBudgets()` using localStorage
- Transaction Developer: build the budget settings screen
- Data Viz: build `BudgetProgress` — progress bar per category showing spent/limit

**Day 7 — Monthly bar chart and CSV export**
- Data Viz: build the 6-month spending bar chart
- Data: implement CSV export:
  ```javascript
  function exportToCSV(transactions) {
    const header = "Date,Description,Category,Amount,Type"
    const rows = transactions.map(t => `${t.date},${t.description},${t.category},${t.amount},${t.type}`)
    const csv = [header, ...rows].join('\n')
    // trigger download...
  }
  ```
- Transaction Developer: add "Export CSV" button

**Day 8 — Budget warnings and visual polish**
- Data: trigger a warning notification (or badge) when a category reaches 80% of its budget
- Styling: final UI polish — colours, spacing, responsive layout
- All: consider using colour coding (green = income, red = expense)

**Day 9 — Testing and documentation**
- Tester: test all flows — add income, add expense, set budgets, export CSV, reload page
- All: fix bugs
- PM: write the README

**Day 10 — Demo**
- All: prepare demo; walk through adding a month's worth of transactions and interpreting the results

---

## Learning outcomes

**Technical:**
- React state management with complex nested data
- Array methods: `filter`, `map`, `reduce` (critical for financial calculations)
- Date handling in JavaScript (`Date` object, string formatting)
- Recharts PieChart and BarChart with real financial data
- CSV generation and file download via the Blob API
- Component architecture for a multi-screen app

**Transferable:**
- Financial literacy: income, expenses, budgeting, monthly cashflow
- Data modelling: what information needs to be stored to support all the features?
- Making product decisions: what's the most useful way to present financial data?

---

## Stretch goals

1. **Node.js + SQLite backend**: replace localStorage with a real database so data persists across devices; this adds a fetch-based API layer
2. **Recurring transactions**: mark a transaction as "monthly" so it appears automatically each month
3. **Savings goals**: set a goal (e.g. "save £500 by September") and track progress
4. **Receipt photos**: allow attaching a photo to a transaction (store as base64 in localStorage — for small images only)
5. **Bank import**: parse a CSV export from a real bank account (Monzo/Starling both let you export CSV) and auto-import transactions

---

## Getting started

1. **Create the project**:
   ```bash
   npm create vite@latest finance-tracker -- --template react
   cd finance-tracker
   npm install recharts
   npm run dev
   ```
2. **Define your categories**: decide on the category list upfront — changing it later requires migrating existing data
3. **Build the add-transaction form first**: everything else depends on being able to get data in

**Useful links:**
- Recharts PieChart: https://recharts.org/en-US/api/PieChart
- MDN localStorage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- JavaScript Date: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
- Tailwind CSS (optional): https://tailwindcss.com/docs/installation
- CSV download via Blob: https://developer.mozilla.org/en-US/docs/Web/API/Blob
