from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional
import os
import anthropic

router = APIRouter()

# Initialise client — reads ANTHROPIC_API_KEY from environment
_client = None

def get_client():
    global _client
    if _client is None:
        _client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
    return _client


class ExplainRequest(BaseModel):
    mode: str                        # "derivative" | "integral" | "limit"
    function: str
    x: Optional[float] = None
    lower: Optional[float] = None
    upper: Optional[float] = None
    point: Optional[float] = None
    result: Optional[dict] = None    # numeric result from scene


SYSTEM_PROMPT = (
    "You are a friendly, enthusiastic A-level maths tutor. "
    "Explain calculus concepts clearly and concisely in 3-5 sentences. "
    "Use everyday analogies where helpful. Avoid excessive jargon. "
    "Relate your explanation to the specific function and values provided."
)


def _build_prompt(req: ExplainRequest) -> str:
    fn = req.function
    if req.mode == "derivative":
        pt = req.x if req.x is not None else "a point"
        slope = req.result.get("slope") if req.result else None
        return (
            f"The student is looking at the derivative of f(x) = {fn} at x = {pt}. "
            + (f"The slope of the tangent line there is approximately {slope:.4f}. " if slope else "")
            + "Explain what this derivative means intuitively."
        )
    elif req.mode == "integral":
        a = req.lower if req.lower is not None else "a"
        b = req.upper if req.upper is not None else "b"
        area = req.result.get("area") if req.result else None
        return (
            f"The student is visualising the definite integral of f(x) = {fn} from x = {a} to x = {b}. "
            + (f"The area is approximately {area:.4f}. " if area else "")
            + "Explain what this integral represents and why it equals the area under the curve."
        )
    else:  # limit
        pt = req.point if req.point is not None else "c"
        est = req.result.get("estimate") if req.result else None
        return (
            f"The student is exploring the limit of f(x) = {fn} as x approaches {pt}. "
            + (f"The limit appears to be approximately {est:.4f}. " if est else "")
            + "Explain what a limit means and why this value makes sense."
        )


@router.post("/explain")
async def explain(req: ExplainRequest):
    try:
        prompt = _build_prompt(req)
        message = get_client().messages.create(
            model="claude-haiku-4-5-20251001",
            max_tokens=400,
            system=SYSTEM_PROMPT,
            messages=[{"role": "user", "content": prompt}],
        )
        return {"explanation": message.content[0].text}
    except Exception as e:
        return {"error": str(e), "explanation": f"[AI unavailable: {e}]"}
