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
        <h2 className="custom-title_border_left text-[22px] md:text-2xl text-white opacity-[.6] md:px-3 pl-2">Top Characters</h2>
        <div id="anime-character" className="custom-container grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 py-5 gap-3 md:px-2 overflow-auto bg-transparent md:mt-0 w-full">
          {characterList.map((anime, index) => (
            <Link to={`${anime.mal_id}/details`} key={index} className="w-full md:h-full overflow-hidden rounded-lg">
              <div className="anime-character-card card card-side shadow-2xl glass h-full flex-wrap md:h-full rounded-md overflow-hidden">
                <figure className='w-full'><img src={anime.images.jpg.image_url} className='h-full w-full object-cover' alt="Character" /></figure>
                <div className="card-body justify-between w-3/4 p-0">
                  <div className='flex justify-between'>
                    {/* <h2 className="card-title text-[12px] p-2 lg:pt-2 md-gap-5 flex-col items-start text-white opacity-[.6] gap-0">{anime.name}</h2> */}
                    {/* <div className="card-actions flex-col"> */}
                    {/* <p className='text-xs text-white opacity-[.6] md:block'>Nicknames:</p> */}
                    {/* <span className='text-white opacity-[.6] text-xs flex flex-col'>{anime.nicknames.slice(0, 3).map((name, index) => (
                      <span key={index}>-{name}</span>
                    ))}</span> */}
                    {/* <div>
                      <p className='text-xs text-white opacity-[.6]'>{anime.about.slice(0, 50)}</p>
                    </div> */}
                    {/* </div> */}
                    {/* <div className="rating rating-sm gap-1 flex items-center">
                    <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                    <span className='text-error ml-1'>{anime.favorites}</span>
                  </div> */}
                  </div>
                  {/* <Link to={`${anime.mal_id}/details`} className='btn btn-xs text-white glass w-full'>View Details</Link> */}
                </div>
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