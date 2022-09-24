import React, { useEffect, useState } from "react";
import Card from "../../../features/Card/Card";
import "../products.css";
import mac from "../../../images/mac.png";
import { getAllProducts } from "../../../service/products";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Product from "../../product/product";

const Mac = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const displayProducts = async () => {
      const macs = await getAllProducts().then((res) => res.filter(item => item.category === "MacBook"));
      setProducts(macs);
    };
    displayProducts();
  }, []);

  return (
    <>
      <div className="products-page">
        <header className="mac">
          <h1 className="header-title">MacBooks</h1>
          <img src={mac} alt="" className="img" />
        </header>
      {products ?  <div className="products-container">
          { products.map((product) => {
            return (
              <>
                <Card
                  img={product.gallery[0]}
                  title={`${product.title} ${product.subTitle}`}
                  price={product.price}
                  imgWidth="290px"
                  productId={product._id}
                />
              </>
            );
          }) 
       
        }
        </div> : <div className="loader-div">
<Box sx={{ display: 'flex' }}>
<CircularProgress />
</Box>
</div> }
       
      </div>
    </>
  );
};



export default Mac;
