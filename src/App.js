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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
