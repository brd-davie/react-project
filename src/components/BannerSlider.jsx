import React, { useState, useEffect } from 'react';
import aotBanner from './Icons/aot.jpg'
import onepiece_banner from './Icons/onepiece.jpg'
import demonSlayerBanner from './Icons/demonSlayer.jpeg'
import { Link } from 'react-router-dom';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // const [aot, setAot] = useState([]);
  // const [op, setOp] = useState([]);
  // const [ds, setDs] = useState([]);


  const images = [
    {
      url: aotBanner,
      title: 'Shingeki no Kyojin: The Final Season - Kanketsu-hen',
      id: 51535,
      description: 'The season follows Eren and his fellow soldiers from the Survey Corps who are still fighting for their survival against the terrifying Titans. However, threats arise not only from the Titans beyond the walls, but from the humans within them as well.',
    },
    {
      url: onepiece_banner,
      title: 'One Piece',
      id: 21,
      description: `Yamato has proven to be a masterful warrior, and they aren't letting up even in exhaustion. As for Luffy, he's been taken out by Kaido before, but his perseverance keeps him moving forward. It won't be long before Luffy shows his full power against Kaido`,
    },
    {
      url: demonSlayerBanner,
      title: 'Demon Slayer',
      id: 53322,
      description: `The Hashira ( 柱 はしら , Hashira?, lit. Pillars) are the highest ranking combatants in the Demon Slayer Corps. They are the most powerful warriors among all Demon Slayers, as it is their very existence that literally sustains the entire organization.`
    },
  ];

  // const aotId = images[0].id
  // const opId = images[1].id
  // const dsId = images[2].id

  // const getAot = async (id) => {
  //   const response = await fetch(`https://api.jikan.moe/v4/anime/${aotId}/full`)
  //     .then(res => res.json());
  //   console.log(response.data);
  //   setAot(response.data);
  // };

  // const getOnePiece = async () => {
  //   const response = await fetch(`https://api.jikan.moe/v4/anime/${opId}/full`)
  //     .then(res => res.json());
  //   console.log(response.data);
  //   setOp(response.data);
  // };

  // const getDs = async () => {
  //   const response = await fetch(`https://api.jikan.moe/v4/anime/${dsId}/full`)
  //     .then(res => res.json());
  //   console.log(response.data);
  //   setDs(response.data);
  // };

  const handleNavigationClick = (index) => {
    setCurrentSlide(index);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-full'>
      <div className='relative h-[390px] lg:h-screen lg:pb-[20px]'>
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={image.title} className={`absolute top-0 left-0 h-[400px] lg:h-screen w-full object-cover transition-opacity ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} />
        ))}
        <div className='absolute z-10 right-10 lg:bottom-[7rem] lg:right-[5rem] flex gap-2'>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleNavigationClick(index)}
              className={currentSlide === index ? 'active btn-primary h-[10px] w-[70px]' : 'bg-primary h-[7px] w-[30px] bg-white'}
            >
            </button>
          ))}
        </div>
        <div className='absolute top-[250px] lg:top-[40rem] lg:w-[47rem] left-5 md:left-[2rem] text-left'>
          <h2 className='text-2xl lg:text-5xl text-white py-4'><strong>{images[currentSlide].title}</strong></h2>
          <p className='text-lg text-white'>{images[currentSlide].description}</p>
          <Link to={`/anime/trending-anime/${images[currentSlide].id}/anime-details`} className='btn btn-xs md:btn-md btn-primary mt-4'>View Details</Link>
          <button onClick={toggleModal} className='btn btn-primary ml-2'>Trailer</button>
          {showModal && (
            <div className="modal z-[20]">
              <div className="modal-content">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Rick Astley - Never Gonna Give You Up (Video)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button onClick={toggleModal} className='btn btn-error'>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;