import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = ({blog}) => {
    const {_id, blogTitle, blogDescription, img} = blog;
    return (
            <>
               <div className="col-md-4 col-sm-2 mb-2">
                    <div className="blog-post">
                        <div class="card" style={{width: "22rem"}}>
                            <img src={img} class="card-img-top" alt="..." className='img-fluid' />
                                    <div class="card-body">
                                    <Link to={`/blog/${_id}`} class="card-title">{blogTitle}</Link>
                                        <p class="card-text">{blogDescription.slice(0,120)}...</p>
                                    <button className='blog-btn'><Link to={`blog/${_id}`}>Details</Link> </button>
                             </div>
                        </div>
                    </div> 
                    </div>
            </>
    );
};

export default BlogPost;