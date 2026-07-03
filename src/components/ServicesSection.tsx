import { useEffect, useRef } from "react";
import { useLang } from "@/context/LanguageContext";

const serviceIcons = [
  <i className="bx bx-calculator"></i>,
  <i className="bx bx-line-chart"></i>,
  <i className="bx bx-receipt"></i>,
  <i className="bx bx-pie-chart-alt-2"></i>,
];

export function ServicesSection() {
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
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      key={t.dir}
      ref={ref}
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "var(--bg-page)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>{t.services.label}</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: "700",
              color: "var(--text-heading)",
              marginBottom: "1rem",
              fontFamily: "IBM Plex Sans Arabic, sans-serif"
            }}
          >
            {t.services.title}{" "}
            <span style={{ color: "var(--gold)" }}>{t.services.titleHighlight}</span>
          </h2>
          <div className="divider-gold" style={{ marginBottom: "1.5rem" }} />
          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              color: "var(--text-secondary)",
              lineHeight: "1.85",
              fontSize: "1.05rem",
            }}
          >
            {t.services.desc}
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {t.services.items.map((service, i) => (
            <div
              key={i}
              className="card-industrial reveal"
              style={{
                transitionDelay: `${i * 0.08}s`,
                textAlign: "start"
              }}
            >
              {/* Icon */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
                <div className="icon-box" style={{ flexShrink: 0, margin: "0" }}>
                  {serviceIcons[i]}
                </div>
                <div style={{ alignSelf: "center" }}>
                  <h3
                    style={{
                      color: "var(--text-heading)",
                      fontWeight: "700",
                      fontFamily: "IBM Plex Sans Arabic, sans-serif",
                      fontSize: "1.2rem",
                      lineHeight: "1.4",
                    }}
                  >
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                }}
              >
                {service.desc}
              </p>

              {/* Features */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {service.features.map((feature, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                      fontSize: "0.9rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--gold)",
                        flexShrink: 0,
                      }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Bottom line */}
              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border-light)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--gold)",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "gap 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "0.8rem")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "0.5rem")}
              >
                <span>{t.services.requestService}</span>
                <span>←</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
