import React, { useEffect, useState } from "react";
import "./Home.css";
import iPhone from "../../images/iphone.png";
import mac from "../../images/mac3.png";
import iPad from "../../images/ipads-back.png";
import airPods2 from "../../images/airpods-back.png";
import watchesBackground from '../../images/watch-back.png';
import { Link } from "react-router-dom";
import Header from "../../features/Header/Header";
import { getAllProducts,getProductById } from "../../service/products";
import  Modal from '../../features/Modal/Modal'; 



const Home = () => {

  const [macs,setMacs] = useState(null);
  const [iphones,setIphones] = useState(null);  
  const [ipads,setIpads] = useState(null);
  const [airpods,setAirpods] = useState(null);
  const [watches,setWatches] = useState(null);
  const [product,setProduct] = useState(null);

  const [openModal,setOpenModal] = useState(false);
  const [openModal1,setOpenModal1] = useState(false);
  const [openModal2,setOpenModal2] = useState(false);
  const [openModal3,setOpenModal3] = useState(false);
  const [openModal4,setOpenModal4] = useState(false);





  useEffect(() => {
    const displayMacs = async () => {
      const macBooks = await getAllProducts().then((res) => res.filter(product => product.category === "MacBook"));
      setMacs(macBooks);
      const iPhones = await getAllProducts().then((res) => res.filter(product => product.category === "iPhone"));
      setIphones(iPhones);
      const iPads = await getAllProducts().then((res) => res.filter(product => product.category === "iPads"));
      setIpads(iPads)
      const airPods = await getAllProducts().then((res) => res.filter(product => product.category === "airPods"));
      setAirpods(airPods)
      const Watches = await getAllProducts().then((res) => res.filter(product => product.category === "Watches"));
      setWatches(Watches)
      
    };
    displayMacs();


  }, []);


  return (
    <>
    <Header/>
    <div className="home-container">
    {openModal ? <Modal product={product} cancelModal={()=>{
            setOpenModal(false)
          }}/> :  <div className="home-section">
           
          <h1 className="home-section-title">MacBooks</h1>
          <img src={mac} alt="" className="img" />
          <div className="shop-link">
            <h1>Choose Your Mac</h1>
            <div className="section-div">
              {macs && macs.map((mac)=>{
                return(
                  <div className="section-div-item" key={mac._id}>
                  <span className="item-title">{mac.title}</span>
                  <img className="item-img" src={mac.gallery[0]}/>
                  <div className="modal-open" onClick={async()=>{
                    await getProductById(mac._id).then((res)=>{
                    setProduct(res)
                    setOpenModal(true)
                    })
  
                  }}>Take a look closer</div>
                </div>
                )})}
            </div>
         
            <button className="section-btn">
              <Link to="/mac" className="link">
                Shop
              </Link>
            </button>
          </div>
        </div>}
      {openModal1 ? <Modal product={product} cancelModal={()=>{
            setOpenModal1(false)
          }}/> :       <div className="home-section">
          <h1 className="home-section-title">iPhons</h1>
          <img src={iPhone} alt="" className="img" />
          <div className="shop-link">
            <h1>Choose Your iPhone</h1>
            <div className="section-div">
              {iphones && iphones.map((iphone)=>{
                return(
                  <div className="section-div-item">
                  <span className="item-title">{iphone.title}</span>
                  <img className="item-img" src={iphone.gallery[0]}/>
                  <div className="modal-open" onClick={async()=>{
                      await getProductById(iphone._id).then((res)=>{
                      setProduct(res)
                      setOpenModal1(true)
                      })
    
                    }}>Take a look closer</div>
               
                </div>
                )
                })}
              </div>
            <button className="section-btn">
              <Link to="/iPhone" className="link">
                Shop
              </Link>
            </button>
          </div>
        </div>}

      {openModal2 ? <Modal product={product} cancelModal={()=>{
            setOpenModal2(false)
          }}/> :     <div className="home-section">
          <h1 className="home-section-title">iPads</h1>
          <img src={iPad} alt="" className="img" />
          <div className="shop-link">
            <h1>Choose Your iPad</h1>
            <div className="section-div">
              {ipads && ipads.map((ipad)=>{
                return(
                  <div className="section-div-item">
                  <span className="item-title">{ipad.title}</span>
                  <img className="item-img" src={ipad.gallery[0]}/>
                  <div className="modal-open" onClick={async()=>{
                      await getProductById(ipad._id).then((res)=>{
                      setProduct(res)
                      setOpenModal2(true)
                      })
    
                    }}>Take a look closer</div>
                </div>
                )
  
              })}
           
            </div>
            <button className="section-btn">
              <Link to="/iPad" className="link">
                Shop
              </Link>
            </button>
          </div>
        </div>}
  
      {openModal3 ? <Modal product={product} cancelModal={()=>{
            setOpenModal3(false)
          }}/> :   <div className="home-section">
          <h1 className="home-section-title">AirPods</h1>
  
          <img src={airPods2} alt="" className="img" />
          <div className="shop-link">
            <h1>Choose Your AirPods</h1>
            <div className="section-div">
              {airpods && airpods.map((item)=>{
                return(
                  <div className="section-div-item">
                 <span className="item-title">{item.title}</span>
                 <img className="item-img" src={item.gallery[0]}/>
                 <div className="modal-open" onClick={async()=>{
                      await getProductById(item._id).then((res)=>{
                      setProduct(res)
                      setOpenModal3(true)
                      })
    
                    }}>Take a look closer</div>
                </div>
                )
  
              })}
            
            </div>
            <button className="section-btn">
              <Link to="/airPods" className="link">
                Shop
              </Link>
            </button>
          </div>
          
        </div>}
    
      {openModal4 ? <Modal product={product} cancelModal={()=>{
            setOpenModal4(false)
          }}/> :     <div className="home-section">
          <h1 className="home-section-title">Apple Watches</h1>
  
          <img src={watchesBackground} alt="" className="img" />
          <div className="shop-link">
            <h1>Choose Your Apple Watch</h1>
            <div className="section-div">
              {watches && watches.map((watch)=>{
                return(
                  <div className="section-div-item">
                  <span className="item-title">{watch.title}</span>
                  <img className="item-img" src={watch.gallery[0]}/>
                  <div className="modal-open" onClick={async()=>{
                      await getProductById(watch._id).then((res)=>{
                      setProduct(res)
                      setOpenModal4(true)
                      })
    
                    }}>Take a look closer</div>
                </div>
                )
  
              })}
           
            </div>
            <button className="section-btn">
              <Link to="/airPods" className="link">
                Shop
              </Link>
            </button>
          </div>
          
        </div>}
  

    </div>
    </>
  );
};

export default Home;
