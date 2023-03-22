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
      trailer: <iframe width="1128" height="635" src="https://www.youtube.com/embed/fRph5rtFiRQ" title="Attack on Titan Season 4 Part 3 - Official Main Trailer | English Sub" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    {
      url: onepiece_banner,
      title: 'One Piece',
      id: 21,
      description: `Yamato has proven to be a masterful warrior, and they aren't letting up even in exhaustion. As for Luffy, he's been taken out by Kaido before, but his perseverance keeps him moving forward. It won't be long before Luffy shows his full power against Kaido`,
      trailer: ''
    },
    {
      url: demonSlayerBanner,
      title: 'Demon Slayer',
      id: 53322,
      description: `The Hashira ( 柱 はしら , Hashira?, lit. Pillars) are the highest ranking combatants in the Demon Slayer Corps. They are the most powerful warriors among all Demon Slayers, as it is their very existence that literally sustains the entire organization.`,
      trailer: ''
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-full'>
      <div className='relative h-[400px] md:h-[600px] lg:h-screen lg:pb-[20px]'>
        {images && images.map((image, index) => (
          <img key={index} src={image.url} alt={image.title} className={`absolute top-0 left-0 h-full lg:h-screen w-full object-cover transition-opacity duration-[2500ms] ease-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} />
        ))}
        <div className='absolute z-10 right-10 bottom-[10px] right-[35%] lg:bottom-[4rem] lg:right-[5rem] flex gap-2'>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleNavigationClick(index)}
              className={currentSlide === index ? 'active btn-primary h-[7px] w-[70px]' : 'bg-primary h-[7px] w-[30px] bg-white'}
            >
            </button>
          ))}
        </div>
        <div className='absolute bottom-[3rem] lg:bottom-[5rem] lg:w-[47rem] left-5 md:left-[5rem] text-left'>
          <h2 className='text-2xl lg:text-5xl text-white py-4'><strong>{images[currentSlide].title}</strong></h2>
          <p className='text-[16px] md:text-lg text-white leading-2 mr-4'>{images[currentSlide].description}</p>
          <Link to={`/anime/trending-anime/${images[currentSlide].id}/anime-details`} className='btn btn-xs md:btn-sm lg:btn-md btn-primary mt-4'>Trailer</Link>
          {/* <label htmlFor="my-modal-4" className="btn btn-neutral ml-2">Trailer</label> */}
        </div>
      </div>
      {/* <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {images[currentSlide].trailer}
        </label>
      </label> */}
    </div>
  );
};

export default BannerSlider;