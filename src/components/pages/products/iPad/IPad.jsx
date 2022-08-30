import React from 'react';
import { getAllIPads } from '../../../service/products';
import '../products.css';
import {useEffect, useState} from 'react';
import ContentSlider from "../../../features/contentSlider/ContentSlider";
import Card from "../../../features/Card/Card";
import { iPadsData } from '../../../data';
import iPad from "../../../images/iPadHeader.png";







const IPad = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const displayProducts = async () => {
        await getAllIPads().then((res) => setProducts(res));
      };
      displayProducts();
    }, []);

    return (
        <>
        <div className="products-page">
          <header className="iPhone">
            <h1 className="header-title">iPads</h1>
            <img src={iPad} alt="" className="img" />
          </header>
  
          {/* <ContentSlider slides={iPadsData} /> */}
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

export default IPad
