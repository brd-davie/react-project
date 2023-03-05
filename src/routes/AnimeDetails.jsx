import { useLoaderData } from "react-router-dom";
import { getAnime } from "../anime";

export default function Contacts() {
  const anime = useLoaderData();

  return (
    <div id="anime" className="p-0 py-5 md:pt-8">
      <div className="anime-wrapper flex flex-col md:flex-row">
        <img className="w-full h-96 object-cover md:h-fit md:max-w-sm md:w-2/5" src={anime.attributes.posterImage.original} alt="" />
        <div className="anime-info mt-5 p-0 md:px-6 md:w-full md:m-0">
          <h2 className="text-4xl border-b-2 pb-4 font-bold text-white">{anime.attributes.titles.en_jp}</h2>
          <p className="my-4 text-2xl font-bol text-white">{anime.attributes.showType}</p>
          <p className="text-md text-success">Rating: {anime.attributes.averageRating}</p>
          <p className="text-md text-success my-5 text-white"><strong>Status:</strong> {anime.attributes.status}</p>
          <p className="text-md text-success my-5 text-white"><strong>Number of Episodes: </strong> {anime.attributes.episodeCount}</p>
          <p className="text-md text-justify text-white"><strong className="text-success">Synopsis: </strong> <br />{anime.attributes.synopsis}</p>
        </div>
      </div>
    </div >
  );
}

export async function loader({ params }) {
  const animeDetails = getAnime(params.id);
  console.log(animeDetails);
  return animeDetails;
}