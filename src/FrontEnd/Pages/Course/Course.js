import { faClock, faSignal, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import courseImage from '../../../img/course-1.jpg';

const Course = ({courseInd}) => {
    const {_id, course, id, name, offlineprice} = courseInd;
    return (
        <>
             <div className="col-md-4 col-sm-6">
                    <div className="courses">
                       <div className="course-content bg-image hover-zoom">
                            <div className="img-zoom">
                             <img src={courseImage} alt="" className='img-fluid bg-image hover-zoom'/>
                            </div>
                            <div className="category-enroll d-flex d-flex justify-content-between mt-2">
                                <p id='cat' className=''>Development</p>
                                <p id='enroll'>12 Enrolled</p>
                            </div>
                            <div className='coure-title'>
                                <Link to = {`/course/${id}`}>{name}</Link>
                                <div className="course-details d-flex">
                                    <p className=''><FontAwesomeIcon icon={faClock} className='red me-2'></FontAwesomeIcon>12 Week</p>
                                    <p className='mx-3'><FontAwesomeIcon icon={faVideo} className='green me-2'></FontAwesomeIcon>2 Lessons</p>
                                    <p className=''><FontAwesomeIcon icon={faSignal} className='orange me-2'></FontAwesomeIcon>Intermediate</p>
                                </div>
                                <hr />
                                <div className="course-down d-flex justify-content-between align-items-center">
                                    <div className="div">
                                        <img src={courseImage} alt="" width='35' height="35" className='rounded-circle me-3'/>
                                        <span>Johon Smith</span>
                                        </div>
                                    <p className='float-end text-center mt-3 price'>৳ {offlineprice}</p>
                                </div>
                            </div>
                       </div>
                    </div>
                 </div>
        </>
    );
};

export default Course;