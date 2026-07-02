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
              fontFamily: "Alexandria, sans-serif",
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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Contact Info */}
          <div className="reveal-left">
            <h3
              style={{
                fontFamily: "Alexandria, sans-serif",
                fontWeight: "700",
                color: "var(--text-heading)",
                fontSize: "1.25rem",
                marginBottom: "2rem",
              }}
            >
              {t.contact.infoTitle}
            </h3>

            <div style={{ display: "grid", gap: "1.25rem", marginBottom: "2.5rem" }}>
              {t.contact.infoItems.map((info, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1rem",
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
                  <span style={{ fontSize: "1.4rem", flexShrink: 0, color: "var(--gold)" }}>{contactIcons[i]}</span>
                  <div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--gold)",
                        fontWeight: "700",
                        marginBottom: "0.4rem",
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
            <div>
              <div
                style={{
                  fontSize: "0.9rem",
                  color: "var(--gold)",
                  fontWeight: "700",
                  marginBottom: "1rem",
                }}
              >
                {t.contact.followUs}
              </div>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {[
                  { label: "LinkedIn", icon: <i className="bx bxl-linkedin"></i> },
                  { label: "X", icon: <i className="bx bxl-twitter"></i> },
                  { label: "YouTube", icon: <i className="bx bxl-youtube"></i> },
                  { label: "Instagram", icon: <i className="bx bxl-instagram"></i> },
                ].map((social, i) => (
                  <button
                    key={i}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "8px",
                      background: "var(--bg-card)",
                      border: "1px solid var(--card-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      color: "var(--text-heading)",
                    }}
                    aria-label={social.label}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "var(--gold)";
                      el.style.color = "var(--gold)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "var(--card-border)";
                      el.style.color = "var(--text-heading)";
                    }}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal-right">
            {submitted ? (
              <div
                style={{
                  padding: "3rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--card-border)",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem", color: "#28a745" }}><i className="bx bx-check-circle"></i></div>
                <h3
                  style={{
                    fontFamily: "Alexandria, sans-serif",
                    fontWeight: "700",
                    color: "var(--text-heading)",
                    fontSize: "1.3rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {t.contact.successTitle}
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                  {t.contact.successDesc}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  padding: "2.5rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--card-border)",
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
                }}
              >
                <h3
                  style={{
                    fontFamily: "Alexandria, sans-serif",
                    fontWeight: "700",
                    color: "var(--text-heading)",
                    fontSize: "1.2rem",
                    marginBottom: "2rem",
                  }}
                >
                  {t.contact.formTitle}
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      {t.contact.fields.name}
                    </label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder={t.contact.fields.namePlaceholder}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      {t.contact.fields.company}
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder={t.contact.fields.companyPlaceholder}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      {t.contact.fields.phone}
                    </label>
                    <input
                      type="tel"
                      required
                      className="form-input"
                      placeholder={t.contact.fields.phonePlaceholder}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      {t.contact.fields.email}
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder={t.contact.fields.emailPlaceholder}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                    {t.contact.fields.service}
                  </label>
                  <select
                    className="form-input"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    style={{ cursor: "pointer" }}
                  >
                    <option value="">{t.contact.fields.serviceDefault}</option>
                    {t.contact.fields.serviceOptions.map((opt, i) => (
                      <option key={i} value={opt.toLowerCase().replace(/\s+/g, "-")}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                    {t.contact.fields.message}
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="form-input"
                    placeholder={t.contact.fields.messagePlaceholder}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ resize: "vertical", minHeight: "100px" }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  <span>{t.contact.fields.submit}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
