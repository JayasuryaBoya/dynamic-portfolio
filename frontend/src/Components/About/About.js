import "./About.css";
// import Jayasurya from '../../assets/Jayasurya.png';
import Jayasurya from '../../assets/Profile.avif';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-lead">
            Hi! I’m <strong>Jayasurya Boya</strong>, currently pursuing a Bachelor of Engineering in Computer Science at Osmania University. I’ve built a solid foundation in programming with <strong>Java</strong> and <strong>JavaScript</strong>, and I’m also familiar with <strong>C</strong>, <strong>C++</strong>, <strong>HTML</strong>, and <strong>CSS</strong>.
          </p>
          <p>
            I’ve developed hands-on experience using <strong>React.js</strong> for frontend development and <strong>Express.js</strong> for backend applications, enabling me to build responsive, full-stack web solutions. I actively practice <strong>data structures and algorithms</strong> on <strong>LeetCode</strong>, as I believe strong problem-solving skills are essential to any tech role.
          </p>
          <p>
            I completed my Polytechnic education at <strong>GPT Masabtank</strong> and my SSC at <strong>ZPHS Amaravai</strong>. I enjoy working in collaborative environments, where teamwork and shared learning contribute to better productivity and continuous growth.
          </p>
          <p>
            I’m always eager to explore new technologies, take on challenges, and build meaningful, functional projects that create impact.
          </p>
        </div>
      </div>
       <div className="about-image-wrapper">
          <img
            src={Jayasurya}
            alt="Jayasurya"
            className="about-img"
          />
        </div>
    </section>
  );
};

export default About;
