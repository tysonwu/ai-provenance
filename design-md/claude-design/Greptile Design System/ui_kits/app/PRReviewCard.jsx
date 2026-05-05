// PRReviewCard.jsx — Pull Request card in the dashboard list
const confidenceColor = (score) => {
  if (score >= 4) return '#28E99F';
  if (score >= 3) return '#DAFF01';
  if (score >= 2) return '#FF7F59';
  return '#E5443D';
};

const PRReviewCard = ({ pr, onClick }) => {
  const { title, repo, author, branch, score, comments, status, timeAgo } = pr;
  return (
    <div onClick={onClick} style={prStyles.card}>
      <div style={prStyles.top}>
        <div style={prStyles.repoTag}>{repo}</div>
        <div style={prStyles.timeAgo}>{timeAgo}</div>
      </div>
      <div style={prStyles.title}>{title}</div>
      <div style={prStyles.meta}>
        <div style={prStyles.authorRow}>
          <div style={prStyles.authorAvatar}>{author[0].toUpperCase()}</div>
          <span style={prStyles.authorName}>{author}</span>
        </div>
        <div style={prStyles.branchTag}>⎇ {branch}</div>
      </div>
      <div style={prStyles.bottom}>
        <div style={prStyles.score}>
          <div style={{ ...prStyles.scoreDot, background: confidenceColor(score) }}></div>
          <span style={prStyles.scoreLabel}>Confidence {score}/5</span>
        </div>
        <div style={prStyles.commentsTag}>
          <span style={prStyles.commentCount}>{comments}</span>
          <span style={prStyles.commentLabel}>comments</span>
        </div>
        <div style={{ ...prStyles.statusBadge, ...(status === 'reviewed' ? prStyles.statusReviewed : status === 'pending' ? prStyles.statusPending : prStyles.statusMerged) }}>
          {status}
        </div>
      </div>
    </div>
  );
};

const prStyles = {
  card: { background: '#F9F7F3', borderRadius: 10, padding: '16px 20px', border: '1px solid rgba(85,83,104,0.1)', cursor: 'pointer', transition: 'box-shadow 0.15s', marginBottom: 8 },
  top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  repoTag: { fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#555368', textTransform: 'uppercase', letterSpacing: '0.08em' },
  timeAgo: { fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#787878' },
  title: { fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: '#2A2A2A', marginBottom: 10, lineHeight: 1.4 },
  meta: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 },
  authorRow: { display: 'flex', alignItems: 'center', gap: 6 },
  authorAvatar: { width: 20, height: 20, borderRadius: '50%', background: '#D6D6D6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", color: '#555368' },
  authorName: { fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#555368' },
  branchTag: { fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#787878', background: 'rgba(85,83,104,0.08)', padding: '2px 8px', borderRadius: 4 },
  bottom: { display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid rgba(85,83,104,0.1)', paddingTop: 12 },
  score: { display: 'flex', alignItems: 'center', gap: 6 },
  scoreDot: { width: 8, height: 8, borderRadius: '50%' },
  scoreLabel: { fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, color: '#2A2A2A' },
  commentsTag: { display: 'flex', alignItems: 'center', gap: 4, marginLeft: 'auto' },
  commentCount: { fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: '#2A2A2A' },
  commentLabel: { fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#787878' },
  statusBadge: { fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 9999 },
  statusReviewed: { background: '#C5FFD6', color: '#107A4D' },
  statusPending: { background: '#ECFFA3', color: '#5A6029' },
  statusMerged: { background: '#D6E5FF', color: '#2A4EB5' },
};

Object.assign(window, { PRReviewCard, confidenceColor });
