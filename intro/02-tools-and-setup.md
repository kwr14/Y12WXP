# Tools and Setup

Getting your development environment ready is the first real task of any software project. Follow this guide carefully, and ask for help if anything goes wrong — setup issues are extremely common and nothing to be embarrassed about.

Estimated time: **45–60 minutes**.

---

## 1. VS Code

VS Code (Visual Studio Code) is the code editor used by the majority of professional developers worldwide. It's free, fast, and has excellent extensions.

**Download:** https://code.visualstudio.com

Install it with the default options. When it opens, you'll see a welcome screen — you can close that.

### Recommended extensions

Click the Extensions icon in the left sidebar (looks like four squares) and install these:

| Extension | What it does |
|-----------|-------------|
| **Prettier – Code Formatter** | Auto-formats your code so it's consistently tidy |
| **ESLint** | Highlights JavaScript errors as you type |
| **GitLens** | Shows git blame, history, and changes inline in your code |
| **GitHub Copilot** | AI autocomplete (more on this in guide 04) |
| **Python** (by Microsoft) | Essential if you're working on a Python backend |
| **ES7+ React/Redux Snippets** | Handy shortcuts for React code |

**To enable Prettier as your default formatter:**
1. Open Settings (`Cmd+,` on Mac / `Ctrl+,` on Windows)
2. Search for `format on save`
3. Tick the checkbox

Now your code will be automatically formatted every time you save a file.

---

## 2. Node.js

Node.js lets you run JavaScript outside of a browser. It also comes with `npm` (Node Package Manager) which you'll use to install libraries.

**Download:** https://nodejs.org — choose the **LTS** version (Long Term Support), not the latest.

After installing, verify it worked by opening a terminal and running:

```bash
node --version
npm --version
```

You should see version numbers like `v20.x.x` and `10.x.x`. If you see `command not found`, restart your terminal and try again.

---

## 3. Python

Python is used in some of the backend projects. Even if your project doesn't use Python, it's worth having installed.

**Mac:** Python 3 may already be installed. Check with:
```bash
python3 --version
```

If it says `command not found`, download from https://python.org/downloads — choose the latest Python 3.x release.

**Windows:** Download from https://python.org/downloads. **Important:** on the installer screen, tick the box that says "Add Python to PATH" before clicking Install.

After installing:
```bash
python3 --version   # Mac/Linux
python --version    # Windows
```

You should see `Python 3.x.x`.

---

## 4. Git

Git is the version control system that every software team uses. It tracks changes to your code and lets multiple people work on the same project without overwriting each other's work.

**Check if it's already installed:**
```bash
git --version
```

**If not installed:**
- **Mac:** Running `git --version` may prompt you to install Xcode Command Line Tools — say yes.
- **Windows:** Download from https://git-scm.com/download/win and install with default options.

### Configure Git with your name and email

This is important — it labels your commits so everyone can see who wrote what:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Use your real name and a real email address. These will appear in your GitHub history.

---

## 5. GitHub account

GitHub is where your team's code will live. It's like Google Drive but for code, and it's the platform that almost every professional software team uses.

1. Go to https://github.com and create a free account.
2. Choose a sensible username (e.g. `firstnamelastname` or `firstname-lastname`) — this could be on your CV one day.
3. Verify your email address.

Once everyone on your team has an account, one person will create the repository and invite the others as collaborators (your mentor will help with this).

---

## 6. Terminal basics

The terminal (called "Terminal" on Mac, "Command Prompt" or "PowerShell" on Windows) lets you talk to your computer by typing commands. Many developer tools only work in the terminal.

**Opening the terminal:**
- **Mac:** Press `Cmd+Space`, type "Terminal", press Enter. Or in VS Code: `Ctrl+\``
- **Windows:** Press `Win+R`, type `cmd` or `powershell`, press Enter. Or in VS Code: `Ctrl+\``

### Essential commands

| Command | What it does | Example |
|---------|-------------|---------|
| `pwd` | Print working directory — shows where you are | `pwd` |
| `ls` (Mac) / `dir` (Windows) | List files in current directory | `ls` |
| `cd folder` | Change directory — move into a folder | `cd projects` |
| `cd ..` | Go up one level | `cd ..` |
| `mkdir name` | Make a new directory | `mkdir my-app` |
| `clear` | Clear the terminal screen | `clear` |

**Practice:** open your terminal and navigate to your Desktop:

```bash
cd ~/Desktop          # Mac
cd C:\Users\YourName\Desktop   # Windows
```

Then try `ls` (Mac) or `dir` (Windows) to see the files there.

---

## 7. Your first "Hello World"

A tradition as old as programming: the first thing you do in any new language is print "Hello, World!".

### JavaScript

Create a file called `hello.js` anywhere on your computer and put this in it:

```javascript
console.log("Hello, World!");
```

Run it in the terminal:

```bash
node hello.js
```

You should see: `Hello, World!`

### Python

Create a file called `hello.py` and put this in it:

```python
print("Hello, World!")
```

Run it:

```bash
python3 hello.py    # Mac/Linux
python hello.py     # Windows
```

You should see: `Hello, World!`

If both of those work, your machine is ready.

---

## 8. Troubleshooting common issues

### "command not found" after installing something

Close your terminal completely and reopen it. If that doesn't fix it, the tool didn't get added to your PATH. Ask a mentor.

### VS Code won't open or crashes

Try downloading again from the official site. Make sure you're installing the right version for your operating system (Mac/Windows, Intel/Apple Silicon for Mac).

### Git keeps asking for a password

You need to set up SSH keys or use a Personal Access Token. This is a bit fiddly — ask a mentor to help you set it up once and it won't bother you again.

### `npm install` gives errors about permissions (Mac)

Don't use `sudo` with npm. Instead, ask a mentor to help you fix your npm permissions — it's a one-time fix.

### Python and Python3 both exist and I'm confused

On most Macs, `python` is Python 2 (old, avoid) and `python3` is Python 3 (use this). Always use `python3` and `pip3` on Mac.

### Everything is broken and I want to give up

This happens to everyone, including people who've been coding for 20 years. Close the terminal, take a breath, and describe the exact error message to a mentor or paste it into Claude/ChatGPT. Nine times out of ten there's a simple fix.

---

## Checklist

Before moving on, make sure all of these work:

- [ ] VS Code opens and you can create a new file
- [ ] Prettier extension is installed and formatting on save is enabled
- [ ] `node --version` shows v18 or higher
- [ ] `npm --version` shows v9 or higher
- [ ] `python3 --version` (Mac) or `python --version` (Windows) shows Python 3.x
- [ ] `git --version` shows a version number
- [ ] Git is configured with your name and email
- [ ] You have a GitHub account and your email is verified
- [ ] `node hello.js` prints "Hello, World!"
- [ ] `python3 hello.py` prints "Hello, World!"

Once everything is ticked, move on to [03-working-as-a-team.md](./03-working-as-a-team.md).
