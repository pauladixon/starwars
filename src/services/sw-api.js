const STARSHIP_ENDPOINT = 'https://swapi.dev/api/starships/'

const getAllStarships = () => {
    return fetch(STARSHIP_ENDPOINT)
        .then((res) => res.json())
        .then((json) => json.results)
}

export default getAllStarships