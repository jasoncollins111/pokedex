import { selectPokemon } from "./pokedexSlice";
import { useAppSelector } from '../../app/hooks';
import {Box, Card, CardHeader, Image, Text, Heading} from 'grommet';

export function PokedexCard() {
  const pokemonDetails = useAppSelector(selectPokemon);

  const abilityMap = pokemonDetails.abilities.map((ability, idx) => {
    return <Text key={idx}>{ability}</Text>
  });

  return (
    <Card
        width="medium"
        height="medium"
        alignSelf="center"
        background="antiqueWhite"
        margin="medium"
    >
        <CardHeader alignSelf="center">
            <Heading level="3">{pokemonDetails.name.toUpperCase()}</Heading>
        </CardHeader>
        <Image fit="contain" src={pokemonDetails.sprite}/>
        <Box justify="end" pad="xsmall">
            <Text>Weight: {pokemonDetails.weight}</Text>
            <Text>Height: {pokemonDetails.height}</Text>
        </Box>
        <Box>
            <Text alignSelf="center" style={{textDecoration: 'underline'}}>Abilities</Text>
            <Box direction="row" justify="around" margin="small">
                {abilityMap}
            </Box>
        </Box>
    </Card>
  );
}
