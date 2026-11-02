"use client";

import { STAGES } from "@/lib/data";
import { useAutoStep } from "./useAutoStep";
import styles from "./HeroDiagram.module.css";

const PATHS = [
  "M96 80 C180 80 180 160 260 160",
  "M96 160 H260",
  "M96 240 C180 240 180 160 260 160",
  "M260 160 C340 160 340 80 424 80",
  "M260 160 H424",
  "M260 160 C340 160 340 240 424 240",
];
const ROWS = [80, 160, 240];
const GAUGES: [label: string, fill: string, cls: string][] = [
  ["THROUGHPUT", "#0D0E12", "b1"],
  ["EFFICIENCY", "var(--accent)", "b2"],
  ["SCALE", "#0D0E12", "b3"],
];

/** Idea → architecture → running system. Steps itself every 2.8s until someone picks a stage. */
export function HeroDiagram() {
  const [s, pick] = useAutoStep(STAGES.length);

  return (
    <div className={styles.diag}>
      <div className={styles.steps} role="group" aria-label="Show a stage of the approach">
        {STAGES.map((st, i) => (
          <button type="button" key={st.label} className={`${styles.step} ${i === s ? styles.on : ""}`} aria-pressed={i === s} onClick={() => pick(i)}>
            {st.label}
          </button>
        ))}
      </div>
      <div className={`${styles.hx} ${styles[`s${s}`]}`}>
        <svg viewBox="0 0 520 380" role="img" aria-label="Illustration: an idea becomes an architecture, then a running system">
          <rect x="0" y="0" width="520" height="380" fill="#FBFAF6" />
          <g stroke="rgba(13,14,18,.07)" strokeWidth="1">
            <path d="M0 40H520M0 80H520M0 120H520M0 160H520M0 200H520M0 240H520M0 280H520M0 320H520" />
            <path d="M40 0V380M80 0V380M120 0V380M160 0V380M200 0V380M240 0V380M280 0V380M320 0V380M360 0V380M400 0V380M440 0V380M480 0V380" />
          </g>
          <g className={styles.arch} fill="none" stroke="#0D0E12" strokeWidth="1.5">
            {PATHS.map((d) => <path key={d} className={styles.ln} d={d} />)}
          </g>
          <g className={styles.run} fill="none" style={{ stroke: "var(--accent)" }} strokeWidth="2.5" strokeLinecap="round">
            {PATHS.map((d) => <path key={d} className={styles.flow} d={d} />)}
          </g>
          <g className={styles.arch}>
            {ROWS.map((y) => <rect key={`in${y}`} x="72" y={y - 14} width="28" height="28" fill="#FBFAF6" stroke="#0D0E12" strokeWidth="1.5" />)}
            {ROWS.map((y) => <rect key={`out${y}`} x="420" y={y - 14} width="28" height="28" fill="#0D0E12" />)}
            <text x="86" y="286" textAnchor="middle" style={{ fontFamily: "var(--mono)" }} fontSize="10" fill="#565962">TOOLS</text>
            <text x="434" y="286" textAnchor="middle" style={{ fontFamily: "var(--mono)" }} fontSize="10" fill="#565962">DONE</text>
          </g>
          <circle className={styles.halo} cx="260" cy="160" r="34" fill="none" style={{ stroke: "var(--accent)" }} strokeWidth="1.5" />
          <circle cx="260" cy="160" r="26" style={{ fill: "var(--accent)" }} />
          <text x="260" y="167" textAnchor="middle" style={{ fontFamily: "var(--serif)", fontStyle: "italic" }} fontSize="22" fill="#FFFFFF">f(x)</text>
          <text x="260" y="214" textAnchor="middle" style={{ fontFamily: "var(--mono)" }} fontSize="10" fill="#565962">AGENT</text>
          <g className={styles.run} style={{ fontFamily: "var(--mono)" }} fontSize="10" fill="#565962">
            {GAUGES.map(([label, fill, cls], i) => {
              const y = 311 + i * 22;
              return (
                <g key={label}>
                  <text x="40" y={y + 9}>{label}</text>
                  <rect x="150" y={y} width="320" height="10" fill="rgba(13,14,18,.08)" />
                  <rect className={`${styles.bar} ${styles[cls]}`} x="150" y={y} width="320" height="10" style={{ fill }} />
                </g>
              );
            })}
          </g>
        </svg>
      </div>
      <span className={styles.cap} aria-live="polite">{STAGES[s].text} · Illustration, not a product screenshot.</span>
    </div>
  );
}
