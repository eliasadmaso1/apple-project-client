import React, { useEffect, useState } from "react";
import { macbooks,sliderData } from "../../../data";
import Card from "../../../features/Card/Card";
import "../products.css";
import ContentSlider from "../../../features/contentSlider/ContentSlider";
import Modal from "../../../features/Modal/Modal";
import img3 from "../../../images/mac1.png";
import img4 from "../../../images/mac2.png";
import img5 from "../../../images/mac3.png";
import img6 from "../../../images/mac4.png";
import img7 from "../../../images/mac.png";
import { getAllMacs } from "../../../service/products";

const Mac = () => {

  const [products,setProducts] = useState([]);

  useEffect(()=>{
    const displayProducts = async()=>{
      await getAllMacs().then(res => setProducts(res));

    }
    displayProducts();

  },[])


  return (
    <>
      <div className="mac-page">
        <header>
          <h1 className="header-title">MacBook</h1>
             <img src={img7} alt="" className="img" />
        </header>
     

        <ContentSlider slides={sliderData} />
        <div className="products-container">
          {products.map((mac) => {
            return (
              <>
                <Card
                  img={mac.gallery[0]}
                  title={`${mac.title} ${mac.subTitle}`}
                  price={mac.price}
                />
              </>
            );
          })}
        </div>

      </div>
    </>
  );
};

export default Mac;
