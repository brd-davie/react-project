import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getAnimeMovies } from '../anime';

const AnimeMovies = () => {
  const anime_movies = useLoaderData();
  return (
    <div className="anime-movies-con grid grid-cols-2 sm:grid-cols-3 flex-wrap gap-5 py-5 px-3 md:grid-cols-4 lg:grid-cols-5 overflow-auto bg-transparent mt-16 md:mt-0">
      {anime_movies.map((anime) => (
        <Link to={`${anime.animeId}/details`} className="w-full">
          <div key={anime.animeId} className="card w-full h-full bg-primary shadow-xl p-2">
            <figure className="h-full"><img className="w-full h-full object-cover" src={anime.animeImg} alt={anime.animeTitle} /></figure>
            <div className="card-body p-0 lex-col items-start justify-between whitespace-nowrap text-ellipsis overflow-hidden md:mr-4 md:justify-end">
              <h4 className="card-title text-xs mt-3 text-white">
                {anime.animeTitle}
              </h4>
              <div className="badge text-xs badge-secondary">Release Date: {anime.releasedDate}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AnimeMovies

export async function loader() {
  const anime_movies = getAnimeMovies();

  return anime_movies;
}