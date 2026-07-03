import { useEffect, useRef } from "react";
import { useLang } from "@/context/LanguageContext";

const valueIcons = [
  <i className="bx bx-target-lock"></i>,
  <i className="bx bx-message-rounded-check"></i>,
  <i className="bx bx-shield-quarter"></i>,
  <i className="bx bx-time-five"></i>,
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          } else {
            e.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    const reveals = ref.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
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
        {/* Section Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>{t.about.label}</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: "700",
              color: "var(--text-heading)",
              marginBottom: "1rem",
            }}
          >
            {t.about.title}{" "}
            <span style={{ color: "var(--gold)" }}>{t.about.titleHighlight}</span>
          </h2>
          <div className="divider-gold" style={{ marginBottom: "1.5rem" }} />
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
            marginBottom: "5rem",
          }}
        >
          {/* Text Column */}
          <div className="reveal-left">
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: "2",
                marginBottom: "1.5rem",
              }}
            >
              <strong style={{ color: "var(--text-heading)" }}>{t.about.titleHighlight}</strong>{" "}
              {t.about.p1}
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: "2",
                marginBottom: "2rem",
              }}
            >
              {t.about.p2}
            </p>

            {/* Key facts */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {t.about.facts.map((fact, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1rem",
                    background: "var(--bg-card)",
                    border: "1px solid var(--card-border)",
                    borderRadius: "8px",
                  }}
                >
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.35rem" }}>
                    {fact.label}
                  </div>
                  <div style={{ fontWeight: "700", color: "var(--gold)", fontSize: "1rem" }}>
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Column */}
          <div className="reveal-right" style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                aspectRatio: "1",
                maxWidth: "420px",
                margin: "0 auto",
                background: "var(--bg-card)",
                borderRadius: "20px",
                padding: "2rem",
                boxShadow: "var(--card-shadow-hover)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                border: "1px solid var(--card-border)",
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "var(--icon-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                  color: "var(--gold)",
                  marginBottom: "1.5rem"
                }}
              >
                <i className="bx bx-buildings"></i>
              </div>
              <h3 style={{ fontSize: "1.8rem", color: "var(--text-heading)", fontWeight: "700", marginBottom: "0.5rem", fontFamily: "IBM Plex Sans Arabic, sans-serif" }}>
                {t.about.foundingStory}
              </h3>
              <p style={{ color: "var(--text-muted)", textAlign: "center", fontSize: "0.95rem" }}>
                {t.about.foundingDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {t.about.values.map((value, i) => (
            <div
              key={i}
              className={`card-industrial reveal`}
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className="icon-box">
                {valueIcons[i]}
              </div>
              <h3
                style={{
                  color: "var(--text-heading)",
                  fontWeight: "700",
                  marginBottom: "0.75rem",
                  fontFamily: "IBM Plex Sans Arabic, sans-serif",
                  fontSize: "1.1rem",
                }}
              >
                {value.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.8" }}>
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
