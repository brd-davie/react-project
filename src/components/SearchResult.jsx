import React from 'react'
import { Link } from 'react-router-dom'

const SearchResult = ({ animeList }) => {
  return (
    <>
      {animeList.map((anime, index) => (
        <Link to={`${anime.animeUrl}`} className="w-full h-full" >
          <div key={index} className="card h-full bg-neutral shadow-xl">
            <figure className="h-full"><img className="w-full h-full object-cover" src={anime.animeImg} alt={anime.animeTitle} /></figure>
            <div className="card-body pt-2 px-2 md:py-4 flex-col items-start text-left justify-between overflow-hidden md:justify-end">
              <h4 className="card-title text-xs text-white md:text-md">
                {anime.animeTitle}
              </h4>
              <div className="badge text-xs badge-success">{anime.status}</div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default SearchResult