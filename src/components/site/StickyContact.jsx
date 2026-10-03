import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919702019905";

/**
 * Persistent contact affordances: a small WhatsApp float on desktop and a
 * sticky [Call / WhatsApp / Book] bar on mobile.
 */
export default function StickyContact() {
  return (
    <>
      {/* Desktop: tidy WhatsApp float, bottom right with safe margin */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-40 w-12 h-12 items-center justify-center bg-espresso text-ivory hover:bg-brass hover:text-espresso transition-colors duration-300 [box-shadow:0_10px_30px_rgba(28,21,18,0.3)]"
      >
        <MessageCircle size={20} strokeWidth={1.5} />
      </a>

      {/* Mobile: sticky bottom action bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-[1fr_1.2fr_1.4fr] bg-espresso text-ivory border-t border-ivory/15">
        <a
          href="tel:+919702019905"
          className="flex items-center justify-center gap-2 min-h-[56px] label text-ivory"
        >
          <Phone size={16} strokeWidth={1.5} />
          Call
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 min-h-[56px] label text-ivory border-l border-ivory/15"
        >
          <MessageCircle size={16} strokeWidth={1.5} />
          WhatsApp
        </a>
        <Link to="/contact/" className="btn-brass min-h-[56px] px-2">
          Book Consultation
        </Link>
      </div>
    </>
  );
}