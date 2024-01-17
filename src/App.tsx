import { Pokedex } from './features/pokedex/Pokedex';
import { Header, Text } from 'grommet';
import { PokedexHistory } from './features/pokedex/components/PokedexHistory';
import { useAppSelector } from './app/hooks';
import { selectHistory } from './features/pokedex/slices/pokedexSlice';

function App() {
  const historyStatus = useAppSelector(selectHistory);
  
  return (
    <div>
      <Header background="antiqueWhite">
        <Text size="large" margin="medium">Pokedex</Text>
        {historyStatus.length > 0 && <PokedexHistory/>}
      </Header>

      <Pokedex/>
    </div>
  );
}

export default App;
