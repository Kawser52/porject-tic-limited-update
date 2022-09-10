import React from 'react';
import Slider from 'react-slick';
import './WhatWeDo.css';

const WhatWeDo = () => {
    const settings = {
         dots: false,
         infinite: true,
         slidesToShow: 4,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: false
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             initialSlide: 2
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
     };
    return (
      <div className="service-section mt-5 pt-5">
          <div className="container">
                <div className="our-services-header">
                    <span>CHECK SERVICES</span>
                    <p>We do awesome Services for our clients. Check some of our Services.</p>
                </div>
                <Slider {...settings}>
                    <div className='our-services'>
                        <div className="our-services-content">
                            <h4>Graphics <span>Design</span></h4>
                             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                             <div className="overlay"></div>
                        </div>
                    </div>
                    <div className='our-services'>
                        <div className="our-services-content">
                            <h4>Web <span>Design</span></h4>
                             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                             <div className="overlay"></div>
                        </div>
                    </div>
                    <div className='our-services'>
                        <div className="our-services-content">
                            <h4>Digital <span>Marketing</span></h4>
                             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                             <div className="overlay"></div>
                        </div>
                    </div>
                    <div className='our-services'>
                        <div className="our-services-content">
                            <h4>Ecoommerce <span>Project</span></h4>
                             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                             <div className="overlay"></div>
                        </div>
                    </div>
                    <div className='our-services'>
                        <div className="our-services-content">
                            <h4>Software <span>Development</span></h4>
                             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                             <div className="overlay"></div>
                        </div>
                    </div>
                </Slider>
            </div>
          </div>
    );
};

export default WhatWeDo;