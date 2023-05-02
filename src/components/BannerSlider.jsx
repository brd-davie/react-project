import React, { useState, useEffect } from "react";
import aotBanner from "./Icons/aot.jpg";
import aotBanner2 from "./Icons/aot_banner.jpg";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      url: aotBanner,
      title: "Shingeki no Kyojin: The Final Season - Kanketsu-hen",
      id: 51535,
      description:
        "The season follows Eren and his fellow soldiers from the Survey Corps who are still fighting for their survival against the terrifying Titans. However, threats arise not only from the Titans beyond the walls, but from the humans within them as well.",
    },
    {
      url: aotBanner2,
      title: "Shingeki no Kyojin: The Final Season - Kanketsu-hen",
      id: 51535,
      description:
        "The season follows Eren and his fellow soldiers from the Survey Corps who are still fighting for their survival against the terrifying Titans. However, threats arise not only from the Titans beyond the walls, but from the humans within them as well.",
    },
  ];

  const handleNavigationClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-full overflow-hidden lg:py-10">
      <div className="relative h-[400px] md:h-[600px] lg:max-w-[1250px] lg:pb-[20px] mx-auto lg:rounded-xl lg:overflow-hidden glass flex items-center justify-center mt-[80px] md:mt-[80px]">
        {images &&
          images.map((image, index) => (
            <img key={index} src={image.url} alt={image.title} className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-[2500ms] ease-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} />
          ))}
        <div className="absolute z-10 bottom-[10px] lg:bottom-[4rem] flex gap-2 w-screen justify-center lg:justify-end lg:right-10">
          <div className="flex justify-center gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleNavigationClick(index)}
                className={
                  currentSlide === index
                    ? "active bg-neutral h-[7px] w-[70px]"
                    : "bg-primary h-[7px] w-[30px] bg-white"
                }
              ></button>
            ))}
          </div>
        </div>
        <div className="absolute bottom-[3rem] lg:bottom-[2rem] lg:w-[47rem] left-5 md:left-[2rem] text-left">
          <h2 className="text-xl lg:text-4xl text-white py-4">
            <strong>{images[currentSlide].title}</strong>
          </h2>
          <p className="text-[16px] md:text-lg text-white opacity-[.6] leading-2 mr-4">
            {images[currentSlide].description}
          </p>
          <Link
            to={`/anime/trending-anime/${images[currentSlide].id}/anime-details`}
            className="btn btn-sm md:btn-md bg-red-600 hover:bg-red-500 border-none lg:w-[100px] mt-4"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
