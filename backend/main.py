from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI(
    title="Calculus Explainer API",
    description="Backend for the Calculus Explainer — maths calculations + Claude AI explanations",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from routers import math_router, ai_router, health_router

app.include_router(health_router.router)
app.include_router(math_router.router,   prefix="/api/math", tags=["math"])
app.include_router(ai_router.router,     prefix="/api/ai",   tags=["ai"])

@app.get("/")
async def root():
    return {"message": "Calculus Explainer API", "docs": "/docs"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
