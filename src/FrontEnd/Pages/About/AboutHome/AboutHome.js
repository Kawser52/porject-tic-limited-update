import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import test from '../../../../img/test.jpg';
import './AboutHome.css';


const AboutHome = () => {
    const aboutUs = {
        title: 'ABOUT OUR COMPANY',
        aboutSubTitle :'Tech IT Center will furnish you with all the needs',
        description: 'we have been providing several online course facilities for the students since we started the journey.'
    }
    return (
    <>
        <div className="AboutHome">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
                        <div class="image-circle" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">
                            <img src={test} alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 p-5">
                        <div className="about-us-content">
                            <p className='about-title'>{aboutUs.title}</p>
                            <h2 id='about-heading' className='my-4'>{aboutUs.aboutSubTitle}</h2>
                            <p className='common-style-paragraph'>{aboutUs.description}</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-3" data-aos="zoom-in-left" data-aos-duration="1000">
                                <h5 className='common-heading-style'><FontAwesomeIcon icon={faCircleCheck} className="highlight" beatFade />Our Mission</h5>
                                <p className='common-style-paragraph'>We stand here to move ahead in the highest way of success together.</p>
                            </div>
                            <div className="col-md-6 mt-3" data-aos="zoom-in-left" data-aos-duration="2000">
                                <h5 className='common-heading-style'><FontAwesomeIcon icon={faCircleCheck} className="highlight" beatFade />Our Mission</h5>
                                <p className='common-style-paragraph'>We stand here to move ahead in the highest way of success together.</p>
                            </div>
                            <div className="col-md-6 mt-3" data-aos="zoom-in-left" data-aos-duration="4000">
                                <h5 className='common-heading-style'><FontAwesomeIcon icon={faCircleCheck} className="highlight" beatFade />Our Mission</h5>
                                <p className='common-style-paragraph'>We stand here to move ahead in the highest way of success together.</p>
                            </div>
                            <div className="col-md-6 mt-3" data-aos="zoom-in-left" data-aos-duration="3000">
                                <h5 className='common-heading-style'><FontAwesomeIcon icon={faCircleCheck} className="highlight" beatFade />Our Mission</h5>
                                <p className='common-style-paragraph'>We stand here to move ahead in the highest way of success together.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        </>
    );
};

export default AboutHome;