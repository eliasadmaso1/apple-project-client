import React, { useEffect, useState } from 'react';
import './cart.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useMyContext} from '../../context/context';
import {getCartProducts} from '../../service/cart';
import { getAllProducts } from '../../service/products';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {addToCart, decrementProduct, deleteProduct} from '../../service/cart';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { user, changeToggle, toggle } = useMyContext();
    const [modal, setModal] = useState(false);
    const [productId,setProductId] = useState(null);

    const [products,setProducts] = useState([]);
    const [load,setLoad] = useState(true);

    const getIdForModal = async(productId)=>{
        setProductId(productId);

    };


    useEffect(()=>{
        const productsFromServer = async()=>{
            await getCartProducts().then(res => !res && setLoad(false));
          }
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
                        setProducts(product);
                        setLoad(false);
                    });
                }
            }
        productsFromServer();
        getUserProducts();

    },[user,toggle]);

    const totalPrice = products.reduce((price, product) => {
        price = price + product.price * product.quantity;
        return price;
      }, 0);
    
      const subTotal = Math.floor(totalPrice);

 

   

    

 

    return (
        <><div className="cart-container">
            {load === true ?  <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    : products.length === 0 ?     <div style={{fontWeight:"bold"}}>There is no products in your cart</div>
   : <><div className={`${modal ? "modal-on" : "cart-table"}`}>
             <div className={modal ? "modal-on" : "cart-tr-th"}>
             <span className="th">Product</span>
                 <span className="th">Quantity</span>
                 <span className="th">Remove</span>
                 <span className="th">Price</span>

             </div>
             {products.map((item)=>{
                 return(
                    <div className={modal ? "modal-on" : "cart-tr"}>
                    <div className="td"><h3>{item.title}</h3><img src={item.gallery[0]} width="100"/></div>
                    <div className="td">
                        <div className="quantity-btns">
                            <button className="cart-btn" onClick={async()=>{
                                await addToCart(item._id,user._id);
                                changeToggle();
                                
                            }}><AddIcon/></button>
                            <button className="cart-btn">{item.quantity}</button>
                            <button className="cart-btn" onClick={async()=>{
                                await decrementProduct(item._id,user._id);
                                changeToggle();

                            }}><RemoveIcon/></button>
   
                        </div>
                    </div>
                    <div className="td">
                        <button className="cart-btn" onClick={async()=>{
                          getIdForModal(item._id)
                          setModal(true)
                    
                  

                        }}><DeleteIcon/></button>
   
                    </div>
                    <div className="td">{item.price * item.quantity}$</div>
   
                </div>

                 )

             })}
          <div className="table-footer">
              <div className="item">delivery - 20$</div>
              <div className="item">sub-total - {subTotal}$</div>
              <div className="item">total - {subTotal + 20}$ </div>
              <Link to="/paypal"><button className="check-btn">Check</button></Link>

          </div>

         </div>
         <div className={modal ? "modal-container" : "modal-off"}>
             <div className={modal ? "modal" : "modal-off"}>
                 <h3>Are you sure to delete the product from your cart?</h3>
                 <div className="modal-buttons">
                 <button className="modal-button-ok" onClick={async()=>{
                    await deleteProduct(productId,user._id)
                    changeToggle();
                     setTimeout(()=>{
                        setModal(false)
                     },2000) 
                 
                 }}>Yes</button>
                      <button className="modal-button" onClick={()=>{
                     setModal(false)
                 }}>No</button>
                 </div>
             

             </div>
          
         </div>
         </> }
      
            
        </div>
         </>
    )
}

export default Cart
