import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";

const STEPS = [
  {
    h: "A visit, not a formula",
    p: "Every quote starts with a site visit and a conversation. We cannot price a home we have not walked through.",
  },
  {
    h: "Scope before numbers",
    p: "We agree the scope in writing first: rooms, joinery, finishes, level of site work. The same home can be quoted three ways, and you should see those choices clearly.",
  },
  {
    h: "Line by line, not one blob",
    p: "Our estimates are itemised: design, custom joinery, modular units, site work, finishes and fittings. You can see what each part costs and where to flex.",
  },
  {
    h: "Named materials",
    p: "Quotes reference named materials and brands, so two numbers can actually be compared and nothing depends on a vague phrase.",
  },
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing and How We Charge | Nishal Interiors, Mumbai"
        description="How quotes are built at Nishal Interiors: site visit, agreed scope, an itemised estimate with named materials, and honest trade offs. No invented rates."
        path="/pricing-and-how-we-charge/"
      />

      <PageHero
        breadcrumbs={[{ label: "Pricing", to: "/pricing-and-how-we-charge/" }]}
        label="Pricing"
        title="Pricing, explained honestly."
        intro="We do not publish rate cards, because honest pricing follows the home, not a template. Here is exactly how a quote gets built."
      />

      <section className="px-[5vw] pb-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {STEPS.map((s) => (
            <Reveal key={s.h}>
              <h2 className="font-display h3-display text-ink mb-3">{s.h}</h2>
              <p className="text-taupe leading-relaxed">{s.p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 border-t border-hairline pt-10">
          <p className="label mb-3">Our fee structure</p>
          <p className="text-ink leading-relaxed max-w-3xl">
            We explain our fee structure in person, once we have walked the home
            and agreed the scope together. Once the scope is frozen, the numbers
            in the estimate are the numbers we stand behind.
          </p>
          <p className="text-taupe leading-relaxed mt-4 max-w-3xl">
            Changes after the design is frozen are quoted separately, in writing,
            before they are executed. No surprise line items.
          </p>
          <Link to="/contact/" className="text-link text-ink mt-8">
            Ask for a quote
            <span className="arrow" />
          </Link>
        </Reveal>
      </section>

      <section className="bg-sand px-[5vw] py-16">
        <Reveal>
          <p className="label mb-4">Also worth reading</p>
          <div className="flex flex-col gap-4 max-w-xl">
            <Link to="/journal/how-long-a-home-interior-project-takes/" className="text-link text-ink">
              How long a home interior project really takes
              <span className="arrow" />
            </Link>
            <Link to="/process/" className="text-link text-ink">
              Our process, concept to handover
              <span className="arrow" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}