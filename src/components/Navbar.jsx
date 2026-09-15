import React, { useState, useEffect } from 'react'
import { Menu, X, Shield, Terminal, Briefcase, Cpu, FolderGit2, Mail, ExternalLink } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ['about', 'experience', 'skills', 'projects', 'publications', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: '//01. ABOUT', href: '#about', id: 'about' },
    { label: '//02. EXPERIENCE', href: '#experience', id: 'experience' },
    { label: '//03. SKILLS', href: '#skills', id: 'skills' },
    { label: '//04. PROJECTS', href: '#projects', id: 'projects' },
    { label: '//05. BOOKS', href: '#publications', id: 'publications' },
    { label: '//06. CONTACT', href: '#contact', id: 'contact' }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo-wrapper">
          <a href="#" className="logo">
            HG<span className="dot">.</span>
            <span className="logo-status-tag">SYS_ONLINE</span>
          </a>

          <div className="running-quote">
            <div className="lag-wrapper">
              <span className="ticker-text">
                NO SYSTEM IS SAFE // HARSH GANESHWADE // VAPT & CYBERSECURITY // SOC & SIEM // DEV_BUILD_v2.6 //
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link-item ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: '`' }))}
            className="nav-cli-btn"
            title="Open Interactive Cyber Shell (~)"
          >
            <Terminal size={14} /> CLI
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          className="menu-icon-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}>
          <div className="mobile-drawer-header">
            <span className="terminal-prompt">{'>'} SELECT_MODULE</span>
            <button className="drawer-close-btn" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="mobile-nav-items">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-pointer">{'>'}</span> {item.label}
              </a>
            ))}
            <button 
              className="mobile-cli-btn"
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new KeyboardEvent('keydown', { key: '`' }));
              }}
            >
              <Terminal size={16} /> LAUNCH CYBER CLI [~]
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.2rem 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border-bottom: 1px solid transparent;
        }

        .navbar.scrolled {
          padding: 0.8rem 0;
          background: rgba(4, 8, 14, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex: 1;
          max-width: 460px;
        }

        .logo {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: -1px;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-primary);
        }

        .dot {
          color: var(--primary);
        }

        .logo-status-tag {
          font-size: 0.6rem;
          font-family: var(--font-heading);
          color: var(--primary);
          background: rgba(0, 229, 163, 0.08);
          border: 1px solid var(--primary-glow);
          padding: 0.15rem 0.45rem;
          border-radius: 2px;
          letter-spacing: 1px;
        }

        .running-quote {
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          border: 1px solid var(--glass-border);
          padding: 0.35rem 0.8rem;
          background: rgba(0, 229, 163, 0.03);
          border-radius: 2px;
        }

        .lag-wrapper {
          display: inline-block;
        }

        .ticker-text {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 0.72rem;
          color: var(--primary);
          opacity: 0.85;
          letter-spacing: 1.5px;
          animation: ticker 35s linear infinite;
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .desktop-nav {
          display: flex;
          gap: 1.8rem;
          align-items: center;
        }

        .nav-link-item {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          color: var(--text-secondary);
          opacity: 0.75;
          transition: all 0.25s ease;
          position: relative;
          padding: 0.3rem 0;
        }

        .nav-link-item:hover,
        .nav-link-item.active {
          opacity: 1;
          color: var(--primary);
          text-shadow: 0 0 10px var(--primary-glow);
        }

        .nav-link-item.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary);
          box-shadow: 0 0 8px var(--primary);
        }

        .nav-cli-btn {
          background: rgba(0, 229, 163, 0.08);
          border: 1px solid var(--primary);
          color: var(--primary);
          padding: 0.3rem 0.7rem;
          border-radius: 4px;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: all 0.2s ease;
          margin-left: 0.5rem;
        }

        .nav-cli-btn:hover {
          background: var(--primary);
          color: #000;
          box-shadow: 0 0 12px var(--primary-glow);
          transform: translateY(-2px);
        }

        .mobile-cli-btn {
          margin-top: 1.5rem;
          background: rgba(0, 229, 163, 0.1);
          border: 1px solid var(--primary);
          color: var(--primary);
          padding: 0.8rem 1rem;
          border-radius: 4px;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          transition: all 0.2s ease;
        }

        .mobile-cli-btn:hover {
          background: var(--primary);
          color: #000;
          box-shadow: 0 0 15px var(--primary-glow);
        }

        .menu-icon-btn {
          display: none;
          background: rgba(0, 229, 163, 0.08);
          border: 1px solid var(--glass-border);
          color: var(--primary);
          padding: 0.5rem;
          border-radius: 4px;
          cursor: pointer;
        }

        .mobile-nav-drawer {
          display: none;
        }

        @media (max-width: 968px) {
          .running-quote {
            display: none;
          }
        }

        @media (max-width: 820px) {
          .desktop-nav {
            display: none;
          }

          .menu-icon-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-nav-drawer {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 320px;
            height: 100vh;
            background: #060b11;
            border-left: 1px solid var(--primary);
            box-shadow: -15px 0 40px rgba(0, 0, 0, 0.8);
            padding: 2rem;
            transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 1001;
          }

          .mobile-nav-drawer.open {
            right: 0;
          }

          .mobile-drawer-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid var(--glass-border);
            margin-bottom: 2rem;
          }

          .terminal-prompt {
            font-family: var(--font-heading);
            font-size: 0.85rem;
            color: var(--primary);
            letter-spacing: 1px;
          }

          .drawer-close-btn {
            background: transparent;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
          }

          .mobile-nav-items {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .mobile-nav-item {
            font-family: var(--font-heading);
            font-size: 1rem;
            color: var(--text-secondary);
            display: flex;
            align-items: center;
            gap: 0.8rem;
            transition: all 0.2s ease;
          }

          .mobile-nav-item.active,
          .mobile-nav-item:hover {
            color: var(--primary);
            transform: translateX(6px);
          }

          .nav-pointer {
            color: var(--primary);
            font-weight: 700;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
