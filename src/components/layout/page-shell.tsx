import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <main className={`page-shell ${className}`.trim()}>
      <div className="container-page">{children}</div>
    </main>
  );
}
