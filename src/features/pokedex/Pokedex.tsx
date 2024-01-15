import { useState } from "react";
import { pokedexSearch } from "./pokedexSlice";
import { useAppDispatch } from '../../app/hooks';
import {Box, Form, TextInput, Button} from 'grommet';
import { PokedexCard } from "./PokedexCard";
export function Pokedex() {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState<string>('pikachu');

  function handleSearch(){
    return dispatch(pokedexSearch(searchTerm.toLowerCase()));
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
    setSearchTerm(event.target.value);
  }

  return (
    <Box>
      <Box flex justify="center" direction="row">
        <Form onSubmit={handleSearch}>
          <Box width="medium" margin="small">
            <TextInput
              onChange={handleInputChange}
              placeholder="Search for Pokemon"
            />
          <Button
            primary
            label='Search Pokemon'
            margin="small"
            type='submit'
          />
          </Box>
        </Form>
      </Box>
      {<PokedexCard/>}
    </Box>
  );
}
