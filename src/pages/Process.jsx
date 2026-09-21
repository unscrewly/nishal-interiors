import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";

const STAGES = [
  {
    n: "01",
    name: "Brief and site visit",
    you: "Walk us through the home and how you live in it. Share must-keeps, a budget range and your timeline.",
    we: "We measure the site, photograph it and note what stays. You get a written summary of what we understood.",
  },
  {
    n: "02",
    name: "Concept and layout",
    you: "React to the options honestly. This is the cheapest stage to change your mind.",
    we: "Two to three layout options with trade offs explained, plus a palette direction for the home.",
  },
  {
    n: "03",
    name: "3D design",
    you: "Review the main rooms on screen and confirm finishes against real samples.",
    we: "Photorealistic 3D views of every main room, revised with you over two rounds.",
  },
  {
    n: "04",
    name: "Quotation and materials",
    you: "Approve the itemised estimate and freeze the design.",
    we: "A line by line quote: design, joinery, site work and finishes, with named materials and a schedule.",
  },
  {
    n: "05",
    name: "Execution",
    you: "Live your life. Step in at weekly updates and at the moments we flag in advance.",
    we: "One team runs the site: civil, joinery, painting, installations, with weekly photos and a clear schedule.",
  },
  {
    n: "06",
    name: "Handover",
    you: "Walk the home with us, room by room, and note anything that needs attention.",
    we: "A snag list we clear before handover, deep cleaning done, and the home ready to live in.",
  },
];

export default function Process() {
  return (
    <>
      <SEO
        title="Our Process, Concept to Handover | Nishal Interiors"
        description="Six clear stages from first visit to handover: what you do and what the studio delivers at each step of a Mumbai home interior project."
        path="/process/"
      />

      <PageHero
        breadcrumbs={[{ label: "Process", to: "/process/" }]}
        label="Process"
        title="Concept to handover, in six stages."
        intro="No mystery, no missing weeks. At every stage you know what you do, what we deliver, and what happens next."
      />

      <section className="px-[5vw] pb-16">
        <ol className="border-t border-hairline">
          {STAGES.map((stage) => (
            <Reveal as="li" key={stage.n} className="border-b border-hairline py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              <p className="label md:col-span-1">{stage.n}</p>
              <h2 className="font-display text-ink md:col-span-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", lineHeight: 1.1 }}>
                {stage.name}
              </h2>
              <div className="md:col-span-4">
                <p className="label mb-2">What you do</p>
                <p className="text-ink leading-relaxed">{stage.you}</p>
              </div>
              <div className="md:col-span-3">
                <p className="label mb-2">What we deliver</p>
                <p className="text-ink leading-relaxed">{stage.we}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-walnut text-ivory px-[5vw] py-16">
        <Reveal>
          <p className="label text-ivory/70 mb-4">Start a project</p>
          <p className="font-display text-ivory max-w-2xl" style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}>
            Stage one is a conversation. It costs you an hour and it changes the project.
          </p>
          <Link to="/contact/" className="text-link text-ivory mt-8">
            Begin your enquiry
            <span className="arrow" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}