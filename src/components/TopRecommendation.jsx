import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AnimeGif from './AnimeGif';

const TopRecommendation = () => {

  const [recommendation, setRecommendation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const GetTopRecommendation = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/recommendations/anime`).then(res => res.json())
      console.log(response.data)
      setIsLoading(false)
      setRecommendation(response.data)
    } catch (error) {
      console.error(error)
      // Handle the error here
    }
  };


  useEffect(() => {
    GetTopRecommendation();
  }, [])

  if (isLoading) {
    return <div className="absolute left-1/2 top-1/2"><AnimeGif /></div>
  }

  return (
    <div className='h-screen overflow-auto p-4 lg:pt-0'>
      <h2 className='text-lg md:text-3xl text-accent mb-2 md:mb-5 mt-5 lg:mt-0'>Recommendations</h2>
      <div className='recommendation grid grid-cols-4 md:grid-cols-5 lg:grid-cols-3  gap-2 '>
        {recommendation.slice(0, 80).map((anime, index) => (
          <div className='card' key={index}>
            <div className='h-full'>
              {anime.entry.slice(0, 1).map((entry, index) => (
                <Link to={`/anime/top-recommendation/${entry.mal_id}/anime-details`} id='card-custom' className='h-full card' key={index}>
                  <div className="card card-compact bg-base-100 rounded-lg shadow-xl h-full overflow-hidden relative">
                    <figure className='h-full' id='card-recommendation'><img src={entry.images.jpg.image_url} alt="Shoes" className='object-cover w-full h-full' /></figure>
                    <h2 id='recommendation-title' className='px-2 text-white py-1 absolute w-full bg-neutral text-xs md:bottom md:top-20 text-center'>{entry.title.slice(0, 20)}</h2>
                    {/* <Link to={`${entry.mal_id}/anime-details`} className='btn-sm btn-accent rounded-none flex items-center text-xs md:text-md justify-center'><strong>View Details</strong></Link> */}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopRecommendation