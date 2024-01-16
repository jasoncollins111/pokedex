import axios from "axios";

interface Ability{
  ability: {
    name: string;
  }
}

export async function fetchPokemon(pokemonName: string) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const {abilities, name, height, weight, sprites, species, moves} = response.data;
  const pokemonSpecies = species.name;
  const sprite = sprites.other.dream_world['front_default'];
  const abilityMap = abilities.map((action: Ability)  =>{
    return action.ability.name;
  });
  return {abilities: abilityMap, name, height, weight, sprite, species: pokemonSpecies, moves};
}

export async function fetchMoveDetails(url: string) {
  const response = await axios.get(url);
  const effect = get(['effect_entries', '0', 'short_effect'], response?.data);
  return effect;
}


//Function to retrieve a deeply nested value from an object. Many of the pokemon api values are nested and create bloat.
function get(path:any[], data:any){
  return path.reduce((contents, lookup) =>{
    return (contents && contents[lookup]) ? contents[lookup] : null
  }, data)
}
