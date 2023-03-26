import React from 'react'
import Lycoris from './Icons/lycoris.jpg'
import { Link } from 'react-router-dom';

const FeatureAnime = () => {

  const id = '50709';

  return (
    <div className='relative max-w-[1250px] mx-auto mt-10'>
      <img src={Lycoris} alt="" className='h-[400px] lg:h-[500px] w-full mx-auto lg:rounded-[20px] object-cover' />
      <div className='absolute top-[80px] left-[20px] lg:top[unset] lg:left-[3rem]   lg:top-[8rem] pr-[20px]'>
        <h1 className='custom-title_border_left text-[22px] md:text-4xl mb-4 text-white pl-3'><strong>Lycoris Recoil</strong></h1>
        <p className='md:text-[18px] md:w-[30rem] font-medium	text-white mb-2'>The number of terrorist acts in Japan has never been lower, thanks to the efforts of a syndicate called Direct Attack (DA). The organization raises orphaned girls as killers to carry out assassinations under their "Lycoris" program.  </p>
        <button className='open-modal-btn btn btn-sm md:btn-md bg-slate-800 mt-3'>Watch Trailer</button>
        <Link to={`/anime/trending-anime/${id}/anime-details`} className='btn btn-sm md:btn-md bg-neutral ml-3'>View</Link>
        <div className='modal-container'>
          <div className='c-modal w-[22rem] justify-center bg-transparent h-[30vh] md:h-[50vh] lg:h-[70vh] sm:w-full max-w-7xl mx-auto'>
            <iframe
              width="100%"
              height="100%"
              src=""
              title="Lycoris Recoil Official Trailer | WATCH NOW ON CRUNCHYROLL"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
            <button className="close-modal-btn flex items-center justify-center h-8 w-8">&times;</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureAnime