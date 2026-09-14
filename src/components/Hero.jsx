import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink, Shield, Terminal, ChevronDown, Sparkles } from 'lucide-react';
import SpiderWeb from './SpiderWeb';
import heroImg from '../assets/harsh_hero.jpg';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const [magneticBtn1, setMagneticBtn1] = useState({ x: 0, y: 0 });
  const [magneticBtn2, setMagneticBtn2] = useState({ x: 0, y: 0 });

  // Mouse move parallax tracker
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Magnetic hover effect helpers
  const handleMagneticMove = (e, setBtnState) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.35;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.35;
    setBtnState({ x, y });
  };

  const handleMagneticLeave = (setBtnState) => {
    setBtnState({ x: 0, y: 0 });
  };

  return (
    <section ref={heroRef} className="section hero">
      {/* Background Parallax Cyber Elements */}
      <div 
        className="hero-bg-floating-grid"
        style={{
          transform: `translateY(${scrollY * 0.25}px) translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)`
        }}
      >
        <div className="hud-corner top-left">[SYS_INIT: OK]</div>
        <div className="hud-corner top-right">[RADAR: ACTIVE]</div>
        <div className="hud-line horizontal"></div>
      </div>

      <div className="container hero-container">
        <div 
          className="hero-content"
          style={{
            transform: `translate(${mousePos.x * 6}px, ${mousePos.y * 6}px)`
          }}
        >
          {/* Main Visual Profile with 3D Mouse Parallax Tilt */}
          <div 
            className="hero-image-wrapper cinematic-reveal"
            style={{
              transform: `perspective(800px) rotateX(${mousePos.y * -15}deg) rotateY(${mousePos.x * 15}deg) translateZ(20px)`,
              animationDelay: '0.1s'
            }}
          >
            <div className="hero-image-ring-outer"></div>
            <div className="hero-image-ring-inner"></div>
            <img src={heroImg} alt="Harsh Ganeshwade" className="hero-profile-img" />
            <div className="scanline-circle"></div>
            <div className="hud-status-badge">
              <span className="hud-status-pulse"></span>
              <span className="hud-status-text">PURPLE_TEAM_ACTIVE</span>
            </div>
          </div>

          {/* Staggered Word-by-Word Line Reveal */}
          <div className="cinematic-reveal" style={{ animationDelay: '0.3s' }}>
            <span className="badge cyber-badge">
              <Terminal size={14} className="badge-icon" />
              <span className="badge-words">
                <span>Cybersecurity Enthusiast</span>
                <span className="badge-sep">/</span>
                <span>VAPT & Purple Team</span>
                <span className="badge-sep">/</span>
                <span>SOC & SIEM</span>
              </span>
            </span>
          </div>

          <h1 className="glitch-wrapper cinematic-reveal" style={{ animationDelay: '0.5s' }}>
            <span className="glitch cinematic-title" data-text="Harsh Ganeshwade">
              Harsh Ganeshwade
            </span>
          </h1>

          {/* Staggered Status Badges */}
          <div className="hero-status-tags cinematic-reveal" style={{ animationDelay: '0.7s' }}>
            <span className="hero-status-tag tag-1">
              📍 Sangli, Maharashtra
            </span>
            <span className="hero-status-tag tag-2">
              ⚡ VAPT & Purple Teaming
            </span>
            <span className="hero-status-tag tag-3">
              🛡️ SOC & SIEM
            </span>
            <span className="hero-status-tag tag-4">
              📖 Published Author (2 Books)
            </span>
          </div>

          {/* Interactive Network Graph */}
          <div className="cinematic-reveal" style={{ animationDelay: '0.9s' }}>
            <SpiderWeb />
          </div>

          {/* Magnetic CTA Action Buttons */}
          <div className="hero-btns cinematic-reveal" style={{ animationDelay: '1.1s' }}>
            <a 
              href="#projects" 
              className="btn btn-primary magnetic-btn"
              onMouseMove={(e) => handleMagneticMove(e, setMagneticBtn1)}
              onMouseLeave={() => handleMagneticLeave(setMagneticBtn1)}
              style={{
                transform: `translate(${magneticBtn1.x}px, ${magneticBtn1.y}px)`
              }}
            >
              <span className="btn-glow-layer"></span>
              <span className="btn-text">
                VIEW PROJECTS <ArrowRight size={17} />
              </span>
            </a>

            <a 
              href="https://drive.google.com/drive/folders/1sm8nkHP4xmSri6O_yGB3Omc7b1_RhyPL" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline magnetic-btn"
              onMouseMove={(e) => handleMagneticMove(e, setMagneticBtn2)}
              onMouseLeave={() => handleMagneticLeave(setMagneticBtn2)}
              style={{
                transform: `translate(${magneticBtn2.x}px, ${magneticBtn2.y}px)`
              }}
              title="Access Dedicated Resumes (3 Roles) on Google Drive"
            >
              <span className="btn-glow-layer outline"></span>
              <span className="btn-text">
                ACCESS RESUMES (DRIVE) <ExternalLink size={17} />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Atmospheric Transition Bridge to Next Section */}
      <div className="hero-transition-bridge">
        <a href="#about" className="scroll-bridge-trigger" aria-label="Scroll to About section">
          <span className="bridge-text">EXPLORE_SYSTEM</span>
          <ChevronDown size={18} className="bridge-arrow" />
        </a>
        <div className="bridge-gradient-glow"></div>
      </div>

      <style>{`
        .hero {
          min-height: 94vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 7.5rem;
          padding-bottom: 3rem;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 840px;
          margin: 0 auto;
          text-align: center;
          transition: transform 0.15s ease-out;
          will-change: transform;
        }

        /* Floating Parallax HUD Elements */
        .hero-bg-floating-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hud-corner {
          position: absolute;
          font-family: var(--font-heading);
          font-size: 0.7rem;
          color: var(--primary);
          opacity: 0.4;
          letter-spacing: 1.5px;
        }

        .hud-corner.top-left { top: 18%; left: 8%; }
        .hud-corner.top-right { top: 18%; right: 8%; }

        /* Staggered Cinematic Reveal Animation */
        .cinematic-reveal {
          opacity: 0;
          transform: translateY(24px);
          animation: cinematicFadeIn 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cinematicFadeIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* 3D Visual Profile Image */
        .hero-image-wrapper {
          position: relative;
          width: 190px;
          height: 190px;
          margin: 0 auto 2.2rem;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          transition: transform 0.2s ease-out, box-shadow 0.3s ease;
        }

        .hero-image-ring-outer {
          position: absolute;
          inset: -6px;
          border: 1.5px dashed var(--primary);
          border-radius: 50%;
          opacity: 0.7;
          animation: spin 16s linear infinite;
        }

        .hero-image-ring-inner {
          position: absolute;
          inset: 0;
          border: 2px solid var(--primary);
          border-radius: 50%;
          border-top-color: transparent;
          border-bottom-color: transparent;
          animation: spinReverse 6s linear infinite;
        }

        .hero-profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          box-shadow: 0 0 35px var(--primary-glow);
          z-index: 1;
        }

        .scanline-circle {
          position: absolute;
          inset: 8px;
          border-radius: 50%;
          background: linear-gradient(to bottom, transparent, var(--primary-glow), transparent);
          background-size: 100% 200%;
          opacity: 0.25;
          z-index: 2;
          pointer-events: none;
          animation: scan-circle 3s linear infinite;
        }

        .hud-status-badge {
          position: absolute;
          bottom: -10px;
          background: rgba(10, 16, 22, 0.95);
          border: 1px solid var(--primary);
          padding: 3px 10px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 3;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
        }

        .hud-status-pulse {
          width: 6px;
          height: 6px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--primary);
          animation: statusBlink 1.5s infinite;
        }

        @keyframes statusBlink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.7); }
        }

        .hud-status-text {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--primary);
          letter-spacing: 1px;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes scan-circle {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 100%; }
        }

        /* Cyber Badge */
        .cyber-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.45rem 1.1rem;
          background: rgba(0, 255, 65, 0.04);
          border: 1px solid var(--primary-glow);
          border-radius: 100px;
          font-size: 0.78rem;
          font-family: var(--font-heading);
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 1.5rem;
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.1);
        }

        .badge-icon {
          color: var(--primary);
        }

        .badge-sep {
          margin: 0 6px;
          opacity: 0.4;
        }

        /* Headline Glitch */
        .glitch-wrapper {
          position: relative;
          margin-bottom: 1.2rem;
        }

        .cinematic-title {
          font-size: clamp(3rem, 9vw, 5.2rem);
          font-weight: 800;
          letter-spacing: -1px;
          color: var(--primary);
          text-shadow: 0 0 20px rgba(0, 255, 65, 0.4);
        }

        /* Status Tags */
        .hero-status-tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 0.8rem;
          margin-bottom: 1.8rem;
        }

        .hero-status-tag {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          color: var(--text-secondary);
          background: rgba(0, 255, 65, 0.04);
          border: 1px solid var(--glass-border);
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          transition: all 0.25s ease;
        }

        .hero-status-tag:hover {
          border-color: var(--primary);
          color: var(--primary);
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.2);
          transform: translateY(-2px);
        }

        /* Magnetic Buttons */
        .hero-btns {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-top: 2.2rem;
        }

        .magnetic-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
          overflow: hidden;
        }

        .magnetic-btn .btn-text {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn-glow-layer {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .magnetic-btn:hover .btn-glow-layer {
          opacity: 1;
        }

        .btn-primary:hover {
          box-shadow: 0 0 30px var(--primary-glow), 0 0 60px rgba(0, 255, 65, 0.25);
        }

        .btn-outline:hover {
          box-shadow: 0 0 25px rgba(0, 255, 249, 0.4);
          border-color: var(--accent);
          color: var(--accent);
        }

        /* Transition Bridge */
        .hero-transition-bridge {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 3;
        }

        .scroll-bridge-trigger {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          text-decoration: none;
          color: var(--text-secondary);
          opacity: 0.6;
          transition: all 0.25s ease;
        }

        .scroll-bridge-trigger:hover {
          opacity: 1;
          color: var(--primary);
          transform: translateY(2px);
        }

        .bridge-text {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          letter-spacing: 2px;
        }

        .bridge-arrow {
          animation: arrowBounce 2s infinite;
        }

        @keyframes arrowBounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(5px); }
          60% { transform: translateY(3px); }
        }

        .bridge-gradient-glow {
          position: absolute;
          bottom: -15px;
          width: 300px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          box-shadow: 0 0 15px var(--primary-glow);
        }

        @media (max-width: 768px) {
          .hud-corner { display: none; }
          .hero-btns { flex-direction: column; width: 100%; max-width: 320px; margin-left: auto; margin-right: auto; }
          .hero-image-wrapper { width: 160px; height: 160px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
