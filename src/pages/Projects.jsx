import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { Image } from "@/components/ui/image";
import { IMG } from "@/content/images";
import { PROJECTS } from "@/content/projects";

export default function Projects() {
  const groups = [...new Set(PROJECTS.map((p) => p.group))];

  return (
    <>
      <SEO
        title="Interior Projects in Mumbai | Nishal Interiors"
        description="Residential interiors, modular kitchens and space planning projects in Mumbai. See the brief, the layout problem and what changed, room by room."
        path="/projects/"
      />

      <PageHero
        breadcrumbs={[{ label: "Projects", to: "/projects/" }]}
        label="Projects"
        title="Work that shows how we think."
        intro="Each project here starts with a real problem: storage that ran out, a kitchen that fought its cook, a layout that wasted its own light. Here is what we changed."
      />

      <section className="px-[5vw] pb-16">
        {groups.map((group) => (
          <div key={group} className="mt-16 first:mt-0">
            <Reveal>
              <h2
                className="font-display text-ink mb-10"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", lineHeight: 1.1 }}
              >
                {group}
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {PROJECTS.filter((p) => p.group === group).map((p, i) => (
                <Reveal
                  key={p.slug}
                  className={
                    p.images.length > 1
                      ? "md:col-span-7"
                      : "md:col-span-5 md:col-start-8"
                  }
                  delay={i * 80}
                >
                  <Link to={`/projects/${p.slug}/`} className="group block">
                    <div className={`img-hover ${p.images[0].ratio}`}>
                      <Image
                        src={IMG[p.images[0].key].url}
                        alt={IMG[p.images[0].key].alt}
                        fittingType="fill"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="label mt-4 mb-2">{p.group}</p>
                    <p className="font-display text-ink text-2xl leading-snug max-w-md">
                      {p.title}
                    </p>
                    <span className="text-link text-ink mt-4">
                      Read the case study
                      <span className="arrow" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-walnut text-ivory px-[5vw] py-16">
        <Reveal>
          <p className="label text-ivory/70 mb-4">Start a project</p>
          <p className="font-display text-ivory max-w-2xl" style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}>
            Your home has its own problem worth solving. Tell us what it is.
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