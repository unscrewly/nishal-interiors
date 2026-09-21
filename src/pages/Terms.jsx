import SEO from "@/components/site/SEO";
import Breadcrumbs from "@/components/site/Breadcrumbs";

const SECTIONS = [
  {
    h: "The nature of this website",
    p: [
      "This website presents the work and services of Nishal Interiors by Nishita for information. Nothing on it constitutes an offer to contract, a quotation, or a commitment of any kind. Work is undertaken only under a separate written agreement signed by both parties.",
    ],
  },
  {
    h: "Intellectual property",
    p: [
      "The designs, drawings, 3D renders, photographs and written content on this site belong to Nishal Interiors by Nishita unless credited otherwise. They may be viewed and shared with attribution, but not reproduced, adapted or used commercially without written permission.",
    ],
  },
  {
    h: "Client projects",
    p: [
      "The terms of any interior project, including design fees, execution costs, timelines, materials and warranties, are governed exclusively by the written agreement for that project. Summaries on this site are descriptive, not contractual.",
    ],
  },
  {
    h: "Estimates and timelines",
    p: [
      "Any estimate, timeline or scope description shown on this site is indicative. It becomes binding only in the written quotation and agreement for your project.",
    ],
  },
  {
    h: "Limitation of liability",
    p: [
      "To the extent permitted by law, Nishal Interiors by Nishita is not liable for decisions made on the basis of website content alone, or for indirect losses arising from use of this site.",
    ],
  },
  {
    h: "Governing law",
    p: [
      "These terms are governed by the laws of India. Any dispute arising from them or from use of this website is subject to the exclusive jurisdiction of the courts of Mumbai.",
    ],
  },
  {
    h: "Changes to these terms",
    p: [
      "We may update these terms from time to time. The date of the latest revision always appears at the top of this page.",
    ],
  },
  {
    h: "Contact",
    p: [
      "Questions about these terms can be sent to nishalinteriors@gmail.com or through the contact page.",
    ],
  },
];

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms and Conditions | Nishal Interiors, Mumbai"
        description="The terms that govern use of the Nishal Interiors website: intellectual property, indicative estimates, limitation of liability and governing law in Mumbai, India."
        path="/terms-and-conditions/"
      />

      <div className="px-[5vw] pt-32 md:pt-40">
        <Breadcrumbs items={[{ label: "Terms and Conditions", to: "/terms-and-conditions/" }]} />
        <h1
          className="font-display text-ink"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)", lineHeight: 1.02 }}
        >
          Terms and Conditions
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