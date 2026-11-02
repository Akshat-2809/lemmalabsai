import { STATUS } from "@/lib/data";
import { AccessForm } from "./AccessForm";
import styles from "./Access.module.css";

export function Access() {
  return (
    <section id="access" className="sec dark" data-sec="8" aria-labelledby="access-h">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <div className="kick rv"><span className="mono">§8</span><span className="math" style={{ color: "var(--lilac)" }}>Early access</span></div>
          <h2 className="h2 rv" id="access-h">Still in stealth. Opening to a few teams first.</h2>
          <p className={`${styles.lede} rv`}>We&apos;re building quietly and working with a small group of early teams. Leave a work email and we&apos;ll be in touch.</p>
          <AccessForm />
        </div>
        <dl className={`${styles.red} rv`}>
          {STATUS.map((row) => (
            <div className={styles.rr} key={row.label}>
              <dt className="mono">{row.label}</dt>
              <dd>
                {row.redacted ? (
                  <span className={styles.bars}>
                    <span className="sr-only">Redacted</span>
                    {row.redacted.map((w, i) => <span className={styles.rb} style={{ width: w }} key={i} aria-hidden="true" />)}
                  </span>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
