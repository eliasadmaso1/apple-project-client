import React, { useEffect, useState } from "react";
import { macBookData } from "../../../data";
import Card from "../../../features/Card/Card";
import "../products.css";
import ContentSlider from "../../../features/contentSlider/ContentSlider";
import mac from "../../../images/mac.png";
import { getAllMacs } from "../../../service/products";

const Mac = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const displayProducts = async () => {
      await getAllMacs().then((res) => setProducts(res));
    };
    displayProducts();
  }, []);

  return (
    <>
      <div className="products-page">
        <header className="mac">
          <h1 className="header-title">MacBooks</h1>
          <img src={mac} alt="" className="img" />
        </header>

        {/* <ContentSlider slides={macBookData} /> */}
        <div className="products-container">
          {products.map((mac) => {
            return (
              <>
                <Card
                  img={mac.gallery[0]}
                  title={`${mac.title} ${mac.subTitle}`}
                  price={mac.price}
                  imgWidth="290px"
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
