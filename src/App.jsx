import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header className="hero-section">
        <div className="profile-square">
          <img src="/profile.jpg" alt="Ernest Quibin Ponce" />
        </div>
        
        <h1 className="neon-text">ERNEST QUIBIN PONCE</h1>
        <h3 className="sub-title">Computer Engineering Student | T.I.P. Manila</h3>
        
        <div className="contact-links">
          <a href="mailto:meponce@tip.edu.ph">Email</a>
          <a href="https://www.linkedin.com/in/ernest-ponce-980661399/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/ernestponce" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      <main className="content-section">
        <section className="card">
          <h2>Professional Summary</h2>
          <p>
            Dedicated Computer Engineering student at T.I.P. Manila with a strong foundation in both technical engineering and creative media. 
            Proficient in building dynamic web applications using React.js and Python, paired with extensive experience in UI/UX design, videography, and digital editing. A proven student leader skilled at bridging the gap between complex technical execution and compelling visual storytelling.
          </p>
        </section>

        <section className="card">
          <h2>Technical & Creative Skills</h2>
          <ul>
            <li><strong>Development:</strong> React.js, Python, Java, JavaScript (ES6+), HTML5, CSS3</li>
            <li><strong>Multimedia:</strong> Video Editing, UI/UX Design, Graphic Design, Videography, Photography</li>
            <li><strong>Tools:</strong> Premiere Pro, DaVinci Resolve, Photoshop, Illustrator, GIMP, Git/GitHub</li>
          </ul>
        </section>

        <section className="card">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            <div className="project-item">
              <h3>Crypto-Pulse Dashboard</h3>
              <p>High-performance React app for real-time cryptocurrency data visualization utilizing Context API and Custom Hooks.</p>
            </div>
            <div className="project-item">
              <h3>Project Gatekeeper</h3>
              <p>Interactive login portal focusing on secure authentication flows, complex state management, and modern UI.</p>
            </div>
            <div className="project-item">
              <h3>Enrollment UI Portal</h3>
              <p>Responsive student enrollment interface built with CSS Grid and React state-driven form handling.</p>
            </div>
            <div className="project-item">
              <h3>Interactive Python Game</h3>
              <p>Fully functional game built from scratch utilizing object-oriented programming, custom event handling, and logic.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;