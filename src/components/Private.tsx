import { DEPLOY, GUARANTEES } from "@/lib/data";
import { Kicker } from "./Kicker";
import styles from "./Private.module.css";

export function Private() {
  return (
    <section id="private" className="sec" data-sec="6" aria-labelledby="private-h">
      <div className="wrap">
        <Kicker n={6} pill="Planned">Private by design</Kicker>
        <h2 className="h2 rv" id="private-h">It lives inside your company. Nothing leaves.</h2>
        <div className={styles.dep}>
          {DEPLOY.map(([option, title, text]) => (
            <div className={`${styles.dc} rv`} key={option}>
              <span className="mono" style={{ color: "var(--mute)" }}>{option}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <ul className={`${styles.guar} rv`}>
          {GUARANTEES.map(([sym, title, text]) => (
            <li className={styles.gu} key={title}>
              <span className="math" aria-hidden="true">{sym}</span>
              <b>{title}</b>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
