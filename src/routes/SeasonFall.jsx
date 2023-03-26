
import AnimeList from "../components/AnimeList"

const SeasonFall = (page) => {
  return (
    <AnimeList api={`https://api.jikan.moe/v4/seasons/2022/fall`} title='Fall 2022' page={page} />
  )
}

export default SeasonFall