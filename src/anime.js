//KITSU ANIME API
export async function getTrendingAnime() {
  let trending_anime = await fetch("https://api.jikan.moe/v4/top/anime")
    .then((response) => response.json())

  return trending_anime ?? null;
};

//KITSU ANIME API
export async function getAnime(id) {
  console.log(id, 'get anime function');
  let anime_details =
    await fetch(`https://kitsu.io/api/edge/anime/${id}`)
      .then((response) => response.json())
      .then((animelist) => animelist);

  console.log(anime_details, 'anime details')

  return anime_details.data ?? null;
}

//GOGO ANIME API
export async function getAnimeMovies() {
  let anime_movies =
    await fetch("https://gogoanime.consumet.stream/anime-movies")
      .then((response) => response.json())
  return anime_movies ?? null;
}

//GOGO ANIME API
export async function getAnimeMoviesDetails(id) {
  let anime_movies_details =
    await fetch(`https://gogoanime.consumet.stream/anime-details/${id}`)
      .then((response) => response.json())
      .then((animelist) => animelist);

  return anime_movies_details ?? null;
}

//GOGO ANIME API
export async function getTopAnime() {
  let anime_top =
    await fetch("https://gogoanime.consumet.stream/top-airing")
      .then((response) => response.json())
      .then((animelist) => console.log(animelist));

  return anime_top ?? null;
}


export async function genre(genre) {
  let anime_genre =
    await fetch(`https://gogoanime.consumet.stream/genre/${genre}`)
      .then((response) => response.json())
      .then((animelist) => console.log(animelist));

  return anime_genre ?? null;
}


