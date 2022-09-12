import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import Login from './Backend/Login/Login';
import AboutDetails from './FrontEnd/Pages/About/About Details/AboutDetails';
import ContactUs from './FrontEnd/Pages/ContactUs/ContactUs';
import CourseDetails from './FrontEnd/Pages/CourseDetails.js/CourseDetails';
import DomainHosting from './FrontEnd/Pages/DomainHosting/DomainHosting';
import EventDetails from './FrontEnd/Pages/EventDetails/EventDetails';
import Events from './FrontEnd/Pages/Events/Events';
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
            <Route path='/event' element={<Events/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/login' element={<Login></Login>}/>
            <Route path='/courseDetails' element={<CourseDetails></CourseDetails>}/>
            <Route path='/eventdetails' element={<EventDetails></EventDetails>}/>
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
