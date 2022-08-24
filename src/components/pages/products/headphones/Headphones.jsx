import React from 'react';
import { headphones } from '../../../data';
import '../products.css';
import Card from '../../../features/Card/Card';

const Headphones = () => {
    return (
        <div className="products-container">
               {headphones.map((item)=>{
                return(
                    <Card img={item.img} title={item.title}/>
                )

            })}
            
        </div>
    )
}

export default Headphones
