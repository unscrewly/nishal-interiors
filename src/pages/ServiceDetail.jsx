import { Link, Navigate } from "react-router-dom";
import SEO from "@/components/site/SEO";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { Image } from "@/components/ui/image";
import { IMG } from "@/content/images";
import { SERVICES } from "@/content/services";
import { ARTICLES } from "@/content/journal";

export default function ServiceDetail({ slug }) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/404" replace />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `https://nishal-design-studio.base44.app/services/${service.slug}/`,
    areaServed: "Mumbai and surrounding areas",
    provider: {
      "@type": "Organization",
      name: "Nishal Interiors by Nishita",
      url: "https://nishal-design-studio.base44.app",
    },
  };

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}/`}
        image={IMG[service.image].url}
        jsonLd={jsonLd}
      />

      <PageHero
        breadcrumbs={[
          { label: "Services", to: "/services/" },
          { label: service.label, to: `/services/${service.slug}/` },
        ]}
        label={service.label}
        title={service.h1}
      />

      <section className="px-[5vw] pb-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-6">
          <div className="aspect-[3/2] img-hover">
            <Image
              src={IMG[service.image].url}
              alt={IMG[service.image].alt}
              fittingType="fill"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal className="md:col-span-6 flex flex-col justify-center">
          {service.intro.map((p) => (
            <p key={p} className="text-ink leading-relaxed mb-4 last:mb-0">
              {p}
            </p>
          ))}
        </Reveal>
      </section>

      <section className="bg-sand px-[5vw] py-16">
        <div className="max-w-5xl">
          <Reveal>
            <h2 className="font-display h2-display text-ink mb-8">
              What this service covers
            </h2>
          </Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {service.includes.map((item) => (
              <Reveal as="li" key={item} className="border-t border-hairline pt-4 text-ink leading-relaxed">
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-[5vw] py-16 max-w-5xl">
        <Reveal>
          <p className="label mb-4">How we work</p>
          <p className="text-ink leading-relaxed text-lg max-w-3xl">{service.how}</p>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 border-t border-hairline pt-10">
            <div>
              <p className="label mb-3">Related</p>
              <Link to="/projects/" className="text-link text-ink">
                See the projects
                <span className="arrow" />
              </Link>
            </div>
            <div>
              <p className="label mb-3">Keep reading</p>
              <Link
                to={`/journal/${ARTICLES[0].slug}/`}
                className="text-link text-ink"
              >
                {ARTICLES[0].title}
                <span className="arrow" />
              </Link>
            </div>
            <div>
              <p className="label mb-3">Next step</p>
              <Link to="/contact/" className="text-link text-ink">
                Start a project
                <span className="arrow" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}