import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import aerial from './Icons/aerial.jpg'
import autoMata from './Icons/autoMata.jpg'
import rengoku from './Icons/rengoku.jpg'

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      url: aerial,
      title: 'Aerial',
      id: 51535,
      description: '',
    },
    {
      url: autoMata,
      title: '2B',
      id: 21,
      description: ''
    },
    {
      url: rengoku,
      title: 'Rengoku',
      id: 53322,
      description: ''
    },
  ];

  const handleNavigationClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-screen'>
      <div className='relative h-[400px] md:h-[600px] lg:h-screen lg:pb-[20px]'>
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={image.title} className={`absolute top-0 left-0 h-full lg:h-screen w-screen object-cover transition-opacity duration-[2500ms] ease-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} />
        ))}
        <div className='absolute z-10 right-10 bottom-0 right-[35%] lg:bottom-[4rem] lg:right-[5rem] flex gap-2'>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleNavigationClick(index)}
              className={currentSlide === index ? 'active btn-primary h-[7px] w-[70px]' : 'bg-primary h-[7px] w-[30px] bg-white'}
            >
            </button>
          ))}
        </div>
        {/* <div className='absolute bottom-[3rem] lg:bottom-[3rem] lg:w-[47rem] left-5 md:left-[5rem] text-left'>
          <h2 className='text-2xl lg:text-5xl text-white py-4'><strong>{images[currentSlide].title}</strong></h2>
          <p className='text-[16px] md:text-lg text-white leading-2 mr-4'>{images[currentSlide].description}</p>
        </div> */}
      </div>
    </div>
  );
};

export default BannerSlider;