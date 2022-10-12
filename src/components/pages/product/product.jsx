import React from 'react';
import Slider from '../../features/Slider/Slider';
import './product.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {getAllProducts} from '../../service/products';
import { addToCart } from '../../service/cart';
import {useMyContext} from '../../context/context';
import {Link} from 'react-router-dom';
import macInBox from '../../images/macInbox.png';
import iphoneInBox from '../../images/iphoneInbox.png';
import ipadInBox from '../../images/ipadInbox.png';
import watchInBox from '../../images/watchInbox.png';




const Product = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");
  const {user, changeToggle,toggle } = useMyContext();

  useEffect(() => {
    const getProduct = async () => {
      const currentProduct = await getAllProducts().then((res) =>
        res.find((item) => item._id === id)
      );
      setProduct(currentProduct);
    };
    getProduct();
  }, []);

  const showMessage = (str)=>{
    setTimeout(()=>{
      setMessage(str);
    },500);
    setTimeout(() => {
      setMessage("");
      
    }, 3000);
  }

  const toCart = async()=>{
    await addToCart(product._id,user._id).then(res => showMessage(res.data))
    changeToggle();

  }
    
    return (
      product &&(<div className="product-container">
            <nav>{product.title}</nav>
            <div className="product-page-details">
                <div className="product-content">
                  <img src={product.gallery[0] ? product.gallery[0] : product.gallery[2] || product.gallery[1] } alt="product" className="product-img-description"/>
                </div>
                <div className="product-content">
                    <h1>{product.title}</h1>
                    <h2>{product.subTitle}</h2>
                    <span className="details-item">{product.CPU}</span>
                    <span className="details-item">{product.GPU}</span>
                    <span className="details-item">{product.memory}</span>
                    <span className="details-item">{product.storage}</span>
                    <span className="details-item" style={{color:"green"}}>{product.status}</span>
                    <span className="details-item">{product.price}$</span>
                    {user ? <button className="product-page-btn" onClick={toCart}>Buy</button> :  <Link to="/registration"><button className="product-page-btn-registration">Register Here To Buy</button></Link>}
                    <span className="message">{message}</span>

                </div>
                <div className="product-content">
                    <Slider data={product.gallery}/>
                </div>
            

             

            </div>
            <div className="product-content">
                <h4 className="inBox-title">What In Box ? </h4>
                    {product.inBox === "mac" ? <img src={macInBox} className="inBoxImg"/> :
                     product.inBox === "iphone" ? <img src={iphoneInBox} className="inBoxImg"/> :
                      product.inBox === "ipad" ? <img src={ipadInBox} className="inBoxImg"/> :
                    product.inBox === "air" ? "airpods" :
                     product.inBox === "watch" ? <img src={watchInBox} className="inBoxImg"/> : "none"}
                </div>
        </div>)
    )
}

export default Product
