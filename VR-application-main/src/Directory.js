
import React from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie';
import Restaurant from './Restaurant';
import Grocery from './Grocery';
import './Directory.css';

const Directory = () => (
  <div id="directory" className="container">
    <h2>Shop Directory</h2>
    <div className="directory">
      <Link to="/movie" className="shop-link">
        <Movie />
      </Link>
      <a href="https://alifeasaparna.itch.io/shopping-mall-vr" className="shop-link" target="_blank" rel="noopener noreferrer">
        <Grocery />
      </a>
      <Link to="/restaurant" className="shop-link">
        <Restaurant />
      </Link>
    </div>
  </div>
);

export default Directory;

