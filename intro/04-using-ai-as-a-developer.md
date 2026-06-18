# Using AI as a Developer

AI coding tools have changed software development faster than anything in the past decade. GitHub Copilot, Claude, and ChatGPT are now part of the daily workflow at most tech companies. Learning to use them effectively — and knowing their limits — is a genuine professional skill.

This guide will help you use AI tools confidently without becoming dependent on them.

---

## What AI coding assistants can do

Used well, AI tools make you faster at:

- **Writing boilerplate** — setting up file structures, component skeletons, config files
- **Explaining unfamiliar code** — "what does this function do?"
- **Explaining error messages** — "what does this stack trace mean?"
- **Suggesting approaches** — "what's a good way to store this data?"
- **Writing first drafts** — getting a working starting point you then refine
- **Looking up syntax** — "how do I filter an array in JavaScript?"
- **Generating test cases** — "write unit tests for this function"
- **Translating between languages** — "convert this Python to JavaScript"

---

## What AI coding assistants cannot do reliably

This is the important part. AI tools are wrong — sometimes confidently, specifically wrong — in ways that a beginner might not notice:

- **Security**: AI-generated code often has security vulnerabilities. Never use AI-generated authentication, payment, or data handling code in a real production system without expert review.
- **Logic errors**: AI will produce code that looks right but has subtle bugs. Always test it.
- **Hallucinated APIs**: AI sometimes writes code that calls functions or uses APIs that don't exist. If something doesn't work, check the actual documentation.
- **Outdated information**: AI models have a training cutoff. Library versions, APIs, and best practices change. The AI might suggest an approach that was correct in 2022 but is deprecated now.
- **Context it doesn't have**: AI only knows what you tell it. If your bug is caused by something in a file you didn't share, it can't help.

The golden rule: **AI output is a first draft, not a finished product.** You are responsible for understanding and testing every line of code you submit.

---

## GitHub Copilot: inline autocomplete

GitHub Copilot lives inside VS Code and suggests code as you type, like a very smart autocomplete.

### Getting started

1. Install the **GitHub Copilot** extension in VS Code
2. Sign in with your GitHub account
3. It activates automatically in code files

### How to use it well

**Accept a suggestion:** press `Tab`
**See next suggestion:** press `Alt+]` (Mac: `Option+]`)
**Dismiss:** press `Escape`

Copilot is best at:
- Completing a function you've started writing
- Generating repetitive code (writing similar functions for different data)
- Implementing something once you've written a comment describing what you want

**Try this:** write a comment describing what you want, then press Enter and wait:

```javascript
// Function that takes an array of mood entries and returns the average mood score
```

Copilot will often generate a reasonable implementation.

### When to pause

If Copilot generates a long block of code, don't just accept it. Read it. Do you understand what it's doing? Could you explain it to someone else? If not, ask Claude to explain it before moving on.

---

## Claude and ChatGPT: conversational AI

While Copilot lives in your editor, Claude and ChatGPT are more like a knowledgeable colleague you can have a conversation with.

**Claude:** https://claude.ai
**ChatGPT:** https://chat.openai.com

Use these for:
- Understanding error messages
- Getting unstuck when Copilot isn't enough
- Designing your approach before you start coding
- Getting a code review ("is there anything wrong with this code?")
- Learning a new concept ("explain React's useState hook like I'm new to it")

---

## Good prompting strategies

The quality of AI output depends heavily on the quality of your prompt. Here's how to get better results:

### Include context

Bad prompt:
> "Why isn't my code working?"

Good prompt:
> "I'm building a React mood tracker app. I have a function that saves mood entries to localStorage. When I reload the page, the data sometimes disappears. Here's the function: [paste code]"

### Share the error message

Always paste the exact error message. Don't paraphrase it — the exact wording matters.

```
I'm getting this error in my browser console:
TypeError: Cannot read properties of undefined (reading 'map')
    at MoodList (MoodList.jsx:15:22)

Here's my MoodList component: [paste code]
Here's where I'm calling it: [paste code]
```

### Be specific about what you want

- "Explain what this does" → you'll get an explanation
- "Fix the bug" → you'll get a fix but might not understand it
- "Explain the bug and suggest how I could fix it" → you'll understand and be able to fix it yourself

The second approach is better for learning. The third is best.

### Ask follow-up questions

AI conversations are iterative. If the first answer doesn't quite solve your problem, explain what happened and keep going:

> "That didn't work — now I'm seeing a different error: [error]. The function is now: [updated code]"

---

## Prompts that work well for this programme

Here are some ready-to-use prompt templates:

**Understanding an error:**
```
I'm working on a [React/Python/Node.js] project. I got this error:

[paste error]

Here's the relevant code:

[paste code]

Can you explain what's causing the error and how to fix it?
```

**Learning a concept:**
```
I'm a 16-year-old learning to code. Can you explain [concept] in plain English,
with a simple example? I know basic JavaScript but haven't used [concept] before.
```

**Getting unstuck:**
```
I'm building a [description of feature]. I'm not sure how to approach it.
Here's what I've tried so far: [description or code].
Can you suggest two or three approaches I could take?
```

**Code review:**
```
Here's a function I wrote: [paste code]
Is there anything wrong with it? Are there any edge cases I haven't handled?
```

---

## When NOT to trust AI output

### Security-sensitive code

Anything involving passwords, tokens, user authentication, or payments: get a human expert to review it. AI-generated auth code is often subtly insecure.

### Things that seem too easy

If AI produces a ten-line solution to something you expected to be hard, check it carefully. It might have glossed over an important edge case.

### When you can't explain the code yourself

If you paste in AI-generated code and can't explain what each line does, that's a signal. You can't debug code you don't understand. Pause and ask the AI to explain it line by line.

### Invented library functions

Sometimes AI will write something like:

```javascript
const result = Chart.generateLineGraph(data, { smooth: true });
```

And that function simply doesn't exist in Chart.js. Always check the actual documentation when something doesn't work.

---

## Debugging AI-generated code

When AI code doesn't work:

1. **Read the error message** — carefully, fully. What file, what line, what type of error?
2. **Add `console.log` statements** — print the values of variables at each step to see where things go wrong
3. **Isolate the problem** — make the smallest possible version of the code that still shows the bug
4. **Go back to the AI with specifics** — share the original code, what you expected, and what actually happened
5. **Check the documentation** — for the library or API involved, verify the function names and parameters exist

The ability to debug AI-generated code is becoming one of the most important skills in software engineering. Practice it.

---

## Building your own judgment

AI tools are powerful, but they can also become a crutch. If you find yourself copying code without understanding it, you're not learning — you're borrowing someone else's understanding.

A simple test: **could you write this again from scratch without the AI's help?** Not necessarily every line, but could you explain the approach and reproduce the structure? If yes, great. If no, spend five minutes understanding it before moving on.

By the end of these two weeks, you should be able to:
- Use AI to go faster, but understand the code you ship
- Spot when AI output looks wrong
- Debug AI-generated bugs on your own
- Write prompts that get useful results

That combination — human judgment plus AI speed — is exactly what modern software teams are looking for.

---

## Summary

| Do | Don't |
|----|-------|
| Use AI to understand errors | Paste code you don't understand without reading it |
| Ask AI to explain concepts | Trust AI blindly on security or authentication |
| Give AI full context | Forget to check if library functions actually exist |
| Treat AI output as a first draft | Give up before asking AI for help |
| Test everything AI writes | Let AI do your thinking for you |

Ready to start building? Head to [projects/README.md](../projects/README.md).
