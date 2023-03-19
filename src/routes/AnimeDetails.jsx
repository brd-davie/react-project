import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { jikanAnimeDetails } from '../anime'
import { Link } from 'react-router-dom'
import TopRecommendation from '../components/TopRecommendation'
import AnimeEpisodes from '../components/AnimeEpisodes'

const AnimeDetails = () => {
  const anime = useLoaderData();


  return (
    <div fallback={<>Loading</>}>
      <div id="anime" className="pt-0 md:pt-8">
        <div className="anime-wrapper md:flex md:flex-col lg:flex-row">
          <div className="w-full h-96 object-cover lg:w-w-4/12	 lg:max-w-xs lg:h-full">
            <img className="w-full h-96 object-cover mb-4 lg:max-w-xs lg:h-full" src={anime.images.jpg.image_url} alt="" />
            <h2 className=" text-2xl md:text-3md   border-b-2 py-4 pt-4 md:mt-0 font-bold md:pt-0	text-accent">{anime.title}</h2>
            <div className="text-md text-justify text-white leading-12">
              <div className=''>
                <p className="my-4 text-2xl font-bold	 text-white"><strong className='text-accent'>Rank:</strong> #{anime.rank}</p>
                <div className="rating gap-1 items-center">
                  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                  <span className='text-error text-lg ml-3'>{anime.favorites}M</span>
                </div>
                <div className="rating ml-10 items-center">
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                  <span className='text-success text-lg ml-3'>{anime.score}%</span>
                </div>
                <div className="flex flex-row gap-4">
                  <h3 className='text-md text-accent'><strong>Aired: </strong></h3>
                  <p className='text-white'>{anime.aired.string}</p>
                </div>
                <div className="flex flex-row gap-4">
                  <h3 className='text-md text-accent'><strong>Genres: </strong></h3>
                  {anime.genres.map((genre, index) => (
                    <p key={index} className='text-white'>{genre.name}</p>
                  ))}
                </div>
                <div className="flex flex-row gap-4">
                  <h3 className='text-md text-accent'><strong>Themes: </strong></h3>
                  {anime.themes.map((theme, index) => (
                    <p key={index} className='text-white'>{theme.name}</p>
                  ))}
                </div>
                <div className="flex flex-row gap-4">
                  <h3 className='text-md text-accent'><strong>Source: </strong></h3>
                  <p className='text-white'>{anime.source}</p>
                </div>
                <div className="flex flex-row gap-4">
                  <h3 className='text-md text-accent'><strong>Studio: </strong></h3>
                  {anime.studios.map((studio, index) => (
                    <p key={index} className='text-white'>{studio.name}</p>
                  ))}
                </div>
                <p className="text-md mt-2 text-white"><strong className='text-accent'>Status:</strong> {anime.status}</p>
                <div className='pt-4 flex gap-3 items-center'>
                  <h2 className='text-md text-accent md:text-2xl'>Watch on:</h2>
                  <ul className='flex gap-4 flex-wrap'>
                    {anime.streaming.map((stream, index) => (
                      <li key={index} className=''><Link to={stream.url} className='text-white text-md hover:text-success hover:underline'>{stream.name}</Link></li>
                    ))}
                  </ul>
                </div>
                <p className="text-md my-2 text-white"><strong className='text-accent'>Number of Episodes: </strong> {anime.episodes}</p>
              </div>

            </div>
          </div>
          <div className="anime-info p-3 md:px-3 md:m-0 w-full lg:w-[80%] lg:pt-0">
            <strong className='text-accent text-2xl'>Synopsis:</strong>
            <p className='text-white mt-3'>{anime.synopsis}</p>
            <AnimeEpisodes id={anime.mal_id} />
            <div className='mt-10'>
              <h3 className='text-accent text-lg md:text-2xl mb-2 md:mb-3'>Official Trailer</h3>
              <embed src={anime.trailer.embed_url} type="" width='100%' className='h-56 md:h-96' />
            </div>
          </div>
          <div className='w-full lg:w-[50%]'>
            <TopRecommendation />
          </div>
        </div>

      </div >
    </div>
  )
}

export default (AnimeDetails)

export async function loader({ params }) {
  const anime_details = jikanAnimeDetails(params.mal_id);
  console.log(anime_details);
  return anime_details;
}
