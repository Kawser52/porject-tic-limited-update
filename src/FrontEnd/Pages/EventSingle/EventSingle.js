import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EventSingle.css';


const EventSingle = () => {
    const {eventId} = useParams();
    const [eventPage, setEventPage] = useState([]);
    useEffect(()=>{
         fetch(`http://localhost:8000/event/${eventId}`)
         .then(res=>res.json())
         .then(data=>setEventPage(data))

    },[])

    return (
        <div className='event-page'>
          <div className="container">
          <hr />
             <div className="row">
                <div className="col-md-9 col-lg-9">
                    <div className="eventContent">
                        <div className="event-info d-flex align-items-center justify-content-between">
                            <p>{eventPage.eventDate}</p>
                            <p>{eventPage.eventLocation}</p>
                            <p>{eventPage.eventTime}</p>
                        </div>
                        <img src={eventPage.img} alt="" width='560' height='400'/>
                         <h5>{eventPage.eventTitle}</h5>
                         <p>{eventPage.eventDescription}</p> 
                    </div>
                </div>
             </div>
          </div>
        </div>
    );
};

export default EventSingle;