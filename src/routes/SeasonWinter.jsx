
import AnimeList from "../components/AnimeList"

const SeasonWinter = (page) => {
  return (
    <AnimeList api={`https://api.jikan.moe/v4/seasons/2022/winter`} title='Winter 2022' page={page} />
  )
}

export default SeasonWinter