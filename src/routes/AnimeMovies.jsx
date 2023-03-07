import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';

const AnimeMovies = () => {
  const [animeMovies, setAnimeMovies] = useState([]);

  const getAnimeMovies = async (page) => {
    const response = await fetch(`https://gogoanime.consumet.stream/anime-movies?page=${page}`)
      .then(res => res.json())
    console.log(response)
    return (response.splice(0, 14));
  }

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const changePage = await getAnimeMovies(currentPage)
    setAnimeMovies(changePage);
  };

  useEffect(() => {
    let data = { selected: 0 }
    handlePageClick(data);
  }, [])

  return (
    <>
      <h2 className="text-md md:text-2xl text-white md:px-3">Anime Movies</h2>
      <div className="anime-movies-con custom-container grid grid-cols-3 sm:grid-cols-3 flex-wrap gap-2 py-5 md:grid-cols-5 lg:grid-cols-7 overflow-auto bg-transparent md:mt-0">
        {animeMovies.map((anime) => (
          <Link to={`${anime.animeId}/details`} className="w-full h-full">
            <div key={anime.animeId} className="card w-full h-full bg-neutral shadow-xl">
              <figure className="h-full"><img className="w-full h-full object-cover" src={anime.animeImg} alt={anime.animeTitle} /></figure>
              <div className="card-body p-3 lex-col items-start text-left justify-between overflow-hidden md:mr-4 md:justify-end">
                <h4 className="card-title text-xs mt-3 text-white">
                  {anime.animeTitle}
                </h4>
                <div className="badge text-xs badge-success">Status: {anime.animeStatus}</div>
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
          pageCount={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'btn-group flex gap-2 text-success'}
          pageClassName={'btn btn-success btn-sm'}
          previousClassName={'btn btn-success btn-sm'}
          nextClassName={'btn btn-success btn-sm'}
          activeClassName={'btn-active'}
        />
      </div>
    </>
  )
}

export default AnimeMovies