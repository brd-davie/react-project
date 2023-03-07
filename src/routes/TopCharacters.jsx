import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const TopCharacters = () => {

  const [characterList, setCharacterList] = useState([]);

  const fetchCharacterList = async (currentPage) => {
    console.log('Running');
    const response = await fetch(`https://api.jikan.moe/v4/top/characters?page=${currentPage}`)
      .then(res => res.json());
    console.log(response)
    return (response.data);
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const changePage = await fetchCharacterList(currentPage)
    setCharacterList(changePage);
  };

  useEffect(() => {
    let data = { selected: 0 }
    handlePageClick(data);
  }, [])

  return (
    <div>
      <h2 className="text-md md:text-2xl text-white md:px-3">Top Characters</h2>
      <div id="anime-character" className="custom-container grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 py-5 gap-2 md:px-2 overflow-auto bg-transparent md:mt-0 w-full">
        {characterList.map((anime) => (
          <Link to={`${anime.url}/details`} className="w-full h-full">
            <div key={anime.mal_id} className="card card-side bg-black shadow-xl flex-wrap md:flex-nowrap h-full rounded-md overflow-hidden">
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
      <div id='custom-pagination' className="btn-group flex justify-center my-20">
        <ReactPaginate
          previousLabel={'«'}
          nextLabel={'»'}
          breakLabel={'...'}
          pageCount={10}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'btn-group flex gap-2 text-success'}
          pageClassName={'btn btn-success btn-sm'}
          previousClassName={'btn btn-success btn-sm'}
          nextClassName={'btn btn-success btn-sm'}
          activeClassName={'btn-active'}
        />
      </div>
    </div>
  )
}

export default TopCharacters