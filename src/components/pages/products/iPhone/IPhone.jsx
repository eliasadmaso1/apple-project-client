import React from 'react';
import '../products.css';
import {useEffect, useState} from 'react';
import { getAllIPhones } from '../../../service/products';
import { iPhonesData } from '../../../data';
import iPhone from '../../../images/iphone.png';
import ContentSlider from "../../../features/contentSlider/ContentSlider";
import Card from "../../../features/Card/Card";



const IPhone = () => {

    const [products, setProducts] = useState([]);

  useEffect(() => {
    const displayProducts = async () => {
      await getAllIPhones().then((res) => setProducts(res));
    };
    displayProducts();
  }, []);

    return (
        <>
        <div className="products-page">
          <header className="iPhone">
            <h1 className="header-title">iPhones</h1>
            <img src={iPhone} alt="" className="img" />
          </header>
  
          {/* <ContentSlider slides={iPhonesData} /> */}
          <div className="products-container">
            {products.map((iPhone) => {
              return (
                <>
                  <Card
                    img={iPhone.gallery[0]}
                    title={iPhone.title}
                    price={iPhone.price}
                    imgWidth="190px"
                  />
                </>
              );
            })}
          </div>
        </div>
      </>
    )
}

export default IPhone
