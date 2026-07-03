import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";

const BG_IMAGE = "/file_00000000cb7871f8ac48fa1a98f532a5.png";

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { t, lang } = useLang();
  const products = t.projects.items;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                borderRadius: "20px",
                overflow: "hidden",
                background: "var(--bg-card)",
                boxShadow: "0 8px 32px rgba(0, 27, 56, 0.12), 0 2px 8px rgba(0, 27, 56, 0.08)",
                transition: "opacity 0.6s ease-out, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={() => setSelectedImage(BG_IMAGE)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 24px 56px rgba(0, 27, 56, 0.2), 0 8px 24px rgba(0, 0, 0, 0.15)";
                const img = e.currentTarget.querySelector("img");
                if (img) {
                  img.style.transform = "scale(1.06)";
                  img.style.filter = "brightness(1.05)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 32px rgba(0, 27, 56, 0.12), 0 2px 8px rgba(0, 27, 56, 0.08)";
                const img = e.currentTarget.querySelector("img");
                if (img) {
                  img.style.transform = "scale(1)";
                  img.style.filter = "brightness(0.9)";
                }
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
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
                    transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), filter 0.7s ease",
                    display: "block",
                    filter: "brightness(0.9)",
                  }}
                />
              </div>

              {/* Content below the image */}
              <div 
                style={{ 
                  padding: "1.5rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    color: "var(--text-heading)",
                    fontWeight: "600",
                    fontFamily: "Alexandria, sans-serif",
                    fontSize: "1.1rem",
                    lineHeight: "1.4",
                    margin: "0 0 0.5rem",
                  }}
                >
                  {product.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.85rem",
                    lineHeight: "1.6",
                    margin: 0,
                    fontFamily: "Alexandria, sans-serif",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {product.desc}
                </p>
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

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(4px)",
            animation: "fadeIn 0.3s ease",
          }}
          onClick={() => setSelectedImage(null)}
        >
          <style>
            {`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes zoomIn {
                from { transform: scale(0.9); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
              }
            `}
          </style>
          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
              animation: "zoomIn 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "2.5rem",
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged product"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: "12px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
