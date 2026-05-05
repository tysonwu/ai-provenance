// Hero.jsx — Greptile Homepage Hero Section
const Hero = ({ onCTA }) => (
  <section style={heroStyles.section}>
    <div style={heroStyles.inner}>
      <div style={heroStyles.eyebrow}>
        <span style={heroStyles.eyebrowText}>[ AGENT ]</span>
      </div>
      <h1 style={heroStyles.headline}>The AI Code<br />Reviewer.</h1>
      <p style={heroStyles.sub}>AI agents that review and test pull requests<br />with full context of the codebase.</p>
      <div style={heroStyles.ctas}>
        <button style={heroStyles.btnPrimary} onClick={onCTA}>Contact Sales</button>
        <button style={heroStyles.btnMint}>Start now</button>
      </div>
      <p style={heroStyles.footnote}>no credit card required • 14-day free trial</p>
    </div>
    {/* Social proof logos strip */}
    <div style={heroStyles.logosSection}>
      <p style={heroStyles.logosLabel}>Over 9,000+ teams use Greptile</p>
      <div style={heroStyles.logos}>
        {['Klaviyo','Mintlify','Substack','Zapier','Brex','PostHog','WorkOS','Retool','Scale'].map(name => (
          <span key={name} style={heroStyles.logoName}>{name}</span>
        ))}
      </div>
    </div>
  </section>
);

const heroStyles = {
  section: { background: '#EEEEEE', padding: '80px 48px 64px', textAlign: 'center' },
  inner: { maxWidth: 700, margin: '0 auto' },
  eyebrow: { marginBottom: 20 },
  eyebrowText: { fontFamily: "'Space Mono', monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#555368' },
  headline: { fontFamily: "'Anybody', sans-serif", fontStyle: 'italic', fontWeight: 700, fontSize: 80, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#2A2A2A', margin: '0 0 20px' },
  sub: { fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.6, color: '#555368', margin: '0 0 32px' },
  ctas: { display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 14 },
  btnPrimary: { fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: '#EEEEEE', background: '#2A2A2A', border: 'none', borderRadius: 9999, padding: '12px 24px', cursor: 'pointer' },
  btnMint: { fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, color: '#2A2A2A', background: '#28E99F', border: 'none', borderRadius: 9999, padding: '12px 24px', cursor: 'pointer' },
  footnote: { fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#787878', margin: 0 },
  logosSection: { marginTop: 64, borderTop: '1px solid rgba(85,83,104,0.15)', paddingTop: 32 },
  logosLabel: { fontFamily: "'Space Mono', monospace", fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#787878', marginBottom: 20 },
  logos: { display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' },
  logoName: { fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: '#D6D6D6', letterSpacing: '-0.01em' },
};

Object.assign(window, { Hero });
