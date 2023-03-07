import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';

const TopCharacters = () => {

  const [characterList, setCharacterList] = useState([]);

  const fetchCharacterList = async (currentPage) => {
    console.log('Running');
    const response = await fetch(`https://api.jikan.moe/v4/top/characters?page=${currentPage}`)
      .then(res => res.json());
    console.log(response)
    return (response.data);
  };


  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const changePage = await fetchCharacterList(currentPage)
    setCharacterList(changePage);
  };

  useEffect(() => {
    let data = { selected: 0 }
    handlePageClick(data);
  }, [])

  return (
    <div>
      <h2 className="text-md md:text-2xl text-white md:px-3">Top Characters</h2>
      <div id="anime-character" className="custom-container grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 py-5 gap-2 md:px-2 overflow-auto bg-transparent md:mt-0 w-full">
        {characterList.map((anime) => (
          <Link to={`${anime.url}`} className="w-full h-full">
            <div key={anime.mal_id} className="card card-side bg-black shadow-xl flex-wrap md:flex-nowrap h-full rounded-md overflow-hidden">
              <figure className='w-full h-3/4 md:h-full'><img src={anime.images.jpg.image_url} className='h-full w-full object-cover md:w-full' alt="Character" /></figure>
              <div className="card-body justify-between w-3/4 bg-neutral p-2 h-1/4 md:h-full">
                <h2 className="card-title text-xs md:text-md lg:pt-2 lg:text-xl md-gap-5 flex-col items-start text-success gap-0">{anime.name}</h2>
                <div className="card-actions">
                  <p className='text-sx md: text-white hidden md:block'>Nicknames:</p>
                  <span className='text-success flex flex-col'>{anime.nicknames.slice(0, 3).map((name) => (
                    <span>*{name}</span>
                  ))}</span>
                </div>
                <div className="rating rating-sm gap-1 flex items-center">
                  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                  <span className='text-error ml-1'>{anime.favorites}M</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination handlePageClick={handlePageClick} />
    </div>
  )
}

export default TopCharacters