import React from 'react';
import Slider from '../../features/Slider/Slider';
import './product.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {getAllProducts} from '../../service/products';
import { addToCart } from '../../service/cart';
import {useMyContext} from '../../context/context';
import {Link} from 'react-router-dom';


const Product = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");
  const {user} = useMyContext();

  useEffect(() => {
    const getProduct = async () => {
      const currentProduct = await getAllProducts().then((res) =>
        res.find((item) => item._id === id)
      );
      setProduct(currentProduct);
    };
    getProduct();
  }, []);

  const toCart = async()=>{
    await addToCart(product._id,user._id);

  }
    
    return (
      product &&(<div className="product-container">
            <nav>{product.title}</nav>
            <h1 className="product-page-title">Choose your new {product.title}</h1>
            <div className="product-page-details">
                <div className="product-content">
                  <img src={product.gallery[3] ? product.gallery[3] : product.gallery[2] || product.gallery[1] } alt="product" className="product-img-description"/>
                </div>
                <div className="product-content">
                    <h1>{product.title}</h1>
                    <h2>{product.subTitle}</h2>
                    <span className="details-item">{product.CPU}</span>
                    <span className="details-item">{product.GPU}</span>
                    <span className="details-item">{product.memory}</span>
                    <span className="details-item">{product.storage}</span>
                    <span className="details-item">{product.status}</span>
                    <span className="details-item">{product.price}$</span>
                    {user ? <button className="product-page-btn" onClick={toCart}>Buy</button> :  <Link to="/registration"><button className="product-page-btn-registration">Register Here To Buy</button></Link>}

                </div>
                <div className="product-content">
                    <Slider data={product.gallery}/>
                </div>
             

            </div>
        </div>)
    )
}

export default Product
