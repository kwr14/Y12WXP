# LLM from scratch

A six-chapter, ~400-line walk from a character vocabulary to a working
character-level transformer that generates Shakespeare-flavoured text.

The companion HTML guide is `tuts/llm-from-scratch-tutorial.html`. Open it
in a browser and read it side-by-side with the code in `src/`.

## Setup

You need [`uv`](https://docs.astral.sh/uv/) (1-line install on macOS:
`brew install uv`).

```bash
cd tuts/llm-from-scratch
uv sync          # creates .venv and installs torch
```

## Run a chapter

```bash
uv run src/ch1_vocab.py
uv run src/ch2_bigram_counts.py
uv run src/ch3_bigram_learned.py
uv run src/ch4_attention.py
uv run src/ch5_transformer.py
uv run src/ch6_generate.py
```

Chapters 3–6 train tiny models on CPU; each takes well under a minute.

## What each chapter adds

| # | File | New idea |
|---|------|----------|
| 1 | `ch1_vocab.py` | Characters → integers and back |
| 2 | `ch2_bigram_counts.py` | Probability tables, sampling |
| 3 | `ch3_bigram_learned.py` | Learnable embeddings, cross-entropy, AdamW |
| 4 | `ch4_attention.py` | Causal self-attention |
| 5 | `ch5_transformer.py` | Multi-head attention, MLP, residuals, LayerNorm |
| 6 | `ch6_generate.py` | Temperature & top-k sampling |

The data lives in `data/input.txt` — a short public-domain Shakespeare
excerpt. Swap it for any other UTF-8 text file to retrain on something else.
