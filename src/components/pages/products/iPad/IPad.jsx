import React from 'react';
import { getAllProducts } from '../../../service/products';
import '../products.css';
import {useEffect, useState} from 'react';
import Card from "../../../features/Card/Card";
import iPad from "../../../images/iPadHeader.png";







const IPad = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const displayProducts = async () => {
        const iPads = await getAllProducts().then((res) => res.filter(item => item.category === "iPads"));
        setProducts(iPads);
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
  
          <div className="products-container">
            {products.map((iPad) => {
              return (
                <>
                  <Card
                    img={iPad.gallery[0]}
                    title={iPad.title}
                    price={iPad.price}
                    imgWidth="190px"
                    productId={iPad._id}
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
