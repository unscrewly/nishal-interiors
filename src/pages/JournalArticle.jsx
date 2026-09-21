import { Link, useParams } from "react-router-dom";
import SEO from "@/components/site/SEO";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import Reveal from "@/components/site/Reveal";
import { ARTICLES, getArticle } from "@/content/journal";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function JournalArticle() {
  const { slug } = useParams();
  const article = getArticle(slug);

  if (!article) {
    return (
      <div className="px-[5vw] pt-24 md:pt-32 pb-20">
        <Breadcrumbs items={[{ label: "Journal", to: "/journal/" }]} />
        <h1 className="font-display text-ink" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          We could not find that article.
        </h1>
        <Link to="/journal/" className="text-link text-ink mt-8">
          Back to the journal
          <span className="arrow" />
        </Link>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    dateModified: article.modified,
    author: {
      "@type": "Person",
      name: "Nishita",
      url: "https://nishal-design-studio.base44.app/studio/",
    },
    publisher: {
      "@type": "Organization",
      name: "Nishal Interiors by Nishita",
      url: "https://nishal-design-studio.base44.app",
    },
    mainEntityOfPage: `https://nishal-design-studio.base44.app/journal/${article.slug}/`,
  };

  return (
    <>
      <SEO
        title={`${article.title} | Nishal Interiors`}
        description={article.description}
        path={`/journal/${article.slug}/`}
        jsonLd={jsonLd}
      />

      <article className="px-[5vw] pt-24 md:pt-32 pb-16">
        <Breadcrumbs
          items={[
            { label: "Journal", to: "/journal/" },
            { label: article.title, to: `/journal/${article.slug}/` },
          ]}
        />

        <Reveal className="max-w-3xl">
          <p className="label mb-4">Journal</p>
          <h1
            className="font-display text-ink"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            {article.title}
          </h1>
          <p className="text-taupe mt-6 leading-relaxed">{article.description}</p>
          <p className="label mt-6">
            By Nishita, published {formatDate(article.published)}
            {article.modified !== article.published &&
              `, updated ${formatDate(article.modified)}`}
          </p>
        </Reveal>

        <div className="max-w-3xl mt-12">
          {article.body.map((block, i) =>
            block.type === "h2" ? (
              <Reveal as="h2" key={i} className="font-display text-ink text-3xl mt-10 mb-4">
                {block.text}
              </Reveal>
            ) : (
              <Reveal as="p" key={i} className="text-ink leading-[1.8] mb-5 text-[1.125rem]">
                {block.text}
              </Reveal>
            )
          )}
        </div>

        <Reveal className="max-w-3xl mt-14 border-t border-hairline pt-10">
          <p className="label mb-5">If this helped, the next step is a conversation.</p>
          <div className="flex flex-col gap-4">
            <Link to="/contact/" className="text-link text-ink max-w-max">
              Start a project
              <span className="arrow" />
            </Link>
            <Link to="/journal/" className="text-link text-ink max-w-max">
              All journal pieces
              <span className="arrow" />
            </Link>
          </div>
        </Reveal>
      </article>
    </>
  );
}