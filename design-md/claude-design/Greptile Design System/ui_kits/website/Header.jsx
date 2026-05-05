// Header.jsx — Greptile Marketing Website Nav
const Header = ({ activePage = 'home' }) => {
  const links = ['Examples', 'Pricing', 'Features', 'Enterprise', 'Blog', 'Resources'];
  return (
    <header style={headerStyles.nav}>
      <div style={headerStyles.left}>
        <div style={headerStyles.logo}>
          <svg width="20" height="23" viewBox="0 0 367 420" fill="none">
            <path d="M240.269 49.8154L166.804 115.963L115.966 159.44L181.335 220.585L249.784 162.048L196.78 112.47L253.068 61.7881L362.605 164.246L178.739 321.489L3.14502 157.242L187.011 0L240.269 49.8154Z" fill="#28E99F"/>
            <rect width="236.453" height="83.4566" transform="matrix(0.75471 -0.656059 0 1 188.017 336.544)" fill="#28E99F"/>
            <rect width="236.453" height="83.4566" transform="matrix(0.731354 0.681998 0 1 0 174.962)" fill="#28E99F"/>
          </svg>
        </div>
        <nav style={headerStyles.links}>
          {links.map(l => (
            <a key={l} href="#" style={headerStyles.link}>{l}</a>
          ))}
        </nav>
      </div>
      <div style={headerStyles.right}>
        <button style={headerStyles.btnOutline}>Contact Sales</button>
        <button style={headerStyles.btnPrimary}>Start now</button>
      </div>
    </header>
  );
};

const headerStyles = {
  nav: { background: '#EEEEEE', borderBottom: '1px solid rgba(85,83,104,0.15)', padding: '0 48px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 },
  left: { display: 'flex', alignItems: 'center', gap: 36 },
  logo: { display: 'flex', alignItems: 'center' },
  links: { display: 'flex', gap: 24 },
  link: { fontFamily: "'Space Mono', monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#555368', textDecoration: 'none' },
  right: { display: 'flex', alignItems: 'center', gap: 10 },
  btnOutline: { fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: '#2A2A2A', background: 'transparent', border: '1.5px solid rgba(85,83,104,0.3)', borderRadius: 9999, padding: '7px 16px', cursor: 'pointer' },
  btnPrimary: { fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: '#EEEEEE', background: '#2A2A2A', border: 'none', borderRadius: 9999, padding: '7px 16px', cursor: 'pointer' },
};

Object.assign(window, { Header });
