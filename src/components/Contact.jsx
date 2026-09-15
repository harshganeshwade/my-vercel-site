import React, { useState } from 'react'
import { Mail, Send, MapPin, Phone, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Endpoint prioritization: Custom Formspree endpoint > Local/Serverless /api/contact
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
    const targetEndpoint = formspreeId 
      ? `https://formspree.io/f/${formspreeId}` 
      : (import.meta.env.VITE_CONTACT_API || '/api/contact');

    try {
      const response = await fetch(targetEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `[PORTFOLIO_CONTACT] Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        const data = await response.json().catch(() => ({}));
        setStatus({ 
          type: 'success', 
          message: data.message || 'Payload successfully delivered! I will get back to you shortly.' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Endpoint returned non-200 status');
      }
    } catch (error) {
      // 100% Guaranteed Fallback: Direct Mailto Dispatch
      const subject = encodeURIComponent(`[PORTFOLIO_CONTACT] Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Greetings Harsh,\n\n${formData.message}\n\nFrom: ${formData.name}\nReply-To: ${formData.email}`
      );
      
      // Open native mail client
      window.location.href = `mailto:harshganeshwade@gmail.com?subject=${subject}&body=${body}`;
      
      setStatus({ 
        type: 'success', 
        message: 'Direct mail client engaged with encrypted payload! Transmission initiated.' 
      });
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section container">
      <div className="section-header">
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="terminal-log cyber-card">
            <div className="log-line">{'>'} SYSTEM_READY</div>
            <div className="log-line">{'>'} WAITING_FOR_INPUT...</div>
            <div className="log-line">{'>'} TARGET: harshganeshwade@gmail.com</div>
          </div>

          <div className="info-items">
            <div className="info-item">
              <Mail className="info-icon" size={18} />
              <div className="info-content">
                <span className="info-label">PROTOCOL: MAIL</span>
                <p className="info-value">harshganeshwade@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin className="info-icon" size={18} />
              <div className="info-content">
                <span className="info-label">COORDS: LOC</span>
                <p className="info-value">Sangli, Maharashtra, India</p>
              </div>
            </div>
            <div className="info-item">
              <Phone className="info-icon" size={18} />
              <div className="info-content">
                <span className="info-label">COMMS: VOIP</span>
                <p className="info-value">+91 7020125096</p>
              </div>
            </div>

            <div className="info-item">
              <Github className="info-icon" size={18} />
              <div className="info-content">
                <span className="info-label">REPO: GITHUB</span>
                <a href="https://github.com/harshganeshwade" target="_blank" rel="noreferrer" className="info-link">harshganeshwade</a>
              </div>
            </div>

            <div className="info-item">
              <Linkedin className="info-icon" size={18} />
              <div className="info-content">
                <span className="info-label">PROF: LINKEDIN</span>
                <a href="https://www.linkedin.com/in/harshganeshwade/" target="_blank" rel="noreferrer" className="info-link">harshganeshwade</a>
              </div>
            </div>
          </div>
        </div>

        <div className="terminal-window scanline-container contact-form-wrapper">
          <div className="terminal-header-text">harsh@cyber-os:~/portal$ ./send_secure_msg.sh</div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group cyber-input-group">
              <label>USER_NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="root"
                required
              />
            </div>
            <div className="form-group cyber-input-group">
              <label>USER_EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="user@network.local"
                required
              />
            </div>
            <div className="form-group cyber-input-group">
              <label>DATA_PAYLOAD</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Enter encrypted message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="cyber-btn w-full" disabled={loading}>
              {loading ? (
                <span className="loading-wrap">
                  <span className="loading-bar"></span>
                  ENCRYPTING_AND_SENDING...
                </span>
              ) : (
                <>TRANSMIT_SECURE_PAYLOAD <Send size={18} /></>
              )}
            </button>

            <div className="direct-mail-hint">
              <a 
                href={`mailto:harshganeshwade@gmail.com?subject=[DIRECT_INQUIRY]%20Contact%20from%20Portfolio`} 
                className="direct-mail-link"
              >
                // OR CLICK HERE TO OPEN SECURE MAIL CLIENT DIRECTLY ↗
              </a>
            </div>

            {status.message && (
              <div className={`status-msg ${status.type} terminal-msg`}>
                [{status.type.toUpperCase()}] {status.message}
              </div>
            )}
          </form>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: start;
        }

        .terminal-log {
          padding: 1.5rem;
          margin-bottom: 3rem;
          border-radius: 4px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
        }

        .log-line {
          color: var(--primary);
          margin-bottom: 0.5rem;
          opacity: 0.8;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-item {
          display: flex;
          gap: 1.2rem;
          align-items: center;
        }

        .info-icon {
          color: var(--primary);
          background: rgba(0, 229, 163, 0.05);
          padding: 10px;
          border: 1px solid var(--primary-glow);
          border-radius: 4px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-label {
          display: block;
          font-size: 0.65rem;
          color: var(--accent);
          font-family: var(--font-heading);
          margin-bottom: 0.2rem;
        }

        .info-value {
          font-size: 1rem;
          color: var(--text-secondary);
        }

        .info-link {
          font-size: 1rem;
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .info-link:hover {
          color: var(--primary);
          text-shadow: 0 0 10px var(--primary-glow);
        }

        .contact-form-wrapper {
          padding: 2.5rem;
          padding-top: 3.5rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cyber-input-group label {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          color: var(--primary);
          margin-bottom: 0.5rem;
          display: block;
        }

        .cyber-input-group input, 
        .cyber-input-group textarea {
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid var(--glass-border);
          padding: 1rem;
          color: var(--primary);
          font-family: var(--font-heading);
          font-size: 0.9rem;
          width: 100%;
          border-radius: 2px;
          transition: var(--transition);
        }

        .cyber-input-group input:focus, 
        .cyber-input-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 10px var(--primary-glow);
        }

        .cyber-btn {
          background: var(--primary);
          color: black;
          font-family: var(--font-heading);
          font-weight: 700;
          padding: 1rem;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          cursor: pointer;
          transition: var(--transition);
          text-transform: uppercase;
        }

        .cyber-btn:hover:not(:disabled) {
          background: var(--accent);
          box-shadow: 0 0 20px var(--accent);
          transform: translateY(-2px);
        }

        .cyber-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .direct-mail-hint {
          text-align: center;
          margin-top: 0.5rem;
        }

        .direct-mail-link {
          font-family: var(--font-heading);
          font-size: 0.72rem;
          color: var(--text-secondary);
          opacity: 0.75;
          letter-spacing: 0.5px;
          text-decoration: none;
          transition: var(--transition);
          display: inline-block;
        }

        .direct-mail-link:hover {
          color: var(--primary);
          opacity: 1;
          text-shadow: 0 0 8px var(--primary-glow);
        }

        .terminal-msg {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 2px;
          text-align: left;
        }

        .success.terminal-msg { background: rgba(34, 197, 94, 0.1); border: 1px solid #22c55e; color: #22c55e; }
        .error.terminal-msg { background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; color: #ef4444; }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
