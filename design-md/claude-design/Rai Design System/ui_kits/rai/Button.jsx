// Button primitives — 0 radius, IBM Plex Sans, asymmetric padding on primary/secondary/danger.
const btnBase = {
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  letterSpacing: '0.16px',
  border: 0,
  borderRadius: 0,
  cursor: 'pointer',
  height: 48,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  transition: 'background 120ms ease, color 120ms ease',
};

function Button({ kind = 'primary', children, onClick, disabled, full, style }) {
  const variants = {
    primary: {
      background: disabled ? 'var(--bg2)' : 'var(--cds-button-primary)',
      color: disabled ? 'var(--fg2)' : '#fff',
      padding: '0 63px 0 15px',
      border: disabled ? '1px solid var(--border)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
    },
    secondary: {
      background: '#393939',
      color: '#fff',
      padding: '0 63px 0 15px',
    },
    tertiary: {
      background: 'transparent',
      color: 'var(--cds-link-primary)',
      padding: '0 15px',
      border: '1px solid var(--cds-link-primary)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--cds-link-primary)',
      padding: '0 16px',
    },
    danger: {
      background: 'var(--cds-support-error)',
      color: '#fff',
      padding: '0 63px 0 15px',
    },
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ ...btnBase, ...variants[kind], width: full ? '100%' : undefined, justifyContent: full ? 'center' : btnBase.justifyContent, fontWeight: 600, ...style }}
    >
      {children}
    </button>
  );
}

function IconButton({ children, onClick, title }) {
  return (
    <button
      onClick={onClick}
      title={title}
      aria-label={title}
      style={{
        height: 40, width: 40, background: 'var(--cds-layer-01-hover)',
        color: 'var(--fg2)', border: 0, borderRadius: 0, cursor: 'pointer',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--border) 85%, transparent)',
      }}
    >
      {children}
    </button>
  );
}

window.Button = Button;
window.IconButton = IconButton;
