"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data";
import styles from "./Faq.module.css";

/** One answer open at a time; the first starts open. */
export function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <div className={`${styles.faq} rv`}>
      {FAQS.map((f, i) => (
        <div className={styles.fq} key={f.q}>
          <h3>
            <button type="button" id={`fq-${i}`} aria-expanded={open === i} aria-controls={`fa-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{f.q}</span>
              <span className={styles.pm} aria-hidden="true">{open === i ? "−" : "+"}</span>
            </button>
          </h3>
          <div id={`fa-${i}`} role="region" aria-labelledby={`fq-${i}`} hidden={open !== i}>
            <p>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
