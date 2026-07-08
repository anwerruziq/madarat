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

  return (
    <footer
      style={{
        background: "url('/file_00000000cb7871f8ac48fa1a98f532a5.png') center/cover no-repeat",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "4rem",
      }}
    >
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(15, 23, 42, 0.94)", // very dark overlay to keep text readable
        zIndex: 0
      }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

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
                src="/logo.png"
                alt="مدارات التنفيذ"
                style={{ width: "80px", height: "80px", borderRadius: "10px", objectFit: "contain" }}
              />
              <div>
                <div style={{ color: "var(--gold)", fontWeight: "700", fontSize: "1.1rem", fontFamily: "IBM Plex Sans Arabic, sans-serif" }}>
                  مدارات التنفيذ
                </div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.6rem", letterSpacing: "0.12em", fontFamily: "IBM Plex Sans Arabic, sans-serif" }}>
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
                {t.dir === "rtl" ? "الرياض حي المشاعل" : "Riyadh, Al Masha'il District"}<br />
                {t.dir === "rtl" ? "المملكة العربية السعودية" : "Kingdom of Saudi Arabia"}
              </p>
            </div>

            {/* Phone */}
            <div style={contactBlockStyle}>
              <div style={contactLabelStyle}>
                <i className="bx bx-phone-call" style={{ color: "var(--gold)", marginInlineEnd: "0.4rem" }} />
                {t.dir === "rtl" ? "اتصل بنا" : "Phone"}
              </div>
              <a href="tel:0534222044" style={contactLinkStyle}>0534222044</a>
              <a href="tel:0533901113" style={contactLinkStyle}>0533901113</a>
            </div>

            {/* Email */}
            <div style={contactBlockStyle}>
              <div style={contactLabelStyle}>
                <i className="bx bx-envelope" style={{ color: "var(--gold)", marginInlineEnd: "0.4rem" }} />
                {t.dir === "rtl" ? "البريد الإلكتروني" : "Email"}
              </div>
              <a href="mailto:admin@madarat-altanfeeth.com" style={contactLinkStyle}>admin@madarat-altanfeeth.com</a>
            </div>
          </div>

          {/* ── Column 4: Work Hours & Social ── */}
          <div>
            <h4 style={headingStyle}>{t.dir === "rtl" ? "معلومات إضافية" : "Additional Info"}</h4>
            
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
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.6rem", maxWidth: "180px" }}>
                {[
                  { icon: "bx bxl-instagram", href: "#", name: "Instagram" },
                  { icon: "bx bxl-whatsapp", href: "https://wa.me/966555954756", name: "WhatsApp" },
                  { icon: "bx bxl-snapchat", href: "#", name: "Snapchat" },
                  { icon: "bx bxl-twitter", href: "#", name: "X" },
                  { icon: "bx bxl-linkedin", href: "#", name: "LinkedIn" },
                  { icon: "bx bxl-youtube", href: "#", name: "YouTube" },
                  { icon: "bx bxl-tiktok", href: "#", name: "TikTok" },
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
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", margin: 0, textAlign: "center" }}>
            © {year} {f.copyright}
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
  fontFamily: "IBM Plex Sans Arabic, sans-serif",
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
  fontFamily: "IBM Plex Sans Arabic, sans-serif",
  marginBottom: "0.35rem",
  letterSpacing: "0.02em",
};

const contactValueStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.72)",
  fontSize: "0.82rem",
  fontFamily: "IBM Plex Sans Arabic, sans-serif",
  lineHeight: "1.75",
  margin: 0,
  paddingInlineStart: "1.5rem",
};

const contactLinkStyle: React.CSSProperties = {
  display: "block",
  color: "rgba(255,255,255,0.72)",
  fontSize: "0.82rem",
  fontFamily: "IBM Plex Sans Arabic, sans-serif",
  textDecoration: "none",
  paddingInlineStart: "1.5rem",
  lineHeight: "1.75",
  transition: "color 0.2s",
};

const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.65)",
  textDecoration: "none",
  fontSize: "0.875rem",
  fontFamily: "IBM Plex Sans Arabic, sans-serif",
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
            fontFamily: "IBM Plex Sans Arabic, sans-serif",
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
            fontFamily: "IBM Plex Sans Arabic, sans-serif",
            lineHeight: "1.65",
          }}
        >
          {children}
        </div>
      </div>
    </a>
  );
}
