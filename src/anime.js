
//GOGO ANIME API
export async function getPopDetails(id) {
  let anime_movies_details = await fetch(`https://gogoanime.consumet.stream/anime-details/${id}`)
    .then((response) => response.json())
    .then((animelist) => animelist);
  console.log(anime_movies_details)
  return anime_movies_details ?? null;
}

export async function getCharacterDetails(id) {
  let character_details = await fetch(`https://api.jikan.moe/v4/top/characters/${id}`)
    .then((response) => response.json())
    .then((animelist) => animelist);
  console.log(character_details)

  return character_details ?? null;
}

export const getTrendingDetails = async (id) => {
  const response = await fetch(`https://api.jikan.moe/v4/top/anime/${id}`)
    .then(res => res.json())
  console.log(response.data)
  return response.data ?? null;
};
