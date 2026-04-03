import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [logMessages, setLogMessages] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const messages = [
      "SYSTEM INITIALIZATION...",
      "VITE SERVER: OK",
      "REMOTE SYNC: COMPLETE",
      "CHECKING DIRECTORIES...",
      "PROFILE IMAGE: VERIFIED",
      "LOADING USER DATA...",
      "FETCHING REPOSITORIES...",
      "SYSTEM READY_"
    ];
    let currentIndex = 0;
    const logInterval = setInterval(() => {
      if (currentIndex < messages.length) {
        setLogMessages(prev => [...prev, messages[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 1000);
    return () => clearInterval(logInterval);
  }, []);

  const binaryBits = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${15 + Math.random() * 30}s`,
      animationDelay: `-${Math.random() * 30}s`,
      fontSize: `${0.8 + Math.random() * 1.5}rem`,
      opacity: 0.1 + Math.random() * 0.4,
      text: Math.random() > 0.5 ? '0' : '1'
    }));
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div className="scrolling-grid-bg"></div>
      <div className="binary-background">
        {binaryBits.map(bit => (
          <span key={bit.id} className="floating-bit" style={{ left: bit.left, fontSize: bit.fontSize, opacity: bit.opacity, animationDuration: bit.animationDuration, animationDelay: bit.animationDelay }}>
            {bit.text}
          </span>
        ))}
      </div>
      
      <div className="dashboard-grid">
        
        {/* ================= LEFT COLUMN ================= */}
        <aside className="column left-column">
          <div className="panel status-panel system-sync">
            <h3 className="panel-title text-cyber">SYSTEM STATUS</h3>
            <div className="clock-display text-cyber-glow">{time}</div>
            
            <div className="network-metrics">
              <div className="metric-row"><span>UPLINK:</span> <span className="text-cyber">SECURE</span></div>
              <div className="metric-row"><span>LATENCY:</span> <span className="text-cyber">14ms</span></div>
              <div className="metric-row"><span>PACKETS:</span> <span className="text-cyber">0% LOSS</span></div>
            </div>

            <div className="indicator-group" style={{marginTop: '15px'}}>
              <div className="indicator"><span className="pulse-dot active"></span><span className="status-label">Server Active</span></div>
              <div className="indicator"><span className="pulse-dot active purple"></span><span className="status-label">GitHub Sync</span></div>
            </div>
          </div>

          <div className="panel leadership-panel leadership-glow">
            <h3 className="panel-title text-cyber">STUDENT LEADERSHIP</h3>
            <div className="leadership-content">
              <div className="role-card current-media">
                <span className="role-title text-cyber">Media Officer</span>
                <span className="role-org text-cyber">Supreme Student Council</span>
                <span className="role-date text-muted">Jan 2023 - Jun 2024</span>
                <ul className="cyber-bullets">
                  <li>Directed multimedia campaigns for university-wide events.</li>
                  <li>Bridged the gap between technical execution and visual storytelling.</li>
                </ul>
              </div>
              <div className="role-card previous-pro">
                <span className="role-title text-cyber-purple">Public Relations Officer</span>
                <span className="role-org text-cyber-purple">SSC (Senior High School)</span>
                <span className="role-date text-muted">2022 - 2024</span>
                <ul className="cyber-bullets">
                  <li>Managed internal and external student communications.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="panel log-panel system-sync">
            <h3 className="panel-title text-cyber">SYSTEM LOG</h3>
            <div className="log-window terminal-glow">
              {logMessages.map((msg, index) => <div key={index} className="log-entry">{'>'} {msg}</div>)}
              <div className="cursor-blink">_</div>
            </div>
          </div>
        </aside>

        {/* ================= CENTER COLUMN ================= */}
        <main className="column center-column">
          <header className="hero-panel center-hero">
            <div className="profile-square neon-border">
              <img src="/profile.JPG" alt="Ernest Quibin Ponce" />
            </div>
            <h1 className="neon-text polished-text">ERNEST QUIBIN PONCE</h1>
            <h3 className="sub-title futuristic-sub-title">Computer Engineering Student | T.I.P. Manila</h3>
            <p className="email-text futuristic-email-text">
              Email: <span className="accent-text">meponce@tip.edu.ph</span> | <span className="accent-text">eqponce23@gmail.com</span>
            </p>
            <div className="contact-links center-links">
              <a href="https://www.linkedin.com/in/ernest-ponce-980661399/" target="_blank" rel="noreferrer" className="cyber-btn sleek-btn">LinkedIn</a>
              <a href="https://github.com/ernestponce" target="_blank" rel="noreferrer" className="cyber-btn sleek-btn">GitHub</a>
            </div>
          </header>

          <section className="panel content-panel core-card">
            <h2 className="panel-title text-cyber-glow">EXECUTIVE SUMMARY</h2>
            <p className="body-text polished-body-text">
              Highly motivated Computer Engineering student with a robust foundation in both software development and hardware architecture. Combining an analytical mindset with creative media expertise, I specialize in building responsive, state-driven web applications and secure authentication flows. Proven ability to cooperate with multidisciplinary teams, manage complex projects, and leverage modern frameworks to deliver high-performance technological solutions.
            </p>
          </section>

          <section className="panel content-panel core-card skills-card">
            <h2 className="panel-title text-cyber-glow">CORE COMPETENCIES & TECH STACK</h2>
            
            <div className="skill-category">
              <h4>// Software & Web Development</h4>
              <div className="tech-tags">
                <span className="tag cyan-tag">React.js</span>
                <span className="tag cyan-tag">JavaScript (ES6+)</span>
                <span className="tag cyan-tag">Python</span>
                <span className="tag cyan-tag">Java</span>
                <span className="tag cyan-tag">HTML5 / CSS3</span>
                <span className="tag cyan-tag">Git / GitHub</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>// Creative & Multimedia</h4>
              <div className="tech-tags">
                <span className="tag purple-tag">UI/UX Design</span>
                <span className="tag purple-tag">Adobe Premiere Pro</span>
                <span className="tag purple-tag">DaVinci Resolve</span>
                <span className="tag purple-tag">Photoshop / Illustrator</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>// Professional Soft Skills</h4>
              <p className="text-muted" style={{fontSize: '0.9rem', marginTop: '5px'}}>
                Advanced Leadership & Teamwork, Public Speaking, Resilience, Critical Thinking, Time Management.
              </p>
            </div>
          </section>

          <section className="panel content-panel core-card education-card">
            <h2 className="panel-title text-cyber-glow">EDUCATIONAL BACKGROUND</h2>
            <ul className="timeline educational-timeline">
              <li>
                <strong>T.I.P. Manila</strong> | B.S. Computer Engineering <em>(2024 - 2029)</em><br/>
                <span className="text-muted" style={{fontSize: '0.85rem'}}>Current Focus: Hardware Systems Design, Basic Programming, Network Protocols.</span>
              </li>
              <li><strong>T.I.P. Manila</strong> | Senior High School, STEM <em>(2022 - 2024)</em> - High Honor</li>
              <li><strong>Blessed Elena Academy</strong> | Junior High School <em>(2018 - 2022) - High Honor</em></li>
            </ul>
          </section>
        </main>

        {/* ================= RIGHT COLUMN ================= */}
        <aside className="column right-column">
          <div className="panel projects-panel engagement-glow">
            <h3 className="panel-title glow-purple">PRODUCTION DEPLOYMENTS</h3>
            
            <div className="project-card sleek-card">
              <h4>Crypto Pulse Dashboard</h4>
              <p>Real-time cryptocurrency data visualization platform.</p>
              <ul className="cyber-bullets">
                <li>Engineered with React.js using Context API for state management.</li>
                <li>Implemented Custom Hooks for efficient live-data fetching.</li>
              </ul>
              <a href="https://crypto-pulse-lab4.vercel.app/" target="_blank" rel="noreferrer" className="action-btn text-cyber-glow-alt">Initialize App //</a>
            </div>

            <div className="project-card sleek-card">
              <h4>Enrollment UI Portal</h4>
              <p>Responsive student enrollment and registration interface.</p>
              <ul className="cyber-bullets">
                <li>Architected complex layouts utilizing CSS Grid and Flexbox.</li>
                <li>Developed state-driven form handling for secure data entry.</li>
              </ul>
              <a href="https://ponce-enrollment-ui-design.netlify.app/" target="_blank" rel="noreferrer" className="action-btn text-cyber-glow-alt">Initialize App //</a>
            </div>
          </div>

          <div className="panel archive-panel engagement-glow">
            <h3 className="panel-title text-cyber-purple">LOCAL DEVELOPMENT ARCHIVES</h3>
            <ul className="archive-list polished-archive-list">
              <li>
                <strong>Project Gatekeeper</strong>
                <p>Locally developed secure authentication portal focusing on complex React routing and logic.</p>
              </li>
              <li>
                <strong>Interactive Python Game</strong>
                <p>Fully functional desktop application utilizing object-oriented programming (OOP) and custom event handling.</p>
              </li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
}

export default App;