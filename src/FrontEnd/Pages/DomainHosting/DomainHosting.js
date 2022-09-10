import React from 'react';
import './DomainHosting.css';

const DomainHosting = () => {
    return (
        <>
            <section class="pricing ">
                <div class="container py-5">
                    <div class="row">
                        <div className="our-services-header">
                        <span></span>
                        <p className='mb-2'>Our Domain & Hosting Services</p>
                         </div>
                     <div className="search-bar">
                        <input type="search" name='search'  placeholder='Find Your Perfect Domain Name (Ex. www.ticlimited.com)' />
                        <button className='search-btn'>Submit</button>
                     </div>
                        <div class="col-lg-4">
                            <div class="card mb-5 mb-lg-0">
                            <div class="card-body">
                                <div className="service-plan">
                                    <h5 class="card-title cs text-uppercase">Basic</h5>
                                    <h6 class="card-price text-center text-white">$10<span class="period">/month</span></h6>
                                </div>
                                <hr/>
                                <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                                    Private Projects</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                                    Phone Support</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
                                </li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                                    Reports</li>
                                </ul>
                                <div class="d-grid">
                                <a href="#" class="btn bg-dom text-uppercase">Get Started</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card mb-5 mb-lg-0">
                            <div class="card-body">
                                <div className="service-plan">
                                    <h5 class="card-title cs text-uppercase">Basic</h5>
                                    <h6 class="card-price text-center text-white">$10<span class="period">/month</span></h6>
                                </div>
                                <hr/>
                                <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Users</strong></li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                                    Reports</li>
                                </ul>
                                <div class="d-grid">
                                <a href="#" class="btn bg-dom text-uppercase">Get Started</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card">
                            <div class="card-body">
                                <div className="service-plan">
                                    <h5 class="card-title cs text-uppercase">Basic</h5>
                                    <h6 class="card-price text-center text-white">$10<span class="period">/month</span></h6>
                                </div>
                                <hr/>
                                <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong>
                                </li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free
                                    Subdomains</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
                                </ul>
                                <div class="d-grid">
                                <a href="#" class="btn bg-dom text-uppercase">Get Started</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-3 domain-offer">
                        <ul className='domain-offer-content'>
                            <li class="fast"><strong>.com</strong> 999 tk</li>
                            <li><strong>.net</strong> 1299 tk</li>
                            <li><strong>.org</strong> 1299 tk</li>
                            <li><strong>.info</strong> 1799 tk</li>
                            <li><strong>.xyz</strong> 299 tk</li>
                            <li class="last"><small>* All Prices Per Year</small></li>
                        </ul>
                    </div>
                </div>
                </section>
        </>
    );
};

export default DomainHosting;
