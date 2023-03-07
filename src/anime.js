//KITSU ANIME API
export async function getAnime(id) {
  console.log(id, 'get anime function');
  let anime_details = await fetch(`https://kitsu.io/api/edge/anime/${id}`)
    .then((response) => response.json())
    .then((animelist) => animelist);

  console.log(anime_details, 'anime details')

  return anime_details.data ?? null;
}

//GOGO ANIME API
export async function getAnimeMoviesDetails(id) {
  let anime_movies_details = await fetch(`https://gogoanime.consumet.stream/anime-details/${id}`)
    .then((response) => response.json())
    .then((animelist) => animelist);

  return anime_movies_details ?? null;
}

export async function getCharacterDetails(id) {
  let character_details = await fetch(`https://api.jikan.moe/v4/top/characters/${id}`)
    .then((response) => response.json())
    .then((animelist) => animelist);
  console.log(character_details)

  return character_details ?? null;
}

export const getPopAnimeDetails = async (id) => {
  const response = await fetch(`https://api.jikan.moe/v4/top/anime/${id}`)
    .then(res => res.json())
  console.log(response.data)
  return response.data ?? null;
};
