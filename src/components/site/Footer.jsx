import { Link } from "react-router-dom";

const COLS = [
  {
    heading: "Studio",
    links: [
      { label: "About the studio", to: "/studio/" },
      { label: "Services", to: "/services/" },
      { label: "Process", to: "/process/" },
      { label: "Pricing", to: "/pricing-and-how-we-charge/" },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "Projects", to: "/projects/" },
      { label: "Journal", to: "/journal/" },
      { label: "Areas we serve", to: "/areas/" },
      { label: "FAQ", to: "/faq/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-sand border-t border-hairline">
      <div className="px-[5vw] pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Contact */}
          <div className="md:col-span-4">
            <p className="label mb-4">Contact</p>
            <p className="text-ink leading-relaxed">
              Nishal Interiors by Nishita
              <br />
              Mumbai
            </p>
            <ul className="mt-4 space-y-1">
              <li>
                <a href="tel:+919702019905" className="text-link text-ink">
                  Call 9702019905
                  <span className="arrow" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:nishalinteriors@gmail.com"
                  className="text-link text-ink"
                >
                  nishalinteriors@gmail.com
                  <span className="arrow" />
                </a>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.heading} className="md:col-span-2">
              <p className="label mb-4">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-link text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Enquiry */}
          <div className="md:col-span-4">
            <p className="label mb-4">Start a project</p>
            <p className="text-ink leading-relaxed max-w-xs">
              Tell us about your home, your timeline and the rooms you want to
              change.
            </p>
            <Link to="/contact/" className="text-link text-ink mt-4">
              Begin your enquiry
              <span className="arrow" />
            </Link>
            <p className="label mt-6 mb-2">Follow</p>
            <a
              href="https://www.instagram.com/nishal_interiors"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-ink"
            >
              @nishal_interiors
              <span className="arrow" />
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-14 pt-6 border-t border-hairline flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="label">
            &copy; {new Date().getFullYear()} Nishal Interiors by Nishita
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link to="/privacy-policy/" className="label hover:text-brass">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions/" className="label hover:text-brass">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Giant wordmark */}
      <div
        className="relative overflow-hidden border-t border-hairline"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M-20 140 Q 200 90 420 130 T 880 120 T 1240 150"
            stroke="#E3D8C6"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-20 70 Q 300 120 600 80 T 1240 60"
            stroke="#E3D8C6"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <svg
          viewBox="0 0 1200 200"
          className="w-full h-auto block"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            x="600"
            y="150"
            textAnchor="middle"
            fontFamily="Cormorant Garamond, serif"
            fontWeight="300"
            fontSize="170"
            fill="#2A2622"
            letterSpacing="-2"
          >
            Nishal Interiors
          </text>
        </svg>
      </div>

      {/* Real text for assistive tech (wordmark above is aria-hidden) */}
      <span className="sr-only">Nishal Interiors by Nishita, Mumbai</span>
    </footer>
  );
}