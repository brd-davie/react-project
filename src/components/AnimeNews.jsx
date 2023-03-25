import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Comment from './Icons/comment.png'

const AnimeNews = ({ id }) => {

  const [news, setNews] = useState([]);

  const fetchAnimeNews = async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/news`)
      .then(res => res.json())
    console.log(response.data)
    setNews(response.data);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchAnimeNews(id);
      clearInterval(interval);
    }, 1500)
  }, [id])

  return (
    <div className='p-3 mt-4 lg:mt-20 max-w-[1250px] mx-auto'>
      <h2 className='custom-title_border_left pl-3 text-white opacity-[.6] text-2xl mb-2  lg:text-3xl lg:mb-3'>News</h2>
      {
        news ? (
          <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-3'>
            {news.map((anime, index) => (
              <div key={index} id='custom-news' className="card card-side rounded-md glass shadow-2xl md:flex-nowrap shadow-xl">
                <figure id='custom-figure' className='w-[40%] max-h-[300px] lg:max-h-[unset] rounded-md lg:rounded-[inherit]'><img src={anime.images.jpg.image_url} alt="Images" className='w-full h-full object-cover' /></figure>
                <div className="card-body w-[60%] px-2 md:px-[20px] p-2">
                  <h2 className="card-title text-[10px] leading-[12px] text-white opacity-[.9]">{anime.title}</h2>
                  <p className='text-white text-xs opacity-[.6]'>{anime.excerpt}</p>
                  <div className='font-medium text-white opacity-[.6] text-[12px]'>By: <Link to={anime.author_url} className='hover:underline underline'>{anime.author_username}</Link></div>

                  <div className="card-actions justify-between items-center">
                    <div className='flex gap-2 items-center text-md text-white opacity-[.6]'><img src={Comment} alt='Svg' className='w-[20px] md:w-[30px]' />{anime.comments}</div>
                    <Link to={anime.url} className="text-black btn btn-xs glass">View</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : ''
      }
    </div>
  )
}

export default AnimeNews