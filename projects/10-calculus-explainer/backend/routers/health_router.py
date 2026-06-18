from fastapi import APIRouter
import os

router = APIRouter(tags=["health"])

@router.get("/health")
async def health():
    return {
        "status": "ok",
        "service": "Calculus Explainer API",
        "ai_key_set": bool(os.getenv("ANTHROPIC_API_KEY")),
    }
