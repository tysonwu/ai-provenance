// Field — bottom-border only input, no full box.
function Field({ label, helper, error, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {label && (
        <span style={{ fontSize: 12, color: 'var(--fg2)', letterSpacing: '0.32px' }}>{label}</span>
      )}
      {children}
      {helper && !error && (
        <span style={{ fontSize: 12, color: 'var(--fg3)', letterSpacing: '0.32px' }}>{helper}</span>
      )}
      {error && (
        <span style={{ fontSize: 12, color: 'var(--err)', letterSpacing: '0.32px' }}>{error}</span>
      )}
    </label>
  );
}

function TextInput({ value, onChange, placeholder, error, type = 'text' }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange && onChange(e.target.value)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        background: 'var(--cds-field)',
        border: 0,
        borderBottom: `2px solid ${error ? 'var(--err)' : focus ? 'var(--cds-focus)' : 'transparent'}`,
        borderRadius: 0,
        height: 40,
        padding: '0 16px',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        letterSpacing: '0.16px',
        color: 'var(--fg1)',
        outline: 'none',
      }}
    />
  );
}

function TextArea({ value, onChange, placeholder, rows = 4 }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      rows={rows}
      onChange={(e) => onChange && onChange(e.target.value)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        background: 'var(--cds-field)',
        border: 0,
        borderBottom: `2px solid ${focus ? 'var(--cds-focus)' : 'transparent'}`,
        borderRadius: 0,
        padding: '10px 16px',
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        letterSpacing: '0.16px',
        color: 'var(--fg1)',
        resize: 'vertical',
        minHeight: 72,
        outline: 'none',
      }}
    />
  );
}

function Checkbox({ checked, onChange, label }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 12 }}>
      <input type="checkbox" checked={checked} onChange={(e) => onChange && onChange(e.target.checked)} style={{ accentColor: 'var(--accent)' }} />
      {label && <span>{label}</span>}
    </label>
  );
}

window.Field = Field;
window.TextInput = TextInput;
window.TextArea = TextArea;
window.Checkbox = Checkbox;
