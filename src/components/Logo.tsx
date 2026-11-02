export function LogoMark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" aria-hidden="true">
      <rect x="1" y="5" width="20" height="20" fill="#0D0E12" />
      <rect x="17" y="1" width="8" height="8" style={{ fill: "var(--accent)" }} />
    </svg>
  );
}
