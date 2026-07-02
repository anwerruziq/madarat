import { useEffect, useRef } from "react";
import { useLang } from "@/context/LanguageContext";

const BG_IMAGE = "/file_00000000cb7871f8ac48fa1a98f532a5.png";

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { t, lang } = useLang();
  const products = t.projects.items;

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
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  return (
    <section
      id="projects"
      key={lang}
      ref={ref}
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "var(--bg-section-alt)",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative" }}>
        {/* Section Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
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
              maxWidth: "560px",
              margin: "0 auto",
              color: "var(--text-secondary)",
              lineHeight: "1.85",
              fontSize: "0.95rem",
            }}
          >
            {t.projects.desc}
          </p>
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {products.map((product, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                transitionDelay: `${i * 0.07}s`,
                borderRadius: "16px",
                overflow: "hidden",
                background: "var(--bg-card)",
                boxShadow: "0 8px 32px rgba(0, 27, 56, 0.12), 0 2px 8px rgba(0, 27, 56, 0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 20px 48px rgba(0, 27, 56, 0.18), 0 4px 12px rgba(184,150,12,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 32px rgba(0, 27, 56, 0.12), 0 2px 8px rgba(0, 27, 56, 0.08)";
              }}
            >
              {/* Image with angled title overlay */}
              <div
                style={{
                  height: "200px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={BG_IMAGE}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.5s ease",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                  }}
                />

                {/* Dark gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,10,25,0.85) 0%, rgba(0,10,25,0.3) 50%, rgba(0,0,0,0) 100%)",
                  }}
                />

                {/* Category badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    ...(lang === "ar" ? { right: "12px" } : { left: "12px" }),
                    background: "var(--gold)",
                    color: "#fff",
                    fontSize: "0.7rem",
                    fontWeight: "700",
                    fontFamily: "Alexandria, sans-serif",
                    padding: "0.25rem 0.7rem",
                    borderRadius: "20px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    boxShadow: "0 2px 8px rgba(184,150,12,0.4)",
                  }}
                >
                  {product.category}
                </div>

                {/* Angled title on image */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1rem 1.25rem 1rem",
                    transform: "skewY(-1.5deg)",
                    transformOrigin: "bottom left",
                  }}
                >
                  <h3
                    style={{
                      color: "#ffffff",
                      fontWeight: "800",
                      fontFamily: "Alexandria, sans-serif",
                      fontSize: "1.1rem",
                      lineHeight: "1.3",
                      margin: 0,
                      textShadow: "0 2px 12px rgba(0,0,0,0.6)",
                      transform: "skewY(1.5deg)",
                    }}
                  >
                    {product.title}
                  </h3>
                </div>
              </div>

              {/* Product description */}
              <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.875rem",
                    lineHeight: "1.85",
                    margin: "0 0 1rem",
                    fontFamily: "Alexandria, sans-serif",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {product.desc}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                  {product.tags.map((tag, j) => (
                    <span
                      key={j}
                      style={{
                        padding: "0.2rem 0.65rem",
                        background: "var(--bg-section-alt)",
                        border: "1px solid var(--border-light)",
                        borderRadius: "20px",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        fontFamily: "Alexandria, sans-serif",
                        fontWeight: "500",
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
        <div className="reveal" style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.25rem", fontSize: "0.95rem", fontFamily: "Alexandria, sans-serif" }}>
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
