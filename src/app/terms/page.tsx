import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc, type LegalSection, type LegalSummaryRow } from "@/components/LegalDoc";
import { LEGAL_ENTITY } from "@/lib/legal";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Lemma Labs",
  description: "The rules for using the Lemma Labs website and asking for early access.",
  alternates: { canonical: "/terms" },
};

const mail = <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;

const SUMMARY: LegalSummaryRow[] = [
  { subject: "This website", answer: "It describes a product that is still in development. Plans, features and the roadmap may change." },
  { subject: "Early access", answer: "Asking for it isn’t a contract and doesn’t guarantee access or a date. Any pilot will have its own agreement." },
  { subject: "Illustrations", answer: "The diagram, activity log and memory card are illustrations, not product screenshots or real data." },
  { subject: "Questions", answer: <>Write to {mail}.</> },
];

const SECTIONS: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    body: (
      <>
        <p>
          These terms cover your use of this website (the &ldquo;Website&rdquo;), run by {LEGAL_ENTITY} (&ldquo;Lemma Labs&rdquo;,
          &ldquo;we&rdquo; or &ldquo;us&rdquo;), based in Manchester, United Kingdom. By using the Website, you agree to them. If you
          don&apos;t agree, please don&apos;t use it.
        </p>
        <p>
          They don&apos;t cover our product, which will have its own terms. How we handle personal data is explained in our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: "product",
    title: "A product in development",
    body: (
      <ul>
        <li><b>Plans, not promises.</b> Lemma Labs is in stealth. What the Website says about the product, including where it runs, how it asks for approval, its memory and the roadmap, describes what we are building and may change, arrive later or not happen at all.</li>
        <li><b>Not an offer.</b> Nothing on the Website is an offer to sell or supply anything.</li>
        <li><b>Illustrations.</b> The stage diagram, the overnight activity log and the company memory card are illustrations. They are not screenshots of the product and don&apos;t show real data.</li>
      </ul>
    ),
  },
  {
    id: "early-access",
    title: "Early access",
    body: (
      <ul>
        <li><b>How it works.</b> The early access form opens your own email app with a message to us. Nothing is sent until you send that email.</li>
        <li><b>No promise of access.</b> Asking for early access doesn&apos;t create a contract or an account, and doesn&apos;t guarantee access, a date or a price. We choose which teams to work with first.</li>
        <li><b>Its own agreement.</b> If we work together on a pilot, it will be under a separate written agreement, not these terms.</li>
      </ul>
    ),
  },
  {
    id: "contacting-us",
    title: "What you send us",
    body: (
      <>
        <p>
          Please don&apos;t send us confidential information unless we have agreed in writing to keep it confidential. If you send us
          ideas or feedback, you agree we may use them without owing you anything for them.
        </p>
      </>
    ),
  },
  {
    id: "ownership",
    title: "Names, content and design",
    body: (
      <>
        <p>
          The Website&apos;s text, design, illustrations and the Lemma Labs name and mark belong to Lemma Labs. You may view and share
          the Website for your own information, but please don&apos;t copy its content or design to pass it off as your own, or use
          our name in a way that suggests we endorse you.
        </p>
        <p>Other names on the Website, such as universities or tools a team might use, belong to their owners and are mentioned only to describe things.</p>
      </>
    ),
  },
  {
    id: "use",
    title: "Using the Website",
    body: (
      <ul>
        <li>Don&apos;t try to break, overload or gain unauthorised access to the Website.</li>
        <li>Don&apos;t use the Website for anything unlawful.</li>
      </ul>
    ),
  },
  {
    id: "other-sites",
    title: "Other websites",
    body: <p>Some links lead to other websites, such as our founder&apos;s LinkedIn profile. We aren&apos;t responsible for their content.</p>,
  },
  {
    id: "warranty",
    title: "No warranty",
    body: <p>The Website is provided as it is. We try to keep it accurate and available, but we don&apos;t promise that it&apos;s complete, current or always online.</p>,
  },
  {
    id: "liability",
    title: "Limits on our liability",
    body: (
      <>
        <p>
          To the extent the law allows, we aren&apos;t liable for any loss that comes from using the Website or relying on its content.
        </p>
        <p>
          Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else
          that can&apos;t be limited under the law of England and Wales. If you are a consumer, your statutory rights are not affected.
        </p>
      </>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the law of England and Wales, and the courts of England and Wales have jurisdiction. If you are
        a consumer living in Scotland or Northern Ireland, you may also bring proceedings in your local courts.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: <p>We&apos;ll post the new version here with a new date. Using the Website after that means you accept the new terms.</p>,
  },
  {
    id: "contact",
    title: "Questions",
    body: <p>Write to {mail}.</p>,
  },
];

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of Service"
      intro="The rules for using this website and asking for early access."
      summary={SUMMARY}
      sections={SECTIONS}
    />
  );
}
