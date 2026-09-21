import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { Image } from "@/components/ui/image";
import { IMG } from "@/content/images";
import { SERVICES } from "@/content/services";

export default function Services() {
  return (
    <>
      <SEO
        title="Interior Design Services | Nishal Interiors, Mumbai"
        description="Residential interiors, modular kitchens, space planning, 3D designs and turnkey execution across Mumbai. See what each service covers and how we work."
        path="/services/"
      />

      <PageHero
        breadcrumbs={[{ label: "Services", to: "/services/" }]}
        label="Services"
        title="Five ways we help a home work better."
        intro="From one replanned kitchen to a full home handed over ready to live in. Every service starts the same way: a visit, a conversation, and a plan you can understand."
      />

      <section className="px-[5vw] pb-16">
        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug}>
              <article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <Link
                  to={`/services/${s.slug}/`}
                  className={`block md:col-span-6 ${
                    i % 2 === 1 ? "md:order-2 md:col-start-7" : ""
                  }`}
                >
                  <div className="img-hover aspect-[4/5]">
                    <Image
                      src={IMG[s.image].url}
                      alt={IMG[s.image].alt}
                      fittingType="fill"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <div
                  className={`md:col-span-6 ${
                    i % 2 === 1 ? "md:order-1 md:col-start-1" : ""
                  }`}
                >
                  <p className="label mb-3">{s.label}</p>
                  <h2 className="font-display text-ink mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", lineHeight: 1.1 }}>
                    {s.title}
                  </h2>
                  <p className="text-taupe leading-relaxed max-w-lg">{s.intro[0]}</p>
                  <Link to={`/services/${s.slug}/`} className="text-link text-ink mt-6">
                    {s.label}
                    <span className="arrow" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-walnut text-ivory px-[5vw] py-16">
        <Reveal>
          <p className="label text-ivory/70 mb-4">Start a project</p>
          <p className="font-display text-ivory max-w-2xl" style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}>
            Not sure which service fits? Tell us about the home and we will say
            plainly what it needs.
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