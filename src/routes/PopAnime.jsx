import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination';

const PopAnime = () => {
  const [popAnime, setPopAnime] = useState([]);

  const getPopAnime = async (page) => {
    const response = await fetch(`https://gogoanime.consumet.stream/popular?page=${page}`)
      .then(res => res.json())
    console.log(response)
    return (response.slice(0, 18));
  }

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const changePage = await getPopAnime(currentPage)
    setPopAnime(changePage);
  };

  useEffect(() => {
    let data = { selected: 0 }
    handlePageClick(data);
  }, [])

  return (
    <>
      <h2 className="text-md md:text-2xl text-white md:px-3">Popular</h2>
      <div className="anime-movies-con custom-container grid grid-cols-3 sm:grid-cols-3 flex-wrap gap-2 py-5 md:grid-cols-5 lg:grid-cols-6 overflow-auto bg-transparent md:mt-0">
        {popAnime.map((anime, index) => (
          <Link to={`${anime.animeId}/details`} className="w-full h-full">
            <div key={index} className="card w-full h-full bg-neutral shadow-xl">
              <figure className="h-full"><img className="w-full h-full object-cover" src={anime.animeImg} alt={anime.animeTitle} /></figure>
              <div className="card-body p-3 lex-col items-start text-left justify-between overflow-hidden md:mr-4 md:justify-end">
                <h4 className="card-title text-xs mt-3 text-white">
                  {anime.animeTitle}
                </h4>
                <div className="badge text-xs badge-success">Release Date: {anime.releasedDate}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination handlePageClick={handlePageClick} />
    </>
  )
}

export default PopAnime