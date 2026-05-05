const RaiHex = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ color: 'currentColor' }}>
    <polygon points="50,12 82.909,31 82.909,69 50,88 17.091,69 17.091,31" fill="none" stroke="currentColor" strokeWidth="12" strokeLinejoin="round" />
  </svg>
);

const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
);

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);

function Masthead({ theme, toggleTheme, lastRunAgo, connected }) {
  return (
    <header style={{
      background: 'var(--cds-masthead)',
      color: 'var(--cds-masthead-text)',
      height: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      flexShrink: 0,
      backdropFilter: theme === 'dark' ? 'blur(20px)' : undefined,
      WebkitBackdropFilter: theme === 'dark' ? 'blur(20px)' : undefined,
      borderBottom: '1px solid color-mix(in srgb, var(--border) 20%, transparent)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#fff' }}>
        <RaiHex size={22} />
        <span style={{ fontSize: 32, fontWeight: 300, letterSpacing: 0, lineHeight: 1.25 }}>Rai</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ fontSize: 12, color: 'var(--cds-masthead-text)' }}>Last run {lastRunAgo}</span>
        <button
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
          style={{
            height: 40, width: 40, background: 'color-mix(in srgb, var(--cds-masthead-text) 15%, transparent)',
            color: 'var(--cds-masthead-text)', border: 0, borderRadius: 0, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, letterSpacing: '0.16px' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: connected ? 'var(--ok)' : 'var(--err)' }} />
          {connected ? 'Connected' : 'Disconnected'}
        </span>
      </div>
    </header>
  );
}

function Footer({ apiBase, model }) {
  return (
    <footer style={{
      background: 'var(--cds-masthead)',
      color: 'var(--cds-masthead-text)',
      padding: '6px 24px',
      fontSize: 11,
      fontFamily: 'var(--font-mono)',
      letterSpacing: '0.16px',
      display: 'flex',
      justifyContent: 'space-between',
      flexShrink: 0,
    }}>
      <span>rai · autonomous · {model}</span>
      <span>{apiBase}</span>
    </footer>
  );
}

window.Masthead = Masthead;
window.Footer = Footer;
window.RaiHex = RaiHex;
