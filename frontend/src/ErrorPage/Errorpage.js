import { useRouteError, useNavigate } from "react-router-dom";
import "./Errorpage.css"; // Import the CSS file

function Errorpage() {
  const routeError = useRouteError();
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="error-container">
      <div className="error-code">404</div>
      <div className="error-message">
        Sorry, we couldn’t find {routeError.data.split(' ')[5]} page.
      </div>
      <button className="back-button" onClick={handleBackHome}>
        Back to Home
      </button>
    </div>
  );
}

export default Errorpage;
