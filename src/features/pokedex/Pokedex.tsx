import { useState } from "react";
import { pokedexSearch, selectHistory, selectStatus } from "./slices/pokedexSlice";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Box, Form, Text, TextInput, Button } from 'grommet';
import { PokedexCard } from "./components/PokedexCard";
import { PokedexHistory } from "./components/PokedexHistory";
import { selectMove } from "./slices/pokemonSlice";

export function Pokedex() {
  const dispatch = useAppDispatch();
  const searchStatus = useAppSelector(selectStatus);
  const historyStatus = useAppSelector(selectHistory);
  const moveDescription = useAppSelector(selectMove);

  const [searchTerm, setSearchTerm] = useState<string>('');

  function handleSearch(){
    return dispatch(pokedexSearch(searchTerm.toLowerCase()));
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
    setSearchTerm(event.target.value);
  }

  return (
    <Box skeleton={searchStatus === 'loading'}>
      <Box flex justify="center" direction="row">
        <Form onSubmit={handleSearch}>
          <Box width="medium" margin="small">
            <TextInput
              onChange={handleInputChange}
              placeholder="Enter name of Pokemon"
            />
          <Button
            primary
            label='Search Pokedex'
            margin={{top: "small", left: "xlarge", right: "xlarge"}}
            pad="small"
            type='submit'
          />
          </Box>
        </Form>
      </Box>
      {searchStatus === 'fulfilled' && <PokedexCard/>}
      <Text alignSelf='center' color="green">{moveDescription}</Text>
      {searchStatus === 'failed' && <Text color="red" alignSelf="center">No Pokemon with that name was found. Please try your search again.</Text>}
      <Box flex justify="center" direction="row">
        {historyStatus.length > 0 && <PokedexHistory/>}
      </Box>

    </Box>
  );
}
