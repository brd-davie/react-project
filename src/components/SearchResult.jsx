import React from 'react'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

const SearchResult = ({ animeList, handlePageClick }) => {
  return (
    <>
      {animeList ? (
        <div className=''>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 md:pb-10">
            {animeList.slice(0, 24).map((anime, index) => (
              <Link to={`${anime.mal_id}/anime-details`} className="c-card w-full h-full overflow-hidden" key={index}>
                <div className="anime-list-card card h-full bg-neutral shadow-xl rounded-lg">
                  <figure className="c-figure h-full"><img className="w-full h-full object-cover" src={anime.images.jpg.image_url} alt={anime.animeTitle} /></figure>
                  <div className="c-card-body card-body pb-2 px-3 pt-3 md:py-2 flex-col items-start  text-left justify-between  md:justify-end">
                    <h4 className="card-title text-xs text-white">{anime.title.slice(0, 20)}</h4>
                    <div className="flex items-center justify-between w-full">
                      {anime.scored_by ? (
                        <p className="text-error text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-error mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                            </path>
                          </svg>
                          {anime.scored_by}M
                        </p>
                      ) : ''}
                      <div>
                        {anime.score ? (
                          <div className="rating rating-sm text-sm flex items-center">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 mr-2" />
                            <span className="text-xs text-success">{anime.score}%</span>
                          </div>
                        ) : ''
                        }
                      </div>
                    </div>
                  </div>
                  {/* <Link to={`${anime.mal_id}/anime-details`} className="btn btn-xs glass">View Details</Link> */}
                </div>
              </Link>
            ))}
          </div>
          <Pagination handlePageClick={handlePageClick} />
        </div>
      ) : ''
      }
    </>
  )
}

export default SearchResult