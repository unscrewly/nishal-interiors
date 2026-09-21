import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";
import PageHero from "@/components/site/PageHero";
import ContactForm from "@/components/site/ContactForm";
import { Image } from "@/components/ui/image";
import { IMG } from "@/content/images";

export default function Contact() {
  return (
    <>
      <SEO
        title="Start a Project | Nishal Interiors, Mumbai"
        description="Tell us about your Mumbai home, your timeline and the rooms you want to change. We reply to every enquiry and start with a site visit."
        path="/contact/"
        image={IMG.cornerDetail.url}
      />

      <PageHero
        breadcrumbs={[{ label: "Contact", to: "/contact/" }]}
        label="Contact"
        title="Start a project."
        intro="Tell us about the home, the rooms that bother you and when you want to move. We reply to every enquiry, usually within a day or two."
      />

      <section className="px-[5vw] pb-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <ContactForm />
        </div>
        <aside className="md:col-span-5">
          <div className="aspect-[4/5] img-hover mb-8">
            <Image
              src={IMG.cornerDetail.url}
              alt={IMG.cornerDetail.alt}
              fittingType="fill"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="label mb-3">Direct</p>
          <ul className="space-y-2 mb-8">
            <li>
              <a href="mailto:nishalinteriors@gmail.com" className="text-link text-ink">
                nishalinteriors@gmail.com
                <span className="arrow" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nishal_interiors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-ink"
              >
                @nishal_interiors
                <span className="arrow" />
              </a>
            </li>
            <li>
              <a href="tel:+919702019905" className="text-link text-ink">
                Call 9702019905
                <span className="arrow" />
              </a>
            </li>
          </ul>
          <p className="label mb-3">Also useful</p>
          <ul className="space-y-2">
            <li>
              <Link to="/process/" className="text-link text-ink">
                How a project runs
                <span className="arrow" />
              </Link>
            </li>
            <li>
              <Link to="/pricing-and-how-we-charge/" className="text-link text-ink">
                How we charge
                <span className="arrow" />
              </Link>
            </li>
            <li>
              <Link to="/faq/" className="text-link text-ink">
                Common questions
                <span className="arrow" />
              </Link>
            </li>
          </ul>
        </aside>
      </section>
    </>
  );
}