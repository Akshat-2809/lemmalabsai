import { BUSYWORK } from "@/lib/data";
import { Kicker } from "./Kicker";
import styles from "./Problem.module.css";

/** Busywork, struck out as it scrolls past. */
export function Problem() {
  return (
    <section id="problem" className="sec" data-sec="2" aria-labelledby="problem-h">
      <div className="wrap">
        <Kicker n={2}>The problem</Kicker>
        <h2 className="h2 rv" id="problem-h">Teams spend the day moving work, not doing it.</h2>
        <ul className={styles.busy}>
          {BUSYWORK.map(([n, task, note]) => (
            <li className={styles.bz} key={n}>
              <span className={styles.n}>{n}</span>
              <span className={styles.t}>{task}</span>
              <span className={styles.r}>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
