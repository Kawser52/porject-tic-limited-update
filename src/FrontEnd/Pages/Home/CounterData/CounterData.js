import React from 'react';
import CountUp from 'react-countup';
import './CounterData.css';

const CounterData = ({counterItem, isVisible}) => {
    const {title, count} = counterItem;
    // isVisible = true;
    console.log(count);
    console.log(isVisible);
    const winWidth = window.innerWidth;
    const countQuery = () => {
    if (winWidth && winWidth > 768) {
      return <CountUp end={isVisible ? count : 0} />;
    }
    return <CountUp end={count} />;
  };
  
    return (
        <div>
            <div className="fact-item">
            <div className="details">
                <h3 className="mb-0 mt-0 number">
                <em className="count">{countQuery()}</em>
                </h3>
                <p className="mb-0">{title}</p>
            </div>
            </div>
        </div>
    );
};

export default CounterData;