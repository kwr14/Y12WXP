"""Chapter 4 — let each character look at the ones before it.

A bigram model can only see the *previous* character. That's why its
output reads like noise: it has no memory. Self-attention fixes this:
for each position in the sequence we compute a weighted average of
information from every *earlier* position. The weights are learned.

Mechanically:
  * Each token emits a `query`, a `key` and a `value` vector.
  * Attention weight from token `i` to token `j` = softmax(q_i . k_j).
  * A *causal mask* zeroes out the weights for `j > i` (no peeking ahead).
  * Each token's output is the weighted sum of the value vectors.

We keep this to a single head to keep the wiring obvious. Multi-head is
the next chapter.
"""

from pathlib import Path

import torch
import torch.nn as nn
import torch.nn.functional as F

torch.manual_seed(1337)
DATA = Path(__file__).resolve().parent.parent / "data" / "input.txt"

BATCH_SIZE = 32
BLOCK_SIZE = 32
N_EMBD = 64
TRAIN_STEPS = 3000
EVAL_EVERY = 500
LR = 3e-3


def load() -> tuple[torch.Tensor, dict[int, str], int]:
    text = DATA.read_text(encoding="utf-8")
    chars = sorted(set(text))
    stoi = {ch: i for i, ch in enumerate(chars)}
    itos = {i: ch for ch, i in stoi.items()}
    data = torch.tensor([stoi[c] for c in text], dtype=torch.long)
    return data, itos, len(chars)


def get_batch(data: torch.Tensor) -> tuple[torch.Tensor, torch.Tensor]:
    ix = torch.randint(0, len(data) - BLOCK_SIZE - 1, (BATCH_SIZE,))
    x = torch.stack([data[i:i + BLOCK_SIZE] for i in ix])
    y = torch.stack([data[i + 1:i + 1 + BLOCK_SIZE] for i in ix])
    return x, y


class SelfAttentionHead(nn.Module):
    def __init__(self, n_embd: int, head_size: int, block_size: int) -> None:
        super().__init__()
        self.key = nn.Linear(n_embd, head_size, bias=False)
        self.query = nn.Linear(n_embd, head_size, bias=False)
        self.value = nn.Linear(n_embd, head_size, bias=False)
        # tril is a constant lower-triangular mask: positions can only
        # attend to themselves and earlier ones.
        self.register_buffer("tril", torch.tril(torch.ones(block_size, block_size)))

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        B, T, C = x.shape
        k = self.key(x)       # (B, T, head_size)
        q = self.query(x)
        v = self.value(x)
        wei = q @ k.transpose(-2, -1) * k.size(-1) ** -0.5    # (B, T, T)
        wei = wei.masked_fill(self.tril[:T, :T] == 0, float("-inf"))
        wei = F.softmax(wei, dim=-1)
        return wei @ v        # (B, T, head_size)


class AttentionModel(nn.Module):
    def __init__(self, vocab_size: int) -> None:
        super().__init__()
        self.token_embedding = nn.Embedding(vocab_size, N_EMBD)
        self.position_embedding = nn.Embedding(BLOCK_SIZE, N_EMBD)
        self.head = SelfAttentionHead(N_EMBD, N_EMBD, BLOCK_SIZE)
        self.lm_head = nn.Linear(N_EMBD, vocab_size)

    def forward(self, idx: torch.Tensor, targets: torch.Tensor | None = None):
        B, T = idx.shape
        tok = self.token_embedding(idx)                                 # (B, T, C)
        pos = self.position_embedding(torch.arange(T, device=idx.device))
        x = tok + pos                                                   # broadcast over batch
        x = self.head(x)
        logits = self.lm_head(x)                                        # (B, T, vocab)
        if targets is None:
            return logits, None
        B, T, V = logits.shape
        loss = F.cross_entropy(logits.view(B * T, V), targets.view(B * T))
        return logits, loss

    @torch.no_grad()
    def generate(self, idx: torch.Tensor, max_new: int) -> torch.Tensor:
        for _ in range(max_new):
            idx_cond = idx[:, -BLOCK_SIZE:]
            logits, _ = self(idx_cond)
            probs = F.softmax(logits[:, -1, :], dim=-1)
            nxt = torch.multinomial(probs, num_samples=1)
            idx = torch.cat([idx, nxt], dim=1)
        return idx


def main() -> None:
    data, itos, vocab_size = load()
    model = AttentionModel(vocab_size)
    opt = torch.optim.AdamW(model.parameters(), lr=LR)

    for step in range(TRAIN_STEPS + 1):
        xb, yb = get_batch(data)
        _, loss = model(xb, yb)
        opt.zero_grad(set_to_none=True)
        loss.backward()
        opt.step()
        if step % EVAL_EVERY == 0:
            print(f"step {step:>4} | loss {loss.item():.4f}")

    seed = torch.zeros((1, 1), dtype=torch.long)
    out = model.generate(seed, max_new=400)[0].tolist()
    print("\nSample:")
    print("".join(itos[i] for i in out))


if __name__ == "__main__":
    main()
