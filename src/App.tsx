import { Pokedex } from './features/pokedex/Pokedex';
import { Header, Text } from 'grommet';

function App() {
  return (
    <div>
      <Header background="antiqueWhite">
        <Text size="large" margin="medium">Pokedex</Text>
      </Header>

      <Pokedex/>
    </div>
  );
}

export default App;
