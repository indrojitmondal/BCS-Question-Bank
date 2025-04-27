import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerImg from '../assets/banner.png'
const Banner = () => {
    return (
        <div>
      
                <div>
                  
                 <img src={bannerImg} alt="" />
                    
                </div>
               
               
            
        </div>
    );
};

export default Banner;