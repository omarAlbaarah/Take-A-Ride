import './Intro.scss'
import React, { useState } from 'react';

const Intro = () => {

  return (
    <div className="banner" id='intro'>
      <div className="banner-inner">
        <h1>Welcome To <strong>Travel Safe</strong>!</h1>
        <p>Whether you are flying from or into Seattle International Airport,
          Travel Safe Limousine Service will meet your flight and shuttle you to Seattle City in style and comfort.</p>
        <a className="book-btn" href="#contact">Book now</a>
      </div>
    </div>

  );
}
export default Intro;

