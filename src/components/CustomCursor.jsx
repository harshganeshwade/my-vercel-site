import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default'); // 'default', 'pointer', 'text', 'hidden'
  const [isMobile, setIsMobile] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsMobile(true);
      return;
    }

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    // Smooth lerp loop for the outer ring
    let animId;
    const render = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      animId = requestAnimationFrame(render);
    };
    animId = requestAnimationFrame(render);

    // Event delegation for cursor interactions
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor], a, button, .project-card, .book-card-3d, .cert-card-v2, .cyber-btn, .ledger-view-btn');
      
      if (!target) {
        setCursorVariant('default');
        setCursorText('');
        return;
      }

      const customCursorAttr = target.getAttribute('data-cursor');
      if (customCursorAttr) {
        setCursorVariant('custom');
        setCursorText(customCursorAttr);
      } else if (target.classList.contains('project-card')) {
        setCursorVariant('custom');
        setCursorText('SPECS ↗');
      } else if (target.classList.contains('book-card-3d')) {
        setCursorVariant('custom');
        setCursorText('READ');
      } else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('btn')) {
        setCursorVariant('pointer');
        setCursorText('');
      } else {
        setCursorVariant('pointer');
        setCursorText('');
      }
    };

    const handleMouseOut = (e) => {
      const related = e.relatedTarget;
      if (!related || !related.closest('[data-cursor], a, button, .project-card, .book-card-3d')) {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Inner Dot */}
      <div 
        ref={dotRef} 
        className={`custom-cursor-dot ${cursorVariant}`}
      />

      {/* Outer Interpolated Ring */}
      <div 
        ref={ringRef} 
        className={`custom-cursor-ring ${cursorVariant}`}
      >
        {cursorText && <span className="cursor-label">{cursorText}</span>}
      </div>

      <style>{`
        .custom-cursor-dot {
          position: fixed;
          top: -4px;
          left: -4px;
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          box-shadow: 0 0 10px var(--primary);
          transition: opacity 0.2s ease, transform 0.05s linear;
        }

        .custom-cursor-ring {
          position: fixed;
          top: -20px;
          left: -20px;
          width: 40px;
          height: 40px;
          border: 1px solid var(--primary);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99998;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                      height 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                      top 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                      left 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                      background 0.3s ease,
                      border-color 0.3s ease;
          background: rgba(0, 255, 65, 0.03);
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.15);
        }

        /* Pointer state on links / buttons */
        .custom-cursor-ring.pointer {
          top: -28px;
          left: -28px;
          width: 56px;
          height: 56px;
          border-color: var(--accent);
          background: rgba(0, 255, 249, 0.08);
          box-shadow: 0 0 20px rgba(0, 255, 249, 0.3);
        }

        .custom-cursor-dot.pointer {
          background: var(--accent);
          box-shadow: 0 0 10px var(--accent);
          transform: scale(0.6);
        }

        /* Custom text state (e.g. "SPECS ↗", "READ") */
        .custom-cursor-ring.custom {
          top: -38px;
          left: -38px;
          width: 76px;
          height: 76px;
          background: var(--primary);
          border-color: var(--primary);
          box-shadow: 0 0 30px var(--primary-glow);
        }

        .custom-cursor-dot.custom {
          opacity: 0;
        }

        .cursor-label {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 800;
          color: #000;
          letter-spacing: 1px;
          text-align: center;
          user-select: none;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
