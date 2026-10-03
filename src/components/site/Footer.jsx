import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://wa.me/919702019905";
// TODO: replace with the studio's real Google Business reviews URL
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Nishal+Interiors+Mumbai+reviews";

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
    <footer className="bg-espresso text-ivory">
      <div className="container-x pt-20 pb-28 md:pb-10">
        {/* CTA row above the wordmark */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-14 border-b border-ivory/15">
          <div>
            <p className="label text-ivory/60 mb-3">Ready when you are</p>
            <p className="font-display text-3xl md:text-4xl" style={{ lineHeight: 1.05 }}>
              Book a free design consultation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact/" className="btn-brass">
              Book a Free Consultation
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pt-12">
          {/* Contact */}
          <div className="md:col-span-4">
            <p className="label text-ivory/60 mb-4">Contact</p>
            <p className="text-ivory leading-relaxed">
              Nishal Interiors by Nishita
              <br />
              Mumbai
            </p>
            <ul className="mt-4 space-y-1">
              <li>
                <a href="tel:+919702019905" className="text-link text-ivory">
                  Call 9702019905
                  <span className="arrow" />
                </a>
              </li>
              <li>
                <a href="mailto:nishalinteriors@gmail.com" className="text-link text-ivory">
                  nishalinteriors@gmail.com
                  <span className="arrow" />
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link text-ivory"
                >
                  WhatsApp us
                  <span className="arrow" />
                </a>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.heading} className="md:col-span-2">
              <p className="label text-ivory/60 mb-4">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-link text-ivory">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Enquiry + follow */}
          <div className="md:col-span-4">
            <p className="label text-ivory/60 mb-4">Start a project</p>
            <p className="text-ivory/75 leading-relaxed max-w-xs">
              Tell us about your home, your timeline and the rooms you want to
              change.
            </p>
            <Link to="/contact/" className="text-link text-ivory mt-4">
              Book a free consultation
              <span className="arrow" />
            </Link>
            <p className="label text-ivory/60 mt-6 mb-2">Follow</p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <a
                href="https://www.instagram.com/nishal_interiors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-ivory"
              >
                @nishal_interiors
                <span className="arrow" />
              </a>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-ivory"
              >
                Google reviews
                <span className="arrow" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-14 pt-6 border-t border-ivory/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="label text-ivory/60">
            &copy; {new Date().getFullYear()} Nishal Interiors by Nishita
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link to="/privacy-policy/" className="label text-ivory/60 hover:text-brass inline-block py-2">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions/" className="label text-ivory/60 hover:text-brass inline-block py-2">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="relative overflow-hidden border-t border-ivory/15" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M-20 140 Q 200 90 420 130 T 880 120 T 1240 150"
            stroke="#33261E"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-20 70 Q 300 120 600 80 T 1240 60"
            stroke="#33261E"
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
            fontWeight="500"
            fontSize="170"
            fill="#F6F0E7"
            opacity="0.9"
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