import { HERO_STATS } from "@/lib/data";
import { HeroDiagram } from "./HeroDiagram";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div className="wrap">
      <section className={styles.hero} data-sec="0" aria-labelledby="hero-h">
        <div>
          <span className={`${styles.tag} mono`}><span className={styles.dot} aria-hidden="true" />AI startup · in stealth · Manchester, UK</span>
          <h1 className={styles.h1} id="hero-h">Ambitious ideas, proven into <em>high-performance</em> products.</h1>
          <p className={styles.lede}>Lemma Labs is building an autonomous AI agent that works inside a company: it watches the tools a team already uses, takes on routine work, and asks before anything risky.</p>
          <div className="btns">
            <a className="btn p" href="#access">Request early access</a>
            <a className="btn g" href="#loop">See how it works</a>
          </div>
          <dl className={styles.hstats}>
            {HERO_STATS.map(([value, text]) => (
              <div key={value}><dt>{value}</dt><dd>{text}</dd></div>
            ))}
          </dl>
        </div>
        <HeroDiagram />
      </section>
    </div>
  );
}
