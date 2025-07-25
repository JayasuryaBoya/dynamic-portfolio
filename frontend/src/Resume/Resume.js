import './Resume.css';
const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="name">Jayasurya Boya</h1>
      <p className="contact-info">
        Hyderabad, Telangana | <a href="mailto:bjayasuryaXXXX@gmail.com">bjayasurya@gmail.com</a> | +91 987654XXXX
      </p>
      <p className="links">
        <a href="https://www.linkedin.com/in/jayasurya-b-443a93331" target="_blank" rel="noreferrer">
          LinkedIn
        </a> |{" "}
        <a href="https://leetcode.com/u/Jayasurya_Boya/" target="_blank" rel="noreferrer">
          LeetCode
        </a>
      </p>

      <section>
        <h2>Career Objective</h2>
        <p>
          Enthusiastic Computer Science student with a strong foundation in Java and Agile methodologies.
          Seeking an entry-level software engineering role to apply problem-solving skills and software
          development expertise in building scalable solutions. Eager to collaborate with teams and contribute effectively.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Bachelor of Engineering in Computer Science and Engineering</strong><br />
            University College Of Engineering, Osmania University<br />
            Sep 2023 – Jun 2026<br />
            CGPA: 8.6/10
          </li>
          <li>
            <strong>Diploma in Computer Engineering</strong><br />
            Government Polytechnic Masab Tank<br />
            Aug 2019 – Apr 2023<br />
            CGPA: 9.6/10
          </li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> Java, JavaScript, C</li>
          <li><strong>Technologies:</strong> HTML, CSS, Bootstrap, ReactJS, Express.js</li>
          <li><strong>Databases:</strong> MySQL, MongoDB</li>
          <li><strong>Core Concepts:</strong> Data Structures & Algorithms, Operating System, Computer Networks</li>
        </ul>
      </section>
  <section>
  <h2>Projects</h2>
  <div className="r-project">
    <h3 >My Portfolio Website</h3>
    <ul>
      <li>Built a dynamic portfolio website using the MERN Stack for real-time content updates.</li>
      <li>Implemented secure admin authentication for exclusive control over skills and project entries.</li>
      <li>Designed a responsive, visually rich UI with HTML, CSS, and JavaScript.</li>
    </ul>
    <p><strong>Frontend:</strong> React, HTML, CSS, JavaScript</p>
    <p><strong>Backend:</strong> Node.js, Express.js, MongoDB</p>
  </div>
  <div className="r-project">
    <h3>Customized Blockchain-Based E-Voting System</h3>
    <ul>
      <li>Developed a secure, CLI-based e-voting backend using C++ with blockchain principles from scratch.</li>
      <li>Implemented core concepts like hash chaining, block validation, and tamper-proof storage.</li>
      <li>Used RSA for secure digital signatures and SQLite for managing voting data.</li>
      <li>Ensured vote integrity with real-time chain validation and tamper detection.</li>
    </ul>
    <p><strong>Tech Used:</strong> C++, RSA, SQLite</p>
  </div>
</section>
      <section>
        <h2>Achievements</h2>
        <ul>
          <li>Successfully cleared DSA and Aptitude Exam for NxtWave-NSDC Fellowship Program.</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
