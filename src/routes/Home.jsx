import React from 'react'
import Nav from './Nav'
import { useState, useEffect } from 'react'
import SearchResult from './SearchResult'

const Home = () => {

  const [search, setSearch] = useState('');
  const [animeData, setAnimeData] = useState();
  const getData = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=25`)
      .then(res => res.json());
    setAnimeData(response.data)
    console.log(response.data)

  };

  const handleSearch = (e) => {
    e.preventDefault();

  };

  useEffect(() => {
    getData();
  }, [search])

  console.log(animeData);

  return (
    <div className='h-full'>
      <Nav />
      <div id="hp-container" className='overflow-hidden'>
        <div id="hp-content" className='h-screen w-screen text-center pt-5'>
          <h1 className="text-2xl md:text-5xl text-white pb-5">My<strong className='text-success'>Anime</strong>List</h1>
          <form action="" onSubmit={handleSearch}>
            <input
              placeholder='Search Anime'
              className='input w-80'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <div className="anime-list max-w-7xl mx-auto overflow-auto mt-10 h-3/4">
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 py-5 gap-2 overflow-auto px-5">
              <SearchResult handleSearch={handleSearch} animeData={animeData} setAnimeData={setAnimeData} animeList={animeData} />
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Home