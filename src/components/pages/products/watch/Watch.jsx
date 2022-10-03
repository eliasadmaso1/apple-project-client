import React, { useEffect, useState } from "react";
import Card from "../../../features/Card/Card";
import "../products.css";
import mac from "../../../images/watch-back.png";
import { getAllProducts } from "../../../service/products";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



function Watch() {
    const [products, setProducts] = useState([]);
    const [load,setLoad] = useState(true);
  
    useEffect(() => {
      const displayProducts = async (category) => {
        const currentProducts = await getAllProducts().then((res) => res.filter(product => product.category === category));
        setProducts(currentProducts);
        setLoad(false);
      };
  
      const productsFromServer = async()=>{
        await getAllProducts().then(res => !res && setLoad(false));
      }
    productsFromServer();
    displayProducts("Watches");
   
    }, []);
  
    return (
      <>
        <div className="products-page">
          <header className="iPhone">
            <h1 className="header-title">Apple Watches</h1>
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
                    title={`${product.title}`}
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
}

export default Watch
