import { useState } from "react";
import { pokedexSearch, selectPokemon } from "./pokedexSlice";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {Box, Form, TextInput, Button} from 'grommet';

export function Pokedex() {
  const dispatch = useAppDispatch();
  const pokemonDetails = useAppSelector(selectPokemon);
  const [searchTerm, setSearchTerm] = useState<string>('pikachu');

  function handleSearch(){
    return dispatch(pokedexSearch(searchTerm.toLowerCase()));
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
    setSearchTerm(event.target.value);
  }

  return (
    <Box>
      <Box>
        <Form onSubmit={handleSearch}>
          <Box>
            <TextInput
              onChange={handleInputChange}
            />
          <Button
            primary
            label='Search Pokemon'
            type='submit'
          />
          </Box>
        </Form>
      </Box>
      <p>{pokemonDetails.name}</p>
    </Box>
  );
}
