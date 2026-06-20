"""Chapter 2 — a bigram language model by counting.

The simplest possible language model: for every character we've seen,
remember the distribution of characters that *follow* it. To generate
text we pick a starting character, sample a next character from that
distribution, and repeat. No gradient descent, no neural network --
just counting and weighted random choice.

The output is gibberish, but it's *Shakespeare-flavoured* gibberish:
common letter pairs like 'th', 'he', 'in' show up much more often
than rare ones like 'qx'. That's the whole game -- everything we add
in later chapters is a more sophisticated way to learn this same kind
of conditional distribution.
"""

import random
from collections import Counter, defaultdict
from pathlib import Path

DATA = Path(__file__).resolve().parent.parent / "data" / "input.txt"


def main() -> None:
    text = DATA.read_text(encoding="utf-8")

    # counts[a][b] = how often character `b` follows character `a`.
    counts: dict[str, Counter[str]] = defaultdict(Counter)
    for a, b in zip(text, text[1:]):
        counts[a][b] += 1

    # Convert each Counter into (chars, weights) for random.choices().
    table: dict[str, tuple[list[str], list[int]]] = {
        a: (list(c.keys()), list(c.values())) for a, c in counts.items()
    }

    def sample_next(prev: str) -> str:
        chars, weights = table[prev]
        return random.choices(chars, weights=weights, k=1)[0]

    print("Top 5 followers of each common letter:")
    for letter in "Tthaeo ":
        top = counts[letter].most_common(5)
        pretty = ", ".join(f"{ch!r}:{n}" for ch, n in top)
        print(f"  {letter!r} -> {pretty}")

    random.seed(1337)
    out = ["H"]
    for _ in range(400):
        out.append(sample_next(out[-1]))
    print("\nGenerated sample (bigram counts only):")
    print("".join(out))


if __name__ == "__main__":
    main()
