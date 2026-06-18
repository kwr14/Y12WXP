import React from 'react'
import './ExplanationPanel.css'

const MODE_INFO = {
  derivative: {
    title: 'Derivatives',
    colour: 'var(--accent-cyan)',
    intro: 'The derivative f ′(x) gives the instantaneous rate of change — i.e. the slope of the tangent line at any point.',
    tip: 'Move the slider to see how the tangent line changes along the curve.',
  },
  integral: {
    title: 'Integrals',
    colour: 'var(--accent-blue)',
    intro: 'The definite integral ∫ₐᵇ f(x) dx measures the signed area between the curve and the x-axis from a to b.',
    tip: 'Adjust the bounds to see how the shaded area changes.',
  },
  limit: {
    title: 'Limits',
    colour: 'var(--accent-purple)',
    intro: 'lim (x→c) f(x) describes the value f approaches as x gets arbitrarily close to c, even if f(c) is undefined.',
    tip: 'Purple dots approach from the left; orange from the right.',
  },
}

export default function ExplanationPanel({
  mode, explanation, loading, mathResult, fnString,
  xValue, lowerBound, upperBound, onExplain,
}) {
  const info = MODE_INFO[mode]

  return (
    <aside className="explanation-panel">
      <div className="ep-header" style={{ borderColor: info.colour }}>
        <h3 style={{ color: info.colour }}>{info.title}</h3>
      </div>

      <div className="ep-body">
        <p className="ep-intro">{info.intro}</p>

        {mathResult && (
          <div className="ep-result-card">
            {mathResult.type === 'derivative' && (
              <>
                <div className="ep-result-row">
                  <span>Point</span>
                  <code>x = {mathResult.x?.toFixed(4)}</code>
                </div>
                <div className="ep-result-row">
                  <span>Slope</span>
                  <code>f ′(x) = {mathResult.slope?.toFixed(4)}</code>
                </div>
                {mathResult.derivative && (
                  <div className="ep-result-row">
                    <span>Formula</span>
                    <code>f ′ = {mathResult.derivative}</code>
                  </div>
                )}
              </>
            )}
            {mathResult.type === 'integral' && (
              <>
                <div className="ep-result-row">
                  <span>Bounds</span>
                  <code>[{mathResult.lower?.toFixed(2)}, {mathResult.upper?.toFixed(2)}]</code>
                </div>
                <div className="ep-result-row">
                  <span>Area</span>
                  <code>∫ = {(mathResult.area ?? mathResult.value)?.toFixed(6)}</code>
                </div>
              </>
            )}
            {mathResult.type === 'limit' && (
              <>
                <div className="ep-result-row">
                  <span>Point</span>
                  <code>c = {mathResult.point}</code>
                </div>
                <div className="ep-result-row">
                  <span>Estimate</span>
                  <code>≈ {mathResult.estimate?.toFixed(6)}</code>
                </div>
              </>
            )}
          </div>
        )}

        <div className="ep-tip">{info.tip}</div>

        {loading && (
          <div className="ep-loading">
            <div className="ep-spinner" />
            Claude is thinking…
          </div>
        )}

        {explanation && !loading && (
          <div className="ep-ai-block">
            <div className="ep-ai-header">
              <span className="ep-ai-badge">✨ Claude</span>
            </div>
            <p className="ep-ai-text">{explanation}</p>
          </div>
        )}

        {!explanation && !loading && (
          <button className="ep-ask-btn" onClick={onExplain}>
            Ask Claude to explain this →
          </button>
        )}
      </div>
    </aside>
  )
}
