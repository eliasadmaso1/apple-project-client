import React from "react";
import Slider from "../Slider/Slider";
import "./modal.css";

const Modal = ({ product,cancelModal }) => {

   
  return (
    <>
   <div className="product-modal-container">
        <div className="product-modal">
        <div className="modal-details">
          <h2 className="modal-title">{product?.title}</h2>
          <span className="modal-item">{product?.price}$</span>
          <span className="modal-item">{product?.memory}</span>
          <span className="modal-item" style={{color:"green"}}>{product?.status}</span>
        </div>
        <div className="modal-sideBar">
          <Slider data={product?.gallery}/>
        <button className="modal-btn" onClick={cancelModal}>Cancel</button>
         </div>
         </div>
         </div>
         </>
  );
};

export default Modal;
