import React, { useState, useEffect } from 'react';
import aotBanner from './Icons/aot.jpg'
import demonSlayerBanner from './Icons/demonSlayer.jpeg'
// import video from './video/video2.mp4'
import { Link } from 'react-router-dom';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    // {
    //   url: onepiece_banner,
    //   title: 'One Piece',
    //   id: 21,
    //   description: `Yamato has proven to be a masterful warrior, and they aren't letting up even in exhaustion. As for Luffy, he's been taken out by Kaido before, but his perseverance keeps him moving forward. It won't be long before Luffy shows his full power against Kaido`,
    //   trailer: ''
    // },
    {
      url: demonSlayerBanner,
      title: 'Demon Slayer',
      // video: video,
      id: 53322,
      description: `Japanese manga series written and illustrated by Koyoharu Gotōge, and it is about Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon.`,
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
    <div className='w-full h-full overflow-hidden mt-10'>
      <div className='relative h-[400px] md:h-[600px] lg:max-w-[1250px] lg:pb-[20px] mx-auto rounded-xl overflow-hidden'>
        {images && images.map((image, index) => (
          <img key={index} src={image.url} alt={image.title} className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-[2500ms] ease-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} />
          // <video src={image.video} autoPlay loop muted className='absolute rotate-[-90deg] top-[] right-0 bottom-0 left-0 h-screen w-screen'></video>
        ))}
        <div className='absolute z-10 bottom-[10px] lg:bottom-[4rem] flex gap-2 w-screen justify-center lg:justify-end lg:right-10'>
          <div className="flex justify-center gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleNavigationClick(index)}
                className={currentSlide === index ? 'active bg-neutral h-[7px] w-[70px]' : 'bg-primary h-[7px] w-[30px] bg-white'}
              >
              </button>
            ))}
          </div>
        </div>
        <div className='absolute bottom-[3rem] lg:bottom-[5rem] lg:w-[47rem] left-5 md:left-[5rem] text-left'>
          <h2 className='text-2xl lg:text-5xl text-white py-4'><strong>{images[currentSlide].title}</strong></h2>
          <p className='text-[16px] md:text-lg text-white opacity-[.6] leading-2 mr-4'>{images[currentSlide].description}</p>
          <Link to={`/anime/trending-anime/${images[currentSlide].id}/anime-details`} className='btn btn-sm md:btn-md glass lg:w-[100px] mt-4'>View</Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;