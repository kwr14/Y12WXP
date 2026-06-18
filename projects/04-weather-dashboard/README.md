# Weather Dashboard

**Difficulty:** ⭐⭐⭐ (GCSE+)
**Duration:** 2 weeks (10 days)
**Team size:** 3–4 students
**Curriculum links:** Geography, Computer Science

---

## What you're building

A live weather dashboard using the free Open-Meteo API — no sign-up, no API key required. Users search for any UK city, and the app fetches and displays current weather conditions, an hourly forecast, and a 7-day outlook. Data is shown in charts (temperature, precipitation, wind speed) with weather icons and a clean, modern UI.

## Why this project matters

Weather apps are used by billions of people every day and are one of the most-built beginner projects in software engineering — but building one from scratch teaches you almost everything you need to know about working with external APIs, which is a core skill in professional development. You'll learn to fetch live data from a server, handle loading and error states, and present information in a way that's genuinely useful.

---

## What you'll ship

- A **city search bar** using the Open-Meteo geocoding API to find UK cities
- **Current conditions card**: temperature, weather code (sunny/cloudy/rainy), wind speed, humidity, UV index
- **Hourly temperature chart** for the next 24 hours (Recharts LineChart)
- **7-day forecast** row: min/max temperature and weather icon for each day
- **Precipitation chart**: bar chart showing expected rainfall over the next 7 days
- **Unit toggle**: Celsius/Fahrenheit
- **Loading and error states**: spinner while fetching, friendly error if city not found

---

## Tech stack

| Layer | Technology | Why |
|-------|-----------|-----|
| UI framework | React 18 (Vite) | Clean component structure for multiple data views |
| Charts | Recharts | LineChart and BarChart for forecast data |
| API | Open-Meteo (https://api.open-meteo.com) | Free, no API key, comprehensive weather data |
| Geocoding API | Open-Meteo Geocoding (https://geocoding-api.open-meteo.com) | Find latitude/longitude for any city |
| HTTP | `fetch` with `async/await` | Native browser API, no library needed |
| Styling | CSS (plain) | Full control over the layout |

### API endpoints you'll use

**Geocoding (find a city):**
```
https://geocoding-api.open-meteo.com/v1/search?name=London&count=5&language=en&format=json
```

**Weather forecast (once you have lat/lon):**
```
https://api.open-meteo.com/v1/forecast
  ?latitude=51.5
  &longitude=-0.12
  &current=temperature_2m,weathercode,windspeed_10m,relativehumidity_2m,uv_index
  &hourly=temperature_2m,precipitation_probability
  &daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum
  &timezone=Europe/London
  &forecast_days=7
```

---

## Weather code to icon mapping

Open-Meteo uses WMO weather codes. Here's a simplified mapping to get you started:

```javascript
export const WEATHER_ICONS = {
  0: '☀️',   // Clear sky
  1: '🌤️',  // Mainly clear
  2: '⛅',   // Partly cloudy
  3: '☁️',   // Overcast
  45: '🌫️', // Foggy
  61: '🌧️', // Light rain
  63: '🌧️', // Moderate rain
  65: '🌧️', // Heavy rain
  71: '🌨️', // Light snow
  80: '🌦️', // Rain showers
  95: '⛈️', // Thunderstorm
}
```

---

## Team roles

| Role | Responsibilities |
|------|----------------|
| **API Developer** | Fetch functions, geocoding, error handling, TypeScript types (optional) |
| **Components Developer** | CurrentConditions, HourlyChart, WeeklyForecast, SearchBar components |
| **Data Visualisation** | Recharts integration, chart configuration, weather icons |
| **Tester / PM** | Edge case testing (bad city name, no internet), documentation |

---

## 2-week day-by-day plan

### Week 1: API and core components

**Day 1 — Setup and API exploration**
- Everyone: create Vite + React project, push to GitHub
- API Developer: explore the Open-Meteo API in the browser — paste the URLs above and look at the JSON response
- All: agree on the app layout (sketch on paper)
- PM: create task board

**Day 2 — API layer**
- API Developer: build `src/api/weather.js`:
  ```javascript
  export async function searchCity(name) { ... }
  export async function fetchWeather(lat, lon) { ... }
  ```
- API Developer: test these functions in the browser console
- Components: stub out component files with placeholder content

**Day 3 — Search and current conditions**
- Components: build `SearchBar` with debounced input and dropdown of results
- Components: build `CurrentConditions` card (temperature, description, icon)
- API Developer: wire up search to geocoding API

**Day 4 — Hourly chart**
- Data Viz: build the 24-hour temperature line chart with Recharts
- Components: add loading spinner (show while fetch is in progress)
- All: connect the chart to the API data

**Day 5 — Weekly forecast**
- Components: build `WeeklyForecast` row — 7 day cards with icon, min/max temp
- Data Viz: add precipitation bar chart
- All: end-to-end test — search for London, see full forecast
- PM: demo to mentor; collect feedback

### Week 2: Polish and extra features

**Day 6 — Error handling and edge cases**
- API Developer: handle network errors gracefully (no internet, city not found)
- Components: show a friendly error message instead of a crash
- All: test with unusual inputs (empty search, very long city name, city with no results)

**Day 7 — Unit toggle and extras**
- Components: add Celsius/Fahrenheit toggle
- Components: add "use my location" button (browser `navigator.geolocation`)
- Data Viz: improve chart tooltips and axis labels

**Day 8 — Visual polish**
- Styling: dynamic background colour/gradient based on weather code (sunny = warm yellow, rainy = grey-blue)
- Styling: animated weather icons or CSS transitions
- Styling: ensure the layout works on mobile (responsive design)

**Day 9 — Testing and documentation**
- Tester: full manual test; log and fix bugs
- PM: write the README with setup instructions and API attribution
- All: add the Open-Meteo attribution (required by their free API terms)

**Day 10 — Demo**
- Show the search, live data loading, charts, and any extra features
- Discuss: what was hard about working with an external API? What would you do differently?

---

## Learning outcomes

**Technical:**
- `fetch` API and `async/await` for making HTTP requests
- Parsing and navigating JSON API responses
- React `useEffect` for side effects (fetching data when a component mounts)
- React `useState` for loading, error, and data states
- Recharts LineChart and BarChart with real data
- Handling API errors gracefully

**Transferable:**
- Reading API documentation
- Debugging network requests using browser DevTools (Network tab)
- Understanding that most modern apps are built on top of other services' data
- Data presentation: what's the most useful way to show weather information?

---

## Stretch goals

1. **Local caching**: store the last fetch result in sessionStorage so the app doesn't re-fetch on every render
2. **Multiple cities**: allow users to pin favourite cities and switch between them
3. **Historical data**: Open-Meteo also offers historical weather — show this week vs the same week last year
4. **Wind direction compass**: animate a compass needle pointing in the current wind direction
5. **Pollen index**: overlay UK pollen forecast data (available from the Met Office public API) for hay fever sufferers

---

## Getting started

1. **Create the project**:
   ```bash
   npm create vite@latest weather-dashboard -- --template react
   cd weather-dashboard
   npm install recharts
   npm run dev
   ```
2. **Test the API manually**: open your browser and paste this URL to see what the API returns:
   ```
   https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=-0.12&current=temperature_2m,weathercode&timezone=Europe/London
   ```
3. **Plan your components**: decide what each component is responsible for rendering before writing any code

**Useful links:**
- Open-Meteo API docs: https://open-meteo.com/en/docs
- Open-Meteo Geocoding docs: https://open-meteo.com/en/docs/geocoding-api
- WMO weather codes: https://open-meteo.com/en/docs#weathervariables (scroll to "WMO Weather interpretation codes")
- Recharts docs: https://recharts.org/en-US/api
- React useEffect guide: https://react.dev/reference/react/useEffect
