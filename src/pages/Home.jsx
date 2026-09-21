import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";
import Reveal from "@/components/site/Reveal";
import { Image } from "@/components/ui/image";
import { IMG } from "@/content/images";
import { HERO_HEADLINE } from "@/content/copy-notes";

const PANELS = [
  { label: "The Studio", line1: "A young Mumbai", line2: "design practice", to: "/studio/", image: "designerHands" },
  { label: "Projects", line1: "Homes planned", line2: "room by room", to: "/projects/", image: "walnutInterior" },
  { label: "Process", line1: "From first sketch", line2: "to final handover", to: "/process/", image: "siteWork" },
  { label: "Start a project", line1: "Tell us about", line2: "your home", to: "/contact/", image: "cornerDetail" },
];

const PROJECT_GROUPS = [
  {
    type: "Residential interiors",
    blurb:
      "Full-home interiors for Mumbai apartments, planned around light, storage and how you live day to day.",
    to: "/projects/family-home-two-bedroom-refresh/",
    items: [
      { key: "residentialLiving", ratio: "aspect-[4/5]" },
      { key: "bedroom", ratio: "aspect-[3/2]" },
    ],
  },
  {
    type: "Modular kitchens",
    blurb:
      "Kitchens built for Mumbai humidity and small footprints, with materials that hold up over years of use.",
    to: "/projects/compact-modular-kitchen-family-home/",
    items: [
      { key: "kitchenFluted", ratio: "aspect-[3/2]" },
      { key: "kitchenDetail", ratio: "aspect-[1/1]" },
    ],
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
  knowsAbout: [
    "Residential interior design",
    "Modular kitchen design",
    "Space planning",
    "3D interior design visualisation",
    "Turnkey interior execution",
  ],
  sameAs: ["https://www.instagram.com/nishal_interiors"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nishal Interiors, Mumbai",
  url: "https://nishal-design-studio.base44.app",
};

export default function Home() {
  return (
    <>
      <SEO
        title="Nishal Interiors, Mumbai | Residential interior design by Nishita"
        description="Residential interiors, modular kitchens, space planning, 3D designs and turnkey execution in Mumbai. From first sketch to final handover, every space personal and warm."
        path="/"
        image={IMG.heroLiving.url}
        jsonLd={[homeJsonLd, websiteJsonLd]}
      />

      {/* SECTION: Hero — full-viewport opening statement over a Ken Burns
          photo. Gradient scrim + soft text shadow keep the serif readable;
          primary CTA routes to the contact page. */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
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
              "linear-gradient(180deg, rgba(42,38,34,0.52) 0%, rgba(42,38,34,0.20) 40%, rgba(42,38,34,0.62) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative h-full flex flex-col justify-end px-[5vw] pb-[8vh]">
          <p className="label text-ivory/85 mb-5 hero-shadow">
            Nishal Interiors by Nishita, Mumbai
          </p>
          <h1
            className="font-display text-ivory max-w-[16ch] hero-shadow"
            style={{
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
            }}
          >
            {HERO_HEADLINE}
          </h1>
          <p className="label text-ivory/85 mt-6 max-w-md hero-shadow">
            Residential interiors, modular kitchens, space planning, 3D designs
            and turnkey execution.
          </p>
          {/* Primary conversion CTA — solid filled button, stands out over the photo */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-10">
            <Link to="/contact/" className="btn-solid btn-light">
              Start Your Project
            </Link>
            <Link to="/projects/" className="text-link text-ivory">
              View projects
              <span className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: Intro statement — one serif paragraph that explains the
          studio and links into the core service pages. */}
      <section className="px-[5vw] py-[14vh]">
        <div className="max-w-3xl">
          <Reveal>
            <p
              className="font-display text-ink"
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
                lineHeight: 1.25,
                letterSpacing: "-0.005em",
              }}
            >
              We design homes in Mumbai with neutral tones and modern elegance,
              focused on comfort, function and a look that lasts. We work from{" "}
              <Link to="/services/" className="underline decoration-hairline underline-offset-4 hover:decoration-brass">
                concept to completion
              </Link>{" "}
              so every space feels personal, warm and beautifully made, whether
              it is a{" "}
              <Link to="/services/modular-kitchen-design-mumbai/" className="underline decoration-hairline underline-offset-4 hover:decoration-brass">
                modular kitchen
              </Link>
              , a full-home{" "}
              <Link to="/services/residential-interior-design-mumbai/" className="underline decoration-hairline underline-offset-4 hover:decoration-brass">
                interior
              </Link>{" "}
              or a{" "}
              <Link to="/services/turnkey-interior-execution/" className="underline decoration-hairline underline-offset-4 hover:decoration-brass">
                turnkey handover
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION: Panel sequence — four full-viewport photo panels, each
          linking to a key area of the site (Studio, Projects, Process, Contact). */}
      {PANELS.map((panel) => (
        <section key={panel.to} className="relative h-screen min-h-[600px] w-full overflow-hidden">
          <Link to={panel.to} className="group block h-full">
            <div className="img-hover absolute inset-0">
              <Image
                src={IMG[panel.image].url}
                alt={IMG[panel.image].alt}
                fittingType="fill"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(42,38,34,0.36) 0%, rgba(42,38,34,0.12) 45%, rgba(42,38,34,0.62) 100%)",
              }}
              aria-hidden="true"
            />
            <div className="relative h-full flex flex-col justify-end px-[5vw] pb-[8vh]">
              <p className="label text-ivory/85 mb-4 hero-shadow">{panel.label}</p>
              <h2
                className="font-display text-ivory hero-shadow"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.01em",
                }}
              >
                {panel.line1}
                <br />
                {panel.line2}
              </h2>
              <span className="text-link text-ivory mt-6 max-w-max">
                View {panel.label.toLowerCase()}
                <span className="arrow" />
              </span>
            </div>
          </Link>
        </section>
      ))}

      {/* SECTION: Portfolio preview grid — two project types, each with a
          two-image composition. Every photo links into the case studies. */}
      <section className="px-[5vw] py-[14vh]">
        <Reveal>
          <p className="label mb-4">Selected work</p>
          <h2
            className="font-display text-ink max-w-2xl"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Projects grouped by type, with room to breathe.
          </h2>
        </Reveal>

        {PROJECT_GROUPS.map((group) => (
          <div key={group.type} className="mt-16">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                <h3 className="font-display text-ink" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}>
                  {group.type}
                </h3>
                <p className="text-taupe max-w-md text-sm md:text-base">{group.blurb}</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              {group.items.map((item, i) => (
                <Reveal
                  key={item.key}
                  className={i % 2 === 0 ? "md:col-span-7" : "md:col-span-5"}
                  delay={i * 80}
                >
                  <Link to={group.to} className="block group">
                    <div className={`img-hover ${item.ratio}`}>
                      <Image
                        src={IMG[item.key].url}
                        alt={IMG[item.key].alt}
                        fittingType="fill"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* SECTION: Portfolio CTA banner — after the preview grid, invites
          visitors to the full portfolio page. */}
      <section className="bg-sand border-y border-hairline px-[5vw] py-14">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <p className="label mb-2">The portfolio</p>
              <p
                className="font-display text-ink"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", lineHeight: 1.15 }}
              >
                Room-by-room case studies: the brief, the plan, what changed.
              </p>
            </div>
            <Link to="/projects/" className="btn-solid max-w-max">
              View Full Portfolio
            </Link>
          </div>
        </Reveal>
      </section>

      {/* SECTION: Closing CTA — walnut band with the main enquiry button
          plus direct phone and email, so contact info is visible mid-page
          and not only in the footer. */}
      <section className="bg-walnut text-ivory px-[5vw] py-20 md:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <p className="label text-ivory/70 mb-5">Start a project</p>
            <p
              className="font-display text-ivory"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.1, letterSpacing: "-0.01em" }}
            >
              If you are planning a home in Mumbai, we would like to hear what
              you have in mind.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-10">
              <Link to="/contact/" className="btn-solid btn-light">
                Enquire Now
              </Link>
              <a href="tel:+919702019905" className="text-link text-ivory">
                Call 9702019905
                <span className="arrow" />
              </a>
              <a href="mailto:nishalinteriors@gmail.com" className="text-link text-ivory">
                nishalinteriors@gmail.com
                <span className="arrow" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}