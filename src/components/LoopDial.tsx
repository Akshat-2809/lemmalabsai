"use client";

import { LOOP } from "@/lib/data";
import { useAutoStep } from "./useAutoStep";
import styles from "./Loop.module.css";

/* the four nodes on the ring: top, right, bottom, left */
const NODES: [cx: number, cy: number][] = [[180, 50], [310, 180], [180, 310], [50, 180]];

/** Observe → Decide → Act → Learn. Steps itself every 2.8s until someone picks a step. */
export function LoopDial() {
  const [l, pick] = useAutoStep(LOOP.length);
  const cur = LOOP[l];

  return (
    <div className={styles.loop}>
      <div className={`${styles.ring} rv`}>
        <svg viewBox="0 0 360 360" aria-hidden="true">
          <circle cx="180" cy="180" r="130" fill="none" stroke="rgba(13,14,18,.14)" strokeWidth="1.5" />
          <g className={styles.spin}><circle cx="180" cy="180" r="150" fill="none" stroke="rgba(13,14,18,.25)" strokeWidth="1" strokeDasharray="2 10" /></g>
          <g className={styles.arm} style={{ transform: `rotate(${l * 90}deg)` }}>
            <path d="M180 50 A130 130 0 0 1 310 180" fill="none" style={{ stroke: "var(--accent)" }} strokeWidth="4" strokeLinecap="round" />
          </g>
          {NODES.map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i === l ? 14 : 9} style={{ fill: i === l ? "var(--accent)" : "#FBFAF6" }} stroke="#0D0E12" strokeWidth="1.5" />
          ))}
          <text x="180" y="176" textAnchor="middle" style={{ fontFamily: "var(--serif)", fontStyle: "italic" }} fontSize="34" fill="#0D0E12">{cur.t}</text>
          <text x="180" y="204" textAnchor="middle" style={{ fontFamily: "var(--mono)" }} fontSize="11" fill="#565962">STEP {l + 1} OF 4</text>
        </svg>
      </div>
      <div className="rv">
        <div className={styles.lbtns} role="group" aria-label="Choose a step of the loop">
          {LOOP.map((it, i) => (
            <button type="button" key={it.t} className={`${styles.lb} ${i === l ? styles.on : ""}`} aria-pressed={i === l} onClick={() => pick(i)}>
              <small>0{i + 1}</small>
              <b>{it.t}</b>
            </button>
          ))}
        </div>
        <div className={styles.ldet} aria-live="polite">
          <h3>{cur.t}</h3>
          <p>{cur.x}</p>
          <ul>
            {cur.tags.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
