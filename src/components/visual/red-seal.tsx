type RedSealProps = {
  children?: React.ReactNode;
  className?: string;
  label?: string;
};

export function RedSeal({
  children = "JP",
  className = "",
  label = "Justin Angelo Perez",
}: RedSealProps) {
  return (
    <span
      className={`red-seal ${className}`.trim()}
      aria-label={label}
    >
      {children}
    </span>
  );
}
