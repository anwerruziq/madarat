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
            maxWidth: "1000px",
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

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
              {t.contact.infoItems.map((info, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "0.75rem",
                    padding: "1.25rem",
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
                  <span style={{ fontSize: "1.75rem", color: "var(--gold)" }}>{contactIcons[i]}</span>
                  <div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--gold)",
                        fontWeight: "700",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {info.title}
                    </div>
                    {info.lines.map((line, j) => (
                      <div key={j} style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                        {line.includes("@") ? (
                          <a href={`mailto:${line}`} style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Location */}
            <div className="reveal" style={{ width: "100%", height: "400px", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--card-border)", marginBottom: "3rem", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>
              <iframe
                src="https://maps.google.com/maps?q=24.6143145,46.8566099&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
                  { label: "Instagram", icon: <i className="bx bxl-instagram"></i>, color: "#c0607a", href: "#" },
                  { label: "WhatsApp", icon: <i className="bx bxl-whatsapp"></i>, color: "#4caf7d", href: "https://wa.me/966555954756" },
                  { label: "Snapchat", icon: <i className="bx bxl-snapchat"></i>, color: "#b5a800", href: "#" },

                  { label: "LinkedIn", icon: <i className="bx bxl-linkedin"></i>, color: "#3a7ab5", href: "#" },
                  { label: "YouTube", icon: <i className="bx bxl-youtube"></i>, color: "#c0392b", href: "#" },
                  { label: "TikTok", icon: <i className="bx bxl-tiktok"></i>, color: "#555555", href: "#" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target={social.href !== "#" ? "_blank" : undefined}
                    rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: `${social.color}18`,
                      border: `1.5px solid ${social.color}50`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.4rem",
                      cursor: "pointer",
                      color: social.color,
                      textDecoration: "none",
                    }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
