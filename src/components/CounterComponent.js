// CounterComponents.js
import React, { useEffect, useRef, useState } from "react";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

function useCountUpOnView(target = 0, duration = 1200) {
  const [value, setValue] = useState(0);
  const elRef = useRef(null);
  const rafRef = useRef(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = elRef.current;
    if (!node) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animate = () => {
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = prefersReduced ? progress : easeOutCubic(progress);
        setValue(Math.floor(eased * target));
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          setValue(target);
        }
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            animate();
            io.unobserve(node);
          }
        });
      },
      { threshold: 0.5 }
    );

    io.observe(node);

    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return { ref: elRef, value };
}

function Stat({ target, label, suffix = "", duration = 1200 }) {
  const { ref, value } = useCountUpOnView(target, duration);
  return (
    <div className="stat">
      <div className="statbox">
        <span ref={ref} className="statnumber" aria-label={`${target}${suffix}`}>
          {value}
        </span>
        {suffix && <span className="statsuffix">{suffix}</span>}
      </div>
      <p>{label}</p>
    </div>
  );
}

const DEFAULT_STATS = [
  { target: 100, label: "Audit Success", suffix: "%" },
  { target: 250, label: "SOC 2 Clients in the past year", suffix: "+" },
  { target: 50, label: "Reduction in Time to Audit-Readiness", suffix: "%" },
  { target: 40, label: "Lower Compliance Costs", suffix: "%" },
  { target: 80, label: "Faster Evidence Gathering", suffix: "%" },
];

export default function CounterComponents({ stats = DEFAULT_STATS, duration = 1200 }) {
  return (
    <div className="stats">
      {stats.map((s, i) => (
        <Stat
          key={i}
          target={s.target}
          label={s.label}
          suffix={s.suffix}
          duration={s.duration ?? duration}
        />
      ))}
    </div>
  );
}
