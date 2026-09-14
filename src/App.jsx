import React from 'react'
import { Github, Linkedin } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import BookShowcase from './components/BookShowcase'
import Contact from './components/Contact'
import MatrixBackground from './components/MatrixBackground'
import CyberCLI from './components/CyberCLI'
import CustomCursor from './components/CustomCursor'
import SmoothScroll from './components/SmoothScroll'
import './PrintStyles.css'

function App() {
  return (
    <SmoothScroll>
      <div className="app">
        <CustomCursor />
        <MatrixBackground />
        <div className="bg-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2" style={{ background: 'radial-gradient(circle, rgba(0, 255, 65, 0.1) 0%, transparent 70%)' }}></div>
        </div>

        <Navbar />

        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <BookShowcase />
          <Contact />
        </main>

        <CyberCLI />

      <footer className="container footer">
        <div className="footer-top">
          <div className="footer-status">
            <span className="pulse-dot"></span>
            <span className="status-text">NODE STATUS: <strong>ONLINE</strong> // SEC_LEVEL: <strong>ALPHA</strong></span>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="return-top-btn"
            title="Return to top"
          >
            ▲ RETURN_TO_ROOT
          </button>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-main">
          <div className="footer-brand">
            <span className="brand-logo">HARSH GANESHWADE</span>
            <p className="brand-sub">Cybersecurity Analyst • Purple Team • VAPT Engineer • Published Author</p>
          </div>

          <div className="footer-social">
            <a href="https://github.com/harshganeshwade" target="_blank" rel="noreferrer" className="footer-link" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/harshganeshwade/" target="_blank" rel="noreferrer" className="footer-link" title="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Harsh Ganeshwade. Encrypted & Distributed via Cloud.</p>
        </div>
      </footer>

      <style>{`
        .footer {
          padding: 3rem 0 2rem;
          border-top: 1px solid var(--glass-border);
          margin-top: 5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-heading);
          font-size: 0.8rem;
        }

        .footer-status {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--text-secondary);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary-glow);
          animation: beaconPulse 2s infinite;
        }

        @keyframes beaconPulse {
          0% { transform: scale(0.9); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 1; box-shadow: 0 0 14px var(--primary); }
          100% { transform: scale(0.9); opacity: 0.7; }
        }

        .return-top-btn {
          background: rgba(0, 255, 65, 0.05);
          border: 1px solid var(--glass-border);
          color: var(--primary);
          padding: 0.4rem 0.9rem;
          border-radius: 3px;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          cursor: pointer;
          transition: var(--transition);
        }

        .return-top-btn:hover {
          background: var(--primary);
          color: #000;
          box-shadow: 0 0 12px var(--primary-glow);
          transform: translateY(-2px);
        }

        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--glass-border), transparent);
          width: 100%;
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .brand-logo {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-primary);
          letter-spacing: 1px;
        }

        .brand-sub {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }

        .footer-social {
          display: flex;
          gap: 1.5rem;
        }

        .footer-link {
          color: var(--text-secondary);
          opacity: 0.7;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid transparent;
        }

        .footer-link:hover {
          opacity: 1;
          color: var(--primary);
          border-color: var(--primary);
          background: rgba(0, 255, 65, 0.05);
          transform: translateY(-3px);
          filter: drop-shadow(0 0 8px var(--primary-glow));
        }

        .footer-bottom {
          text-align: center;
          border-top: 1px dashed rgba(255, 255, 255, 0.05);
          padding-top: 1.5rem;
        }

        .footer-bottom p {
          opacity: 0.5;
          font-size: 0.8rem;
          font-family: var(--font-heading);
        }

        @media (max-width: 600px) {
          .footer-top, .footer-main {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
        }
      `}</style>
      </div>
    </SmoothScroll>
  )
}

export default App
