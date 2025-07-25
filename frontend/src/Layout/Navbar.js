import { NavLink, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from "react-icons/io5";
import './Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { resetUser } from '../reduxstore/Slices/AdminSlice';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { FaLiraSign } from 'react-icons/fa';

function Navbar() {
  const { loginStatus } = useSelector((state) => state.adminLogin);
  const dispatch = useDispatch();
  const [mobileView, setMobileView] = useState(false);
  const [expand,setExpand]=useState(false);
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    dispatch(resetUser());
  };

  const toggleMobileMenu = () => {
    if(mobileView==false){
      setMobileView(true);
       setExpand(true)
    }
    else
      {
        setMobileView(false)
        setExpand(false)
      }


  };

  return (
    <div className="navbar-root">
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/" className="nav-link logo">
            Jayasurya
          </NavLink>
        </div>

       {
        expand?<button className="hamburger-menu" onClick={toggleMobileMenu}>
          <IoClose className='hamburger-icon'/>
        </button>:<button className="hamburger-menu" onClick={toggleMobileMenu}>
          <GiHamburgerMenu className="hamburger-icon" />
        </button>
       }

        <div className={`navbar-menu ${mobileView ? 'mobileview-navbar' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={() => {setMobileView(false);setExpand(false)}}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => {setMobileView(false);setExpand(false)}}>
            About Me
          </NavLink>
          <NavLink to="/skills" className="nav-link" onClick={() =>{setMobileView(false);setExpand(false)}}>
            Skills
          </NavLink>
          <NavLink to="/projects" className="nav-link" onClick={() =>{setMobileView(false);setExpand(false)}}>
            Projects
          </NavLink>
          {  loginStatus ? (
            <button className="nav-button" onClick={() => {
              handleLogout();
              setMobileView(false);
              setExpand(false);
              
            }}>
              Log Out
            </button>
          ) : (
            <NavLink to="/login" className="nav-link" onClick={() =>{setMobileView(false);setExpand(false)}}>
              LoginAs
            </NavLink>
          )}
        </div>
      </nav>

      <div style={{ minHeight: '70vh' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Navbar;
