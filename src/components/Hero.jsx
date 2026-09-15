import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Terminal, ChevronDown } from 'lucide-react';
import heroImg from '../assets/harsh_hero.jpg';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [magneticBtn1, setMagneticBtn1] = useState({ x: 0, y: 0 });
  const [magneticBtn2, setMagneticBtn2] = useState({ x: 0, y: 0 });

  // Smooth mouse move 3D parallax tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Magnetic button hover
  const handleMagneticMove = (e, setBtnState) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.3;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.3;
    setBtnState({ x, y });
  };

  const handleMagneticLeave = (setBtnState) => {
    setBtnState({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="section hero">
      {/* Background HUD Grid */}
      <div 
        className="hero-bg-hud"
        style={{
          transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`
        }}
      >
        <div className="hud-corner top-left">[SYS_INIT: OK]</div>
        <div className="hud-corner top-right">[RADAR: 360° ONLINE]</div>
        <div className="hud-watermark">PURPLE_TEAM_ALPHA</div>
      </div>

      <div className="container hero-container">
        <div 
          className="hero-content"
          style={{
            transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)`
          }}
        >
          {/* 3D Visual Profile Image with Dual Rotating Cyber Rings */}
          <div 
            className="hero-image-wrapper"
            style={{
              transform: `perspective(800px) rotateX(${mousePos.y * -12}deg) rotateY(${mousePos.x * 12}deg)`
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

          {/* Tactical Cyber Badge */}
          <div className="hero-badge-wrap">
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

          {/* Glitch Headline */}
          <h1 className="glitch-wrapper hero-title">
            <span className="glitch" data-text="HARSH GANESHWADE">
              HARSH GANESHWADE
            </span>
          </h1>

          {/* Status Tags */}
          <div className="hero-status-tags">
            <span className="hero-status-tag">📍 Sangli, Maharashtra</span>
            <span className="hero-status-tag">⚡ VAPT & Purple Teaming</span>
            <span className="hero-status-tag">🛡️ SOC & SIEM</span>
            <span className="hero-status-tag">📖 Published Author (2 Books)</span>
          </div>

          {/* Prominent High-Visibility Magnetic CTA Buttons */}
          <div className="hero-btns">
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

      {/* Smooth Transition Link to About */}
      <div className="hero-transition-bridge">
        <a href="#about" className="scroll-bridge-trigger" aria-label="Scroll to About section">
          <span className="bridge-text">EXPLORE_SYSTEM</span>
          <ChevronDown size={16} className="bridge-arrow" />
        </a>
        <div className="bridge-gradient-glow"></div>
      </div>

      <style>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 5.5rem;
          padding-bottom: 2.5rem;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-content {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
          transition: transform 0.12s ease-out;
          will-change: transform;
        }

        /* Floating Parallax HUD */
        .hero-bg-hud {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hud-corner {
          position: absolute;
          font-family: var(--font-heading);
          font-size: 0.72rem;
          color: var(--primary);
          opacity: 0.45;
          letter-spacing: 1.5px;
        }

        .hud-corner.top-left { top: 18%; left: 6%; }
        .hud-corner.top-right { top: 18%; right: 6%; }

        .hud-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-heading);
          font-size: clamp(3rem, 14vw, 9rem);
          font-weight: 900;
          color: rgba(0, 229, 163, 0.02);
          letter-spacing: 10px;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
        }

        /* Avatar 3D Wrapper */
        .hero-image-wrapper {
          position: relative;
          width: 140px;
          height: 140px;
          margin: 0 auto 1.2rem;
          padding: 6px;
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
          object-position: center 15%;
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          box-shadow: 0 0 25px var(--primary-glow);
          z-index: 1;
        }

        .scanline-circle {
          position: absolute;
          inset: 6px;
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
          bottom: -8px;
          background: rgba(10, 16, 22, 0.95);
          border: 1px solid var(--primary);
          padding: 2px 8px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 5px;
          z-index: 3;
          box-shadow: 0 0 12px rgba(0, 229, 163, 0.3);
        }

        .hud-status-pulse {
          width: 5px;
          height: 5px;
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
          font-size: 0.62rem;
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
        .hero-badge-wrap {
          margin-bottom: 0.8rem;
        }

        .cyber-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0.35rem 0.9rem;
          background: rgba(0, 229, 163, 0.04);
          border: 1px solid var(--primary-glow);
          border-radius: 100px;
          font-size: 0.75rem;
          font-family: var(--font-heading);
          font-weight: 600;
          color: var(--primary);
          box-shadow: 0 0 15px rgba(0, 229, 163, 0.1);
        }

        .badge-icon {
          color: var(--primary);
        }

        .badge-sep {
          margin: 0 5px;
          opacity: 0.4;
        }

        /* Headline */
        .hero-title {
          font-size: clamp(2.4rem, 6vw, 4rem);
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 0.6rem;
        }

        /* Glitch Animation */
        .glitch-wrapper {
          position: relative;
        }

        .glitch {
          position: relative;
          color: var(--primary);
          font-weight: 800;
          text-shadow: 0 0 20px rgba(0, 229, 163, 0.4);
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--bg-color);
        }

        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }

        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim2 5s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% { clip: rect(31px, 9999px, 94px, 0); }
          20% { clip: rect(91px, 9999px, 43px, 0); }
          40% { clip: rect(65px, 9999px, 59px, 0); }
          60% { clip: rect(57px, 9999px, 5px, 0); }
          80% { clip: rect(34px, 9999px, 86px, 0); }
          100% { clip: rect(67px, 9999px, 26px, 0); }
        }

        @keyframes glitch-anim2 {
          0% { clip: rect(65px, 9999px, 100px, 0); }
          20% { clip: rect(23px, 9999px, 45px, 0); }
          40% { clip: rect(78px, 9999px, 32px, 0); }
          60% { clip: rect(12px, 9999px, 90px, 0); }
          80% { clip: rect(56px, 9999px, 12px, 0); }
          100% { clip: rect(20px, 9999px, 60px, 0); }
        }

        /* Status Tags */
        .hero-status-tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .hero-status-tag {
          font-family: var(--font-heading);
          font-size: 0.72rem;
          color: var(--text-secondary);
          background: rgba(0, 229, 163, 0.04);
          border: 1px solid var(--glass-border);
          padding: 0.25rem 0.65rem;
          border-radius: 20px;
          transition: all 0.25s ease;
        }

        .hero-status-tag:hover {
          border-color: var(--primary);
          color: var(--primary);
          box-shadow: 0 0 10px rgba(0, 229, 163, 0.2);
          transform: translateY(-2px);
        }

        /* Prominent Magnetic CTA Buttons */
        .hero-btns {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-top: 1rem;
          position: relative;
          z-index: 10;
        }

        .magnetic-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.8rem 1.8rem;
          border-radius: 6px;
          font-family: var(--font-heading);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-decoration: none;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, background 0.3s ease;
          overflow: hidden;
          cursor: pointer;
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

        .btn-primary {
          background: var(--primary);
          color: #000;
          border: 1px solid var(--primary);
          box-shadow: 0 0 20px rgba(0, 229, 163, 0.4);
        }

        .btn-primary:hover {
          background: #33ff66;
          box-shadow: 0 0 35px var(--primary-glow), 0 0 60px rgba(0, 229, 163, 0.3);
          transform: translateY(-2px);
        }

        .btn-outline {
          background: rgba(0, 255, 249, 0.05);
          color: var(--text-primary);
          border: 1px solid var(--accent);
          box-shadow: 0 0 15px rgba(0, 255, 249, 0.15);
        }

        .btn-outline:hover {
          background: rgba(0, 255, 249, 0.15);
          box-shadow: 0 0 25px rgba(0, 255, 249, 0.4);
          border-color: #00fff9;
          color: #00fff9;
          transform: translateY(-2px);
        }

        /* Transition Bridge */
        .hero-transition-bridge {
          position: absolute;
          bottom: 15px;
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
          gap: 3px;
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
          font-size: 0.62rem;
          letter-spacing: 2px;
        }

        .bridge-arrow {
          animation: arrowBounce 2s infinite;
        }

        @keyframes arrowBounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(4px); }
          60% { transform: translateY(2px); }
        }

        .bridge-gradient-glow {
          position: absolute;
          bottom: -10px;
          width: 250px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          box-shadow: 0 0 15px var(--primary-glow);
        }

        @media (max-width: 768px) {
          .hud-corner { display: none; }
          .hero-btns { flex-direction: column; width: 100%; max-width: 300px; margin-left: auto; margin-right: auto; }
          .hero-image-wrapper { width: 130px; height: 130px; }
          .hero-title { font-size: 2.2rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
