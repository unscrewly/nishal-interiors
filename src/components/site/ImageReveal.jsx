import { useEffect, useRef, useState } from "react";

/**
 * Image reveal: a clip-path opens from the bottom (900ms, ease-out)
 * while the media settles from scale 1.08 to 1. Plays once.
 * The observer watches the unclipped outer element — a fully clipped
 * target never reports an intersection, so the clip lives on an inner div.
 */
export default function ImageReveal({ children, className = "", ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} {...rest}>
      <div className={`img-reveal ${inView ? "is-in" : ""} w-full h-full`}>
        <div className="reveal-media w-full h-full">{children}</div>
      </div>
    </div>
  );
}