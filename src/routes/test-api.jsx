
import { useLoaderData } from "react-router-dom";
import { getPopularAnimes } from "../test-api";

export default function Contact() {
  const popular_animes = useLoaderData();

  return (
    <div id="popular_animes">
            <ul>
              {popular_animes.map((anime) => (

                <li key={anime.animeId}>
      <div>
				<h4>{ anime.animeTitle}</h4>
        <img
          key={anime.animeId}
          src={anime.animeImg || null}
        />
      </div>
                </li>
              ))}
            </ul>
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