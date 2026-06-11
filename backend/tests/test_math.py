import pytest
from fastapi.testclient import TestClient
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from main import app

client = TestClient(app)


def test_health():
    r = client.get("/health")
    assert r.status_code == 200
    assert r.json()["status"] == "ok"


def test_derivative_sin():
    r = client.post("/api/math/derivative", json={"function": "sin(x)", "x": 0})
    assert r.status_code == 200
    data = r.json()
    assert "derivative" in data
    assert abs(data["value_at_x"] - 1.0) < 1e-6   # cos(0) = 1


def test_derivative_poly():
    r = client.post("/api/math/derivative", json={"function": "x**2", "x": 3})
    assert r.status_code == 200
    assert abs(r.json()["value_at_x"] - 6.0) < 1e-6   # 2x at x=3 = 6


def test_integral_sin():
    r = client.post("/api/math/integral", json={
        "function": "sin(x)",
        "bounds": {"lower": 0, "upper": 3.141592653589793}
    })
    assert r.status_code == 200
    assert abs(r.json()["value"] - 2.0) < 1e-4   # ∫₀^π sin(x) = 2


def test_integral_poly():
    r = client.post("/api/math/integral", json={
        "function": "x**2",
        "bounds": {"lower": 0, "upper": 3}
    })
    assert r.status_code == 200
    assert abs(r.json()["value"] - 9.0) < 1e-4   # ∫₀³ x² = 9


def test_evaluate():
    r = client.post("/api/math/evaluate", json={"function": "x**2 + 1", "x": 4})
    assert r.status_code == 200
    assert abs(r.json()["value"] - 17.0) < 1e-6
