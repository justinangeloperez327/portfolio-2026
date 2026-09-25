type InkWashProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
};

export function InkWash({
  className = "",
  size = "md",
  style,
}: InkWashProps) {
  return (
    <span
      aria-hidden="true"
      className={`ink-wash ink-wash--${size} ${className}`.trim()}
      style={style}
    />
  );
}
