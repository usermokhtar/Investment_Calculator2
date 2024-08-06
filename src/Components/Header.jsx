import React from 'react';
import img1 from '../assets/investment-calculator-logo.png';
const Header = () => {
  return (
    <header id='header'>
      <img src={img1} alt='img1' />
      <h1>Investment calculator</h1>
    </header>
  );
};

export default Header;
