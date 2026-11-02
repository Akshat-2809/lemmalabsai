import { MEMORY } from "@/lib/data";
import { Kicker } from "./Kicker";
import styles from "./Memory.module.css";

export function Memory() {
  return (
    <section id="memory" className="sec" data-sec="5" aria-labelledby="memory-h">
      <div className={`wrap ${styles.mem}`}>
        <figure className={`${styles.mcard} rv`} aria-label="Illustration of the agent's memory: facts with a source and confidence">
          <figcaption className={styles.mhead}>
            <span className="mono">Company memory</span>
            <span className="mono" style={{ color: "var(--mute)" }}>Sample entries · illustration</span>
          </figcaption>
          <ul>
            {MEMORY.map((m) => (
              <li className={styles.mrow} key={m.fact}>
                <div><b>{m.fact}</b><span>Source: {m.source}</span></div>
                <div className={styles.conf} role="img" aria-label={`Confidence ${m.conf}%`}><i style={{ width: `${m.conf}%` }} /></div>
                {/* part of the illustration, not working controls */}
                <div className={styles.macts} aria-hidden="true"><span>Edit</span><span>Erase</span></div>
              </li>
            ))}
          </ul>
        </figure>
        <div>
          <Kicker n={5}>Memory</Kicker>
          <h2 className="h2 rv" id="memory-h">A memory you can read, edit and erase.</h2>
          <p className="sub rv">It keeps the company&apos;s context: projects, decisions, client needs and how the team likes to work. Every fact shows where it came from and how sure it is.</p>
        </div>
      </div>
    </section>
  );
}
