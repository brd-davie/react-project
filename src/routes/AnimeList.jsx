import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getTopAnime } from '../anime'

const AnimeList = () => {
  const anime_list = useLoaderData();
  return (
    <div>
      test
      <div className="anime-movies-con grid grid-cols-2 sm:grid-cols-3 flex-wrap gap-5 py-5 px-3 md:grid-cols-4 lg:grid-cols-5 overflow-auto bg-transparent mt-16 md:mt-0">
        <h1>{anime_list.animeTitle}</h1>
        <img src={anime_list.animeImg} alt="" />
      </div>
    </div>
  )
}

export default AnimeList

export async function loader() {
  const anime_list = getTopAnime();
  return anime_list;
}