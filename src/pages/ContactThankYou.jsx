import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";

export default function ContactThankYou() {
  return (
    <section className="px-[5vw] pt-32 md:pt-40 pb-[20vh] max-w-2xl">
      <SEO
        title="Thank You | Nishal Interiors, Mumbai"
        description="Your enquiry has reached Nishal Interiors."
        path="/contact/thank-you/"
        noindex
      />
      <p className="label mb-4">Enquiry received</p>
      <h1
        className="font-display text-ink"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05 }}
      >
        Thank you. We will be in touch.
      </h1>
      <p className="text-taupe leading-relaxed mt-6">
        Your enquiry has reached the studio. We read every message and reply,
        usually within a day or two, to understand the brief and arrange a site
        visit.
      </p>
      <Link to="/journal/" className="text-link text-ink mt-10">
        Read the journal while you wait
        <span className="arrow" />
      </Link>
    </section>
  );
}