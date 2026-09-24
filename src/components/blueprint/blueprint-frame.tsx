import type { ReactNode } from "react";

type BlueprintFrameProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function BlueprintFrame({
  title,
  description,
  children,
  className = "",
}: BlueprintFrameProps) {
  return (
    <figure className={`blueprint-frame ${className}`.trim()}>
      <figcaption className="blueprint-frame__caption">
        <span className="technical-label">Software blueprint</span>
        <strong>{title}</strong>
        {description ? <span>{description}</span> : null}
      </figcaption>
      <div className="blueprint-frame__canvas">{children}</div>
    </figure>
  );
}
