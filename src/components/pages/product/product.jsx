import React from 'react';
import Slider from '../../features/Slider/Slider';
import './product.css';


const Product = ({productTitle, productSubTitle, CPU, GPU, memory, SSD, price, status, inBox, gallery}) => {

  const inBoxData = [
    {
      title:"MacBook Air with M1 chip",
       img:"https://upload.wikimedia.org/wikipedia/commons/5/50/Macbook_Air_M1_Silver_PNG.png"
      },
    {
      title:"USB-C Charge Cable (2 m)",
       img:"https://d3m9l0v76dty0.cloudfront.net/system/photos/7660633/large/c1bf016a29940ac886f2db3565a74ad2.jpg"
      },
    {
      title:"30W USB-C Power Adapter",
       img:"https://www.pccenter.co.il/images/itempics/1029376_25042021093756.jpg"
      },
  ]
    
    return (
        <div className="product-container">
            <nav>MacBook Air</nav>
            <h1 className="product-page-title">Choose your new MacBook Air</h1>
            <div className="product-page-details">
                <div className="product-content">
                  <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba-digitalmat-gallery-5-202111?wid=728&hei=666&fmt=png-alpha&.v=1635187292000" alt="product" width="300px"/>
                </div>
                <div className="product-content">
                    <h1>MacBook Air</h1>
                    <h2>M1 Chip</h2>
                    <span className="details-item">8-Core CPU</span>
                    <span className="details-item">8-Core GPU</span>
                    <span className="details-item">8GB Unified Memory</span>
                    <span className="details-item">256GB SSD Storage</span>
                    <span className="details-item">In Stock</span>
                    <span className="details-item">1200$</span>
                    <button className="product-page-btn">Buy</button>

                </div>
                <div className="product-content">
                    {/* <Slider data={gallery}/> */}
                </div>
             

            </div>
            <>
            <header className="inBox-header">
            <h1 className="inBox-header-title">What’s in the Box</h1>

            </header>

            <div className="inBox">
              {
                inBoxData.map((item,index)=>{
                  return(
                    <div className="inBox-item" key={index}>
                    <img className="inBox-img" src={item.img} alt="" />
                    <span className="inBox-title">{item.title}</span>
                  </div>
                  )
                })
              }
          
              
     
            </div></>
            
        </div>
    )
}

export default Product
