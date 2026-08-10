// ============================================================
// Exam Rescue — NCERT Syllabus Badge
// ============================================================
// Small visual indicator that a chapter/topic comes from the
// official NCERT/CBSE curriculum.

interface SyllabusBadgeProps {
  source?: string;
  lastUpdated?: string;
  className?: string;
}

export default function SyllabusBadge({ source = "NCERT/CBSE", lastUpdated, className = "" }: SyllabusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-100 ${className}`}
      title={lastUpdated ? `Last updated: ${lastUpdated}` : undefined}
    >
      <span aria-hidden="true">📚</span>
      From {source}
    </span>
  );
}
