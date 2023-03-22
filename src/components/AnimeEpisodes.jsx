import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import TopCharacters from '../routes/TopCharacters';
import AnimeSlick from './AnimeSlick';

const AnimeEpisodes = ({ id }) => {

  const [video, setVideo] = useState([])
  const getAnimeVideos = async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/videos/episodes`)
      .then(res => res.json());
    console.log(response.data);
    setVideo(response.data);
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    getAnimeVideos(id)
  }, [id])
  return (
    <>
      {
        video.length !== 0 ? (
          <div className='custom-border-ep flex flex-col gap-3 max-w-[75rem] mx-auto lg:mt-20'>
            {/* <h1 className='text-accent text-2xl'><strong>Episodes</strong></h1> */}
            <Slider {...settings}>
              {video.map((anime, index) => (
                <div key={index} className=''>
                  <Link to={anime.url} className='hover:underline text-accent'>
                    <img src={anime.images.jpg.image_url} alt="" className='w-full' />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        ) : ''
      }
    </>
  );
}

export default AnimeEpisodes