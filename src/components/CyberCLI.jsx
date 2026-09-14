import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Maximize2, Minimize2, Sparkles } from 'lucide-react';

const HELP_TEXT = [
  'AVAILABLE COMMANDS:',
  '  whoami          - Display operator identity & security clearance',
  '  projects        - List authentic security & software projects (flag: --vapt)',
  '  certs           - List verified cyber credentials & certifications',
  '  books           - Show published books & official acquisition links',
  '  skills          - Inspect offensive & defensive technical competencies',
  '  resume          - Access 3-role Google Drive resume dossier',
  '  contact         - Reveal direct communication coordinates',
  '  clear / cls     - Clear terminal buffer',
  '  sudo hire harsh - Grant executive clearance & open recruitment channel',
  '  exit / quit     - Terminate CLI session',
  '',
  'HINT: Use [UP / DOWN] for command history, [TAB] for auto-complete.',
];

const CyberCLI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'HARSH_OS [Version 2.4.0-SECURE]' },
    { type: 'system', text: 'Cybersecurity & VAPT Terminal Session Initialized.' },
    { type: 'system', text: 'Type "help" for a list of tactical commands or "whoami" for operator dossier.\n' }
  ]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Keyboard shortcut listener (`~` or Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    // Add to command history
    setCmdHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    // Record user command line
    const newLogs = [{ type: 'user', text: `visitor@harsh-portfolio:~$ ${trimmed}` }];
    const cmd = trimmed.toLowerCase();

    if (cmd === 'help' || cmd === '?') {
      HELP_TEXT.forEach(line => newLogs.push({ type: 'output', text: line }));
    } else if (cmd === 'whoami') {
      newLogs.push(
        { type: 'output', text: 'OPERATOR: Harsh Ganeshwade' },
        { type: 'output', text: 'ROLE: Cybersecurity & VAPT Engineer | Purple Team Specialist | Author' },
        { type: 'output', text: 'EDUCATION: B.Tech Computer Science & Engineering' },
        { type: 'output', text: 'FOCUS: Offensive Red Team Operations, Defensive Hardening (SOC), Cloud IAM' },
        { type: 'output', text: 'PROJECTS: 14+ Authentic Systems Developed' },
        { type: 'output', text: 'CREDENTIALS: 16+ Industry Accreditations' },
        { type: 'output', text: 'PUBLICATIONS: 2 Published Works (Amazon & Global Distributors)' }
      );
    } else if (cmd.startsWith('projects')) {
      if (cmd.includes('--vapt') || cmd.includes('-v')) {
        newLogs.push(
          { type: 'output', text: '=== VAPT & OFFENSIVE SECURITY REPOSITORIES ===' },
          { type: 'link', text: '1. Automated PenTest Tool -> https://github.com/harshganeshwade/Automated-PenTest-Tool' },
          { type: 'link', text: '2. Sentinel IDS/IPS Engine -> https://github.com/harshganeshwade/Sentinel-IDS-IPS' },
          { type: 'link', text: '3. Zero-Day Vulnerability Tracker -> https://github.com/harshganeshwade/ZeroDay-Tracker' },
          { type: 'link', text: '4. BankGuard.AI Threat Engine -> https://github.com/harshganeshwade/BankGuard.AI' }
        );
      } else {
        newLogs.push(
          { type: 'output', text: '=== 14 AUTHENTIC PROJECTS INDEX ===' },
          { type: 'output', text: '• ThrottleIQ (High-Performance Diagnostics)' },
          { type: 'output', text: '• BankGuard.AI (Financial Threat Prevention Engine)' },
          { type: 'output', text: '• Biometric Multi-Modal Suite (Identity Verification)' },
          { type: 'output', text: '• Sentinel IDS/IPS (Hybrid Deep Packet Inspector)' },
          { type: 'output', text: '• CloudGuard IAM (Least-Privilege Cloud Auditing)' },
          { type: 'output', text: '• StegoShield (Payload Steganography Defense)' },
          { type: 'output', text: '• Automated PenTest Tool (VAPT Recon Suite)' },
          { type: 'output', text: '• Zero-Day Tracker (CVE Telemetry Feed)' },
          { type: 'output', text: '• CyberRange-X, RansomGuard, SecureVault-KMS, PhishGuard-AI, etc.' },
          { type: 'action', text: '[!] Type "projects --vapt" or click on any project card for technical specs.' }
        );
      }
    } else if (cmd === 'certs' || cmd === 'certifications') {
      newLogs.push(
        { type: 'output', text: '=== 16 CYBER CREDENTIAL LEDGER ===' },
        { type: 'output', text: '• CompTIA Security+ (Offensive & Defensive Security Baseline)' },
        { type: 'output', text: '• Cybrary Defensive Security Operations (SOC/Blue Team)' },
        { type: 'output', text: '• Cisco Introduction to Cybersecurity' },
        { type: 'output', text: '• Sunbeam Infotech Cybersecurity Certification' },
        { type: 'output', text: '• Tata Cybersecurity Analyst Job Simulation' },
        { type: 'output', text: '• ADBI Cybersecurity Policy & Governance' },
        { type: 'output', text: '• Commonwealth Educational Cybersecurity' },
        { type: 'output', text: '• DPDPA India Data Privacy & Compliance' },
        { type: 'output', text: '• Adobe Hackathon National Finalist' },
        { type: 'action', text: '[!] All 16 high-resolution certificates can be scanned in the Experience ledger.' }
      );
    } else if (cmd === 'books' || cmd === 'author') {
      newLogs.push(
        { type: 'output', text: '=== PUBLISHED LITERARY WORKS ===' },
        { type: 'output', text: '1. "Latte Love and Painted Promises"' },
        { type: 'link', text: '   -> Linktree Hub: https://linktr.ee/harshganeshwade' },
        { type: 'output', text: '2. "A Holistic Guide To Balanced Life"' },
        { type: 'link', text: '   -> Amazon Kindle: https://www.amazon.in/dp/B0DS2LG9RH' }
      );
    } else if (cmd === 'skills') {
      newLogs.push(
        { type: 'output', text: '=== TECHNICAL COMPETENCIES MATRIX ===' },
        { type: 'output', text: '[+] VAPT: Metasploit, Burp Suite, Nmap, Wireshark, SQLMap, Nessus, OWASP Top 10' },
        { type: 'output', text: '[+] DEFENSIVE & SOC: SIEM (Splunk/ELK), Snort, Suricata, IDS/IPS, Packet Analysis' },
        { type: 'output', text: '[+] CLOUD SECURITY: AWS IAM, Azure RBAC, CloudTrail, Zero Trust Architecture' },
        { type: 'output', text: '[+] LANGUAGES: Python, C/C++, JavaScript, Bash, PowerShell, SQL, Go' },
        { type: 'output', text: '[+] CRYPTOGRAPHY: AES-256, RSA, TLS/SSL, LSB Steganography, Hashcat' }
      );
    } else if (cmd === 'resume' || cmd === 'cv') {
      newLogs.push(
        { type: 'output', text: '=== DEDICATED 3-ROLE RESUME DOSSIER ===' },
        { type: 'output', text: 'Roles: 1. Cybersecurity Analyst | 2. VAPT Engineer | 3. Software Engineer' },
        { type: 'link', text: 'Google Drive: https://drive.google.com/drive/folders/1sm8nkHP4xmSri6O_yGB3Omc7b1_RhyPL' },
        { type: 'action', text: 'Opening Google Drive dossier in new tab...' }
      );
      window.open('https://drive.google.com/drive/folders/1sm8nkHP4xmSri6O_yGB3Omc7b1_RhyPL', '_blank');
    } else if (cmd === 'contact' || cmd === 'email') {
      newLogs.push(
        { type: 'output', text: '=== COMMS COORDINATES ===' },
        { type: 'output', text: 'Email:    harshganeshwade@gmail.com' },
        { type: 'output', text: 'Phone:    +91 7020125096' },
        { type: 'output', text: 'Location: Sangli, Maharashtra, India' },
        { type: 'link', text: 'GitHub:   https://github.com/harshganeshwade' },
        { type: 'link', text: 'LinkedIn: https://www.linkedin.com/in/harshganeshwade/' }
      );
    } else if (cmd === 'sudo hire harsh' || cmd === 'hire') {
      newLogs.push(
        { type: 'highlight', text: '[ACCESS GRANTED] Sudo authorization accepted.' },
        { type: 'highlight', text: 'Harsh Ganeshwade is ready to deploy on your mission-critical operations.' },
        { type: 'action', text: 'Directing terminal focus to secure contact module...' }
      );
      setTimeout(() => {
        setIsOpen(false);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 1200);
    } else if (cmd === 'clear' || cmd === 'cls') {
      setHistory([]);
      return;
    } else if (cmd === 'exit' || cmd === 'quit') {
      newLogs.push({ type: 'system', text: 'Closing session...' });
      setTimeout(() => setIsOpen(false), 400);
    } else {
      newLogs.push({
        type: 'error',
        text: `zsh: command not found: ${trimmed}. Type "help" for a list of tactical commands.`
      });
    }

    setHistory(prev => [...prev, ...newLogs]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(cmdHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistory.length === 0 || historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(cmdHistory[nextIndex]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = ['help', 'whoami', 'projects', 'certs', 'books', 'skills', 'resume', 'contact', 'clear', 'sudo hire harsh', 'exit'];
      const matched = commands.find(c => c.startsWith(inputVal.toLowerCase()));
      if (matched) {
        setInputVal(matched);
      }
    }
  };

  return (
    <>
      {/* Floating HUD Button Trigger */}
      <button 
        onClick={() => setIsOpen(true)}
        className="terminal-hud-trigger"
        title="Open Cyber Terminal Shell (~ or Ctrl+K)"
        aria-label="Toggle Interactive Cyber CLI"
      >
        <Terminal size={18} className="terminal-hud-icon" />
        <span className="terminal-hud-text">CLI_MODE</span>
        <span className="terminal-hud-shortcut">~</span>
      </button>

      {/* Terminal Modal Dialog */}
      {isOpen && (
        <div className="terminal-overlay" onClick={() => setIsOpen(false)}>
          <div 
            className={`terminal-cli-window ${isMaximized ? 'maximized' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Window Header */}
            <div className="terminal-topbar">
              <div className="terminal-dots">
                <span className="dot dot-red" onClick={() => setIsOpen(false)} title="Close (ESC)"></span>
                <span className="dot dot-yellow" onClick={() => setIsMaximized(!isMaximized)} title="Maximize"></span>
                <span className="dot dot-green" onClick={() => handleCommand('help')} title="Help"></span>
              </div>
              <div className="terminal-title">
                <Terminal size={14} /> harsh@cyber-sentinel:~ (zsh)
              </div>
              <div className="terminal-controls">
                <button 
                  onClick={() => setIsMaximized(!isMaximized)} 
                  className="control-btn"
                  title={isMaximized ? "Restore size" : "Maximize window"}
                >
                  {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="control-btn close-btn"
                  title="Close terminal"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Terminal Output Body */}
            <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
              {history.map((item, idx) => (
                <div key={idx} className={`term-line term-${item.type}`}>
                  {item.type === 'link' ? (
                    <a href={item.text.split('-> ')[1] || '#'} target="_blank" rel="noreferrer" className="term-url">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />

              {/* Interactive Input Prompt */}
              <div className="term-input-row">
                <span className="term-prompt">visitor@harsh-portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="term-input"
                  autoFocus
                  spellCheck="false"
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Terminal Footer Quick Buttons */}
            <div className="terminal-quickbar">
              <span className="quick-label">QUICK CMDS:</span>
              <button onClick={() => handleCommand('whoami')}>whoami</button>
              <button onClick={() => handleCommand('projects')}>projects</button>
              <button onClick={() => handleCommand('certs')}>certs</button>
              <button onClick={() => handleCommand('books')}>books</button>
              <button onClick={() => handleCommand('resume')}>resume</button>
              <button onClick={() => handleCommand('sudo hire harsh')} className="highlight-cmd">
                <Sparkles size={11} /> hire
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Floating Terminal HUD Trigger Button */
        .terminal-hud-trigger {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 999;
          background: rgba(10, 15, 20, 0.9);
          border: 1px solid var(--primary);
          color: var(--primary);
          padding: 10px 16px;
          border-radius: 6px;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
          backdrop-filter: blur(8px);
          transition: all 0.25s ease;
        }

        .terminal-hud-trigger:hover {
          background: var(--primary);
          color: #000;
          box-shadow: 0 0 25px var(--primary-glow);
          transform: translateY(-3px);
        }

        .terminal-hud-shortcut {
          background: rgba(0, 255, 65, 0.15);
          border: 1px solid var(--primary);
          color: var(--primary);
          padding: 1px 6px;
          border-radius: 3px;
          font-size: 0.7rem;
        }

        .terminal-hud-trigger:hover .terminal-hud-shortcut {
          background: #000;
          color: var(--primary);
        }

        /* Overlay */
        .terminal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease-out;
        }

        /* Terminal Window */
        .terminal-cli-window {
          width: 820px;
          max-width: 95vw;
          height: 540px;
          max-height: 85vh;
          background: rgba(8, 12, 16, 0.96);
          border: 1px solid var(--primary);
          border-radius: 8px;
          box-shadow: 0 0 40px rgba(0, 255, 65, 0.25), inset 0 0 20px rgba(0, 255, 65, 0.05);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: var(--font-heading), monospace;
          transition: all 0.3s ease;
        }

        .terminal-cli-window.maximized {
          width: 96vw;
          height: 94vh;
          max-width: 96vw;
          max-height: 94vh;
        }

        /* Top Bar */
        .terminal-topbar {
          background: rgba(15, 23, 30, 0.95);
          padding: 10px 16px;
          border-bottom: 1px solid rgba(0, 255, 65, 0.2);
          display: flex;
          align-items: center;
          justify-content: space-between;
          user-select: none;
        }

        .terminal-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          cursor: pointer;
        }

        .dot-red { background: #ef4444; }
        .dot-yellow { background: #eab308; }
        .dot-green { background: #22c55e; }

        .terminal-title {
          font-size: 0.8rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .terminal-controls {
          display: flex;
          gap: 8px;
        }

        .control-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 2px;
          border-radius: 3px;
          transition: color 0.2s;
        }

        .control-btn:hover {
          color: var(--primary);
        }

        .close-btn:hover {
          color: #ef4444;
        }

        /* Body */
        .terminal-body {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          font-size: 0.88rem;
          line-height: 1.6;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .term-line {
          white-space: pre-wrap;
          word-break: break-word;
        }

        .term-system { color: #64748b; font-style: italic; }
        .term-user { color: #38bdf8; font-weight: 600; margin-top: 6px; }
        .term-output { color: #e2e8f0; }
        .term-link { color: #a855f7; }
        .term-url { color: var(--primary); text-decoration: underline; }
        .term-url:hover { text-shadow: 0 0 8px var(--primary-glow); }
        .term-action { color: #eab308; }
        .term-highlight { color: var(--primary); font-weight: 700; text-shadow: 0 0 10px var(--primary-glow); }
        .term-error { color: #ef4444; }

        /* Input Row */
        .term-input-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
        }

        .term-prompt {
          color: #38bdf8;
          font-weight: 700;
          white-space: nowrap;
        }

        .term-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--primary);
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 600;
          caret-color: var(--primary);
        }

        /* Quick Bar */
        .terminal-quickbar {
          background: rgba(12, 18, 24, 0.9);
          border-top: 1px solid rgba(0, 255, 65, 0.15);
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
        }

        .quick-label {
          font-size: 0.7rem;
          color: var(--text-secondary);
          white-space: nowrap;
        }

        .terminal-quickbar button {
          background: rgba(0, 255, 65, 0.08);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          padding: 3px 8px;
          border-radius: 3px;
          font-family: inherit;
          font-size: 0.75rem;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .terminal-quickbar button:hover {
          background: rgba(0, 255, 65, 0.2);
          border-color: var(--primary);
          color: var(--primary);
        }

        .terminal-quickbar button.highlight-cmd {
          background: rgba(0, 255, 65, 0.15);
          border-color: var(--primary);
          color: var(--primary);
          font-weight: 700;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 600px) {
          .terminal-hud-trigger {
            bottom: 16px;
            right: 16px;
            padding: 8px 12px;
          }
          .terminal-cli-window {
            height: 75vh;
          }
          .terminal-title {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </>
  );
};

export default CyberCLI;
