import React from 'react'
import BannerSlider from '../components/BannerSlider'
import Nav from '../components/Nav'
import AnimeSlick from '../components/AnimeSlick'


const App = () => {
  return (
    <div className=''>
      <Nav />
      <div id="hp-container" className='h-full'>
        <BannerSlider />
        <AnimeSlick endPoint={`https://api.jikan.moe/v4/top/anime`} header='Trending' link={`${'/anime/trending-anime'}`} />
        <AnimeSlick endPoint={`https://api.jikan.moe/v4/anime?genres=22`} header='Romance' link={`${'/anime/genre'}`} />
        {/* <AnimeSlick endPoint={`https://api.jikan.moe/v4/anime?genres=4`} header='Comedy' link={`${'/anime/genre'}`} /> */}
      </div>
    </div >
  )
}

export default App
