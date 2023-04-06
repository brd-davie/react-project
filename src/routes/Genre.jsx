import AnimeGenre from "../components/AnimeGenre"

const GenreList = () => {

  return (
    <div>
      {
        AnimeGenre.length ? (
          <AnimeGenre />
        ) : ''
      }
    </div>
  )
}

export default GenreList
