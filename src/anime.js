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