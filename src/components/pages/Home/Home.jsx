import React from 'react';
import './Home.css';
import img from '../../images/iphone.png';
import img1 from '../../images/iphone1.png';
import img2 from '../../images/mac.png';
import img3 from '../../images/mac1.png';
import img4 from '../../images/mac2.png';
import img5 from '../../images/mac3.png';
import img6 from '../../images/mac4.png';
import img7 from '../../images/mac5.png';
import img8 from '../../images/iPad.png';
import img9 from '../../images/iPad1.png';
import img10 from '../../images/iPad2.png';
import img11 from '../../images/airPodsPro.png';
import img12 from '../../images/airPodsMax.png';
import img13 from '../../images/airPods2.png';
import ContentSlider from '../../features/contentSlider/ContentSlider';






const Home = () => {
    const sliderData = [
        {
          text: "iPhons",
        },
        {
          text: "MacBooks",
        },
        {
          text: "iPads",
        },
        {
          text: "airPods",
        },
        {
          text: "Best Products",
        },
      ];
    return (
        <div className="home-container">
            <ContentSlider slides={sliderData}/>
            <div className="home-section">
            <h1 className="home-section-title">iPhons</h1>
            <img src={img} alt="" className="img" />
            <img src={img1} alt="" className="img"/>
            </div>
           
          <div className="home-section">
          <h1 className="home-section-title">MacBooks</h1>

          <img src={img4} alt="" className="img"/>
          <img src={img7} alt="" className="img"/>

            <img src={img5} alt="" className="img"/>
          </div>

          <div className="home-section">
          <h1 className="home-section-title">iPads</h1>
          <img src={img8} alt="" className="img"/>
            <img src={img9} alt="" className="img"/>
            <img src={img10} alt="" className="img"/>
        
          </div>

          <div className="home-section">
          <h1 className="home-section-title">AirPods</h1>
 
          <img src={img11} alt="" className="img"/>
            <img src={img12} alt="" className="img"/>
            <img src={img13} alt="" className="img"/>
         
          </div>
        
         



            
        </div>
    )
}

export default Home
