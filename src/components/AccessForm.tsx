"use client";

import { useState, type FormEvent } from "react";
import { accessSchema } from "@/lib/access/schema";
import { EMAIL } from "@/lib/site";
import styles from "./Access.module.css";

function mailto(email: string) {
  const subject = "Early access request";
  const body = `Hello Lemma Labs,\n\nI'd like early access for my team.\n\nWork email: ${email}\nCompany:\nTeam size:\n`;
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * No backend: the form checks the address, then opens the visitor's email app with the request
 * written out to hello@lemmalabsai.com. Nothing is sent or stored by the site itself.
 */
export function AccessForm() {
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = accessSchema.safeParse({ email: new FormData(e.currentTarget).get("email") ?? "" });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      setSent(null);
      return;
    }
    setError(null);
    setSent(parsed.data.email);
    window.location.href = mailto(parsed.data.email);
  }

  return (
    <form className={`${styles.notify} rv`} onSubmit={onSubmit} noValidate>
      <label className="mono" htmlFor="ll-mail">Work email</label>
      <input
        id="ll-mail"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@company.com"
        required
        maxLength={254}
        aria-invalid={!!error}
        aria-describedby={error ? "ll-mail-err" : sent ? "ll-mail-ok" : "ll-mail-note"}
        onChange={() => error && setError(null)}
      />
      <button type="submit">Request access</button>
      <p className={styles.note} id="ll-mail-note">Opens your email app with the request written to {EMAIL}. Nothing is stored on this site.</p>
      <div role="status" className={styles.live}>
        {error && <p className={styles.err} id="ll-mail-err">{error}</p>}
        {sent && (
          <p className={styles.ok} id="ll-mail-ok">
            Your email app should open with the request ready. Send it and we&apos;ll be in touch. Nothing opened? Write to{" "}
            <a href={mailto(sent)}>{EMAIL}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
