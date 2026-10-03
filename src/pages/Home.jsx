import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/site/SEO";
import Reveal from "@/components/site/Reveal";
import CountUp from "@/components/site/CountUp";
import BeforeAfter from "@/components/site/BeforeAfter";
import QuickEnquiryForm from "@/components/site/QuickEnquiryForm";
import { Image } from "@/components/ui/image";
import { IMG } from "@/content/images";
import { PROJECTS } from "@/content/projects";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL = "https://wa.me/919702019905";
// TODO: replace with the studio's real Google Business reviews URL
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Nishal+Interiors+Mumbai+reviews";

/* =====================================================================
   TODO — REPLACE WITH REAL DATA BEFORE LAUNCH
   Everything in this block is a realistic placeholder, not a verified
   fact. Swap in the studio's real numbers, names, brands and quotes
   before publishing.
   ===================================================================== */
const STUDIO_FACTS = {
  homesDelivered: 24, // TODO: real count of delivered projects
  yearsOfPractice: 6, // TODO: real years in practice
  avgDeliveryWeeks: 14, // TODO: typical full-home turnkey duration
  clientRating: "4.9", // TODO: real Google rating
  reviewCount: 37, // TODO: real Google review count
  turnkeyDays: 90, // TODO: promised turnkey delivery window
  pricePerSqFt: "₹1,650", // TODO: real starting rate
  warrantyMonths: 12, // TODO: real material warranty
  supportMonths: 12, // TODO: real after-handover support window
};

// TODO: real client testimonials (names published with permission)
const TESTIMONIALS = [
  {
    quote:
      "They replanned our two bedroom flat without moving a single wall, and the home feels twice as calm. The kitchen finally keeps up with our family.",
    name: "Priya S.",
    area: "Powai",
    project: "Full home interior",
  },
  {
    quote:
      "The quote matched the final bill, line for line. In Mumbai, that is rarer than good design.",
    name: "Rohit and Meera K.",
    area: "Bandra West",
    project: "Modular kitchen",
  },
  {
    quote:
      "We saw every room in 3D before work started, so there were no surprises. Handover happened on the date they promised.",
    name: "Aditi R.",
    area: "Andheri West",
    project: "Space planning",
  },
];

// TODO: confirm real material and hardware partners
const PARTNERS = ["Hettich", "Häfele", "Century Ply", "Greenlam", "Asian Paints", "Kajaria"];

const PROOF = [
  { value: STUDIO_FACTS.homesDelivered, suffix: "+", decimals: 0, label: "Homes delivered" },
  { value: STUDIO_FACTS.yearsOfPractice, suffix: "", decimals: 0, label: "Years of practice" },
  { value: STUDIO_FACTS.avgDeliveryWeeks, suffix: "", decimals: 0, label: "Weeks, avg. delivery" },
  { value: Number(STUDIO_FACTS.clientRating), suffix: "", decimals: 1, label: "Client rating" },
];

const MARQUEE_ITEMS = [
  "Residential Interiors",
  "Modular Kitchens",
  "Space Planning",
  "3D Designs",
  "Turnkey Execution",
];

const SERVICE_ROWS = [
  {
    n: "01",
    title: "Residential Interiors",
    line: "Full-home design around light, storage and how you actually live.",
    to: "/services/residential-interior-design-mumbai/",
  },
  {
    n: "02",
    title: "Modular Kitchens",
    line: "Kitchens built for Mumbai humidity and small footprints.",
    to: "/services/modular-kitchen-design-mumbai/",
  },
  {
    n: "03",
    title: "Space Planning",
    line: "Layouts resolved on paper, where changes cost nothing.",
    to: "/services/space-planning-for-apartments/",
  },
  {
    n: "04",
    title: "3D Design & Visualisation",
    line: "See every room before a single rupee is spent on site.",
    to: "/services/3d-interior-design-visualisation/",
  },
  {
    n: "05",
    title: "Turnkey Execution",
    line: "One team from drawings to handover, ready to live in.",
    to: "/services/turnkey-interior-execution/",
  },
];

/* TODO — project display facts below are placeholders until real case
   studies land. The case-study text comes from the projects registry. */
const FEATURED = {
  ...PROJECTS[0],
  area: "Powai", // TODO: real area
  size: "2 BHK, ~640 sq ft", // TODO: real size
  duration: "16 weeks", // TODO: real duration
};

const GRID_PROJECTS = [
  {
    ...PROJECTS[1],
    area: "Bandra West", // TODO: real area
    size: "Kitchen, ~90 sq ft", // TODO: real size
    duration: "8 weeks", // TODO: real duration
  },
  {
    ...PROJECTS[2],
    area: "Andheri West", // TODO: real area
    size: "1 BHK, ~420 sq ft", // TODO: real size
    duration: "12 weeks", // TODO: real duration
  },
];

/* TODO — replace with the real before/after photography of one project */
const BEFORE_AFTER = {
  before: IMG.turnkeyWork,
  after: IMG.residentialLiving,
};

const HOME_PROCESS = [
  {
    n: "01",
    name: "Brief and site visit",
    duration: "Week 1",
    line: "We measure the home, listen to how you live, and write the brief back to you.",
  },
  {
    n: "02",
    name: "Concept and layout",
    duration: "Weeks 2-3",
    line: "Two to three layout options, with the trade offs explained in plain language.",
  },
  {
    n: "03",
    name: "3D design",
    duration: "Weeks 4-6",
    line: "Photorealistic views of every main room, revised with you before anything is ordered.",
  },
  {
    n: "04",
    name: "Quote and materials",
    duration: "Week 7",
    line: "A line by line estimate with named materials, so every number can be compared.",
  },
  {
    n: "05",
    name: "Execution and handover",
    duration: "Weeks 8-20",
    line: "One team on site, weekly photo updates, snag list cleared before you move in.",
  },
];

/* TODO — confirm warranty and support windows with Nishita */
const PROMISES = [
  {
    n: "01",
    title: "Written quote",
    line: "Itemised line by line, with named materials. No vague allowances.",
  },
  {
    n: "02",
    title: "Fixed timeline",
    line: "The schedule is agreed in writing and tracked weekly on site.",
  },
  {
    n: "03",
    title: "Material warranty",
    line: `${STUDIO_FACTS.warrantyMonths}-month warranty on materials and workmanship.`,
  },
  {
    n: "04",
    title: "After-handover support",
    line: `${STUDIO_FACTS.supportMonths}-month support window after you move in.`,
  },
];

/* TODO — confirm answers with Nishita before launch */
const HOME_FAQS = [
  {
    q: "What does a project cost?",
    a: `Full-home interiors typically start from ${STUDIO_FACTS.pricePerSqFt} per sq ft, but every quote depends on scope and materials. We price from a site visit, line by line, with no hidden allowances.`,
  },
  {
    q: "How long will my home take?",
    a: `Design usually runs four to six weeks. Execution depends on scope; a full turnkey home typically delivers in about ${STUDIO_FACTS.avgDeliveryWeeks} weeks. The schedule is agreed in writing before work starts.`,
  },
  {
    q: "What is included in the scope?",
    a: "Design, 3D previews, joinery, modular units, civil and site work, painting, installations and handover. You approve every finish before it is ordered.",
  },
  {
    q: "How do payments work?",
    a: "A staged payment schedule tied to milestones: design, procurement, execution and handover. You always know what is due and why.",
  },
  {
    q: "Which areas do you serve?",
    a: "All of Mumbai and its surrounding areas. Site visit frequency is planned around your location, and we say plainly what that means for the schedule.",
  },
];

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nishal Interiors by Nishita",
  description:
    "Residential interior design studio in Mumbai offering residential interiors, modular kitchens, space planning, 3D designs and turnkey execution.",
  url: "https://nishal-design-studio.base44.app",
  telephone: "+91-9702019905",
  email: "nishalinteriors@gmail.com",
  areaServed: "Mumbai and surrounding areas",
  sameAs: ["https://www.instagram.com/nishal_interiors"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nishal Interiors, Mumbai",
  url: "https://nishal-design-studio.base44.app",
};

function MarqueeRow({ ariaHidden }) {
  return (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="font-display text-2xl md:text-4xl text-ivory px-6 md:px-10 whitespace-nowrap">
            {item}
          </span>
          <span className="w-2 h-2 rotate-45 bg-brass" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

function TrustStrip() {
  const items = [
    `${STUDIO_FACTS.homesDelivered}+ homes delivered`,
    `${STUDIO_FACTS.yearsOfPractice} years of practice`,
    `Rated ${STUDIO_FACTS.clientRating} on Google`,
    `${STUDIO_FACTS.turnkeyDays}-day turnkey delivery`,
  ];
  return (
    <p className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-10 label text-ivory/75 hero-shadow">
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-4">
          {i > 0 && (
            <span className="w-1.5 h-1.5 rotate-45 bg-brass" aria-hidden="true" />
          )}
          <span>{item}</span>
        </span>
      ))}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        title="Nishal Interiors, Mumbai | Interiors Designed & Delivered On Time"
        description="Full-home interiors, modular kitchens and turnkey execution in Mumbai. 3D previews before work starts, itemised written quotes, one team to handover. Book a free design consultation."
        path="/"
        image={IMG.heroLiving.url}
        jsonLd={[homeJsonLd, websiteJsonLd]}
      />

      {/* SECTION: Hero — outcome headline over a slow-zooming photo, dark
          left-to-right scrim so the type never fights the image, brass CTA,
          trust strip. */}
      <section className="relative h-screen min-h-[640px] overflow-hidden bg-espresso">
        <div className="absolute inset-0 kenburns">
          <Image
            src={IMG.heroLiving.url}
            alt={IMG.heroLiving.alt}
            fittingType="fill"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(28,21,18,0.85) 0%, rgba(28,21,18,0.55) 45%, rgba(28,21,18,0.15) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative h-full flex flex-col justify-end">
          <div className="container-x pb-[9vh]">
            <Reveal>
              <p className="label text-brass mb-5 hero-shadow">
                Nishal Interiors by Nishita — Mumbai
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="display-hero text-ivory max-w-[16ch] hero-shadow">
                Mumbai homes, designed{" "}
                <em className="accent-italic">and delivered</em> on time.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-ivory/85 text-lg leading-relaxed mt-6 max-w-xl hero-shadow">
                Full-home interiors, modular kitchens and turnkey execution —
                one team, one timeline, from first sketch to final handover.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/contact/" className="btn-brass">
                  Book a Free Design Consultation
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-light"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <p className="label text-ivory/60 mt-4">
                Reply within 24 hours. No obligation.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <TrustStrip />
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION: Proof bar — four big serif numbers, counted up once on scroll. */}
      <section className="bg-ivory section-pad">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {PROOF.map((item, i) => (
              <Reveal key={item.label} delay={i * 100}>
                <p className="font-display font-medium text-espresso" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", lineHeight: 1 }}>
                  <CountUp value={item.value} decimals={item.decimals} />
                  {item.suffix && (
                    <span className="text-brass">{item.suffix}</span>
                  )}
                </p>
                <p className="label mt-4">{item.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 flex flex-col items-center text-center gap-3">
            <Link to="/contact/" className="btn-brass">
              Book a Free Consultation
            </Link>
            <p className="label text-taupe">Free. No obligation. Reply in 24 hrs.</p>
          </Reveal>
        </div>
      </section>

      {/* SECTION: Marquee — slow scrolling service strip. */}
      <div className="bg-espresso border-y border-brass/30 overflow-hidden py-5" aria-hidden="true">
        <div className="marquee-track flex w-max">
          <MarqueeRow ariaHidden={false} />
          <MarqueeRow ariaHidden />
        </div>
      </div>

      {/* SECTION: Services — numbered rows; hovering a row fills it dark
          with a brass arrow. */}
      <section className="bg-ivory section-pad">
        <div className="container-x">
          <Reveal>
            <p className="label mb-4">Services</p>
            <h2 className="display-md text-espresso max-w-3xl">
              Five ways we make a home <em className="accent-italic">work beautifully</em>.
            </h2>
          </Reveal>
          <div className="mt-14 border-b border-hairline">
            {SERVICE_ROWS.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <Link
                  to={s.to}
                  className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[120px_1fr_auto] items-center gap-6 md:gap-10 border-t border-hairline py-7 md:py-10 px-4 md:px-6 -mx-4 md:-mx-6 transition-colors duration-300 hover:bg-espresso"
                >
                  <span className="numeral-outline text-4xl md:text-6xl" aria-hidden="true">
                    {s.n}
                  </span>
                  <span className="min-w-0">
                    <span className="font-display text-2xl md:text-4xl text-espresso group-hover:text-ivory transition-colors duration-300 block">
                      {s.title}
                    </span>
                    <span className="text-taupe group-hover:text-ivory/75 transition-colors duration-300 block mt-1">
                      {s.line}
                    </span>
                  </span>
                  <ArrowRight
                    className="text-espresso group-hover:text-brass group-hover:translate-x-2 transition-all duration-300 shrink-0"
                    size={28}
                    strokeWidth={1.25}
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Featured projects — cinematic full-width case study plus a
          two-up grid; hovering a card reveals its facts on a dark overlay. */}
      <section className="bg-espresso section-pad text-ivory">
        <div className="container-x">
          <Reveal>
            <p className="label text-brass mb-4">Featured work</p>
            <h2 className="display-md text-ivory max-w-3xl">
              Homes we&apos;ve <em className="accent-italic">delivered</em> across Mumbai.
            </h2>
          </Reveal>

          <Reveal className="mt-14">
            <Link to={`/projects/${FEATURED.slug}/`} className="group block">
              <div className="relative overflow-hidden aspect-[16/9] md:aspect-[21/9] img-hover">
                <Image
                  src={IMG[FEATURED.images[0].key].url}
                  alt={IMG[FEATURED.images[0].key].alt}
                  fittingType="fill"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/30 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <p className="label text-brass mb-3">Featured project</p>
                  <p className="font-display text-3xl md:text-5xl max-w-xl text-ivory" style={{ lineHeight: 1.02 }}>
                    {FEATURED.title}
                  </p>
                  <p className="label text-ivory/70 mt-4">
                    {FEATURED.area} &bull; {FEATURED.size} &bull; {FEATURED.duration}
                  </p>
                  <p className="text-ivory/85 mt-3 max-w-2xl leading-relaxed hidden md:block">
                    {FEATURED.whatChanged}
                  </p>
                  <span className="text-link text-ivory mt-5">
                    View case study
                    <span className="arrow" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {GRID_PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link to={`/projects/${p.slug}/`} className="group relative block aspect-[4/3] overflow-hidden">
                  <div className="img-hover absolute inset-0">
                    <Image
                      src={IMG[p.images[0].key].url}
                      alt={IMG[p.images[0].key].alt}
                      fittingType="fill"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-espresso/80 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                    <p className="label text-brass mb-2">{p.group}</p>
                    <p className="font-display text-2xl md:text-3xl text-ivory" style={{ lineHeight: 1.1 }}>
                      {p.title}
                    </p>
                    <p className="label text-ivory/70 mt-3">
                      {p.area} &bull; {p.size} &bull; {p.duration}
                    </p>
                    <p className="text-ivory/85 text-sm mt-2 max-w-md">{p.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 flex flex-col items-center text-center gap-3">
            <Link to="/contact/" className="btn-brass">
              Book a Free Consultation
            </Link>
            <p className="label text-ivory/60">Free. No obligation. Reply in 24 hrs.</p>
          </Reveal>
        </div>
      </section>

      {/* SECTION: Before / After — drag the brass handle to compare. */}
      <section className="bg-ivory section-pad">
        <div className="container-x max-w-5xl">
          <Reveal>
            <p className="label mb-4">Before and after</p>
            <h2 className="display-md text-espresso max-w-2xl">
              Slide to see what <em className="accent-italic">changed</em>.
            </h2>
            <p className="text-taupe mt-5 max-w-2xl leading-relaxed">
              Same walls, different home. A nearly finished site becomes a
              finished living room — planned, executed and handed over by one
              team.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <BeforeAfter before={BEFORE_AFTER.before} after={BEFORE_AFTER.after} />
            {/* TODO: replace with real before/after photography of one project */}
          </Reveal>
        </div>
      </section>

      {/* SECTION: Meet Nishita — portrait, founder note, signature, credentials. */}
      <section className="bg-sand section-pad">
        <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <Reveal className="md:col-span-5">
            <div className="aspect-[4/5] img-hover">
              <Image
                src={IMG.designerHands.url}
                alt={IMG.designerHands.alt}
                fittingType="fill"
                className="w-full h-full object-cover"
              />
            </div>
            {/* TODO: replace with a real portrait of Nishita */}
          </Reveal>
          <div className="md:col-span-7">
            <Reveal>
              <p className="label mb-4">Meet the designer</p>
              <h2 className="display-md text-espresso">
                The person behind <em className="accent-italic">every drawing</em>.
              </h2>
              <p className="font-display italic text-espresso text-2xl md:text-3xl leading-snug mt-8 max-w-xl">
                &ldquo;I design homes the way I would live in them: calm,
                honest and built to last. You will see me on site, not just in
                meetings.&rdquo;
              </p>
              <p className="font-display italic text-brass text-4xl mt-6" aria-hidden="true">
                Nishita
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-10 max-w-xl">
                {[
                  "Designs and executes end to end — one accountable team",
                  "3D previews approved before any site work begins",
                  "One point of contact from brief to handover",
                ].map((c) => (
                  <li key={c} className="border-t border-hairline py-4 text-ink flex items-baseline gap-4">
                    <span className="text-brass" aria-hidden="true">&mdash;</span>
                    {c}
                  </li>
                ))}
              </ul>
              <Link to="/studio/" className="text-link text-ink mt-8">
                More about the studio
                <span className="arrow" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION: Testimonials — large serif quotes on dark, with a Google
          reviews badge. */}
      <section className="bg-espresso section-pad text-ivory">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <Reveal>
              <p className="label text-brass mb-4">Client words</p>
              <h2 className="display-md text-ivory max-w-2xl">
                What clients <em className="accent-italic">say</em> after handover.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-brass/60 text-brass label px-4 py-3 hover:bg-brass hover:text-espresso transition-colors duration-300"
              >
                Rated {STUDIO_FACTS.clientRating} on Google &bull; {STUDIO_FACTS.reviewCount} reviews
              </a>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-14">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure>
                  <blockquote className="font-display italic text-2xl md:text-[1.75rem] text-ivory leading-snug">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className="text-ivory font-medium">{t.name}</p>
                    <p className="label text-ivory/60 mt-1">
                      {t.area} &bull; {t.project}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          {/* TODO: all quotes above are placeholders — replace with real client feedback */}
          <Reveal className="mt-16 flex flex-col items-center text-center gap-3">
            <Link to="/contact/" className="btn-brass">
              Book a Free Consultation
            </Link>
            <p className="label text-ivory/60">Free. No obligation. Reply in 24 hrs.</p>
          </Reveal>
        </div>
      </section>

      {/* SECTION: Process — five numbered steps with durations on a timeline. */}
      <section className="bg-ivory section-pad">
        <div className="container-x">
          <Reveal>
            <p className="label mb-4">Process</p>
            <h2 className="display-md text-espresso max-w-3xl">
              From first sketch to <em className="accent-italic">final handover</em>.
            </h2>
            <p className="text-taupe mt-5 max-w-2xl leading-relaxed">
              You see photorealistic 3D previews and approve every finish
              before any work begins — so nothing is decided twice.
            </p>
          </Reveal>
          <ol className="mt-14 border-b border-hairline">
            {HOME_PROCESS.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 60}>
                <div className="grid grid-cols-[auto_1fr] md:grid-cols-[140px_1fr_2fr] gap-6 md:gap-10 border-t border-hairline py-8 md:py-10 items-start">
                  <span className="numeral-outline text-4xl md:text-6xl" aria-hidden="true">
                    {step.n}
                  </span>
                  <div>
                    <p className="font-display text-xl md:text-2xl text-espresso">{step.name}</p>
                    <p className="label mt-2 text-brass">{step.duration}</p>
                  </div>
                  <p className="text-taupe leading-relaxed col-span-2 md:col-span-1 md:pt-1">
                    {step.line}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION: Promises — the four commitments, in writing. */}
      <section className="bg-espresso section-pad text-ivory">
        <div className="container-x">
          <Reveal>
            <p className="label text-brass mb-4">Our promises</p>
            <h2 className="display-md text-ivory max-w-3xl">
              Promises we <em className="accent-italic">put in writing</em>.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-14">
            {PROMISES.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="border-t-2 border-brass pt-5">
                  <p className="numeral-outline text-3xl" aria-hidden="true">{p.n}</p>
                  <p className="font-display text-2xl text-ivory mt-3">{p.title}</p>
                  <p className="text-ivory/75 leading-relaxed mt-3">{p.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Pricing transparency teaser. */}
      <section className="bg-ivory section-pad">
        <div className="container-x flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <Reveal>
            <p className="label mb-4">Transparent pricing</p>
            <p className="font-display text-espresso max-w-2xl" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1 }}>
              Interiors starting from{" "}
              <span className="accent-italic">{STUDIO_FACTS.pricePerSqFt}</span> per sq ft.
            </p>
            <p className="text-taupe mt-5 max-w-xl leading-relaxed">
              Typical full-home scope, itemised line by line. Every quote is
              built from a site visit — no invented rates, no vague allowances.
            </p>
            {/* TODO: confirm the starting rate with Nishita */}
          </Reveal>
          <Reveal delay={100}>
            <Link to="/pricing-and-how-we-charge/" className="btn-outline-dark max-w-max">
              See how we charge
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SECTION: Materials & partners — muted wordmark row. */}
      <section className="bg-sand py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <p className="label text-center mb-10">Materials &amp; partners we work with</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {PARTNERS.map((brand) => (
                <span
                  key={brand}
                  className="font-display text-2xl md:text-3xl text-taupe-light"
                >
                  {brand}
                </span>
              ))}
            </div>
          </Reveal>
          {/* TODO: confirm the real partner brands with Nishita */}
        </div>
      </section>

      {/* SECTION: FAQ — five short answers in an accordion. */}
      <section className="bg-ivory section-pad">
        <div className="container-x max-w-4xl">
          <Reveal>
            <p className="label mb-4">FAQ</p>
            <h2 className="display-md text-espresso max-w-2xl">
              Questions, answered <em className="accent-italic">plainly</em>.
            </h2>
          </Reveal>
          <Reveal className="mt-12">
            <Accordion type="single" collapsible className="border-b border-hairline">
              {HOME_FAQS.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-t border-hairline last:border-b-0">
                  <AccordionTrigger className="font-display text-xl md:text-2xl text-espresso hover:text-brass hover:no-underline py-6 text-left">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-taupe leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Link to="/faq/" className="text-link text-ink mt-8">
              All common questions
              <span className="arrow" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SECTION: Final CTA — split layout: headline and direct contacts left,
          short enquiry form right. */}
      <section className="bg-espresso section-pad text-ivory">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-start">
          <div>
            <Reveal>
              <p className="label text-brass mb-5">Start today</p>
              <h2
                className="font-display font-medium text-ivory max-w-xl"
                style={{ fontSize: "clamp(2.75rem, 5.5vw, 5.5rem)", lineHeight: 0.98, letterSpacing: "-0.01em" }}
              >
                Let&apos;s design the home you&apos;ve been{" "}
                <em className="accent-italic">imagining</em>.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <ul className="mt-10 space-y-1">
                <li>
                  <a href="tel:+919702019905" className="text-link text-ivory">
                    Call 9702019905
                    <span className="arrow" />
                  </a>
                </li>
                <li>
                  <a href="mailto:nishalinteriors@gmail.com" className="text-link text-ivory">
                    nishalinteriors@gmail.com
                    <span className="arrow" />
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link text-ivory"
                  >
                    WhatsApp us
                    <span className="arrow" />
                  </a>
                </li>
              </ul>
              <p className="label text-ivory/60 mt-8">
                Free. No obligation. Reply within 24 hours.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <QuickEnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}