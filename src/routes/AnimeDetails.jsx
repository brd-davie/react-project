import { useLoaderData } from "react-router-dom";
import { getPopAnimeDetails } from "../anime";

export default function AnimeDetails() {
  const anime = useLoaderData();

  return (
    <div id="anime" className="p-0 py-5 md:pt-8">
      <div className="anime-wrapper flex flex-col md:flex-row">
        <img className="w-full h-96 object-cover md:h-fit md:max-w-sm md:w-2/5" src={anime.title} alt={anime.title} />
        <div className="anime-info mt-5 p-0 md:px-6 md:w-full md:m-0">
          <h2 className="text-4xl border-b-2 pb-4 font-bold text-white">{anime}</h2>
          <p className="my-4 text-2xl font-bol text-white">{anime}</p>
          <p className="text-md text-success">Rating: {anime}</p>
          <p className="text-md text-success my-5 text-white"><strong>Status:</strong> {anime}</p>
          <p className="text-md text-success my-5 text-white"><strong>Number of Episodes: </strong> {anime}</p>
          <p className="text-md text-justify text-white"><strong className="text-success">Synopsis: </strong> <br />{anime}</p>
        </div>
      </div>
    </div >
  );
}

export async function loader({ params }) {
  const animeDetails = getPopAnimeDetails(params.id);
  console.log(animeDetails);
  return animeDetails;
}