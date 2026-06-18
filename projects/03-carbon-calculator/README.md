# Carbon Calculator

**Difficulty:** ⭐⭐⭐ (GCSE+)
**Duration:** 2 weeks (10 days)
**Team size:** 3–4 students
**Curriculum links:** Geography, Science, Computer Science, Economics

---

## What you're building

A personal carbon footprint calculator that lets users enter their weekly habits — how they travel, what they eat, how much energy they use, and how often they fly — and get a CO₂ score in tonnes per year. The app compares their footprint to the UK average (around 10 tonnes/year) and shows a breakdown by category, highlighting which changes would have the biggest impact.

## Why this project matters

Climate change is the defining issue of your generation. But most people have no idea what their actual carbon footprint is, or which parts of their lifestyle matter most. Tools like this are used by organisations from the WWF to the UN to help people make informed decisions. Building one means grappling with real environmental data and turning it into something that could genuinely change behaviour.

---

## What you'll ship

- A **multi-step form** with four sections: transport, diet, home energy, and flights
- **CO₂ calculations** for each input, based on UK government emission factors
- A **results screen** showing:
  - Total annual CO₂ in tonnes
  - A comparison bar showing user vs UK average (10t) vs Paris Agreement target (2.5t)
  - A **pie chart** (Recharts) breaking down emissions by category
  - A **top 3 changes** panel: "If you switched to a plant-based diet, you'd save 1.5 tonnes/year"
- A **reset button** to start again
- Shareable results (encode to URL query string)

---

## Tech stack

| Layer | Technology | Why |
|-------|-----------|-----|
| UI framework | React 18 (Vite) | Managing multi-step form state cleanly |
| Charts | Recharts | Built for React; excellent pie and bar charts |
| Styling | CSS (plain or modules) | Flexible enough for a polished UI |
| Data | Hardcoded emissions factors (JS constants file) | No API needed; data from DEFRA and BEIS |
| State | React `useState` | Form data, current step, results |

---

## Emissions factors you'll use

These are simplified versions of real UK government data (DEFRA/BEIS 2023):

```javascript
// kg CO2e per unit
export const EMISSIONS_FACTORS = {
  transport: {
    car_petrol_per_km: 0.170,
    car_diesel_per_km: 0.163,
    car_electric_per_km: 0.047,
    bus_per_km: 0.089,
    train_per_km: 0.035,
    motorbike_per_km: 0.114,
  },
  diet: {
    meat_heavy: 3200,      // kg CO2e/year
    average: 2500,
    vegetarian: 1700,
    vegan: 1500,
  },
  home: {
    gas_per_kwh: 0.183,
    electricity_per_kwh: 0.233,
  },
  flights: {
    short_haul_return: 255,  // kg CO2e per return flight (e.g. London–Barcelona)
    long_haul_return: 1620,  // kg CO2e per return flight (e.g. London–New York)
  },
}
```

---

## Team roles

| Role | Responsibilities |
|------|----------------|
| **Form Developer** | Builds the multi-step form: transport, diet, energy, flights sections |
| **Calculations Engine** | Implements the CO₂ maths, "top changes" logic, URL sharing |
| **Data Visualisation** | Recharts pie chart, comparison bar, results layout |
| **Tester / PM** | Validates calculations against real calculators, writes docs, manages tasks |

---

## 2-week day-by-day plan

### Week 1: Data model and form

**Day 1 — Setup and planning**
- Everyone: create Vite + React project, push to GitHub
- All: read the project brief and sketch the UI flow (how many screens? what inputs on each?)
- Calculations: research the emissions factors, create `emissions-factors.js`
- All: decide which inputs to include (keep it focused — 6–8 inputs total is enough)

**Day 2 — Data model and app structure**
- Calculations: define the `formData` state shape and write skeleton calculation functions
- Form Developer: build the step-navigation component (Previous / Next buttons, step indicator)
- PM: set up the task board with specific tickets

**Day 3 — Transport and diet sections**
- Form Developer: build the transport form (transport type + km/week input)
- Form Developer: build the diet form (radio buttons for diet type)
- Calculations: implement `calculateTransportCO2(formData)` and `calculateDietCO2(formData)`
- Data Viz: explore Recharts PieChart component

**Day 4 — Energy and flights sections**
- Form Developer: build the home energy form (gas/electricity kWh/month)
- Form Developer: build the flights form (number of short/long haul flights per year)
- Calculations: implement `calculateEnergyCO2()` and `calculateFlightsCO2()`

**Day 5 — Results screen (first version)**
- Calculations: implement `getTotalCO2(formData)` and `getTopChanges(formData)`
- Data Viz: render the Recharts PieChart with the four categories
- All: end-to-end test — fill in the form and see results
- PM: demo to mentor; collect feedback

### Week 2: Polish and extras

**Day 6 — Comparison and advice**
- Data Viz: add the comparison bar (user / UK average / Paris target)
- Calculations: improve the "top 3 changes" logic with specific savings estimates
- Form Developer: add inline help text and tooltips for each question

**Day 7 — URL sharing and visual polish**
- Calculations: implement encode/decode of form data as URL query string (`?transport=car&km=100&diet=meat...`)
- All: add a "Share your results" button
- Data Viz: improve chart styling, add animations

**Day 8 — Edge cases and validation**
- Form Developer: add input validation (no negative numbers, reasonable maximums)
- Calculations: handle edge cases (zero km, no flights)
- All: compare results against established calculators like the WWF footprint calculator

**Day 9 — Testing and documentation**
- Tester: full manual test of all paths
- All: fix bugs
- PM: write the README, document the emissions sources

**Day 10 — Demo**
- All: prepare demo: walk through entering a typical UK lifestyle and discuss the results

---

## Learning outcomes

**Technical:**
- React multi-step form with shared state
- Data modelling: representing real-world quantities in code
- Mathematical formulae implemented in JavaScript
- Recharts: PieChart and BarChart components
- URL encoding of state for shareability

**Transferable:**
- Working with real scientific data (emissions factors)
- Connecting technology to real-world problems
- Explaining technical results to a general audience
- Data literacy: understanding CO₂ units, comparisons, and context

---

## Stretch goals

1. **Postcode-based electricity factor**: UK electricity carbon intensity varies by region — use the National Grid API to show a personalised factor
2. **Year-on-year tracking**: save previous results in localStorage and show a trend over time
3. **Offset suggestions**: show how many trees, solar panels, or electric vehicle switches would offset the user's footprint
4. **Compare with friends**: generate a unique code that lets two users compare their footprints side by side
5. **Animated results**: use CSS animations to show a "carbon meter" filling up as the results load

---

## Getting started

1. **Create the project**:
   ```bash
   npm create vite@latest carbon-calculator -- --template react
   cd carbon-calculator
   npm install recharts
   npm run dev
   ```
2. **Create `src/data/emissions-factors.js`** with the constants from this brief
3. **Sketch the form flow**: draw on paper which questions appear on each step before writing any code

**Useful links:**
- Recharts docs: https://recharts.org/en-US/api
- DEFRA emissions factors (reference): https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting
- WWF footprint calculator (test against this): https://footprint.wwf.org.uk/
- React multi-step form guide: https://react.dev/learn/sharing-state-between-components
