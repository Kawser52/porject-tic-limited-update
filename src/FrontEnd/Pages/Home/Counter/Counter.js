import React from 'react';
import TrackVisibility from 'react-on-screen';
import CounterData from '../CounterData/CounterData';
import './Counter.css';


const Counter = () => {
    const counterData = [
        {
          id: 1,
          title: "Projects completed",
          count: 198,
        },
        {
          id: 2,
          title: "Cup of coffee",
          count: 5670,
        },
        {
          id: 3,
          title: "Satisfied clients",
          count: 427,
        },
        {
          id: 4,
          title: "Nominees winner",
          count: 35,
        },
      ];
    return (
        <div className='Counter mt-5'>
            <div className="container">
                <div className="row ">
                    {counterData.map((counter) => (
                         <div className="col-md-3 spaceing col-sm-6">
                            <div className="st">
                                <TrackVisibility once>
                                    <CounterData key={counter.id} counterItem = {counter}></CounterData>
                                </TrackVisibility>
                            </div>
                    </div>
                    ))} 
                </div>
                
            </div>
        </div>
    );
};

export default Counter;