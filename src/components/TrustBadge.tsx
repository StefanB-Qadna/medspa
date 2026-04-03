interface TrustBadgeProps {
  icon: React.ReactNode;
  label: string;
}

export function TrustBadge({ icon, label }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-brass">{icon}</div>
      <span className="font-sans text-sm font-medium text-warm-dark">
        {label}
      </span>
    </div>
  );
}
