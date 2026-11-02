import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found — Lemma Labs",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={`wrap ${styles.inner}`}>
        <Link className={styles.logo} href="/" aria-label="Lemma Labs home">
          <LogoMark />
          <span><b>Lemma</b> Labs</span>
        </Link>
        <span className="mono" style={{ color: "var(--mute)" }}>Error 404</span>
        <h1 className={styles.big}>This page is <em>undefined.</em></h1>
        <p className={styles.note}>There&apos;s nothing at this address. Nothing to prove here.</p>
        <Link className="btn p" href="/">Back to the home page</Link>
        <span className={styles.tomb} aria-hidden="true" />
      </div>
    </main>
  );
}
