import React from 'react';
import '../products.css';
import {useEffect, useState} from 'react';
import ContentSlider from "../../../features/contentSlider/ContentSlider";
import Card from "../../../features/Card/Card";
import airPods from "../../../images/airPodsPro.png";
import { airPodsData } from '../../../data';
import { getAllAirPods } from '../../../service/products';





const AirPods = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const displayProducts = async () => {
      await getAllAirPods().then((res) => setProducts(res));
    };
    displayProducts();
  }, []);

    return (
      <>
      <div className="products-page">
        <header className="iPhone">
          <h1 className="header-title">AirPods</h1>
          <img src={airPods} alt="" className="img" />
        </header>

        {/* <ContentSlider slides={airPodsData} /> */}
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

export default AirPods

