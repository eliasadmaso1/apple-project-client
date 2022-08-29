import React from "react";
import "./Card.css";
import { Link} from 'react-router-dom';


const Card = ({ img, title, price }) => {
  return (
    <div className="card-container">
      <h3 className="card-title">{title}</h3>
      <img className="card-img" src={img} />
      <div className="sub-container">
        <span>{price}$</span>
     <button className="card-btn"><Link to="/product" className="link-btn">More Details</Link></button>
      </div>
    </div>
  );
};

export default Card;
