import React from 'react'
import { Link } from 'react-router-dom'
import playButton from './Icons/playIcon.png'
import Lycoris from './Icons/lycoris.jpg'

const FeatureAnime = () => {

  const url = 50709;

  return (
    <div className='relative max-w-[1250px] mx-auto mt-10'>
      <img src={Lycoris} alt="" className='h-[400px] lg:h-[500px] w-full mx-auto lg:rounded-[20px] object-cover' />
      <div className='absolute top-[80px] left-[20px] lg:top[unset] lg:left-[3rem]   lg:top-[8rem] pr-[20px]'>
        <h1 className='custom-title_border_left text-[22px] md:text-4xl mb-4 text-white pl-3'><strong>Lycoris Recoil</strong></h1>
        <p className='md:text-[18px] md:w-[30rem] font-medium	text-white'>The number of terrorist acts in Japan has never been lower, thanks to the efforts of a syndicate called Direct Attack (DA). The organization raises orphaned girls as killers to carry out assassinations under their "Lycoris" program.  </p>
        <Link to={`/anime/trending-anime/${url}/anime-details`} className='mt-4 w-[fit-content] btn glass text-white'>Watch<span className='ml-3'><img src={playButton} alt="" className='w-[40px]' /></span></Link>
      </div>
    </div>
  )
}

export default FeatureAnime