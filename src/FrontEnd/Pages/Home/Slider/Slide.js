import React from 'react';
import dot from '../../../../img/Dot-Transparent-Background.png';
import webDev from '../../../../img/web-development-vector.png';
import './Slide.css';

const Slide = () => {
    return (
        <>
            <section className="hero-banner pt-5">
                <div className="container">
                    <div className="row row align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-lg-1">
                             <img src={webDev} className="img-fluid floating" alt="Web Development" data-aos="fade-left" data-aos-duration="3000"/>
                            <img src={dot} className='img-fluid dot' alt="" />
                        </div>
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration="3000">
                            <h1 className="mt-3">Build Skills With <span className='mb-5'>Experts</span> Any Time, Anywhere</h1>
                            <p className="lead text-secondary my-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                            <a href="#" className="buttons">VIEW ALL COURSE</a>
                            <a href="#" className="buttons ms-3">ENROLL NOW</a>
                        </div>
                    </div>
                </div>
                <div className="bg-animation mb-5">
             <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
             <defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdc"></stop><stop offset="95%" stop-color="#32ded4"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,133 0,133 C 80.17857142857139,116.07142857142857 160.35714285714278,99.14285714285714 296,88 C 431.6428571428572,76.85714285714286 622.7500000000002,71.50000000000001 772,92 C 921.2499999999998,112.49999999999999 1028.642857142857,158.85714285714283 1133,170 C 1237.357142857143,181.14285714285717 1338.6785714285716,157.07142857142858 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
             <defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdc"></stop><stop offset="95%" stop-color="#32ded4"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,266 0,266 C 145.53571428571428,262.1428571428571 291.07142857142856,258.2857142857143 419,263 C 546.9285714285714,267.7142857142857 657.2499999999999,280.99999999999994 749,289 C 840.7500000000001,297.00000000000006 913.9285714285716,299.7142857142857 1026,295 C 1138.0714285714284,290.2857142857143 1289.0357142857142,278.1428571428571 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
        </div>
            </section>
        </>
    );
};

export default Slide;