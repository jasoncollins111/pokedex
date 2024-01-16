import axios from "axios";

interface Ability{
  ability: {
    name: string;
  }
}

export async function fetchPokemon(pokemonName: string) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const {abilities, name, height, weight, sprites, species} = response.data;
  const pokemonSpecies = species.name;
  const sprite = sprites.other.dream_world['front_default'];
  const abilityMap = abilities.map((action: Ability)  =>{
    return action.ability.name;
  });
  
  return {abilities: abilityMap, name, height, weight, sprite, species: pokemonSpecies};
}
