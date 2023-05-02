import React from 'react'
import BannerSlider from '../components/BannerSlider'
import Nav from '../components/Nav'
import AnimeSlick from '../components/AnimeSlick'
import Footer from '../components/Footer'
import FeatureAnime from '../components/FeatureAnime'
import AnimeNews from '../components/AnimeNews'
// import HeroBanner from '../components/HeroBanner'

const Home = () => {
  return (
    <>
      <Nav />
      <div id="hp-container" className='h-full relative'>
        {/* <HeroBanner /> */}
        <BannerSlider />
        <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/upcoming?limit=12`} header='Upcoming' link={`${'/anime/upcoming'}`} />
        <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/now?limit=12`} header='Ongoing' link={`${'/anime/ongoing'}`} />
        <FeatureAnime />
        <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/2022/summer?limit=12`} header='Summer 2022' link={`${'/anime/seasons'}`} />
        <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/2022/winter?limit=12`} header='Winter 2022' link={`${'/anime/seasons'}`} />
        {/* <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/2022/fall?limit=12`} header='Fall 2022' link={`${'/anime/seasons'}`} /> */}
        {/* <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/2022/spring?limit=12`} header='Spring 2022' link={`${'/anime/seasons'}`} /> */}
        <AnimeNews id='50709' />
        {/* <AnimeSeasons /> */}
      </div>
      <Footer />
    </>
  )
}

export default Home
