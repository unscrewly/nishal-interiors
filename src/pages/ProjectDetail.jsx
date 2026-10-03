import { Link, useParams } from "react-router-dom";
import SEO from "@/components/site/SEO";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { Image } from "@/components/ui/image";
import { IMG } from "@/content/images";
import { PROJECTS } from "@/content/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <SEO title="Project Not Found | Nishal Interiors, Mumbai" description="This project could not be found." path="/projects/" noindex />
        <div className="px-[5vw] pt-24 md:pt-32 pb-20">
          <Breadcrumbs items={[{ label: "Projects", to: "/projects/" }]} />
          <h1 className="font-display text-ink" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            We could not find that project.
          </h1>
          <Link to="/projects/" className="text-link text-ink mt-8">
            Back to all projects
            <span className="arrow" />
          </Link>
        </div>
      </>
    );
  }

  const serviceMap = {
    "Residential interiors": "residential-interior-design-mumbai",
    "Modular kitchens": "modular-kitchen-design-mumbai",
    "Space planning": "space-planning-for-apartments",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: `https://nishal-design-studio.base44.app/projects/${project.slug}/`,
    image: IMG[project.images[0].key].url,
    creator: {
      "@type": "Organization",
      name: "Nishal Interiors by Nishita",
      url: "https://nishal-design-studio.base44.app",
    },
  };

  return (
    <>
      <SEO
        title={project.metaTitle}
        description={project.metaDescription}
        path={`/projects/${project.slug}/`}
        image={IMG[project.images[0].key].url}
        jsonLd={jsonLd}
      />

      <PageHero
        breadcrumbs={[
          { label: "Projects", to: "/projects/" },
          { label: project.group, to: "/projects/" },
        ]}
        label={project.group}
        title={project.title}
        intro={project.summary}
      />

      <section className="px-[5vw] pb-12">
        <Reveal>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-y border-hairline py-6">
            <div>
              <dt className="label mb-2">Location</dt>
              <dd className="text-ink">{project.location}</dd>
            </div>
            <div>
              <dt className="label mb-2">Year</dt>
              <dd className="text-ink">{project.year}</dd>
            </div>
            <div>
              <dt className="label mb-2">Photography</dt>
              <dd className="text-ink">{project.photographer}</dd>
            </div>
          </dl>
        </Reveal>
      </section>

      <section className="px-[5vw] pb-16 grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-12 max-w-6xl">
        <Reveal className="md:col-span-4">
          <h2 className="label mb-3">The brief</h2>
          <p className="text-ink leading-relaxed">{project.brief}</p>
        </Reveal>
        <Reveal className="md:col-span-4">
          <h2 className="label mb-3">The layout problem</h2>
          <p className="text-ink leading-relaxed">{project.layoutProblem}</p>
        </Reveal>
        <Reveal className="md:col-span-4">
          <h2 className="label mb-3">Materials</h2>
          <p className="text-ink leading-relaxed">{project.materials}</p>
        </Reveal>
      </section>

      <section className="px-[5vw] pb-16">
        {project.images.map((img, i) => (
          <Reveal key={img.key} className={`mb-10 last:mb-0 ${i % 3 === 1 ? "md:w-2/3 md:ml-auto" : ""}`}>
            <div className={`img-hover ${img.ratio}`}>
              <Image
                src={IMG[img.key].url}
                alt={IMG[img.key].alt}
                fittingType="fill"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        ))}
      </section>

      <section className="bg-sand px-[5vw] py-16">
        <Reveal>
          <h2 className="font-display h2-display text-ink max-w-3xl mb-6">
            What changed
          </h2>
          <p className="text-ink leading-relaxed max-w-3xl">{project.whatChanged}</p>
          <div className="flex flex-wrap gap-x-12 gap-y-4 mt-12">
            <Link
              to={`/services/${serviceMap[project.group]}/`}
              className="text-link text-ink"
            >
              The service behind this
              <span className="arrow" />
            </Link>
            <Link to="/contact/" className="text-link text-ink">
              Start a project
              <span className="arrow" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}