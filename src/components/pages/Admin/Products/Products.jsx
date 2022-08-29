import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../service/products";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const displayProducts = async () => {
      await getAllProducts().then((res) => setProducts(res));
    };
    displayProducts();
  }, []);

  console.log("====================================");
  console.log(products);
  console.log("====================================");

  return (
    <div className="products-table">
      <div className="table-header">
        <h5>ID</h5>
        <h5>Image</h5>
        <h5>Name</h5>
        <h5>Price</h5>
        <h5>Sales</h5>
        <h5>Manage</h5>
      </div>

      {products.map((product) => {
        return (
          <div className="table-row">
            <h5>{product._id}</h5>
            <h5>
              <img src={product.gallery[0]} className="table-product-img" />
            </h5>
            <h5>{product.title}<br></br>{product.subTitle}</h5>
            <h5>{`${product.price}$`}</h5>
            <h5>12</h5>
            <h5>
              <button className="table-btn">Delete</button>
              <button className="table-btn">Edit</button>
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
