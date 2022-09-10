import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import event from '../../../img/event-img.jpg';
import './Events.css';

const Events = () => {
    return (
        <>
           <div className="container my-3">
             <div className="row d-flex">
                    <div className="our-services-header my-5">
                        <span></span>
                        <p className=''>Our Upcoming Events</p>
                     </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <div className="events d-flex border-3">
                        <div className="event-img">
                            <img src={event} alt="" className='img-fluid' width='300' height='100' />
                            <div className='divider-shape'></div>
                        </div>
                        <div className="event-content">
                            <span className='date'>Wed, 3, 2022</span>
                            <a className='event-title'>Music Conference</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                            <p><FontAwesomeIcon icon={faLocation} className='orange event-icon me-2'></FontAwesomeIcon>Rajshahi, Bangladesh</p>
                        </div>
                    </div>
                </div>  
                <div className="col-md-6">
                    <div className="events d-flex border-3">
                        <div className="event-img">
                            <img src={event} alt="" className='img-fluid' width='300' height='100' />
                            <div className='divider-shape'></div>
                        </div>
                        <div className="event-content">
                            <span className='date'>Wed, 3, 2022</span>
                            <a className='event-title'>Music Conference</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                            <p><FontAwesomeIcon icon={faLocation} className='orange event-icon me-2'></FontAwesomeIcon>Rajshahi, Bangladesh</p>
                        </div>
                    </div>
                </div>  
                </div>  

                <div className="row">
                <div className="col-md-6">
                    <div className="events d-flex border-3">
                        <div className="event-img">
                            <img src={event} alt="" className='img-fluid' width='300' height='100' />
                            <div className='divider-shape'></div>
                        </div>
                        <div className="event-content">
                            <span className='date'>Wed, 3, 2022</span>
                            <a className='event-title'>Music Conference</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                            <p className='addres'><FontAwesomeIcon icon={faLocation} className='orange event-icon me-2'></FontAwesomeIcon>Rajshahi, Bangladesh</p>
                        </div>
                    </div>
                </div>  
                <div className="col-md-6">
                    <div className="events d-flex border-3">
                        <div className="event-img">
                            <img src={event} alt="" className='img-fluid' width='300' height='100' />
                            <div className='divider-shape'></div>
                        </div>
                        <div className="event-content">
                            <span className='date'>Wed, 3, 2022</span>
                            <a className='event-title'>Music Conference</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                            <p><FontAwesomeIcon icon={faLocation} className='orange event-icon me-2'></FontAwesomeIcon>Rajshahi, Bangladesh</p>
                        </div>
                    </div>
                </div>  
                </div>
           </div>
        </>
    );
};

export default Events;