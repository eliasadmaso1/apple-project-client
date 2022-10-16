import React, { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../../../../service/products";
import "./products.css";
import {Link} from 'react-router-dom';
import {getOrders} from '../../../../service/cart';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [toggle,setToggle] = useState(true);
  const [modal,setModal] = useState(false);
  const [productId,setProductId] = useState(null);

  useEffect(() => {
    const initCartProducts = async() =>{
      await getOrders().then(res => setCartProducts(res.data))
 

    };
    const displayProducts = async () => {
      await getAllProducts().then(res => setProducts(res));
    };
    initCartProducts();
    displayProducts();
    
  }, [toggle]);

  const deleteItem = async(id)=>{
    await deleteProduct(id);
    setToggle(prev => !prev);
  };

  const getProductOrders = (id)=>{
    const array = cartProducts.filter((item)=>{
      return item.productId === id
    });
    const productOrders = array.reduce((orders, product) => {
      orders = orders + product.quantity;
      return orders;
    }, 0);
    
      return productOrders
    
};

return (
    <>
    <div className="products-table">
      <div className="table-header">
        <h5>ID</h5>
        <h5>Image</h5>
        <h5>Name</h5>
        <h5>Price</h5>
        <h5>Status</h5>
        <h5>Orders</h5>
        <h5>Manage</h5>
      </div>

      {products.map((product,i) => {
        return (
          <div className={modal ? "modal-on" : "table-row"} key={i}>
            <h5>{product._id}</h5>
            <h5>
              <img src={product.gallery[0]} className="table-product-img" />
            </h5>
            <h5>{product.title}<br></br>{product?.subTitle}</h5>
            <h5>{`${product.price}$`}</h5>
            <h5 style={{color:"green"}}>{product.status}</h5>
            <h5>{
              getProductOrders(product._id)
           }</h5>
            <h5>
              <button className="table-btn" onClick={()=> {
                setProductId(product._id);
                setModal(true)
                }}>Delete</button>
              <Link to={`/admin/products/edit/${product._id}`}><button className="table-btn">Edit</button></Link>
            </h5>
          </div>
        );
      })}
          {modal ? <div className="modal-container">
             <div className="modal">
                 <h3>Are you sure to delete this Product?</h3>
                 <div className="modal-buttons">
                 <button className="modal-button-ok" onClick={async()=>{
                    deleteItem(productId);
                     setTimeout(()=>{
                        setModal(false)
                     },2000) 
                 
                 }}>Yes</button>
                      <button className="modal-button" onClick={()=>{
                     setModal(false)
                 }}>No</button>
                 </div>
             

             </div>
          
         </div> : null}

    </div>


    <div className="display-products-responsive">
      <div className="responsive-container">
        {products.map((product)=>{
          return(
            <div className="responsive-item">
            <span className="responsive-title">{product.title}</span>
            <img src={product.gallery[0]} className="responsive-img"/>
            <div className="responsive-buttons">
              <button className="table-btn-responsive">delete</button>
              <Link to={`/admin/products/edit/${product._id}`}><button className="table-btn-responsive">Edit</button></Link>
  
            </div>
          </div>
          )
        })}
     
      </div>
    </div>
    </>
  );
};

export default Products;
