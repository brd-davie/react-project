import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const AnimeGenre = () => {

  const [genres, setGenre] = useState([]);
  const [genreList, setGenreList] = useState([]);


  const Genre = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/genres/anime`)
      .then(res => res.json())
    console.log(response.data)
    setGenre(response.data)
  };

  const handleClick = async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?genres=${id}`)
      .then(response => response.json())
    console.log(response.data)
    setGenreList(response.data)
  };

  useEffect(() => {
    Genre();
  }, [])

  return (
    <div>
      <ul className='bg-black rounded-lg overflow-hidden'>
        <li tabIndex={0} id='custom-genre' className=''>
          <Link className='genre-btn text-white text-2xl bg-black flex justify-between items-center p-2'>
            Genres
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
          </Link>
          <ul id='custom-genre-list' className="z-10 menu menu-compact dropdown-content pb-3 px-2 bg-black text-xs md:pr-7 md:pl-3 md:pt-2 lg:w-[1280px] grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 md:p-10">
            {genres.map((genre, index) => (
              <li key={index}><Link onClick={() => handleClick(genre.mal_id)} className='text-white w-auto block text-xs md:text-md hover:text-accent hover:underline p-1 bg-black' >{genre.name}</Link></li>
            ))}
          </ul>
        </li>
      </ul>
      <h2>{genres.title}</h2>
      <div className="custom-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 py-5 gap-2 md:px-3 overflow-auto bg-transparent md:mt-0">
        {genreList.map((anime, index) => (
          <div className="w-full h-full" key={index}>
            <div className="card h-full bg-neutral shadow-xl">
              <figure className="h-full"><img className="w-full h-full object-cover" src={anime.images.jpg.image_url} alt={anime.animeTitle} /></figure>
              <div className="card-body pb-2 px-3 pt-3 md:py-2 flex-col items-start  text-left justify-between  md:justify-end">
                <h4 className="card-title text-xs text-white">{anime.title.slice(0, 20)}</h4>
                <div className="flex items-center justify-between w-full">
                  <p className="text-error text-xs"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-error mr-1">
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
              <Link to={`${anime.mal_id}/anime-details`} className="btn btn-xs btn-accent">View Details</Link>
            </div>
          </div>
        ))}
      </div>
      {/* <Pagination handlePageClick={handlePageClick} /> */}
    </div>
  )
}

export default AnimeGenre
