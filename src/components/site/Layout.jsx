import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import EnquireModal from "./EnquireModal";
import FloatingEnquire from "./FloatingEnquire";

export default function Layout() {
  // Keying main by pathname plays a soft fade-up whenever the route changes.
  const { pathname } = useLocation();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[70] focus:bg-ivory focus:text-ink focus:px-4 focus:py-2 focus:border focus:border-hairline"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" key={pathname} className="page-enter">
        <Outlet />
      </main>
      <FloatingEnquire />
      <Footer />
      {/* Homepage enquiry popup — shows once per session, after a short delay */}
      <EnquireModal />
    </>
  );
}