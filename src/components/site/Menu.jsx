import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Studio", to: "/studio/" },
  { label: "Services", to: "/services/" },
  { label: "Projects", to: "/projects/" },
  { label: "Process", to: "/process/" },
  { label: "Journal", to: "/journal/" },
  { label: "Pricing", to: "/pricing-and-how-we-charge/" },
  { label: "Areas", to: "/areas/" },
  { label: "Contact", to: "/contact/" },
];

export default function Menu({ open, onClose }) {
  const overlayRef = useRef(null);
  const firstLinkRef = useRef(null);

  // Focus trap + Escape handling
  useEffect(() => {
    if (!open) return;
    const overlay = overlayRef.current;
    if (!overlay) return;

    const previouslyFocused = document.activeElement;
    firstLinkRef.current?.focus();

    const handleKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Tab" && overlay) {
        const focusables = overlay.querySelectorAll(
          'a[href], button:not([disabled])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  return (
    <div
      ref={overlayRef}
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
      className={`fixed inset-0 z-50 bg-ivory transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between px-[5vw] py-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="label hover:text-ink transition-colors min-h-[48px] flex items-center"
          >
            Close
          </button>
          <span className="font-display text-2xl text-ink" aria-hidden="true">
            Nishal Interiors
          </span>
          <span className="w-16" aria-hidden="true" />
        </div>

        <nav className="flex-1 flex flex-col justify-center px-[5vw]">
          <ul>
            {NAV_LINKS.map((link, i) => (
              <li key={link.to} className="overflow-hidden">
                <Link
                  ref={i === 0 ? firstLinkRef : undefined}
                  to={link.to}
                  onClick={onClose}
                  className="font-display text-ink block py-2 leading-none transition-colors hover:text-brass"
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 5rem)",
                    transitionDelay: `${open ? i * 40 : 0}ms`,
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-[5vw] pb-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="label mb-2">Call or write</p>
            <ul className="space-y-1">
              <li>
                <a href="tel:+919702019905" className="text-link text-ink">
                  9702019905
                  <span className="arrow" />
                </a>
              </li>
              <li>
                <a href="mailto:nishalinteriors@gmail.com" className="text-link text-ink">
                  nishalinteriors@gmail.com
                  <span className="arrow" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="label mb-2">Follow</p>
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
      </div>
    </div>
  );
}