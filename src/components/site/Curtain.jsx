/**
 * 600ms load curtain: the wordmark appears over espresso, then the
 * curtain lifts. Plays once per page load; skipped for reduced motion.
 */
import { useEffect, useState } from "react";

export default function Curtain() {
  const [phase, setPhase] = useState("in");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t1 = setTimeout(() => setPhase("out"), 600);
    const t2 = setTimeout(() => setPhase("gone"), 1250);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[80] bg-espresso flex items-center justify-center pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === "out" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <span
        className={`font-display text-2xl md:text-4xl text-ivory transition-opacity duration-300 ${
          phase === "out" ? "opacity-0" : "opacity-100"
        }`}
      >
        Nishal Interiors
      </span>
    </div>
  );
}