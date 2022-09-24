import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetails.css';



const BlogDetials = () => {
    const {BlogID} = useParams();
    const [blogDetails, setBlogDetails] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:8000/blog/${BlogID}`)
        .then(res=>res.json())
        .then(data=>setBlogDetails(data))
    },[])

   
    return (
        <div className='single-blog'>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-9 border-right">
                        <div className="blog-content">
                            <div className="blog-images">
                                <img src={blogDetails.img} alt="" className='img-fluid' height="200" />
                            </div>
                            <div className='post-author my-3 d-flez justify-content-between align-items-center'>
                                 {/* <h5 className='text-bold'>{blogDetails.blog_author}</h5> */}
                            </div>
                            <h2 className='text-center'>{blogDetails.blogTitle}</h2>
                            <p className='text-justify'>{blogDetails.blogDescription}</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-3'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetials;