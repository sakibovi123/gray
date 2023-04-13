import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Aboutus from "./Pages/Aboutus";
import Portfolio from "./Pages/Portfolio";
import Career from './Pages/Career';
import { Blog } from './Pages/Blog';
import { StoryOfGray } from './Pages/StoryOfGray';
import Partnership from './Pages/Partnership';


function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about-us" element={<Aboutus />}/>
        <Route exact path="/our-portfolio" element={<Portfolio />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/blogs" element={<Blog />}/>
        <Route exact path="/story-of-gray" element={<StoryOfGray />} />
        <Route exact path="/partnership" element={<Partnership />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
