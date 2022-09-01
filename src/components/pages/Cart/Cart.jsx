import React from 'react';
import './cart.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
    return (
        <div className="cart-container">
         <div className="cart-table">
             <div className="cart-tr-th">
                 <span className="th">Description</span>
                 <span className="th">Quantity</span>
                 <span className="th">Remove</span>
                 <span className="th">Price</span>

             </div>
             <div className="cart-tr">
                 <div className="td">MacBook Pro 13</div>
                 <div className="td">
                     <div className="quantity-btns">
                         <button className="cart-btn"><AddIcon/></button>
                         <button className="cart-btn">1</button>
                         <button className="cart-btn"><RemoveIcon/></button>

                     </div>
                 </div>
                 <div className="td">
                     <button className="cart-btn"><DeleteIcon/></button>

                 </div>
                 <div className="td">250$</div>

             </div>

         </div>
            
        </div>
    )
}

export default Cart
