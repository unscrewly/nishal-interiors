import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { Image } from "@/components/ui/image";
import { IMG } from "@/content/images";

/* Nishita: replace these with your own words when you review the page. */
const QUESTIONS = [
  {
    q: "A room I keep going back to",
    a: "The living room. It carries the most of daily life — gathering, resting, working — and a good layout there changes how the whole home feels.",
  },
  {
    q: "A material I trust",
    a: "Well-made plywood with an honest finish. In Mumbai humidity, materials that stay stable year after year matter more than materials that only photograph well.",
  },
  {
    q: "Something site work taught me",
    a: "That drawings are a promise. When the site follows the approved drawings exactly, the home matches what you signed off on — and that trust carries the whole project.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nishita",
  jobTitle: "Interior Designer",
  worksFor: {
    "@type": "Organization",
    name: "Nishal Interiors by Nishita",
    url: "https://nishal-design-studio.base44.app",
  },
  knowsAbout: [
    "Residential interior design",
    "Modular kitchen design",
    "Space planning",
    "3D interior design visualisation",
    "Turnkey interior execution",
  ],
};

export default function Studio() {
  return (
    <>
      <SEO
        title="About the Studio | Nishal Interiors, Mumbai"
        description="Meet Nishita, the designer behind Nishal Interiors. A young Mumbai studio making homes with neutral tones, comfort and function, from concept to completion."
        path="/studio/"
        jsonLd={personJsonLd}
      />

      <PageHero
        breadcrumbs={[{ label: "Studio", to: "/studio/" }]}
        label="The studio"
        title="Interiors designed around the people who live in them."
        intro="Nishal Interiors by Nishita is a residential interior design studio based in Mumbai, led by a young designer serving the city and its surrounding areas."
      />

      <section className="px-[5vw] pb-16 grid grid-cols-1 md:grid-cols-12 gap-8">
        <Reveal className="md:col-span-7">
          <div className="aspect-[4/5] img-hover">
            <Image
              src={IMG.designerHands.url}
              alt={IMG.designerHands.alt}
              fittingType="fill"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal className="md:col-span-5 flex flex-col justify-center">
          <p className="text-ink leading-relaxed">
            We work from concept to completion, so the drawings that are approved
            are the drawings the site follows. Every space is planned to feel
            personal, warm and beautifully made, not styled for a photograph.
          </p>
          <p className="text-taupe leading-relaxed mt-5">
            Every home is designed in a neutral palette with modern elegance,
            and followed personally from first sketch to handover.
          </p>
          <Link to="/contact/" className="text-link text-ink mt-8 max-w-max">
            Start a project with us
            <span className="arrow" />
          </Link>
        </Reveal>
      </section>

      <section className="bg-sand px-[5vw] py-16">
        <Reveal>
          <p className="label mb-4">How we work</p>
          <h2 className="font-display h2-display text-ink max-w-2xl">
            Quiet rooms, honest materials, decisions made on drawings.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-5xl">
          {[
            {
              h: "Neutral by choice",
              p: "Neutral tones with modern elegance give a home room to change around you. Comfort, functionality and a look that lasts guide every palette.",
            },
            {
              h: "Plan before spend",
              p: "Layouts and 3D views are agreed before site work begins, so changes happen on screen where they cost nothing.",
            },
            {
              h: "One team to handover",
              p: "Design and execution sit together. Civil work, joinery and finishes are coordinated by the same studio that drew them.",
            },
          ].map((item) => (
            <Reveal key={item.h}>
              <h3 className="font-display text-ink text-2xl">{item.h}</h3>
              <p className="text-taupe mt-3 leading-relaxed">{item.p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-[5vw] py-16">
        <Reveal>
          <p className="label mb-4">Three questions for Nishita</p>
          <h2 className="font-display h2-display text-ink max-w-2xl">
            In her own words.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-5xl">
          {QUESTIONS.map((item) => (
            <Reveal key={item.q}>
              <p className="font-display text-ink text-xl leading-snug">{item.q}</p>
              <p className="text-taupe mt-4 leading-relaxed border-t border-hairline pt-4">
                {item.a}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-[5vw] pb-16 grid grid-cols-1 md:grid-cols-12 gap-8">
        <Reveal className="md:col-span-5 md:col-start-8">
          <div className="aspect-[3/2] img-hover">
            <Image
              src={IMG.studioWorkspace.url}
              alt={IMG.studioWorkspace.alt}
              fittingType="fill"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}