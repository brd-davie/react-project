import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { getCharacterDetails } from '../anime';
import { Link } from 'react-router-dom';

const CharacterDetails = () => {
  const character = useLoaderData()
  return (
    <div>
      <div className='md:flex'>
        <div className='md:flex md:w-1/2'>
          <div className='w-full pt-0 md:p-5 md:pt-0'>
            <div className="flex flex-row">
              <div className='flex flex-col w-full'>
                <h2 className='text-2xl md:text-4xl text-accent md:my-3 md:mt-0'>{character.name}</h2>
                <div className='flex flex-col'>
                  <p className='text-accent text-lg mr-2'>Nicknames:</p>
                  <ul className='flex flex-wrap gap-2 text-white mb-2'>
                    {character.nicknames.map((names) => (
                      <li className='text-lg'>{names},</li>
                    ))}
                  </ul>
                </div>
                <p className='text-accent text-lg mb-4'>Favorites: <span className=''>{character.favorites}</span></p>
              </div>
              <div className='w-full md:w-1/2'>
                <img src={character.images.jpg.image_url} alt="Avatar" className='w-full' />
              </div>
            </div>
            <p className='text-white text-justify mt-3'>{character.about}</p>
          </div>
        </div>
        <div className='md:w-1/2 mt-5 md:mt-0'>
          <h2 className='text-4xl text-accent my-3 md:mt-0'>Animes</h2>
          <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 gap-2'>
            {character.anime.map((anime, index) => (
              <Link to={`/anime/anime-list/${anime.anime.mal_id}/anime-details`} key={index} className='flex-col md:w-md max-w-xs'>
                <img src={anime.anime.images.jpg.image_url} alt="" className='w-full object-cover h-[82%]' />
                <div className='h-auto'>
                  <p className='text-accent text-xs '>{anime.anime.title.slice(0, 10)}</p>
                  <p className='text-accent text-xs '>Role: <span className='text-white'>{anime.role}</span></p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h2 className='text-4xl text-accent md:py-3'>Voice</h2>
        <div className='carousel flex gap-3 mt-3'>
          {character.voices.map((voices) => (
            <div className='carousel-item flex flex-col'>
              <img src={voices.person.images.jpg.image_url} alt='' className='w-[200px] h-full object-cover' />
              <div className='text-accent'>Name: {voices.person.name}</div>
              <div className='text-accent'>Language: {voices.language}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CharacterDetails

export async function loader({ params }) {
  const character_details = getCharacterDetails(params.mal_id);
  console.log(character_details);
  return character_details;
}