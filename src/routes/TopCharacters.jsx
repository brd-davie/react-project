import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';
import AnimeGif from '../components/AnimeGif';
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
    let data = { selected: 0 }
    handlePageClick(data);
  }, [])

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen"><AnimeGif /></div>
  }

  return (
    <div>
      <div>
        <h2 className="custom-title_border_left text-[22px] md:text-2xl text-white opacity-[.6] md:px-3 pl-2">Top Characters</h2>
        <div id="anime-character" className="custom-container grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 py-5 gap-3 md:px-2 overflow-auto bg-transparent md:mt-0 w-full">
          {characterList.map((anime, index) => (
            <Link to={`${anime.mal_id}/details`} key={index} className="w-full md:h-full overflow-hidden rounded-lg">
              <div className="anime-character-card card card-side shadow-2xl glass h-full flex-wrap md:h-full rounded-md overflow-hidden">
                <figure className='w-full'><img src={anime.images.jpg.image_url} className='h-full w-full object-cover' alt="Character" /></figure>
              </div>
            </Link>
          ))}
        </div>
        <Pagination handlePageClick={handlePageClick} />
        <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/upcoming`} header='Upcoming' link={`${'/anime/upcoming'}`} />
        <AnimeSlick endPoint={`https://api.jikan.moe/v4/top/anime`} header='Trending' link={`${'/anime/trending-anime'}`} />
      </div>
    </div>
  )
}

export default TopCharacters