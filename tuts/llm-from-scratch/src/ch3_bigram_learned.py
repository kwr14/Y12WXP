"""Chapter 3 — same bigram model, but *learned* with PyTorch.

Same idea as Chapter 2 (predict the next character from the current one),
but now the lookup table is a `nn.Embedding` whose rows are *learned*
by gradient descent instead of filled in by counting.

That seems like a step sideways. The payoff is that the model is now a
differentiable function: we'll bolt attention and feed-forward layers
onto it in the next two chapters without changing the training loop.
"""

from pathlib import Path

import torch
import torch.nn as nn
import torch.nn.functional as F

torch.manual_seed(1337)
DATA = Path(__file__).resolve().parent.parent / "data" / "input.txt"

BATCH_SIZE = 32
BLOCK_SIZE = 8       # how many characters of context we feed at once
TRAIN_STEPS = 3000
EVAL_EVERY = 500
LR = 1e-2


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


class BigramModel(nn.Module):
    def __init__(self, vocab_size: int) -> None:
        super().__init__()
        # Row `i` is the (unnormalised) next-char distribution given char `i`.
        self.token_embedding = nn.Embedding(vocab_size, vocab_size)

    def forward(self, idx: torch.Tensor, targets: torch.Tensor | None = None):
        logits = self.token_embedding(idx)              # (B, T, vocab)
        if targets is None:
            return logits, None
        B, T, V = logits.shape
        loss = F.cross_entropy(logits.view(B * T, V), targets.view(B * T))
        return logits, loss

    @torch.no_grad()
    def generate(self, idx: torch.Tensor, max_new: int) -> torch.Tensor:
        for _ in range(max_new):
            logits, _ = self(idx)
            probs = F.softmax(logits[:, -1, :], dim=-1)
            nxt = torch.multinomial(probs, num_samples=1)
            idx = torch.cat([idx, nxt], dim=1)
        return idx


def main() -> None:
    data, itos, vocab_size = load()
    model = BigramModel(vocab_size)
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
    out = model.generate(seed, max_new=300)[0].tolist()
    print("\nSample:")
    print("".join(itos[i] for i in out))


if __name__ == "__main__":
    main()
