import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Aboutus from "./Pages/Aboutus";


function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about-us" element={<Aboutus />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
