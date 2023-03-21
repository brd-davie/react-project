import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { jikanAnimeDetails } from '../anime'
import { Link } from 'react-router-dom'
import TopRecommendation from '../components/TopRecommendation'
import AnimeEpisodes from '../components/AnimeEpisodes'
import Footer from '../components/Footer'

const AnimeDetails = () => {
  const anime = useLoaderData();


  return (
    <div>
      <div id="anime" className="pt-0 md:pt-8">
        <div className="anime-wrapper md:flex md:flex-col lg:flex-row gap-3">
          <div className="w-full h-96 object-cover lg:w-w-4/12	 lg:max-w-xs lg:h-full">
            <div className='w-full'>
              <img className="w-full h-96 object-cover mb-4 lg:h-full" src={anime.images.jpg.image_url} alt="" />
            </div>
          </div>
          <div className="text-md text-justify text-white leading-12 w-full">
            <h2 className='text-white mt-4 md:mt-0 text-3xl mb-5'>{anime.title}</h2>
            <div className='flex justify-between'>
              <p className="my-4 text-lg font-bold	 text-white"><strong className='opacity-[.3]'>Rank:</strong> {anime.rank}</p>
              <div className='flex items-center justify-center'>
                <div className="rating gap-1 items-center">
                  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                  <span className='text-error text-lg ml-3'>{anime.favorites}M</span>
                </div>
                <div className="rating ml-5 items-center">
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                  <span className='text-success text-lg ml-3'>{anime.score}%</span>
                </div>
              </div>
            </div>
            <div className=''>
              <div className="bb-anime-details flex flex-row gap-4">
                <h3 className='text-md text-white'><strong className='opacity-[.3]'>Aired: </strong></h3>
                <p className='text-white'>{anime.aired.string}</p>
              </div>
              <div className="bb-anime-details flex flex-row flex-wrap gap-4">
                <h3 className='text-md text-white'><strong className='opacity-[.3]'>Genres: </strong></h3>
                {anime.genres.map((genre, index) => (
                  <p key={index} className='text-white'>{genre.name}</p>
                ))}
              </div>
              <div className="bb-anime-details flex flex-row gap-4">
                <h3 className='text-md text-white'><strong className='opacity-[.3]'>Themes: </strong></h3>
                {anime.themes.map((theme, index) => (
                  <p key={index} className='text-white'>{theme.name}</p>
                ))}
              </div>
              <div className="bb-anime-details flex flex-row gap-4">
                <h3 className='text-md text-white'><strong className='opacity-[.3]'>Source: </strong></h3>
                <p className='text-white'>{anime.source}</p>
              </div>
              <div className="bb-anime-details flex flex-row gap-4">
                <h3 className='text-md text-white'><strong className='opacity-[.3]'>Studio: </strong></h3>
                {anime.studios.map((studio, index) => (
                  <p key={index} className='text-white'>{studio.name}</p>
                ))}
              </div>
              <p className="bb-anime-details text-md text-white"><strong className='text-white opacity-[.3]'>Status:</strong> {anime.status}</p>
              <div className='pt-4 flex gap-3 items-center'>
                <h2 className='text-md text-white'><strong className='opacity-[.3]'>Watch</strong></h2>
                <ul className='flex gap-4 flex-wrap'>
                  {anime.streaming.slice(0, 3).map((stream, index) => (
                    <li key={index} className=''><Link to={stream.url} className='text-white text-md hover:text-success hover:underline'>{stream.name}</Link></li>
                  ))}
                </ul>
              </div>
              <p className="bb-anime-details my-2 text-md text-white"><strong className='text-white opacity-[.3]'>Number of Episodes: </strong> {anime.episodes}</p>
            </div>

          </div>
          <div className="anime-info-bb p-3 md:px-3 md:m-0 w-full lg:pt-0">
            <strong className='text-white opacity-[.3] text-md'>Synopsis:</strong>
            <p className='text-white mt-3 text-justify'>{anime.synopsis}</p>
          </div>

        </div>
        <AnimeEpisodes id={anime.mal_id} />
        {
          anime.trailer.embed_url !== null ?
            (
              <div className='mt-10 lg:w-[800px] mx-auto'>
                <h3 className='text-accent text-lg md:text-2xl mb-2 md:mb-3'>Trailer</h3>
                <embed src={anime.trailer.embed_url} type="" width='100%' className='h-[300px]  md:h-[600px]' />
              </div>
            ) : ''
        }
        <div className='w-full'>
          <TopRecommendation />
        </div>
      </div >
    </div >
  )
}

export default (AnimeDetails)

export async function loader({ params }) {
  const anime_details = jikanAnimeDetails(params.mal_id);
  console.log(anime_details);
  return anime_details;
}
