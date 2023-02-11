export async function getPopularAnimes() {
  let popular_anime =
		await fetch("https://gogoanime.consumet.stream/popular")
			.then((response) => response.json())
			.then((animelist) => animelist);

  return popular_anime ?? null;
}