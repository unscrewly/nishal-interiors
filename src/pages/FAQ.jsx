import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";

const FAQS = [
  {
    q: "Which areas do you work in?",
    a: "We are based in Mumbai and work across the city and its surrounding areas. Ask about your area and we will tell you plainly how site visits would work.",
  },
  {
    q: "Do you take on single rooms, or only full homes?",
    a: "Both. We plan full-home interiors and also take focused projects like a modular kitchen, a wardrobe wall or a space planning study. The process starts the same way: a visit and a conversation.",
  },
  {
    q: "What happens after I enquire?",
    a: "We reply to understand the brief, then visit the site to measure and see the home. After that you get layout options and a clear scope, with no obligation until you approve the design.",
  },
  {
    q: "Will I see the design before work starts?",
    a: "Yes. Every project includes 3D views of the main rooms before anything is ordered. You approve layouts and finishes on screen, with real material samples in hand.",
  },
  {
    q: "What is turnkey execution?",
    a: "It means the studio that designed your home also builds it: civil work, carpentry, painting and installations under one team, one schedule and one point of contact.",
  },
  {
    q: "Can you work around the furniture I already own?",
    a: "Yes. Pieces that matter to you become part of the plan. We would rather design around a loved piece than pretend it does not exist.",
  },
  {
    q: "How long will my project take?",
    a: "It depends on scope. Design usually runs a few weeks and execution follows the agreed schedule. We write honest timelines, and we say so in the schedule, not after. See our journal piece on project timelines for the detail.",
  },
  {
    q: "How do you charge?",
    a: "Quotes are built from a site visit and an agreed scope, itemised line by line with named materials. Our fee structure is explained on the pricing page.",
  },
];

export default function FAQ() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions | Nishal Interiors"
        description="Answers to the questions clients ask most: areas we serve, scope, 3D designs, turnkey execution, timelines and how quotes are built."
        path="/faq/"
      />

      <PageHero
        breadcrumbs={[{ label: "FAQ", to: "/faq/" }]}
        label="FAQ"
        title="Questions we hear often."
        intro="If your question is not here, ask it directly through the contact page. We answer plainly."
      />

      <section className="px-[5vw] pb-16 max-w-4xl">
        {FAQS.map((item) => (
          <Reveal key={item.q} className="border-t border-hairline py-8 last:border-b">
            <h2 className="font-display text-ink text-2xl leading-snug mb-3">
              {item.q}
            </h2>
            <p className="text-taupe leading-relaxed">{item.a}</p>
          </Reveal>
        ))}

        <Reveal className="mt-12">
          <Link to="/contact/" className="text-link text-ink">
            Ask us your question
            <span className="arrow" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}