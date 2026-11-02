import { LEMMAS } from "@/lib/data";
import { Kicker } from "./Kicker";
import styles from "./Principles.module.css";

export function Principles() {
  return (
    <section id="principles" className="sec" data-sec="1" aria-labelledby="principles-h">
      <div className="wrap">
        <Kicker n={1}>Principles</Kicker>
        <h2 className="h2 rv" id="principles-h">Four lemmas we build on.</h2>
        <ol className={styles.lem}>
          {LEMMAS.map((l, i) => (
            <li className={`${styles.lc} rv`} key={l.title}>
              <span className="mono" style={{ color: "var(--mute)" }}>Lemma {i + 1}</span>
              <h3>{l.title} <i>{l.em}</i></h3>
              <p>{l.text}</p>
              <span className={styles.tomb} aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
