import React, { useState } from 'react';
import { BookOpen, ExternalLink, Eye, Quote, CheckCircle2, Bookmark, ArrowRight, ChevronRight, X, ArrowLeft, ShieldCheck } from 'lucide-react';
import bookPublishingCertImg from '../assets/certificates/book_publishing_cert.png';

const BOOKS_DATA = [
  {
    id: 'BOOK_01',
    title: 'Latte Love and Painted Promises',
    subtitle: 'A Novel of Contemporary Romance, Artistry & Unexpected Turns',
    tag: 'CONTEMPORARY FICTION',
    author: 'Harsh Ganeshwade',
    date: 'February 2025',
    color: '#00fff9',
    accentGradient: 'linear-gradient(135deg, #09203f 0%, #537895 100%)',
    coverStyle: {
      background: 'linear-gradient(135deg, #111827 0%, #1e293b 50%, #0f172a 100%)',
      borderColor: '#00fff9'
    },
    quote: "In the quiet hum of a bustling café, where canvas meets coffee and unspoken promises linger in the air...",
    excerpt: [
      "Art is not just what you put onto a canvas; it is everything you feel before the brush even touches the surface.",
      "Some encounters are not accidents—they are silent collisions of two worlds looking for a reason to stand still.",
      "A delicate, atmospheric narrative exploring emotional resilience, creative pursuit, and the unwritten chapters of modern relationships."
    ],
    highlights: [
      'Self-Published International Author',
      'Atmospheric World-Building & Character Depth',
      'Available Globally Across Major Digital Distributors'
    ],
    buyUrl: 'https://linktr.ee/harshganeshwade',
    buyLabel: 'ACQUIRE NOVEL (LINKTREE)',
    hasCert: true
  },
  {
    id: 'BOOK_02',
    title: 'A Holistic Guide To Balanced Life',
    subtitle: 'Blueprint for Physical Vitality, Mental Clarity & Cognitive Discipline',
    tag: 'NON-FICTION / SELF-MASTERY',
    author: 'Harsh Ganeshwade',
    date: 'Published Work (Amazon)',
    color: '#fbff00',
    accentGradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    coverStyle: {
      background: 'linear-gradient(135deg, #18181b 0%, #27272a 50%, #09090b 100%)',
      borderColor: '#fbff00'
    },
    quote: "True balance is not passive stillness—it is dynamic equilibrium engineered through intentional habits.",
    excerpt: [
      "Discipline is the bridge between intention and realization. When you master your morning routine, you reclaim control of your cognitive bandwidth.",
      "Health is multi-dimensional: the food you consume, the thoughts you entertain, and the boundaries you defend.",
      "An actionable, structured handbook designed to help high-performers optimize mental focus, physical recovery, and sustainable daily productivity."
    ],
    highlights: [
      'Amazon Kindle Direct Publishing Edition',
      'Holistic Cognitive & Lifestyle Frameworks',
      'Practical Systematized Daily Protocols'
    ],
    buyUrl: 'https://www.amazon.in/dp/B0DS2LG9RH',
    buyLabel: 'BUY ON AMAZON (KINDLE)',
    hasCert: false
  }
];

const BookShowcase = () => {
  const [selectedBookForExcerpt, setSelectedBookForExcerpt] = useState(null);
  const [showCertModal, setShowCertModal] = useState(false);

  return (
    <section id="publications" className="section container book-showcase-section">
      <div className="section-header">
        <span className="section-subtitle">Literary Works & Authorship</span>
        <h2 className="section-title">Published <span className="gradient-text">Books & Works</span></h2>
      </div>

      <div className="books-3d-grid">
        {BOOKS_DATA.map((book) => (
          <div key={book.id} className="book-card-3d cyber-card scanline-container">
            {/* Top Bar */}
            <div className="book-topbar">
              <span className="book-tag" style={{ color: book.color, borderColor: `${book.color}50` }}>
                {book.tag}
              </span>
              <span className="book-date">{book.date}</span>
            </div>

            {/* 3D Book Cover Simulator */}
            <div className="book-cover-stage">
              <div className="book-3d-mockup" style={{ borderColor: book.color }}>
                <div className="book-spine" style={{ background: book.color }}></div>
                <div className="book-front-cover" style={book.coverStyle}>
                  <div className="book-author-ribbon">HARSH GANESHWADE</div>
                  <div className="book-title-block">
                    <h4 className="book-mock-title" style={{ color: book.color }}>{book.title}</h4>
                    <span className="book-mock-sub">{book.subtitle}</span>
                  </div>
                  <div className="book-bottom-ribbon">
                    <span className="ribbon-dots">● ● ●</span>
                    <span className="ribbon-author">OFFICIAL EDITION</span>
                  </div>
                </div>
                <div className="book-pages-side"></div>
              </div>
            </div>

            {/* Book Info Block */}
            <div className="book-info-content">
              <h4 className="book-real-title">{book.title}</h4>
              <p className="book-real-sub">{book.subtitle}</p>

              {/* Quote Box */}
              <div className="book-quote-box" style={{ borderLeftColor: book.color }}>
                <Quote size={14} className="quote-icon" style={{ color: book.color }} />
                <p className="quote-text">"{book.quote}"</p>
              </div>

              {/* Key Bullet Highlights */}
              <ul className="book-highlights-list">
                {book.highlights.map((hl, hIdx) => (
                  <li key={hIdx}>
                    <CheckCircle2 size={13} style={{ color: book.color }} />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>

              {/* Action Triggers */}
              <div className="book-actions">
                <a 
                  href={book.buyUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="book-buy-btn"
                  style={{ background: `${book.color}18`, borderColor: book.color, color: book.color }}
                >
                  <ExternalLink size={14} /> {book.buyLabel}
                </a>

                <button 
                  className="book-excerpt-btn"
                  onClick={() => setSelectedBookForExcerpt(book)}
                >
                  <Bookmark size={14} /> READ EXCERPTS
                </button>

                {book.hasCert && (
                  <button 
                    className="book-cert-btn"
                    onClick={() => setShowCertModal(true)}
                    title="View Publication Certificate"
                  >
                    <Eye size={14} /> CERTIFICATE
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Excerpt Reader Modal */}
      {selectedBookForExcerpt && (
        <div className="excerpt-modal-overlay" onClick={() => setSelectedBookForExcerpt(null)}>
          <div className="excerpt-modal-card cyber-card" onClick={(e) => e.stopPropagation()}>
            <div className="excerpt-modal-header" style={{ borderBottomColor: selectedBookForExcerpt.color }}>
              <div className="excerpt-header-title">
                <BookOpen size={18} style={{ color: selectedBookForExcerpt.color }} />
                <div>
                  <h4>{selectedBookForExcerpt.title}</h4>
                  <span className="excerpt-sub">Selected Excerpt Teasers & Synopsis</span>
                </div>
              </div>
              <button 
                className="excerpt-close-btn" 
                onClick={() => setSelectedBookForExcerpt(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="excerpt-modal-body">
              <div className="excerpt-lead-quote" style={{ borderLeftColor: selectedBookForExcerpt.color }}>
                <Quote size={20} style={{ color: selectedBookForExcerpt.color }} />
                <p>"{selectedBookForExcerpt.quote}"</p>
              </div>

              <div className="excerpt-passages">
                <span className="passages-label">// PASSAGES & CORE THEMES</span>
                {selectedBookForExcerpt.excerpt.map((passage, pIdx) => (
                  <div key={pIdx} className="passage-item">
                    <ChevronRight size={16} className="passage-bullet" style={{ color: selectedBookForExcerpt.color }} />
                    <p>{passage}</p>
                  </div>
                ))}
              </div>

              <div className="excerpt-modal-footer">
                <a 
                  href={selectedBookForExcerpt.buyUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="excerpt-buy-btn"
                  style={{ background: selectedBookForExcerpt.color, color: '#000' }}
                >
                  GET FULL BOOK NOW <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Standalone Publication Certificate Modal */}
      {showCertModal && (
        <div className="excerpt-modal-overlay" onClick={() => setShowCertModal(false)}>
          <div className="excerpt-modal-card cyber-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
            <div className="excerpt-modal-header" style={{ borderBottomColor: 'var(--primary)' }}>
              <div className="excerpt-header-title">
                <ShieldCheck size={18} color="var(--primary)" />
                <div>
                  <h4>Publication Credential</h4>
                  <span className="excerpt-sub">Certificate of Book Publishing // Latte Love and Painted Promises</span>
                </div>
              </div>
              <button 
                className="excerpt-close-btn" 
                onClick={() => setShowCertModal(false)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="excerpt-modal-body" style={{ padding: '1.5rem' }}>
              <div style={{ textAlign: 'center', background: '#000', borderRadius: '4px', padding: '10px', border: '1px solid var(--glass-border)' }}>
                <img 
                  src={bookPublishingCertImg} 
                  alt="Book Publishing Certificate" 
                  style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain', borderRadius: '2px' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  OFFICIALLY REGISTERED PUBLICATION
                </span>
                <button 
                  onClick={() => setShowCertModal(false)}
                  className="cyber-back-btn"
                >
                  <ArrowLeft size={14} /> CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .book-showcase-section {
          margin-top: 5rem;
          margin-bottom: 5rem;
        }

        .books-3d-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 2.5rem;
        }

        .book-card-3d {
          padding: 2rem;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: rgba(10, 16, 22, 0.9);
          border: 1px solid var(--glass-border);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .book-card-3d:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 229, 163, 0.3);
        }

        .book-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .book-tag {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 3px 8px;
          border: 1px solid;
          border-radius: 3px;
          background: rgba(0, 0, 0, 0.4);
        }

        .book-date {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          color: var(--text-secondary);
          opacity: 0.8;
        }

        /* 3D Book Cover Stage */
        .book-cover-stage {
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
          padding: 1.5rem 0;
        }

        .book-3d-mockup {
          width: 220px;
          height: 290px;
          position: relative;
          transform: rotateY(-18deg) rotateX(8deg);
          transform-style: preserve-3d;
          box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 229, 163, 0.15);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
          border-radius: 3px 8px 8px 3px;
          cursor: pointer;
        }

        .book-card-3d:hover .book-3d-mockup {
          transform: rotateY(-6deg) rotateX(2deg) scale(1.04);
          box-shadow: 20px 25px 40px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 229, 163, 0.3);
        }

        .book-spine {
          position: absolute;
          left: 0;
          top: 0;
          width: 14px;
          height: 100%;
          border-radius: 3px 0 0 3px;
          opacity: 0.8;
          box-shadow: inset -2px 0 5px rgba(0,0,0,0.6);
        }

        .book-front-cover {
          position: absolute;
          inset: 0;
          left: 10px;
          border-radius: 0 6px 6px 0;
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid;
          background-size: cover;
          box-shadow: inset 3px 0 8px rgba(0,0,0,0.8);
        }

        .book-author-ribbon {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          letter-spacing: 2px;
          color: #94a3b8;
          text-align: center;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 6px;
        }

        .book-title-block {
          text-align: center;
          margin: auto 0;
        }

        .book-mock-title {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 0.4rem;
          text-shadow: 0 2px 10px rgba(0,0,0,0.8);
        }

        .book-mock-sub {
          font-size: 0.68rem;
          color: #cbd5e1;
          display: block;
          line-height: 1.3;
          opacity: 0.85;
        }

        .book-bottom-ribbon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-heading);
          font-size: 0.58rem;
          color: #64748b;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 6px;
          letter-spacing: 1px;
        }

        .book-pages-side {
          position: absolute;
          right: -10px;
          top: 6px;
          width: 10px;
          height: calc(100% - 12px);
          background: repeating-linear-gradient(to bottom, #d1d5db, #d1d5db 2px, #9ca3af 2px, #9ca3af 4px);
          transform: rotateY(90deg);
          transform-origin: left;
          box-shadow: inset 0 0 4px rgba(0,0,0,0.5);
        }

        /* Info Content */
        .book-info-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .book-real-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .book-real-sub {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .book-quote-box {
          background: rgba(0, 0, 0, 0.4);
          border-left: 3px solid;
          padding: 0.8rem 1rem;
          border-radius: 0 4px 4px 0;
          display: flex;
          gap: 0.6rem;
          align-items: flex-start;
        }

        .quote-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .quote-text {
          font-size: 0.82rem;
          font-style: italic;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .book-highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .book-highlights-list li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        /* Buttons */
        .book-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 0.5rem;
        }

        .book-buy-btn, .book-excerpt-btn, .book-cert-btn {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.55rem 0.9rem;
          border-radius: 4px;
          border: 1px solid var(--glass-border);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .book-buy-btn:hover {
          filter: brightness(1.2);
          box-shadow: 0 0 12px currentColor;
          transform: translateY(-2px);
        }

        .book-excerpt-btn {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
        }

        .book-excerpt-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
          border-color: #fff;
        }

        .book-cert-btn {
          background: rgba(0, 229, 163, 0.05);
          color: var(--primary);
        }

        .book-cert-btn:hover {
          background: var(--primary);
          color: #000;
        }

        /* Excerpt Modal */
        .excerpt-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          z-index: 10001;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease-out;
        }

        .excerpt-modal-card {
          width: 650px;
          max-width: 95vw;
          max-height: 85vh;
          background: #090e14;
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          overflow-y: auto;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9);
        }

        .excerpt-modal-header {
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid;
        }

        .excerpt-header-title {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .excerpt-header-title h4 {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          color: var(--text-primary);
        }

        .excerpt-sub {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .excerpt-close-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.2s;
        }

        .excerpt-close-btn:hover {
          color: #ef4444;
        }

        .excerpt-modal-body {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .excerpt-lead-quote {
          background: rgba(0, 0, 0, 0.5);
          border-left: 3px solid;
          padding: 1.2rem;
          border-radius: 0 4px 4px 0;
          font-size: 0.95rem;
          font-style: italic;
          line-height: 1.6;
          color: #e2e8f0;
          display: flex;
          gap: 0.8rem;
        }

        .excerpt-passages {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .passages-label {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          color: var(--primary);
          letter-spacing: 1px;
        }

        .passage-item {
          display: flex;
          gap: 0.8rem;
          background: rgba(255, 255, 255, 0.02);
          padding: 1rem;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .passage-bullet {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .passage-item p {
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .excerpt-modal-footer {
          margin-top: 1rem;
          display: flex;
          justify-content: flex-end;
        }

        .excerpt-buy-btn {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.8rem 1.4rem;
          border-radius: 4px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
        }

        .excerpt-buy-btn:hover {
          filter: brightness(1.15);
          box-shadow: 0 0 20px var(--primary-glow);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default BookShowcase;
