import React from 'react';
import '../products.css';
import {useEffect, useState} from 'react';
import { getAllProducts } from '../../../service/products';
import iPhone from '../../../images/iphone.png';
import Card from "../../../features/Card/Card";



const IPhone = () => {

    const [products, setProducts] = useState([]);

  useEffect(() => {
    const displayProducts = async () => {
      const iPhones = await getAllProducts().then((res) => res.filter(item => item.category === "iPhone"));
      setProducts(iPhones);
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
  
          <div className="products-container">
            {products.map((iPhone) => {
              return (
                <>
                  <Card
                    img={iPhone.gallery[0]}
                    title={iPhone.title}
                    price={iPhone.price}
                    imgWidth="190px"
                    productId={iPhone._id}
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
