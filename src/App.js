import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import Login from './Backend/Login/Login';
import AboutDetails from './FrontEnd/Pages/About/About Details/AboutDetails';
import AllCourse from './FrontEnd/Pages/AllCourse/AllCourse';
import BlogDetials from './FrontEnd/Pages/BlogPost/BlogDetails/BlogDetials';
import BlogPosts from './FrontEnd/Pages/BlogPosts/BlogPosts';
import ContactUs from './FrontEnd/Pages/ContactUs/ContactUs';
import CourseDetails from './FrontEnd/Pages/CourseDetails.js/CourseDetails';
import CoursePages from './FrontEnd/Pages/CoursePages/CoursePages';
import DomainHosting from './FrontEnd/Pages/DomainHosting/DomainHosting';
import EventDetails from './FrontEnd/Pages/EventDetails/EventDetails';
import EventSingle from './FrontEnd/Pages/EventSingle/EventSingle';
import Home from './FrontEnd/Pages/Home/Home';
import Projects from './FrontEnd/Pages/Projects/Projects';
import Footer from './FrontEnd/Pages/Shared/Footer/Footer';
import Header from './FrontEnd/Pages/Shared/Header/Header';
import Navigation from './FrontEnd/Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header></Header>
        <Navigation></Navigation>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about-us' element={<AboutDetails/>}/>
            <Route path='/domainhosting' element={<DomainHosting/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='event' element={<EventDetails/>}/>
            <Route path = "/event/:eventId" element = {<EventSingle></EventSingle>}/>
            <Route path='/course' element={<AllCourse></AllCourse>}/>
            <Route path = '/course/:courseID' element={<CourseDetails></CourseDetails>}/>
            <Route path='course/web' element={<CoursePages></CoursePages>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/login' element={<Login></Login>}/>
            <Route path='/courseDetails' element={<CourseDetails></CourseDetails>}/>
            {/* <Route path='/eventdetails' element={<EventDetails></EventDetails>}/> */}
            <Route path='/blog' element={<BlogPosts></BlogPosts>}/>
            <Route path='/blog/:BlogID' element={<BlogDetials></BlogDetials>}/>
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
