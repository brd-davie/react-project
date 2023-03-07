import React from 'react'
import { getPopDetails } from '../anime'
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function PopAnimeDetails() {
  const anime = useLoaderData();

  return (
    <div id="anime" className="pt-0 md:pt-8">
      <div className="anime-wrapper flex flex-col lg:flex-row">
        <img className="w-full h-96 object-cover lg:max-w-sm lg:h-full" src={anime.animeImg} alt="" />
        <div className="anime-info p-0 md:px-6 md:w-full md:max-w-2xl md:m-0">
          <h2 className=" text-2xl md:text-4xl border-b-2 py-4 font-bold	text-white">{anime.animeTitle}</h2>
          <p className="my-4 text-2xl font-bold	 text-white">{anime.type}</p>
          <div className="flex flex-row gap-4 mt-5">
            <h3 className='text-md text-success'>Genres:</h3>
            {anime.genres.slice(0, 3).map((genres) => (
              <p className='text-success'><strong className='text-white'>{genres}</strong></p>
            ))}
          </div>
          <p className="text-md my-5 text-success"><strong>Status:</strong> {anime.status}</p>
          <p className="text-md my-5 text-success"><strong>Number of Episodes: </strong> {anime.totalEpisodes}</p>
          <p className="text-md text-justify text-white"><strong className='text-success'>Synopsis: </strong> <br />{anime.synopsis}</p>
        </div>
        <div id='custom-anime-list' className="overflow-auto mt-5 md:mt-0">
          <h2 className='text-2xl md:text-3xl text-success my-4'><strong>Episodes List</strong></h2>
          <div className='flex flex-col-reverse gap-4 md:mt-10 w-full'>
            {anime.episodesList.map((ep) => (
              <Link to={ep.episodeUrl} target='_blank' className='text-black text-xs hover:bg-neutral hover:text-white btn-success p-3 md:w-1/2 lg:w-full'><span className='text-md'>{ep.episodeNum}.</span> {ep.episodeId}</Link>
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}

export async function loader({ params }) {
  const anime_movies_details = getPopDetails(params.animeId);
  console.log(anime_movies_details);
  return anime_movies_details;
}