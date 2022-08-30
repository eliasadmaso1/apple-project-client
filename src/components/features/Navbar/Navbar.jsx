import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import PersonIcon from "@mui/icons-material/Person";



const Navbar = () => {

  const navRef = useRef();

  const handleChange = ()=>{
      navRef.current.classList.toggle('responsive-navbar');
  }

  return (
    <header>
      <AppleIcon style={{ fontSize: "25px" }}/>

      <nav ref={navRef}>
        <Link to="/apple-project-client" onClick={handleChange}>Home</Link>
        <Link to="/mac" onClick={handleChange}>Mac</Link>
        <Link to="/iPhone" onClick={handleChange}>iPhone</Link>
        <Link to="/iPad" onClick={handleChange}>iPad</Link>
        <Link to="/airPods" onClick={handleChange}>AirPods</Link>
        <Link to="/login" onClick={handleChange}>Login</Link>

        <button onClick={handleChange} className="nav-btn nav-close-btn">
          <CloseIcon style={{fontSize:"25px"}}/>
        </button>
      </nav>
      <button onClick={handleChange} className="nav-btn">
        <MenuIcon style={{fontSize:"25px"}}/>
      </button>
    </header>
  );
};

export default Navbar;
