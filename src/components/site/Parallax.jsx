import { useEffect, useRef } from "react";

/**
 * Very subtle scroll parallax: the child drifts a few dozen pixels
 * slower than the page. Disabled for prefers-reduced-motion.
 */
export default function Parallax({ children, speed = 0.06, className = "", ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const delta = (r.top + r.height / 2 - window.innerHeight / 2) * speed;
      el.style.transform = `translate3d(0, ${delta.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }} {...rest}>
      {children}
    </div>
  );
}