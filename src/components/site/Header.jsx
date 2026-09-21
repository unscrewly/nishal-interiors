import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

/* Desktop navigation links (lg and up). On smaller screens the same
   destinations live inside the full-screen menu. */
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "bg-ivory border-b border-hairline"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="relative flex items-center justify-between px-[5vw] h-16 md:h-20">
          {/* Mobile / tablet: hamburger on the left, brand centred, Enquire right */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="label text-ink min-h-[48px] flex items-center gap-2 lg:hidden"
          >
            <span className="flex flex-col gap-[5px]" aria-hidden="true">
              <span className="block w-6 h-px bg-current" />
              <span className="block w-6 h-px bg-current" />
              <span className="block w-4 h-px bg-current" />
            </span>
            <span className="hidden sm:inline">Menu</span>
          </button>

          {/* Brand: centred on small screens, left-aligned on desktop */}
          <Link
            to="/"
            className="font-display text-ink leading-none hover:text-brass transition-colors absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
            style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)" }}
          >
            Nishal Interiors
          </Link>

          {/* Desktop nav with draw-in underline hovers */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
            {NAV.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="nav-link text-ink min-h-[48px] flex items-center"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Conversion: Enquire always reachable, top right on every screen */}
          <div className="flex items-center">
            <Link
              to="/contact/"
              className="label text-ink min-h-[48px] flex items-center hover:text-brass transition-colors lg:hidden"
            >
              Enquire
            </Link>
            <Link to="/contact/" className="btn-solid hidden lg:inline-flex">
              Enquire
            </Link>
          </div>
        </div>
      </header>

      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}