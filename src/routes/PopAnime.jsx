import { useLoaderData, Link } from "react-router-dom";
import { getTrendingAnime } from "../anime";
import ReactPaginate from "react-paginate";

export default function PopularAnime() {
  const trending_anime = useLoaderData();

  return (
    <>
      <h2 className="text-md md:text-2xl text-white md:px-3">Trending Anime</h2>
      <div id="popular_anime" className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 py-5 gap-2 md:px-3 overflow-auto bg-transparent md:mt-0">
        {trending_anime.data.map((anime) => (
          <Link to={`${anime.url}`} target='_blank' className="w-full h-full">
            <div key={anime.id} className="card h-full bg-neutral shadow-xl">
              <figure className="h-full"><img className="w-full h-full object-cover" src={anime.images.jpg.image_url} alt={anime.animeTitle} /></figure>
              <div className="card-body px-3 pt-3 md:py-7 flex-col items-start justify-between whitespace-nowrap text-ellipsis overflow-hidden md:justify-end">
                <h4 className="card-title text-xs text-white">
                  {anime.title}
                </h4>
                <div className="badge text-xs badge-success">Rank: {anime.rank}</div>
                <div className="badge text-xs badge-success">Rating: {anime.score}</div>
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

    </>
  );
}

export async function loader() {
  let trending_anime = [];
  await getTrendingAnime().then((result) => {
    trending_anime = result
  })

  console.log(trending_anime)

  return trending_anime;
}