import React, { useState } from "react";
import { macbooks } from "../../../data";
import Card from "../../../features/Card/Card";
import "../products.css";
import ContentSlider from "../../../features/contentSlider/ContentSlider";
import Modal from "../../../features/Modal/Modal";
import img3 from "../../../images/mac1.png";
import img4 from "../../../images/mac2.png";
import img5 from "../../../images/mac3.png";
import img6 from "../../../images/mac4.png";
import img7 from "../../../images/mac5.png";

const Mac = () => {
  const sliderData = [
    {
      text: "MacBook Air with M1 chip",
    },
    {
      text: "MacBook Air with M2 chip",
    },
    {
      text: "MacBook Pro 13 inch",
    },
    {
      text: "MacBook Pro 14 inch",
    },
    {
      text: "MacBook Pro 16 inch",
    },
  ];

  return (
    <>
      <div className="mac-page">
        <header>
          <h1 className="header-title">MacBook</h1>
          <img
            src="https://www.apple.com/v/macbook-pro-13/m/images/overview/magic_keyboard__brx9diaauwaa_large_2x.jpg"
            width="200px"
          />
        </header>
        <img src={img3} alt="" className="img" />
        <img src={img4} alt="" className="img" />

        <ContentSlider slides={sliderData} />
        <div className="products-container">
          {macbooks.map((mac) => {
            return (
              <>
                <Card
                  img={mac.img}
                  title={mac.title}
                  subTitle={mac.subtitle}
                  price={mac.price}
                />
              </>
            );
          })}
        </div>
        <img src={img7} alt="" className="img" />

        <img src={img5} alt="" className="img" />
      </div>
    </>
  );
};

export default Mac;
