import AnimeGenre from './anime'

export default AnimeGenre = () => {
  return (
    <div className="genre">

    </div>
  );
}


export async function loader() {
  let anime_genre = [];
  await AnimeGenre().then((result) => {
    anime_genre = result
  })

  console.log(anime_genre)

  return anime_genre;
}