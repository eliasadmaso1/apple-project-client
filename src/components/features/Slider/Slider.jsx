import React from 'react';
import {Navigation,Pagination,Scrollbar} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.css';
import { useMyContext } from '../../context/context';

const Slider = ({data}) => {

    return (
        <Swiper
        modules={[Navigation,Pagination,Scrollbar]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{clickable:true}}
        pagination={{clickable:true}}
        className={"slider-container"}
        >
          {data.map((el,i)=>{
            return(
              <SwiperSlide key={i}>
                <div className={"slide-container"}>
                  <img src={el} width="200"/>
    
                </div>
              </SwiperSlide>
            )
    
          })}
    
        </Swiper>
    )
}

export default Slider
