import React, { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../../../../service/products";
import "./products.css";
import {Link} from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [toggle,setToggle] = useState(true);

  useEffect(() => {
    const displayProducts = async () => {
      await getAllProducts().then(res => setProducts(res));
    };
    displayProducts();
  }, [toggle]);

  const deleteItem = async(id)=>{
    await deleteProduct(id);
    setToggle(prev => !prev);
    

  }



  

  return (
    <>
    <div className="products-table">
      <div className="table-header">
        <h5>ID</h5>
        <h5>Image</h5>
        <h5>Name</h5>
        <h5>Price</h5>
        <h5>Status</h5>
        <h5>Manage</h5>
      </div>

      {products.map((product,i) => {
        return (
          <div className="table-row" key={i}>
            <h5>{product._id}</h5>
            <h5>
              <img src={product.gallery[0]} className="table-product-img" />
            </h5>
            <h5>{product.title}<br></br>{product?.subTitle}</h5>
            <h5>{`${product.price}$`}</h5>
            <h5 style={{color:"green"}}>{product.status}</h5>
            <h5>
              <button className="table-btn" onClick={()=> deleteItem(product._id)}>Delete</button>
              <Link to={`/admin/products/edit/${product._id}`}><button className="table-btn">Edit</button></Link>
            </h5>
          </div>
        );
      })}
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
