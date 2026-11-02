import type { ReactNode } from "react";

/** The section label: §n, its name in italic, and an optional status pill. */
export function Kicker({ n, pill, children }: { n: number; pill?: string; children: ReactNode }) {
  return (
    <div className="kick rv">
      <span className="mono">§{n}</span>
      <span className="math">{children}</span>
      {pill && <span className="pill"><i aria-hidden="true" />{pill}</span>}
    </div>
  );
}
