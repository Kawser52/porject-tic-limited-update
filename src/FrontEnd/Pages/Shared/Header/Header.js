import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
           <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-6">
                    <div className="header p-2 d-flex justify-content-between">
                        <div className="contact text-white">
                            <span className="mx-2"><FontAwesomeIcon icon={faPhone} className='me-2'></FontAwesomeIcon>+88 01722-952895</span> |
                            <span className="ms-2"><FontAwesomeIcon icon={faEnvelope} className='me-2'></FontAwesomeIcon>support@ticlimited.com.bd</span>
                        </div>
                        <div className="social-media d-flex">
                            <Link to='/login' href=""><FontAwesomeIcon icon={faRightToBracket} className='me-2'/>Login</Link>
                            <Link to='/register' href=""><FontAwesomeIcon icon={faUserPlus} className='me-2'></FontAwesomeIcon>Register</Link>
                            <Link to ='' href="www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></Link>
                            <a href=''><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                             <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;