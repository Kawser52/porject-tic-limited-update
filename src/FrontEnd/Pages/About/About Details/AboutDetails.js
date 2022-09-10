import React from 'react';
import AboutHome from '../AboutHome/AboutHome';
import './AboutDetails.css';
const AboutDetails = () => {
    return (
        <>
          <div className="container about-us mt-5">
             <div className="row">
                <AboutHome></AboutHome>
                <div className="col-md-4">
                    <div className="mission mt-5">
                        <h4>Our Vision</h4>
                        <p className='justify-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dolorum veniam voluptas blanditiis dignissimos iste alias sint vero error reiciendis.</p>
                    </div>
                </div>
             </div>
          </div>
        </>
    );
};

export default AboutDetails;