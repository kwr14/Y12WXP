# AI Study Buddy

**Difficulty:** ⭐⭐⭐⭐ (A-Level)
**Duration:** 2 weeks (10 days)
**Team size:** 3–4 students
**Curriculum links:** All A-Level subjects, Computer Science, Philosophy (Ethics of AI)

---

## What you're building

A subject-specific AI tutor powered by the Claude API. Users choose a subject (Physics, Maths, History, Biology, English Literature, etc.) and their level (GCSE or A-Level), then have a conversation with an AI that can explain topics, generate quiz questions, mark answers, create revision summaries, and suggest past-paper style questions. The app has a React frontend and a Node.js backend that talks to Anthropic's Claude API.

## Why this project matters

AI tutoring is one of the most impactful applications of large language models. Khan Academy's Khanmigo, Duolingo's AI tutor, and dozens of EdTech startups are building versions of exactly this. You'll be working with the same API that powers many of these products. More importantly, you'll learn to think critically about AI: when is it helpful, when does it make mistakes, and how do you design a system that's genuinely useful for students rather than just impressive?

---

## What you'll ship

- A **subject and level selector**: choose from 8+ subjects and GCSE/A-Level
- A **chat interface**: messages between the user and the AI, displayed in a clean conversation layout
- **Four modes** (accessible via buttons or commands):
  - **Explain**: "Explain [topic] at A-Level" — clear explanation with examples
  - **Quiz me**: generates 5 questions on a topic; user answers; AI marks and explains errors
  - **Summarise**: generates a revision summary for a topic as bullet points
  - **Past paper question**: generates an exam-style question with mark scheme
- **Conversation history**: the full conversation is maintained and sent to Claude so it remembers context
- **New session**: start a fresh conversation
- **Copy answer**: copy any AI response to clipboard

---

## Tech stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Frontend | React 18 (Vite) | Chat UI state management |
| Backend | Node.js + Express | Proxies requests to Claude API securely (API key never exposed to browser) |
| AI | Claude (claude-3-5-haiku-20241022) | Fast, accurate, excellent at educational content |
| Anthropic SDK | `@anthropic-ai/sdk` | Official Node.js SDK for the Claude API |
| Styling | CSS | Chat-style layout (similar to WhatsApp/iMessage) |

**Why a backend?** Your Anthropic API key must never be exposed in frontend code — anyone could open DevTools and steal it. The backend acts as a secure proxy.

---

## The Claude API

Your backend calls the Anthropic API like this:

```javascript
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const response = await client.messages.create({
  model: 'claude-3-5-haiku-20241022',
  max_tokens: 1024,
  system: `You are a helpful tutor specialising in ${subject} at ${level} level.
           You explain things clearly, use real examples, and encourage the student.
           When generating quiz questions, always provide the mark scheme after the student answers.`,
  messages: conversationHistory   // array of { role: 'user' | 'assistant', content: '...' }
})

const reply = response.content[0].text
```

---

## System prompt design

The system prompt is how you control Claude's behaviour. This is one of the most interesting parts of the project — designing prompts to get consistent, high-quality tutoring.

Here's a starting system prompt:

```
You are an expert tutor specialising in {subject} at {level} level in the UK curriculum.

Your role is to help students understand difficult concepts, test their knowledge, and prepare for exams.

When explaining topics:
- Use clear, simple language first, then introduce technical terms
- Give concrete real-world examples
- Check understanding by asking a follow-up question

When quizzing the student:
- Generate 5 questions of increasing difficulty
- Wait for the student's answer before revealing the correct answer
- Give specific, encouraging feedback on their answer
- Explain any misconceptions gently but clearly

When generating exam questions:
- Match the style and mark scheme of AQA/OCR/Edexcel ({level}) questions
- State the number of marks available
- After the student answers, provide a full mark scheme

Always be encouraging. Learning is hard; mistakes are normal.
```

You'll improve this prompt throughout the project based on how Claude behaves.

---

## Team roles

| Role | Responsibilities |
|------|----------------|
| **Backend / API Developer** | Express server, Claude API integration, conversation history management, environment variables |
| **Frontend Developer** | Chat UI, message list, input form, mode buttons, subject/level selector |
| **Prompt Engineer / UX** | System prompt design and iteration, quiz flow UX, subject-specific prompt testing |
| **Tester / PM** | Testing across subjects, evaluating AI output quality, documentation, ethics section |

---

## 2-week day-by-day plan

### Week 1: Backend and basic chat

**Day 1 — Setup**
- Everyone: create two folders: `frontend/` (Vite + React) and `backend/` (Node.js)
- Backend: set up Express and test `GET /health`:
  ```bash
  mkdir backend && cd backend
  npm init -y
  npm install express cors @anthropic-ai/sdk dotenv
  ```
- Backend: create `.env` file with `ANTHROPIC_API_KEY=sk-ant-...` (your mentor will provide a key)
- **Important**: add `.env` to `.gitignore` immediately — never commit API keys to git

**Day 2 — Claude API integration**
- Backend: implement the Claude API call — a function that takes `systemPrompt`, `conversationHistory` and returns a response
- Backend: test it works by calling the API from your terminal
- Backend: implement `POST /api/chat` endpoint

**Day 3 — Frontend: chat UI**
- Frontend: build the `MessageList` component — shows user and assistant messages in alternating layout
- Frontend: build `MessageInput` — text field + submit button
- Frontend: call the backend `/api/chat` endpoint and display the response

**Day 4 — Conversation history**
- Frontend: maintain the full conversation array in state
- Frontend: send the full history with every API call so Claude remembers context
- Backend: pass the history through to the Anthropic SDK

**Day 5 — Subject/level selector**
- Frontend: build the subject and level selection screen (shown before starting a conversation)
- Backend: include subject and level in the system prompt
- All: test the complete flow for two different subjects
- PM: demo to mentor; collect feedback on AI quality

### Week 2: Features and prompt engineering

**Day 6 — Mode buttons**
- Frontend: add four mode buttons: Explain, Quiz Me, Summarise, Past Paper Question
- Frontend: when a mode is clicked, send a pre-formatted message to the AI (e.g. "Quiz me on [topic]")
- All: test each mode and evaluate the quality of responses

**Day 7 — Quiz flow**
- Prompt Engineer: refine the quiz system prompt — the AI should ask one question at a time, wait for the answer, then give feedback
- Frontend: add a "Start quiz" UI — ask user for a topic, then display Q&A one at a time
- All: test quiz mode across multiple subjects

**Day 8 — Revision summaries and polish**
- Prompt Engineer: design a prompt for generating clean, bullet-point revision summaries
- Frontend: add a "Copy" button to each AI message
- Frontend: add a "New conversation" button that resets history
- All: improve the UI — better message formatting, loading indicator while waiting for response

**Day 9 — Testing, ethics, and documentation**
- Tester: evaluate AI output quality systematically — is the Physics explanation correct? Are the History questions at the right level?
- All: document known limitations (AI can be wrong, especially in Maths; always verify with a textbook)
- PM: write the README including a section on responsible use of AI

**Day 10 — Demo**
- All: demonstrate all four modes across two subjects
- Discuss: when did the AI do well? When did it fall short? How would you improve it?

---

## Responsible AI considerations

This project requires thinking critically about AI output. As part of your work:

- **Accuracy**: Claude is excellent at explanation but can make factual errors, especially in Maths. Your README should warn users to verify answers.
- **Hallucination**: AI can confidently state things that are wrong. Students should not use this as their only revision tool.
- **Data privacy**: don't send personal information to the API; your chats are processed by Anthropic's servers.
- **Dependency**: there's a risk students rely on AI rather than developing their own understanding. The quiz mode is explicitly designed to counteract this.

Including a one-page "How to use this tool responsibly" guide is a stretch goal worth doing.

---

## Learning outcomes

**Technical:**
- Full-stack architecture: React + Node.js + external AI API
- Anthropic SDK: message structure, system prompts, conversation history
- Environment variables and secret management
- Express API design: routing, middleware, error handling
- React state for complex conversation flows
- Prompt engineering: designing instructions to get reliable AI behaviour

**Transferable:**
- Critical evaluation of AI output
- Understanding how large language models work (input → output, context window, temperature)
- Product thinking: what makes an AI tutor genuinely useful vs just impressive?
- Ethics: whose responsibility is it if the AI gives wrong information?

---

## Stretch goals

1. **Streaming responses**: use Anthropic's streaming API so the response appears word-by-word (like ChatGPT), which feels much more natural
2. **Session saving**: save conversations to localStorage so users can resume a session
3. **Shareable sessions**: export a conversation as a PDF or shareable link
4. **Subject-specific personas**: give each subject a different personality (the History tutor is enthusiastic about primary sources; the Maths tutor insists on showing working)
5. **Usage analytics**: track which subjects are used most, which questions are asked most, to guide product improvements

---

## Getting started

1. **Get an API key**: your mentor will provide an Anthropic API key. Store it only in a `.env` file, never in code.

2. **Set up the backend**:
   ```bash
   mkdir ai-study-buddy && cd ai-study-buddy
   mkdir backend frontend
   cd backend
   npm init -y
   npm install express cors @anthropic-ai/sdk dotenv
   echo "ANTHROPIC_API_KEY=your-key-here" > .env
   echo ".env" >> .gitignore
   ```

3. **Verify the API works** before building any UI:
   ```javascript
   // test.js — run with: node test.js
   import Anthropic from '@anthropic-ai/sdk'
   import 'dotenv/config'
   const client = new Anthropic()
   const msg = await client.messages.create({
     model: 'claude-3-5-haiku-20241022',
     max_tokens: 256,
     messages: [{ role: 'user', content: 'What is photosynthesis?' }]
   })
   console.log(msg.content[0].text)
   ```

**Useful links:**
- Anthropic API docs: https://docs.anthropic.com/en/api/getting-started
- Claude models: https://docs.anthropic.com/en/docs/about-claude/models
- Prompt engineering guide: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
- Express.js docs: https://expressjs.com/
- Streaming with Anthropic SDK: https://docs.anthropic.com/en/api/streaming
