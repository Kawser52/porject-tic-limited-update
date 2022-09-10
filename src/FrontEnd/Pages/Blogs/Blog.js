import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-section mt-5'>
            <div class="container">
                 <div className="our-services-header my-5">
                        <span>Succes Story</span>
                        <p className=''>Our Student Success Story</p>
                     </div>
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="card card-block">
                                <img src="https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="Photo of sunset" className=''/>
                                <a class="card-title mt-3 mb-3">Md. Abur Rahman</a>
                                <p className='occupation'>Freelancer</p>
                                <p class="card-text">আমি ছোট একটি গ্রামে থাকি। যেখানে ভালো নেট কানেশন নাই। ইচ্ছা ছিল নিজে কিছু করব। এরপর....  </p>
                                <button className='blog-btn'>More Details <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                        <div class="card card-block">
                                <img src="https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="Photo of sunset" className=''/>
                                <a class="card-title mt-3 mb-3">Md. Abur Rahman</a>
                                <p className='occupation'>Freelancer</p>
                                <p class="card-text">আমি ছোট একটি গ্রামে থাকি। যেখানে ভালো নেট কানেশন নাই। ইচ্ছা ছিল নিজে কিছু করব। এরপর....  </p>
                                <button className='blog-btn'>More Details <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                        <div class="card card-block">
                                <img src="https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="Photo of sunset" className=''/>
                                <a class="card-title mt-3 mb-3">Md. Abur Rahman</a>
                                <p className='occupation'>Freelancer</p>
                                <p class="card-text">আমি ছোট একটি গ্রামে থাকি। যেখানে ভালো নেট কানেশন নাই। ইচ্ছা ছিল নিজে কিছু করব। এরপর....  </p>
                                <button className='blog-btn'>More Details <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                        <div class="card card-block">
                                <img src="https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="Photo of sunset" className=''/>
                                <a class="card-title mt-3 mb-3">Md. Abur Rahman</a>
                                <p className='occupation'>Freelancer</p>
                                <p class="card-text">আমি ছোট একটি গ্রামে থাকি। যেখানে ভালো নেট কানেশন নাই। ইচ্ছা ছিল নিজে কিছু করব। এরপর....  </p>
                                <button className='blog-btn'>More Details <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
                            </div>
                        </div>
                    </div>

                    </div>
        </div>
    );
};

export default Blog;