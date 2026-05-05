// Footer.jsx — Greptile Website Footer
const Footer = () => {
  const cols = [
    { title: 'Product', links: ['Enterprise', 'Pricing', 'Docs', 'API', 'Zapier'] },
    { title: 'Company', links: ['Examples', 'Careers', 'Blog', 'Case Studies', 'Podcast'] },
    { title: 'Resources', links: ['Grepository', 'Benchmarks', 'Greptile vs Coderabbit', 'State of AI Coding', 'For YC Companies'] },
    { title: 'Support', links: ['Contact us', 'Security', 'Terms of Service', 'Report Bugs'] },
  ];
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.inner}>
        <div style={footerStyles.top}>
          <div style={footerStyles.brand}>
            <svg width="28" height="32" viewBox="0 0 367 420" fill="none">
              <path d="M240.269 49.8154L166.804 115.963L115.966 159.44L181.335 220.585L249.784 162.048L196.78 112.47L253.068 61.7881L362.605 164.246L178.739 321.489L3.14502 157.242L187.011 0L240.269 49.8154Z" fill="rgba(238,238,238,0.3)"/>
              <rect width="236.453" height="83.4566" transform="matrix(0.75471 -0.656059 0 1 188.017 336.544)" fill="rgba(238,238,238,0.3)"/>
              <rect width="236.453" height="83.4566" transform="matrix(0.731354 0.681998 0 1 0 174.962)" fill="rgba(238,238,238,0.3)"/>
            </svg>
          </div>
          <div style={footerStyles.cols}>
            {cols.map(col => (
              <div key={col.title} style={footerStyles.col}>
                <div style={footerStyles.colTitle}>{col.title}</div>
                {col.links.map(l => (
                  <a key={l} href="#" style={footerStyles.colLink}>{l}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={footerStyles.bottom}>
          <span style={footerStyles.copy}>© 2026 Tabnam, Inc.</span>
        </div>
      </div>
    </footer>
  );
};

const footerStyles = {
  footer: { background: '#2A2A2A', padding: '56px 48px 32px' },
  inner: { maxWidth: 1280, margin: '0 auto' },
  top: { display: 'flex', gap: 64, marginBottom: 48 },
  brand: { flexShrink: 0 },
  cols: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, flex: 1 },
  col: { display: 'flex', flexDirection: 'column', gap: 10 },
  colTitle: { fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: 'rgba(238,238,238,0.9)', marginBottom: 4 },
  colLink: { fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: 'rgba(238,238,238,0.45)', textDecoration: 'none' },
  bottom: { borderTop: '1px solid rgba(238,238,238,0.1)', paddingTop: 24 },
  copy: { fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'rgba(238,238,238,0.3)' },
};

Object.assign(window, { Footer });
