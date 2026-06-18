import React, { useState, useCallback } from 'react'
import DerivativeScene from './components/DerivativeScene'
import IntegralScene from './components/IntegralScene'
import LimitScene from './components/LimitScene'
import ControlPanel from './components/ControlPanel'
import ExplanationPanel from './components/ExplanationPanel'
import './App.css'

const MODES = [
  { id: 'derivative', label: "Derivative", icon: "d/dx" },
  { id: 'integral',   label: "Integral",   icon: "∫"    },
  { id: 'limit',      label: "Limit",      icon: "lim"  },
]

const PRESETS = {
  derivative: [
    { label: 'sin(x)',      fn: 'sin(x)'      },
    { label: 'x²',         fn: 'x^2'         },
    { label: 'x³ − 2x',   fn: 'x^3 - 2*x'  },
    { label: 'cos(x)',     fn: 'cos(x)'      },
    { label: 'eˣ',        fn: 'exp(x)'      },
  ],
  integral: [
    { label: 'sin(x)',      fn: 'sin(x)'      },
    { label: 'x²',         fn: 'x^2'         },
    { label: '√x',        fn: 'sqrt(x)'     },
    { label: 'cos(x)',     fn: 'cos(x)'      },
    { label: '1/x',       fn: '1/x'         },
  ],
  limit: [
    { label: 'sin(x)/x',   fn: 'sin(x)/x',  point: 0  },
    { label: '(x²−1)/(x−1)', fn: '(x^2-1)/(x-1)', point: 1 },
    { label: '1/x (→∞)',  fn: '1/x',        point: 0  },
  ],
}

function App() {
  const [mode, setMode]               = useState('derivative')
  const [fnString, setFnString]       = useState('sin(x)')
  const [xValue, setXValue]           = useState(1.0)
  const [lowerBound, setLowerBound]   = useState(0)
  const [upperBound, setUpperBound]   = useState(Math.PI)
  const [limitPoint, setLimitPoint]   = useState(0)
  const [explanation, setExplanation] = useState('')
  const [loadingExpl, setLoadingExpl] = useState(false)
  const [mathResult, setMathResult]   = useState(null)

  const handleModeChange = useCallback((newMode) => {
    setMode(newMode)
    setFnString(PRESETS[newMode][0].fn)
    setExplanation('')
    setMathResult(null)
  }, [])

  const handlePreset = useCallback((preset) => {
    setFnString(preset.fn)
    if (preset.point !== undefined) setLimitPoint(preset.point)
    setExplanation('')
    setMathResult(null)
  }, [])

  const handleExplain = useCallback(async () => {
    setLoadingExpl(true)
    setExplanation('')
    try {
      const res = await fetch('/api/ai/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode,
          function: fnString,
          x: xValue,
          lower: lowerBound,
          upper: upperBound,
          point: limitPoint,
          result: mathResult,
        }),
      })
      const data = await res.json()
      setExplanation(data.explanation || data.error || 'No explanation returned.')
    } catch (e) {
      setExplanation('Could not reach the AI backend. Make sure the backend is running on port 8000.')
    } finally {
      setLoadingExpl(false)
    }
  }, [mode, fnString, xValue, lowerBound, upperBound, limitPoint, mathResult])

  return (
    <div className="app-layout">
      {/* ── Header ── */}
      <header className="app-header">
        <div className="header-left">
          <span className="logo">∂</span>
          <div>
            <h1>Calculus Explainer</h1>
            <p>Interactive 3D visualiser for A-level students</p>
          </div>
        </div>
        <nav className="mode-tabs">
          {MODES.map(m => (
            <button
              key={m.id}
              className={`mode-tab ${mode === m.id ? 'active' : ''}`}
              onClick={() => handleModeChange(m.id)}
            >
              <span className="mode-icon">{m.icon}</span>
              {m.label}
            </button>
          ))}
        </nav>
      </header>

      {/* ── Body ── */}
      <div className="app-body">
        {/* Left panel */}
        <ControlPanel
          mode={mode}
          fnString={fnString}
          setFnString={setFnString}
          xValue={xValue}
          setXValue={setXValue}
          lowerBound={lowerBound}
          setLowerBound={setLowerBound}
          upperBound={upperBound}
          setUpperBound={setUpperBound}
          limitPoint={limitPoint}
          setLimitPoint={setLimitPoint}
          presets={PRESETS[mode]}
          onPreset={handlePreset}
          onExplain={handleExplain}
          loadingExpl={loadingExpl}
          mathResult={mathResult}
          setMathResult={setMathResult}
        />

        {/* 3D Scene */}
        <main className="scene-container">
          {mode === 'derivative' && (
            <DerivativeScene
              fnString={fnString}
              xValue={xValue}
              onResult={setMathResult}
            />
          )}
          {mode === 'integral' && (
            <IntegralScene
              fnString={fnString}
              lowerBound={lowerBound}
              upperBound={upperBound}
              onResult={setMathResult}
            />
          )}
          {mode === 'limit' && (
            <LimitScene
              fnString={fnString}
              limitPoint={limitPoint}
              onResult={setMathResult}
            />
          )}
        </main>

        {/* Right panel */}
        <ExplanationPanel
          mode={mode}
          explanation={explanation}
          loading={loadingExpl}
          mathResult={mathResult}
          fnString={fnString}
          xValue={xValue}
          lowerBound={lowerBound}
          upperBound={upperBound}
          onExplain={handleExplain}
        />
      </div>
    </div>
  )
}

export default App
