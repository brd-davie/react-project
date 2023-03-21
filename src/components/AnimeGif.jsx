import React from 'react'
import Gif from './Gifs/47tj.gif'

const AnimeGif = () => {
  return (
    <div className='flex items-end'>
      <img src={Gif} alt="Anime Gif" className='w-20 md:w-40' />
    </div>
  )
}

export default AnimeGif