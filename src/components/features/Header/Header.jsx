import React, { useState } from "react";
import "./Header.css";
import AppleIcon from "@mui/icons-material/Apple";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="header-container">
        <span className="link">
          <AppleIcon style={{ fontSize: "20px" }} />
        </span>
        <Link to="/apple-project-client" className="link">
          Home
        </Link>
        <Link to="/mac" className="link">
          Mac
        </Link>
        <span className="link">iPhon</span>
        <span className="link">iPad</span>
        <span className="link">AirPods</span>

        <Link to="/registration" className="link">
          <PersonIcon style={{ fontSize: "20px" }} />
        </Link>
      </div>

      

      <div className="nav">
       
          <div className="menu-icon" onClick={handleClick}>
          <AppleIcon style={{ fontSize: "20px" }} />

            {click ? <CancelIcon /> : <MenuIcon />}
          </div>
          <ul className={click ? "nav-menu-active" : "nav-menu"}>
            <li onClick={handleClick}>
              <Link to='/' className="media-link">
                a
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to='/' className="media-link">
                a
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to='/' className="media-link">
                a
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to='/' className="media-link">
                a
              </Link>
            </li>
          </ul>
      </div>
    </>
  );
};

export default Header;
