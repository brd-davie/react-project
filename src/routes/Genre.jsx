import AnimeGenre from "../components/AnimeGenre"

const GenreList = () => {

  return (
    <div>
      {
        AnimeGenre.length ? (
          <AnimeGenre />
        ) : 'test'
      }
    </div>
  )
}

export default GenreList
