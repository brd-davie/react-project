import React from 'react';
import btt from './Icons/backToTop.png'

const BackToTop = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button onClick={handleClick} className='custom-btt-btn'>
      <img src={btt} alt="Back to Top" className='btn object-cover p-0 btn-primary rounded-full w-[3rem] h-[3rem]' />
    </button>
  );
};

export default BackToTop;
