import Image from "next/image";
import founderPhoto from "@/assets/founder/geetinder-singh.jpg";
import { FOUNDER_FACTS, FOUNDER_QUOTE } from "@/lib/data";
import { FOUNDER_LINKEDIN, FOUNDER_NAME } from "@/lib/site";
import { Kicker } from "./Kicker";
import styles from "./Founder.module.css";

export function Founder() {
  return (
    <section id="founder" className="sec" data-sec="9" aria-labelledby="founder-h">
      <div className="wrap">
        <Kicker n={9}>Founder</Kicker>
        <h2 className="h2 rv" id="founder-h">{FOUNDER_NAME}</h2>
        <div className={styles.fnd}>
          {/* the design's striped 4:5 frame, with the round portrait set in it */}
          <figure className={`${styles.photo} rv`}>
            <Image src={founderPhoto} alt={`${FOUNDER_NAME}, founder of Lemma Labs`} sizes="(max-width: 980px) 70vw, 300px" placeholder="blur" />
            <figcaption className="mono">{FOUNDER_NAME} · Founder</figcaption>
          </figure>
          <div className="rv">
            <blockquote className={styles.qt}><p>{FOUNDER_QUOTE}</p></blockquote>
            <dl className={styles.dl}>
              {FOUNDER_FACTS.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
            <div className="btns">
              <a className="btn g" href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
