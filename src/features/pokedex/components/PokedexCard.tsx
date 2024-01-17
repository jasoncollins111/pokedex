import { useState } from "react";
import { selectPokemon } from "../slices/pokedexSlice";
import { moveSearch } from "../slices/pokemonMoveSlice";
import { abilitySearch } from "../slices/pokemonAbilitySlice";

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {Box, Button, Card, CardHeader, Menu, Image, Text, Heading} from 'grommet';

export function PokedexCard() {
  const pokemonDetails = useAppSelector(selectPokemon);
  const dispatch = useAppDispatch();
  const [menuTitle, setMenuTitle] = useState<string>('Moves')
  
  const abilityMap = pokemonDetails.abilities.map((ability, idx) => {
    return (
        <Button 
            color='blue' 
            hoverIndicator={{color: "lightBlue"}} 
            secondary key={idx} 
            onClick={()=>dispatch(abilitySearch(ability.url))}
            label={<Text color="blue">{ability.name}</Text>}
            margin="xxsmall"
        />
    )
  });

  const moveMap = pokemonDetails.moves.map((moveList, idx) => {
    return {label: moveList.move.name, onClick: ()=>{
        setMenuTitle(moveList.move.name);
        dispatch(moveSearch(moveList.move.url));
    }}
  });

  return (
    <Card
        width="medium"
        height="medium"
        alignSelf="center"
        background="antiqueWhite"
        margin="medium"
    >
        <CardHeader alignSelf="center" direction="column">
            <Heading level="3">{pokemonDetails.name.toUpperCase()}</Heading>
        </CardHeader>
        <Box alignSelf="center">
        </Box>
        <Image fit="contain" src={pokemonDetails.sprite}/>
        <Box flex direction="row" pad="small" justify="between" margin={{bottom:"-50px"}}>
            <Box margin="small">
                <Text color="" size="small">Species: {pokemonDetails.species}</Text>
                <Text color="" size="xsmall">Weight: {pokemonDetails.weight}</Text>
                <Text color="" size="xsmall">Height: {pokemonDetails.height}</Text>
            </Box>
            <Box alignSelf="baseline">
                <Menu
                    label={menuTitle}
                    items={moveMap}
                />
            </Box>

        </Box>
        <Box>
            <Text alignSelf="center" style={{textDecoration: 'underline', color: "darkRed", marginBottom: "10px"}}>Abilities</Text>
            <Box width="small" alignSelf="center">
                {abilityMap}
            </Box>
        </Box>
    </Card>
  );
}
