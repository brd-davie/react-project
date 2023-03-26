
import AnimeList from "../components/AnimeList"

const SeasonSpring = (page) => {
  return (
    <AnimeList api={`https://api.jikan.moe/v4/seasons/2022/spring`} title='Spring 2022' page={page} />
  )
}

export default SeasonSpring