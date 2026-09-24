type StatusIndicatorProps = {
  label: string;
  tone?: "default" | "accent";
};

export function StatusIndicator({
  label,
  tone = "default",
}: StatusIndicatorProps) {
  return (
    <span className="status-indicator">
      <span
        aria-hidden="true"
        className={`status-indicator__dot status-indicator__dot--${tone}`}
      />
      {label}
    </span>
  );
}
