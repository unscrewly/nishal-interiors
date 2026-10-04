import { useEffect, useRef, useState } from "react";

/**
 * Single scroll-reveal system: text slides up from behind an overflow
 * mask (600ms), once. Respects prefers-reduced-motion via CSS.
 */
export default function Reveal({ children, as: Tag = "div", className = "", delay = 0, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      <div className="reveal-inner" style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
        {children}
      </div>
    </Tag>
  );
}