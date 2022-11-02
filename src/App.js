/** @format */

import Navbar from './Components/Navbar/Home_Navbar.js';
import Home from './Components/Home/Home.js';
import Footer from './Components/Footer/Footer.js';
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    let Button = document.querySelector('.default-btn');
    const updateDisplay = (e) => {
      const relY = e.pageY - e.target.offsetTop;
      const relX = e.pageX - e.target.offsetLeft;
      console.log(relX, relY);
      Button.querySelector('span').style.top = `${relY}px`;
      Button.querySelector('span').style.left = `${relX}px`;
    };
    Button.addEventListener('mouseenter', updateDisplay, false);
    Button.addEventListener('mouseleave', updateDisplay, false);
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
