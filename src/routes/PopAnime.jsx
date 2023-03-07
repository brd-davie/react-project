import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PopularAnime() {

  const [topAnime, setTopAnime] = useState([]);

  const fetchTrendingAnime = async (page) => {
    let response = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}&limit=21`)
      .then(res => res.json())
    console.log(response.data)
    return (response.data);
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const changePage = await fetchTrendingAnime(currentPage)
    setTopAnime(changePage);
  };

  useEffect(() => {
    let data = { selected: 0 }
    handlePageClick(data);
  }, [])


  return (
    <>
      <h2 className="text-md md:text-2xl text-white md:px-3">Trending Anime</h2>
      <div id="popular_anime" className="custom-container grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 py-5 gap-2 md:px-3 overflow-auto bg-transparent md:mt-0">
        {topAnime.map((anime) => (
          <Link to={`${anime.mal_id}/details`} key={anime.mal_id} className="w-full h-full">
            <div className="card h-full bg-neutral shadow-xl">
              <figure className="h-full"><img className="w-full h-full object-cover" src={anime.images.jpg.image_url} alt={anime.animeTitle} /></figure>
              <div className="card-body px-3 pt-3 md:py-5 flex-col items-start  text-left justify-between  overflow-hidden md:justify-end">
                <h4 className="card-title text-xs text-white">
                  {anime.title}
                </h4>
                <div className="badge text-xs badge-success">Rank: #{anime.rank}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div id="custom-pagination" className="btn-group flex justify-center my-20">
        <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
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

    </>
  );
}