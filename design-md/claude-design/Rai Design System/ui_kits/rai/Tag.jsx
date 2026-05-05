function Tag({ kind = 'neutral', children, dot }) {
  const variants = {
    blue:    { bg: 'var(--blue-10, #edf5ff)',    fg: '#0f62fe', dot: '#0f62fe' },
    ok:      { bg: '#defbe6', fg: '#24a148', dot: '#24a148' },
    err:     { bg: '#fff1f1', fg: '#da1e28', dot: '#da1e28' },
    warn:    { bg: '#fdf6dd', fg: '#b28600', dot: '#f1c21b' },
    neutral: { bg: 'var(--bg3)', fg: 'var(--fg1)', dot: 'var(--fg2)' },
  };
  const v = variants[kind];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px', borderRadius: 24,
      fontSize: 12, fontWeight: 400, letterSpacing: '0.32px',
      background: v.bg, color: v.fg,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: v.dot, display: 'inline-block' }} />}
      {children}
    </span>
  );
}

function StatusDot({ kind = 'ok', label }) {
  const color = kind === 'ok' ? 'var(--ok)' : kind === 'err' ? 'var(--err)' : 'var(--warn)';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--fg2)', letterSpacing: '0.16px' }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />
      {label}
    </span>
  );
}

function UpperLabel({ children, count }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.32px', textTransform: 'uppercase', color: 'var(--fg2)', marginBottom: 12 }}>
      {children}
      {count != null && <span style={{ marginLeft: 8, opacity: 0.6 }}>{count}</span>}
    </div>
  );
}

window.Tag = Tag;
window.StatusDot = StatusDot;
window.UpperLabel = UpperLabel;
