import { useState } from 'react'

export default function App() {
  const [prUrl, setPrUrl] = useState('')
  const [report, setReport] = useState(null)
  const [loading, setLoading] = useState(false)

  const analyzeCode = async () => {
    if (!prUrl) return
    setLoading(true)
    
    try {
      const res = await fetch('http://localhost:5000/api/manual-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pr_url: prUrl })
      })
      const data = await res.json()
      setReport(data.analysis)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#1f2937' }}>🔍 CodeReviewX Control Panel</h1>
      <p style={{ color: '#4b5563', marginBottom: '2rem' }}>
        Paste a GitHub Pull Request URL to trigger an instant LLM static and semantic analysis.
      </p>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <input 
          type="text" 
          placeholder="https://github.com/your-username/repo/pull/1" 
          value={prUrl}
          onChange={(e) => setPrUrl(e.target.value)}
          style={{ flex: 1, padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db' }}
        />
        <button 
          onClick={analyzeCode}
          disabled={loading}
          style={{ padding: '0.75rem 1.5rem', backgroundColor: loading ? '#9ca3af' : '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
        >
          {loading ? 'Analyzing PR...' : 'Run Analysis'}
        </button>
      </div>

      {report && (
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#ef4444', marginTop: 0 }}>Security Issues</h2>
          <ul>{report.security_issues.map((issue, i) => <li key={i}>{issue}</li>)}</ul>

          <h2 style={{ color: '#f59e0b' }}>Performance Bottlenecks</h2>
          <ul>{report.performance.map((issue, i) => <li key={i}>{issue}</li>)}</ul>

          <h2 style={{ color: '#3b82f6' }}>Clean Code Suggestions</h2>
          <ul>{report.suggestions.map((issue, i) => <li key={i}>{issue}</li>)}</ul>
        </div>
      )}
    </div>
  )
}
