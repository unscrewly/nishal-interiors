import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { ARTICLES } from "@/content/journal";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Journal() {
  return (
    <>
      <SEO
        title="Journal, Guides for Homes | Nishal Interiors"
        description="Practical guides from our site work in Mumbai: kitchen materials and humidity, small flat space planning, turnkey timelines, storage and lighting."
        path="/journal/"
      />

      <PageHero
        breadcrumbs={[{ label: "Journal", to: "/journal/" }]}
        label="Journal"
        title="Guides from our site work."
        intro="Short, useful pieces written between projects. Everything here comes from work we have actually done in Mumbai homes."
      />

      <section className="px-[5vw] pb-16 max-w-5xl">
        <ol className="border-t border-hairline">
          {ARTICLES.map((a) => (
            <Reveal as="li" key={a.slug} className="border-b border-hairline">
              <Link
                to={`/journal/${a.slug}/`}
                className="block py-8 grid grid-cols-1 md:grid-cols-12 gap-4 group"
              >
                <p className="label md:col-span-3">{formatDate(a.published)}</p>
                <div className="md:col-span-9">
                  <h2 className="font-display text-ink group-hover:text-brass transition-colors" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", lineHeight: 1.15 }}>
                    {a.title}
                  </h2>
                  <p className="text-taupe mt-3 max-w-2xl">{a.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}