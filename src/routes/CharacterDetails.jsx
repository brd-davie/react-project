import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { getCharacterDetails } from '../anime';
import { Link } from 'react-router-dom';

const CharacterDetails = () => {
  const character = useLoaderData()
  return (
    <div>
      <div className='lg:flex'>
        <div className='md:flex lg:w-1/2'>
          <div className='w-full pt-0 md:p-5 md:pt-0'>
            <div className="flex flex-row">
              <div className='flex flex-col w-full'>
                <h2 className='text-2xl md:text-4xl text-white mb-3 opacity-[.6] md:my-3 md:mt-0 pr-2'>{character.name}</h2>
                <div className='flex flex-col'>
                  <p className='text-white opacity-[.3] text-lg mr-2'>Nicknames:</p>
                  <ul className='flex flex-wrap gap-2 text-white opacity-[.3] mb-2'>
                    {character.nicknames.map((names) => (
                      <li className='text-lg'>{names},</li>
                    ))}
                  </ul>
                </div>
                <p className='text-white opacity-[.3] text-lg mb-4'>Favorites: <span className=''>{character.favorites}</span></p>
              </div>
              <div className='w-full md:w-1/2'>
                <img src={character.images.jpg.image_url} alt="Avatar" className='w-full' />
              </div>
            </div>
            <p className='text-white opacity-[.3] mt-3'>{character.about}</p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 md:p-5 lg:pt-0'>
          <div className='md:w-full'>
            <h2 className='text-2xl text-white opacity-[.6] my-3 md:mt-0'>Animes</h2>
            <div className='carousel gap-3'>
              {character.anime.map((anime, index) => (
                <Link to={`/anime/anime-list/${anime.anime.mal_id}/anime-details`} key={index} className='carousel-item w-[100px] flex-col md:w-md max-w-xs'>
                  <img src={anime.anime.images.jpg.image_url} alt="" className='w-full object-cover' />
                  <div className='h-auto'>
                    <p className='text-white text-[12px] opacity-[.6] text-xs '>{anime.anime.title}</p>
                    <p className='text-white text-[12px] opacity-[.6] '>Role: <span className='text-white'>{anime.role}</span></p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className='md:w-full mt-5 md:mt-5'>
            <h2 className='text-2xl text-white opacity-[.6] my-3 md:mt-0'>Manga</h2>
            <div className='carousel gap-3'>
              {character.manga.map((anime, index) => (
                <Link to={`/anime/anime-list/${anime.manga.mal_id}/anime-details`} key={index} className='carousel-item w-[100px] flex-col md:w-md max-w-xs'>
                  <img src={anime.manga.images.jpg.image_url} alt="" className='w-full object-cover h-[82%]' />
                  <div className='h-auto'>
                    <p className='text-white text-[12px] opacity-[.6] text-xs '>{anime.manga.title}</p>
                    <p className='text-white text-[12px] opacity-[.6] '>Role: <span className='text-white'>{anime.role}</span></p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className='md:w-full mt-5'>
            <h2 className='text-2xl text-white opacity-[.6] md:py-3'>Voice</h2>
            <div className='carousel flex gap-3'>
              {character.voices.map((voices, index) => (
                <div key={index} className='carousel-item flex flex-col w-[100px]'>
                  <img src={voices.person.images.jpg.image_url} alt='' className='w-full h-full object-cover' />
                  <div className='text-white text-[12px] opacity-[.6]'>Name: {voices.person.name}</div>
                  <div className='text-white text-[12px] opacity-[.6]'>Language: {voices.language}</div>
                </div>
              ))}
            </div>
          </div>
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