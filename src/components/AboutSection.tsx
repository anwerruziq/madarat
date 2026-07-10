import { useEffect, useRef, useState, useCallback } from "react";
import { useLang } from "@/context/LanguageContext";

const valueIcons = [
  <i className="bx bx-target-lock"></i>,
  <i className="bx bx-message-rounded-check"></i>,
  <i className="bx bx-shield-quarter"></i>,
  <i className="bx bx-time-five"></i>,
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();
  const [videoVisible, setVideoVisible] = useState(false);

  // Intersection observer for reveal animations
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
      { threshold: 0.15 }
    );
    const reveals = ref.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Scroll-driven video appearance in About section
  const handleScroll = useCallback(() => {
    const container = videoContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate how far the container is into the viewport
    // Start animation when the container enters the bottom of the viewport
    const enterPoint = windowHeight; // bottom of viewport
    const fullPoint = windowHeight * 0.4; // 40% from top = fully visible
    
    if (rect.top < enterPoint && rect.bottom > 0) {
      // Container is in viewport
      const progress = Math.min(Math.max((enterPoint - rect.top) / (enterPoint - fullPoint), 0), 1);
      
      // Scale from 0.3 → 1
      const scale = 0.3 + progress * 0.7;
      // Opacity from 0 → 1
      const opacity = progress;
      // Slight translate from below
      const translateY = (1 - progress) * 40;
      
      container.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      container.style.opacity = `${opacity}`;
      setVideoVisible(progress > 0.1);
    } else if (rect.top >= enterPoint) {
      // Container is below viewport
      container.style.transform = "scale(0.3) translateY(40px)";
      container.style.opacity = "0";
      setVideoVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section
      id="about"
      key={t.dir}
      ref={ref}
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "var(--bg-section-alt)",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          @keyframes aboutVideoGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(201, 162, 39, 0.15), 0 8px 32px rgba(0, 0, 0, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(201, 162, 39, 0.25), 0 12px 48px rgba(0, 0, 0, 0.4);
            }
          }
          .about-video-container {
            position: relative;
            width: 100%;
            max-width: 100%;
            aspect-ratio: 16 / 9;
            border-radius: 20px;
            overflow: hidden;
            margin: 0 auto;
            transform-origin: center center;
            will-change: transform, opacity;
            animation: aboutVideoGlow 3s ease-in-out infinite;
            border: 2px solid rgba(201, 162, 39, 0.3);
          }
          .about-video-container video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .about-video-container::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 16px;
            pointer-events: none;
            border: 1px solid rgba(255, 255, 255, 0.08);
          }
        `}
      </style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative" }}>
        {/* Section Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: "700",
              color: "var(--text-heading)",
              marginBottom: "1rem",
            }}
          >
            {t.about.label}
          </h2>
          <div className="divider-gold" style={{ marginBottom: "1.5rem" }} />
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
            alignItems: "center",
            marginBottom: "5rem",
          }}
        >

          {/* Text Column & Facts */}
          <div className="reveal" style={{ width: "100%", maxWidth: "1000px" }}>
            <div style={{
              background: "var(--bg-card)",
              padding: "clamp(2rem, 5vw, 4rem)",
              borderRadius: "20px",
              border: "1px solid var(--card-border)",
              boxShadow: "var(--card-shadow-hover)",
              borderInlineStart: "4px solid var(--gold)",
            }}>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "var(--text-heading)",
                  lineHeight: "1.9",
                  marginBottom: "1.5rem",
                  fontWeight: "600",
                }}
              >
                {t.about.p1}
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-secondary)",
                  lineHeight: "2",
                  marginBottom: "3rem",
                }}
              >
                {t.about.p2}
              </p>


            </div>
          </div>
        </div>

        {/* Vision, Mission & Values Section */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "var(--text-heading)",
              marginBottom: "1rem",
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
            }}
          >
            {t.about.vision.title}
          </h3>
          <div className="divider-gold" style={{ marginBottom: "2rem", margin: "0 auto" }} />
          
          <div style={{ 
            maxWidth: "1000px", 
            margin: "0 auto", 
            padding: "clamp(2rem, 5vw, 4rem)", 
            background: "var(--bg-card)", 
            borderRadius: "20px", 
            border: "1px solid var(--card-border)", 
            display: "flex", 
            flexDirection: "column", 
            gap: "3rem", 
            boxShadow: "var(--card-shadow-hover)"
          }}>
            {/* Vision */}
            <div>
              <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "3rem",
                alignItems: "center",
                textAlign: "start"
              }}>
                <img 
                  src="/186586fc-156b-4a28-98b3-cea832780483_removalai_preview.png" 
                  alt={t.about.vision.title}
                  style={{ width: "100%", maxWidth: "300px", height: "auto", borderRadius: "12px", objectFit: "cover", margin: "0 auto" }} 
                />
                <p style={{ flex: 1, minWidth: "250px", fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "2" }}>
                  {t.about.vision.desc}
                </p>
              </div>
            </div>

            <div style={{ width: "100%", height: "1px", background: "var(--card-border)", opacity: 0.5 }}></div>

            {/* Mission - Video replaces image */}
            <div>
              <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "3rem",
                alignItems: "center",
                textAlign: "start"
              }}>
                {/* Video container with scroll-driven scale animation */}
                <div
                  ref={videoContainerRef}
                  className="about-video-container"
                  style={{
                    transform: "scale(0.3) translateY(40px)",
                    opacity: 0,
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  >
                    {videoVisible && <source src="/all-1.mp4" type="video/mp4" />}
                  </video>
                </div>
                <p style={{ flex: 1, minWidth: "250px", fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "2" }}>
                  {t.about.mission.desc}
                </p>
              </div>
            </div>

            <div style={{ width: "100%", height: "1px", background: "var(--card-border)", opacity: 0.5 }}></div>

            {/* Values Grid */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                textAlign: "start"
              }}
            >
              {t.about.values.map((value, i) => (
                <div
                  key={i}
                  className={`card-industrial reveal`}
                  style={{
                    flex: "1 1 200px",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div className="icon-box">
                    {valueIcons[i + 1]}
                  </div>
                  <h3
                    style={{
                      color: "var(--text-heading)",
                      fontWeight: "700",
                      marginBottom: "0.75rem",
                      fontFamily: "IBM Plex Sans Arabic, sans-serif",
                      fontSize: "1.1rem",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.8" }}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
