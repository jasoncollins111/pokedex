import { useState } from "react";
import { pokedexSearch, selectStatus } from "./slices/pokedexSlice";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Box, Form, Text, TextInput, Button } from 'grommet';
import { PokedexCard } from "./components/PokedexCard";
import { selectMove, clearMove } from "./slices/pokemonMoveSlice";
import { selectAbility, clearAbility } from "./slices/pokemonAbilitySlice";

export function Pokedex() {
  const dispatch = useAppDispatch();
  const searchStatus = useAppSelector(selectStatus);
  const moveDescription = useAppSelector(selectMove);
  const abilityDescription = useAppSelector(selectAbility);
  const [searchTerm, setSearchTerm] = useState<string>('');

  function handleSearch(){
    dispatch(clearAbility())
    dispatch(clearMove())
    dispatch(pokedexSearch(searchTerm.toLowerCase()));
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
      <Box width="large" alignSelf="center" border={!!moveDescription || !!abilityDescription} pad="small">
        <Text color="green">{moveDescription || abilityDescription}</Text>
      </Box>
      {searchStatus === 'failed' && 
        <Text
          color="red"
          alignSelf="center
        >
          No Pokemon with that name was found. Please try your search again.
        </Text>}
    </Box>
  );
}
