import React from "react";
import "./Home.css";
import iPhone from "../../images/iphone.png";
import mac from "../../images/mac3.png";
import iPad from "../../images/ipads-back.png";
import airPods2 from "../../images/airpods-back.png";
import watches from '../../images/watch-back.png';
import { Link } from "react-router-dom";
import Header from "../../features/Header/Header";


const Home = () => {
  return (
    <>
    <Header/>
    <div className="home-container">
            <div className="home-section">
        <h1 className="home-section-title">MacBooks</h1>
        <img src={mac} alt="" className="img" />
        <div className="shop-link">
          <h1>Choose Your Mac</h1>
          <div className="section-div">
            <div className="section-div-item">
              <img className="item-img" src="https://www.apple.com/v/macbook-air-m1/b/images/overview/compare/compare_mba__h3jrdtzdcbm2_large_2x.png"/>
              <span className="item-title">MacBook Air M1 chip</span>
            </div>
            <div className="section-div-item">
              <img className="item-img" src="https://www.apple.com/v/macbook-air-m1/b/images/overview/compare/compare_mba_m2__e3tzj75hwnqu_large_2x.png"/>
              <span className="item-title">MacBook Air M2 chip</span>
            </div>
            <div className="section-div-item">
              <img className="item-img" src="https://www.apple.com/v/macbook-air-m1/b/images/overview/compare/compare_mbp_13__9j7gq7j09le6_large_2x.png"/>
              <span className="item-title">MacBook Pro 13</span>
            </div>
            <div className="section-div-item">
              <img className="item-img" src="https://www.apple.com/v/macbook-air-m1/b/images/overview/compare/compare_mbp_14_16__gb70k890dbe6_large_2x.png"/>
              <span className="item-title">MacBook Pro 14 and 16</span>
            </div>
          </div>
          <button className="section-btn">
            <Link to="/mac" className="link">
              Shop
            </Link>
          </button>
        </div>
      </div>
      <div className="home-section">
        <h1 className="home-section-title">iPhons</h1>
        <img src={iPhone} alt="" className="img" />
        <div className="shop-link">
          <h1>Choose Your iPhone</h1>
          <div className="section-div">
            <div className="section-div-item">
              <img className="item-img" src="https://www.apple.com/v/iphone-13-pro/g/images/key-features/compare/compare_iphone_13_pro__ezrebuldmju6_large_2x.jpg"/>
              <span className="item-title">iPhone 13 Pro</span>
            </div>
            <div className="section-div-item">
              <img className="item-img" src="https://www.apple.com/v/iphone-13-pro/g/images/key-features/compare/compare_iphone_13__ej8lu6qtsdw2_large_2x.jpg"/>
              <span className="item-title">iPhone 13</span>
            </div>
            <div className="section-div-item">
              <img className="item-img" src="https://www.apple.com/v/iphone-13-pro/g/images/key-features/compare/compare_iphone_se__fifp7zy8jlaq_large_2x.jpg"/>
              <span className="item-title">iPhone</span>
            </div>
            <div className="section-div-item">
              <img className="item-img" src="https://www.apple.com/v/iphone-13-pro/g/images/key-features/compare/compare_iphone_12__fk7mpufyl1u2_large_2x.jpg"/>
              <span className="item-title">iPhone 12</span>
            </div>
          </div>
          <button className="section-btn">
            <Link to="/iPhone" className="link">
              Shop
            </Link>
          </button>
        </div>
      </div>
      <div className="home-section">
        <h1 className="home-section-title">iPads</h1>
        <img src={iPad} alt="" className="img" />
        <div className="shop-link">
          <h1>Choose Your iPad</h1>
          <div className="section-div">
            <div className="section-div-item">
              <img className="item-img" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-cell-spacegray-202104?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617124703000"/>
              <span className="item-title">iPad Pro</span>
            </div>
            <div className="section-div-item">
              <img className="item-img" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-spacegray-202203?wid=940&hei=1112&fmt=png-alpha&.v=1645066742664"/>
              <span className="item-title">iPad Air</span>
            </div>
            <div className="section-div-item">
              <img className="item-img" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-2021-hero-space-wifi-select?wid=940&hei=1112&fmt=png-alpha&.v=1631308881000"/>
              <span className="item-title">iPad</span>
            </div>
            <div className="section-div-item">
              <img className="item-img" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-select-wifi-space-gray-202109?wid=940&hei=1112&fmt=png-alpha&.v=1629840743000"/>
              <span className="item-title">iPad mini</span>
            </div>
          </div>
          <button className="section-btn">
            <Link to="/iPad" className="link">
              Shop
            </Link>
          </button>
        </div>
      </div>

      <div className="home-section">
        <h1 className="home-section-title">AirPods</h1>

        <img src={airPods2} alt="" className="img" />
        <div className="shop-link">
          <h1>Choose Your AirPods</h1>
          <div className="section-div">
            <div className="section-div-item">
              <img className="item-img" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1551489688005"/>
              <span className="item-title">AirPods 2</span>
            </div>
            <div className="section-div-item">
              <img className="item-img" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861338000"/>
              <span className="item-title">AirPods 3</span>
            </div>
            <div className="section-div-item">
              <img className="item-img" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1591634643000"/>
              <span className="item-title">AirPods Pro</span>
            </div>
            <div className="section-div-item">
              <img className="item-img" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-hero-select-202011?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1604709293000"/>
              <span className="item-title">AirPods Max</span>
            </div>
          </div>
          <button className="section-btn">
            <Link to="/airPods" className="link">
              Shop
            </Link>
          </button>
        </div>
        
      </div>

      <div className="home-section">
        <h1 className="home-section-title">Apple Watches</h1>

        <img src={watches} alt="" className="img" />
        <div className="shop-link">
          <h1>Choose Your Apple Watch</h1>
          <div className="section-div">
            <div className="section-div-item">
              <img className="item-img" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1660927563656"/>
              <span className="item-title">Apple Watch Ultra</span>
            </div>
            <div className="section-div-item">
              <img className="item-img" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MP853ref_VW_34FR+watch-45-stainless-gold-cell-8s_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660780870708%2C1661890893034"/>
              <span className="item-title">Apple Watch Series 8</span>
            </div>
            <div className="section-div-item">
              <img className="item-img" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLG3_VW_34FR+watch-44-alum-midnight-nc-se_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660780893022%2C1660759430380"/>
              <span className="item-title">Apple Watch SE</span>
            </div>
            <div className="section-div-item">
              <img className="item-img" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPKF3_VW_34FR+watch-41-stainless-silver-cell-hermes8s_VW_34FR_WF_CO+watch-face-41-hermes8s-complex-noirprint_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660776584926%2C1663623201568%2C1660949557612"/>
              <span className="item-title">Apple Watch Hermes</span>
            </div>
          </div>
          <button className="section-btn">
            <Link to="/airPods" className="link">
              Shop
            </Link>
          </button>
        </div>
        
      </div>

    </div>
    </>
  );
};

export default Home;
