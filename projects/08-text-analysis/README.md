# Text Analysis Tool

**Difficulty:** ⭐⭐⭐⭐ (A-Level)
**Duration:** 2 weeks (10 days)
**Team size:** 3–4 students
**Curriculum links:** English Language, Computer Science, Linguistics, Psychology

---

## What you're building

A text analysis tool where users paste any text — an essay, a speech, a newspaper article, a novel extract — and receive deep linguistic analysis: word frequency charts, sentence length distribution, readability scores, keyword extraction, and side-by-side comparison of two texts. The app has a React frontend and a Node.js/Express backend that handles the heavy text processing using the `natural` NLP library.

## Why this project matters

Text analysis is the backbone of computational linguistics, sentiment analysis, plagiarism detection, content moderation, and large language model evaluation. Tools like this are used by political campaigns (analysing speeches), publishers (assessing reading level), journalists (fact-checking), and researchers. Understanding how to turn unstructured text into structured, meaningful data is a core data science skill — and this project teaches exactly that.

---

## What you'll ship

**Frontend:**
- A text input area (large textarea or drag-and-drop file upload)
- Results displayed in multiple tabs: Overview, Word Analysis, Sentence Analysis, Compare

**Analysis features:**
- **Word count**, character count, paragraph count, average word length
- **Word frequency chart**: top 20 words (excluding stopwords) as a bar chart
- **Flesch-Kincaid readability score**: a number from 0–100 (higher = easier to read) and its plain-English label (e.g. "Standard" / "Difficult")
- **Sentence length distribution**: histogram of sentence lengths
- **Keyword extraction**: top 10 most "important" words using TF-IDF scoring
- **Vocabulary richness**: ratio of unique words to total words
- **Comparison mode**: paste two texts and see their scores side by side

---

## Tech stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Frontend | React 18 (Vite) | Tabbed UI, forms, charts |
| Charts | Recharts | Bar chart for word freq, histogram for sentence lengths |
| Backend | Node.js + Express | Handles text processing; doesn't block the browser |
| NLP library | natural (npm) | Tokenization, stemming, TF-IDF, all in one package |
| Communication | REST API (fetch) | Frontend sends text to backend, gets analysis back |

### Why a backend?

You could do text analysis in the browser, but:
1. Heavy processing would freeze the UI
2. Node.js `natural` library is far more powerful than browser equivalents
3. This is a chance to build a real full-stack app with an API

---

## Backend API design

Your Express server exposes one endpoint:

```
POST /api/analyse
Content-Type: application/json
Body: { "text": "..." }

Response:
{
  "wordCount": 542,
  "charCount": 2934,
  "sentenceCount": 28,
  "avgWordLength": 4.8,
  "vocabularyRichness": 0.67,
  "fleschScore": 58.3,
  "fleschLabel": "Standard",
  "topWords": [{ "word": "climate", "count": 12 }, ...],
  "keywords": [{ "word": "renewable", "tfidf": 0.89 }, ...],
  "sentenceLengths": [12, 8, 24, 6, ...]
}
```

For comparison mode, send two texts:

```
POST /api/compare
Body: { "textA": "...", "textB": "..." }
```

---

## The algorithms you'll implement

### Flesch-Kincaid Readability Score

```javascript
// Requires: word count, sentence count, syllable count
const ASL = wordCount / sentenceCount        // average sentence length
const ASW = syllableCount / wordCount        // average syllables per word

const fleschScore = 206.835 - (1.015 * ASL) - (84.6 * ASW)
// 90-100: Very easy (children's books)
// 60-70: Standard (newspapers)
// 30-50: Difficult (academic)
// 0-30: Very difficult (legal documents)
```

### Syllable counting (approximation)

```javascript
function countSyllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g, '')
  if (word.length <= 3) return 1
  const vowelGroups = word.match(/[aeiouy]+/g)
  return vowelGroups ? vowelGroups.length : 1
}
```

### TF-IDF keyword extraction

The `natural` library handles this — you create a `TfIdf` object, add your documents, and call `.listTerms()` to get ranked keywords.

---

## Team roles

| Role | Responsibilities |
|------|----------------|
| **Backend Developer** | Node.js/Express server, text processing algorithms, NLP with natural.js |
| **Frontend Developer** | React components, text input, tabs, results display |
| **Data Visualisation** | Recharts word frequency chart, sentence length histogram, comparison view |
| **Tester / PM** | Testing with varied texts, validating scores, README, managing tasks |

---

## 2-week day-by-day plan

### Week 1: Backend and core analysis

**Day 1 — Setup: two projects**
- Everyone: create two folders: `frontend/` (Vite + React) and `backend/` (Node.js)
- Backend: initialise the backend:
  ```bash
  mkdir backend && cd backend
  npm init -y
  npm install express cors natural
  ```
- Backend: create a basic Express server that responds to `GET /health` with `{ "status": "ok" }`
- Frontend: create the Vite project and verify both run simultaneously

**Day 2 — Backend: tokenization and word count**
- Backend: implement the `/api/analyse` endpoint (skeleton — return hardcoded data first)
- Backend: implement `tokenize(text)` using `natural.WordTokenizer`
- Backend: implement word count, character count, unique word count
- Backend: implement stop word filtering (common words to exclude: "the", "a", "and", etc.)

**Day 3 — Backend: word frequency and readability**
- Backend: implement top-20 word frequency from filtered tokens
- Backend: implement syllable counting and Flesch-Kincaid score
- Backend: implement sentence splitting (split on `.`, `!`, `?`) and sentence length calculation
- Backend: test all functions with a known text and verify results manually

**Day 4 — Backend: TF-IDF keywords**
- Backend: implement TF-IDF keyword extraction using `natural.TfIdf`
- Backend: assemble the full response object
- Backend: test the complete endpoint with `curl` or a tool like Postman

**Day 5 — Frontend: input and basic results**
- Frontend: build the text input component
- Frontend: call the backend API with `fetch` and display the raw JSON results
- All: run both backend and frontend together; confirm end-to-end flow works
- PM: demo to mentor; collect feedback

### Week 2: Charts, comparison, and polish

**Day 6 — Word frequency chart**
- Data Viz: build a Recharts BarChart of top 20 words
- Data Viz: build the sentence length histogram
- Frontend: build the tabbed results layout

**Day 7 — Readability display and stats**
- Frontend: build the readability score display — a gauge or colour-coded badge
- Frontend: build the vocabulary richness display
- Frontend: build the summary stats row (word count, sentences, reading time estimate)

**Day 8 — Comparison mode**
- Backend: implement `/api/compare` endpoint — run analysis on both texts
- Frontend: build the side-by-side comparison view
- Data Viz: add comparison charts (two bars per word for the top words)

**Day 9 — Testing and documentation**
- Tester: test with a variety of texts — news article, poem, legal document, children's book
- All: verify Flesch scores match expectations (poems should score low; BBC News should score ~60)
- PM: write README for both frontend and backend

**Day 10 — Demo**
- All: prepare demo; show the tool analysing a famous speech (Churchill's "We Shall Fight on the Beaches" works well for drama)

---

## Learning outcomes

**Technical:**
- Full-stack architecture: React frontend + Node.js backend communicating via REST API
- Express.js: routing, middleware, CORS, JSON responses
- Natural language processing: tokenization, stop words, TF-IDF
- String algorithms: sentence splitting, syllable counting
- Recharts with dynamically generated data
- `fetch` with POST requests and JSON bodies

**Transferable:**
- Understanding how computational tools can reveal patterns in language
- Full-stack thinking: which logic belongs on the frontend vs the backend?
- Validating results: how do you know if your readability score is correct?
- Linguistic awareness: what makes a text easy or hard to read?

---

## Stretch goals

1. **Sentiment analysis**: use `natural.SentimentAnalyzer` to score each sentence as positive, negative, or neutral; show a sentiment timeline
2. **Named entity recognition**: identify people, places, and organisations mentioned in the text
3. **Reading time estimate**: "This text would take an average reader approximately 4 minutes to read"
4. **Part-of-speech tagging**: use `natural.BrillPOSTagger` to tag words as nouns, verbs, adjectives — show the distribution in a pie chart
5. **Text similarity score**: given two texts, calculate a similarity score (cosine similarity of TF-IDF vectors)

---

## Getting started

1. **Set up the backend first**:
   ```bash
   mkdir text-analysis && cd text-analysis
   mkdir backend frontend
   cd backend
   npm init -y
   npm install express cors natural
   ```
   Create `server.js` with a basic Express server and test that it starts.

2. **Set up the frontend**:
   ```bash
   cd ../frontend
   npm create vite@latest . -- --template react
   npm install recharts
   ```

3. **Run both at once**: during development, run the backend on port 3001 and the frontend on port 5173; configure the frontend to proxy API requests to the backend

**Useful links:**
- natural NLP library: https://naturalnode.github.io/natural/
- Express.js docs: https://expressjs.com/en/guide/routing.html
- CORS explained: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
- Flesch-Kincaid formula: https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests
- Recharts BarChart: https://recharts.org/en-US/api/BarChart
- Vite proxy config: https://vitejs.dev/config/server-options.html#server-proxy
