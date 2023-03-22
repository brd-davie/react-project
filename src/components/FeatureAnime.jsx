import React from 'react'
import { Link } from 'react-router-dom'
import yourName from './Icons/yourname.png'
import playButton from './Icons/playIcon.png'

const FeatureAnime = () => {

  const url = 32281;

  return (
    <div className='relative max-w-[1250px] mx-auto mt-10'>
      <img src={yourName} alt="" className='h-[400px] w-full lg:rounded-[20px] object-cover' />
      <div className='absolute top-[30px] left-[20px] lg:top[unset] lg:left-[unset] lg:right-[5rem] lg:top-[3rem] pr-[20px]'>
        <h1 className='text-[22px] md:text-4xl text-white mb-4'>Your Name</h1>
        <p className='text-white md:text-[18px] md:w-[30rem]'>Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.</p>
      </div>
      <Link to={`/anime/trending-anime/${url}/anime-details`} className='absolute bottom-[2rem] btn btn-primary right-[3rem] text-white'>Watch<span className='ml-3'><img src={playButton} alt="" className='w-[40px]' /></span></Link>
    </div>
  )
}

export default FeatureAnime