import React from 'react';
import AboutHome from '../About/AboutHome/AboutHome';
import Blog from '../Blogs/Blog';
import DomainHosting from '../DomainHosting/DomainHosting';
import Events from '../Events/Events';
import Counter from './Counter/Counter';
import Courses from './Courses/Courses';
import Slide from './Slider/Slide';
import Testimonial from './Testimonial/Testimonial';
import WhatWeDo from './WhatWeDo/WhatWeDo';

const Home = () => {
    
    return (
        <>
            <Slide></Slide>
            <AboutHome></AboutHome>
            <Counter></Counter>
            <DomainHosting></DomainHosting>
            <WhatWeDo></WhatWeDo>
            <Courses></Courses>
            <Testimonial></Testimonial>
            <Events></Events>
            <Blog></Blog>
            
        </>
    );
};

export default Home;
