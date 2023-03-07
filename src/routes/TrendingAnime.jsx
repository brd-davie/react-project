import { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
import Pagination from "../components/Pagination";

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
        {topAnime.map((anime, index) => (
          <Link to={`${anime.url}/details`} className="w-full h-full">
            <div key={index} className="card h-full bg-neutral shadow-xl">
              <figure className="h-full"><img className="w-full h-full object-cover" src={anime.images.jpg.image_url} alt={anime.animeTitle} /></figure>
              <div className="card-body px-3 pt-3 md:py-2 flex-col items-start  text-left justify-between  md:justify-end">
                <h4 className="card-title text-xs text-white">{anime.title}</h4>
                <div className="flex items-center justify-between w-full">
                  <p className="text-error text-xs"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-error mr-2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                    </path>
                  </svg>
                    {anime.scored_by}M
                  </p>
                  <p>
                    <div className="rating rating-sm text-sm flex items-center">
                      <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 mr-2" />
                      <span className="text-xs text-success">{anime.score}</span>
                    </div>
                  </p>
                </div>
                {/* <div>
                  {anime.studios.slice(0, 1).map((anime) => (
                    <p className=" text-xs text-success"><strong>Studio:</strong>{anime.name}</p>
                  ))}
                </div> */}
              </div>
              <label htmlFor="my-modal-4" className="btn btn-xs btn-accent m-2">View Trailer</label>
              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box p-0 shadow-xl relative max-w-4xl h-3/4" htmlFor="">
                  <iframe src={anime.trailer.embed_url} className="w-full h-full"></iframe>
                </label>
              </label>
            </div>
          </Link>
        ))}
      </div>
      <Pagination handlePageClick={handlePageClick} />
    </>
  );
}