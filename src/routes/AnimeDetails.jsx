import { Form, Link, useLoaderData } from "react-router-dom";
import { getAnime } from "../anime";

export default function Contacts() {
  const anime = useLoaderData();

  return (
    <div id="anime" className="p-0 py-5 md:pt-8">
      <div className="anime-wrapper flex flex-col md:flex-row">
        <img src={anime.animeImg} alt="" />
        <div className="anime-info mt-5 p-0 md:px-6">
          <h2 className="text-4xl">{anime.animeTitle}</h2>
          <p className="my-4 text-2xl">{anime.type}</p>
          <p className="content">{anime.synopsis}</p>
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