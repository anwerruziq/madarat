import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";

const statValues = [5, 400, 100];
const statSuffixes = ["", "+", "%"];
const statIcons = [
  <i className="bx bx-calendar"></i>,
  <i className="bx bx-buildings"></i>,
  <i className="bx bx-check-shield"></i>,
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) {
      setCount(0);
      return;
    }
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
        } else {
          setStarted(false);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [t.dir]);

  return (
    <section
      id="stats"
      key={t.dir}
      ref={ref}
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "var(--bg-section-alt)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: "700",
              color: "var(--text-heading)",
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
            }}
          >
            {t.stats.title}{" "}
            <span style={{ color: "var(--gold)" }}>{t.stats.titleHighlight}</span>
          </h2>
          <div className="divider-gold" style={{ marginTop: "1rem", marginBottom: "1.5rem" }} />
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {t.stats.items.map((stat, i) => (
            <StatCard
              key={`${t.dir}-${i}`}
              value={statValues[i]}
              suffix={statSuffixes[i]}
              label={stat.label}
              desc={stat.desc}
              icon={statIcons[i]}
              started={started}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  suffix,
  label,
  desc,
  icon,
  started,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
  started: boolean;
  index: number;
}) {
  const count = useCountUp(value, 2000 + index * 200, started);

  return (
    <div
      style={{
        padding: "2rem",
        background: "var(--bg-card)",
        border: "1px solid var(--card-border)",
        borderRadius: "8px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s ease",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--gold)";
        el.style.transform = "translateY(-6px)";
        el.style.boxShadow = "var(--card-shadow-hover)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--card-border)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          right: "20%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
        }}
      />

      {/* Icon */}
      <div
        style={{
          fontSize: "2.5rem",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          color: "var(--gold)"
        }}
      >
        {icon}
      </div>

      {/* Number */}
      <div className="stat-number" style={{ marginBottom: "0.5rem", color: "var(--text-heading)", fontWeight: "800", fontSize: "3rem", fontFamily: "IBM Plex Sans Arabic, sans-serif" }}>
        {count}
        <span style={{ fontSize: "2rem", color: "var(--gold)" }}>{suffix}</span>
      </div>

      {/* Label */}
      <div
        style={{
          fontFamily: "IBM Plex Sans Arabic, sans-serif",
          fontWeight: "700",
          color: "var(--text-heading)",
          fontSize: "1.2rem",
          marginBottom: "0.5rem",
        }}
      >
        {label}
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: "0.9rem",
          color: "var(--text-muted)",
          lineHeight: "1.6",
        }}
      >
        {desc}
      </div>
    </div>
  );
}
