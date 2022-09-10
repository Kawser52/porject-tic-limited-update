import { faCalendar, faForward, faPlay, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CourseDetails.css';

const CourseDetails = () => {
    return (
        <div className='course-details-page'>
            <hr />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="course-cover-thumb">
                            <img src="https://demoapus1.com/skillup/wp-content/uploads/2022/05/cr-4-500x300.jpg" alt="" className='img-fluid'/>
                            <a className='video' href="https://www.youtube.com/watch?v=7e90gBu4pas"><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon> Preview</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                         <div className="course-details">
                         <div class="course-category">
                            <a class="course-category-item" href="" className='me-2'>IT &amp; Software</a>
                            <a class="course-category-item" href="">Web Designing</a>
                        </div>
                        <h4>Education Software And PHP And JS System Script</h4>
                        <div className="description mt-3">
                            <span><FontAwesomeIcon icon={faCalendar} className='mx-2 red'></FontAwesomeIcon>4 Week</span>
                            <span><FontAwesomeIcon icon={faForward} className='mx-2 green'></FontAwesomeIcon>4 Week</span>
                            <span><FontAwesomeIcon icon={faUser} className='mx-2 orange'></FontAwesomeIcon>12 Enrolled</span>
                        </div>
                        <div className='rating d-flex list-unstyled'>
                            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
                            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
                            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
                            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
                            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
                            <span className='count-rating'>(4 rating)</span>
                        </div>
                         </div>
                    </div>
                    <div className="col-md-3 mt-3">
                        <button className='d-block buttons'>Enroll Now</button>
                    </div>
                </div>
            </div>

            <div className="course-info mt-5">
              <div className="container">
                 <div className="row g-3">
                    <div className="col-md-4">
                        <div className="course-information d-flex justify-content-center align-items-center">
                           <div className="icon-st d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faCalendar} className='icon-custom red'></FontAwesomeIcon>
                           </div>
                             <div className="bottom-info me-3 ">
                                <h5 className='ms-3'>Duration</h5>
                                <span className='ms-3'>4 Week</span>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="course-information d-flex justify-content-center align-items-center">
                           <div className="icon-st d-flex justify-content-center bg-st-g align-items-center">
                                <FontAwesomeIcon icon={faForward} className='icon-custom  green'></FontAwesomeIcon>
                           </div>
                             <div className="bottom-info me-3 ">
                                <h5 className='ms-3'>Duration</h5>
                                <span className='ms-3'>4 Week</span>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="course-information d-flex justify-content-center align-items-center">
                           <div className="icon-st d-flex bg-halka justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faUser} className='icon-custom  orange'></FontAwesomeIcon>
                           </div>
                             <div className="bottom-info">
                                <h5 className='ms-3'>Duration</h5>
                                <span className='ms-3'>4 Week</span>
                             </div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>

            <div className="course-description border-homepage">
              <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="course-det">
                            <h6>Course Overview</h6>
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minus nam corrupti alias repudiandae, fuga at, praesentium necessitatibus quidem vitae hic iusto. Officia alias at voluptatibus inventore laudantium sapiente doloribus temporibus nam aperiam dolores, excepturi dignissimos modi adipisci voluptates nostrum possimus <br /> quam distinctio ea, delectus asperiores nulla accusantium ut eligendi. Commodi quibusdam dolores aut, saepe corporis labore veritatis excepturi doloremque deserunt sed ad voluptatum fugit harum ab nesciunt expedita soluta assumenda quam porro, sapiente illo perspiciatis sunt unde rerum! Exercitationem voluptates doloremque fugit nobis impedit, nam ab, laborum quis natus illo id! Eveniet dolores fugit corporis earum dolorem quod perferendis unde, necessitatibus eos eligendi ut voluptatum porro dignissimos non facilis esse magni ullam omnis saepe rerum ipsum possimus similique. Autem hic saepe in, libero rerum minima sed odio excepturi labore. Aspernatur porro saepe natus odit necessitatibus debitis consequatur commodi eveniet rem suscipit minima maiores alias tempore beatae, sit laudantium totam illo facere repellendus, eaque quasi! Veniam deleniti tempora recusandae molestiae velit omnis at magnam ex odit suscipit autem tempore exercitationem sapiente libero, rerum dolorem nemo consequatur. Dolor, provident officiis est cupiditate praesentium odit accusamus voluptates eligendi neque. Magni repellendus autem quibusdam nesciunt, ratione a harum officiis vero modi quidem quas inventore pariatur beatae excepturi eveniet ea eos rerum tempore obcaecati consequuntur laborum iste repellat deserunt. Nesciunt impedit incidunt quam eum consequatur ratione sapiente ullam, perspiciatis autem quod facere deserunt, rerum voluptate aliquid a error ad cumque minima sequi hic molestiae, quia laudantium! Molestiae error,</p>
                        </div>
                        <div className="course-video mt-5">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
                                    </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <iframe width="370" height="255" src="https://www.youtube.com/embed/7e90gBu4pas" title="Working at Envato" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>$55</p>
                        <li></li>
                    </div>
                </div>
             </div>
            </div>
        </div>
    );
};

export default CourseDetails;