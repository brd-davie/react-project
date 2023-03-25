import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Comment from './Icons/comment.png'

const AnimeNews = ({ id }) => {

  const [pictures, setPictures] = useState([]);

  const fetchAnimeImages = async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/pictures`)
      .then(res => res.json())
    console.log(response.data)
    setPictures(response.data);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchAnimeImages(id);
      clearInterval(interval);
    }, 1500)
  }, [id])

  return (
    <div className='p-5 mt-10 lg:mt-20'>
      <h2 className='custom-title_border_left text-white opacity-[.6] text-lg lg:text-4xl pl-3'>Gallery</h2>
      {
        pictures ? (
          <div className="carousel gap-3 mt-5">
            {pictures.map((picture, index) => (
              <div className="carousel-item">
                <img key={index} src={picture.jpg.image_url} className='w-full h-full object-cover' alt="Burger" />
              </div>
            ))
            }
          </div>
        ) : ''
      }
    </div >
  )
}

export default AnimeNews