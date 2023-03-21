import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const AnimeSlick = ({ endPoint, header, link }) => {
  const [animes, setAnimes] = useState([]);

  const getTrending = async () => {
    try {
      const response = await fetch(`${endPoint}`)
        .then(res => res.json());
      console.log(response.data);
      setAnimes(response.data);
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };

  const slider = {
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
    getTrending();
  }, []);



  return (
    <div id='custom-border-top' className='max-w-[1250px] mt-10 mx-auto lg:mt-10 px-7 lg:px-0 pb-10 lg:pr-[20px] lg:pb-[20px]'>
      <div className='flex justify-between'>
        <h2 className='text-3xl text-white mb-3 ml-5'>{header}</h2>
        <Link to={link} className='hover:underline hover:text-primary text-white mr-7'>See More +</Link>
      </div>
      <Slider {...slider}>
        {animes.length !== 0 && animes.map((anime) => (
          <Link to={`/anime/trending-anime/${anime.mal_id}/anime-details`} key={anime.mal_id} className='h-full w-full focus-none'>
            <img src={anime.images.jpg.image_url} alt='' className='h-[300px] lg:h-[350px] rounded-xl w-[170px] lg:w-[230px] md:ml-[15px] object-cover' />
            {
              anime.score ? (
                <div className="badge-primary absolute ml-[15px] bottom-10 px-3 flex items-center">{anime.score}
                  <div className='rating rating-sm'>
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 ml-2" />
                  </div>
                </div>
              ) : ''
            }
            {/* <div className="badge-success absolute ml-[15px] bottom-3 px-3 flex items-center">{anime.scored_by}
              <div className='rating rating-sm'>
                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
              </div>
            </div> */}
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default AnimeSlick;
