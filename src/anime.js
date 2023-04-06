//GOGO ANIME API
export async function getPopDetails(id) {
  let anime_movies_details = await fetch(`https://gogoanime.consumet.stream/anime-details/${id}`)
    .then((response) => response.json())
    .then((animelist) => animelist);
  console.log(anime_movies_details)
  return anime_movies_details ?? null;
}

export async function getCharacterDetails(id) {
  let character_details = await fetch(`https://api.jikan.moe/v4/characters/${id}/full`)
    .then((response) => response.json())
  console.log(character_details)
  return character_details.data ?? null;
}

export const getTrendingDetails = async (id) => {
  const response = await fetch(`https://api.jikan.moe/v4/top/anime/${id}`)
    .then(res => res.json())
  console.log(response.data)
  return response.data ?? null;
};

export const jikanAnimeDetails = async (id) => {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
    .then(res => res.json())
  console.log(response.data)
  return response.data ?? null;
};

// export const GenreList = async (id) => {
//   const response = await fetch(`https://api.jikan.moe/v4/anime?genres=1`)
//     .then(res => res.json());
//   console.log(response.data)
//   return (response.data) ?? null;
// };

// export const getAnimeVideos = async (id) => {
//   const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/videos`)
//     .then(res => res.json())
//   console.log(response.data)
//   return response.data ?? null;
// };


export const userData = async () => {
  try {
    const token = JSON.parse(localStorage.token);
    const response = await fetch('https://api.hattch.brdsites.com/api/v1/auth/me', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token.access_token,
      },
    })
      .then(res => res.json())
    console.log(response.data)
    return response.data ?? null
    // const data = await response.json();
    // console.log(response)
    // console.log('User:', data);
    // localStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};
