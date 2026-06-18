# Biodiversity Map

**Difficulty:** ⭐⭐⭐ (A-Level transition)
**Duration:** 2 weeks (10 days)
**Team size:** 3–4 students
**Curriculum links:** Biology, Geography, Computer Science, Environmental Science

---

## What you're building

An interactive map of UK wildlife sightings. Load species occurrence data from the Global Biodiversity Information Facility (GBIF) — a free, open database of 2+ billion wildlife records — and display them as pins on an interactive Leaflet.js map. Users can filter sightings by species, region, and date range, and see charts of sighting trends over time.

## Why this project matters

The GBIF is a real scientific resource used by governments, universities, and conservation organisations worldwide. The data your app visualises is collected by citizen scientists — people with the iNaturalist app recording what they see in their garden. Displaying this data meaningfully is exactly the kind of work done by conservation technology organisations like the RSPB, Natural England, and WWF. This project sits at the intersection of biology, data science, and software engineering.

---

## What you'll ship

- An **interactive map** (Leaflet.js) of the UK with pins for wildlife sightings
- **Species search**: search for any UK species by name (e.g. "red kite", "common frog", "oak tree")
- **Filter controls**: filter pins by date range and region/county
- **Popup cards**: click a pin to see species name, scientific name, date, location, and observer
- **Sighting trends chart**: line chart (Recharts) showing number of sightings per month for the selected species
- **Species info panel**: photograph and basic info for the selected species
- **"Load more" pagination**: the GBIF API returns 300 records at a time; allow loading more

---

## Tech stack

| Layer | Technology | Why |
|-------|-----------|-----|
| UI framework | React 18 (Vite) | Managing map, filter, and chart state |
| Map | Leaflet.js + react-leaflet | Industry-standard open-source map library |
| Charts | Recharts | Monthly trend line chart |
| API | GBIF API (https://api.gbif.org/v1) | Free, no API key, 2 billion species records |
| Styling | CSS | Leaflet has its own CSS that you customise |

### GBIF API endpoints

**Search for occurrences (species sightings):**
```
https://api.gbif.org/v1/occurrence/search
  ?country=GB
  &scientificName=Milvus milvus    ← Red kite scientific name
  &limit=300
  &offset=0
```

**Get species info by name:**
```
https://api.gbif.org/v1/species/match?name=red kite&kingdom=Animalia
```

**Get a species image (from iNaturalist via GBIF):**
```
https://api.gbif.org/v1/species/{speciesKey}/media
```

The occurrence response includes `decimalLatitude`, `decimalLongitude`, `eventDate`, `vernacularName`, `scientificName`, and more.

---

## Team roles

| Role | Responsibilities |
|------|----------------|
| **Map Developer** | Leaflet.js setup, pin clustering, popups, map tiles |
| **API Developer** | GBIF fetch functions, species search, pagination |
| **Data Visualisation** | Recharts trend chart, species info panel, filter UI |
| **Tester / PM** | Edge cases (rare species, no results), documentation, species data validation |

---

## 2-week day-by-day plan

### Week 1: Map and API

**Day 1 — Setup and API exploration**
- Everyone: create Vite + React project, push to GitHub
- Everyone: install dependencies:
  ```bash
  npm install leaflet react-leaflet recharts
  ```
- API Developer: explore the GBIF API in the browser — search for a UK species and look at the JSON
- All: agree on the app layout (map takes up most of the screen; controls on the side)

**Day 2 — Leaflet map**
- Map Developer: render a basic Leaflet map centred on the UK
- Map Developer: add a tile layer (OpenStreetMap is free and looks great)
- Note: Leaflet needs its CSS imported — add `import 'leaflet/dist/leaflet.css'` to `main.jsx`
- Map Developer: add a few hardcoded test markers to confirm the map works

**Day 3 — GBIF API integration**
- API Developer: build `src/api/gbif.js`:
  ```javascript
  export async function searchOccurrences(scientificName, limit = 300) { ... }
  export async function matchSpecies(commonName) { ... }
  ```
- API Developer: test with "Milvus milvus" (red kite) — a species with lots of UK records

**Day 4 — Dynamic pins**
- Map Developer: replace hardcoded pins with API data
- Map Developer: add popup to each pin showing date, location, observer
- All: test with a few different species

**Day 5 — Species search UI**
- Data Viz: build the species search bar with autocomplete
- API Developer: wire up species search to the `matchSpecies` function
- PM: demo to mentor; collect feedback

### Week 2: Filters, charts, and polish

**Day 6 — Filter controls**
- Data Viz: add date range filter (start date / end date pickers)
- Map Developer: implement filter on the client side (filter the loaded occurrences array)
- Data Viz: add region filter (a dropdown of UK countries/regions)

**Day 7 — Trends chart**
- API Developer: aggregate occurrence dates into monthly counts
- Data Viz: render a Recharts LineChart showing sightings per month
- Data Viz: style the chart to match the overall app

**Day 8 — Marker clustering**
- Map Developer: install and configure `react-leaflet-cluster` to group overlapping pins
  ```bash
  npm install react-leaflet-cluster
  ```
- Map Developer: clusters should expand on click to show individual pins
- All: test performance with 300 pins

**Day 9 — Testing and documentation**
- Tester: test with species that have many records (robin, blackbird) and few (Scottish wildcat)
- All: handle the "no results" state gracefully
- PM: write the README including GBIF attribution

**Day 10 — Demo**
- Show: search for a charismatic UK species, see it on the map, explore the trend, discuss conservation status

---

## Suggested species to test with

| Species | Scientific name | Why interesting |
|---------|----------------|----------------|
| Red kite | Milvus milvus | Classic UK conservation success story |
| Red squirrel | Sciurus vulgaris | Endangered; mainly in Scotland |
| Common frog | Rana temporaria | Lots of records; widespread |
| Bluebell | Hyacinthoides non-scripta | UK has 50% of world's bluebells |
| Hedgehog | Erinaceus europaeus | Declining; citizen science key to tracking |
| White-tailed eagle | Haliaeetus albicilla | Recently reintroduced; records concentrated |

---

## Learning outcomes

**Technical:**
- Leaflet.js: tile layers, markers, popups, marker clustering
- `react-leaflet` integration with React state
- Working with geographic data (lat/lon coordinates)
- Complex API responses with nested data
- Client-side data filtering and aggregation
- Recharts with time-series data

**Transferable:**
- Understanding geospatial data and mapping concepts
- Connecting software to real scientific datasets
- Conservation biology: what does it mean for a species to be "widespread" or "endangered"?
- Data attribution and open data licences (GBIF data is CC BY 4.0)

---

## Stretch goals

1. **Heatmap layer**: instead of individual pins, show a density heatmap using `leaflet.heat`
2. **Species comparison**: load two species at once and show both on the map in different colours
3. **IUCN status badge**: look up conservation status (Least Concern, Vulnerable, Endangered) from the IUCN Red List API
4. **Export sightings**: download filtered results as a CSV for use in a spreadsheet
5. **Drawing tool**: allow users to draw a polygon on the map and only show sightings within it

---

## Getting started

1. **Create the project**:
   ```bash
   npm create vite@latest biodiversity-map -- --template react
   cd biodiversity-map
   npm install leaflet react-leaflet recharts
   npm run dev
   ```
2. **Test the GBIF API**: paste this URL into your browser and read the JSON response:
   ```
   https://api.gbif.org/v1/occurrence/search?country=GB&scientificName=Milvus%20milvus&limit=10
   ```
3. **Get the Leaflet map rendering** before anything else — once you can see a map with one pin, everything else is incremental from there

**Useful links:**
- GBIF API docs: https://www.gbif.org/developer/summary
- react-leaflet docs: https://react-leaflet.js.org/
- Leaflet.js docs: https://leafletjs.com/reference.html
- OpenStreetMap tile URL: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`
- GBIF UK species portal (browse first): https://www.gbif.org/country/GB/summary
