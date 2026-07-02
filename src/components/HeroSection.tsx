import { useEffect, useRef } from "react";
import { useLang } from "@/context/LanguageContext";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      const bg = hero.querySelector(".hero-bg") as HTMLElement;
      if (bg) {
        bg.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px) scale(1.02)`;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--bg-page)",
        padding: "6rem 1rem 1rem 1rem",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "calc(100vh - 7rem)",
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <style>
          {`
            @keyframes heroVideoScaleAnimation {
              0% {
                transform: translate(-25%, 25%) scale(0.45);
                border-radius: 40px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.4);
              }
              100% {
                transform: translate(0, 0) scale(1);
                border-radius: 24px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
              }
            }
            .hero-video-animate-in {
              animation: heroVideoScaleAnimation 1s cubic-bezier(0.22, 1, 0.36, 1) 1s both;
            }

            @keyframes textSubtitleAnimate {
              0% {
                transform: translate(25vw, -15vh);
                color: #0f172a;
                text-shadow: none;
              }
              100% {
                transform: translate(0, 0);
                color: #ffffff;
                text-shadow: 0 2px 10px rgba(0,0,0,0.4);
              }
            }
            .hero-subtitle-animate {
              animation: textSubtitleAnimate 1s cubic-bezier(0.22, 1, 0.36, 1) 1s both;
            }

            @keyframes textTitleAnimate {
              0% {
                transform: translate(5vw, -5vh);
                color: #0f172a;
                text-shadow: none;
              }
              100% {
                transform: translate(0, 0);
                color: #ffffff;
                text-shadow: 0 4px 12px rgba(0,0,0,0.4);
              }
            }
            .hero-title-animate {
              animation: textTitleAnimate 1s cubic-bezier(0.22, 1, 0.36, 1) 1s both;
            }

            @keyframes textDescAnimate {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .hero-desc-animate {
              animation: textDescAnimate 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.5s both;
            }
            .hero-btn-animate {
              animation: textDescAnimate 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.7s both;
            }
          `}
        </style>

        {/* Animated Background Wrapper for Video and Overlay */}
        <div
          className="hero-video-animate-in"
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
          }}
        >
          {/* Video Background */}
          <video
            className="hero-bg"
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          >
            <source src="/حول_الصوره_لفيديو_اجعل_الكاميرا_202607011653.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(0, 20, 10, 0.8) 0%, rgba(0, 20, 10, 0.4) 50%, rgba(0, 0, 0, 0.1) 100%)",
              backgroundColor: "rgba(0, 30, 20, 0.4)",
            }}
          />
        </div>

        {/* Content */}
        <div
          key={t.dir}
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1280px",
            padding: "4rem 3rem",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            textAlign: "start",
          }}
        >
          <div
            className="hero-subtitle-animate"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: "500",
              marginBottom: "0.5rem",
              fontFamily: "Alexandria, sans-serif",
            }}
          >
            {t.hero.subtitle}
          </div>

          <h1
            className="hero-title-animate"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "800",
              marginBottom: "1.5rem",
              lineHeight: "1.2",
              fontFamily: "Alexandria, sans-serif",
            }}
          >
            {t.hero.title}
          </h1>

          <p
            className="hero-desc-animate"
            style={{
              fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
              color: "rgba(255, 255, 255, 0.95)",
              maxWidth: "600px",
              marginBottom: "2.5rem",
              lineHeight: "1.8",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            {t.hero.desc}
          </p>

          {/* Action Buttons */}
          <div className="hero-btn-animate" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "flex-start" }}>
            <a href="#contact" className="btn-primary" style={{ padding: "0.6rem 1.4rem", fontSize: "0.95rem", background: "#ffffff", color: "var(--navy)", borderColor: "#ffffff", borderRadius: "8px", fontWeight: "700" }}>
              {t.hero.cta1}
            </a>
            <a href="#services" className="btn-outline" style={{ padding: "0.6rem 1.4rem", fontSize: "0.95rem", color: "#ffffff", borderColor: "#ffffff", borderRadius: "8px", fontWeight: "700", background: "rgba(0,0,0,0.4)" }}>
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          animation: "float 2s ease-in-out infinite",
        }}
      >
        <div
          style={{
            width: "24px",
            height: "40px",
            border: "2px solid rgba(255, 255, 255, 0.4)",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "8px",
              background: "#ffffff",
              borderRadius: "2px",
              animation: "float 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
