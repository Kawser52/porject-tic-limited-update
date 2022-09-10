import React from 'react';
import './Slide.css';
const Slide = () => {
    return (
        <div className='hero-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="hero-content">
                            <div className="hero-content-flex">
                                <h1 className='mb-3 hero-title'>Build Skills With <span className='mb-5'>Experts</span> Any Time, Anywhere</h1>
                                <p className='hero-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, optio mollitia quidem debitis consequuntur unde? Voluptates nisi similique est beatae?</p>
                                <button className='buttons text-uppercase font-weight-bold'>View All Course</button>
                                <button className='buttons ms-3 transparent text-uppercase'>Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div id="triangle-topleft"></div>
                        <div className='sytle-image'>
                            <img src="" alt="" />
                        </div>
                        <div id="triangle-bottomright"></div>
                    </div>
                </div>
            </div>
        </div>  

    );
};

export default Slide;