type InkRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

export function InkReveal({
  children,
  className = "",
  delay = 0,
  duration,
}: InkRevealProps) {
  const style = {
    "--ink-reveal-delay": `${delay}ms`,
    ...(duration
      ? { "--ink-reveal-duration": `${duration}ms` }
      : {}),
  } as React.CSSProperties;

  return (
    <div className={`ink-reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
