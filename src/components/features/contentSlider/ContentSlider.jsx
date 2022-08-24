import React, { useState } from 'react';
import './contentSlider.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ContentSlider({slides}) {
    const [current,setCurrent] = useState(0);

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    const nextSlide = ()=>{
        setCurrent(current === 2 ? 0 : current + 1);

    }

    const prevSlide = ()=>{
        setCurrent(current === 0 ? 2 : current - 1);

    }

    setTimeout(() => {
        nextSlide()
        
    }, 2000);

  


    return (
        <div className="content-slider">
            <ArrowBackIosIcon className="content-left-arrow" onClick={prevSlide} style={{width:"17px"}}/>
            <ArrowForwardIosIcon className="content-right-arrow" onClick={nextSlide} style={{width:"17px"}}/>
            {slides.map((slide,index)=>{
                return(
                    <div className={index === current ? 'content-slide active' : 'content-slide'} key={index}>
                       {index === current && <div className="slide-div">{slide.text}</div>} 
                    </div>
                )

            })}
            
        </div>
    )
}

export default ContentSlider
