import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";


export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { t, lang } = useLang();
  const filtered = t.projects.items;

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
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      key={lang}
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
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>{t.projects.label}</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: "700",
              color: "var(--text-heading)",
              fontFamily: "Alexandria, sans-serif",
              marginBottom: "1rem",
            }}
          >
            {t.projects.title}{" "}
            <span style={{ color: "var(--gold)" }}>{t.projects.titleHighlight}</span>
          </h2>
          <div className="divider-gold" style={{ marginBottom: "1.5rem" }} />
          <p
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              color: "var(--text-secondary)",
              lineHeight: "1.85",
            }}
          >
            {t.projects.desc}
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((project, i) => (
            <div
              key={i}
              className="card-industrial reveal"
              style={{
                overflow: "hidden",
                transitionDelay: `${i * 0.06}s`,
                padding: 0,
              }}
            >
              {/* Project Visual */}
              <div
                style={{
                  height: "180px",
                  position: "relative",
                  overflow: "hidden",
                  borderBottom: "1px solid var(--card-border)",
                  backgroundColor: "var(--bg-section-alt)"
                }}
              >
                <img
                  src="/hero-bg.png"
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem" }}>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--gold)",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    fontFamily: "Alexandria, sans-serif",
                  }}
                >
                  {project.category}
                </div>
                <h3
                  style={{
                    color: "var(--text-heading)",
                    fontWeight: "700",
                    fontFamily: "Alexandria, sans-serif",
                    fontSize: "1.15rem",
                    lineHeight: "1.5",
                    marginBottom: "0.75rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    lineHeight: "1.8",
                    marginBottom: "1.25rem",
                  }}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      style={{
                        padding: "0.2rem 0.6rem",
                        background: "var(--bg-section-alt)",
                        border: "1px solid var(--border-light)",
                        borderRadius: "4px",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: "center", marginTop: "3rem" }}>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
            {t.projects.ctaText}
          </p>
          <a href="#contact" className="btn-outline">
            {t.projects.ctaBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
