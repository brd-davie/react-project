import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Comment from './Icons/comment.png'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Pagination]);

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

  const sliderOptions = {
    loop: true,
    speed: 500,
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <>
      {
        news ? (
          <div className='p-3 mt-4 lg:mt-20 max-w-[1250px] rounded-lg mx-auto'>
            <h2 className='custom-title_border_left pl-3 text-white opacity-[.6] text-2xl mb-2  lg:text-4xl lg:mb-3'>News</h2>
            <Swiper {...sliderOptions} className='w-full h-auto grid grid-cols-2 md:grid-cols-3 gap-3 lg:carousel'>
              {news.map((anime) => (
                <SwiperSlide key={anime.mal_id} id='custom-news' className='card lg:w-[40%] card-side rounded-md bg-slate-800 shadow-2xl md:flex-nowrap shadow-xl lg:carousel-item'>
                  <div className="flex">
                  <figure id='custom-figure' className='w-[40%] rounded-md lg:rounded-[inherit]'>
                    <img src={anime.images.jpg.image_url} alt='Images' className='w-full h-full object-cover' />
                  </figure>
                  <div className='card-body w-[60%] px-2 md:px-[16x] p-2'>
                    <h2 className='card-title text-[10px] leading-[12px] text-white opacity-[.9] lg:text-xl'>{anime.title}</h2>
                    <p className='text-white text-[8px] opacity-[.6] lg:text-lg leading-[14px]'>{anime.excerpt}</p>
                    <div className='font-medium text-white opacity-[.6] text-[12px]'>
                      By: <Link to={anime.author_url} className='hover:underline underline'>
                        {anime.author_username}
                      </Link>
                    </div>

                    <div className='card-actions justify-between items-center'>
                      <div className='flex gap-2 items-center text-md text-white opacity-[.6]'>
                        <img src={Comment} alt='Svg' className='w-[20px] md:w-[30px]' />
                        {anime.comments}
                      </div>
                      <Link to={anime.url} className='text-black btn btn-xs glass'>
                        View
                      </Link>
                    </div>
                  </div>
                  </div>
                </SwiperSlide>
              ))} 
            </Swiper>
          </div>
        ) : ''
      }
    </>
  )
}

export default AnimeNews