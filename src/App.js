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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
