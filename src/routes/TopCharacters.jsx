import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const TopCharacters = () => {
  const [characterList, setCharacterList] = useState([]);
  const GetCharacterList = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/top/characters`)
      .then(res => res.json());
    setCharacterList(response.data);
  };

  useEffect(() => {
    GetCharacterList();
  }, [])

  console.log(characterList);
  return (
    <div>
      <h2 className="text-md md:text-2xl text-white md:px-3">Top Characters</h2>
      <div id="anime-character" className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 py-5 gap-2 md:px-2 overflow-auto bg-transparent md:mt-0 w-full">
        {characterList.map((anime) => (
          <Link to={`${anime.url}`} target='_blank' className="w-full h-full">
            <div className="card card-side bg-black shadow-xl flex-wrap md:flex-nowrap h-full rounded-md overflow-hidden">
              <figure className='w-full h-3/4 md:h-full'><img src={anime.images.jpg.image_url} className='h-full w-full object-cover md:w-full' alt="Character" /></figure>
              <div className="card-body w-3/4 bg-neutral p-2 h-1/4 md:h-full">
                <h2 className="card-title text-xs md:text-md lg:pt-2 lg:text-xl md-gap-5 flex-col items-start text-success gap-0">{anime.name}</h2>
                <div className="card-actions justify-end">
                  <p className='text-xs text-white hidden md:block'>Nicknames: <span className='text-success'>{anime.nicknames.splice(0, 1)}</span></p>
                  <p className='text-xs text-white'>Likes: <span className='text-success'> {anime.favorites}</span></p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="btn-group flex justify-center my-20">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={5}
          marginPagesDisplayed={2}
          // onPageChange={handlePageChange}
          containerClassName={'btn-group flex gap-2 text-success'}
          pageClassName={'btn btn-success'}
          previousClassName={'btn btn-success'}
          nextClassName={'btn btn-success'}
          activeClassName={'btn-active'}
        />
      </div>
    </div>
  )
}

export default TopCharacters