function StatsPanel({ run }) {
  const rows = [
    ['Model', run.model],
    ['Duration', run.duration],
    ['Tool calls', run.toolCalls.length, 'accent'],
    ['Tokens in', run.tokensIn.toLocaleString()],
    ['Tokens out', run.tokensOut.toLocaleString()],
    ['Run ID', run.id, 'mono'],
  ];
  return (
    <>
      <UpperLabel>Run Stats</UpperLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13 }}>
        {rows.map(([k, v, variant]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--fg2)' }}>{k}</span>
            <span style={{
              color: variant === 'accent' ? 'var(--accent)' : 'var(--fg1)',
              fontWeight: variant === 'accent' ? 600 : 500,
              fontVariantNumeric: 'tabular-nums',
              fontFamily: variant === 'mono' ? 'var(--font-mono)' : undefined,
            }}>{v}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function ToolCallLog({ calls }) {
  const [open, setOpen] = React.useState(new Set());
  const toggle = (i) => {
    const n = new Set(open);
    n.has(i) ? n.delete(i) : n.add(i);
    setOpen(n);
  };
  if (!calls.length) return <p style={{ fontSize: 13, color: 'var(--fg2)', fontStyle: 'italic' }}>No tool calls</p>;
  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, display: 'flex', flexDirection: 'column', gap: 2 }}>
      {calls.map((c, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              style={{ background: 'transparent', border: 0, padding: '4px', color: 'var(--fg1)', cursor: 'pointer', display: 'flex', gap: 8, alignItems: 'center', width: '100%', textAlign: 'left', fontFamily: 'inherit', fontSize: 'inherit' }}
            >
              <span style={{ color: 'var(--accent)' }}>{i + 1}</span>
              <span>{c.name}</span>
              <span style={{ marginLeft: 'auto', color: 'var(--fg2)', opacity: isOpen ? 1 : 0.35 }}>{isOpen ? '▼' : '▶'}</span>
            </button>
            {isOpen && (
              <pre style={{
                marginLeft: 20, marginTop: 4, padding: 8,
                background: 'var(--cds-field)', fontSize: 11, color: 'var(--fg2)',
                whiteSpace: 'pre-wrap', border: '1px solid color-mix(in srgb, var(--border) 70%, transparent)',
              }}>{JSON.stringify(c.input, null, 2)}</pre>
            )}
          </div>
        );
      })}
    </div>
  );
}

function HistoryList({ runs, selectedId, onSelect }) {
  if (!runs.length) return <p style={{ fontSize: 13, color: 'var(--fg2)', fontStyle: 'italic' }}>No history</p>;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {runs.map((r) => {
        const sel = r.id === selectedId;
        return (
          <button
            key={r.id}
            onClick={() => onSelect(r)}
            style={{
              display: 'flex', gap: 8, alignItems: 'center', padding: 8, fontSize: 12, cursor: 'pointer',
              background: 'var(--cds-layer-01-hover)',
              border: `1px solid ${sel ? 'var(--accent)' : 'transparent'}`,
              borderRadius: 0,
              fontFamily: 'var(--font-mono)', textAlign: 'left', color: 'var(--fg2)', letterSpacing: '0.16px',
            }}
          >
            <span style={{ color: sel ? 'var(--accent)' : 'var(--fg2)' }}>▶</span>
            <span style={{ flex: 1, color: 'var(--fg2)' }}>{r.id}</span>
            <span style={{ color: 'var(--fg2)' }}>{r.agoLabel}</span>
          </button>
        );
      })}
    </div>
  );
}

function RunDetails({ run, runs, onSelect }) {
  return (
    <aside style={{
      width: 280, flexShrink: 0, display: 'flex', flexDirection: 'column',
      borderLeft: '1px solid var(--border)', background: 'var(--bg2)', overflow: 'hidden', minHeight: 0,
    }}>
      {run && (
        <div style={{ padding: 16, borderBottom: '1px solid var(--border)', flexShrink: 0 }}>
          <StatsPanel run={run} />
        </div>
      )}
      {run && (
        <div style={{ padding: 16, borderBottom: '1px solid var(--border)', flexShrink: 0 }}>
          <UpperLabel count={run.toolCalls.length}>Tool Calls</UpperLabel>
          <div style={{ maxHeight: 192, overflowY: 'auto' }}>
            <ToolCallLog calls={run.toolCalls} />
          </div>
        </div>
      )}
      <div style={{ flex: 1, padding: 16, overflowY: 'auto', minHeight: 0 }}>
        <UpperLabel count={runs.length || undefined}>History</UpperLabel>
        <HistoryList runs={runs} selectedId={run?.id} onSelect={onSelect} />
      </div>
    </aside>
  );
}

window.StatsPanel = StatsPanel;
window.ToolCallLog = ToolCallLog;
window.HistoryList = HistoryList;
window.RunDetails = RunDetails;
