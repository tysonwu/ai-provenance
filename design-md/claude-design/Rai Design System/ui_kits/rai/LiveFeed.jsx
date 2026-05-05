function LiveFeed({ events, active, error }) {
  if (events.length === 0 && !error && !active) return null;
  return (
    <div style={{
      marginBottom: 16,
      background: 'var(--cds-layer-01)',
      boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--border) 85%, transparent)',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '8px 12px',
        background: 'var(--cds-layer-01)',
        boxShadow: 'inset 0 -1px 0 color-mix(in srgb, var(--border) 85%, transparent)',
      }}>
        <span style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.32px', color: 'var(--fg2)' }}>
          {active ? '▼' : '▶'} Live run
        </span>
        {active && <span className="rai-pulse" style={{ fontSize: 10, color: 'var(--accent)' }}>streaming</span>}
      </div>
      <div style={{
        maxHeight: 224, overflowY: 'auto',
        padding: 8, display: 'flex', flexDirection: 'column', gap: 6,
        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16px',
      }}>
        {error && <div style={{ color: 'var(--err)', padding: '0 4px' }}>{error}</div>}
        {active && events.length === 0 && !error && <div className="rai-pulse" style={{ color: 'var(--fg2)', fontStyle: 'italic', padding: '0 4px' }}>Starting…</div>}
        {events.map((ev, i) => <FeedRow key={i} ev={ev} last={active && i === events.length - 1} />)}
      </div>
    </div>
  );
}

function FeedRow({ ev, last }) {
  if (ev.type === 'iteration') {
    return (
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', color: 'var(--fg2)', borderLeft: '2px solid var(--accent)', paddingLeft: 8, paddingTop: 2, paddingBottom: 2 }}>
        <span style={{ color: 'var(--accent)' }}>●</span>
        Round {ev.iteration}
      </div>
    );
  }
  if (ev.type === 'llm') {
    return (
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', color: 'var(--accent)', paddingLeft: 8, paddingTop: 2, paddingBottom: 2 }}>
        <span className="rai-pulse" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
        Claude…
      </div>
    );
  }
  if (ev.type === 'tool_start') {
    return (
      <div style={{ background: 'color-mix(in srgb, var(--cds-layer-01-hover) 55%, transparent)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 8px' }}>
          <span style={{ color: 'var(--fg2)' }}>⎘</span>
          <span style={{ color: 'var(--fg1)' }}>{ev.toolName}</span>
          {last && <span className="rai-shimmer" style={{ marginLeft: 'auto', height: 8, width: 48 }} />}
        </div>
        {ev.preview && (
          <pre style={{
            margin: 0, padding: '4px 8px', fontSize: 10, color: 'var(--fg2)',
            background: 'color-mix(in srgb, var(--bg3) 25%, transparent)',
            boxShadow: 'inset 0 1px 0 color-mix(in srgb, var(--border) 85%, transparent)',
            whiteSpace: 'pre-wrap', overflow: 'hidden', maxHeight: 64,
          }}>{ev.preview}</pre>
        )}
      </div>
    );
  }
  if (ev.type === 'tool_done') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 8, paddingTop: 2, paddingBottom: 2, color: ev.ok ? 'var(--ok)' : 'var(--err)' }}>
        <span>{ev.ok ? '✓' : '✗'}</span>
        <span>{ev.toolName}</span>
        {ev.bytes != null && <span style={{ marginLeft: 'auto', color: 'var(--fg2)', fontVariantNumeric: 'tabular-nums' }}>{ev.bytes} B</span>}
      </div>
    );
  }
  if (ev.type === 'complete') {
    return (
      <div style={{ color: 'var(--ok)', background: 'color-mix(in srgb, var(--bg3) 45%, transparent)', padding: '6px 8px' }}>
        Briefing ready · {ev.toolCount} tools · {ev.duration}
      </div>
    );
  }
  return null;
}

window.LiveFeed = LiveFeed;
