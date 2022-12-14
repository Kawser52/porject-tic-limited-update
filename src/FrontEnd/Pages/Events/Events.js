import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './Events.css';


const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/event')
        .then(res=>res.json())
        .then(data=>setEvents(data))
    },[])
    return (
        <>
           <div className="container my-3">
            <div className="our-services-header my-5">
                        <span></span>
                        <p className=''>Our Upcoming Events</p>
                     </div>
              <div className="row">
                    
                     {
                        events.map((event=><Event 
                         key={event._id}
                         event={event}
                        ></Event>))
                    }
                </div>
           </div>
        </>
    );
};

export default Events;