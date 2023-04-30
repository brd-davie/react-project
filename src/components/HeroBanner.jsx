import React from 'react'
import bgImage from './Icons/spirited-away.jpg'

const HeroBanner = () => {
  return (
    <div className='relative w-screen'>
      <img src={bgImage} alt="Hero Banner" className='absolute h-screen object-cover w-full' />
    </div>
  )
}

export default HeroBanner
