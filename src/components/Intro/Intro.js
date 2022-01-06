import  './Intro.scss'
import React, { useState } from 'react';
// import SliderData from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

 const SliderData = [{
  url: 'assets/cars.png',
  caption: 'Slide 1'
},
{
  url: 'assets/cars2.jpeg',
  caption: 'Slide 2'
}];
 const Intro =  () => {
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
      return null;
    }
    return (
        <section className='slider' id='intro'>
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> 
          {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.url} alt={slide.caption} className='image' />
            )}
          </div>
        );
      })}
        </section>
    );
}
export default Intro;
