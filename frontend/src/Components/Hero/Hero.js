import { useNavigate } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I’m a passionate developer building modern and impactful web experiences.</p>
        <button className="hero-button" onClick={() => navigate('/resume')}>
         View My Resume
        </button>
      </div>
    </section>
  );
}

export default Hero;
