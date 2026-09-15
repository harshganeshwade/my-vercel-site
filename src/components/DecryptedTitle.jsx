import React, { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEF0123456789!@#$%^&*<>[]{}~';

const DecryptedTitle = ({ text, className = "", subtitle = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  const [inView, setInView] = useState(false);
  const elRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setInView(true);
            hasAnimated.current = true;
            runDecryption();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elRef.current) {
      observer.observe(elRef.current);
    }

    return () => observer.disconnect();
  }, [text]);

  const runDecryption = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 25);
  };

  return (
    <div ref={elRef} className={`section-header decrypt-section-header ${inView ? 'in-view' : ''}`}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className={`section-title ${className}`}>{displayText}</h2>
      
      <style>{`
        .decrypt-section-header {
          opacity: 0;
          transform: translateY(20px);
          filter: blur(4px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                      filter 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .decrypt-section-header.in-view {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0px);
        }
      `}</style>
    </div>
  );
};

export default DecryptedTitle;
