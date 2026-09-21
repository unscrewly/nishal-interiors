import Reveal from "./Reveal";
import Breadcrumbs from "./Breadcrumbs";

/**
 * Standard inner page opening: breadcrumbs, label, H1 and optional intro.
 * Content starts right under the fixed navbar — no dead space.
 */
export default function PageHero({ label, title, intro, breadcrumbs, children }) {
  return (
    <section className="px-[5vw] pt-24 md:pt-32 pb-10 md:pb-14">
      {breadcrumbs && (
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      )}
      <Reveal>
        {label && <p className="label mb-4">{label}</p>}
        <h1
          className="font-display text-ink max-w-4xl"
          style={{
            fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h1>
        {intro && (
          <p className="text-taupe max-w-2xl mt-6 text-lg leading-relaxed">{intro}</p>
        )}
        {children}
      </Reveal>
    </section>
  );
}