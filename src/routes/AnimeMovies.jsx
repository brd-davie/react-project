import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getAnimeMovies } from '../anime';

const AnimeMovies = () => {
  const anime_movies = useLoaderData();
  return (
    <>
      <h2 className="text-md md:text-2xl text-white md:px-3">Anime Movies</h2>
      <div className="anime-movies-con grid grid-cols-3 sm:grid-cols-3 flex-wrap gap-2 py-5 md:grid-cols-5 lg:grid-cols-7 overflow-auto bg-transparent md:mt-0">
        {anime_movies.map((anime) => (
          <Link to={`${anime.animeId}/details`} className="w-full h-full">
            <div key={anime.animeId} className="card w-full h-full bg-neutral shadow-xl">
              <figure className="h-full"><img className="w-full h-full object-cover" src={anime.animeImg} alt={anime.animeTitle} /></figure>
              <div className="card-body p-3 lex-col items-start justify-between whitespace-nowrap text-ellipsis overflow-hidden md:mr-4 md:justify-end">
                <h4 className="card-title text-xs mt-3 text-white">
                  {anime.animeTitle}
                </h4>
                <div className="badge text-xs badge-success">Status: {anime.animeStatus}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default AnimeMovies

export async function loader() {
  const anime_movies = getAnimeMovies();

  return anime_movies;
}