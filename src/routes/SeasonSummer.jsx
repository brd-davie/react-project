
import AnimeList from "../components/AnimeList"

const SeasonSummer = (page) => {
  return (
    <AnimeList api={`https://api.jikan.moe/v4/seasons/2022/summer`} title='Summer 2022' page={page} />
  )
}

export default SeasonSummer