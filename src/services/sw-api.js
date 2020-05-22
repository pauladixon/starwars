
const STARSHIP_ENDPOINT = 'https://swapi.dev/api/starships/'

export function getAllStarships() {
  return fetch(STARSHIP_ENDPOINT)
    .then((res) => res.json())
    .then((json) => json.results)
}

