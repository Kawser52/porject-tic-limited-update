import React from 'react';
import './Projects.css';

const Projects = () => {
    const projectsData = [
        {
            id:1, 
            title: 'eShoper',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquid!',
            img: 'https://img.freepik.com/free-psd/website-design-your-business_24972-394.jpg?w=1060&t=st=1662959154~exp=1662959754~hmac=76f715ac6acf6f7e03462295f6d0e1a90645aed6e2ad6af86d6888892b51b81e',
            url : 'https://ticlimited.com.bd/'
        },
        {
            id: 2,
            title: 'fiviral',
            description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            img: 'https://img.freepik.com/free-psd/website-instant-showcase-mockup-isolated_359791-215.jpg',
            url: 'https://www.fiviral.com/'
        },
        {
            id: 3,
            title: 'Hisab Nai 1',
            description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            img: 'https://img.freepik.com/premium-psd/laptop-screen-with-website-presentation-mockup-isolated_359791-180.jpg',
            url: 'https://ticlimited.com.bd/'
        },

        {
            id: 4,
            title: 'Hisab Nai 2',
            description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            img: '',
            url: 'https://ticlimited.com.bd/'
        },
        {
            id:5,
            title:'Hisab Nai 3',
            description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.n',
            img:'',
            url: 'https://ticlimited.com.bd/'
        },
        {
            id:6,
            title:'Hisab Nai 4',
            description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.n',
            img:'',
            url: 'https://ticlimited.com.bd/'
        }
    ]
    return (
        <div>
             <main>
                <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">Our Porjects</h1>
                    </div>
                </div>
                </section>

                <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
                        projectsData.map((project)=>(
                            <div class="col">
                            <div class="card shadow-sm">
                             <img src={project.img} alt="" className='img-fluid' />
                            <div class="card-body">
                                <a href="" className='text-decoration-none project-title'>{project.title}</a>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn buttons projects-btn"><a href={project.url} target='_blank' className='text-center' rel="noreferrer">VISIT</a></button>
                                </div>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                        ))}
                 
                    {/* <div class="col">
                        <div class="card shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                
                            </div>
                            
                            </div>
                        </div>
                        </div>
                    </div> */}
                    </div>
                </div>
                </div>

            </main>
        </div>
    );
};

export default Projects;