import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

import img1 from   '../assets/Images/Banner1.png';
import img2 from '../assets/Images/Banner2.png';
import img3 from '../assets/Images/Banner3.png';
import img4 from '../assets/Images/Banner4.png';

const images = [img1, img2, img3, img4];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play feature
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
      <div className="slider-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
      <div className="slider-overlay"></div>
    </div>
  );
};

export default ImageSlider;
