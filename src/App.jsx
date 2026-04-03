import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header className="hero-section">
        <div className="profile-square">
          {/* Ensure your photo is named profile.jpg and placed inside the 'public' folder */}
          <img src="/profile.JPG" alt="Ernest Quibin Ponce" />
        </div>
        
        <h1 className="neon-text">ERNEST QUIBIN PONCE</h1>
        <h3 className="sub-title">Computer Engineering Student | T.I.P. Manila</h3>
        
        <p className="email-text">
          <strong>Email:</strong> meponce@tip.edu.ph | eqponce23@gmail.com
        </p>
        
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/ernest-ponce-980661399/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/ernestponce" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      <main className="content-section">
        {/* Updated Objective Section */}
        <section className="card">
          <h2>Professional Objective</h2>
          <p>
            Highly motivated and dedicated Computer Engineering student with a thorough understanding of computer systems, software development, and hardware design. I am eager to offer my excellent technical skills, critical thinking ability, and analytical mentality to the success of an organization. Seeking opportunities where I can apply my understanding of programming languages, network protocols, and digital circuit design to create unique solutions that improve performance and user experience. Prepared to cooperate with multiple departments to develop secure and trustworthy solutions, backed by a strong foundation in project management, teamwork, and efficient communication.
          </p>
        </section>

        {/* New Educational Background Section */}
        <section className="card">
          <h2>Educational Background</h2>
          <ul>
            <li><strong>Technological Institute of the Philippines - Manila</strong> | B.S. Computer Engineering (2024 - 2029)</li>
            <li><strong>Technological Institute of the Philippines - Manila</strong> | Senior High School, STEM (2022 - 2024)</li>
            <li><strong>Blessed Elena Academy</strong> | Junior High School (2018 - 2022) - <em>High Honor</em></li>
            <li><strong>Blessed Elena Academy</strong> | Elementary (2011 - 2018) - <em>Consistent Honor Student</em></li>
          </ul>
        </section>

        {/* Merged Technical Skills */}
        <section className="card">
          <h2>Technical & Creative Skills</h2>
          <ul>
            <li><strong>Windows Applications:</strong> Excel, Word, PowerPoint (Advanced)</li>
            <li><strong>Creative Software:</strong> Adobe Photoshop, Adobe Illustrator, Premiere Pro, DaVinci Resolve, GIMP (Intermediate)</li>
            <li><strong>Development & Hardware:</strong> Basic Programming, Software/App Development, Computer Languages, Hardware Systems Design (Novice)</li>
            <li><strong>Multimedia:</strong> Videography, Photography, Photo Manipulation (Novice)</li>
          </ul>
        </section>

        {/* New Soft Skills & Traits Section */}
        <section className="card">
          <h2>Soft Skills, Traits & Languages</h2>
          <ul>
            <li><strong>Languages:</strong> English & Filipino (Advanced)</li>
            <li><strong>Core Strengths:</strong> Goal-oriented, Technically Proficient, Optimistic</li>
            <li><strong>Advanced Soft Skills:</strong> Leadership and Teamwork, Public Speaking, Resilience, Efficiency, Flexibility</li>
            <li><strong>Intermediate Soft Skills:</strong> Time Management, Critical Thinking</li>
            <li><strong>Personal Traits:</strong> Punctual, Honest, Trustworthy, Dedicated, Creative, and Keen to details.</li>
          </ul>
        </section>

        {/* Updated Co-Curricular Section */}
        <section className="card">
          <h2>Extra & Co-Curricular Engagements</h2>
          <ul>
            <li><strong>Supreme Student Council (T.I.P. Manila):</strong> <em>Media Officer</em> (January 2023 - June 2024)</li>
          </ul>
        </section>

        <section className="card">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            <div className="project-item">
              <h3>Crypto Pulse Dashboard</h3>
              <p>High-performance React app for real-time cryptocurrency data visualization utilizing Context API and Custom Hooks.</p>
              <a href="https://crypto-pulse-lab4.vercel.app/" target="_blank" rel="noreferrer" className="project-link">View Live App</a>
            </div>

            <div className="project-item">
              <h3>Enrollment UI Portal</h3>
              <p>Responsive student enrollment interface built with CSS Grid and React state-driven form handling.</p>
              <a href="https://ponce-enrollment-ui-design.netlify.app/" target="_blank" rel="noreferrer" className="project-link">View Live App</a>
            </div>
          </div>
        </section>

        <section className="card">
          <h2>Other Previous Projects</h2>
          <ul>
            <li><strong>Project Gatekeeper (Login Portal):</strong> Locally developed project featuring a secure React authentication flow, complex state management, and modern UI.</li>
            <li><strong>Interactive Python Game:</strong> Fully functional game built from scratch utilizing object-oriented programming, custom event handling, and logic.</li>
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;