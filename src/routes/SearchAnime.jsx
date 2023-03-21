import React from 'react'
import SearchResult from '../components/SearchResult';
import { useEffect, useState } from 'react';
import AnimeGif from '../components/AnimeGif';

const SearchAnime = () => {
  const [animeData, setAnimeData] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);


  const getAnime = async (search) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?&q=${search}&limit=21`)
      .then(res => res.json())
    console.log(response.data)
    setIsLoading(false)
    setAnimeData(response.data)
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getAnime(search)
  };

  // const handlePageClick = async (data) => {
  //   let currentPage = data.selected + 1;
  //   const changePage = await getAnime(currentPage)
  //   setAnimeData(changePage);
  // };

  useEffect(() => {
    // const interval = setInterval(() => {
    getAnime(search)
    // clearInterval(interval)
    // }, 1000);
  }, [search])

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen"><AnimeGif /></div>
  }

  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <form
        className='text-center'
        action=""
        onSubmit={handleSearch}>
        <input
          placeholder='Search Anime'
          className='input w-80'
          search={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div id='my-anime-list' className="my-anime-list max-w-7xl mx-auto mt-5  h-2/4">
        <div className="pb-24">
          <div className='pb-4'><h1 className='text-4xl text-center text-white'>My<strong className='text-accent'>Anime</strong>List</h1></div>
          <SearchResult setSearch={setSearch} animeData={animeData} setAnimeData={setAnimeData} animeList={animeData} />
          {/* <Pagination handlePageClick={handlePageClick} /> */}
        </div>
      </div>
    </div>
  )
}

export default SearchAnime