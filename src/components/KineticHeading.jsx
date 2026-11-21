import React, { useEffect, useRef, useState } from 'react';

/**
 * Webflow-style Kinetic Split-Text & Staggered Heading Reveal
 * 
 * Splits the title and highlight words into individual character/word masks,
 * revealing them sequentially with spring-curve easing, blur dissipation, and rotation.
 */
const KineticHeading = ({
  subtitle = '',
  title = '',
  highlight = '',
  description = '',
  className = '',
  align = 'center',
}) => {
  const [inView, setInView] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Split strings into individual words
  const titleWords = title ? title.trim().split(/\s+/) : [];
  const highlightWords = highlight ? highlight.trim().split(/\s+/) : [];

  let globalIndex = 0;

  return (
    <div
      ref={headerRef}
      className={`section-header kinetic-header align-${align} ${className}`}
    >
      {/* Subtitle / Cyber Tag */}
      {subtitle && (
        <div className="kinetic-subtitle-wrap">
          <span
            className={`section-subtitle kinetic-subtitle ${inView ? 'revealed' : ''}`}
          >
            <span className="subtitle-bracket">[ </span>
            {subtitle}
            <span className="subtitle-bracket"> ]</span>
          </span>
        </div>
      )}

      {/* Main Heading with Staggered Kinetic Words & Letters */}
      <h2 className="section-title kinetic-title" aria-label={`${title} ${highlight}`}>
        {/* Normal Words */}
        {titleWords.map((word, wIdx) => {
          const letters = word.split('');
          return (
            <span key={`w-${wIdx}`} className="kinetic-word-mask">
              <span className="kinetic-word-inner">
                {letters.map((char, cIdx) => {
                  const delay = 0.08 + globalIndex * 0.028;
                  globalIndex++;
                  return (
                    <span
                      key={`c-${cIdx}`}
                      className={`kinetic-char ${inView ? 'revealed' : ''}`}
                      style={{
                        transitionDelay: `${delay}s`,
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
              <span className="word-spacer">&nbsp;</span>
            </span>
          );
        })}

        {/* Highlight / Gradient Words */}
        {highlightWords.map((word, wIdx) => {
          const letters = word.split('');
          return (
            <span key={`hw-${wIdx}`} className="kinetic-word-mask gradient-mask">
              <span className="kinetic-word-inner gradient-text">
                {letters.map((char, cIdx) => {
                  const delay = 0.12 + globalIndex * 0.032;
                  globalIndex++;
                  return (
                    <span
                      key={`hc-${cIdx}`}
                      className={`kinetic-char highlight-char ${inView ? 'revealed' : ''}`}
                      style={{
                        transitionDelay: `${delay}s`,
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
              <span className="word-spacer">&nbsp;</span>
            </span>
          );
        })}
      </h2>

      {/* Optional Description / Subtext */}
      {description && (
        <p className={`section-desc kinetic-desc ${inView ? 'revealed' : ''}`}>
          {description}
        </p>
      )}

      <style>{`
        .kinetic-header {
          position: relative;
          margin-bottom: 3.8rem;
          user-select: none;
        }

        .kinetic-header.align-center {
          text-align: center;
        }

        .kinetic-header.align-left {
          text-align: left;
        }

        /* Subtitle Pill Stagger */
        .kinetic-subtitle-wrap {
          overflow: hidden;
          display: inline-block;
          margin-bottom: 0.6rem;
        }

        .kinetic-subtitle {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          opacity: 0;
          transform: translateY(18px) scale(0.96);
          filter: blur(4px);
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.65s ease;
          transition-delay: 0.05s;
        }

        .kinetic-subtitle.revealed {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        .subtitle-bracket {
          color: var(--accent, #00fff9);
          opacity: 0.8;
          font-weight: 800;
        }

        /* Title & Word Masks */
        .kinetic-title {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: baseline;
          line-height: 1.15;
          margin: 0;
          padding: 0;
        }

        .align-left .kinetic-title {
          justify-content: flex-start;
        }

        .kinetic-word-mask {
          display: inline-flex;
          overflow: hidden;
          vertical-align: top;
          padding: 0.1em 0;
          margin: -0.1em 0;
        }

        .kinetic-word-inner {
          display: inline-flex;
          align-items: baseline;
        }

        .word-spacer {
          display: inline;
        }

        /* Kinetic Characters */
        .kinetic-char {
          display: inline-block;
          opacity: 0;
          transform: translateY(115%) rotate(4deg);
          filter: blur(6px);
          transition: transform 0.72s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.5s ease;
          will-change: transform, opacity, filter;
        }

        .kinetic-char.revealed {
          opacity: 1;
          transform: translateY(0) rotate(0deg);
          filter: blur(0);
        }

        .highlight-char {
          filter: drop-shadow(0 0 12px rgba(0, 229, 163, 0.45));
        }

        /* Description Fade */
        .kinetic-desc {
          max-width: 680px;
          margin: 1.2rem auto 0;
          opacity: 0;
          transform: translateY(15px);
          filter: blur(4px);
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.6;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.7s ease;
          transition-delay: 0.45s;
        }

        .kinetic-desc.revealed {
          opacity: 0.9;
          transform: translateY(0);
          filter: blur(0);
        }

        @media (max-width: 768px) {
          .kinetic-header {
            margin-bottom: 2.6rem;
          }
          .kinetic-char {
            /* Slightly faster on mobile for snappy responsiveness */
            transition-duration: 0.55s;
          }
          .kinetic-desc {
            font-size: 0.88rem;
          }
        }
      `}</style>
    </div>
  );
};

export default KineticHeading;
