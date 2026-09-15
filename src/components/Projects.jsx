import React, { useState, useEffect } from 'react'
import { ExternalLink, Github, ArrowUpRight, Shield, Brain, Layers, Eye, X, ArrowLeft, Terminal, Cpu, CheckCircle2, Lock, Radio } from 'lucide-react'
import idsIpsImg from '../assets/ids_ips.png'
import librarySystemImg from '../assets/library_system.png'
import chatifyImg from '../assets/projects/chatify.png'
import cadguardImg from '../assets/projects/cadguard.png'
import airdrawImg from '../assets/projects/airdraw.png'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [selectedProject, setSelectedProject] = useState(null)

  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const projects = [
    {
      id: 'PID_001',
      title: 'BankGuard AI',
      subtitle: 'Enterprise Fraud Detection & Threat Intelligence Platform',
      category: 'CYBERSECURITY',
      tags: ['Python', 'FastAPI', 'Random Forest', 'SHAP', 'D3.js', 'React'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
      github: 'https://github.com/harshganeshwade/bankguard.ai',
      color: '#00e5a3',
      status: 'ENTERPRISE_GRADE',
      techSpecs: ['<10ms Inference', 'SHAP Explainability', 'D3.js Money Mule Graph', 'Zero-Knowledge Proof'],
      description: 'Next-generation AI-driven banking fraud detection system combining high-throughput ML classification with explainable AI and money mule network visualization.',
      architecture: {
        problem: 'Financial networks suffer from sophisticated multi-hop money laundering and high-velocity credit fraud with severe false-positive penalties.',
        mechanism: 'Employs an optimized Random Forest ensemble for sub-10ms transaction scoring, SHAP tree explainability decompositions for compliance audits, and D3.js directed graph clustering to trace money mule accounts.',
        threatModel: 'Mitigates Account Takeover (ATO), synthetic identity fraud, transaction velocity anomalies, and distributed money laundering rings.',
        coreStack: 'FastAPI, Python, Scikit-learn, SHAP, TypeScript, React, D3.js, Firestore, Bun'
      }
    },
    {
      id: 'PID_002',
      title: 'Protocol SIFT Guardian',
      subtitle: 'Autonomous Incident Response & DFIR Agent (SANS Hackathon)',
      category: 'CYBERSECURITY',
      tags: ['Python', 'Autonomous Agents', 'DFIR', 'MITRE ATT&CK', 'SIFT'],
      image: idsIpsImg,
      github: 'https://github.com/harshganeshwade/-sift-guardian-',
      color: '#00fff9',
      status: 'HACKATHON_HONORS',
      techSpecs: ['Autonomous Triage', 'Self-Correction Loops', 'MITRE ATT&CK Mapping', 'Evidence Custody'],
      description: 'Autonomous cyber incident response agent built for the SANS Institute Find Evil! Hackathon, featuring self-healing reasoning loops and automated forensics.',
      architecture: {
        problem: 'Manual digital forensics and incident response (DFIR) triage is slow, prone to human fatigue during high-severity breaches, and risks corrupting digital evidence.',
        mechanism: 'Orchestrates multi-agent planning loops (Planner, Investigator, Self-Correction) to ingest forensic telemetry, parse memory dumps, map adversary tactics to MITRE ATT&CK, and generate executive post-mortems.',
        threatModel: 'Defends against Advanced Persistent Threats (APTs), credential dumping, lateral movement, and unauthorized persistence mechanisms.',
        coreStack: 'Python 3.8+, SIFT Workstation Tooling, AsyncIO, Structured Agents, MCP Server Protocol'
      }
    },
    {
      id: 'PID_003',
      title: 'SentinelAI',
      subtitle: 'Autonomous Security Investigation & Splunk SIEM Copilot',
      category: 'CYBERSECURITY',
      tags: ['FastAPI', 'Splunk SIEM', 'AI Agents', 'SOC Automation', 'MITRE'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
      github: 'https://github.com/harshganeshwade/SentinelAI',
      color: '#ff00c1',
      status: 'SOC_INTEGRATED',
      techSpecs: ['Splunk REST API', 'Root Cause Analysis', 'MITRE Matrix', 'Automated Playbooks'],
      description: 'Autonomous security copilot for Splunk SIEM environments, delivering automated alert correlation, root cause analysis, and instant defensive playbooks.',
      architecture: {
        problem: 'Security Operations Centers (SOCs) face alert fatigue from thousands of daily SIEM alarms, leading to delayed dwell time on genuine intrusions.',
        mechanism: 'Integrates directly into Splunk via REST API to pull raw index streams, automatically clusters related telemetry, executes root cause reasoning, and recommends containment steps.',
        threatModel: 'Neutralizes brute-force access attacks, privilege escalation, suspicious outbound C2 beacons, and ransomware staging activity.',
        coreStack: 'FastAPI, Python, Splunk Enterprise SDK, React, Tailwind CSS, REST Telemetry'
      }
    },
    {
      id: 'PID_004',
      title: 'CyberGuard Lite',
      subtitle: 'Automated Cybersecurity Posture & Compliance Health Auditor',
      category: 'CYBERSECURITY',
      tags: ['Python', 'FastAPI', 'VAPT', 'Security Audit', 'Risk Scoring'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
      github: 'https://github.com/harshganeshwade/CyberGuardLite',
      color: '#fbff00',
      status: 'VERIFIED_TOOL',
      techSpecs: ['VAPT Assessment Engine', 'Zero-Complexity Auditing', 'Automated Scorecards', 'Mitigation Roadmaps'],
      description: 'Full-stack cybersecurity health checker for small businesses, delivering rapid vulnerability exposure auditing, risk scoring, and tailored mitigation steps.',
      architecture: {
        problem: 'Small startups and clinics lack dedicated security teams and cannot afford costly enterprise assessment suites.',
        mechanism: 'Executes lightweight rule-based vulnerability heuristics, evaluates external attack surface vectors, calculates a normalized Risk Score, and outputs human-readable remediation roadmaps.',
        threatModel: 'Identifies misconfigured access rules, outdated dependencies, open network ports, and insecure credential management.',
        coreStack: 'FastAPI, Python, Pydantic, SQLite / PostgreSQL, JWT Auth, Jinja2 / React'
      }
    },
    {
      id: 'PID_005',
      title: 'WiFi Network Sentinel',
      subtitle: 'Subnet Packet Inspector & Rogue Device Detection Sentinel',
      category: 'CYBERSECURITY',
      tags: ['Python', 'Flask', 'Scapy / ARP', 'Network Security', 'OUI Lookup'],
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
      github: 'https://github.com/harshganeshwade/wifi-network-monitor',
      color: '#00fff9',
      status: 'ACTIVE_SENTINEL',
      techSpecs: ['20s ARP Sweep', 'MAC OUI Fingerprinting', 'Rogue Device Alerts', 'Session Isolation'],
      description: 'Live IPv4 network surveillance system that continuously scans local subnets, identifies connected hardware vendors, and triggers instant alerts on unauthorized devices.',
      architecture: {
        problem: 'Unmanaged rogue devices and Evil Twin / MITM access points quietly connecting to private wireless networks.',
        mechanism: 'Runs periodic non-disruptive ARP packet sweeps, queries IEEE OUI databases for hardware vendor identification, matches against whitelisted devices, and dispatches containment alerts.',
        threatModel: 'Detects ARP spoofing, unauthorized rogue endpoints, Evil Twin rogue APs, and unapproved hardware.',
        coreStack: 'Python, Flask, Scapy, SQLite, HTML5 Dashboard, Network Sockets'
      }
    },
    {
      id: 'PID_006',
      title: 'Ghost Notes',
      subtitle: 'Zero-Knowledge Ephemeral Encrypted Communication Vault',
      category: 'CYBERSECURITY',
      tags: ['Node.js', 'Express', 'AES-256', 'Client Crypto', 'React'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
      github: 'https://github.com/harshganeshwade/Ghost-Notes',
      color: '#9d00ff',
      status: 'ZERO_KNOWLEDGE',
      techSpecs: ['Client-side AES-256', 'Zero Plaintext Server', 'Burn-after-Reading', 'Time-Locked Expiry'],
      description: 'Encrypted, self-destructing secret sharing platform where payloads are encrypted in the client browser before reaching the server, ensuring true zero-knowledge privacy.',
      architecture: {
        problem: 'Sensitive secrets, API keys, and passwords frequently leaked across unencrypted chat channels and permanent logs.',
        mechanism: 'Implements Web Crypto API to generate random symmetric AES-GCM keys client-side. The server stores only encrypted ciphertext hashes with strict TTL expiration and burn-after-reading single-view triggers.',
        threatModel: 'Prevents man-in-the-middle interception, database dump exfiltration, and server-side secret retention.',
        coreStack: 'Node.js, Express, Web Cryptography API, SQLite, React, Vite'
      }
    },
    {
      id: 'PID_007',
      title: 'CADGuard AI',
      subtitle: 'Automated Blueprint & Technical CAD Security Rule Engine',
      category: 'AI & VISION',
      tags: ['Python', 'FastAPI', 'CAD Parsing', 'Rule Engine', 'AI Scoring'],
      image: cadguardImg,
      github: 'https://github.com/harshganeshwade/CADGuard-AI',
      color: '#ffa500',
      status: 'AI_VERIFIED',
      techSpecs: ['Automated Rule Engine', 'Design Vulnerability Check', 'Scoring Model', 'Structured Reports'],
      description: 'AI-driven technical CAD design validator that scans engineering blueprints against regulatory compliance rules and security tolerances.',
      architecture: {
        problem: 'Engineering and industrial blueprints often have design tolerance violations or specification defects that cause costly physical failures.',
        mechanism: 'Processes geometric and metadata inputs through an automated rule engine, evaluates structural risk vectors, and outputs actionable technical diagnostic scorecards.',
        threatModel: 'Catches manufacturing flaw vulnerabilities, spec deviations, and safety compliance failures before physical production.',
        coreStack: 'FastAPI, Python, Custom Rule Engine, React, Tailwind CSS, Vite'
      }
    },
    {
      id: 'PID_008',
      title: 'ThrottleIQ',
      subtitle: 'Real-Time Driving Telemetry & Behavioral Analytics Engine',
      category: 'FULL STACK',
      tags: ['React Native', 'Expo', 'IoT Sensors', 'Accelerometer', 'Geofencing', 'Mobile'],
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop',
      github: 'https://github.com/harshganeshwade/ThrottleIQ',
      color: '#00fff9',
      status: 'IOT_TELEMETRY',
      techSpecs: ['3-Axis Accelerometer', 'GPS Velocity Sampling', 'Dynamic Ride Scoring', 'Offline-First Vault'],
      description: 'Mobile telematics engine analyzing real-time GPS motion vectors and 3-axis accelerometer G-forces to detect aggressive maneuvers and compute driver safety scores.',
      architecture: {
        problem: 'Excessive road accidents caused by aggressive driving without accessible, real-time vehicular telematics.',
        mechanism: 'Hooks directly into hardware 3-axis accelerometer and GPS streams at high frequency, processes velocity shifts through a specialized RideAnalyzer scoring heuristic, and renders speed performance curves.',
        threatModel: 'Enforces local-first telemetry storage in device AsyncStorage, preventing unauthorized vehicular route tracking leaks.',
        coreStack: 'React Native, Expo, Accelerometer API, Location Geofencing, JavaScript, AsyncStorage'
      }
    },
    {
      id: 'PID_009',
      title: 'Finger Galaxy Generator',
      subtitle: 'Real-Time CV Hand-Tracking Cosmic Simulation Engine',
      category: 'AI & VISION',
      tags: ['JavaScript', 'MediaPipe', 'Computer Vision', 'Particle Physics', 'WebGL'],
      image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=800&auto=format&fit=crop',
      github: 'https://github.com/harshganeshwade/Finger-Galaxy',
      color: '#00fff9',
      status: 'CV_INNOVATION',
      techSpecs: ['Zero-Hardware CV', 'Real-Time Landmark Mesh', 'N-Body Gravitation', '60 FPS Particle Engine'],
      description: 'Touchless gesture interface using webcam computer vision to manipulate celestial galaxies, gravitational black holes, and cosmic particle explosions in real-time.',
      architecture: {
        problem: 'Traditional human-computer interactions are locked to physical hardware (mice/keyboards), lacking immersive contactless gesture control.',
        mechanism: 'Tracks 21 3D hand landmarks via MediaPipe at 60 FPS, computes multi-finger distance vectors to calculate gesture states, and feeds velocity vectors into an N-body gravitational particle simulator.',
        threatModel: 'Engineered with client-side only video processing—zero camera frames leave the client machine, guaranteeing user biometric privacy.',
        coreStack: 'JavaScript ES Modules, MediaPipe Hands, HTML5 Canvas / WebGL, Custom Physics Engine'
      }
    },
    {
      id: 'PID_010',
      title: 'AirDraw',
      subtitle: 'Contactless AI Air Canvas & Gesture Whiteboard',
      category: 'AI & VISION',
      tags: ['React', 'MediaPipe', 'Webcam Vision', 'Canvas API', 'Vite'],
      image: airdrawImg,
      github: 'https://github.com/harshganeshwade/airdraw',
      color: '#00e5a3',
      status: 'INTERACTIVE_AI',
      techSpecs: ['In-Air Gesture Drawing', 'Real-time Landmark Tracking', 'Custom Stroke Buffer', 'Touchless UI'],
      description: 'Contactless virtual drawing suite that turns webcam hand motions into smooth digital artwork without needing physical touch or styluses.',
      architecture: {
        problem: 'Need for sanitary, touchless presentation and collaborative drawing interfaces for smart classrooms and sterile environments.',
        mechanism: 'Calculates index-thumb pinch vectors to toggle drawing states, applies bezier stroke smoothing over fingertip coordinates, and renders real-time digital paint layers onto an HTML5 canvas.',
        threatModel: 'Client-side processing ensures zero biometric video retention.',
        coreStack: 'React 19, Vite, MediaPipe Hand Tracking, HTML5 Canvas API, Custom Hooks'
      }
    },
    {
      id: 'PID_011',
      title: 'SkillCred AI',
      subtitle: 'AI-Powered Codebase Ingestion & Proof-of-Skill Audit Engine',
      category: 'AI & VISION',
      tags: ['Python', 'FastAPI', 'GitHub API', 'AST Parsing', 'Verification'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
      github: 'https://github.com/harshganeshwade/SkillCred-AI',
      color: '#fbff00',
      status: 'CODE_VERIFIER',
      techSpecs: ['GitHub Telemetry Ingestion', 'AST Syntax Analysis', 'Commit Velocity Metrics', 'Skill Proof Score'],
      description: 'Automated developer capability auditor that verifies resume skill claims by ingesting public GitHub repositories and performing AST syntax and commit analysis.',
      architecture: {
        problem: 'Resumes suffer from inflated, unverified skill claims that waste hundreds of hours during technical hiring screening.',
        mechanism: 'Ingests public repositories via GitHub REST API, constructs Abstract Syntax Trees (AST) to measure true language usage complexity, audits commit velocity, and computes a verified Credibility Score.',
        threatModel: 'Detects copied/forked repositories without genuine contributions and flags hallucinated skill keywords.',
        coreStack: 'Python, FastAPI, GitHub API, PyPDF2, AST Analyzer, Pydantic'
      }
    },
    {
      id: 'PID_012',
      title: 'CollaboraX',
      subtitle: 'Multi-Tenant Student Project Collaboration Platform',
      category: 'FULL STACK',
      tags: ['Node.js', 'Express', 'SQLite', 'Bcrypt', 'RBAC', 'EJS'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
      github: 'https://github.com/harshganeshwade/CollaboraX',
      color: '#ff00c1',
      status: 'SECURE_HUB',
      techSpecs: ['Bcrypt Hashed Auth', 'RBAC Permissions', 'Resource Sharing Vault', 'Join Request Workflows'],
      description: 'Full-stack engineering team workspace featuring secure authentication, project task delegation, join request workflows, and repository storage.',
      architecture: {
        problem: 'Engineering students struggle to find skilled project collaborators and securely share code assets within campus ecosystems.',
        mechanism: 'Provides authenticated project creation, skill-tag matching, role-based join requests, task tracking boards, and secure file uploads with sanitized mime-type validation.',
        threatModel: 'Guards against session hijacking, unauthenticated resource deletion, and malicious file upload payloads.',
        coreStack: 'Node.js, Express.js, Better-SQLite3, Bcrypt, EJS, HTML5/CSS3'
      }
    },
    {
      id: 'PID_013',
      title: 'Chatify',
      subtitle: 'Real-Time Cyber-Space Messaging & Game Panel Hub',
      category: 'FULL STACK',
      tags: ['React', 'Node.js', 'WebSockets', 'Vite', 'Real-Time Comms'],
      image: chatifyImg,
      github: 'https://github.com/harshganeshwade/Chatify',
      color: '#9d00ff',
      status: 'REAL_TIME',
      techSpecs: ['Low-Latency Sockets', 'Direct & Room Channels', 'Interactive Mini-Games', 'Cyber Space Theme'],
      description: 'Space-themed real-time messaging platform featuring live broadcast channels, direct messages, interactive game panels, and media feeds.',
      architecture: {
        problem: 'Modern chat applications are bloated and resource-intensive, lacking integrated lightweight interactive features.',
        mechanism: 'Leverages bi-directional WebSocket channels for low-latency text and media transport, dynamic room management, and synchronized mini-game panels for collaborative breaks.',
        threatModel: 'Implements input sanitization to prevent Stored XSS and enforces authenticated socket handshakes.',
        coreStack: 'React, Node.js, Express, WebSocket, Vite, CSS Modules'
      }
    },
    {
      id: 'PID_014',
      title: 'Personal Expense Sentinel',
      subtitle: 'Privacy-First Financial Analytics Ledger',
      category: 'FULL STACK',
      tags: ['React', 'Next.js', 'Supabase', 'SQL Security', 'Analytics'],
      image: librarySystemImg,
      github: 'https://github.com/harshganeshwade/Personal-Expense-Analyzer',
      color: '#ffa500',
      status: 'DATA_PROTECTED',
      techSpecs: ['Parameterized SQL', 'Public/Private Toggle', 'Visual Category Split', 'Encrypted DB'],
      description: 'Full-stack expense tracking platform featuring granular transaction visibility controls, budget health analytics, and injection-proof database queries.',
      architecture: {
        problem: 'Financial ledger tools either lack privacy customization or expose endpoints to injection attacks and visibility leaks.',
        mechanism: 'Enforces strict parameterized SQL queries across all balance modifications, provides one-click public/private transaction filters, and renders dynamic budget visualizations.',
        threatModel: 'Defends against SQL Injection (SQLi), broken object-level authorization (BOLA), and unauthorized balance disclosures.',
        coreStack: 'React / Next.js, Express.js, Supabase, PostgreSQL, Chart.js'
      }
    }
  ]

  const categories = ['ALL', 'CYBERSECURITY', 'AI & VISION', 'FULL STACK']

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter))

  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <span className="section-subtitle">Featured Engineering & Security Systems</span>
        <h2 className="section-title">Selected <span className="gradient-text">Projects</span></h2>
        <p className="section-desc">Authentic systems engineered by Harsh for autonomous incident response, AI fraud detection, computer vision, and secure full-stack software.</p>
      </div>

      {/* Filter Tabs */}
      <div className="project-filter-tabs">
        {categories.map((cat) => {
          const count = cat === 'ALL' ? projects.length : projects.filter(p => p.category.includes(cat)).length
          return (
            <button
              key={cat}
              className={`filter-tab-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              <span className="filter-prefix">{'>'}</span> {cat} <span className="filter-count">[{count}]</span>
            </button>
          )
        })}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card cyber-card scanline-container">
            <div className="project-image-wrap">
              <div className="scan-line" style={{ background: project.color, boxShadow: `0 0 15px ${project.color}` }}></div>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay" style={{ background: `${project.color}11` }}>
                <div className="access-overlay">
                  <div className="access-text" style={{ color: project.color, textShadow: `0 0 10px ${project.color}` }}>
                    SYSTEM_VERIFIED
                  </div>
                  <button 
                    className="quick-view-overlay-btn"
                    onClick={() => setSelectedProject(project)}
                    style={{ borderColor: project.color, color: project.color }}
                  >
                    <Eye size={14} /> VIEW ARCHITECTURE
                  </button>
                </div>
              </div>
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span className="project-id" style={{ color: project.color }}>{project.id} // {project.category}</span>
                <span className="project-status-tag" style={{ borderColor: `${project.color}44`, color: project.color }}>
                  {project.status}
                </span>
              </div>

              <h3>{project.title}</h3>
              <p className="project-subtitle-text">{project.subtitle}</p>

              {/* Action Buttons */}
              <div className="project-footer">
                <button 
                  className="project-action-link specs-btn"
                  onClick={() => setSelectedProject(project)}
                  style={{ color: project.color, borderColor: `${project.color}66` }}
                >
                  <Cpu size={14} /> MISSION_SPECS
                </button>

                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="project-action-link"
                  style={{ color: '#fff' }}
                >
                  <Github size={14} /> SOURCE_CODE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* In-Page System Architecture & Mission Brief Modal */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-dialog cyber-card scanline-container" onClick={(e) => e.stopPropagation()}>
            <div className="target-lock">
              <span></span><span></span><span></span><span></span>
            </div>

            <div className="project-modal-header" style={{ borderBottomColor: `${selectedProject.color}44` }}>
              <button className="cyber-back-btn" onClick={() => setSelectedProject(null)}>
                <ArrowLeft size={16} /> BACK_TO_PROJECTS
              </button>
              <div className="project-modal-meta">
                <span className="modal-id-badge" style={{ color: selectedProject.color }}>
                  SYSTEM_SPEC // {selectedProject.id} [{selectedProject.status}]
                </span>
                <h3 className="modal-project-title">{selectedProject.title}</h3>
              </div>
              <button className="cert-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <div className="project-modal-body">
              <div className="modal-top-banner">
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-project-img" />
                <div className="modal-banner-content">
                  <span className="modal-domain-tag" style={{ color: selectedProject.color }}>
                    DOMAIN: {selectedProject.category}
                  </span>
                  <h4>{selectedProject.subtitle}</h4>
                  <p>{selectedProject.description}</p>
                </div>
              </div>

              {/* Technical Capabilities & Spec Pills in Mission Specs */}
              <div className="modal-tech-pills-wrap">
                <div className="modal-section-title" style={{ color: selectedProject.color }}>
                  <Cpu size={15} /> KEY TECHNICAL SPECIFICATIONS & CAPABILITIES
                </div>
                <div className="modal-specs-pills">
                  {selectedProject.techSpecs.map((spec, idx) => (
                    <span key={idx} className="modal-spec-pill" style={{ borderColor: `${selectedProject.color}44` }}>
                      <CheckCircle2 size={13} color={selectedProject.color} /> {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-arch-grid">
                {/* Threat Model & Problem */}
                <div className="arch-card">
                  <div className="arch-card-header" style={{ color: selectedProject.color }}>
                    <Shield size={16} /> <span>1. PROBLEM STATEMENT & ATTACK SURFACE</span>
                  </div>
                  <p>{selectedProject.architecture.problem}</p>
                </div>

                {/* Core Mechanism */}
                <div className="arch-card">
                  <div className="arch-card-header" style={{ color: selectedProject.color }}>
                    <Cpu size={16} /> <span>2. CORE ENGINEERING & SECURITY MECHANISM</span>
                  </div>
                  <p>{selectedProject.architecture.mechanism}</p>
                </div>

                {/* Threat Model Mitigations */}
                <div className="arch-card">
                  <div className="arch-card-header" style={{ color: selectedProject.color }}>
                    <Lock size={16} /> <span>3. THREAT MITIGATIONS</span>
                  </div>
                  <p>{selectedProject.architecture.threatModel}</p>
                </div>

                {/* Core Stack */}
                <div className="arch-card">
                  <div className="arch-card-header" style={{ color: selectedProject.color }}>
                    <Terminal size={16} /> <span>4. IMPLEMENTATION STACK</span>
                  </div>
                  <p className="code-font">{selectedProject.architecture.coreStack}</p>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="project-modal-footer">
                <div className="modal-tags">
                  {selectedProject.tags.map(t => (
                    <span key={t} className="modal-tag-chip" style={{ color: selectedProject.color, borderColor: `${selectedProject.color}44` }}>
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="modal-btns">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="modal-github-btn"
                    style={{ background: selectedProject.color }}
                  >
                    <Github size={16} /> VIEW SOURCE ON GITHUB
                  </a>
                  <button className="cyber-back-btn" onClick={() => setSelectedProject(null)}>
                    <ArrowLeft size={16} /> RETURN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .section-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          opacity: 0.85;
          max-width: 750px;
          margin: 0.8rem auto 0;
          text-align: center;
          line-height: 1.6;
        }

        .project-filter-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 3.5rem;
        }

        .filter-tab-btn {
          background: rgba(0, 229, 163, 0.03);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 0.6rem 1.2rem;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .filter-prefix {
          color: var(--primary);
          opacity: 0.6;
        }

        .filter-count {
          opacity: 0.6;
          font-size: 0.7rem;
        }

        .filter-tab-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(0, 229, 163, 0.08);
          transform: translateY(-2px);
        }

        .filter-tab-btn.active {
          background: var(--primary);
          color: #000;
          border-color: var(--primary);
          box-shadow: 0 0 15px var(--primary-glow);
        }

        .filter-tab-btn.active .filter-prefix,
        .filter-tab-btn.active .filter-count {
          color: #000;
          opacity: 1;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.2rem;
        }

        .project-card {
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: rgba(10, 25, 47, 0.45);
          border: 1px solid rgba(0, 229, 163, 0.15);
          transition: all 0.3s ease;
        }

        .project-card:hover {
          border-color: var(--primary);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 229, 163, 0.1);
        }

        .project-image-wrap {
          position: relative;
          height: 190px;
          overflow: hidden;
          background: #000;
        }

        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary);
          box-shadow: 0 0 15px var(--primary);
          z-index: 5;
          animation: scanning 3s linear infinite;
        }

        @keyframes scanning {
          0% { top: 0%; }
          100% { top: 100%; }
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.65;
          filter: grayscale(0.8) brightness(0.65);
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
                      filter 0.4s ease, 
                      opacity 0.4s ease;
        }

        .project-card:hover .project-image {
          opacity: 1;
          filter: grayscale(0) brightness(1.05);
          transform: scale(1.06);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
          z-index: 10;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
          background: rgba(2, 6, 23, 0.75);
        }

        .access-overlay {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
        }

        .access-text {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1rem;
          letter-spacing: 3px;
        }

        .quick-view-overlay-btn {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid currentColor;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 0.45rem 0.9rem;
          border-radius: 3px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: all 0.2s ease;
        }

        .quick-view-overlay-btn:hover {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.1);
        }

        .project-content {
          padding: 1.4rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .project-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.7rem;
        }

        .project-id {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          letter-spacing: 1px;
          opacity: 0.85;
        }

        .project-status-tag {
          font-size: 0.6rem;
          font-family: var(--font-heading);
          font-weight: 700;
          padding: 0.15rem 0.5rem;
          border-radius: 3px;
          border: 1px solid;
          background: rgba(0, 0, 0, 0.4);
          letter-spacing: 0.5px;
        }

        .project-content h3 {
          font-size: 1.35rem;
          margin-bottom: 0.35rem;
          color: var(--text-primary);
        }

        .project-subtitle-text {
          font-size: 0.82rem;
          color: var(--text-secondary);
          opacity: 0.85;
          margin-bottom: 1.4rem;
          line-height: 1.45;
          min-height: 2.4rem;
        }

        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.6rem;
          padding-top: 1rem;
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .project-action-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-heading);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 0.45rem 0.85rem;
          border: 1px solid var(--glass-border);
          border-radius: 3px;
          background: rgba(0, 0, 0, 0.4);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .project-action-link:hover {
          background: rgba(0, 229, 163, 0.12);
          border-color: currentColor;
          transform: translateY(-2px);
          box-shadow: 0 0 10px rgba(0, 229, 163, 0.2);
        }

        /* In-Page Architecture & Mission Brief Modal */
        .project-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(2, 6, 23, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: modalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-modal-dialog {
          width: 100%;
          max-width: 950px;
          max-height: 92vh;
          display: flex;
          flex-direction: column;
          background: #070d14;
          border: 1px solid var(--primary);
          box-shadow: 0 0 40px rgba(0, 229, 163, 0.25), inset 0 0 20px rgba(0, 229, 163, 0.05);
          border-radius: 6px;
          overflow: hidden;
          position: relative;
          animation: modalRollUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalRollUp {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .project-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.2rem 1.8rem;
          border-bottom: 1px solid var(--glass-border);
          background: rgba(0, 0, 0, 0.5);
        }

        .project-modal-meta {
          flex: 1;
          text-align: center;
        }

        .modal-id-badge {
          display: block;
          font-size: 0.68rem;
          font-family: var(--font-heading);
          letter-spacing: 2px;
          margin-bottom: 0.2rem;
        }

        .modal-project-title {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin: 0;
          letter-spacing: 0.5px;
        }

        .cyber-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 229, 163, 0.1);
          border: 1px solid var(--primary);
          color: var(--primary);
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 0.5rem 1rem;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cyber-back-btn:hover {
          background: var(--primary);
          color: #000;
          box-shadow: 0 0 15px var(--primary-glow);
        }

        .cert-close-btn {
          background: transparent;
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          padding: 0.5rem;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .cert-close-btn:hover {
          border-color: #ff0055;
          color: #ff0055;
          box-shadow: 0 0 10px rgba(255, 0, 85, 0.4);
        }

        .project-modal-body {
          padding: 1.8rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }

        .modal-top-banner {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 1.5rem;
          align-items: center;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1.2rem;
          border-radius: 6px;
        }

        .modal-project-img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border-radius: 4px;
          border: 1px solid var(--glass-border);
        }

        .modal-domain-tag {
          font-size: 0.7rem;
          font-family: var(--font-heading);
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 0.3rem;
          display: block;
        }

        .modal-banner-content h4 {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }

        .modal-banner-content p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .modal-tech-pills-wrap {
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 1rem 1.2rem;
          border-radius: 6px;
        }

        .modal-section-title {
          font-family: var(--font-heading);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.8rem;
        }

        .modal-specs-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .modal-spec-pill {
          font-size: 0.75rem;
          font-family: var(--font-heading);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid;
          padding: 0.35rem 0.75rem;
          border-radius: 4px;
        }

        .modal-arch-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.2rem;
        }

        .arch-card {
          background: rgba(10, 25, 47, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1.2rem;
          border-radius: 5px;
        }

        .arch-card-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 0.6rem;
        }

        .arch-card p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0;
        }

        .code-font {
          font-family: monospace;
          color: var(--primary) !important;
          background: rgba(0, 0, 0, 0.4);
          padding: 0.6rem;
          border-radius: 3px;
          border-left: 2px solid var(--primary);
        }

        .project-modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          padding-top: 1.2rem;
          border-top: 1px solid var(--glass-border);
        }

        .modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .modal-tag-chip {
          font-size: 0.68rem;
          font-family: var(--font-heading);
          padding: 0.25rem 0.65rem;
          border: 1px solid;
          border-radius: 3px;
          background: rgba(0, 0, 0, 0.4);
          font-weight: 700;
        }

        .modal-btns {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-left: auto;
        }

        .modal-github-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #000;
          font-family: var(--font-heading);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 1px;
          padding: 0.55rem 1.2rem;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-github-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }

                @media (max-width: 768px) {
          .project-filter-tabs {
            overflow-x: auto;
            flex-wrap: nowrap;
            justify-content: flex-start;
            padding-bottom: 0.5rem;
            -webkit-overflow-scrolling: touch;
          }
          .filter-tab-btn {
            white-space: nowrap;
            flex-shrink: 0;
            padding: 0.4rem 0.8rem;
            font-size: 0.72rem;
          }
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .project-card {
            padding: 1.2rem;
          }
          .modal-top-banner {
            grid-template-columns: 1fr;
          }
          .modal-arch-grid {
            grid-template-columns: 1fr;
          }
          .project-modal-header {
            flex-direction: column;
            text-align: center;
          }
          .project-modal-footer {
            flex-direction: column;
            align-items: flex-start;
          }
          .modal-btns {
            margin-left: 0;
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects
