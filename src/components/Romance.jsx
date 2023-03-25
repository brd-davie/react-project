import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Romance = () => {
  const [romance, setRomance] = useState([]);

  const getTrending = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?genres=22`)
      .then(res => res.json());
    setRomance(response.data);
  };

  useEffect(() => {
    getTrending();
  }, []);

  const slider = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div className='max-w-[1250px] mx-auto mt-10'>
      <div className='flex justify-between'>
        <h2 className='text-3xl text-white mb-3'>Romance</h2>
        <Link to='/anime/trending-anime' className='hover:underline text-white mr-7'>See More +</Link>
      </div>
      <Slider {...slider}>
        {romance.map((trending) => (
          <Link to={`/anime/trending-anime/${trending.mal_id}/anime-details`} key={trending.mal_id} className='h-full w-full'>
            <img src={trending.images.jpg.image_url} alt='' className='h-[300px] rounded-xl w-[230px]' />
            <div className="badge-secondary absolute bottom-10 px-3 flex items-center">{trending.score}
              <div className='rating rating-sm'>
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 ml-2" />
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Romance;
