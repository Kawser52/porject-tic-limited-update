import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../img/cropped-TIC-01.png';
import './Navigation.css';


const Navigation = () => {
    return (
        <div className='navigation'>
            <div class="container">
        <nav class="navbar navbar-fixed-top navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><img src={logo} class="img-fluid" width="200" alt=""/></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to='/home' class="nav-link active" aria-current="page" href="#">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to='/about-us' class="nav-link" href="#">About</Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link to = '/course' class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Course <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </Link>
                    <ul class="dropdown-menu">
                      <li><Link to='/courseDetails' class="dropdown-item" href="#">Web Design</Link></li>
                      <li><a class="dropdown-item" href="#">Digital Marketing</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                  <Link to='/domainhosting' class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Domain & Hsoting <FontAwesomeIcon icon={faPlus} className=''></FontAwesomeIcon>
                    </Link>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Web Design</a></li>
                      <li><a class="dropdown-item" href="#">Digital Marketing</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <Link to='/projects' class="nav-link" href="#">Projects</Link>
                  </li>
                  <li class="nav-item">
                    <Link to='/event' class="nav-link" href="#">Event</Link>
                  </li>
                  <li class="nav-item">
                    <Link to='/contact' class="nav-link" href="#">Contact Us</Link>
                  </li>
                </ul>
                <span class="navbar-text d-flex">
                    <button class="buttons">Browse Course</button>
                </span>
              </div>
        </div>
    </nav> 
       </div> 
    </div> 
    );
};

export default Navigation;