import { Link } from "react-router-dom";

/**
 * Visual breadcrumbs plus a matching BreadcrumbList JSON-LD.
 * Pass items as [{ label, to }]; the last item is the current page.
 */
export default function Breadcrumbs({ items }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", to: "/" }, ...items].map(
      (item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.label,
        item: `https://nishal-design-studio.base44.app${item.to}`,
      })
    ),
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link to="/" className="label hover:text-brass transition-colors inline-block py-2">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={`${item.to}-${i}`} className="flex items-center gap-2">
            <span className="text-taupe-light" aria-hidden="true">
              /
            </span>
            {i === items.length - 1 ? (
              <span aria-current="page" className="label text-ink py-2 inline-block">
                {item.label}
              </span>
            ) : (
              <Link to={item.to} className="label hover:text-brass transition-colors inline-block py-2">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}