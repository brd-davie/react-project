import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { getCharacterDetails } from '../anime';

const TopCharactersDetails = () => {
  const anime = useLoaderData();
  return (
    <div id="anime" className="p-0 py-5 md:pt-8">
      <div className="anime-wrapper flex flex-col md:flex-row">
        <img className="w-full h-96 object-cover md:h-fit md:max-w-sm md:w-2/5" src={anime.images.jpg.image_url} alt={anime.name} />
        <div className="anime-info mt-5 p-0 md:px-6 md:w-full md:m-0">
          <h2 className="text-4xl border-b-2 pb-4 font-bold	 text-white">Name: {anime.name}</h2>
          <p className="my-4 text-2xl font-bold	 text-white">{anime.type}</p>
          <p className="text-md my-5 text-success"><strong>Favorite:</strong> {anime.favorites}</p>
          <p className="text-md text-justify text-white"><strong className='text-success'>About: </strong> <br />{anime.about}</p>
        </div>
      </div>
    </div >
  )
}

export default TopCharactersDetails

export async function loader({ params }) {
  const character_details = getCharacterDetails(params.mal_id);
  console.log(character_details);
  return character_details ?? null;
}