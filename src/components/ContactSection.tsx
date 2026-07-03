import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";

const contactIcons = [
  <i className="bx bx-map"></i>,
  <i className="bx bx-phone"></i>,
  <i className="bx bx-envelope"></i>,
  <i className="bx bx-time-five"></i>,
];

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLang();
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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
    ref.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
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
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>{t.contact.label}</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: "700",
              color: "var(--text-heading)",
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              marginBottom: "1rem",
            }}
          >
            {t.contact.title}{" "}
            <span style={{ color: "var(--gold)" }}>{t.contact.titleHighlight}</span>
          </h2>
          <div className="divider-gold" style={{ marginBottom: "1.5rem" }} />
          <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto", lineHeight: "1.85" }}>
            {t.contact.desc}
          </p>
        </div>

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {/* Contact Info */}
          <div className="reveal-up">
            <h3
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: "700",
                color: "var(--text-heading)",
                fontSize: "1.25rem",
                marginBottom: "2rem",
                textAlign: "center"
              }}
            >
              {t.contact.infoTitle}
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.25rem", marginBottom: "2.5rem" }}>
              {t.contact.infoItems.map((info, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "1rem",
                    padding: "1.5rem",
                    background: "var(--bg-card)",
                    border: "1px solid var(--card-border)",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--card-border)";
                  }}
                >
                  <span style={{ fontSize: "2rem", color: "var(--gold)" }}>{contactIcons[i]}</span>
                  <div>
                    <div
                      style={{
                        fontSize: "1rem",
                        color: "var(--gold)",
                        fontWeight: "700",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {info.title}
                    </div>
                    {info.lines.map((line, j) => (
                      <div key={j} style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  fontSize: "1rem",
                  color: "var(--gold)",
                  fontWeight: "700",
                  marginBottom: "1rem",
                }}
              >
                {t.contact.followUs}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {[
                  { label: "Instagram", icon: <i className="bx bxl-instagram"></i> },
                  { label: "WhatsApp", icon: <i className="bx bxl-whatsapp"></i> },
                  { label: "Snapchat", icon: <i className="bx bxl-snapchat"></i> },
                  { label: "X", icon: <i className="bx bxl-meta"></i> },
                  { label: "LinkedIn", icon: <i className="bx bxl-linkedin"></i> },
                  { label: "YouTube", icon: <i className="bx bxl-youtube"></i> },
                  { label: "TikTok", icon: <i className="bx bxl-tiktok"></i> },
                ].map((social, i) => (
                  <button
                    key={i}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "var(--bg-card)",
                      border: "1px solid var(--card-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      color: "var(--text-heading)",
                    }}
                    aria-label={social.label}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "var(--gold)";
                      el.style.color = "var(--gold)";
                      el.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "var(--card-border)";
                      el.style.color = "var(--text-heading)";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
