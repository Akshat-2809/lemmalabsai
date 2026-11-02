import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc, type LegalSection, type LegalSummaryRow } from "@/components/LegalDoc";
import s from "@/components/LegalDoc.module.css";
import { LEGAL_ENTITY } from "@/lib/legal";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Lemma Labs",
  description: "What this website collects, what happens when you email us, why, who sees it, and your rights.",
  alternates: { canonical: "/privacy" },
};

const mail = <a href={`mailto:${EMAIL}?subject=Privacy`}>{EMAIL}</a>;

const SUMMARY: LegalSummaryRow[] = [
  { subject: "The early access form", answer: "It doesn’t send or store anything. It opens your own email app with a message to us, and we only receive it if you send it." },
  { subject: "When you email us", answer: "We use what you write to reply and to run early access. Nothing else." },
  { subject: "Cookies and tracking", answer: "None. No analytics, no advertising cookies, no tracking pixels." },
  { subject: "What we never do", answer: "Sell your data, use it for advertising, or follow you around the web." },
  { subject: "To reach us", answer: <>Write to {mail}.</> },
];

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          This website is run by {LEGAL_ENTITY} (&ldquo;Lemma Labs&rdquo;, &ldquo;we&rdquo; or &ldquo;us&rdquo;), an AI startup based
          in Manchester, United Kingdom. For the personal data described here, we are the controller under the UK General Data
          Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>
        <p>
          This policy covers this website and the emails you send us. It doesn&apos;t cover the product we are building, which is not
          yet available and will have its own terms when it is.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <h3>When you visit</h3>
        <p>
          Our hosting provider keeps standard request logs (IP address, time, page requested, browser) for security and
          reliability. We use no cookies, analytics or advertising tools, and our fonts are served from our own domain.
        </p>
        <h3>When you use the early access form</h3>
        <p>
          Nothing is sent to us by the website. The form checks the email address in your browser, then opens your own email app
          with a message addressed to us. We only receive it if you choose to send it.
        </p>
        <h3>When you email us</h3>
        <p>
          Whether through the early access form or one of the contact links, we receive your email address, your name if you include
          it, and whatever you write, such as your company or team size.
        </p>
        <h3>The illustrations on the page</h3>
        <p>The diagram, the activity log and the memory card are illustrations built into the page. They don&apos;t use or show anyone&apos;s real data.</p>
      </>
    ),
  },
  {
    id: "why-we-use-it",
    title: "Why we use it, and on what basis",
    body: (
      <ul>
        <li><b>To reply to you and run early access,</b> including deciding which teams to work with first. Our lawful basis is our legitimate interest in answering the people who contact us, or taking steps you ask for before entering into an agreement.</li>
        <li><b>To keep the website safe</b> and running. Our lawful basis is our legitimate interest in protecting it.</li>
        <li><b>To meet legal duties</b> and answer lawful requests. Our lawful basis is legal obligation.</li>
      </ul>
    ),
  },
  {
    id: "who-can-see-it",
    title: "Who can see it",
    body: (
      <>
        <p>Only where needed:</p>
        <ul>
          <li><b>Our hosting provider,</b> which runs the website and keeps its request logs.</li>
          <li><b>Our email provider,</b> which stores and delivers the emails you send us.</li>
          <li><b>Professional advisers,</b> such as lawyers or accountants, where they need it to advise us.</li>
          <li><b>Authorities and courts,</b> where the law requires it or to protect our legal rights.</li>
        </ul>
        <p>These providers act on our instructions. We don&apos;t sell your data or share it for anyone else&apos;s marketing.</p>
      </>
    ),
  },
  {
    id: "transfers",
    title: "Data outside the UK",
    body: (
      <p>
        Our providers may process data outside the United Kingdom. Where they do, we rely on the safeguards UK law provides, such as
        UK adequacy regulations or the UK International Data Transfer Agreement or Addendum.
      </p>
    ),
  },
  {
    id: "how-long",
    title: "How long we keep it",
    body: (
      <ul>
        <li><b>Request logs</b> are kept by our hosting provider for a short period under its own retention policy.</li>
        <li><b>Emails</b> are kept for as long as we need them to reply to you and run early access, then deleted. You can ask us to delete them sooner at any time.</li>
      </ul>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>
          Under UK data protection law you have the right to ask for a copy of the data we hold about you, to have it corrected or
          erased, to restrict or object to how we use it, and to receive it in a portable format. To make a request, write to {mail}.
          We&apos;ll answer within one month.
        </p>
        <p>
          You also have the right to complain to the Information Commissioner&apos;s Office (ICO), the UK data protection regulator,
          at <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">ico.org.uk ↗</a>. We&apos;d be
          grateful for the chance to put things right first.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Keeping it safe",
    body: <p>The website is served over an encrypted connection, and access to our email is limited to the people at Lemma Labs who need it to reply to you.</p>,
  },
  {
    id: "children",
    title: "Children",
    body: <p>This website and our product are for businesses. They aren&apos;t aimed at children, and we don&apos;t knowingly collect data from anyone under 18.</p>,
  },
  {
    id: "other-sites",
    title: "Other websites",
    body: <p>Some links lead to other websites, such as our founder&apos;s LinkedIn profile. Their own privacy policies apply there, not this one.</p>,
  },
  {
    id: "changes",
    title: "When this policy changes",
    body: (
      <p>
        We&apos;ll post the new version here with a new date. If the website starts collecting anything new, such as through a form
        that sends data directly to us, this policy will say so first. See also our <Link href="/terms">Terms of Service</Link>.
      </p>
    ),
  },
  {
    id: "contact",
    title: "How to reach us",
    body: (
      <div className={s.stuck}>
        <p><b>{LEGAL_ENTITY}</b> · Manchester, United Kingdom</p>
        <p>Write to {mail}, with &ldquo;Privacy&rdquo; in the subject line.</p>
      </div>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      intro="What this website collects when you visit or ask for early access, what happens when you email us, and your rights."
      summary={SUMMARY}
      sections={SECTIONS}
    />
  );
}
