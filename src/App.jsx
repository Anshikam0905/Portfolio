import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="portfolio">
      <header className="header">
        <h1>Hi, I'm Anshika </h1>
        <p>
          Web Developer | Bootstrap | Django | .NET | Python
        </p>
      </header>

      <section className="about">
        <h2>About </h2>
      <p>
          My journey in technology started with a curiosity for how websites
          work behind the scenes. Over time, I developed skills in both
          front-end and back-end development, which allows me to build complete
          web solutions — from designing user interfaces to deploying fully
          functional web apps.
        <br />
          I enjoy solving real-world problems using technology and constantly
          strive to improve my skills. I’m always excited to learn new frameworks
          and tools, and I’m particularly interested in web development.
        </p>
      </section>

      <section className="skills-section">
        <h2> Skills</h2>
        <div class="skills-grid">
         <div className="skill-card">Python</div>
          <div className="skill-card">Django</div>
          <div className="skill-card">.NET / C#</div>
          <div className="skill-card">SQL Server</div>
          <div className="skill-card">React</div>
          <div className="skill-card">HTML / CSS / Tailwind</div>
          <div className="skill-card">Git & GitHub</div>
          <div className="skill-card">Deployment (Vercel / Render)</div>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="card">
            <h3>E-Learning System</h3>
            <p>
               A comprehensive web-based learning management platform built with <b>Python and Django</b>. It allows students to register, enroll in courses, watch video lectures, take quizzes, and receive completion certificates. 
               Teachers can upload study materials, manage quizzes, and track student progress.
            </p>
          </div>
          <div className="card">
            <h3>ATM Management System</h3>
            <p>
              A secure and user-friendly ATM simulation software developed using <b>C# and .NET Framework</b> . It allows users to perform banking operations such as cash withdrawal,
               deposit, and balance inquiry, with a database backend for transaction storage.
            </p>
          </div>
          <div className="card">
 <h3>Resume Builder (Frontend)</h3>
            <p>
              A modern and responsive digital resume built using <b> HTML and CSS </b>
              to present professional experience, education, and projects. The layout is clean,
              mobile-friendly, and optimized for recruiters to view easily on all devices.
            </p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact </h2>
        <p>Email: <a href="mailto:anshika@example.com">anshika@example.com</a></p>
        <p>GitHub: <a href="https://github.com/Anshikam0905" target="_blank">github.com/Anshikam0905</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/anshika-mourya-542414365/" target="_blank">linkedin.com/in/anshika-mourya-542414365</a></p>
      </section>

      <footer>
        <p>© 2025 Anshika | Built with ❤️ using React + Vite</p>
      </footer>
    </div>
  );
}

export default App;
