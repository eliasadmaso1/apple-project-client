import React from 'react';
import '../products.css';
import {useEffect, useState} from 'react';
import Card from "../../../features/Card/Card";
import airPods from "../../../images/airPodsPro.png";
import { getAllProducts } from '../../../service/products';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';





const AirPods = () => {
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
  displayProducts("airPods");
 
  }, []);

  return (
    <>
      <div className="products-page">
        <header className="iPhone">
          <h1 className="header-title">AirPods</h1>
          <img src={airPods} alt="" className="img" />
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

export default AirPods

