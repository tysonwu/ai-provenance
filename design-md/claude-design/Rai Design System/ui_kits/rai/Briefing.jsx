function Briefing({ run, loading, error }) {
  return (
    <main style={{ flex: 1, overflowY: 'auto', padding: 24, minWidth: 0 }}>
      <div style={{
        background: 'var(--bg2)',
        padding: 16,
        boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--border) 85%, transparent)',
      }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.32px', textTransform: 'uppercase', color: 'var(--fg2)', marginBottom: 16 }}>
          Market Briefing
        </div>
        {loading ? (
          <p style={{ color: 'var(--fg2)', fontStyle: 'italic', textAlign: 'center', padding: '48px 0', fontSize: 13 }}>Loading…</p>
        ) : error ? (
          <p style={{ color: 'var(--err)', textAlign: 'center', padding: '48px 0', fontSize: 13 }}>Backend unreachable — {error}</p>
        ) : !run ? (
          <p style={{ color: 'var(--fg2)', fontStyle: 'italic', textAlign: 'center', padding: '48px 0', fontSize: 13 }}>
            No briefings yet — waiting for first agent run
          </p>
        ) : (
          <article style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--fg1)' }}>
            <h1 style={{ fontSize: 16, fontWeight: 600, margin: '8px 0' }}>{run.title}</h1>
            {run.sections.map((s, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <h2 style={{ fontSize: 14, fontWeight: 600, margin: '12px 0 6px' }}>{s.heading}</h2>
                <p style={{ margin: '4px 0', color: 'var(--fg1)' }}>{s.body}</p>
                {s.list && (
                  <ul style={{ margin: '4px 0', paddingLeft: 20 }}>
                    {s.list.map((l, j) => <li key={j} style={{ margin: '2px 0', fontSize: 13 }}>{l}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </article>
        )}
      </div>
    </main>
  );
}

window.Briefing = Briefing;
