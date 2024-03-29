import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimeGif from "../components/AnimeGif";
import Pagination from "../components/Pagination";

const AnimeList = ({ api, title }) => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [order, setOrder] = useState('');
  // const [sort, setSort] = useState('false');
  const [type, setType] = useState('tv');
  // const [year, setYear] = useState('');
  const [userList, setUserList] = useState([]);

  const addTo = (anime) => {
    let newArray = [...userList, anime];
    console.log("newArray: ", newArray);
    setUserList(newArray);
  };

  const fetchAnime = async (type, page) => {
    console.log('Running');
    const response = await fetch(`${api}?type=${type}&page=${page}&limit=24`)
      .then(res => res.json());
    console.log(response.data)
    setIsLoading(false);
    return (response.data);
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const changePage = await fetchAnime(type, currentPage);
    setAnimeList(changePage);
  };

  const myList = new Array([]);
  console.log(myList);

  const handleTypeChange = (event) => {
    setIsLoading(true)
    setType(event.target.value);
    fetchAnime(type);
  };

  // const handleSortChange = (event) => {
  //   setSort(event.target.value);
  //   fetchAnime(sort, type);
  // };

  useEffect(() => {
    let data = { selected: 0 }
    handlePageClick(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);


  if (isLoading) {
    return <div className="flex items-center justify-center h-screen"><AnimeGif /></div>
  }

  return (
    <>
      {
        animeList ? (
          <div className="rounded-lg lg:py-5">
            <div className="flex justify-between flex-col md:flex-row lg:px-5 lg:pb-3">
              <h2 className="custom-title_border_left text-[22px] md:text-[30px] md:text-2xl text-white opacity-[.6] uppercase md:px-3 pl-3">{type}</h2>
              <div className="mt-3 md:mt-0">
                {/* <select className="select-sm glass opacity-[.8] rounded-md text-white max-w-xs mr-3" value={order} onChange={handleOrderChange}>
                  <option value="score">Score</option>
                  <option value="rank">Rank</option>
                  </select> */}
                <select className="select-sm glass opacity-[.8] cursor-pointer rounded-md text-white max-w-xs mr-3" value={type} onChange={handleTypeChange}>
                  <option value="tv" className="text-black">TV</option>
                  <option value="movie" className="text-black">Movie</option>
                  <option value="ova" className="text-black">OVA</option>
                  <option value="ona" className="text-black">ONA</option>
                  <option value="special" className="text-black">Special</option>
                  <option value="music" className="text-black">Music</option>
                </select>
                {/* <select className="select-sm glass opacity-[.8] rounded-md text-white max-w-xs mr-3" value={year} onChange={handleYearChange}>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                </select> */}
                {/* <select className="select-sm glass opacity-[.8] cursor-pointer rounded-md text-white max-w-xs" value={sort} onChange={handleSortChange}>
                  <option value={true} >ASC</option>
                  <option value={false}>DESC</option>
                </select> */}
              </div>
            </div>
            <div id="popular_anime" className="custom-container grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 py-5 gap-3 gap-y-[30px] md:px-3 md:mt-0">
              {animeList.map((anime, index) => (
                <div className="relative" key={index}>
                  <Link to={`${anime.mal_id}/anime-details`} className="c-card w-full h-full z-[2]" key={anime.mal_id}>
                    <div className="anime-list-card card h-full bg-neutral shadow-xl rounded-md">
                      <figure className="c-figure h-full"><img className="w-full h-full object-cover" src={anime.images.jpg.large_image_url} alt={anime.animeTitle} /></figure>
                      <div className="c-card-body card-body pb-2 px-3 pt-3 md:py-3 flex-col items-start  text-left justify-between md:justify-end">
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
                              <>
                                <div className="rating rating-sm text-sm flex items-center">
                                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 mr-2" />
                                  <span className="text-xs text-success">{anime.score}%</span>
                                </div>
                              </>
                            ) : ''
                            }
                          </div>
                        </div>
                      </div>
                      {/* <Link to={`${anime.mal_id}/anime-details`} className="btn btn-xs glass">View Details</Link> */}
                    </div>
                  </Link>
                  <button className='bg-black text-white z-[5] w-full z-10' onClick={() => addTo(anime)}>Add to List</button>
                </div>
              ))}
            </div>
            <Pagination handlePageClick={handlePageClick} />
          </div>
        ) : ''
      }
      {/* <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/now?limit=12`} header='Ongoing' link={`${'/anime/ongoing'}`} /> */}
      {/* <AnimeNews id='50709' /> */}
    </>
  );
}

export default AnimeList