import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink, Terminal, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SpiderWeb from './SpiderWeb';
import heroImg from '../assets/harsh_hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [magneticBtn1, setMagneticBtn1] = useState({ x: 0, y: 0 });
  const [magneticBtn2, setMagneticBtn2] = useState({ x: 0, y: 0 });

  const heroSceneRef = useRef(null);
  const heroPinRef = useRef(null);
  const avatarWrapperRef = useRef(null);
  const titleLeftRef = useRef(null);
  const titleRightRef = useRef(null);
  const hudElementsRef = useRef(null);
  const badgesRef = useRef(null);
  const ctaRef = useRef(null);
  const scrimOverlayRef = useRef(null);

  // Mouse move 3D parallax tracking
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

  // GSAP ScrollTrigger Timeline - Scrollytelling Scene
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSceneRef.current,
          start: 'top top',
          end: '+=120%',
          pin: heroPinRef.current,
          scrub: 1.1,
          anticipatePin: 1,
        }
      });

      // 01. Typography spreads apart & HUD drifts on deep scroll
      tl.to([titleLeftRef.current], {
        x: -90,
        opacity: 0.2,
        letterSpacing: '8px',
        ease: 'power2.out',
      }, 0.2);

      tl.to([titleRightRef.current], {
        x: 90,
        opacity: 0.2,
        letterSpacing: '8px',
        ease: 'power2.out',
      }, 0.2);

      tl.to(hudElementsRef.current, {
        scale: 1.2,
        opacity: 0,
        y: -30,
        ease: 'power2.out',
      }, 0.2);

      tl.to([badgesRef.current], {
        opacity: 0,
        y: -20,
        ease: 'power2.out',
      }, 0.3);

      // 02. Buttons gently fade out ONLY towards the end of the scroll transition
      tl.to(ctaRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.95,
        ease: 'power2.out',
      }, 0.5);

      // 03. Main visual zooms toward viewer with depth
      tl.to(avatarWrapperRef.current, {
        scale: 1.4,
        opacity: 0.9,
        filter: 'drop-shadow(0 0 35px rgba(0, 255, 65, 0.6))',
        ease: 'power1.inOut',
      }, 0.3);

      // 04. Scrim dissolve into next section
      tl.to(scrimOverlayRef.current, {
        opacity: 1,
        backdropFilter: 'blur(10px)',
        ease: 'power2.inOut',
      }, 0.6);

    }, heroSceneRef);

    return () => ctx.revert();
  }, []);

  // Magnetic button helpers
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
    <div ref={heroSceneRef} className="hero-scene-track">
      <div ref={heroPinRef} className="hero-pin-viewport">
        {/* Scrim Overlay for filmic dissolve */}
        <div ref={scrimOverlayRef} className="hero-scrim-overlay"></div>

        {/* Parallax Floating HUD Background */}
        <div 
          ref={hudElementsRef}
          className="hero-bg-floating-grid"
          style={{
            transform: `translate(${mousePos.x * -16}px, ${mousePos.y * -16}px)`
          }}
        >
          <div className="hud-corner top-left">[SYS_INIT: OK // TIMELINE_ACTIVE]</div>
          <div className="hud-corner top-right">[RADAR: 360° ONLINE]</div>
          <div className="hud-watermark">PURPLE_TEAM_ALPHA</div>
        </div>

        <div className="container hero-container">
          <div 
            className="hero-content"
            style={{
              transform: `translate(${mousePos.x * 6}px, ${mousePos.y * 6}px)`
            }}
          >
            {/* 3D Interactive Visual Avatar */}
            <div 
              ref={avatarWrapperRef}
              className="hero-image-wrapper"
              style={{
                transform: `perspective(800px) rotateX(${mousePos.y * -15}deg) rotateY(${mousePos.x * 15}deg)`
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

            {/* Top Tactical Badge */}
            <div ref={badgesRef}>
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

            {/* Giant Kinetic Splitting Headline */}
            <h1 className="glitch-wrapper kinetic-headline">
              <span ref={titleLeftRef} className="kinetic-part left" data-text="HARSH">HARSH</span>
              {' '}
              <span ref={titleRightRef} className="kinetic-part right" data-text="GANESHWADE">GANESHWADE</span>
            </h1>

            {/* Status Tags */}
            <div className="hero-status-tags">
              <span className="hero-status-tag">📍 Sangli, Maharashtra</span>
              <span className="hero-status-tag">⚡ VAPT & Purple Teaming</span>
              <span className="hero-status-tag">🛡️ SOC & SIEM</span>
              <span className="hero-status-tag">📖 Published Author (2 Books)</span>
            </div>

            {/* Magnetic CTA Buttons - Positioned ABOVE SpiderWeb for immediate visibility */}
            <div ref={ctaRef} className="hero-btns">
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

            {/* Interactive Network Graph */}
            <SpiderWeb />
          </div>
        </div>

        {/* Bottom Transition Scrollytelling Cue */}
        <div className="hero-transition-bridge">
          <a href="#about" className="scroll-bridge-trigger" aria-label="Scroll to About section">
            <span className="bridge-text">SCROLL TO ENTER</span>
            <ChevronDown size={16} className="bridge-arrow" />
          </a>
          <div className="bridge-gradient-glow"></div>
        </div>
      </div>

      <style>{`
        .hero-scene-track {
          position: relative;
          height: 160vh;
        }

        .hero-pin-viewport {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding-top: 5.5rem;
          padding-bottom: 1.5rem;
        }

        .hero-scrim-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(6, 11, 17, 0.4) 0%, rgba(6, 11, 17, 0.95) 100%);
          opacity: 0;
          pointer-events: none;
          z-index: 5;
          transition: opacity 0.3s ease;
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
          font-size: 0.72rem;
          color: var(--primary);
          opacity: 0.45;
          letter-spacing: 1.5px;
        }

        .hud-corner.top-left { top: 12%; left: 5%; }
        .hud-corner.top-right { top: 12%; right: 5%; }

        .hud-watermark {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-heading);
          font-size: clamp(3rem, 14vw, 9rem);
          font-weight: 900;
          color: rgba(0, 255, 65, 0.025);
          letter-spacing: 10px;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
        }

        /* Avatar 3D Wrapper */
        .hero-image-wrapper {
          position: relative;
          width: 130px;
          height: 130px;
          margin: 0 auto 0.8rem;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          transition: transform 0.2s ease-out, filter 0.3s ease;
          will-change: transform, filter;
        }

        .hero-image-ring-outer {
          position: absolute;
          inset: -5px;
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
          inset: 5px;
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
          box-shadow: 0 0 12px rgba(0, 255, 65, 0.3);
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
          font-size: 0.6rem;
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
          gap: 6px;
          padding: 0.3rem 0.8rem;
          background: rgba(0, 255, 65, 0.04);
          border: 1px solid var(--primary-glow);
          border-radius: 100px;
          font-size: 0.72rem;
          font-family: var(--font-heading);
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.6rem;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.1);
        }

        .badge-icon {
          color: var(--primary);
        }

        .badge-sep {
          margin: 0 5px;
          opacity: 0.4;
        }

        /* Kinetic Splitting Headline */
        .kinetic-headline {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 0.4rem;
          display: flex;
          justify-content: center;
          gap: 0.7rem;
          flex-wrap: wrap;
        }

        .kinetic-part {
          display: inline-block;
          color: var(--primary);
          text-shadow: 0 0 20px rgba(0, 255, 65, 0.4);
          will-change: transform, letter-spacing, opacity;
        }

        /* Status Tags */
        .hero-status-tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.3rem;
          margin-bottom: 0.8rem;
        }

        .hero-status-tag {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          color: var(--text-secondary);
          background: rgba(0, 255, 65, 0.04);
          border: 1px solid var(--glass-border);
          padding: 0.2rem 0.6rem;
          border-radius: 20px;
          transition: all 0.25s ease;
        }

        .hero-status-tag:hover {
          border-color: var(--primary);
          color: var(--primary);
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.2);
          transform: translateY(-2px);
        }

        /* Prominent Magnetic CTA Buttons */
        .hero-btns {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 10;
        }

        .magnetic-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.7rem 1.6rem;
          border-radius: 6px;
          font-family: var(--font-heading);
          font-size: 0.8rem;
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
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.4);
        }

        .btn-primary:hover {
          background: #33ff66;
          box-shadow: 0 0 35px var(--primary-glow), 0 0 60px rgba(0, 255, 65, 0.3);
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
          bottom: 10px;
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
          gap: 2px;
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
          font-size: 0.6rem;
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
          .hero-image-wrapper { width: 120px; height: 120px; }
          .kinetic-headline { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
