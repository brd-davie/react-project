
import AnimeList from "../components/AnimeList"

const UpcomingAnime = (page) => {
  return (
    <AnimeList api={`https://api.jikan.moe/v4/seasons/upcoming`} title='Upcoming' page={page} />
  )
}

export default UpcomingAnime