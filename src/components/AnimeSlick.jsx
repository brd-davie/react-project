import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const AnimeSlick = ({ endPoint, header, link }) => {
  const [animes, setAnimes] = useState([]);

  const getTrending = async () => {
    try {
      const response = await fetch(`${endPoint}`).then((res) => res.json());
      console.log(response.data);
      setAnimes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const slider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <div
      id="custom-border-top"
      className="max-w-[1250px] mt-3 mx-auto rounded-lg lg:mt-10 px-7 lg:px-0 pb-10 lg:pr-[20px] lg:pb-[20px]"
    >
      <div className="flex justify-between slider-bb mb-5">
        <h2 className="text-2xl lg:text-3xl text-white opacity-[.6]  pb-3  px-3">
          {header}
        </h2>
        <Link
          to={link}
          className="hover:underline hover:opacity-[unset] text-white opacity-[.6] underline text-lg mr-5 "
        >
          See More +
        </Link>
      </div>
      <Slider {...slider}>
        {animes
          ? animes.map((anime, index) => (
              <Link
                to={`/anime/trending-anime/${anime.mal_id}/anime-details`}
                key={anime.mal_id}
                className="anime-list-card h-full w-full focus-none focus-visible:outline-none"
              >
                <img
                  src={anime.images.jpg.image_url}
                  alt=""
                  className="h-[300px] w-full rounded-xl object-cover"
                />
                {anime.score ? (
                  <div className="bg-red-600 absolute text-white bottom-5 px-3 flex items-center">
                    {anime.score}
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-black ml-2"
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {/* <div className="badge-success absolute ml-[15px] bottom-3 px-3 flex items-center">{anime.scored_by}
                <div className='rating rating-sm'>
                  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                </div>
              </div> */}
              </Link>
            ))
          : ""}
      </Slider>
    </div>
  );
};

export default AnimeSlick;
