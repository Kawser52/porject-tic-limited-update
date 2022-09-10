import React from 'react';

import './Gallary.css';

const Gallery = () => {
    const gallaryData = [
        {
            id: 1,
            name: 'Image 1', 
            src: 'https://img.freepik.com/free-photo/female-hand-typing-keyboard-laptop_1150-15742.jpg?w=900&t=st=1662638845~exp=1662639445~hmac=9dd97ddfc2b13b92b2b12b9dfe57fcb69b668197551fd0a48e1100859ce9d28c'
        }  
        ,
        {
            id: 2,
            name: 'Image 2', 
            src: 'https://img.freepik.com/free-photo/smart-microchip-background-motherboard-closeup-technology_53876-104234.jpg?w=900&t=st=1662638871~exp=1662639471~hmac=17ef457d2bc38055619265a10c804737581110490912096443c471b51203194a'
        } ,

        {
            id: 3,
            name: 'image 3',
            src: 'https://img.freepik.com/free-photo/smart-microchip-background-motherboard-closeup-technology-remix_53876-104233.jpg?w=900&t=st=1662638898~exp=1662639498~hmac=c90a0a712c882acdf67817535da38d8a1f9065cc4fc875f0bac198458551ba5c'
        },

        {
            id:4,
            name: 'image 4',
            src: 'https://img.freepik.com/free-photo/central-processor-chip-circuit-board-technology-concept_1387-39.jpg?w=360&t=st=1662639005~exp=1662639605~hmac=dd245166e53f1d25e0b8aff548d7c3bf1ff9bb8c024c7d533ee402b7e02eb41a'
        }

    ]
    return (
        <>
          <div className="gallary">
            <div className="container">
                <div className="row">
                    <div className="gallary">                    
                    {gallaryData.map((counter) => (
                        <div className="st">
                            <img src={counter.src} alt="" className='img-fluid'/>
                        </div>
                     ))} 
                   
                    </div>
                </div>
            </div>
          </div>
            
        </>
    );
};

export default Gallery;