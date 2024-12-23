import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {

  return (
  
    <Router>
    <div>
      <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path= "/user/:userId" element={<user /> } />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
