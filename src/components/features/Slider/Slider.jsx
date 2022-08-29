import React from 'react';
import {Navigation,Pagination,Scrollbar} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';
import {useLayoutEffect} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.css';

const Slider = ({data,modal}) => {

    
const DATA = [
    {
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000",
        title: "MacBook Air",
        subtitle: "M1 chip",
        price:1200
        
      },
      {
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
        title: "MacBook Air",
        subtitle: "M2 chip",
        price:1200
        
      },
      {
        img: "https://media.istoreil.co.il/57482e8d-29d5-4d9f-84d5-bd696304a4e0/https://www.istoreil.co.il/media/catalog/product/cache/1/small_image/500x500/0dc2d03fe217f8c83829496872af24a0/m/b/mbp13-2020_hero1_2.png/ns_atwebp,f_auto",
        title: "MacBook Pro 13”",
        subtitle: null,
        price:1200
        
      },
      {
        img: "https://www.ivory.co.il/files/catalog/org/1639412008e08OG.jpg",
        title: "MacBook Pro 14”",
        subtitle: null,
        price:1200
        
      }
  
  ];
  
 


    useLayoutEffect(()=>{
    
    },[]);
  
   

    return (
        <Swiper
        modules={[Navigation,Pagination,Scrollbar]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{clickable:true}}
        pagination={{clickable:true}}
        className={modal ? "slider-modal" : "slider-container"}
        >
          {data.map((el,i)=>{
            return(
              <SwiperSlide key={i}>
                <div className="slide-container">
                    {modal ? null : <h2>{el.title}</h2>}
                  <img src={el.img} width="200"/>
    
                </div>
              </SwiperSlide>
            )
    
          })}
    
        </Swiper>
    )
}

export default Slider
