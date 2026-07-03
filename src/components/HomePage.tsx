import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { StatsSection } from "@/components/StatsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { LanguageProvider, useLang } from "@/context/LanguageContext";
import { useEffect } from "react";

function HomePageInner() {
  const { t } = useLang();

  // Initialize scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [t.dir]); // Re-run when language (direction) changes

  return (
    <div
      style={{
        backgroundColor: "var(--bg-page)",
        minHeight: "100vh",
        overflowX: "hidden",
        fontFamily: "'Alexandria', sans-serif",
      }}
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />

      {/* Back to top button */}
      <BackToTop />
    </div>
  );
}

export function HomePage() {
  return (
    <LanguageProvider>
      <HomePageInner />
    </LanguageProvider>
  );
}

function BackToTop() {
  useEffect(() => {
    const btn = document.getElementById("back-to-top");
    const onScroll = () => {
      if (btn) btn.style.opacity = window.scrollY > 400 ? "1" : "0";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      id="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: "2rem",
        left: "2rem",
        width: "48px",
        height: "48px",
        borderRadius: "8px",
        background: "linear-gradient(135deg, #c9a227, #9b7a1e)",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.2rem",
        color: "#0a1628",
        zIndex: 999,
        opacity: 0,
        transition: "opacity 0.3s ease, transform 0.3s ease",
        boxShadow: "0 4px 20px rgba(201,162,39,0.35)",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
    >
      ↑
    </button>
  );
}
