import React, { useEffect, useState } from 'react';
import './cart.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useMyContext} from '../../context/context';
import {getCartProducts} from '../../service/cart';
import { getAllProducts } from '../../service/products';

const Cart = () => {

    const { user } = useMyContext();

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const getUserProducts = async()=>{
            if(user){
                 getCartProducts(user._id).then(async(res)=>{
                    const allProducts = await getAllProducts();
                    const product = res.data.map((cartProduct) => {
                        const product = allProducts.find(
                          (p) => p._id === cartProduct.productId
                        );
                        return {
                          quantity: cartProduct.quantity,
                          ...product
                        };
                        });
                        setProducts(product)
                    });
                }
            }
        getUserProducts();

    },[]);

    console.log('====================================');
    console.log({products,user});
    console.log('====================================');

    return (
        <div className="cart-container">
         <div className="cart-table">
             <div className="cart-tr-th">
             <span className="th">Product</span>
                 <span className="th">Description</span>
                 <span className="th">Quantity</span>
                 <span className="th">Remove</span>
                 <span className="th">Price</span>

             </div>
             {products.map((item)=>{
                 return(
                    <div className="cart-tr">
                    <div className="td"><img src={item.gallery[0]} width="100"/></div>
                    <div className="td">{item.title}</div>
                    <div className="td">
                        <div className="quantity-btns">
                            <button className="cart-btn"><AddIcon/></button>
                            <button className="cart-btn">{item.quantity}</button>
                            <button className="cart-btn"><RemoveIcon/></button>
   
                        </div>
                    </div>
                    <div className="td">
                        <button className="cart-btn"><DeleteIcon/></button>
   
                    </div>
                    <div className="td">{item.price}$</div>
   
                </div>

                 )

             })}
          

         </div>
            
        </div>
    )
}

export default Cart
