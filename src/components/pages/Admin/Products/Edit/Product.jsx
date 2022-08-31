import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllProducts, updateProduct } from "../../../../service/products";
import "./product.css";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      const currentProduct = await getAllProducts().then((res) =>
        res.find((item) => item._id === id)
      );
      setProduct(currentProduct);
    };
    getProduct();
  }, []);

  const [values, setValues] = useState({
    price: "",
    status: "",
    CPU: "",
    GPU: "",
    memory: "",
    SSD: "",
    storage: "",
    inch: "",
    wifi: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

const validUpdate = async(id)=>{

  const arrayOfObj = Object.entries(values).map((e) => ({ [e[0]]: e[1] }));

  const filter = arrayOfObj.filter((value) => {
    return Object.values(value)[0] != "";
  });

  const obj = filter.reduce((acc,current)=>{
    const [key, value] = Object.entries(current)[0];
    return {...acc, [key]:  value }
},{});

await updateProduct(id,obj).then(res => setMessage(res.message));


}
  

  



  return (
    product && (
      <div className="edit-container">
        <form className="edit-form" onSubmit={validUpdate(product._id)}>
          <h4>{`Update ${product.title}`}</h4>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            placeholder={`${product.price}$`}
            onChange={handleChange}
          />
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            name="status"
            placeholder={product.status}
            onChange={handleChange}
          />
          {product.CPU && (
            <>
              <label htmlFor="price">CPU:</label>
              <input
                type="text"
                name="CPU"
                placeholder={product.CPU}
                onChange={handleChange}
              />
            </>
          )}
          {product.GPU && (
            <>
              <label htmlFor="price">GPU:</label>
              <input
                type="text"
                name="GPU"
                placeholder={product.GPU}
                onChange={handleChange}
              />
            </>
          )}
          {product.memory && (
            <>
              <label htmlFor="price">Memory:</label>
              <input
                type="text"
                name="memory"
                placeholder={product.memory}
                onChange={handleChange}
              />
            </>
          )}
          {product.SSD && (
            <>
              <label htmlFor="price">SSD:</label>
              <input
                type="text"
                name="SSD"
                placeholder={product.SSD}
                onChange={handleChange}
              />
            </>
          )}
          {product.storage && (
            <>
              <label htmlFor="price">Storage:</label>
              <input
                type="text"
                name="storage"
                placeholder={product.storage}
                onChange={handleChange}
              />
            </>
          )}
          {product.inch && (
            <>
              <label htmlFor="price">Inch:</label>
              <input
                type="text"
                name="inch"
                placeholder={product.inch}
                onChange={handleChange}
              />
            </>
          )}
          {product.wifi && (
            <>
              <label htmlFor="price">Wifi:</label>
              <input
                type="text"
                name="wifi"
                placeholder={product.wifi}
                onChange={handleChange}
              />
            </>
          )}
          <button className="form-btn" type="submit">Update</button>
          {message}
        </form>
      </div>
    )
  );
};

export default EditProduct;
