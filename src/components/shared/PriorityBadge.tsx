// ============================================================
// Exam Rescue — Topic Priority Badge
// ============================================================

import { PriorityLevel } from '@/types';

interface PriorityBadgeProps {
  level: PriorityLevel;
  className?: string;
}

const PRIORITY_CONFIG: Record<PriorityLevel, { label: string; emoji: string; classes: string }> = {
  very_high: { label: 'Must Study', emoji: '🔴', classes: 'bg-red-100 text-red-700' },
  high: { label: 'Must Study', emoji: '🔴', classes: 'bg-red-100 text-red-700' },
  medium: { label: 'Important', emoji: '🟡', classes: 'bg-amber-100 text-amber-700' },
  low: { label: 'If Time Remains', emoji: '🟢', classes: 'bg-emerald-100 text-emerald-700' },
};

export default function PriorityBadge({ level, className = '' }: PriorityBadgeProps) {
  const config = PRIORITY_CONFIG[level];

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${config.classes} ${className}`}
    >
      <span aria-hidden="true">{config.emoji}</span>
      {config.label}
    </span>
  );
}
