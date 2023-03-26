
import AnimeList from "../components/AnimeList"

const OngoingAnime = (page) => {
  return (
    <AnimeList api={`https://api.jikan.moe/v4/seasons/now`} title='Ongoing' page={page} />
  )
}

export default OngoingAnime