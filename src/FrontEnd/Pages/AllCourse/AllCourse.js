import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const AllCourse = () => {
    const [webCourse, setWebCourse]= useState([]);
    const [grapCourse, setgrapCourse] = useState([]);
    const [digCourse, setDigCourse] = useState([]);
        useEffect(()=>{
            fetch('http://localhost:8000/course')
            .then(res=>res.json())
            .then(data=>setWebCourse(data[0].course));
        },[])

        useEffect(()=>{
            fetch('http://localhost:8000/course')
            .then(res=>res.json())
            .then(data=>setgrapCourse(data[1].course))
        },[])

        useEffect(()=>{
            fetch('http://localhost:8000/course')
            .then(res=>res.json())
            .then(data=>setDigCourse(data[2].course))
        },[])
    return (
        <>
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
                    webCourse.map(courseInd=><Course 
                        key={courseInd._id}
                        courseInd={courseInd}></Course>)
                }
               </div>
               <div className="col-md-6 mt-5">
                        <h2 className='course-heading'>Graphics Design</h2>
                </div>
               <div className="row gy-4 mt-2">
                {
                    grapCourse.map(courseInd=><Course 
                        key={courseInd._id}
                        courseInd={courseInd}></Course>)
                }
               </div>
               <div className="col-md-6 mt-5">
                        <h2 className='course-heading'>Digital Marketing</h2>
                </div>
               <div className="row gy-4 mt-2">
                {
                    digCourse.map(courseInd=><Course 
                        key={courseInd._id}
                        courseInd={courseInd}></Course>)
                }
               </div>
            </div>
            </section>  
        </>
    );
};

export default AllCourse;