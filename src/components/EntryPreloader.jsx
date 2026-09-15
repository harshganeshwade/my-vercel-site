import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const EntryPreloader = ({ onComplete }) => {
  const [active, setActive] = useState(true);
  const [shutterOpen, setShutterOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [bootLogs, setBootLogs] = useState([]);

  const logsList = [
    { text: "INIT_CORE: SECURE_KERNEL_V4.9 OK", delay: 120 },
    { text: "MOUNTING THREAT_INTEL & VAPT SUITE...", delay: 280 },
    { text: "SOC MODULES: PURPLE_TEAM ACTIVE", delay: 520 },
    { text: "DECRYPTING IDENTITY: HARSH GANESHWADE", delay: 780 },
    { text: "AUTHENTICATION GRANTED [LEVEL 5 SECURE]", delay: 1000 }
  ];

  const runSequence = () => {
    setActive(true);
    setShutterOpen(false);
    setProgress(0);
    setBootLogs([]);

    let p = 0;
    const pInterval = setInterval(() => {
      p += Math.floor(Math.random() * 9) + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(pInterval);
        setProgress(100);

        // Trigger dual shutter opening
        setTimeout(() => {
          setShutterOpen(true);
          setTimeout(() => {
            setActive(false);
            if (onComplete) onComplete();
          }, 700);
        }, 350);
      } else {
        setProgress(p);
      }
    }, 40);

    // Typing logs sequentially
    logsList.forEach(log => {
      setTimeout(() => {
        setBootLogs(prev => [...prev, log.text]);
      }, log.delay);
    });

    return () => clearInterval(pInterval);
  };

  useEffect(() => {
    const timerCleanup = runSequence();
    return () => {
      if (timerCleanup) timerCleanup();
    };
  }, []);

  if (!active) return null;

  return (
    <div className={`entry-preloader-root ${shutterOpen ? 'opening' : ''}`}>
      <div className="bios-wrapper">
        {/* Top Blast Gate */}
        <div className={`gate-panel gate-top ${shutterOpen ? 'slide-up' : ''}`}>
          <div className="laser-seam-top"></div>
        </div>

        {/* Bottom Blast Gate */}
        <div className={`gate-panel gate-bottom ${shutterOpen ? 'slide-down' : ''}`}>
          <div className="laser-seam-bottom"></div>
        </div>

        {/* Central HUD Card */}
        <div className={`bios-content ${shutterOpen ? 'content-fade-out' : ''}`}>
          <div className="bios-header">
            <div className="bios-header-left">
              <Terminal size={17} className="bios-icon" />
              <span className="bios-title">SYS_BOOT // HARSH_OS_V4.9</span>
            </div>
            <span className="bios-status-pill">DEFCON_5</span>
          </div>

          <div className="bios-logs">
            {bootLogs.map((log, idx) => (
              <div key={idx} className="bios-log-line">
                <span className="log-prefix">&gt;</span> {log}
              </div>
            ))}
          </div>

          <div className="bios-progress-container">
            <div className="bios-progress-info">
              <span>SECURITY CLEARANCE</span>
              <span className="bios-percent">{progress}%</span>
            </div>
            <div className="bios-progress-bar">
              <div className="bios-progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <div className="bios-footer">
            <span className="blink-cursor">▮</span> ENCRYPTED TRANSMISSION VERIFIED
          </div>
        </div>
      </div>

      <style>{`
        .entry-preloader-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 999999;
          overflow: hidden;
          background: transparent;
          pointer-events: all;
        }

        .bios-wrapper {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gate-panel {
          position: absolute;
          left: 0;
          width: 100%;
          height: 50.5%;
          background: #060908;
          z-index: 1;
          transition: transform 0.7s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .gate-top {
          top: 0;
          border-bottom: 1px solid rgba(0, 229, 163, 0.4);
          transform-origin: top;
        }

        .gate-bottom {
          bottom: 0;
          border-top: 1px solid rgba(0, 229, 163, 0.4);
          transform-origin: bottom;
        }

        .gate-top.slide-up {
          transform: translateY(-100%);
        }

        .gate-bottom.slide-down {
          transform: translateY(100%);
        }

        .laser-seam-top, .laser-seam-bottom {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00e5a3, #38bdf8, #00e5a3, transparent);
          box-shadow: 0 0 15px #00e5a3;
        }
        .laser-seam-top { bottom: -1px; }
        .laser-seam-bottom { top: -1px; }

        .bios-content {
          position: relative;
          z-index: 2;
          width: min(520px, 90vw);
          background: rgba(6, 18, 14, 0.9);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(0, 229, 163, 0.35);
          border-radius: 10px;
          padding: 1.6rem;
          box-shadow: 0 0 40px rgba(0, 229, 163, 0.18), inset 0 0 15px rgba(0, 229, 163, 0.06);
          font-family: var(--font-heading);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .bios-content.content-fade-out {
          opacity: 0;
          transform: scale(0.96);
        }

        .bios-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(0, 229, 163, 0.2);
          padding-bottom: 0.65rem;
          margin-bottom: 1.1rem;
        }

        .bios-header-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: #00e5a3;
        }

        .bios-title {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .bios-status-pill {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          background: rgba(0, 229, 163, 0.1);
          color: #00e5a3;
          border: 1px solid rgba(0, 229, 163, 0.3);
        }

        .bios-logs {
          min-height: 110px;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: #d1fae5;
          margin-bottom: 1.3rem;
        }

        .bios-log-line {
          animation: logFadeIn 0.2s ease forwards;
        }

        @keyframes logFadeIn {
          from { opacity: 0; transform: translateX(-6px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .log-prefix {
          color: #00e5a3;
          font-weight: 700;
          margin-right: 0.3rem;
        }

        .bios-progress-container {
          margin-bottom: 1rem;
        }

        .bios-progress-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          color: #00e5a3;
          letter-spacing: 1px;
          margin-bottom: 0.45rem;
        }

        .bios-percent {
          font-weight: 700;
          color: #38bdf8;
        }

        .bios-progress-bar {
          width: 100%;
          height: 5px;
          background: rgba(0, 229, 163, 0.1);
          border-radius: 3px;
          overflow: hidden;
        }

        .bios-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00e5a3, #38bdf8);
          box-shadow: 0 0 12px #00e5a3;
          transition: width 0.04s ease-out;
        }

        .bios-footer {
          font-size: 0.7rem;
          color: rgba(209, 250, 229, 0.65);
          letter-spacing: 1px;
        }

        .blink-cursor {
          color: #00e5a3;
          animation: blink 0.8s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      
        @media (max-width: 600px) {
          .bios-content {
            width: 92vw;
            padding: 1.1rem;
            border-radius: 8px;
          }
          .bios-title {
            font-size: 0.75rem;
            letter-spacing: 1px;
          }
          .bios-status-pill {
            font-size: 0.6rem;
            padding: 0.15rem 0.35rem;
          }
          .bios-logs {
            font-size: 0.72rem;
            min-height: 95px;
            gap: 0.3rem;
            margin-bottom: 1rem;
          }
          .bios-progress-info {
            font-size: 0.68rem;
          }
          .bios-footer {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </div>
  );
};

export default EntryPreloader;
