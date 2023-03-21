import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';
import AnimeGif from '../components/AnimeGif';
import Footer from '../components/Footer';
import AnimeSlick from '../components/AnimeSlick';

const TopCharacters = () => {

  const [characterList, setCharacterList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const fetchCharacterList = async (currentPage) => {
    console.log('Running');
    const response = await fetch(`https://api.jikan.moe/v4/top/characters?page=${currentPage}&limit=24`)
      .then(res => res.json());
    console.log(response.data)
    setIsLoading(false)
    return (response.data);
  };


  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const changePage = await fetchCharacterList(currentPage)
    setCharacterList(changePage);
  };

  useEffect(() => {
    setCharacterList();
    let data = { selected: 0 }
    handlePageClick(data);
  }, [])

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen"><AnimeGif /></div>
  }

  return (
    <div>
      <div>
        <h2 className="text-md md:text-2xl text-white md:px-3">Top Characters</h2>
        <div id="anime-character" className="custom-container grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 py-5 gap-2 md:px-2 overflow-auto bg-transparent md:mt-0 w-full">
          {characterList.map((anime, index) => (
            <div key={index} className="w-full md:h-full">
              <div className="card card-side bg-black shadow-xl h-full flex-wrap md:flex-nowrap md:h-full rounded-md overflow-hidden">
                <figure className='w-full md:full lg:h-full'><img src={anime.images.jpg.image_url} className='h-full w-full object-cover md:w-full' alt="Character" /></figure>
                <div className="card-body justify-between w-3/4 bg-neutral p-2">
                  <h2 className="card-title text-sm md:text-md lg:pt-2 lg:text-xl md-gap-5 flex-col items-start text-white gap-0">{anime.name}</h2>
                  <div className="card-actions flex-col">
                    <p className='text-xs md: text-white md:block'>Nicknames:</p>
                    <span className='text-white opacity-[.3] text-xs flex flex-col'>{anime.nicknames.slice(0, 3).map((name, index) => (
                      <span key={index}>-{name}</span>
                    ))}</span>
                    <div>
                      <p className='text-xs text-white'>{anime.about.slice(0, 50)}</p>
                    </div>
                  </div>
                  <div className="rating rating-sm gap-1 flex items-center">
                    <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                    <span className='text-error ml-1'>{anime.favorites}</span>
                  </div>
                  <Link to={`${anime.mal_id}/details`} className='btn btn-xs btn-primary'>View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination handlePageClick={handlePageClick} />
        <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/upcoming`} header='Upcoming' link={`${'/anime/genre'}`} />
        <Footer />
      </div>
    </div>
  )
}

export default TopCharacters