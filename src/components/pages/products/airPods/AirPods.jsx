import React from 'react';
import '../products.css';
import {useEffect, useState} from 'react';
import Card from "../../../features/Card/Card";
import airPods from "../../../images/airPodsPro.png";
import { getAllProducts } from '../../../service/products';





const AirPods = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const displayProducts = async () => {
      const airPods = await getAllProducts().then((res) => res.filter(item => item.category === "airPods"));
      setProducts(airPods);
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

        <div className="products-container">
          {products.map((airPods) => {
            return (
              <>
                <Card
                  img={airPods.gallery[0]}
                  title={airPods.title}
                  price={airPods.price}
                  imgWidth="190px"
                  productId={airPods._id}
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

