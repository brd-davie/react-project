import React from 'react'
import { Link } from 'react-router-dom'

const SearchResult = ({ animeList }) => {
  return (
    <>
      {animeList ? (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3 md:pb-10">
            {animeList.map((anime) => (
              <div key={anime.mal_id} className="">
                <div className="card h-full bg-neutral shadow-xl">
                  <figure className="h-full"><img className="w-full h-full object-cover" src={anime.images.jpg.image_url} alt={anime.animeTitle} /></figure>
                  <div className="card-body px-3 pt-3 md:py-2 flex-col items-start  text-left justify-between  md:justify-end">
                    <h4 className="card-title text-xs text-white">{anime.title.slice(0, 20)}</h4>
                    <div className="flex items-center justify-between w-full">
                      <p className="text-error text-xs"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        className="inline-block w-5 h-5 stroke-error mr-2">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                        </path>
                      </svg>
                        {anime.scored_by}M
                      </p>
                      <div>
                        <div className="rating rating-sm text-sm flex items-center">
                          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 mr-2" />
                          <span className="text-xs text-success">{anime.score}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to={`${anime.mal_id}/anime-details`} className='btn btn-xs btn-accent'>View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : ''
      }
    </>
  )
}

export default SearchResult