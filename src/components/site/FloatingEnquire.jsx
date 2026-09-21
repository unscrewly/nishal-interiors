import { Link, useLocation } from "react-router-dom";

/* Floating "Enquire" button: follows scroll on every page so contact is
   always one tap away. Hidden on the contact page itself. */
export default function FloatingEnquire() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/contact")) return null;

  return (
    <Link
      to="/contact/"
      aria-label="Enquire now"
      className="btn-solid fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 [box-shadow:0_10px_30px_rgba(42,38,34,0.25)]"
    >
      Enquire
    </Link>
  );
}