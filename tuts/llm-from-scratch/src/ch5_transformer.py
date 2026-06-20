"""Chapter 5 — the full transformer block.

Four upgrades over Chapter 4:

  1. **Multi-head attention.** Run several attention heads in parallel
     so the model can attend to different patterns at once (one head
     might track punctuation, another the speaker name, etc.), then
     concatenate their outputs.
  2. **A feed-forward (MLP) sub-layer.** Attention moves information
     between positions; the MLP processes information *within* a
     position. You need both.
  3. **Residual connections.** Each sub-layer's output is added to its
     input. Gradients can flow around the layer, which makes training
     stable.
  4. **LayerNorm.** Normalise each position's vector before the
     sub-layer. Another stability trick.

Stack two of these blocks and you have, in miniature, the same
architecture as GPT.
"""

from pathlib import Path

import torch
import torch.nn as nn
import torch.nn.functional as F

torch.manual_seed(1337)
DATA = Path(__file__).resolve().parent.parent / "data" / "input.txt"

BATCH_SIZE = 32
BLOCK_SIZE = 64
N_EMBD = 96
N_HEAD = 4
N_LAYER = 2
TRAIN_STEPS = 3000
EVAL_EVERY = 500
LR = 3e-3
DROPOUT = 0.0


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


class Head(nn.Module):
    def __init__(self, head_size: int) -> None:
        super().__init__()
        self.key = nn.Linear(N_EMBD, head_size, bias=False)
        self.query = nn.Linear(N_EMBD, head_size, bias=False)
        self.value = nn.Linear(N_EMBD, head_size, bias=False)
        self.register_buffer("tril", torch.tril(torch.ones(BLOCK_SIZE, BLOCK_SIZE)))

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        B, T, C = x.shape
        k, q, v = self.key(x), self.query(x), self.value(x)
        wei = q @ k.transpose(-2, -1) * k.size(-1) ** -0.5
        wei = wei.masked_fill(self.tril[:T, :T] == 0, float("-inf"))
        wei = F.softmax(wei, dim=-1)
        return wei @ v


class MultiHead(nn.Module):
    def __init__(self, n_head: int, head_size: int) -> None:
        super().__init__()
        self.heads = nn.ModuleList([Head(head_size) for _ in range(n_head)])
        self.proj = nn.Linear(n_head * head_size, N_EMBD)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.proj(torch.cat([h(x) for h in self.heads], dim=-1))


class FeedForward(nn.Module):
    def __init__(self, n_embd: int) -> None:
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(n_embd, 4 * n_embd),
            nn.ReLU(),
            nn.Linear(4 * n_embd, n_embd),
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.net(x)


class Block(nn.Module):
    def __init__(self, n_embd: int, n_head: int) -> None:
        super().__init__()
        head_size = n_embd // n_head
        self.sa = MultiHead(n_head, head_size)
        self.ff = FeedForward(n_embd)
        self.ln1 = nn.LayerNorm(n_embd)
        self.ln2 = nn.LayerNorm(n_embd)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        x = x + self.sa(self.ln1(x))   # residual around attention
        x = x + self.ff(self.ln2(x))   # residual around MLP
        return x


class MiniGPT(nn.Module):
    def __init__(self, vocab_size: int) -> None:
        super().__init__()
        self.token_embedding = nn.Embedding(vocab_size, N_EMBD)
        self.position_embedding = nn.Embedding(BLOCK_SIZE, N_EMBD)
        self.blocks = nn.Sequential(*[Block(N_EMBD, N_HEAD) for _ in range(N_LAYER)])
        self.ln_f = nn.LayerNorm(N_EMBD)
        self.lm_head = nn.Linear(N_EMBD, vocab_size)

    def forward(self, idx: torch.Tensor, targets: torch.Tensor | None = None):
        B, T = idx.shape
        tok = self.token_embedding(idx)
        pos = self.position_embedding(torch.arange(T, device=idx.device))
        x = self.blocks(tok + pos)
        x = self.ln_f(x)
        logits = self.lm_head(x)
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
    model = MiniGPT(vocab_size)
    n_params = sum(p.numel() for p in model.parameters())
    print(f"model parameters: {n_params:,}")
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
    out = model.generate(seed, max_new=500)[0].tolist()
    print("\nSample:")
    print("".join(itos[i] for i in out))


if __name__ == "__main__":
    main()
