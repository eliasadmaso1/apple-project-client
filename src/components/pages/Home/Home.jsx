import React from "react";
import "./Home.css";
import iPhone from "../../images/iphone.png";
import macBooks from "../../images/macBooks.png";
import iPhones from "../../images/iPhones.png";
import iPads from "../../images/iPads.png";
import img4 from "../../images/mac2.png";
import mac from "../../images/mac3.png";
import img6 from "../../images/macBack.png";
import img7 from "../../images/mac5.png";
import iPad from "../../images/iPad.png";
import img9 from "../../images/iPad1.png";
import img10 from "../../images/iPad2.png";
import airPods from "../../images/airPods.png";
import airPodsMax from "../../images/airPodsMax.png";
import airPods2 from "../../images/airPods2.png";
import ContentSlider from "../../features/contentSlider/ContentSlider";
import { Link } from "react-router-dom";

const Home = () => {
  const sliderData = [
    {
      text: "iPhons",
    },
    {
      text: "MacBooks",
    },
    {
      text: "iPads",
    },
    {
      text: "airPods",
    },
    {
      text: "Best Products",
    },
  ];
  return (
    <div className="home-container">
      <header>
        <ContentSlider slides={sliderData} />
      </header>
      <div className="home-section">
        <h1 className="home-section-title">iPhons</h1>
        <img src={iPhone} alt="" className="img" />
        <div className="shop-link">
          <h1>Choose Your iPhones</h1>
          <img src={iPhones} alt=""  className="img" />
          <button className="section-btn">
            <Link to="/" className="link">
              Shop
            </Link>
          </button>
        </div>
      </div>

      <div className="home-section">
        <h1 className="home-section-title">MacBooks</h1>
        <img src={mac} alt="" className="img" />
        <div className="shop-link">
          <h1>Choose Your MacBook</h1>
          <img src={macBooks} alt=""  className="img" />
          <button className="section-btn">
            <Link to="/" className="link">
              Shop
            </Link>
          </button>
        </div>
      </div>

      <div className="home-section">
        <h1 className="home-section-title">iPads</h1>
        <img src={iPad} alt="" className="img" />
        <div className="shop-link">
          <h1>Choose Your iPads</h1>
          <img src={iPads} alt=""  className="img" />
          <button className="section-btn">
            <Link to="/" className="link">
              Shop
            </Link>
          </button>
        </div>
      </div>

      <div className="home-section">
        <h1 className="home-section-title">AirPods</h1>

        <img src={airPodsMax} alt="" className="img" />
        <div className="shop-link">
          <h1>Choose Your airPods</h1>
          <img src={airPods} alt=""  className="img" />
          <button className="section-btn">
            <Link to="/" className="link">
              Shop
            </Link>
          </button>
        </div>
        <img src={airPods2} alt="" className="img" />
      </div>
    </div>
  );
};

export default Home;
