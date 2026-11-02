import Link from "next/link";
import { LEGAL_ENTITY } from "@/lib/legal";
import { EMAIL, FOUNDER_LINKEDIN } from "@/lib/site";
import styles from "./Footer.module.css";

const COLUMNS: { head: string; links: [label: string, href: string][] }[] = [
  { head: "Product", links: [["The loop", "/#loop"], ["Memory", "/#memory"], ["Privacy", "/#private"], ["Roadmap", "/#start"]] },
  { head: "Company", links: [["Founder", "/#founder"], ["FAQ", "/#faq"], [EMAIL, `mailto:${EMAIL}`], ["LinkedIn ↗", FOUNDER_LINKEDIN]] },
  { head: "Legal", links: [["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"]] },
];

export function Footer() {
  return (
    <footer className={styles.foot}>
      <div className="wrap">
        <div className={styles.ftop}>
          <p className={styles.fsay}>Ideas in, systems out. <i>Quod erat demonstrandum.</i></p>
          <div className={styles.bigtomb} aria-hidden="true"><div className={styles.a} /><div className={styles.b} /></div>
        </div>
        <div className={styles.fgrid}>
          <div>
            <h2 className={styles.head}>Lemma Labs</h2>
            <p>AI startup in stealth</p>
            <p>Manchester, UK</p>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.head} aria-labelledby={`f-${col.head}`}>
              <h2 className={styles.head} id={`f-${col.head}`}>{col.head}</h2>
              {col.links.map(([label, href]) =>
                href.startsWith("http") ? (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                ) : href.startsWith("mailto:") ? (
                  <a key={label} href={href}>{label}</a>
                ) : (
                  <Link key={label} href={href}>{label}</Link>
                ),
              )}
            </nav>
          ))}
        </div>
        <div className={`${styles.fbot} mono`}>
          <span>© 2026 {LEGAL_ENTITY} · lemmalabsai.com</span>
          <span>∎ End of proof</span>
        </div>
      </div>
    </footer>
  );
}
