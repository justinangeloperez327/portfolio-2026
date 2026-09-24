type InkRuleProps = {
  className?: string;
};

export function InkRule({ className = "" }: InkRuleProps) {
  return (
    <div
      aria-hidden="true"
      className={`ink-rule ${className}`.trim()}
    />
  );
}
