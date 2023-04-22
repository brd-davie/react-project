import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

const AnimeEpVideos = ({ id }) => {
  const [video, setVideo] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);


  const getAnimeVideos = async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/videos`)
      .then(res => res.json());
    console.log(response.data.promo)
    setVideo(response.data.promo);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getAnimeVideos(id);
      clearInterval(interval);
    }, 1500);
  }, [id]);

  const handleVideoClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      videoRef.current.stop();
    }
  };

  return (
    <div className='lg:mt-10'>
      {video ? (
        <div className="lg:flex">
          <div className='custom-border-ep w-full lg:w-10/12 grid lg:grid-cols gap-3 mx-auto lg:pt-4'>
            {video.map((anime, index) => (
              <div key={index} className={index === activeIndex ? 'block' : 'hidden'}>
                {anime.trailer.embed_url ? (
                  <div className='lg:p-5' >
                    <embed ref={videoRef} src={anime.trailer.embed_url} type='' width='100%' className='h-[300px]  md:h-[600px] rounded-lg' />
                  </div>
                ) : (
                  ''
                )}
              </div>
            ))}
          </div>
          {video ? (
            <div className='grid grid-cols-4 w-full mt-5 lg:h-[650px] lg:block lg:overflow-scroll scroll-smooth lg:w-3/12 lg:pr-3' >
              {video.map((anime, index) => (
                <div key={index} onClick={() => handleVideoClick(index)} className='anime-list-card lg:mb-3 cursor-pointer '>
                  <h1 className='text-white opacity-[.6] lg:text-lg underline hidden lg:block'>{anime.title}</h1>
                  <img src={anime.trailer.images.maximum_image_url} alt="" className='w-full rounded-lg' />
                </div>
              ))}
            </div>
          ) : ''
          }
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default AnimeEpVideos;
