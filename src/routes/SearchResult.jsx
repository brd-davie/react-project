import React from 'react'
import { Link } from 'react-router-dom'

const SearchResult = ({ animeList }) => {
  return (
    <>
      {
        animeList ? (
          animeList.map((anime) => {
            return (
              <Link to={`${anime.url}`} className="w-full h-full" target='_blank' >
                <div key={anime.mal_id} className="card h-full bg-neutral shadow-xl">
                  <figure className="h-full"><img className="w-full h-full object-cover" src={anime.images.jpg.image_url} alt={anime.animeTitle} /></figure>
                  <div className="card-body pt-2 px-2 md:py-4 flex-col items-start justify-between whitespace-nowrap text-ellipsis overflow-hidden md:justify-end">
                    <h4 className="card-title text-xs text-white">
                      {anime.title}
                    </h4>
                    <div className="badge text-xs badge-success">Rating: {anime.score}</div>
                    <div className="badge text-xs badge-success">Rank: {anime.rank}</div>
                  </div>
                </div>
              </Link>
            )
          })
        ) : ""
      }
    </>
  )
}

export default SearchResult