import { NIGHT_LOG } from "@/lib/data";
import { Kicker } from "./Kicker";
import styles from "./Night.module.css";

export function Night() {
  return (
    <section id="night" className="sec" data-sec="4" aria-labelledby="night-h">
      <div className={`wrap ${styles.night}`}>
        <div>
          <Kicker n={4}>Overnight</Kicker>
          <h2 className="h2 rv" id="night-h">While the team sleeps, the loop keeps running.</h2>
          <p className="sub rv">Safe work gets done and reported. Anything risky waits for a person to approve it in the morning.</p>
        </div>
        <figure className={`${styles.log} rv`} aria-label="Illustrated overnight activity log">
          <figcaption className={styles.logh}>
            <span className="mono">Activity log · illustration</span>
            <span className="mono">Night shift <span className={styles.cursor} aria-hidden="true" /></span>
          </figcaption>
          <ol>
            {NIGHT_LOG.map((e) => (
              <li className={styles.lg} key={e.tm}>
                <time className={styles.tm}>{e.tm}</time>
                <span>{e.text}</span>
                <span className={`${styles.st} ${e.ask ? styles.ask : ""}`}>{e.ask ? "Needs you" : "Done"}</span>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  );
}
