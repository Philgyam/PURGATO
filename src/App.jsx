import React, { useEffect } from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Service from './Pages/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      once: false, // Whether animations should only happen once
      duration: 500, // Animation duration
      easing: 'ease', // Easing function
    });
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
