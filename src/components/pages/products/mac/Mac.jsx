import React, { useEffect, useState } from "react";
import Card from "../../../features/Card/Card";
import "../products.css";
import mac from "../../../images/mac.png";
import { getAllProducts } from "../../../service/products";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Mac = () => {
  const [products, setProducts] = useState([]);
  const [load,setLoad] = useState(true);

  useEffect(() => {
    const displayProducts = async () => {
      const macs = await getAllProducts().then((res) => res.filter(item => item.category === "MacBook"));
      setProducts(macs);
      setLoad(false);
    };

    const productsFromServer = async()=>{
      await getAllProducts().then(res => !res && setLoad(false));
    }
  productsFromServer();
  displayProducts();
 
  }, []);

  return (
    <>
      <div className="products-page">
        <header className="mac">
          <h1 className="header-title">MacBooks</h1>
          <img src={mac} alt="" className="img" />
        </header>
      {load === true ? <div className="loader-div"><Box sx={{ display: 'flex' }}>
       
<CircularProgress />
    
    
</Box></div> : products.length === 0 ? <div className="not-loaded"><span>Server Error - </span>Products Not Loaded</div> :
<div className="products-container">
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
        </div> 
      

 }
       
      </div>
    </>
  );
};



export default Mac;
