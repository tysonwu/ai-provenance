// ReviewComment.jsx — Individual Greptile comment on a PR diff
const ReviewComment = ({ comment }) => {
  const { severity, file, line, message, type, canFix } = comment;
  const severityColor = { high: '#E5443D', medium: '#FF7F59', low: '#555368', info: '#5882FF' };
  const severityBg = { high: '#FFBCB3', medium: '#FFBCB3', low: '#E9E9E9', info: '#D6E5FF' };
  return (
    <div style={rcStyles.card}>
      <div style={rcStyles.header}>
        <svg width="16" height="18" viewBox="0 0 367 420" fill="none" style={{ flexShrink: 0 }}>
          <path d="M240.269 49.8154L166.804 115.963L115.966 159.44L181.335 220.585L249.784 162.048L196.78 112.47L253.068 61.7881L362.605 164.246L178.739 321.489L3.14502 157.242L187.011 0L240.269 49.8154Z" fill="#28E99F"/>
          <rect width="236.453" height="83.4566" transform="matrix(0.75471 -0.656059 0 1 188.017 336.544)" fill="#28E99F"/>
          <rect width="236.453" height="83.4566" transform="matrix(0.731354 0.681998 0 1 0 174.962)" fill="#28E99F"/>
        </svg>
        <span style={rcStyles.botName}>greptile</span>
        <span style={{ ...rcStyles.severityBadge, background: severityBg[severity], color: severityColor[severity] }}>{severity}</span>
        <span style={rcStyles.typeBadge}>{type}</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <span style={rcStyles.fileRef}>{file}:{line}</span>
        </div>
      </div>
      <div style={rcStyles.message}>{message}</div>
      {canFix && (
        <div style={rcStyles.actions}>
          <button style={rcStyles.fixBtn}>Fix in Cursor</button>
          <button style={rcStyles.fixBtn}>Fix in Claude Code</button>
          <button style={rcStyles.fixBtn}>Fix in Codex</button>
        </div>
      )}
    </div>
  );
};

const rcStyles = {
  card: { background: '#F9F7F3', border: '1px solid rgba(85,83,104,0.12)', borderLeft: '3px solid #28E99F', borderRadius: '0 8px 8px 0', padding: '12px 16px', marginBottom: 8 },
  header: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 },
  botName: { fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 700, color: '#2A2A2A', textTransform: 'lowercase' },
  severityBadge: { fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 9999, textTransform: 'lowercase' },
  typeBadge: { fontFamily: "'Space Mono', monospace", fontSize: 9, color: '#555368', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(85,83,104,0.08)', padding: '2px 6px', borderRadius: 4 },
  fileRef: { fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#787878' },
  message: { fontFamily: "'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.6, color: '#2A2A2A', marginBottom: 10 },
  actions: { display: 'flex', gap: 8 },
  fixBtn: { fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: '#555368', background: '#EEEEEE', border: '1px solid rgba(85,83,104,0.2)', borderRadius: 6, padding: '5px 12px', cursor: 'pointer' },
};

Object.assign(window, { ReviewComment });
