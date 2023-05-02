import React from "react";
import { useLoaderData } from "react-router-dom";
import { jikanAnimeDetails } from "../anime";
import { Link } from "react-router-dom";
import AnimeEpisodes from "../components/AnimeEpisodes";
import AnimeNews from "../components/AnimeNews";
import AnimePictures from "../components/AnimePictures";
import AnimeRecommendations from "../components/AnimeRecommedations";
import AnimeEpVideos from "../components/AnimeEpVideos";
// import AnimeReviews from "../components/AnimeReviews";

const AnimeDetails = () => {
  const anime = useLoaderData();

  return (
    <div>
      <div id="anime" className="pt-0">
        <div className=" md:flex md:flex-col lg:flex-row lg:p-5">
          <div className="w-full h-96 object-cover lg:w-w-4/12	 lg:max-w-xs lg:h-full">
            <div className="w-full relative lg:pr-2">
              <img
                className="w-full h-96 object-cover mb-4 lg:h-full rounded-lg"
                src={anime.images.jpg.large_image_url}
                alt=""
              />
              {/* <div className="rating rating-sm gap-1 items-center absolute left-[10px] glass bottom-[10px] px-4">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-600"
                />
                <span className="text-white text-lg ml-3">
                  {anime.favorites ? anime.favorites : "N/A"}
                </span>
              </div> */}
            </div>
          </div>
          <div className="text-md text-justify leading-12 w-full md:px-4">
           <div className="lg:flex lg:justify-between">
            <div className="w-[60%]">
              <h2 className="text-white font-bold mt-4 lg:mt-0 text-4xl md:text-5xl pb-3 pb-0 text-left">
                {anime.title ? anime.title : "N/A"}
              </h2>
              <h4 className="text-white font-bold opacity-[.6] mt-4 lg:mt-0 text-2xl md:text-3xl pb-3 pb-0">
              {anime.title_japanese ? anime.title_japanese : "N/A"}
              </h4>
            </div>
            <div className="w-30%">
              <div className="rating rating-[36px]">
                <input type="radio" name="rating-9" className="mask mask-star-2 bg-[#E79F10]" />
                <input type="radio" name="rating-9" className="mask mask-star-2 bg-[#E79F10]" />
                <input type="radio" name="rating-9" className="mask mask-star-2 bg-[#E79F10]" />
                <input type="radio" name="rating-9" className="mask mask-star-2 bg-[#E79F10]" checked />
                <input type="radio" name="rating-9" className="mask mask-star-2 bg-[#E79F10]" />
              </div>
                <span className="text-white text-2xl ml-3">
                  {anime.score ? anime.score : "N/A"}
                  &nbsp;Votes
                </span>
            </div>
           </div>
            
            <div className="lg:flex lg:flex-col-reverse">
              <ul className="lg:mt-5 lg:grid lg:grid-cols-2 lg:w-[70%]">
                <li className="text-md font-bold text-white pb-1 ">
                  <strong className="opacity-[.6] mr-3">Rank:</strong>
                  {anime.rank ? anime.rank : "N/A"}
                </li>
                <li className="text-md font-bold text-white pb-1">
                  <strong className="opacity-[.6] mr-3">Aired:</strong>
                  {anime.aired.string ? anime.aired.string : "N/A"}
                </li>
                <li className="text-md font-bold text-white pb-1">
                  <strong className="opacity-[.6] mr-3">Season:</strong>
                  {anime.season ? anime.season : "N/A"}
                </li>
                <li className="text-md font-bold text-white pb-1 flex">
                  <strong className="opacity-[.6] mr-3">Genres:</strong>
                  <span className="lg:flex gap-3">
                    {anime.genres.slice(0,3).map((genre, index) => (
                      <p key={index} className="text-white px-2 w-max">
                        {genre.name ? genre.name : "N/A"}
                      </p>
                    ))}
                  </span>
                </li>
                {/* <li className="text-md font-bold text-white pb-1">
                  <strong className="opacity-[.6] mr-3">Themes:</strong>
                  {anime.themes.map((theme, index) => (
                    <p key={index} className="text-white">
                      {theme.name ? theme.name : "N/A"}
                    </p>
                  ))}
                </li> */}
                <li className="text-md font-bold text-white pb-1">
                  <strong className="opacity-[.6] mr-3">Source:</strong>
                  {anime.source ? anime.source : "N/A"}
                </li>
                <li className="text-md font-bold text-white pb-1 flex">
                  <strong className="opacity-[.6] mr-3">Studio:</strong>
                  {anime.studios.map((studio, index) => (
                    <p key={index} className="text-white">
                      {studio.name ? studio.name : "N/A"}
                    </p>
                  ))}
                </li>
                <li className="text-md font-bold text-white pb-1">
                  <strong className="opacity-[.6] mr-3">Status:</strong>
                  {anime.status ? anime.status : "N/A"}
                </li>
                <li className="text-md font-bold text-white pb-1">
                  <strong className="opacity-[.6] mr-3">Number of Episodes:</strong>
                  {anime.episodes ? anime.episodes : "N/A"}
                </li>
                <li className="text-md font-bold text-white pb-1">
                  <strong className="opacity-[.6] mr-3">Duration:</strong>
                  {anime.duration ? anime.duration : "N/A"}
                </li>
                <li className="text-md font-bold text-white pb-1 flex">
                  <strong className="opacity-[.6] mr-3">Watch:</strong>
                  <span className="lg:flex gap-3">
                  {anime.streaming.slice(0, 3).map((stream, index) => (
                      <li key={index} className="flex">
                        <Link
                          to={stream.url}
                          className="text-white text-md hover:text-success hover:underline"
                        >
                          {stream.name ? stream.name : "N/A"}
                        </Link>
                      </li>
                    ))}
                  </span>
                </li>
              </ul>
              <div className="anime-info-bb">
                <p className="text-white opacity-[.6] mt-3 text-left">{anime.synopsis}</p>
              </div>
            </div>
          </div>
        </div>
        <AnimeEpisodes id={anime.mal_id} />
        <div className="w-full">
          <AnimeRecommendations id={anime.mal_id} />
        </div>
        <AnimeEpVideos id={anime.mal_id} />
        {/* <AnimeReviews id={anime.mal_id} /> */}
        <AnimeNews id={anime.mal_id} />
        <AnimePictures id={anime.mal_id} />
      </div>
    </div>
  );
};

export default AnimeDetails;

export async function loader({ params }) {
  const anime_details = jikanAnimeDetails(params.mal_id);
  console.log(anime_details);
  return anime_details;
}
