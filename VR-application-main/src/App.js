// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Directory from './Directory';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';
import MovieWebsite from './MovieWebsite';
import RestaurantWebsite from './RestaurantWebsite'; // Import the RestaurantWebsite component
import GroceryWebsite from './GroceryWebsite';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Hero />
        <About />
        <Routes>
          <Route path="/movie" element={<MovieWebsite />} />
          <Route path="/grocery" element={<GroceryWebsite />} />
          <Route path="/restaurant" element={<RestaurantWebsite />} /> {/* Add this route */}
          <Route path="/" element={<Directory />} />
        </Routes>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;



