import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Event.css';


const Event = ({event}) => {
   const {_id, eventTitle, eventDescription, eventDate, eventLocation, img} = event;
    return (
        <>
             <div className="col-md-6">
                    <div className="events d-flex border-3">
                        <img src={img} alt="" className='img-fluid' width='200' height='200' />
                           <div className="event-content">
                            <span className='date'>{eventDate}</span>
                            <Link to={`/event/${_id}`} className='event-title'>{eventTitle}</Link>
                            <p className='ms-3 d-block custom-paragraph'>{eventDescription.slice(0, 100)}</p>
                            <p><FontAwesomeIcon icon={faLocation} className='orange event-icon me-2'></FontAwesomeIcon>{eventLocation}</p>
                        </div>
                    </div>
                </div>  
        </>
    );
};

export default Event;