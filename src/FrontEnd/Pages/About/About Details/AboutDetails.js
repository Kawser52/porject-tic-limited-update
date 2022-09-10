import React from 'react';
import aboutUs from '../../../../img//about-us.jpg';
import Counter from '../../Home/Counter/Counter';
import AboutHome from '../AboutHome/AboutHome';
import './AboutDetails.css';
const AboutDetails = () => {
    return (
        <>
          <div>
            <AboutHome></AboutHome>
          </div>
            <div className="container">
             <div className="row">
                <div className="branch-title">
                    <h4>Our Branches</h4>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="branches">
                        <h5>Head Office</h5>
                        <p>A.H Buliding (5th Floor), Alokar Mor, Rajshai
                        </p>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="branches yellow">
                        <h5>Head Office</h5>
                        <p>A.H Buliding (5th Floor), Alokar Mor, Rajshai
                        </p>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="branches">
                        <h5>Head Office</h5>
                        <p>A.H Buliding (5th Floor), Alokar Mor, Rajshai
                        </p>
                    </div>
                </div>
             </div>
          </div>

          
          <div className="container about-us mt-5">
             <div className="row">
                <div className="col-md-6">
                    <div className="mission">
                        <h4>About US</h4>
                        <p className='justify-center'>TIC Limited is willing to let you know about the activities, mission, vision for knowing us with perfection. Basically, we have started this journey for gathering a unity to work in marketplaces. But according to the demand of time, we smoothly took several steps and included different advantages. We have a team and we have been working here as freelancers since the beginning of our journey.
We have some exquisite experts trainer in our institution to train the students to make them perfect for marketplaces according to the demand of clients. They have been absolutely fantastic in the department of training. Already we have 20+ batches who have done their training on SEO, Graphics Design, Digital Marketing, English SPoken and many more. They are performing well in the marketplace.
Since the dawn of civilization, people are desperate about creating something extraordinary. Nowadays this platform became very popular to overcome poverty as well as relief from the pressure of the job. Youth generation chooses this individual profession for being comfortable with the lifestyle. Our journey is to decorate them with their proper needs.
We have a team for servicing online ..</p>
                    </div> 
                </div>
                <div className="col-md-6 mt-5">
                         <img src={aboutUs} alt="" className='img-fluid border-5'/>
                    </div>
             </div>
          </div>
            <div>
                <Counter></Counter>
            </div>
          <div className="container mt-5 text-center">
            <div className="row">
                <div className="col-md-12">
                    <h4 className='text-center'>Our Location</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.2804097607636!2d88.60091018815609!3d24.36982146078659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefb2c28527bd%3A0x45e785f19046d881!2sTIC%20LIMITED!5e0!3m2!1sen!2sus!4v1662793498776!5m2!1sen!2sus" width="900" height="450" style={{border:'2px solid #a0cbeb'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
          </div>
        </>
    );
};

export default AboutDetails;