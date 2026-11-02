import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = "Lemma Labs — Ambitious ideas, proven into high-performance products.";

function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26">
      <rect x="1" y="5" width="20" height="20" fill="#0D0E12" />
      <rect x="17" y="1" width="8" height="8" fill="#2B3BFF" />
    </svg>
  );
}

/** Shared by opengraph-image and twitter-image. */
export function renderOgImage() {
  // Sync reads keep the image prerendered at build time (async fs would make it dynamic).
  const font = (file: string) => readFileSync(join(process.cwd(), "assets", file));

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "60px 72px", background: "#F4F3EE", color: "#0D0E12", fontFamily: "STIX Two Text" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <Mark size={56} />
            <span style={{ fontSize: 46 }}><span style={{ fontStyle: "italic" }}>Lemma</span>&nbsp;Labs</span>
          </div>
          <span style={{ fontFamily: "JetBrains Mono", fontSize: 20, letterSpacing: "0.08em", color: "#565962" }}>IN STEALTH · MANCHESTER, UK</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 78, lineHeight: 1.04, letterSpacing: "-0.02em", maxWidth: 1060 }}>
          Ambitious ideas, proven into&nbsp;<span style={{ fontStyle: "italic", color: "#2B3BFF" }}>high-performance</span>&nbsp;products.
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1.5px solid #0D0E12", paddingTop: 22 }}>
          <span style={{ fontFamily: "JetBrains Mono", fontSize: 20, letterSpacing: "0.08em", color: "#565962" }}>LEMMALABSAI.COM</span>
          <div style={{ width: 22, height: 22, background: "#0D0E12" }} />
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "STIX Two Text", data: font("STIXTwoText-500.woff"), style: "normal", weight: 500 },
        { name: "STIX Two Text", data: font("STIXTwoText-500-italic.woff"), style: "italic", weight: 500 },
        { name: "JetBrains Mono", data: font("JetBrainsMono-400.woff"), style: "normal", weight: 400 },
      ],
    },
  );
}

export function renderAppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#F4F3EE" }}>
        <Mark size={124} />
      </div>
    ),
    { width: 180, height: 180 },
  );
}
