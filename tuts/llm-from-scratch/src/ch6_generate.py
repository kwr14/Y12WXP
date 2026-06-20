"""Chapter 6 — controlling the model's voice with temperature and top-k.

Up to now we've sampled the next character straight from `softmax(logits)`.
Two simple knobs change the feel of the output drastically:

  * **Temperature.** Divide the logits by `T` before the softmax.
      - T < 1 sharpens the distribution -> conservative, repetitive text.
      - T = 1 leaves it unchanged.
      - T > 1 flattens it -> wilder, more "creative" (and more typo-y) text.
  * **Top-k.** Keep only the `k` highest-scoring next-tokens and renormalise.
    Eliminates the long tail of nonsense candidates that occasionally
    derail generation.

These same two knobs are exposed by every commercial LLM API.

We retrain the Chapter 5 architecture for a bit and then generate three
samples at different temperatures so you can see the effect.
"""

from pathlib import Path

import torch
import torch.nn.functional as F

from ch5_transformer import (
    BATCH_SIZE,
    BLOCK_SIZE,
    EVAL_EVERY,
    LR,
    MiniGPT,
    TRAIN_STEPS,
    get_batch,
    load,
)

torch.manual_seed(1337)


@torch.no_grad()
def generate(
    model: MiniGPT,
    idx: torch.Tensor,
    max_new: int,
    temperature: float = 1.0,
    top_k: int | None = None,
) -> torch.Tensor:
    for _ in range(max_new):
        idx_cond = idx[:, -BLOCK_SIZE:]
        logits, _ = model(idx_cond)
        logits = logits[:, -1, :] / max(temperature, 1e-8)
        if top_k is not None:
            v, _ = torch.topk(logits, min(top_k, logits.size(-1)))
            logits[logits < v[:, [-1]]] = float("-inf")
        probs = F.softmax(logits, dim=-1)
        nxt = torch.multinomial(probs, num_samples=1)
        idx = torch.cat([idx, nxt], dim=1)
    return idx


def sample(model: MiniGPT, itos: dict[int, str], *, temperature: float, top_k: int | None) -> str:
    seed = torch.zeros((1, 1), dtype=torch.long)
    out = generate(model, seed, max_new=300, temperature=temperature, top_k=top_k)[0].tolist()
    return "".join(itos[i] for i in out)


def main() -> None:
    data, itos, vocab_size = load()
    model = MiniGPT(vocab_size)
    opt = torch.optim.AdamW(model.parameters(), lr=LR)

    print("Training...")
    for step in range(TRAIN_STEPS + 1):
        xb, yb = get_batch(data)
        _, loss = model(xb, yb)
        opt.zero_grad(set_to_none=True)
        loss.backward()
        opt.step()
        if step % EVAL_EVERY == 0:
            print(f"step {step:>4} | loss {loss.item():.4f}")

    print("\n--- temperature 0.5 (focused) ---")
    print(sample(model, itos, temperature=0.5, top_k=None))

    print("\n--- temperature 1.0 (default) ---")
    print(sample(model, itos, temperature=1.0, top_k=None))

    print("\n--- temperature 1.0, top_k=10 (focused, low noise) ---")
    print(sample(model, itos, temperature=1.0, top_k=10))

    print("\n--- temperature 1.5 (wild) ---")
    print(sample(model, itos, temperature=1.5, top_k=None))


if __name__ == "__main__":
    main()
