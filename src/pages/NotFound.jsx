import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services/" },
  { label: "Projects", to: "/projects/" },
  { label: "Journal", to: "/journal/" },
  { label: "Contact", to: "/contact/" },
];

export default function NotFound() {
  return (
    <section className="px-[5vw] pt-32 md:pt-40 pb-[20vh]">
      <SEO
        title="Page Not Found | Nishal Interiors, Mumbai"
        description="The page you were looking for could not be found. Here are the useful corners of the site instead."
        path="/404"
        noindex
      />
      <p className="label mb-4">404</p>
      <h1
        className="font-display text-ink max-w-2xl"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.02 }}
      >
        This room does not exist in the plan.
      </h1>
      <p className="text-taupe leading-relaxed mt-6 max-w-lg">
        The page you were looking for has moved or never existed. Here is where
        most people are heading.
      </p>
      <nav aria-label="Key pages" className="mt-10">
        <ul className="flex flex-wrap gap-x-10 gap-y-4">
          {LINKS.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-link text-ink">
                {l.label}
                <span className="arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}