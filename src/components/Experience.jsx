import React, { useState, useEffect } from 'react'
import { Briefcase, GraduationCap, Award, BookOpen, Eye, X, ArrowLeft, ShieldCheck, ExternalLink } from 'lucide-react'
import adobeCertImg from '../assets/certificates/adobe_hackathon.png'
import forageCertImg from '../assets/certificates/commonwealth_cybersecurity.png'
import comptiaCertImg from '../assets/certificates/comptia_security_plus.png'
import cybraryCertImg from '../assets/certificates/cybrary_defensive_security.png'
import dpdpaCertImg from '../assets/certificates/dpdpa_certificate.png'
import tataCyberCertImg from '../assets/certificates/tata_cybersecurity.png'
import tataDaCertImg from '../assets/certificates/tata_data_visualisation.png'
import adbiCertImg from '../assets/certificates/adbi_cybersecurity.png'
import ciscoCertImg from '../assets/certificates/cisco_intro_cybersecurity.png'
import learnPromptingCertImg from '../assets/certificates/learn_prompting.png'
import viksitBharatCertImg from '../assets/certificates/viksit_bharat_dialogue.png'
import tbMuktCertImg from '../assets/certificates/tb_mukt_bharat.png'
import sunbeamCertImg from '../assets/certificates/sunbeam_cybersecurity.png'
import hackWithHerCertImg from '../assets/certificates/hack_with_her.png'
import wadhwaniCertImg from '../assets/certificates/wadhwani_employability.png'
import bookPublishingCertImg from '../assets/certificates/book_publishing_cert.png'

const Experience = () => {
    const [selectedCert, setSelectedCert] = useState(null)

    // Handle ESC key to close certificate modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedCert(null)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    const [activeCertCategory, setActiveCertCategory] = useState('ALL')

    const certCategories = ['ALL', 'CYBERSECURITY', 'JOB SIMULATIONS', 'COURSES & HACKATHONS']

    const certList = [
        {
            id: 'CERT_101',
            title: 'CompTIA Security+: Physical Security Controls',
            issuer: 'Skillsoft / CompTIA',
            category: 'CYBERSECURITY',
            date: 'Course Completion',
            image: comptiaCertImg,
            badge: 'VERIFIED'
        },
        {
            id: 'CERT_102',
            title: 'Defensive Security and Cyber Risk',
            issuer: 'Cybrary',
            category: 'CYBERSECURITY',
            date: 'Mar 31, 2026',
            image: cybraryCertImg,
            badge: 'VERIFIED'
        },
        {
            id: 'CERT_103',
            title: 'Hands-on Cyber Security Training & Internship (Grade A+)',
            issuer: 'Sunbeam Infotech',
            category: 'CYBERSECURITY',
            date: '10-Dec-2025 to 03-Jan-2026',
            image: sunbeamCertImg,
            badge: 'VERIFIED'
        },
        {
            id: 'CERT_104',
            title: 'Digital Personal Data Protection Act, 2023 (DPDPA)',
            issuer: 'DPDPA.COM (Score: 96%)',
            category: 'CYBERSECURITY',
            date: '09 April 2026',
            image: dpdpaCertImg,
            badge: 'VERIFIED'
        },
        {
            id: 'CERT_105',
            title: 'Introduction to Cybersecurity',
            issuer: 'Cisco Networking Academy',
            category: 'CYBERSECURITY',
            date: 'Feb 18, 2026',
            image: ciscoCertImg,
            badge: 'VERIFIED'
        },
        {
            id: 'CERT_106',
            title: 'Cybersecurity Course',
            issuer: 'Asian Development Bank Institute (ADBI)',
            category: 'CYBERSECURITY',
            date: '15 July 2026',
            image: adbiCertImg,
            badge: 'VERIFIED'
        },
        {
            id: 'CERT_107',
            title: 'Cybersecurity Analyst Job Simulation',
            issuer: 'Tata / Forage',
            category: 'JOB SIMULATIONS',
            date: 'April 12, 2026',
            image: tataCyberCertImg,
            badge: 'VERIFIED'
        },
        {
            id: 'CERT_108',
            title: 'Introduction to Cybersecurity Job Simulation',
            issuer: 'Commonwealth Bank / Forage',
            category: 'JOB SIMULATIONS',
            date: 'April 11, 2026',
            image: forageCertImg,
            badge: 'VERIFIED'
        },
        {
            id: 'CERT_109',
            title: 'Data Visualisation: Empowering Business with Insights',
            issuer: 'Tata / Forage',
            category: 'JOB SIMULATIONS',
            date: 'March 29, 2026',
            image: tataDaCertImg,
            badge: 'VERIFIED'
        },
        {
            id: 'CERT_110',
            title: 'JobReady: Employability Skills (75 Hours Training)',
            issuer: 'Wadhwani Foundation',
            category: 'COURSES & HACKATHONS',
            date: 'May 02, 2026',
            image: wadhwaniCertImg,
            badge: 'VERIFIED'
        },
        {
            id: 'CERT_111',
            title: 'The Hacker Among Us',
            issuer: 'Hack with Her',
            category: 'COURSES & HACKATHONS',
            date: 'Competition',
            image: hackWithHerCertImg,
            badge: 'HACKATHON'
        },
        {
            id: 'CERT_112',
            title: 'Adobe University Hackathon',
            issuer: 'Adobe / Unstop',
            category: 'COURSES & HACKATHONS',
            date: '09 August 2026',
            image: adobeCertImg,
            badge: 'PARTICIPATION'
        },
        {
            id: 'CERT_113',
            title: 'Certificate of Book Publication (Latte Love & Painted Promises)',
            issuer: 'International Author Publication',
            category: 'COURSES & HACKATHONS',
            date: 'Feb 2025',
            image: bookPublishingCertImg,
            badge: 'PUBLISHED'
        },
        {
            id: 'CERT_114',
            title: 'ChatGPT for Everyone (Prompt Engineering)',
            issuer: 'Learn Prompting',
            category: 'COURSES & HACKATHONS',
            date: 'Dec 14, 2024',
            image: learnPromptingCertImg,
            badge: 'VERIFIED'
        },
        {
            id: 'CERT_115',
            title: 'Viksit Bharat Young Leaders Dialogue 2027',
            issuer: 'Government of India / MyGov',
            category: 'COURSES & HACKATHONS',
            date: 'Participation',
            image: viksitBharatCertImg,
            badge: 'PARTICIPATION'
        },
        {
            id: 'CERT_116',
            title: 'Quiz on TB Mukt Bharat Abhiyan',
            issuer: 'Ministry of Health & Family Welfare / MyGov',
            category: 'COURSES & HACKATHONS',
            date: 'Participation',
            image: tbMuktCertImg,
            badge: 'PARTICIPATION'
        }
    ]

    const filteredCerts = activeCertCategory === 'ALL'
        ? certList
        : certList.filter(c => c.category === activeCertCategory)

    return (
        <section id="experience" className="section container">
            <div className="section-header">
                <span className="section-subtitle">Resume & Credentials</span>
                <h2 className="section-title">Experience & <span className="gradient-text">Qualifications</span></h2>
            </div>

            {/* Top 3-Column Experience Grid */}
            <div className="experience-grid">
                {/* Work Experience */}
                <div className="exp-column">
                    <h3 className="column-title"><Briefcase size={18} /> WORK_HISTORY</h3>
                    <div className="timeline">
                        <div className="timeline-item cyber-card scanline-container">
                            <div className="entry-id">LOG_ID: EXP_001</div>
                            <span className="timeline-date">Aug 2026 - Present</span>
                            <h4>VAPT Intern</h4>
                            <h5>UptoSkills, Delhi, India</h5>
                            <ul className="timeline-details">
                                <li>Conducting Vulnerability Assessment and Penetration Testing (VAPT)</li>
                                <li>Identifying system vulnerabilities, evaluating risk exposure, and formulating mitigation strategies</li>
                            </ul>
                        </div>
                        <div className="timeline-item cyber-card scanline-container">
                            <div className="entry-id">LOG_ID: EXP_002</div>
                            <span className="timeline-date">Dec 2025 - Jan 2026</span>
                            <h4>Cyber Security Engineer</h4>
                            <h5>Sunbeam Infotech, Pune, India</h5>
                            <ul className="timeline-details">
                                <li>Worked on Intrusion Detection & Prevention Systems (IDS/IPS)</li>
                                <li>Monitored and analyzed network traffic for suspicious activity and threats</li>
                            </ul>
                            <div style={{ marginTop: '0.8rem' }}>
                                <button 
                                    className="ledger-view-btn"
                                    onClick={() => setSelectedCert(certList.find(c => c.id === 'CERT_103'))}
                                >
                                    <Eye size={13} /> VIEW CERTIFICATE (GRADE A+)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="exp-column">
                    <h3 className="column-title"><GraduationCap size={18} /> EDU_HISTORY</h3>
                    <div className="timeline">
                        <div className="timeline-item cyber-card scanline-container">
                            <div className="entry-id">LOG_ID: EDU_001</div>
                            <span className="timeline-date">Nov 2022 - Present</span>
                            <h4>B.Tech in Computer Engineering</h4>
                            <h5>DKTE's Textile and Engineering Institute (Autonomous), Ichalkaranji</h5>
                        </div>
                        <div className="timeline-item cyber-card scanline-container">
                            <div className="entry-id">LOG_ID: EDU_002</div>
                            <span className="timeline-date">June 2020</span>
                            <h4>10th ICSE</h4>
                            <h5>Santhome School, Sangli, India</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* Streamlined Cyber Credential Ledger */}
            <div className="certifications-section">
                <div className="certs-section-header">
                    <div>
                        <span className="section-subtitle" style={{ marginBottom: '0.4rem', fontSize: '0.7rem' }}>VERIFIED_LEDGER</span>
                        <h3 className="certs-main-title">
                            <Award size={20} /> CERT_DB // CREDENTIAL REGISTRY
                        </h3>
                    </div>
                    <span className="cert-count-pill">{filteredCerts.length} OF {certList.length} CERTIFICATIONS</span>
                </div>

                {/* Category Filter Chips */}
                <div className="cert-filter-pills">
                    {certCategories.map((cat) => {
                        const count = cat === 'ALL' ? certList.length : certList.filter(c => c.category === cat).length
                        return (
                            <button
                                key={cat}
                                className={`cert-filter-chip ${activeCertCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCertCategory(cat)}
                            >
                                {cat} <span className="chip-count">({count})</span>
                            </button>
                        )
                    })}
                </div>

                {/* 2-Column Streamlined Credential Ledger */}
                <div className="cert-ledger-grid">
                    {filteredCerts.map((cert) => (
                        <div 
                            key={cert.id} 
                            className={`cert-ledger-row cyber-card ${cert.image ? 'clickable' : ''}`}
                            onClick={() => cert.image && setSelectedCert(cert)}
                        >
                            <div className="ledger-left">
                                <div className="ledger-icon-box">
                                    <ShieldCheck size={18} />
                                </div>
                                <div className="ledger-info">
                                    <div className="ledger-meta-header">
                                        <span className="ledger-id">{cert.id}</span>
                                        <span className={`cert-badge-tag ${cert.badge.toLowerCase()}`}>{cert.badge}</span>
                                    </div>
                                    <h4 className="ledger-title">{cert.title}</h4>
                                    <p className="ledger-issuer">{cert.issuer}</p>
                                </div>
                            </div>

                            <div className="ledger-right">
                                {cert.date && <span className="ledger-date">{cert.date}</span>}
                                {cert.image ? (
                                    <button 
                                        className="ledger-view-btn"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setSelectedCert(cert)
                                        }}
                                        title={`View ${cert.title}`}
                                    >
                                        <Eye size={14} /> VIEW
                                    </button>
                                ) : (
                                    <span className="ledger-recorded-tag">RECORDED</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* In-Page Certificate Roll-out Viewer Modal */}
            {selectedCert && (
                <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
                    <div className="cert-modal-dialog cyber-card scanline-container" onClick={(e) => e.stopPropagation()}>
                        <div className="target-lock">
                            <span></span><span></span><span></span><span></span>
                        </div>
                        
                        <div className="cert-modal-header">
                            <button className="cyber-back-btn" onClick={() => setSelectedCert(null)}>
                                <ArrowLeft size={16} /> BACK
                            </button>
                            <div className="cert-header-meta">
                                <span className="modal-cert-id">SYS_VERIFIED_DOC // {selectedCert.id}</span>
                                <h3 className="modal-cert-title">{selectedCert.title}</h3>
                            </div>
                            <button className="cert-close-btn" onClick={() => setSelectedCert(null)} aria-label="Close">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="cert-modal-body">
                            <div className="cert-img-frame">
                                <div className="modal-scanline"></div>
                                <img 
                                    src={selectedCert.image} 
                                    alt={selectedCert.title} 
                                    className="cert-full-image" 
                                />
                            </div>
                            <div className="cert-modal-footer-info">
                                <div className="cert-meta-tag">
                                    <ShieldCheck size={16} color="var(--primary)" />
                                    <span>ISSUER: <strong>{selectedCert.issuer}</strong></span>
                                </div>
                                <div className="cert-meta-tag">
                                    <span>DATE: <strong>{selectedCert.date}</strong></span>
                                </div>
                                <button className="cyber-back-btn" onClick={() => setSelectedCert(null)} style={{ marginLeft: 'auto' }}>
                                    <ArrowLeft size={16} /> RETURN_TO_LIST
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .experience-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 3rem;
                }

                .column-title {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 2rem;
                    color: var(--primary);
                    font-size: 1.1rem;
                    font-family: var(--font-heading);
                    border-left: 3px solid var(--primary);
                    padding-left: 1rem;
                    letter-spacing: 2px;
                }

                .timeline {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                /* Verified Ledger Section */
                .certifications-section {
                    margin-top: 4.5rem;
                    padding-top: 3rem;
                    border-top: 1px solid var(--glass-border);
                }

                .certs-section-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .certs-main-title {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    color: var(--primary);
                    font-size: 1.2rem;
                    font-family: var(--font-heading);
                    border-left: 3px solid var(--primary);
                    padding-left: 1rem;
                    letter-spacing: 2px;
                    margin: 0;
                }

                .cert-count-pill {
                    font-size: 0.7rem;
                    font-family: var(--font-heading);
                    color: var(--primary);
                    background: rgba(0, 229, 163, 0.08);
                    border: 1px solid var(--primary-glow);
                    padding: 0.35rem 0.8rem;
                    border-radius: 100px;
                    letter-spacing: 1.5px;
                }

                /* Category Filter Chips */
                .cert-filter-pills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.6rem;
                    margin-bottom: 2rem;
                }

                .cert-filter-chip {
                    background: rgba(10, 25, 47, 0.6);
                    border: 1px solid var(--glass-border);
                    color: var(--text-secondary);
                    font-family: var(--font-heading);
                    font-size: 0.75rem;
                    padding: 0.45rem 0.9rem;
                    border-radius: 4px;
                    cursor: pointer;
                    letter-spacing: 1px;
                    transition: all 0.25s ease;
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                }

                .cert-filter-chip:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                    background: rgba(0, 229, 163, 0.05);
                }

                .cert-filter-chip.active {
                    background: rgba(0, 229, 163, 0.12);
                    border-color: var(--primary);
                    color: var(--primary);
                    box-shadow: 0 0 15px rgba(0, 229, 163, 0.2);
                }

                .chip-count {
                    font-size: 0.7rem;
                    opacity: 0.7;
                }

                /* 2-Column Streamlined Ledger Grid */
                .cert-ledger-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
                    gap: 1rem;
                }

                .cert-ledger-row {
                    padding: 1.1rem 1.3rem;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    border: 1px solid rgba(0, 229, 163, 0.12);
                    background: rgba(10, 25, 47, 0.45);
                    transition: all 0.25s ease;
                }

                .cert-ledger-row.clickable {
                    cursor: pointer;
                }

                .cert-ledger-row:hover {
                    border-color: var(--primary);
                    background: rgba(0, 229, 163, 0.04);
                    transform: translateX(4px);
                    box-shadow: 0 0 20px rgba(0, 229, 163, 0.1);
                }

                .ledger-left {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    flex: 1;
                    min-width: 0;
                }

                .ledger-icon-box {
                    width: 36px;
                    height: 36px;
                    border-radius: 6px;
                    background: rgba(0, 229, 163, 0.08);
                    border: 1px solid rgba(0, 229, 163, 0.25);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary);
                    flex-shrink: 0;
                }

                .ledger-info {
                    flex: 1;
                    min-width: 0;
                }

                .ledger-meta-header {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    margin-bottom: 0.25rem;
                }

                .ledger-id {
                    font-size: 0.65rem;
                    color: var(--primary);
                    opacity: 0.75;
                    font-family: var(--font-heading);
                    letter-spacing: 1px;
                }

                .cert-badge-tag {
                    font-size: 0.6rem;
                    padding: 0.15rem 0.5rem;
                    border-radius: 2px;
                    font-family: var(--font-heading);
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    border: 1px solid var(--glass-border);
                }

                .cert-badge-tag.verified {
                    color: #00e5a3;
                    border-color: rgba(0, 229, 163, 0.3);
                    background: rgba(0, 229, 163, 0.06);
                }

                .cert-badge-tag.participation {
                    color: #00fff9;
                    border-color: rgba(0, 255, 249, 0.3);
                    background: rgba(0, 255, 249, 0.06);
                }

                .cert-badge-tag.training, .cert-badge-tag.hackathon {
                    color: #fbff00;
                    border-color: rgba(251, 255, 0, 0.3);
                    background: rgba(251, 255, 0, 0.06);
                }

                .ledger-title {
                    font-size: 0.95rem;
                    color: var(--text-primary);
                    margin: 0 0 0.2rem 0;
                    line-height: 1.35;
                    font-weight: 600;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .ledger-issuer {
                    font-size: 0.78rem;
                    color: var(--text-secondary);
                    margin: 0;
                    opacity: 0.85;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .ledger-right {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 0.5rem;
                    flex-shrink: 0;
                }

                .ledger-date {
                    font-size: 0.7rem;
                    color: var(--accent);
                    font-family: var(--font-heading);
                    letter-spacing: 0.5px;
                    white-space: nowrap;
                }

                .ledger-view-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    background: rgba(0, 229, 163, 0.08);
                    border: 1px solid var(--primary);
                    color: var(--primary);
                    padding: 0.35rem 0.75rem;
                    font-size: 0.72rem;
                    font-family: var(--font-heading);
                    font-weight: 700;
                    letter-spacing: 1px;
                    border-radius: 3px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .ledger-view-btn:hover {
                    background: var(--primary);
                    color: #000;
                    box-shadow: 0 0 12px var(--primary-glow);
                }

                .ledger-recorded-tag {
                    font-size: 0.65rem;
                    font-family: var(--font-heading);
                    color: var(--text-secondary);
                    opacity: 0.6;
                    letter-spacing: 1px;
                    padding: 0.2rem 0.5rem;
                    border: 1px dashed var(--glass-border);
                    border-radius: 3px;
                }

                .timeline-item, .cert-item {
                    padding: 1.5rem;
                    border-radius: 4px;
                    position: relative;
                }

                .entry-id {
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    font-size: 0.6rem;
                    color: var(--primary);
                    opacity: 0.4;
                    font-family: var(--font-heading);
                }

                .timeline-date {
                    font-size: 0.75rem;
                    color: var(--accent);
                    font-family: var(--font-heading);
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    display: block;
                }

                .timeline-item h4, .cert-item h4 {
                    font-size: 1.2rem;
                    color: var(--text-primary);
                    margin-bottom: 0.3rem;
                    letter-spacing: 0.5px;
                }

                .timeline-item h5 {
                    font-size: 0.85rem;
                    color: #888;
                    font-weight: 500;
                    margin-bottom: 1rem;
                }

                .timeline-details {
                    list-style-type: none;
                }

                .timeline-details li {
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                    margin-bottom: 0.6rem;
                    position: relative;
                    padding-left: 1.2rem;
                    opacity: 0.8;
                }

                .timeline-details li::before {
                    content: '>';
                    position: absolute;
                    left: 0;
                    color: var(--primary);
                    font-family: var(--font-heading);
                }

                .cert-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1.2rem;
                }

                .cert-item p {
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    opacity: 0.8;
                }

                .view-cert-btn {
                    margin-top: 0.9rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(0, 229, 163, 0.08);
                    border: 1px solid var(--primary);
                    color: var(--primary);
                    padding: 0.45rem 0.9rem;
                    font-size: 0.75rem;
                    font-family: var(--font-heading);
                    font-weight: 700;
                    letter-spacing: 1px;
                    border-radius: 3px;
                    cursor: pointer;
                    transition: all 0.25s ease;
                }

                .view-cert-btn:hover {
                    background: var(--primary);
                    color: #000;
                    box-shadow: 0 0 15px var(--primary-glow);
                    transform: translateY(-2px);
                }

                .cert-badge-tag {
                    display: inline-block;
                    margin-top: 0.7rem;
                    font-size: 0.65rem;
                    color: var(--text-secondary);
                    border: 1px solid var(--glass-border);
                    padding: 0.2rem 0.6rem;
                    border-radius: 2px;
                    font-family: var(--font-heading);
                    opacity: 0.7;
                }

                /* In-Page Certificate Roll-out Viewer Modal */
                .cert-modal-backdrop {
                    position: fixed;
                    inset: 0;
                    background: rgba(2, 6, 23, 0.9);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1.5rem;
                    animation: certFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .cert-modal-dialog {
                    width: 100%;
                    max-width: 900px;
                    max-height: 92vh;
                    display: flex;
                    flex-direction: column;
                    background: #070d14;
                    border: 1px solid var(--primary);
                    box-shadow: 0 0 40px rgba(0, 229, 163, 0.25), inset 0 0 20px rgba(0, 229, 163, 0.05);
                    border-radius: 6px;
                    overflow: hidden;
                    position: relative;
                    animation: certRollUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                }

                @keyframes certFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes certRollUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px) scale(0.97);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .cert-modal-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    padding: 1.2rem 1.8rem;
                    border-bottom: 1px solid var(--glass-border);
                    background: rgba(0, 0, 0, 0.5);
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

                .cert-header-meta {
                    flex: 1;
                    text-align: center;
                }

                .modal-cert-id {
                    display: block;
                    font-size: 0.7rem;
                    color: var(--accent);
                    font-family: var(--font-heading);
                    letter-spacing: 2px;
                    margin-bottom: 0.2rem;
                }

                .modal-cert-title {
                    font-size: 1.15rem;
                    color: var(--text-primary);
                    letter-spacing: 0.5px;
                    margin: 0;
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

                .cert-modal-body {
                    padding: 1.5rem;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                }

                .cert-img-frame {
                    position: relative;
                    width: 100%;
                    max-height: 60vh;
                    background: #000;
                    border: 1px solid var(--glass-border);
                    border-radius: 4px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .cert-full-image {
                    max-width: 100%;
                    max-height: 58vh;
                    object-fit: contain;
                    display: block;
                    border-radius: 2px;
                }

                .modal-scanline {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: var(--primary);
                    box-shadow: 0 0 15px var(--primary);
                    opacity: 0.6;
                    z-index: 10;
                    animation: modalScan 4s linear infinite;
                    pointer-events: none;
                }

                @keyframes modalScan {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 0.8; }
                    90% { opacity: 0.8; }
                    100% { top: 100%; opacity: 0; }
                }

                .cert-modal-footer-info {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1.2rem;
                    padding-top: 1rem;
                    border-top: 1px solid var(--glass-border);
                }

                .cert-meta-tag {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    font-family: var(--font-heading);
                }

                .cert-meta-tag strong {
                    color: var(--text-primary);
                }

                
                @media (max-width: 768px) {
                    .experience-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                    .timeline-item {
                        padding: 1.1rem;
                    }
                    .certs-section-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.5rem;
                    }
                    .certs-main-title {
                        font-size: 1.1rem;
                    }
                    .cert-filter-pills {
                        overflow-x: auto;
                        flex-wrap: nowrap;
                        justify-content: flex-start;
                        padding-bottom: 0.5rem;
                        -webkit-overflow-scrolling: touch;
                        margin-bottom: 1.2rem;
                    }
                    .cert-filter-chip {
                        white-space: nowrap;
                        flex-shrink: 0;
                        padding: 0.35rem 0.75rem;
                        font-size: 0.68rem;
                    }
                    .cert-ledger-grid {
                        grid-template-columns: 1fr;
                        gap: 0.8rem;
                    }
                    .cert-ledger-row {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.8rem;
                        padding: 1rem;
                    }
                    .ledger-title {
                        white-space: normal;
                        word-break: break-word;
                        font-size: 0.88rem;
                        line-height: 1.35;
                    }
                    .ledger-issuer {
                        white-space: normal;
                        word-break: break-word;
                        font-size: 0.75rem;
                    }
                    .ledger-right {
                        width: 100%;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        padding-top: 0.6rem;
                        border-top: 1px solid rgba(255, 255, 255, 0.06);
                    }
                    .ledger-view-btn {
                        padding: 0.35rem 0.8rem;
                        font-size: 0.72rem;
                    }
                    .cert-modal-header {
                        flex-direction: column;
                        text-align: center;
                        padding: 1rem;
                    }
                    .cert-modal-body {
                        padding: 1rem;
                    }
                    .cert-modal-footer-info {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                }

            `}</style>
        </section>
    )
}

export default Experience
