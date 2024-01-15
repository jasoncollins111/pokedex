import { useState } from "react";
import { pokedexSearch, selectHistory, selectStatus } from "./pokedexSlice";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Box, Form, TextInput, Button } from 'grommet';
import { PokedexCard } from "./PokedexCard";
import { PokedexHistory } from "./PokedexHistory";

export function Pokedex() {
  const dispatch = useAppDispatch();
  const searchStatus = useAppSelector(selectStatus);
  const historyStatus = useAppSelector(selectHistory);
  const [searchTerm, setSearchTerm] = useState<string>('pikachu');

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
      <Box flex justify="center" direction="row">
        {historyStatus.length > 0 && <PokedexHistory/>}
      </Box>
    </Box>
  );
}
