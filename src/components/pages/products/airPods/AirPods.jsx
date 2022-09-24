import React from 'react';
import '../products.css';
import {useEffect, useState} from 'react';
import Card from "../../../features/Card/Card";
import airPods from "../../../images/airPodsPro.png";
import { getAllProducts } from '../../../service/products';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';





const AirPods = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const displayProducts = async () => {
      const airPods = await getAllProducts().then((res) => res.filter(item => item.category === "airPods"));
      setProducts(airPods);
    };
    displayProducts();
  }, []);

    return (
      <>
      <div className="products-page">
        <header className="iPhone">
          <h1 className="header-title">AirPods</h1>
          <img src={airPods} alt="" className="img" />
        </header>

        {products ?  <div className="products-container">
          { products.map((product) => {
            return (
              <>
                <Card
                  img={product.gallery[0]}
                  title={`${product.title}`}
                  price={product.price}
                  imgWidth="250px"
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
        
    )
}

export default AirPods

