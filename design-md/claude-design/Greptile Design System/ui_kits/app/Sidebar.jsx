// Sidebar.jsx — Greptile App Left Navigation
const Sidebar = ({ activePage, onNav }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '▦' },
    { id: 'reviews', label: 'PR Reviews', icon: '◎' },
    { id: 'rules', label: 'Custom Rules', icon: '≡' },
    { id: 'learning', label: 'Learning', icon: '◈' },
    { id: 'settings', label: 'Settings', icon: '⊙' },
  ];
  return (
    <aside style={sidebarStyles.sidebar}>
      <div style={sidebarStyles.logoRow}>
        <svg width="20" height="23" viewBox="0 0 367 420" fill="none">
          <path d="M240.269 49.8154L166.804 115.963L115.966 159.44L181.335 220.585L249.784 162.048L196.78 112.47L253.068 61.7881L362.605 164.246L178.739 321.489L3.14502 157.242L187.011 0L240.269 49.8154Z" fill="#28E99F"/>
          <rect width="236.453" height="83.4566" transform="matrix(0.75471 -0.656059 0 1 188.017 336.544)" fill="#28E99F"/>
          <rect width="236.453" height="83.4566" transform="matrix(0.731354 0.681998 0 1 0 174.962)" fill="#28E99F"/>
        </svg>
        <span style={sidebarStyles.logoText}>greptile</span>
      </div>
      <div style={sidebarStyles.orgRow}>
        <div style={sidebarStyles.orgAvatar}>B</div>
        <div>
          <div style={sidebarStyles.orgName}>brex</div>
          <div style={sidebarStyles.orgSub}>Organization</div>
        </div>
        <span style={{ marginLeft: 'auto', color: '#787878', fontSize: 12 }}>⌄</span>
      </div>
      <nav style={sidebarStyles.nav}>
        {navItems.map(item => (
          <button key={item.id} onClick={() => onNav(item.id)}
            style={{ ...sidebarStyles.navItem, ...(activePage === item.id ? sidebarStyles.navItemActive : {}) }}>
            <span style={sidebarStyles.navIcon}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div style={sidebarStyles.bottom}>
        <div style={sidebarStyles.userRow}>
          <div style={sidebarStyles.userAvatar}>JR</div>
          <div>
            <div style={sidebarStyles.userName}>James Reggio</div>
            <div style={sidebarStyles.userEmail}>james@brex.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

const sidebarStyles = {
  sidebar: { width: 220, background: '#F9F7F3', borderRight: '1px solid rgba(85,83,104,0.12)', display: 'flex', flexDirection: 'column', height: '100vh', flexShrink: 0 },
  logoRow: { display: 'flex', alignItems: 'center', gap: 8, padding: '20px 20px 16px' },
  logoText: { fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: '#2A2A2A', letterSpacing: '-0.02em' },
  orgRow: { display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', margin: '0 8px 8px', background: '#EEEEEE', borderRadius: 8, cursor: 'pointer' },
  orgAvatar: { width: 28, height: 28, borderRadius: 6, background: '#2A2A2A', color: '#EEEEEE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", flexShrink: 0 },
  orgName: { fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: '#2A2A2A' },
  orgSub: { fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: '#787878' },
  nav: { flex: 1, padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: 2 },
  navItem: { width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8, border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: '#555368', textAlign: 'left' },
  navItemActive: { background: '#EEEEEE', color: '#2A2A2A', fontWeight: 600 },
  navIcon: { fontSize: 14, opacity: 0.7 },
  bottom: { padding: '16px', borderTop: '1px solid rgba(85,83,104,0.12)' },
  userRow: { display: 'flex', alignItems: 'center', gap: 10 },
  userAvatar: { width: 30, height: 30, borderRadius: '50%', background: '#555368', color: '#EEEEEE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", flexShrink: 0 },
  userName: { fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: '#2A2A2A' },
  userEmail: { fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: '#787878' },
};

Object.assign(window, { Sidebar });
