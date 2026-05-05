// FeatureSection.jsx — How It Works + Features
const HowItWorks = () => {
  const steps = [
    { num: 'STEP 01', title: 'Indexes your codebase', desc: 'Builds a graph of your repo — files, functions, and dependencies.' },
    { num: 'STEP 02', title: 'Swarm of agents review the PR', desc: 'Parallel agents review changes, assess their impact beyond the diff, and flag issues.' },
    { num: 'STEP 03', title: 'Greptile learns your codebase over time', desc: "Reads other engineers' comments to understand your coding standards." },
  ];
  return (
    <section style={fsStyles.section}>
      <div style={fsStyles.eyebrow}><span style={fsStyles.eyebrowText}>[ AGENT ]</span></div>
      <h2 style={fsStyles.heading}>How Greptile reviews every PR</h2>
      <p style={fsStyles.sub}>Greptile constructs a graph index of your codebase, then uses a swarm of agents to catch potential issues that humans might miss.</p>
      <div style={fsStyles.stepsGrid}>
        {steps.map(s => (
          <div key={s.num} style={fsStyles.stepCard}>
            <div style={fsStyles.stepNum}>{s.num}</div>
            <div style={fsStyles.stepTitle}>{s.title}</div>
            <div style={fsStyles.stepDesc}>{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const AnatomySection = () => {
  const features = [
    { title: 'Confidence scores', desc: 'Know how safe a PR is to merge at a glance with a 0–5 score' },
    { title: 'Diagrams', desc: 'Parse complex changes with sequence diagrams and flowcharts' },
    { title: 'Test generation', desc: 'Automatically generate unit tests for new and changed code' },
    { title: 'PR summary', desc: "Get the big picture on the PR's key changes" },
    { title: 'Fix in Claude / Codex / Cursor', desc: 'Address any comment with a one-click fix in your preferred coding agent' },
    { title: 'Chat with Greptile', desc: 'Ask follow-up questions in the PR to clarify issues and context' },
  ];
  return (
    <section style={fsStyles.anatomySection}>
      <div style={fsStyles.eyebrow}><span style={fsStyles.eyebrowText}>[ ANATOMY OF A PR ]</span></div>
      <h2 style={fsStyles.heading}>The anatomy of a Greptile PR review</h2>
      <div style={fsStyles.featureGrid}>
        {features.map((f, i) => (
          <div key={i} style={fsStyles.featureCard}>
            <div style={fsStyles.featureNum}>{String(i + 1).padStart(2, '0')}</div>
            <div style={fsStyles.featureTitle}>{f.title}</div>
            <div style={fsStyles.featureDesc}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    { quote: "We've tried more code review tools than I can count. Greptile outperforms them all by a mile. Honestly the only AI reviewer that doesn't annoy the s**t out of me.", name: 'James Reggio', role: 'CTO · Brex' },
    { quote: "We've been impressed by Greptile's code review quality. It's tightened our feedback loops, improved consistency, and freed up engineers to focus on higher-level design.", name: 'Mark Tran', role: 'Eng. Manager · WorkOS' },
    { quote: "Greptile helps the team do their best work. It levels everybody up and helps ensure that we're all proud of our code.", name: 'Anirudh Kamath', role: 'Tech Lead · Browserbase' },
  ];
  return (
    <section style={fsStyles.testimonialsSection}>
      <h2 style={fsStyles.headingCentered}>See what our customers are saying</h2>
      <div style={fsStyles.testimonialsGrid}>
        {testimonials.map((t, i) => (
          <div key={i} style={fsStyles.testimonialCard}>
            <p style={fsStyles.quote}>"{t.quote}"</p>
            <div style={fsStyles.authorRow}>
              <div style={fsStyles.avatar}></div>
              <div><div style={fsStyles.authorName}>{t.name}</div><div style={fsStyles.authorRole}>{t.role}</div></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const fsStyles = {
  section: { background: '#EEEEEE', padding: '80px 48px', maxWidth: 1280, margin: '0 auto' },
  anatomySection: { background: '#F9F7F3', padding: '80px 48px' },
  testimonialsSection: { background: '#EEEEEE', padding: '80px 48px', maxWidth: 1280, margin: '0 auto' },
  eyebrow: { marginBottom: 16 },
  eyebrowText: { fontFamily: "'Space Mono', monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#555368' },
  heading: { fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 40, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#2A2A2A', margin: '0 0 16px' },
  headingCentered: { fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 40, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#2A2A2A', margin: '0 0 40px', textAlign: 'center' },
  sub: { fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.6, color: '#555368', margin: '0 0 48px', maxWidth: 600 },
  stepsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 },
  stepCard: { background: '#F9F7F3', borderRadius: 12, padding: '24px 24px 28px' },
  stepNum: { fontFamily: "'Space Mono', monospace", fontSize: 10, fontWeight: 700, color: '#555368', letterSpacing: '0.1em', marginBottom: 16 },
  stepTitle: { fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 16, color: '#2A2A2A', marginBottom: 8 },
  stepDesc: { fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.6, color: '#555368' },
  featureGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 1280, margin: '40px auto 0' },
  featureCard: { background: '#EEEEEE', borderRadius: 10, padding: '20px 20px 24px' },
  featureNum: { fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#787878', marginBottom: 10 },
  featureTitle: { fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, color: '#2A2A2A', marginBottom: 6 },
  featureDesc: { fontFamily: "'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.55, color: '#555368' },
  testimonialsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 },
  testimonialCard: { background: '#F9F7F3', borderRadius: 12, padding: '24px' },
  quote: { fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontStyle: 'italic', lineHeight: 1.65, color: '#2A2A2A', margin: '0 0 20px' },
  authorRow: { display: 'flex', alignItems: 'center', gap: 10 },
  avatar: { width: 32, height: 32, borderRadius: '50%', background: '#D6D6D6', flexShrink: 0 },
  authorName: { fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: '#2A2A2A' },
  authorRole: { fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#555368' },
};

Object.assign(window, { HowItWorks, AnatomySection, TestimonialSection });
