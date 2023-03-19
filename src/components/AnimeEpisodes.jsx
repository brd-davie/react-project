import React, { useState, useEffect } from 'react'
import { getAnimeVideos } from '../anime'
import { Link } from 'react-router-dom'

const AnimeEpisodes = ({ id }) => {

  const [video, setVideo] = useState([])
  const getAnimeVideos = async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/videos/episodes`)
      .then(res => res.json());
    console.log(response.data);
    setVideo(response.data);
  };
  useEffect(() => {
    getAnimeVideos(id)
  }, [id])
  return (
    <div className='flex flex-col-reverse gap-3 justify-end mt-4'>
      {video.map((anime, index) => (
        <div key={index} className=''>
          <img src={anime.images.jpg.image_url} alt="" />
          <Link to={anime.url} className='hover:underline text-accent'>
            <h2 className='text-accent'><span>{anime.mal_id}. </span>{anime.title}</h2>
          </Link>
        </div>
      ))}
      <h1 className='text-accent text-2xl'><strong>Episodes</strong></h1>
    </div>
  )
}

export default AnimeEpisodes