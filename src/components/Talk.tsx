import { DOORS } from "@/lib/data";
import { EMAIL } from "@/lib/site";
import { Kicker } from "./Kicker";
import styles from "./Talk.module.css";

export function Talk() {
  return (
    <section id="talk" className="sec" data-sec="11" aria-labelledby="talk-h">
      <div className="wrap">
        <Kicker n={11}>Let&apos;s talk</Kicker>
        <h2 className="h2 rv" id="talk-h">Engineers, founders and investors: say hello.</h2>
        <div className={styles.doors}>
          {DOORS.map((d) => (
            <a className={`${styles.door} rv`} href={`mailto:${EMAIL}?subject=${d.subject}`} key={d.title}>
              <span className={styles.sym} aria-hidden="true">{d.sym}</span>
              <div><h3>{d.title}</h3><p>{d.text}</p></div>
              <span className={styles.go}>{EMAIL} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
