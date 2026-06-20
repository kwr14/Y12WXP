"""Chapter 1 — turning characters into numbers.

A language model can't read text directly. We first have to give every
character a unique integer ID, then we can shovel those IDs into a model.
This chapter builds a *character-level vocabulary* and the encode/decode
pair that maps strings <-> lists of ints.
"""

from pathlib import Path

DATA = Path(__file__).resolve().parent.parent / "data" / "input.txt"


def main() -> None:
    text = DATA.read_text(encoding="utf-8")

    # The vocabulary is just every unique character that appears, sorted
    # so the mapping is deterministic between runs.
    chars = sorted(set(text))
    vocab_size = len(chars)

    stoi = {ch: i for i, ch in enumerate(chars)}
    itos = {i: ch for ch, i in stoi.items()}

    def encode(s: str) -> list[int]:
        return [stoi[c] for c in s]

    def decode(ids: list[int]) -> str:
        return "".join(itos[i] for i in ids)

    print(f"corpus length : {len(text):,} characters")
    print(f"vocabulary    : {vocab_size} unique characters")
    print(f"first 30 chars: {chars[:30]!r}")

    sample = "To be, or not to be"
    ids = encode(sample)
    print(f"\nencode({sample!r})")
    print(f"  -> {ids}")
    print(f"decode(...)")
    print(f"  -> {decode(ids)!r}")


if __name__ == "__main__":
    main()
