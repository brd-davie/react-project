import React from 'react'
import BannerSlider from '../components/BannerSlider'
import Nav from '../components/Nav'
import AnimeSlick from '../components/AnimeSlick'
import Footer from '../components/Footer'
import FeatureAnime from '../components/FeatureAnime'
import AnimeNews from '../components/AnimeNews'
import AnimeReviews from '../components/AnimeReviews'


const Home = () => {
  return (
    <div className=''>
      <Nav />
      <div id="hp-container" className='h-full'>
        <BannerSlider />
        <AnimeSlick endPoint={`https://api.jikan.moe/v4/top/anime`} header='Trending' link={`${'/anime/trending-anime'}`} />
        <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/upcoming`} header='Upcoming' link={`${'/anime/upcoming'}`} />
        <FeatureAnime />
        <AnimeSlick endPoint={`https://api.jikan.moe/v4/anime?genres=4`} header='Comedy' link={`${'/anime/genre'}`} />
        <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/now`} header='Ongoing' link={`${'/anime/ongoing'}`} />
        <AnimeNews id='50709' />
        <AnimeReviews />
      </div>
      <Footer />
    </div >
  )
}

export default Home
