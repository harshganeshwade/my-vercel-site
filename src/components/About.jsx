import React from 'react'
import KineticHeading from './KineticHeading'

const About = () => {
  return (
    <section id="about" className="section container">
      <KineticHeading 
        subtitle="Biography"
        title="Who is"
        highlight="Harsh?"
      />

      <div className="about-centered-container">
        <div className="about-text-wrapper terminal-window scanline-container">
          <div className="terminal-header-text">harsh@cyber-os:~/bio$ cat identity.txt</div>
          <div className="about-text">
            <p className="typing-effect">
              {'>'} B.Tech CSE student at DKTE with a deep interest in cybersecurity, VAPT, and technology-driven systems. Focused on developing strong technical fundamentals while building projects that solve practical security problems.
            </p>
            <p>
              {'>'} Alongside engineering, I write fiction — which has trained me to think structurally, analyze human behavior, and build layered narratives. That same analytical thinking drives how I approach security challenges, threat modeling, and system architecture.
            </p>

            <div className="about-stats cyber-grid">
              <div className="stat-card">
                <span className="stat-num" style={{ color: '#00fff9' }}>3</span>
                <span className="stat-label">Professional Roles</span>
                <div className="stat-bar"><div className="stat-fill" style={{ width: '75%', background: '#00fff9', boxShadow: '0 0 10px #00fff9' }}></div></div>
              </div>
              <div className="stat-card">
                <span className="stat-num" style={{ color: '#fbff00' }}>14+</span>
                <span className="stat-label">Projects</span>
                <div className="stat-bar"><div className="stat-fill" style={{ width: '90%', background: '#fbff00', boxShadow: '0 0 10px #fbff00' }}></div></div>
              </div>
              <div className="stat-card">
                <span className="stat-num" style={{ color: '#ff00c1' }}>16+</span>
                <span className="stat-label">Certifications</span>
                <div className="stat-bar"><div className="stat-fill" style={{ width: '95%', background: '#ff00c1', boxShadow: '0 0 10px #ff00c1' }}></div></div>
              </div>
            </div>

            <div className="about-extra">
              <div className="extra-item">
                <h5 className="cyber-label">/interests</h5>
                <p>Published Author (2 Books), Swimming, Playing Football, Threat Analysis</p>
              </div>
              <div className="extra-item">
                <h5 className="cyber-label">/languages</h5>
                <p>English, Hindi, Marathi</p>
              </div>
            </div>


          </div>
        </div>
      </div>

      <style>{`
        .section-header {
          margin-bottom: 4rem;
          text-align: center;
        }

        .section-subtitle {
          color: var(--primary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.8rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
        }

        .about-centered-container {
          max-width: 860px;
          margin: 0 auto;
          width: 100%;
        }

        .about-text-wrapper {
          padding: 2.2rem 2.5rem;
          padding-top: 3.2rem;
          width: 100%;
        }

        .terminal-header-text {
          position: absolute;
          top: -22px;
          left: 60px;
          font-size: 0.75rem;
          color: #888;
          font-family: var(--font-heading);
        }

        .about-text p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          padding: 1rem;
          border: 1px solid var(--glass-border);
          border-radius: 4px;
        }

        .stat-num {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary);
          display: block;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #888;
          text-transform: uppercase;
        }

        .stat-bar {
          height: 4px;
          background: rgba(0, 229, 163, 0.1);
          margin-top: 0.5rem;
          border-radius: 2px;
        }

        .stat-fill {
          height: 100%;
        }

        .cyber-label {
          font-size: 0.8rem;
          color: var(--accent) !important;
          margin-bottom: 0.5rem;
        }

        .cyber-btn {
          border-radius: 4px !important;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .about-text-wrapper {
            padding: 1.5rem;
            padding-top: 2.5rem;
          }
        }

        @media (max-width: 580px) {
          .about-stats {
            grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
            gap: 0.8rem;
          }
          .stat-card {
            padding: 0.75rem;
          }
          .stat-num {
            font-size: 1.25rem;
          }
          .stat-label {
            font-size: 0.68rem;
          }
          .about-text p {
            font-size: 0.88rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About
