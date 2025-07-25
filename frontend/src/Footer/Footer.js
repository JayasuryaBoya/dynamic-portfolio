import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">{new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://leetcode.com/u/Jayasurya_Boya/" target="_blank" aria-label="LeetCode">
          <SiLeetcode />
        </a>
        <a href="https://github.com/JayasuryaBoya" target="_blank"  aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/jayasurya-b-443a93331" target="_blank"  aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
