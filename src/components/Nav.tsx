"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SECTIONS } from "@/lib/data";
import { LogoMark } from "./Logo";
import styles from "./Nav.module.css";

const LAST = SECTIONS.length - 1;
/* the index matrix lists §1 to §11, then "back to top" */
const ORDER = [...SECTIONS.keys()].slice(1).concat(0);

function jump(i: number) {
  document.querySelector(`[data-sec="${i}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** The floating nav. On the home page it also counts sections (§a / 11); elsewhere the counter is left out. */
export function Nav({ home = false }: { home?: boolean }) {
  const [a, setA] = useState(0);
  const [open, setOpen] = useState(false);
  const idxRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const base = home ? "" : "/";

  useEffect(() => {
    if (!home) return;
    let raf = 0;
    const check = () => {
      raf = 0;
      let cur = 0;
      document.querySelectorAll("[data-sec]").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = Number(el.getAttribute("data-sec"));
      });
      setA(cur);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [home]);

  useEffect(() => {
    if (!open) return;
    const idx = idxRef.current;
    closeRef.current?.focus();
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      idx?.focus({ preventScroll: true });
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={styles.nav}>
        <div className={styles.navin}>
          <Link className={styles.brand} href={`${base}#top`} aria-label="Lemma Labs home">
            <LogoMark />
            <span><b>Lemma</b> Labs</span>
          </Link>

          {home && (
            <nav className={styles.thm} aria-label="Section navigation">
              <button type="button" aria-label="Previous section" onClick={() => jump(Math.max(0, a - 1))} disabled={a <= 0}>
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13V3M3.5 7.5L8 3l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
              </button>
              <span className={styles.frac} aria-label={`Section ${a} of ${LAST}`}><b>{a}</b><span>{LAST}</span></span>
              <div className={styles.thml} aria-live="polite">
                <small>Section</small>
                <strong key={a}>{SECTIONS[a].name}</strong>
              </div>
              <button type="button" aria-label="Next section" onClick={() => jump(Math.min(LAST, a + 1))} disabled={a >= LAST}>
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M3.5 8.5L8 13l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
              </button>
            </nav>
          )}

          <div className={styles.navr}>
            <button type="button" ref={idxRef} className={styles.idx} onClick={() => setOpen(true)} aria-expanded={open} aria-controls="site-index">
              <span className={styles.bk} aria-hidden="true">[ ]</span>
              <span className={styles.idxt}>Index</span>
              <span className="sr-only">Open the site index</span>
            </button>
            <Link className={styles.talk} href={`${base}#talk`}>Let&apos;s talk</Link>
          </div>
        </div>
      </header>

      {open && (
        <div className={styles.ov} id="site-index" role="dialog" aria-modal="true" aria-label="Site index">
          <div className={styles.ovtop}>
            <span className="mono">Lemma Labs · Index · 3 × 4</span>
            <button type="button" ref={closeRef} className={styles.ovx} aria-label="Close index" onClick={close}>
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.8" /></svg>
            </button>
          </div>
          <p className={styles.ovh}>Every section, as a <i>matrix.</i></p>
          <div className={styles.mwrap}>
            <ul className={styles.mgrid}>
              {ORDER.map((n, k) => (
                <li key={n}>
                  <Link
                    className={`${styles.mc} ${home && n === a ? styles.on : ""}`}
                    href={`${base}#${SECTIONS[n].id}`}
                    onClick={close}
                    style={{ animationDelay: `${k * 40}ms` }}
                    aria-current={home && n === a ? "location" : undefined}
                  >
                    <i aria-hidden="true">a<sub>{Math.floor(k / 4) + 1}{(k % 4) + 1}</sub></i>
                    <div>
                      <small>§{n}</small>
                      <br />
                      <b>{n === 0 ? "Back to top ∎" : SECTIONS[n].name}</b>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.ovlegal}>
            <Link href="/privacy" onClick={close}>Privacy Policy</Link>
            <Link href="/terms" onClick={close}>Terms of Service</Link>
          </div>
        </div>
      )}
    </>
  );
}
