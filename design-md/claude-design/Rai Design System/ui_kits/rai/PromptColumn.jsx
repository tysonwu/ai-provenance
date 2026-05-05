function PromptColumn({ bundle, selectedIds, onToggle, onAll, onDefault, userNote, setUserNote, onRun, running }) {
  const [openId, setOpenId] = React.useState(null);
  return (
    <aside style={{
      width: 'min(380px, 34vw)', flexShrink: 0, display: 'flex', flexDirection: 'column',
      borderLeft: '1px solid var(--border)', background: 'var(--bg2)', overflow: 'hidden', minHeight: 0,
    }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: 16, minHeight: 0, fontSize: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.32px', textTransform: 'uppercase', color: 'var(--fg2)', marginBottom: 12 }}>
          Prompt
        </div>

        <div style={{ marginBottom: 14 }}>
          <div style={{ color: 'var(--fg2)', marginBottom: 6 }}>User message (base)</div>
          <div style={{
            padding: 8, background: 'var(--bg1)', fontSize: 11, color: 'var(--fg1)', lineHeight: 1.6,
            border: '1px solid color-mix(in srgb, var(--border) 70%, transparent)',
          }}>
            {bundle.userMessage}
          </div>
        </div>

        <div style={{ marginBottom: 14 }}>
          <label style={{ color: 'var(--fg2)', marginBottom: 6, display: 'block' }}>
            Additional instructions <span style={{ opacity: 0.7 }}>(optional)</span>
          </label>
          <TextArea value={userNote} onChange={setUserNote} placeholder="e.g. focus on BTC/ETH, or emphasize delta-neutral pairs…" rows={4} />
          <div style={{ fontSize: 10, color: 'var(--fg2)', marginTop: 4 }}>
            Appended to the base user message sent to Anthropic for this run.
          </div>
        </div>

        <div style={{ marginBottom: 14 }}>
          <div style={{ color: 'var(--fg2)', marginBottom: 6 }}>Base system prompt</div>
          <pre style={{
            maxHeight: 128, overflowY: 'auto', padding: 8, margin: 0,
            background: 'var(--bg1)', fontSize: 10, color: 'var(--fg1)',
            whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)', lineHeight: 1.6,
            border: '1px solid color-mix(in srgb, var(--border) 70%, transparent)',
          }}>{bundle.base}</pre>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ color: 'var(--fg2)' }}>Skills</span>
            <div style={{ display: 'flex', gap: 6 }}>
              <button onClick={onAll} style={skillBtn()}>All</button>
              <button onClick={onDefault} style={skillBtn(true)}>Default</button>
            </div>
          </div>
          <div style={{ fontSize: 10, color: 'var(--fg2)', marginBottom: 8 }}>None checked = all skills. Click a skill name for full text.</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {bundle.skills.map((s) => {
              const open = openId === s.id;
              return (
                <li key={s.id} style={{ background: 'var(--bg3)', border: '1px solid color-mix(in srgb, var(--border) 85%, transparent)', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: 8 }}>
                    <input type="checkbox" checked={selectedIds.includes(s.id)} onChange={() => onToggle(s.id)} style={{ marginTop: 3, accentColor: 'var(--accent)' }} />
                    <button
                      onClick={() => setOpenId(open ? null : s.id)}
                      style={{ background: 'transparent', border: 0, padding: 0, color: 'var(--fg1)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', fontSize: 12, fontWeight: 500 }}
                    >
                      <span style={{ textTransform: 'capitalize' }}>{s.label}</span>
                      <span style={{ color: 'var(--fg2)', fontSize: 10 }}>{open ? '▲' : '▼'}</span>
                    </button>
                  </div>
                  {open && (
                    <div style={{
                      borderTop: '1px solid color-mix(in srgb, var(--border) 70%, transparent)',
                      borderLeft: '2px solid color-mix(in srgb, var(--accent) 70%, transparent)',
                      background: 'var(--bg2)', padding: '10px 12px', fontSize: 11, lineHeight: 1.6, color: 'var(--fg2)',
                    }}>
                      {s.body}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div style={{ flexShrink: 0, borderTop: '1px solid var(--border)', background: 'var(--bg2)' }}>
        <div style={{ padding: '12px 12px 8px', borderBottom: '1px solid color-mix(in srgb, var(--border) 70%, transparent)' }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.32px', textTransform: 'uppercase', color: 'var(--fg2)', marginBottom: 8 }}>
            Preview · what Anthropic receives
          </div>
          <div style={{ fontSize: 10, color: 'var(--fg2)', marginBottom: 4 }}>System prompt</div>
          <pre style={{
            maxHeight: 96, overflowY: 'auto', padding: 8, margin: 0,
            background: 'var(--bg1)', fontSize: 10, color: 'var(--fg1)', fontFamily: 'var(--font-mono)',
            whiteSpace: 'pre-wrap', lineHeight: 1.6,
            border: '1px solid color-mix(in srgb, var(--border) 70%, transparent)',
          }}>{`You are Rai. Summarize crypto funding signals using the attached skills. Be terse, technical, operational.\n${selectedIds.length ? `[${selectedIds.length} skills]` : '[all skills]'}`}</pre>
        </div>
        <div style={{ padding: 12 }}>
          <Button kind="primary" full onClick={onRun} disabled={running}>
            {running ? 'Running…' : 'Run now'}
          </Button>
        </div>
      </div>
    </aside>
  );
}

function skillBtn(muted) {
  return {
    fontSize: 10, padding: '4px 8px', borderRadius: 0,
    border: '1px solid var(--border)', background: 'var(--cds-layer-01-hover)',
    color: muted ? 'var(--fg2)' : 'var(--accent)', cursor: 'pointer',
  };
}

window.PromptColumn = PromptColumn;
