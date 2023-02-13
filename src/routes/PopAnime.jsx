
import { useLoaderData, Link } from "react-router-dom";
import { getPopularAnimes } from "../anime";

export default function PopularAnime() {
  const popular_animes = useLoaderData();

  return (
    <div id="popular_animes" className="grid grid-cols-2 flex-wrap gap-5 my-10 md:grid-cols-3 lg:grid-cols-4">
      {popular_animes.map((anime) => (
        <Link to={`${anime.animeId}/details`} className="w-full">
          <div key={anime.animeId} className="card w-full h-full bg-base-100 shadow-xl p-2">
            <figure className="h-full"><img className="w-full h-full" src={anime.animeImg} alt={anime.animeTitle} /></figure>
            <div className="card-body p-0 md:justify-end">
              <h4 className="card-title text-xs flex-col items-start mt-5 whitespace-nowrap text-ellipsis overflow-hidden md:mr-4">
                {anime.animeTitle}
                <div className="badge badge-secondary">{anime.releasedDate}</div>
              </h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export async function loader({ params }) {
  let popular_animes = []
  await getPopularAnimes().then((result) => {
    popular_animes = result
  })

  console.log(popular_animes)

  return popular_animes;
}