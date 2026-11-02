import { Access } from "@/components/Access";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Founder } from "@/components/Founder";
import { Hero } from "@/components/Hero";
import { Loop } from "@/components/Loop";
import { Memory } from "@/components/Memory";
import { Nav } from "@/components/Nav";
import { Night } from "@/components/Night";
import { Principles } from "@/components/Principles";
import { Private } from "@/components/Private";
import { Problem } from "@/components/Problem";
import { Roadmap } from "@/components/Roadmap";
import { Talk } from "@/components/Talk";
import { EMAIL, FOUNDER_LINKEDIN, FOUNDER_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description: SITE_DESCRIPTION,
  slogan: "Ambitious ideas, proven into high-performance products.",
  email: EMAIL,
  founder: { "@type": "Person", name: FOUNDER_NAME, jobTitle: "Founder · AI System Engineer", sameAs: [FOUNDER_LINKEDIN] },
  address: { "@type": "PostalAddress", addressLocality: "Manchester", addressCountry: "GB" },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Nav home />
      <main id="top">
        <Hero />
        <Principles />
        <Problem />
        <Loop />
        <Night />
        <Memory />
        <Private />
        <Roadmap />
        <Access />
        <Founder />
        <Faq />
        <Talk />
      </main>
      <Footer />
    </>
  );
}
