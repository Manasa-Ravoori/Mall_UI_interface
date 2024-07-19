import React from 'react';
import './Nav.css';

const Nav = () => {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav>
      <a href="#home" onClick={(e) => handleScroll(e, '#home')}>Home</a>
      <a href="#directory" onClick={(e) => handleScroll(e, '#directory')}>Directory</a>
      <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
    </nav>
  );
};

export default Nav;
