const NUMBERPAGE : number = 50;

type Pokemon = {
  name: string;
  url: string;
};

export const fetchListPokemon = async (currentPage: number): Promise<Pokemon[]> => {
  const response: Response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${NUMBERPAGE}&offset=${(currentPage - 1) * NUMBERPAGE}`
  );
  const data = await response.json();
  return data.results;
};
