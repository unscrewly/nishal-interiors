import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Menu from "./Menu";

const NAV = [
  { label: "Studio", to: "/studio/" },
  { label: "Services", to: "/services/" },
  { label: "Projects", to: "/projects/" },
  { label: "Process", to: "/process/" },
  { label: "Journal", to: "/journal/" },
  { label: "Contact", to: "/contact/" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the home hero the header sits on a dark photo scrim, so it reads
  // ivory while transparent. Inner pages start on a light ground, so they
  // read ink. Once scrolled, every page gets the solid espresso blur bar.
  const tone = scrolled || isHome ? "text-ivory" : "text-ink";
  const bar = scrolled
    ? "bg-espresso/90 backdrop-blur-md [box-shadow:0_8px_30px_rgba(28,21,18,0.25)]"
    : "bg-transparent";

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${bar}`}>
        <div className="relative flex items-center justify-between px-[5vw] h-16 md:h-20">
          {/* Below xl: hamburger left, brand centred, brass CTA right */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className={`label min-h-[48px] flex items-center gap-2 xl:hidden ${tone} hover:text-brass transition-colors`}
          >
            <span className="flex flex-col gap-[5px]" aria-hidden="true">
              <span className="block w-6 h-px bg-current" />
              <span className="block w-6 h-px bg-current" />
              <span className="block w-4 h-px bg-current" />
            </span>
            <span className="hidden sm:inline">Menu</span>
          </button>

          <Link
            to="/"
            className={`font-display leading-none hover:text-brass transition-colors absolute left-1/2 -translate-x-1/2 xl:static xl:translate-x-0 ${tone}`}
            style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)" }}
          >
            Nishal Interiors
          </Link>

          {/* From xl up: full nav; the current page keeps its underline drawn */}
          <nav aria-label="Primary" className="hidden xl:flex items-center gap-6">
            {NAV.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `nav-link min-h-[48px] flex items-center ${tone} ${isActive ? "is-active" : ""}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Brass CTA, stronger than the nav */}
          <div className="flex items-center">
            <Link
              to="/contact/"
              className={`btn-brass hidden sm:inline-flex transition-transform duration-300 ${scrolled ? "scale-[0.96]" : "scale-100"}`}
            >
              Book a Free Consultation
            </Link>
            <Link to="/contact/" className="btn-brass sm:hidden px-3">
              Book
            </Link>
          </div>
          {/* Thin brass scroll-progress line under the bar */}
          <div
            className="absolute bottom-0 left-0 h-px bg-brass"
            style={{ width: `${(progress * 100).toFixed(2)}%`, opacity: scrolled ? 1 : 0 }}
            aria-hidden="true"
          />
        </div>
      </header>

      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}