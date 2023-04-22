import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AnimeRecommendations = ({ id }) => {

  const [recommendations, setRecommendations] = useState([]);

  const fetchAnimeRecommendation = async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/recommendations`)
      .then(res => res.json())
    console.log(response.data)
    setRecommendations(response.data);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchAnimeRecommendation(id);
      clearInterval(interval);
    }, 1500)
  }, [id])

  return (
    <div className='p-3 mt-4 lg:mt-20 max-w-[1250px] mx-auto'>
      {
        recommendations ? (
          <div>
            {recommendations ? (
              <h2 className="custom-title_border_left text-[22px] md:text-2xl text-white opacity-[.6] md:px-3 pl-3">You may also like</h2>
            ) : ''}
            <div className="custom-container grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 py-5 gap-1 md:px-3 bg-transparent md:mt-0 lg:carousel">
              {recommendations.map((anime, index) => (
                <Link to={`/anime/recommendations/${anime.entry.mal_id}/anime-details`} className="c-card h-full lg:w-[20%] lg:h-[300px] lg:carousel-item" key={index}>
                  <div className="anime-list-card card h-full shadow-xl rounded-md ">
                    <figure className="c-figure h-full w-full"><img className="h-full object-cover" src={anime.entry.images.jpg.large_image_url} alt={anime.title} /></figure>
                    <div className="c-card-body card-body pb-2 px-3 pt-3 md:py-2 flex-col items-start  text-left justify-between md:justify-end">
                      <h4 className="card-title text-xs text-white">{anime.entry.title.slice(0, 20)}</h4>
                      <div className="flex items-center justify-between w-full">
                        {anime.scored_by ? (
                          <p className="text-error text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-error mr-1">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                            {anime.votes}
                          </p>
                        ) : ''}
                        <div>
                          {anime.score ? (
                            <div className="rating rating-sm text-sm flex items-center">
                              <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 mr-2" />
                              <span className="text-xs text-success">{anime.score}</span>
                            </div>
                          ) : ''
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : ''
      }
    </div>
  )
}

export default AnimeRecommendations