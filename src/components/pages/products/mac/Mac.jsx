import React, { useEffect, useState } from "react";
import Card from "../../../features/Card/Card";
import "../products.css";
import mac from "../../../images/mac.png";
import { getAllProducts } from "../../../service/products";

const Mac = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const displayProducts = async () => {
      const macs = await getAllProducts().then((res) => res.filter(item => item.category === "MacBook"));
      setProducts(macs);
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

        <div className="products-container">
          {products.map((mac) => {
            return (
              <>
                <Card
                  img={mac.gallery[0]}
                  title={`${mac.title} ${mac.subTitle}`}
                  price={mac.price}
                  imgWidth="290px"
                  productId={mac._id}
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
