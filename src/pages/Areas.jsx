import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";

export default function Areas() {
  return (
    <>
      <SEO
        title="Areas We Serve in Mumbai | Nishal Interiors"
        description="Nishal Interiors designs homes across Mumbai and its surrounding areas. See how we work locally, and ask about your area before you plan."
        path="/areas/"
      />

      <PageHero
        breadcrumbs={[{ label: "Areas", to: "/areas/" }]}
        label="Areas"
        title="Where we work."
        intro="The studio is based in Mumbai and serves the city and its surrounding areas. Most of our work is in apartment buildings, which we know building by building."
      />

      <section className="px-[5vw] pb-16 max-w-5xl">
        <Reveal>
          <p className="text-ink leading-relaxed max-w-3xl">
            We work across Mumbai, including its western, central and harbour
            suburbs, and the surrounding areas beyond the city. If your home is
            outside the city, ask us: what changes is travel time for site
            visits, and we will say plainly what that means for your schedule.
          </p>
          <p className="text-taupe leading-relaxed mt-6 max-w-3xl">
            The specific areas we publish pages for: {"{{NEED: list of areas Nishita actually serves}}"}
            . We only publish area pages for places we genuinely work in, with
            real projects and real notes on local housing.
          </p>
        </Reveal>

        <Reveal className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-hairline pt-10">
          <div>
            <p className="label mb-3">What we do</p>
            <Link to="/services/" className="text-link text-ink">
              All services
              <span className="arrow" />
            </Link>
          </div>
          <div>
            <p className="label mb-3">Recent work</p>
            <Link to="/projects/" className="text-link text-ink">
              Projects
              <span className="arrow" />
            </Link>
          </div>
          <div>
            <p className="label mb-3">Your area</p>
            <Link to="/contact/" className="text-link text-ink">
              Ask about your home
              <span className="arrow" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}