import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { base44 } from "@/api/base44Client";

const SESSION_KEY = "ni-enquire-modal-shown";
const DELAY_MS = 5000;
const PHONE = "9702019905";
const EMAIL = "nishalinteriors@gmail.com";

/* "Enquire Now" popup: appears once per session on the homepage after a
   considered delay. Saves a quick enquiry to the Enquiries store. */
export default function EnquireModal() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const closeRef = useRef(null);

  useEffect(() => {
    if (pathname !== "/") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setOpen(true);
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setSending(true);
    setError("");
    try {
      await base44.entities.Enquiry.create({
        name: data.get("name"),
        phone: data.get("phone"),
        email: data.get("email"),
        message: "Quick enquiry from the homepage popup",
      });
      setSent(true);
    } catch {
      setError("That did not go through. Please call or email us directly.");
    } finally {
      setSending(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <button
        type="button"
        aria-label="Close enquiry popup"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-ink/50"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Enquire now"
        className="page-enter relative bg-ivory border border-hairline w-full sm:max-w-md p-8 sm:p-10 pb-12"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-taupe hover:text-ink transition-colors"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {sent ? (
          <div className="max-w-sm">
            <p className="label mb-3">Enquiry received</p>
            <h2 className="font-display text-ink" style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", lineHeight: 1.1 }}>
              Thank you. We will be in touch.
            </h2>
            <p className="text-taupe leading-relaxed mt-4">
              We read every message and reply, usually within a day or two. If
              you would like to talk sooner, call us.
            </p>
            <a href={`tel:+91${PHONE}`} className="text-link text-ink mt-6">
              Call {PHONE}
              <span className="arrow" />
            </a>
          </div>
        ) : (
          <>
            <p className="label mb-3">Nishal Interiors, Mumbai</p>
            <h2 className="font-display text-ink" style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", lineHeight: 1.1 }}>
              Planning a home in Mumbai?
            </h2>
            <p className="text-taupe leading-relaxed mt-3">
              Tell us where and when — we will call you back within a day or two.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <label className="block">
                <span className="label block mb-1">Name</span>
                <input
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-hairline py-3 outline-none focus:border-brass transition-colors text-ink"
                />
              </label>
              <label className="block">
                <span className="label block mb-1">Phone</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="w-full bg-transparent border-b border-hairline py-3 outline-none focus:border-brass transition-colors text-ink"
                />
              </label>
              <label className="block">
                <span className="label block mb-1">Email</span>
                <input
                  name="email"
                  type="email"
                  className="w-full bg-transparent border-b border-hairline py-3 outline-none focus:border-brass transition-colors text-ink"
                />
              </label>
              {error && <p className="text-taupe text-sm">{error}</p>}
              <button type="submit" disabled={sending} className="btn-solid w-full">
                {sending ? "Sending…" : "Enquire Now"}
              </button>
            </form>

            <p className="label mt-6 mb-3">Prefer to reach out directly?</p>
            <ul className="space-y-1">
              <li>
                <a href={`tel:+91${PHONE}`} className="text-link text-ink">
                  {PHONE}
                  <span className="arrow" />
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="text-link text-ink">
                  {EMAIL}
                  <span className="arrow" />
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}