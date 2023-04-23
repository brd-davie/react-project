import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { jikanAnimeDetails } from '../anime'
import { Link } from 'react-router-dom'
import AnimeEpisodes from '../components/AnimeEpisodes'
import AnimeNews from '../components/AnimeNews'
import AnimePictures from '../components/AnimePictures'
import AnimeRecommendations from '../components/AnimeRecommedations'
import AnimeEpVideos from '../components/AnimeEpVideos'
import AnimeReviews from '../components/AnimeReviews'

const AnimeDetails = () => {
  const anime = useLoaderData();


  return (
    <div>
      <div id="anime" className="pt-0">
        <div className=" md:flex md:flex-col lg:flex-row lg:p-5">
          <div className="w-full h-96 object-cover lg:w-w-4/12	 lg:max-w-xs lg:h-full">
            <div className='w-full relative'>
              <img className="w-full h-96 object-cover mb-4 lg:h-full rounded-lg" src={anime.images.jpg.large_image_url} alt="" />
              <div className="rating rating-sm gap-1 items-center absolute left-[10px] bottom-[10px] bg-red-600 px-4">
                  <input type="radio" name="rating-3" className="mask mask-heart bg-red-900" />
                  <span className='text-white text-lg ml-3'>{anime.favorites ? anime.favorites : 'N/A'}</span>
                </div>
                <div className="rating rating-sm ml-5 items-center absolute right-[10px] bottom-[10px] bg-red-600 px-4">
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                  <span className='text-success text-lg ml-3'>{anime.score ? anime.score : 'N/A'}</span>
                </div>
            </div>
          </div>
          <div className="text-md text-justify leading-12 w-full md:px-4">
            <h2 className='text-white font-bold opacity-[.6] mt-4 lg:mt-0 text-2xl pb-3 pb-0'>{anime.title ? anime.title : 'N/A'}</h2>
            <h4 className='text-white font-bold opacity-[.6] mt-4 lg:mt-0 text-lg pb-3 pb-0'>{anime.title_japanese ? anime.title_japanese : 'N/A'}</h4>
              <div className='flex justify-between lg:p-2'>
                <p className="text-md font-bold text-white opacity-[.6]"><strong className=''>Rank:</strong> {anime.rank ? anime.rank : 'N/A'}</p>
              </div>
              <div className=''>
                <div className="flex flex-row gap-4 lg:p-2">
                  <h3 className='text-md text-white opacity-[.6]'><strong className=''>Aired: </strong></h3>
                  <p className='text-white opacity-[.6]'>{anime.aired.string ? anime.aired.string : 'N/A'}</p>
                </div>
                <div className="flex flex-row flex-wrap gap-4 lg:p-2">
                  <h3 className='text-md text-white opacity-[.6]'><strong className=''>Genres: </strong></h3>
                  {anime.genres.map((genre, index) => (
                    <p key={index} className='text-white opacity-[.6]'>{genre.name ? genre.name : 'N/A'}</p>
                  ))}
                </div>
                <div className="flex flex-row gap-4 lg:p-2">
                  <h3 className='text-md text-white opacity-[.6]'><strong className=''>Themes: </strong></h3>
                  {anime.themes.map((theme, index) => (
                    <p key={index} className='text-white opacity-[.6]'>{theme.name ? theme.name : 'N/A'}</p>
                  ))}
                </div>
                <div className="flex flex-row gap-4 lg:p-2">
                  <h3 className='text-md text-white opacity-[.6]'><strong className=''>Source: </strong></h3>
                  <p className='text-white opacity-[.6]'>{anime.source ? anime.source : 'N/A'}</p>
                </div>
                <div className="flex flex-row gap-4 lg:p-2">
                  <h3 className='text-md text-white opacity-[.6]'><strong className=''>Studio: </strong></h3>
                  {anime.studios.map((studio, index) => (
                    <p key={index} className='text-white opacity-[.6]'>{studio.name ? studio.name : 'N/A'}</p>
                  ))}
                </div>
                <p className="text-md text-white opacity-[.6] lg:p-2"><strong className='text-white '>Status:</strong> {anime.status}</p>
                <div className='pt-4 flex flex-col gap-3 lg:p-2'>
                  <h2 className='text-md text-white opacity-[.6]'><strong className=''>Watch on:</strong></h2>
                  <ul className='flex gap-4 flex-wrap'>
                    {anime.streaming.slice(0, 3).map((stream, index) => (
                      <li key={index} className=''><Link to={stream.url} className='text-white opacity-[.6] text-md hover:text-success hover:underline'>{stream.name ? stream.name : 'N/A'}</Link></li>
                    ))}
                  </ul>
                </div>
                <p className="text-md text-white opacity-[.6] lg:p-2">Number of Episodes: {anime.episodes ? anime.episodes : 'N/A'}</p>
              </div>

            </div>
            <div className="anime-info-bb lg:p-3 md:px-3 md:m-0 w-full lg:pt-0">
              <p className='text-white opacity-[.6] mt-3'>{anime.synopsis}</p>
            </div>

          </div>
        <AnimeEpisodes id={anime.mal_id} />
        <div className='w-full'>
          <AnimeRecommendations id={anime.mal_id} />
        </div>
        <AnimeEpVideos id={anime.mal_id} />
        <AnimeReviews id={anime.mal_id} />
        <AnimeNews id={anime.mal_id} />
        <AnimePictures id={anime.mal_id} />
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
