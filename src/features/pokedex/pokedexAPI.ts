import axios from "axios";

interface Ability{
  name: string;
}

export async function fetchPokemon(pokemonName: string) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const {abilities, name, height, weight, sprites} = response.data;
  const sprite = sprites.other.dream_world['front_default'];
  
  const abilityMap = abilities.map((ability: Ability)  =>{
    return ability.name;
  });
  
  return {abilities: abilityMap, name, height, weight, sprite};
}
