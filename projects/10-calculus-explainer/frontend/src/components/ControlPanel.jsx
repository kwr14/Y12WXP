import React, { useEffect, useState } from 'react'
import './ControlPanel.css'
import { api } from '../api/client'

export default function ControlPanel({
  mode, fnString, setFnString,
  xValue, setXValue,
  lowerBound, setLowerBound,
  upperBound, setUpperBound,
  limitPoint, setLimitPoint,
  presets, onPreset,
  onExplain, loadingExpl,
  mathResult, setMathResult,
}) {
  const [backendResult, setBackendResult] = useState(null)
  const [fetching, setFetching] = useState(false)

  const fetchMath = async () => {
    setFetching(true)
    try {
      let data
      if (mode === 'derivative') {
        data = await api.calculateDerivative(fnString, xValue)
        setMathResult({ type: 'derivative', ...data.data })
        setBackendResult(data.data)
      } else if (mode === 'integral') {
        data = await api.calculateIntegral(fnString, lowerBound, upperBound)
        setMathResult({ type: 'integral', ...data.data })
        setBackendResult(data.data)
      }
    } catch {
      setBackendResult(null)
    } finally {
      setFetching(false)
    }
  }

  return (
    <aside className="control-panel">
      <section className="cp-section">
        <h3 className="cp-title">Function</h3>
        <input
          className="fn-input"
          value={fnString}
          onChange={e => setFnString(e.target.value)}
          placeholder="e.g. sin(x), x^2, exp(x)"
          spellCheck={false}
        />
        <div className="presets">
          {presets.map(p => (
            <button key={p.fn} className="preset-btn" onClick={() => onPreset(p)}>
              {p.label}
            </button>
          ))}
        </div>
      </section>

      {mode === 'derivative' && (
        <section className="cp-section">
          <h3 className="cp-title">Point  x = {xValue.toFixed(2)}</h3>
          <input
            type="range" min={-5} max={5} step={0.05}
            value={xValue}
            onChange={e => setXValue(parseFloat(e.target.value))}
            className="slider"
          />
        </section>
      )}

      {mode === 'integral' && (
        <section className="cp-section">
          <h3 className="cp-title">Bounds</h3>
          <label className="slider-label">Lower  a = {parseFloat(lowerBound).toFixed(2)}</label>
          <input
            type="range" min={-6} max={6} step={0.1}
            value={lowerBound}
            onChange={e => setLowerBound(parseFloat(e.target.value))}
            className="slider"
          />
          <label className="slider-label">Upper  b = {parseFloat(upperBound).toFixed(2)}</label>
          <input
            type="range" min={-6} max={6} step={0.1}
            value={upperBound}
            onChange={e => setUpperBound(parseFloat(e.target.value))}
            className="slider"
          />
        </section>
      )}

      {mode === 'limit' && (
        <section className="cp-section">
          <h3 className="cp-title">Limit point  c = {parseFloat(limitPoint).toFixed(2)}</h3>
          <input
            type="range" min={-5} max={5} step={0.1}
            value={limitPoint}
            onChange={e => setLimitPoint(parseFloat(e.target.value))}
            className="slider"
          />
        </section>
      )}

      {mode !== 'limit' && (
        <section className="cp-section">
          <button className="calc-btn" onClick={fetchMath} disabled={fetching}>
            {fetching ? 'Calculating…' : '🔢 Calculate (exact)'}
          </button>
          {backendResult && (
            <div className="backend-result">
              {backendResult.derivative && <div>f ′(x) = <code>{backendResult.derivative}</code></div>}
              {backendResult.value_at_x !== undefined && (
                <div>f ′({xValue}) = <strong>{backendResult.value_at_x?.toFixed(6)}</strong></div>
              )}
              {backendResult.value !== undefined && (
                <div>∫ = <strong>{backendResult.value?.toFixed(6)}</strong></div>
              )}
            </div>
          )}
        </section>
      )}

      <section className="cp-section">
        <button className="explain-btn" onClick={onExplain} disabled={loadingExpl}>
          {loadingExpl ? '✨ Asking Claude…' : '✨ Explain with AI'}
        </button>
      </section>
    </aside>
  )
}
