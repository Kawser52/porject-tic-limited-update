import React from 'react';
import './DomainHosting.css';

const DomainHosting = () => {
    return (
        <>
            <section class="pricing mt-5">
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
                        <div class="col-lg-4" data-aos="flip-left" data-aos-duration="1000">
                            <div class="card mb-5 mb-lg-0">
                            <div class="card-body">
                                <div className="service-plan">
                                    <h5 class="card-title cs text-uppercase">Basic Plan</h5>
                                    <h6 class="card-price text-center text-white">$0.99<span class="period">/month</span></h6>
                                </div>
                                <hr/>
                                <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>1 Website</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>1 GB Pure SSD Hosting</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>50 GB Bandwidth</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Life Time Free SSL</li>
                                <li><span class="fa-li"><i class="fas fa-times"></i></span>Free Weekly Backup</li>
                                <li><span class="fa-li"><i class="fas fa-times"></i></span>10 Subdomain</li>
                                <li><span class="fa-li"><i class="fas fa-times"></i></span>5 Email Account</li>
                                <li><span class="fa-li"><i class="fas fa-times"></i></span>5 Database</li>
                                <li><span class="fa-li"><i class="fas fa-times"></i></span>Litespeed Webserver</li>
                                <li><span class="fa-li"><i class="fas fa-times"></i></span>Direct admin Control panel</li>
                                <li><span class="fa-li"><i class="fas fa-times"></i></span>Softaculous One Click Installer</li>
                                </ul>
                                <div class="d-grid">
                                <a href="https://hostnate.com/shared-hosting.php" class="btn bg-dom text-uppercase" target="_blank" rel="noreferrer">Get Started</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4" data-aos="flip-left" data-aos-duration="2000">
                            <div class="card mb-5 mb-lg-0">
                            <div class="card-body">
                                <div className="service-plan">
                                    <h5 class="card-title cs text-uppercase">Reseller Hosting</h5>
                                    <h6 class="card-price text-center text-white">$4.99<span class="period">/month</span></h6>
                                </div>
                                <hr/>
                                <ul class="fa-ul ">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Instant Account Setup</strong></li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>15 GB NVMe SSD Storage</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>250 Bandwith</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>15 DirectAdmin Accounts</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Full Panel Customization</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>1 Core CPU Allocation</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>
                                <li><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited Free SSL</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Inodes</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Databases</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Softaculous (400+ Applications)</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>LiteSpeed Webserver</li>
                                <li><span class="fa-li"><i class="fas fa-times"></i></span>Premium Site Builder</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>No Renewal Price Hide</li>
                                <li><span class="fa-li"><i class="fas fa-times"></i></span>Private Nameservers</li>
                                </ul>
                                <div class="d-grid">
                                <a href="https://hostnate.com/premium.php" class="btn bg-dom text-uppercase" target="_blank" rel="noreferrer">Get Started</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4" data-aos="flip-left" data-aos-duration="3000">
                            <div class="card">
                            <div class="card-body">
                                <div className="service-plan">
                                    <h5 class="card-title cs text-uppercase">Prime 10GB</h5>
                                    <h6 class="card-price text-center text-white">$9.99<span class="period">/month</span></h6>
                                </div>
                                <hr/>
                                <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Websites</strong>
                                </li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>10 GB Pure SSD Hosting</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>1000 GB Bandwidth</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Lifetime Free SSL</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Weekly Backup</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>50</strong> Subdomain</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>50 Email Account</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>25 Database</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Litespeed Webserver</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Direct Admin Controll Panel</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Softaculous One Click Installer</li>
                                </ul>
                                <div class="d-grid">
                                <a href="https://hostnate.com/premium.php" class="btn bg-dom text-uppercase" target="_blank" rel="noreferrer">Get Started</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-3 domain-offer">
                        <ul className='domain-offer-content'>
                            <li class="fast"><strong>.com</strong> $13.19 USD</li>
                            <li><strong>.net</strong> $15.83 USD</li>
                            <li><strong>.org</strong> $16.27 USD</li>
                            <li><strong>.info</strong> $25.40 USD</li>
                            <li><strong>.xyz</strong> $12.75 USD</li>
                            <li class="last"><small>* All Prices Per Year</small></li>
                        </ul>
                    </div>
                </div>
                </section>
        </>
    );
};

export default DomainHosting;
