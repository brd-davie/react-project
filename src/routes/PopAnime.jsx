
import { useLoaderData, Link } from "react-router-dom";
import { getPopularAnimes } from "../anime";

export default function PopularAnime() {
  const popular_animes = useLoaderData();

  return (
    <div id="popular_animes" className="grid grid-cols-2 flex-wrap gap-5 py-5 px-3 md:grid-cols-3 lg:grid-cols-4 overflow-auto bg-transparent">
      {popular_animes.map((anime) => (
        <Link to={`${anime.animeId}/details`} className="w-full">
          <div key={anime.animeId} className="card w-full h-full bg-primary shadow-xl p-2">
            <figure className="h-auto"><img className="w-full h-full object-fit" src={anime.animeImg} alt={anime.animeTitle} /></figure>
            <div className="card-body p-0 lex-col items-start justify-between whitespace-nowrap text-ellipsis overflow-hidden md:mr-4 md:justify-end">
              <h4 className="card-title text-xs mt-3 text-white">
                {anime.animeTitle}
              </h4>
              <div className="badge text-xs badge-secondary">Release Date: {anime.releasedDate}</div>
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