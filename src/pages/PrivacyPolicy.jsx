import SEO from "@/components/site/SEO";
import Breadcrumbs from "@/components/site/Breadcrumbs";

const SECTIONS = [
  {
    h: "Who we are",
    p: [
      "This website is operated by Nishal Interiors by Nishita, a residential interior design studio based in Mumbai. You can reach us at nishalinteriors@gmail.com or through the contact page.",
      "We are the data fiduciary for the personal data described below. This policy is written to comply with India's Digital Personal Data Protection Act, 2023, and applies to this website only.",
    ],
  },
  {
    h: "What the contact form collects",
    p: [
      "When you send an enquiry, we collect the details you provide: your name, phone number or email, the area in Mumbai you mention, your property type, approximate size, scope of work, timeline and your message.",
      "We also record the time of your enquiry. The form includes a required consent checkbox: without it, the message cannot be sent.",
    ],
  },
  {
    h: "Why we collect it",
    p: [
      "Only to respond to your enquiry, understand your project and, if you go ahead, to work with you. We do not use your details for advertising, we do not profile you, and we never sell your data to anyone.",
    ],
  },
  {
    h: "Who processes it for us",
    p: [
      "The site is hosted on the Base44 platform, which stores the enquiry data on our behalf. Email delivery, where used, is handled by the platform's email service. No advertising networks run on this website, and we do not use third party marketing trackers.",
    ],
  },
  {
    h: "How long we keep it",
    p: [
      "Enquiries are kept only as long as needed to respond and to carry out any resulting work, and for a reasonable period afterwards as required by applicable law. After that, we delete them.",
    ],
  },
  {
    h: "Your rights",
    p: [
      "You may ask us to show you the data we hold about you, correct it, or erase it. You may withdraw your consent at any time. To exercise any of these rights, email nishalinteriors@gmail.com with the subject line Data request.",
      "You may also escalate a grievance about how we handle your data to the same address. We take seriously our duty to respond under the Digital Personal Data Protection Act, 2023.",
    ],
  },
  {
    h: "Children",
    p: [
      "This website is intended for adults planning home interiors. We do not knowingly collect data from children, and we do not target children in any way.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Nishal Interiors, Mumbai"
        description="How Nishal Interiors collects, uses and protects the details you share through the contact form, in line with India's Digital Personal Data Protection Act, 2023."
        path="/privacy-policy/"
      />

      <div className="px-[5vw] pt-32 md:pt-40">
        <Breadcrumbs items={[{ label: "Privacy Policy", to: "/privacy-policy/" }]} />
        <h1
          className="font-display text-ink"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)", lineHeight: 1.02 }}
        >
          Privacy Policy
        </h1>
        <p className="label mt-4">Last updated 21 September 2026</p>
      </div>

      <section className="px-[5vw] pb-16 pt-12 max-w-3xl">
        {SECTIONS.map((s) => (
          <div key={s.h} className="mb-10 last:mb-0">
            <h2 className="font-display text-ink text-2xl mb-3">{s.h}</h2>
            {s.p.map((p) => (
              <p key={p} className="text-taupe leading-relaxed mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}