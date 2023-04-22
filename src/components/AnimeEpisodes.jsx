import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';

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
    slidesToShow: 4,
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
          slidesToShow: 2,
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
    const interval = setInterval(() => {
      getAnimeVideos(id)
      clearInterval(interval);
    }, 1500)
  }, [id])
  return (
    <>
      {
        video ? (
          <div className='custom-border-ep mt-10 flex flex-direction-reverse flex-col gap-3 lg:mt-20'>
            <h1 className='custom-title_border_left text-[22px] md:text-2xl text-white opacity-[.6] md:px-3 pl-3'>Episodes</h1>
            <Slider {...settings}>
              {video.map((anime, index) => (
                <div key={index} className=''>
                  <Link to={anime.url} className='c-ep-card'>
                    {anime.images.jpg.image_url ? (
                      <div className='relative'>
                        <img src={anime.images.jpg.image_url} alt="" className='w-full' />
                        <h1 className='c-ep-title absolute bottom-1 glass px-2 text-[10px] lg:text-lg left-1 text-white opacity-[0.8]'>{anime.mal_id}.{anime.title}</h1>
                      </div>
                    ) : ''}
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