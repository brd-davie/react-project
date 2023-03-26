import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import AnimeGif from './AnimeGif';
import AnimeSlick from './AnimeSlick';

const Seasons = () => {
  const [year, setYear] = useState('2022');
  const [season, setSeason] = useState('winter');
  const [seasons, setSeasons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSeasons = async (year, season, page) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/seasons/${year}/${season}?page=${page}&limit=24`)
        .then(res => res.json());
      console.log(response.data);
      setIsLoading(false);
      return (response.data);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      // handle the error, e.g. by setting an error message state
    }
  };


  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const changePage = await getSeasons(year, season, currentPage)
    setSeasons(changePage);
  };

  useEffect(() => {
    if (year && season) {
      getSeasons(year, season);
      let data = { selected: 0 }
      handlePageClick(data);
    }
  }, [year, season]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
    getSeasons(year, season);
  };

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
    getSeasons(year, season);
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen"><AnimeGif /></div>
  }

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='custom-title_border_left text-[22px] md:text-2xl text-white opacity-[.6] md:px-3'>Seasons</h2>
        <div className='flex items-center justify-end gap-3'>
          <select className="select select-sm bg-black text-white max-w-xs" value={year} onChange={handleYearChange}>
            {/* <option value="">Year</option> */}
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
          </select>
          <select className="select select-sm bg-black text-white max-w-xs" value={season} onChange={handleSeasonChange}>
            {/* <option value="">Season</option> */}
            <option value="winter">Winter</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="spring">Spring</option>
          </select>
        </div>
      </div>
      <div id="season_anime" className="custom-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 py-5 gap-3 md:px-0 bg-transparent md:mt-0">
        {seasons.map((anime, index) => (
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
            </div>
          </Link>
        ))}
      </div>
      <Pagination handlePageClick={handlePageClick} />
      <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/now?limit=12`} header='Ongoing' link={`${'/anime/ongoing'}`} />
      <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/upcoming?limit=12`} header='Upcoming' link={`${'/anime/upcoming'}`} />
    </div>
  )
}

export default Seasons