import React, { useEffect, useState } from 'react';
import BlogPost from '../BlogPost/BlogPost';
import './BlogPosts.css';

const BlogPosts = () => {
     const [blogs, setBlogs] = useState([]);
     useEffect(()=>{
           fetch('http://localhost:8000/blog')
           .then(res=>res.json())
           .then(data=> setBlogs(data));
        }, [])

    return (
        <>
        <div className="main-blog">
            <div className="container">
                <div className="row">
                <div className="our-services-header my-5">
                        <p className=''>Blog</p>
                    </div>

                 {
                    blogs.map(blog=><BlogPost 
                        key={blog._id} 
                        blog = {blog}
                        ></BlogPost>)}
                </div>
           </div>
        </div>
         
        </>
    );
};

export default BlogPosts;