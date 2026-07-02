import { useLang } from "@/context/LanguageContext";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLang();
  const f = t.footer;

  const footerLinks = {
    nav: [
      { label: t.nav.home, href: "#hero" },
      { label: t.nav.about, href: "#about" },
      { label: t.nav.services, href: "#services" },
      { label: t.nav.projects, href: "#projects" },
      { label: t.nav.contact, href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: "bx bxl-facebook", href: "#" },
    { icon: "bx bxl-twitter", href: "#" },
    { icon: "bx bxl-linkedin", href: "#" },
    { icon: "bx bxl-instagram", href: "#" },
  ];

  return (
    <footer
      style={{
        background: "var(--bg-footer)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "4rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Main Footer Grid — 4 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "2.5rem",
            paddingBottom: "3rem",
          }}
        >
          {/* ── Column 1: Brand ── */}
          <div>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <img
                src="/LOGO MADARAT.png"
                alt="مدارات التنفيذ"
                style={{ width: "64px", height: "64px", borderRadius: "10px", objectFit: "contain" }}
              />
              <div>
                <div style={{ color: "var(--gold)", fontWeight: "700", fontSize: "1.1rem", fontFamily: "Alexandria, sans-serif" }}>
                  مدارات التنفيذ
                </div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.6rem", letterSpacing: "0.12em", fontFamily: "Alexandria, sans-serif" }}>
                  CONSULTING GROUP
                </div>
              </div>
            </div>

            {/* Description */}
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", lineHeight: "1.85", marginBottom: "1.5rem" }}>
              {f.desc}
            </p>

          </div>

          {/* ── Column 2: Quick Links (Navbar) ── */}
          <div>
            <h4 style={headingStyle}>{t.nav.home !== undefined ? (t.dir === "rtl" ? "روابط سريعة" : "Quick Links") : "Quick Links"}</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {footerLinks.nav.map((link, i) => (
                <li key={i}>
                  <a href={link.href} style={linkStyle} className="footer-link">
                    <i className="bx bx-chevron-right" style={{ fontSize: "0.9rem", opacity: 0.6 }} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact Info ── */}
          <div>
            <h4 style={headingStyle}>{t.dir === "rtl" ? "تواصل معنا" : "Contact Us"}</h4>

            {/* Location */}
            <div style={contactBlockStyle}>
              <div style={contactLabelStyle}>
                <i className="bx bx-map" style={{ color: "var(--gold)", marginInlineEnd: "0.4rem" }} />
                {t.dir === "rtl" ? "المقر الرئيسي" : "Headquarters"}
              </div>
              <p style={contactValueStyle}>
                {t.dir === "rtl" ? "طريق الملك فهد، الرياض" : "King Fahd Road, Riyadh"}<br />
                {t.dir === "rtl" ? "المملكة العربية السعودية" : "Saudi Arabia"}
              </p>
            </div>

            {/* Phone */}
            <div style={contactBlockStyle}>
              <div style={contactLabelStyle}>
                <i className="bx bx-phone-call" style={{ color: "var(--gold)", marginInlineEnd: "0.4rem" }} />
                {t.dir === "rtl" ? "اتصل بنا" : "Phone"}
              </div>
              <a href="tel:+96611XXXXXXX" style={contactLinkStyle}>+966 11 XXX XXXX</a>
              <a href="tel:+96650XXXXXXX" style={contactLinkStyle}>+966 50 XXX XXXX</a>
            </div>

            {/* Email */}
            <div style={contactBlockStyle}>
              <div style={contactLabelStyle}>
                <i className="bx bx-envelope" style={{ color: "var(--gold)", marginInlineEnd: "0.4rem" }} />
                {t.dir === "rtl" ? "البريد الإلكتروني" : "Email"}
              </div>
              <a href="mailto:info@madarat-ex.com" style={contactLinkStyle}>info@madarat-ex.com</a>
              <a href="mailto:consulting@madarat-ex.com" style={contactLinkStyle}>consulting@madarat-ex.com</a>
            </div>

            {/* Work Hours */}
            <div style={contactBlockStyle}>
              <div style={contactLabelStyle}>
                <i className="bx bx-time-five" style={{ color: "var(--gold)", marginInlineEnd: "0.4rem" }} />
                {t.dir === "rtl" ? "ساعات العمل" : "Work Hours"}
              </div>
              <p style={contactValueStyle}>
                {t.dir === "rtl" ? "الأحد — الخميس" : "Sunday — Thursday"}<br />
                {t.dir === "rtl" ? "08:00 صباحاً — 05:00 مساءً" : "08:00 AM — 05:00 PM"}
              </p>
            </div>

            {/* Follow us */}
            <div style={{ marginTop: "0.25rem" }}>
              <div style={contactLabelStyle}>
                <i className="bx bx-share-alt" style={{ color: "var(--gold)", marginInlineEnd: "0.4rem" }} />
                {t.dir === "rtl" ? "تابعنا على" : "Follow Us"}
              </div>
              <div style={{ display: "flex", gap: "0.45rem", marginTop: "0.6rem" }}>
                {[
                  { icon: "bx bxl-facebook", href: "#" },
                  { icon: "bx bxl-twitter", href: "#" },
                  { icon: "bx bxl-linkedin", href: "#" },
                  { icon: "bx bxl-instagram", href: "#" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    style={{
                      width: "32px", height: "32px", borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "rgba(255,255,255,0.65)", fontSize: "0.9rem",
                      textDecoration: "none", transition: "all 0.22s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "var(--gold)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)";
                    }}
                  >
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "1.5rem 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", margin: 0 }}>
            © {year} {f.copyright}
          </p>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", margin: 0 }}>
            {f.license}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ── Shared styles ── */
const headingStyle: React.CSSProperties = {
  color: "#ffffff",
  fontWeight: "700",
  fontFamily: "Alexandria, sans-serif",
  marginBottom: "1.25rem",
  fontSize: "1rem",
  letterSpacing: "0.02em",
};

const contactBlockStyle: React.CSSProperties = {
  marginBottom: "1rem",
  paddingBottom: "1rem",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
};

const contactLabelStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  fontSize: "0.78rem",
  fontWeight: "600",
  color: "var(--gold)",
  fontFamily: "Alexandria, sans-serif",
  marginBottom: "0.35rem",
  letterSpacing: "0.02em",
};

const contactValueStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.72)",
  fontSize: "0.82rem",
  fontFamily: "Alexandria, sans-serif",
  lineHeight: "1.75",
  margin: 0,
  paddingInlineStart: "1.5rem",
};

const contactLinkStyle: React.CSSProperties = {
  display: "block",
  color: "rgba(255,255,255,0.72)",
  fontSize: "0.82rem",
  fontFamily: "Alexandria, sans-serif",
  textDecoration: "none",
  paddingInlineStart: "1.5rem",
  lineHeight: "1.75",
  transition: "color 0.2s",
};

const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.65)",
  textDecoration: "none",
  fontSize: "0.875rem",
  fontFamily: "Alexandria, sans-serif",
  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
  transition: "color 0.2s ease",
};

/* ── ContactItem sub-component ── */
function ContactItem({
  icon,
  label,
  href,
  children,
}: {
  icon: string;
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "0.75rem",
        marginBottom: "1rem",
        textDecoration: "none",
        transition: "opacity 0.2s",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.8")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
    >
      {/* Icon bubble */}
      <div
        style={{
          width: "34px",
          height: "34px",
          borderRadius: "50%",
          background: "rgba(184,150,12,0.12)",
          border: "1px solid rgba(184,150,12,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: "var(--gold)",
          fontSize: "0.95rem",
          marginTop: "2px",
        }}
      >
        <i className={icon} />
      </div>
      {/* Text */}
      <div>
        <div
          style={{
            fontSize: "0.68rem",
            color: "rgba(255,255,255,0.38)",
            fontFamily: "Alexandria, sans-serif",
            marginBottom: "0.2rem",
            letterSpacing: "0.04em",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: "0.82rem",
            color: "rgba(255,255,255,0.82)",
            fontFamily: "Alexandria, sans-serif",
            lineHeight: "1.65",
          }}
        >
          {children}
        </div>
      </div>
    </a>
  );
}
