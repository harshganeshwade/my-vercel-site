import React from 'react'
import { Layout, Terminal, Shield, Cpu, Database, Brain, Server, Layers } from 'lucide-react'

const Skills = () => {
  const skills = [
    {
      title: 'Cybersecurity & VAPT',
      icon: <Shield className="skill-icon" />,
      items: [
        'VAPT & Penetration Testing',
        'Burp Suite & Metasploit',
        'Nmap, Wireshark & Packet Inspection',
        'IDS/IPS Systems & Spoof Detection',
        'SOC, SIEM & Incident Response',
        'OWASP Top 10 & Web Security'
      ],
      color: '#fbff00' // Yellow/Gold
    },
    {
      title: 'Programming Languages',
      icon: <Terminal className="skill-icon" />,
      items: [
        'Python (Core, OOP, REST APIs)',
        'Java & Spring Boot',
        'C & C++',
        'JavaScript & TypeScript',
        'HTML5 & CSS3',
        'PL/SQL & Bash'
      ],
      color: '#00ff41' // Green
    },
    {
      title: 'AI / ML & Computer Vision',
      icon: <Brain className="skill-icon" />,
      items: [
        'Applied LLM Integration (Gemini API)',
        'RAG-style Grounding & Prompt Engineering',
        'Computer Vision (OpenCV & Liveness)',
        'Random Forest & Classification',
        'Explainable AI (SHAP)',
        'Pandas, NumPy, Scikit-learn'
      ],
      color: '#00fff9' // Cyan
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers className="skill-icon" />,
      items: [
        'React & Next.js',
        'Node.js & Express',
        'Spring Boot',
        'Socket.IO',
        'D3.js & Cytoscape.js',
        'OpenCV'
      ],
      color: '#ff00c1' // Magenta
    },
    {
      title: 'Databases & Cloud',
      icon: <Database className="skill-icon" />,
      items: [
        'MySQL & PL/SQL',
        'MongoDB',
        'Firebase / Cloud Firestore',
        'Schema Design & Database Modeling',
        'SQL CTEs, Joins & Optimization'
      ],
      color: '#ffa500' // Orange
    },
    {
      title: 'DevOps, Tools & Systems',
      icon: <Server className="skill-icon" />,
      items: [
        'Docker & CI/CD',
        'Git & GitHub Version Control',
        'Kali Linux, Ubuntu & Windows',
        'VSCode & AntiGravity',
        'Jupyter Notebook & Litmus',
        'PRD, TRD & API Documentation'
      ],
      color: '#a855f7' // Purple
    }
  ]

  return (
    <section id="skills" className="section container">
      <div className="section-header">
        <span className="section-subtitle">Expertise</span>
        <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card cyber-card scanline-container">
            <div className="skill-header">
              <div className="skill-icon-box" style={{ borderColor: skill.color, color: skill.color, background: `${skill.color}10` }}>
                {skill.icon}
              </div>
              <div className="skill-info">
                <span className="skill-status" style={{ color: skill.color }}>MOD_ID: 0x{index}7A</span>
                <h3>{skill.title}</h3>
              </div>
            </div>
            <div className="skill-body">
              {skill.items.map((item, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-label-wrap">
                    <span className="skill-name">{item}</span>
                  </div>
                  <div className="skill-progress" style={{ borderColor: `${skill.color}30` }}>
                    <div className="skill-progress-fill" style={{
                      width: `${75 + ((i % 4) * 6)}%`,
                      background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                      boxShadow: `0 0 10px ${skill.color}44`
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          padding: 2rem;
          border-radius: 4px;
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 1rem;
        }

        .skill-icon-box {
          color: var(--primary);
          background: rgba(0, 255, 65, 0.05);
          padding: 10px;
          border-radius: 4px;
          border: 1px solid var(--primary-glow);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-status {
          font-size: 0.65rem;
          color: var(--primary);
          opacity: 0.6;
          font-family: var(--font-heading);
          display: block;
        }

        .skill-info h3 {
          font-size: 1.3rem;
          letter-spacing: 1px;
          color: var(--text-primary);
        }

        .skill-item {
          margin-bottom: 1.1rem;
        }

        .skill-label-wrap {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.4rem;
          font-size: 0.88rem;
          font-family: var(--font-heading);
        }

        .skill-name {
          color: var(--text-secondary);
        }

        .skill-progress {
          height: 6px;
          background: rgba(0, 255, 65, 0.05);
          border-radius: 3px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
        }

        .skill-progress-fill {
          height: 100%;
          position: relative;
        }

        .skill-progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          animation: progress-slide 2s infinite;
        }

        @keyframes progress-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}

export default Skills
