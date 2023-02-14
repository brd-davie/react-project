import { Form, Link, useLoaderData } from "react-router-dom";
import { getAnime } from "../anime";

export default function Contacts() {
  const anime = useLoaderData();

  return (
    <div id="anime" className="p-0 py-5 md:pt-8">
      <div className="anime-wrapper flex flex-col md:flex-row">
        <img className="w-full h-96 object-cover md:h-fit md:max-w-sm md:w-2/5" src={anime.animeImg} alt="" />
        <div className="anime-info mt-5 p-0 md:px-6 md:w-full md:m-0">
          <h2 className="text-4xl border-b-2 pb-4 font-bold	">{anime.animeTitle}</h2>
          <p className="my-4 text-2xl font-bold	">{anime.type}</p>
          <p className="text-md my-5"><strong>Status:</strong> {anime.status}</p>
          <p className="text-md my-5"><strong>Number of Episodes: </strong> {anime.totalEpisodes}</p>
          <p className="text-md text-justify"><strong>Synopsis: </strong> <br />{anime.synopsis}</p>
        </div>
      </div>
    </div >
  );
}

export async function loader({ params }) {
  const animeDetails = getAnime(params.animeId);
  console.log(animeDetails);
  return animeDetails;
}