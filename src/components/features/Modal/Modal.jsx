import React, { useState } from "react";
import Slider from "../Slider/Slider";
import "./modal.css";
import CancelIcon from "@mui/icons-material/Cancel";

const Modal = ({ title, price, data,boolean }) => {

    const [openModal,setOpenModal] = useState(false)
  return (
    <>
    {openModal ? <> <div className="cancel-modal">
        <CancelIcon
          style={{ color: "gray", cursor: "pointer" }}
          onClick={()=> setOpenModal(false)}
        />
      </div>
      <div className="modal-container">
        <Slider data={data} modal={true} />
        <div className="modal-details">
          <h2 className="modal-title">{title}</h2>
          <span className="modal-item">{price}$</span>
          <span className="modal-item">Up to 18 hours of battery life</span>
          <span className="modal-item">
            Superfast SSD storage opens apps and files
          </span>
          <button className="modal-btn">Buy</button>
        </div>
      </div></> : null}
     
    </>
  );
};

export default Modal;
