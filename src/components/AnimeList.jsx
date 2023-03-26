import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimeGif from "../components/AnimeGif";
import Pagination from "../components/Pagination";
import AnimeNews from "./AnimeNews";
import AnimeSlick from "../components/AnimeSlick";

const AnimeList = ({ api, title, }) => {

  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUpcomingAnime = async (page) => {
    console.log('Running');
    const response = await fetch(`${api}?&page=${page}&limit=24`)
      .then(res => res.json());
    console.log(response.data)
    setIsLoading(false);
    return (response.data);
  };


  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const changePage = await fetchUpcomingAnime(currentPage)
    setAnimeList(changePage);
  };


  useEffect(() => {
    setAnimeList();
    let data = { selected: 0 }
    handlePageClick(data);
  }, [])

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen"><AnimeGif /></div>
  }

  return (
    <>
      {
        animeList ? (
          <div>
            <h2 className="custom-title_border_left text-[22px] md:text-2xl text-white opacity-[.6] md:px-3">{title}</h2>
            <div id="popular_anime" className="custom-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 py-5 gap-3 md:px-3 bg-transparent md:mt-0">
              {animeList.map((anime, index) => (
                <Link to={`${anime.mal_id}/anime-details`} className="c-card w-full h-full" key={index}>
                  <div className="anime-list-card card h-full bg-neutral shadow-xl rounded-md">
                    <figure className="c-figure h-full"><img className="w-full h-full object-cover" src={anime.images.jpg.image_url} alt={anime.animeTitle} /></figure>
                    <div className="c-card-body card-body pb-2 px-3 pt-3 md:py-2 flex-col items-start  text-left justify-between md:justify-end">
                      <h4 className="card-title text-xs text-white">{anime.title.slice(0, 20)}</h4>
                      <div className="flex items-center justify-between w-full">
                        {anime.scored_by ? (
                          <p className="text-error text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-error mr-1">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                            {anime.scored_by}M
                          </p>
                        ) : ''}
                        <div>
                          {anime.score ? (
                            <div className="rating rating-sm text-sm flex items-center">
                              <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 mr-2" />
                              <span className="text-xs text-success">{anime.score}%</span>
                            </div>
                          ) : ''
                          }
                        </div>
                      </div>
                    </div>
                    {/* <Link to={`${anime.mal_id}/anime-details`} className="btn btn-xs glass">View Details</Link> */}
                  </div>
                </Link>
              ))}
            </div>
            <Pagination handlePageClick={handlePageClick} />
            <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/now`} header='Ongoing' link={`${'/anime/ongoing'}`} />
            <AnimeNews id='50709' />
          </div>
        ) : ''
      }
    </>
  );
}

export default AnimeList