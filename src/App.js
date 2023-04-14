import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Aboutus from "./Pages/Aboutus";

import OurSolutions from './Pages/OurSolutions';
import PrivacyAndLegal from './Pages/PrivacyAndLegal';
import StoryOfGray from './Pages/StoryOfGray';

import Portfolio from "./Pages/Portfolio";
import Career from './Pages/Career';

import { Blog } from './Pages/Blog';
import Partnership from './Pages/Partnership';
import { Contact } from './Pages/Contact';

import Outsource from './Pages/Outsource';
import ElearningOurSolutions from './Pages/ElearningOurSolutions';
import EcommerceOurSolutions from './Pages/EcommerceOurSolutions';
import CustomerRelationshipManagement from './Pages/CustomerRelationshipManagement';
import BookingSystemsOurSolutions from './Pages/BookingSystemsOurSolution';
import HealthCareSystems from './Pages/HealthCareSystems';
import NetworkPlatforms from './Pages/NetworkPlatforms';
import OurServices from './Pages/OurServices';
import PageConsultancy from './Pages/ProjectConsultancy';
import ProjectManagement from './Pages/ProjectManagement';
import ProjectConsultancy from './Pages/ProjectConsultancy';
import DesignAndBranding from './Pages/DesignAndBranding';
import Development from './Pages/Development';
import TestingAndDebugging from './Pages/TestingAndDebugging';
import HostingAndMaintenance from './Pages/HostingAndMaintenance';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about-us" element={<Aboutus />}/>

          <Route exact path="/our-solutions" element={<OurSolutions />}/>
          <Route exact path="/privacy-and-legal" element={<PrivacyAndLegal />}/>
          <Route exact path="/story-of-gray" element={<StoryOfGray />}/>
          <Route exact path="/our-portfolio" element={<Portfolio />} />
          <Route exact path="/career" element={<Career />} />

          <Route exact path="/blogs" element={<Blog />}/>
          <Route exact path="/story-of-gray" element={<StoryOfGray />} />
          <Route exact path="/partnership" element={<Partnership />}/>
          <Route exact path="/contact-us" element={<Contact />} />

          <Route exact path="/outsource" element={<Outsource />} />
          <Route exact path="/elearning-our-solutions" element={<ElearningOurSolutions />} />
          <Route exact path="/ecommerce-our-solutions" element={<EcommerceOurSolutions />} />
          <Route exact path="/customer-relationship-management-our-solutions" element={<CustomerRelationshipManagement />} />
          <Route exact path="/booking-systems-our-solutions" element={<BookingSystemsOurSolutions />} />
          <Route exact path="/health-care-our-solutions" element={<HealthCareSystems />} />
          <Route exact path="/network-section-our-solutions" element={<NetworkPlatforms />} />
          <Route exact path="/our-services" element={<OurServices />} />
          <Route exact path="/project-consultancy-our-services" element={<ProjectConsultancy />} />
          <Route exact path="/project-management-our-services" element={<ProjectManagement />} />
          <Route exact path="/design-and-our-services" element={<DesignAndBranding />} />
          <Route exact path="/development-our-services" element={<Development />} />
          <Route exact path="/testing-and-debugging-our-services" element={<TestingAndDebugging />} />
          <Route exact path="/hosting-and-maintenance-our-services" element={<HostingAndMaintenance />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
