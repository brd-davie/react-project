import React from 'react'
import { getAnimeMoviesDetails } from '../anime'
import { useLoaderData } from 'react-router-dom';

export default function AnimeMoviesDetails() {
  const anime = useLoaderData();

  return (
    <div id="anime" className="p-0 py-5 md:pt-8">
      <div className="anime-wrapper flex flex-col md:flex-row">
        <img className="w-full h-96 object-cover md:h-fit md:max-w-sm md:w-2/5" src={anime.animeImg} alt="" />
        <div className="anime-info mt-5 p-0 md:px-6 md:w-full md:m-0">
          <h2 className="text-4xl border-b-2 pb-4 font-bold	 text-white">{anime.animeTitle}</h2>
          <p className="my-4 text-2xl font-bold	 text-white">{anime.type}</p>
          <p className="text-md my-5 text-success"><strong>Status:</strong> {anime.status}</p>
          <p className="text-md my-5 text-success"><strong>Number of Episodes: </strong> {anime.totalEpisodes}</p>
          <p className="text-md text-justify text-white"><strong className='text-success'>Synopsis: </strong> <br />{anime.synopsis}</p>
        </div>
      </div>
    </div >
  )
}

export async function loader({ params }) {
  const anime_movies_details = getAnimeMoviesDetails(params.animeId);
  console.log(anime_movies_details);
  return anime_movies_details;
}