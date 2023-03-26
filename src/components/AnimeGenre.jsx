import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import AnimeGif from './AnimeGif';
import Pagination from './Pagination';

const AnimeGenre = () => {

  const [genres, setGenre] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const Genre = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/genres/anime`)
      .then(res => res.json())
    console.log(response.data)
    setIsLoading(false)
    setGenre(response.data)
  };

  const handleClick = async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?genres=${id}`)
      .then(response => response.json())
    console.log(response.data)
    setGenreList(response.data)
  };

  // const handlePageClick = async (data) => {
  //   let currentPage = data.selected + 1;
  //   const changePage = await handleClick(currentPage)
  //   setGenreList(changePage);
  // };

  useEffect(() => {
    Genre();
    handleClick(4)
    // let data = { selected: 0 }
    // handlePageClick(data);
  }, [])

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen"><AnimeGif /></div>
  }

  return (
    <div className='lg:flex'>
      <ul className='opacity-[.7] rounded-lg overflow-hidden lg:w-1/3 h-fit'>
        <li tabIndex={0} id='custom-genre' className=''>
          <Link className='genre-btn text-white text-2xl transparent flex justify-between items-center p-2'>
            Genres
            {/* <span>{genres.name}Title</span> */}
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
          </Link>
          <ul id='custom-genre-list' className="transparent z-10 pb-3 px-2 md:pr-0 md:pl-3 md:pt-2 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-2 md:p-10">
            {genres.map((genre, index) => (
              <li key={index}><Link onClick={() => handleClick(genre.mal_id)} className='text-white block bg-transparent text-[8px] md:text-[10px] hover:text-white hover:glass p-1 bg-black' >{genre.name}</Link></li>
            ))}
          </ul>
        </li>
      </ul>
      <div className="custom-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6  py-5 gap-3 md:px-3 overflow-auto bg-transparent md:mt-0 lg:pt-0">
        {genreList.map((anime, index) => (
          <Link to={`${anime.mal_id}/anime-details`} className="c-card w-full h-full" key={index}>
            <div className="anime-list-card card h-full bg-neutral shadow-xl rounded-md">
              <figure className="c-figure h-full"><img className="w-full h-full object-cover" src={anime.images.jpg.image_url} alt={anime.animeTitle} /></figure>
              <div className="c-card-body card-body pb-2 px-3 pt-3 md:py-2 flex-col items-start  text-left justify-between md:justify-end">
                <h4 className="card-title text-xs text-white">{anime.title.slice(0, 20)}</h4>
                <div className="flex items-center justify-between w-full">
                  {anime.scored_by ? (
                    <p className="text-error text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-error mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
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
      {/* <Pagination handlePageClick={handlePageClick} /> */}
    </div>
  )
}

export default AnimeGenre
