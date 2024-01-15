import { pokedexSearch, selectPokemon } from "./pokedexSlice";
import { useAppSelector, useAppDispatch } from '../../app/hooks';

export function Pokedex() {
  const dispatch = useAppDispatch();
  const pokemonDetails = useAppSelector(selectPokemon);
  
  function handleSearch(){
    return dispatch(pokedexSearch('pikachu'));
  }

  return (
    <div>
      <button onClick={handleSearch}>Fetch Pokemon</button>

    </div>
  );
}
