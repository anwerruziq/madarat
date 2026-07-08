import { useState } from "react";
import { useLang } from "@/context/LanguageContext";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, t, toggleLang } = useLang();

  // Main navigation links
  const links = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const navBgColor = "var(--bg-section-alt)";
  const navTextColor = "#1B4235";

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        insetInlineStart: 0,
        insetInlineEnd: 0,
        zIndex: 1000,
        backgroundColor: navBgColor,
        animation: "slideDownNav 0.6s ease-out forwards",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0.25rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "65px",
        }}
      >
        {/* 1. Logo */}
        <a href="#hero" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src="/LOGO MADARAT.png"
            alt="SABIL"
            style={{
              height: "75px",
              objectFit: "contain",
            }}
          />
        </a>

        {/* 2. Desktop Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }} className="desktop-nav">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link-hover"
              style={{
                color: navTextColor,
                fontSize: "0.95rem",
                fontWeight: "600",
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </a>
          ))}

        </div>

        {/* 3. Right side: Language icon + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Language Toggle Icon - always visible */}
          <button
            onClick={toggleLang}
            className="nav-link-hover"
            title={lang === "ar" ? "Switch to English" : "التبديل للعربية"}
            style={{
              background: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: navTextColor,
              fontSize: "1.8rem",
              transition: "transform 0.2s ease",
            }}
          >
            <i className="bx bx-globe"></i>
          </button>

          {/* Hamburger - Mobile only */}
          <div className="mobile-toggle" style={{ display: "none", alignItems: "center" }}>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: mobileOpen ? "0px" : "6px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                width: "32px",
                height: "32px",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
              aria-label="Toggle menu"
            >
              <span
                style={{
                  display: "block",
                  width: "28px",
                  height: "2.5px",
                  background: navTextColor,
                  transition: "all 0.3s ease",
                  transform: mobileOpen ? "rotate(45deg) translateY(0px)" : "none",
                  position: mobileOpen ? "absolute" : "relative",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "28px",
                  height: "2.5px",
                  background: navTextColor,
                  transition: "all 0.3s ease",
                  transform: mobileOpen ? "rotate(-45deg) translateY(0px)" : "none",
                  position: mobileOpen ? "absolute" : "relative",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: navBgColor,
            padding: "1rem 2rem 1.5rem",
            borderTop: `1px solid ${navTextColor}40`,
            animation: "fadeInMobile 0.3s ease-out",
          }}
        >
          {links.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.85rem 0",
                color: navTextColor,
                textDecoration: "none",
                fontSize: "1rem",
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: "600",
                borderBottom: `1px solid ${navTextColor}20`,
                animation: `fadeSlideIn 0.3s ease-out ${idx * 0.05}s both`,
              }}
            >
              <span>{link.label}</span>
              <i className="bx bx-chevron-left" style={{ fontSize: "1.1rem", opacity: 0.5 }}></i>
            </a>
          ))}

        </div>
      )}

      <style>{`
        @keyframes slideDownNav {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInMobile {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 500px; }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(15px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .nav-link-hover {
          transition: all 0.2s ease;
        }
        .nav-link-hover:hover {
          opacity: 0.7;
        }
        .nav-cta-btn:hover {
          opacity: 0.85;
          transform: translateY(-1px);
        }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
