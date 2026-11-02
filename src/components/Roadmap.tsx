import { ROADMAP } from "@/lib/data";
import { Kicker } from "./Kicker";
import styles from "./Roadmap.module.css";

export function Roadmap() {
  return (
    <section id="start" className="sec" data-sec="7" aria-labelledby="start-h">
      <div className="wrap">
        <Kicker n={7} pill="Roadmap · may change">Where it starts</Kicker>
        <h2 className="h2 rv" id="start-h">Engineering first. Then the rest of the company.</h2>
        <div className={styles.road}>
          <div className={`${styles.rd} ${styles.first} rv`}>
            <span className="mono">First</span>
            <div className={styles.chips}>{ROADMAP.first.teams.map((t) => <span className={styles.chip} key={t}>{t}</span>)}</div>
            <ul>{ROADMAP.first.items.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <div className={`${styles.rd} rv`}>
            <span className="mono" style={{ color: "var(--mute)" }}>Next</span>
            <div className={styles.chips}>{ROADMAP.next.teams.map((t) => <span className={styles.chip} key={t}>{t}</span>)}</div>
            <ul>{ROADMAP.next.items.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
