import AnimeList from "../components/AnimeList"

const TrendingAnime = (page) => {
  return (
    <AnimeList api={`https://api.jikan.moe/v4/top/anime`} title='Trending' page={page} />
  )
}

export default TrendingAnime