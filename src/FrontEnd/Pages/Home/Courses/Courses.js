import { faClock, faSignal, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import courseImage from '../../../../img/course-1.jpg';
import courseImage2 from '../../../../img/course-2.jpg';
import './Course.css';


const Courses = () => {
  const courseInfo =[
    {
        

    }
  ]


    return (
        <div className='our-courses'>
            <div className="container">
               <div className="row">
                    <div className="our-services-header">
                        <span>Explore Featured Courses</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                    </div>
                    <div className="col-md-6 mt-5">
                        <h2 className='course-heading'>Web Development</h2>
                    </div>
                    <div className="col-md-6  mt-5 float-end">
                        <button className='float-end buttons text-uppercase font-weight-bold'>View All Courses</button>
                    </div>
               </div>
               <div className="row gy-4 mt-2">
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
                                <h6 className='my-3'>Full Web Designing Course With 30 Web Template</h6>
                                <div className="course-details d-flex">
                                    <p className=''><FontAwesomeIcon icon={faClock} className='red me-2'></FontAwesomeIcon>12 Week</p>
                                    <p className='mx-3 '><FontAwesomeIcon icon={faVideo} className='green me-2'></FontAwesomeIcon>2 Lessons</p>
                                    <p className=''><FontAwesomeIcon icon={faSignal} className='orange me-2'></FontAwesomeIcon>Intermediate</p>
                                </div>
                                <hr />
                                <div className="course-down d-flex justify-content-between align-items-center">
                                    <div className="div">
                                        <img src={courseImage} alt="" width='35' height="35" className='rounded-circle me-3'/>
                                        <span>Johon Smith</span>
                                        </div>
                                    <p className='float-end text-center mt-2 price'>৳8500</p>
                                </div>
                            </div>
                       </div>
                    </div>
                 </div>
                 <div className="col-md-4 col-sm-6">
                    <div className="courses">
                       <div className="course-content">
                            <div className="img-zoom">
                                <img src={courseImage2} alt="" className='img-fluid'/>
                            </div>
                            <div className="category-enroll d-flex d-flex justify-content-between mt-2">
                                <p id='cat' className=''>Development</p>
                                <p id='enroll'>12 Enrolled</p>
                            </div>
                            <div className='coure-title'>
                                <h6 className='my-3'>Full Web Development Course With 40 Web Template</h6>
                                <div className="course-details d-flex">
                                    <p className=''><FontAwesomeIcon icon={faClock} className='red me-2'></FontAwesomeIcon>12 Week</p>
                                    <p className='mx-3 '><FontAwesomeIcon icon={faVideo} className='green me-2'></FontAwesomeIcon>2 Lessons</p>
                                    <p className=''><FontAwesomeIcon icon={faSignal} className='orange me-2'></FontAwesomeIcon>Intermediate</p>
                                </div>
                                <hr />
                                <div className="course-down d-flex justify-content-between align-items-center">
                                    <div className="div">
                                        <img src={courseImage} alt="" width='35' height="35" className='rounded-circle me-3'/>
                                        <span>Johon Smith</span>
                                        </div>
                                    <p className='float-end text-center mt-2 price'>৳12500</p>
                                </div>
                            </div>
                       </div>
                    </div>
                 </div>
                 <div className="col-md-4 col-sm-6">
                    <div className="courses">
                       <div className="course-content">
                            <div className="img-zoom">
                            <img src={courseImage} alt="" className='img-fluid course-image'/>
                            </div>
                            <div className="category-enroll d-flex d-flex justify-content-between mt-2">
                                <p id='cat' className=''>Development</p>
                                <p id='enroll'>12 Enrolled</p>
                            </div>
                            <div className='coure-title'>
                                <h6 className='my-3'>Full Web Designing Course With 30 Web Template</h6>
                                <div className="course-details d-flex">
                                    <p className=''><FontAwesomeIcon icon={faClock} className='red me-2'></FontAwesomeIcon>12 Week</p>
                                    <p className='mx-3 '><FontAwesomeIcon icon={faVideo} className='green me-2'></FontAwesomeIcon>2 Lessons</p>
                                    <p className=''><FontAwesomeIcon icon={faSignal} className='orange me-2'></FontAwesomeIcon>Intermediate</p>
                                </div>
                                <hr />
                                <div className="course-down d-flex justify-content-between align-items-center">
                                    <div className="div">
                                        <img src={courseImage} alt="" width='35' height="35" className='rounded-circle me-3'/>
                                        <span>Johon Smith</span>
                                        </div>
                                    <p className='float-end text-center mt-2 price'>৳13500</p>
                                </div>
                            </div>
                       </div>
                    </div>
                 </div>
               </div>

            {/* Graphics Design */}
               <div className="row">
                    <div className="col-md-6 mt-5">
                        <h2 className='course-heading'>Graphics Design</h2>
                    </div>
                    <div className="col-md-6  mt-5 float-end">
                        <button className='float-end buttons text-uppercase font-weight-bold'>View All Courses</button>
                    </div>
               </div>
               <div className="row gy-4 mt-2">
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
                                <h6 className='my-3'>Full Web Designing Course With 30 Web Template</h6>
                                <div className="course-details d-flex">
                                    <p className=''><FontAwesomeIcon icon={faClock} className='red me-2'></FontAwesomeIcon>12 Week</p>
                                    <p className='mx-3 '><FontAwesomeIcon icon={faVideo} className='green me-2'></FontAwesomeIcon>2 Lessons</p>
                                    <p className=''><FontAwesomeIcon icon={faSignal} className='orange me-2'></FontAwesomeIcon>Intermediate</p>
                                </div>
                                <hr />
                                <div className="course-down d-flex justify-content-between align-items-center">
                                    <div className="div">
                                        <img src={courseImage} alt="" width='35' height="35" className='rounded-circle me-3'/>
                                        <span>Johon Smith</span>
                                        </div>
                                    <p className='float-end text-center mt-2 price'>৳8500</p>
                                </div>
                            </div>
                       </div>
                    </div>
                 </div>
                 <div className="col-md-4 col-sm-6">
                    <div className="courses">
                       <div className="course-content">
                            <div className="img-zoom">
                                <img src={courseImage2} alt="" className='img-fluid'/>
                            </div>
                            <div className="category-enroll d-flex d-flex justify-content-between mt-2">
                                <p id='cat' className=''>Development</p>
                                <p id='enroll'>12 Enrolled</p>
                            </div>
                            <div className='coure-title'>
                                <h6 className='my-3'>Full Web Development Course With 40 Web Template</h6>
                                <div className="course-details d-flex">
                                    <p className=''><FontAwesomeIcon icon={faClock} className='red me-2'></FontAwesomeIcon>12 Week</p>
                                    <p className='mx-3 '><FontAwesomeIcon icon={faVideo} className='green me-2'></FontAwesomeIcon>2 Lessons</p>
                                    <p className=''><FontAwesomeIcon icon={faSignal} className='orange me-2'></FontAwesomeIcon>Intermediate</p>
                                </div>
                                <hr />
                                <div className="course-down d-flex justify-content-between align-items-center">
                                    <div className="div">
                                        <img src={courseImage} alt="" width='35' height="35" className='rounded-circle me-3'/>
                                        <span>Johon Smith</span>
                                        </div>
                                    <p className='float-end text-center mt-2 price'>৳12500</p>
                                </div>
                            </div>
                       </div>
                    </div>
                 </div>
                 <div className="col-md-4 col-sm-6">
                    <div className="courses">
                       <div className="course-content">
                            <div className="img-zoom">
                            <img src={courseImage} alt="" className='img-fluid course-image'/>
                            </div>
                            <div className="category-enroll d-flex d-flex justify-content-between mt-2">
                                <p id='cat' className=''>Development</p>
                                <p id='enroll'>12 Enrolled</p>
                            </div>
                            <div className='coure-title'>
                                <h6 className='my-3'>Full Web Designing Course With 30 Web Template</h6>
                                <div className="course-details d-flex">
                                    <p className=''><FontAwesomeIcon icon={faClock} className='red me-2'></FontAwesomeIcon>12 Week</p>
                                    <p className='mx-3 '><FontAwesomeIcon icon={faVideo} className='green me-2'></FontAwesomeIcon>2 Lessons</p>
                                    <p className=''><FontAwesomeIcon icon={faSignal} className='orange me-2'></FontAwesomeIcon>Intermediate</p>
                                </div>
                                <hr />
                                <div className="course-down d-flex justify-content-between align-items-center">
                                    <div className="div">
                                        <img src={courseImage} alt="" width='35' height="35" className='rounded-circle me-3'/>
                                        <span>Johon Smith</span>
                                        </div>
                                    <p className='float-end text-center mt-2 price'>৳13500</p>
                                </div>
                            </div>
                       </div>
                    </div>
                 </div>
               </div>

                 {/* Digital Marketing */}
                 <div className="row">
                    <div className="col-md-6 mt-5">
                        <h2 className='course-heading'>Digital Marketing</h2>
                    </div>
                    <div className="col-md-6  mt-5 float-end">
                        <button className='float-end buttons text-uppercase font-weight-bold'>View All Courses</button>
                    </div>
               </div>
               <div className="row gy-4 mt-2">
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
                                <h6 className='my-3'>Full Web Designing Course With 30 Web Template</h6>
                                <div className="course-details d-flex">
                                    <p className=''><FontAwesomeIcon icon={faClock} className='red me-2'></FontAwesomeIcon>12 Week</p>
                                    <p className='mx-3 '><FontAwesomeIcon icon={faVideo} className='green me-2'></FontAwesomeIcon>2 Lessons</p>
                                    <p className=''><FontAwesomeIcon icon={faSignal} className='orange me-2'></FontAwesomeIcon>Intermediate</p>
                                </div>
                                <hr />
                                <div className="course-down d-flex justify-content-between align-items-center">
                                    <div className="div">
                                        <img src={courseImage} alt="" width='35' height="35" className='rounded-circle me-3'/>
                                        <span>Johon Smith</span>
                                        </div>
                                    <p className='float-end text-center mt-2 price'>৳8500</p>
                                </div>
                            </div>
                       </div>
                    </div>
                 </div>
                 <div className="col-md-4 col-sm-6">
                    <div className="courses">
                       <div className="course-content">
                            <div className="img-zoom">
                                <img src={courseImage2} alt="" className='img-fluid'/>
                            </div>
                            <div className="category-enroll d-flex d-flex justify-content-between mt-2">
                                <p id='cat' className=''>Development</p>
                                <p id='enroll'>12 Enrolled</p>
                            </div>
                            <div className='coure-title'>
                                <h6 className='my-3'>Full Web Development Course With 40 Web Template</h6>
                                <div className="course-details d-flex">
                                    <p className=''><FontAwesomeIcon icon={faClock} className='red me-2'></FontAwesomeIcon>12 Week</p>
                                    <p className='mx-3 '><FontAwesomeIcon icon={faVideo} className='green me-2'></FontAwesomeIcon>2 Lessons</p>
                                    <p className=''><FontAwesomeIcon icon={faSignal} className='orange me-2'></FontAwesomeIcon>Intermediate</p>
                                </div>
                                <hr />
                                <div className="course-down d-flex justify-content-between align-items-center">
                                    <div className="div">
                                        <img src={courseImage} alt="" width='35' height="35" className='rounded-circle me-3'/>
                                        <span>Johon Smith</span>
                                        </div>
                                    <p className='float-end text-center mt-2 price'>৳12500</p>
                                </div>
                            </div>
                       </div>
                    </div>
                 </div>
                 <div className="col-md-4 col-sm-6">
                    <div className="courses">
                       <div className="course-content">
                            <div className="img-zoom">
                            <img src={courseImage} alt="" className='img-fluid course-image'/>
                            </div>
                            <div className="category-enroll d-flex d-flex justify-content-between mt-2">
                                <p id='cat' className=''>Development</p>
                                <p id='enroll'>12 Enrolled</p>
                            </div>
                            <div className='coure-title'>
                                <h6 className='my-3'>Full Web Designing Course With 30 Web Template</h6>
                                <div className="course-details d-flex">
                                    <p className=''><FontAwesomeIcon icon={faClock} className='red me-2'></FontAwesomeIcon>12 Week</p>
                                    <p className='mx-3 '><FontAwesomeIcon icon={faVideo} className='green me-2'></FontAwesomeIcon>2 Lessons</p>
                                    <p className=''><FontAwesomeIcon icon={faSignal} className='orange me-2'></FontAwesomeIcon>Intermediate</p>
                                </div>
                                <hr />
                                <div className="course-down d-flex justify-content-between align-items-center">
                                    <div className="div">
                                        <img src={courseImage} alt="" width='35' height="35" className='rounded-circle me-3'/>
                                        <span>Johon Smith</span>
                                        </div>
                                    <p className='float-end text-center mt-2 price'>৳13500</p>
                                </div>
                            </div>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
        </div>
    );
};

export default Courses;