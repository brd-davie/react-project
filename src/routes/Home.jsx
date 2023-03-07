import React from 'react'
import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import SearchResult from '../components/SearchResult'
import ReactPlayer from 'react-player'

const Home = () => {

  const [animeData, setAnimeData] = useState([]);
  const [search, setSearch] = useState('');
  const getAnime = async (search) => {
    const response = await fetch(`https://gogoanime.consumet.stream/search?keyw=${search}`)
      .then(res => res.json())
    console.log(response)
    setAnimeData(response.slice(0, 14))
  };

  const handleSearch = (e) => {
    getAnime(search)
    e.preventDefault();
  };

  useEffect(() => {
    getAnime();
  }, [])

  return (
    <div className='h-full'>
      <Nav />
      <div id="hp-container" className='overflow-hidden'>
        <div id="hp-content" className='h-screen w-screen text-center pt-5'>
          <h1 className="text-2xl md:text-5xl text-white pb-5">My<strong className='text-success'>Anime</strong>List</h1>
          <form action=""
            onSubmit={handleSearch}>
            <input
              placeholder='Search Anime'
              className='input w-80'
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <div className="anime-list max-w-7xl mx-auto overflow-auto mt-5 h-3/4">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 py-5 gap-2 overflow-auto px-5">
              <SearchResult handleSearch={handleSearch} animeData={animeData} animeList={animeData} />
            </div>
            <ReactPlayer url='https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Fluffy&psig=AOvVaw1gEA33fJ6QQmMNV6_sWoX7&ust=1678237525080000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMDJ443QyP0CFQAAAAAdAAAAABAE' />
          </div>
        </div>
      </div >
    </div >
  )
}

export default Home