import React from "react";
import "./Header.css";
import img1 from '../../images/mac-header.png';
import img2 from '../../images/iphone-header.png';
import img3 from '../../images/ipad-header.png';
import img4 from '../../images/airpods-header.png';
import { useMyContext } from "../../context/context";


const Header = () => {

  const { user } = useMyContext();

 
  return (
    <div className="header-container">
     
      <div className="products-images">
        <div className="item">
        <img src={img1} width="100"/>
        <h4>mac</h4>
        </div>

        <div className="item">
        <img src={img2} width="100"/>
        <h4>iphone</h4>
        </div>

        <div className="item">
        <img src={img3} width="100"/>
        <h4>ipad</h4>
        </div>

        <div className="item">
        <img src={img4} width="100"/>
        <h4>airpods</h4>
        </div>
  </div>
  <div>
          <span className="welcome">Welcome, {user?.firstName}</span>
        </div>

    
    </div>
  );
};

export default Header;
