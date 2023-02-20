export async function getPopularAnimes() {
  let popular_anime =
    await fetch("https://gogoanime.consumet.stream/popular")
      .then((response) => response.json())
      .then((animelist) => animelist);

  return popular_anime ?? null;
};

export async function getAnime(id) {
  let anime_details =
    await fetch(`https://gogoanime.consumet.stream/anime-details/${id}`)
      .then((response) => response.json())
      .then((animelist) => animelist);

  return anime_details ?? null;
}

export async function getAnimeMovies() {
  let anime_movies =
    await fetch("https://gogoanime.consumet.stream/anime-movies")
      .then((response) => response.json())
  return anime_movies ?? null;
}

export async function getAnimeMoviesDetails(id) {
  let anime_movies_details =
    await fetch(`https://gogoanime.consumet.stream/anime-details/${id}`)
      .then((response) => response.json())
      .then((animelist) => animelist);

  return anime_movies_details ?? null;
}

export async function getTopAnime() {
  let anime_top =
    await fetch("https://gogoanime.consumet.stream/top-airing")
      .then((response) => response.json())
      .then((animelist) => console.log(animelist));

  return anime_top ?? null;
}