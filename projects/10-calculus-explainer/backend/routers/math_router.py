from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
import sympy as sp
import numpy as np

router = APIRouter()

# ── Request models ───────────────────────────────────────────────────────────

class DerivativeRequest(BaseModel):
    function: str
    x: Optional[float] = None

class IntegralRequest(BaseModel):
    function: str
    bounds: Optional[dict] = None   # {"lower": a, "upper": b}

class EvaluateRequest(BaseModel):
    function: str
    x: float

# ── Helpers ──────────────────────────────────────────────────────────────────

def _parse(expr: str):
    """Parse a function string safely via SymPy."""
    # Replace common JS-style maths with SymPy equivalents
    replacements = {
        "Math.sin": "sin", "Math.cos": "cos", "Math.tan": "tan",
        "Math.exp": "exp", "Math.log": "log", "Math.sqrt": "sqrt",
        "Math.abs": "Abs",  "^": "**",
    }
    for old, new in replacements.items():
        expr = expr.replace(old, new)
    x = sp.Symbol("x")
    return sp.sympify(expr, locals={"x": x}), x

# ── Routes ───────────────────────────────────────────────────────────────────

@router.post("/derivative")
async def calculate_derivative(req: DerivativeRequest):
    """Symbolic derivative; optionally evaluate at a point."""
    try:
        func, x = _parse(req.function)
        deriv = sp.diff(func, x)
        result = {"function": req.function, "derivative": str(deriv)}
        if req.x is not None:
            val = float(deriv.subs(x, req.x).evalf())
            result["value_at_x"] = val
            result["x"] = req.x
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/integral")
async def calculate_integral(req: IntegralRequest):
    """Symbolic definite or indefinite integral."""
    try:
        func, x = _parse(req.function)
        if req.bounds:
            a = float(req.bounds.get("lower", 0))
            b = float(req.bounds.get("upper", 1))
            result_sym = sp.integrate(func, (x, a, b))
            return {
                "function": req.function,
                "integral": str(result_sym),
                "value": float(result_sym.evalf()),
                "bounds": {"lower": a, "upper": b},
            }
        else:
            indef = sp.integrate(func, x)
            return {"function": req.function, "indefinite_integral": str(indef)}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/evaluate")
async def evaluate_function(req: EvaluateRequest):
    """Evaluate f(x) at a given x."""
    try:
        func, x = _parse(req.function)
        val = float(func.subs(x, req.x).evalf())
        return {"function": req.function, "x": req.x, "value": val}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
