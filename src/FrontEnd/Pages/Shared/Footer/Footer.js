import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
           <footer>
                <div className="footer-section m-0 p-0">
                <div className="container-fluid mt-5">
                    <div className="card">
                            <div className="row g-0">
                            <div className="col-md-8 border-right">
                                <div className="border-bottom">
                                <div className="row p-4">
                                    <div className="col-md-3">
                                        <ul className="item-list">
                                            <li><a href="#">Desktop app</a></li>
                                            <li><a href="#">Mobile app</a></li>
                                            <li><a href="#">Plan</a></li>
                                            <li><a href="#">Security</a></li>
                                            <li><a href="#">Features</a></li>
                                        </ul> 
                                    </div>
                                    <div className="col-md-3">
                                        <ul className="item-list">
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">FAQS</a></li>
                                            <li><a href="#">Press Releases</a></li>
                                            <li><a href="#">Media Kit</a></li>
                                            <li><a href="#">Events</a></li>
                                        </ul>   
                                    </div>
                                    <div className="col-md-3">
                                        <ul className="item-list">                                           
                                            <li><a href="#">Desktop app</a></li>
                                            <li><a href="#">Mobile app</a></li>
                                            <li><a href="#">Plan</a></li>
                                            <li><a href="#">Security</a></li>
                                             <li><a href="#">Features</a></li>
                                        </ul>                                        
                                    </div>
                                    <div className="col-md-3">
                                      <ul className="item-list">
                                        <li><a href="#">Developers</a></li>
                                        <li><a href="#">Referals</a></li>
                                        <li><a href="#">Forum</a></li>
                                        </ul> 
                                    </div>
                                </div>
                                </div>
                                <div className="border-bottom">   
                                <div className="row p-4">
                                     <h5 className='text-center text-white font-weight-bold mb-4'>Our Branch Location</h5>
                                    <div className="col-md-4">
                                        <div className="d-flex flex-column align-items-center mr-46">
                                            <img src="https://i.imgur.com/phiO1J4.jpg" className="rounded-circle" width="50" />
                                            <span className="text-white mt-2">KeshorHat, Rajshahi</span>     
                                        </div>                                       
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex flex-column align-items-center mr-46">
                                            <img src="https://i.imgur.com/KXDKPvt.jpg" className="rounded-circle" width="50" />
                                            <span className="text-white mt-2">Shaheb Bajar, Rajshahi</span>                                         
                                        </div>                                      
                                    </div>
                                    <div className="col-md-4">
                                    <div className="d-flex flex-column align-items-center mr-46">
                                            <img src="https://i.imgur.com/D4pUdsf.jpg" className="rounded-circle" width="50" />
                                            <span className="text-white mt-2">Dhaka</span>                                           
                                        </div>                                       
                                    </div>
                                </div>
                                </div>
                                <div className="d-flex justify-content-between p-4">
                                    <span className="text-white">2022 Copyright Devoloped By TIC Limited</span>
                                    <span className="text-white">Terms and conditions</span>                                    
                                </div>                  
                            </div>
                            <div className="col-md-4">
                           <div className="border-bottom"> 
                            <div className="bg-danger p-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="dots"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></span>
                                    <span className="text-content">Let's Talk</span>                                 
                                </div>                              
                            </div>
                            <div className="mt-3 text-center p-2">
                                    <div className="text-center d-flex flex-row align-items-center">
                                        <img src="https://i.imgur.com/QpQpT3e.png" width="60"/>
                                        <div className="ml-3 ms-3">
                                            <span className="text-white d-block text-left">Business Enquiry</span>
                                            <span className="text-white">contact@ticlimited.com</span>
                                        </div>                               
                                    </div>                                
                            </div>
                            <div className="mt-0 text-center p-2">
                                    <div className="text-center d-flex flex-row align-items-center">
                                        <img src="https://i.imgur.com/KtUwFEK.png" width="60"/>
                                        <div className="ms-3 ">
                                            <span className="text-white d-block text-left">PR or Media</span>
                                            <span className="text-white">marketing@ticlimited.com</span>
                                        </div>                                
                                    </div>                               
                            </div>
                            </div>
                            <div className="border-bottom"> 
                                <div className="p-3 px-3 py-2">
                                <div className="search d-flex align-items-center"> <input className="search_input" type="text" name="" placeholder="Enter your email"/> <a href="#" className="search_icon"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a> </div>
                           </div>
                           </div>
                            <div className="social p-4 text-center"> 
                                    <ul className="social-icons">  
                                        <li><FontAwesomeIcon icon={faFacebook} className=' fa-2x text-white'></FontAwesomeIcon></li>
                                        <li><FontAwesomeIcon icon={faTwitter} className='fa-2x text-white'></FontAwesomeIcon></li>
                                        <li><FontAwesomeIcon icon={faLinkedin} className='fa-2x text-white'></FontAwesomeIcon></li>
                                    </ul>                  
                            </div>
                            </div>
                            </div>
                    </div>
                </div>
                </div>
            </footer> 
        </>
    );
};

export default Footer;