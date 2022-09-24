import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const CoursePages = () => {
    const [course, setCourse] = useState([]);
        useEffect(()=>{
            fetch('http://localhost:8000/course')
            .then(res=>res.json())
            .then(data=>setCourse(data[0].course))
        },[])
    return (
        <div>
            <section className='course-section'>
            <div className="container">
               <div className="row">
                    <div className="our-services-header">
                        <span>Explore Featured Courses</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                    </div>
               </div>
                <div className="col-md-6 mt-5">
                        <h2 className='course-heading'>Web Development</h2>
                </div>
               <div className="row gy-4 mt-2">
                {
                    course.map(courseInd=><Course 
                        key={courseInd._id}
                        courseInd={courseInd}></Course>)
                }
               </div>
            </div>
            </section>
        </div>
    );
};

export default CoursePages;