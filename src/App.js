import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import './App.scss'
import AtractiiTuristice from "./Pages/AtractiiTuristice";
import Cazare from "./Pages/Cazare";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="atractii-turistice"  element={<AtractiiTuristice/>} />
            <Route path="cazare"  element={<Cazare/>} />
            <Route path="Contact"  element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
  
    </>
  );
}

export default App;
