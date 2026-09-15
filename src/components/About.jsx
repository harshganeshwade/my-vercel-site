import React from 'react'
import profileImg from '../assets/profile.jpg'

const About = () => {
  return (
    <section id="about" className="section container">
      <div className="section-header">
        <span className="section-subtitle">Biography</span>
        <h2 className="section-title">Who is <span className="gradient-text">Harsh?</span></h2>
      </div>

      <div className="about-grid">
        <div className="about-image-container">
          <div className="target-lock">
            <span></span><span></span><span></span><span></span>
          </div>
          <div className="about-image glass-card">
            <img src={profileImg} alt="Harsh Ganeshwade" className="profile-img" />
          </div>
        </div>

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
                <span className="stat-num" style={{ color: '#00fff9' }}>2</span>
                <span className="stat-label">Internships / Roles</span>
                <div className="stat-bar"><div className="stat-fill" style={{ width: '50%', background: '#00fff9', boxShadow: '0 0 10px #00fff9' }}></div></div>
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

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.8fr;
          gap: 4rem;
          align-items: center;
        }

        .about-image-container {
          position: relative;
          padding: 20px;
          max-width: 360px;
          margin: 0 auto;
        }

        .target-lock span {
          position: absolute;
          width: 30px;
          height: 30px;
          border-color: var(--primary);
          border-style: solid;
          z-index: 10;
        }

        .target-lock span:nth-child(1) { top: 0; left: 0; border-width: 2px 0 0 2px; }
        .target-lock span:nth-child(2) { top: 0; right: 0; border-width: 2px 2px 0 0; }
        .target-lock span:nth-child(3) { bottom: 0; left: 0; border-width: 0 0 2px 2px; }
        .target-lock span:nth-child(4) { bottom: 0; right: 0; border-width: 0 2px 2px 0; }

        .about-image {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 6px;
          border: 1px solid var(--primary-glow);
          box-shadow: 0 0 25px rgba(0, 229, 163, 0.15);
        }

        .profile-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center 15%;
            filter: grayscale(0.8) contrast(1.15) brightness(0.9);
            transition: var(--transition);
        }

        .about-image:hover .profile-img {
          filter: grayscale(0) contrast(1.05) brightness(1);
          transform: scale(1.03);
        }

        .about-text-wrapper {
          padding: 2rem;
          padding-top: 3rem;
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

                @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .about-image-container {
            max-width: 240px;
            margin: 0 auto;
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
