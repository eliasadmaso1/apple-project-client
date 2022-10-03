import React, { useEffect, useState } from "react";
import Card from "../../../features/Card/Card";
import "../products.css";
import { getAllProducts } from "../../../service/products";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function ProductsComponent({categoryProp,pageTitle,headerImg,cardImgWidth,pageBackground}) {
    const [products, setProducts] = useState([]);
    const [load,setLoad] = useState(true);
  
    useEffect(() => {
      const displayProducts = async () => {
        const currentProducts = await getAllProducts().then((res) => res.filter(product => product.category === categoryProp));
        setProducts(currentProducts);
        setLoad(false);
      };
  
      const productsFromServer = async()=>{
        await getAllProducts().then(res => !res && setLoad(false));
      }
    productsFromServer();
    displayProducts();
   
    }, [categoryProp]);
  
    return (
      <>
        <div className="products-page">
          <header className={pageBackground}>
            <h1 className="header-title">{pageTitle}</h1>
            <img src={headerImg} alt="" className="img" />
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
                    imgWidth={cardImgWidth}
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

export default ProductsComponent
