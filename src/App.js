import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Header from "./Components/Header";


function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route exact path="" elemenet={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
