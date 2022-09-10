import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css';

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

      };
    return (
        <div className='container mt-5'>
                <div className="our-services-header my-5">
                        <span></span>
                        <p className=''>Client & Student Say About Us</p>
                     </div>
                        <Slider {...settings}>
                            <section class="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded" style="
                                    background-image: url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.webp);
                                ">
                                <div class="row d-flex justify-content-center">
                                    <div class="col-md-10">
                                    <div class="card">
                                        <div class="card-body m-3">
                                        <div class="row">
                                            <div class="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                                                class="rounded-circle img-fluid shadow-1" alt="woman avatar" width="200" height="200" />
                                            </div>
                                            <div class="col-lg-8">
                                            <p class="text-muted fw-light mb-4">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
                                                molestiae numquam quas, voluptates omnis nulla ea odio quia similique
                                                corrupti magnam.
                                            </p>
                                            <p class="fw-bold lead mb-2"><strong>Anna Smith</strong></p>
                                            <p class="fw-bold text-muted mb-0">Product manager</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </section>
                            <section class="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded">
                                <div class="row d-flex justify-content-center">
                                    <div class="col-md-10">
                                    <div class="card">
                                        <div class="card-body m-3">
                                        <div class="row">
                                            <div class="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                                                class="rounded-circle img-fluid shadow-1" alt="woman avatar" width="200" height="200" />
                                            </div>
                                            <div class="col-lg-8">
                                            <p class="text-muted fw-light mb-4">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
                                                molestiae numquam quas, voluptates omnis nulla ea odio quia similique
                                                corrupti magnam.
                                            </p>
                                            <p class="fw-bold lead mb-2"><strong>Anna Smith</strong></p>
                                            <p class="fw-bold text-muted mb-0">Product manager</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </section>
                            <section class="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded">
                                <div class="row d-flex justify-content-center">
                                    <div class="col-md-10">
                                    <div class="card">
                                        <div class="card-body m-3">
                                        <div class="row">
                                            <div class="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                                                class="rounded-circle img-fluid shadow-1" alt="woman avatar" width="200" height="200" />
                                            </div>
                                            <div class="col-lg-8">
                                            <p class="text-muted fw-light mb-4">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
                                                molestiae numquam quas, voluptates omnis nulla ea odio quia similique
                                                corrupti magnam.
                                            </p>
                                            <p class="fw-bold lead mb-2"><strong>Anna Smith</strong></p>
                                            <p class="fw-bold text-muted mb-0">Product manager</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </section>
                        </Slider>
        </div>
    );
};

export default Testimonial;
