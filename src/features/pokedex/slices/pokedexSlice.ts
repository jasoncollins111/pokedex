import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { fetchPokemon } from '../pokedexAPI';

interface PokemonState {
  pokemonDetails: Pokemon;
  status: 'idle' | 'loading' | 'failed' | 'fulfilled';
  history: string[];
}

interface Pokemon {
  abilities: [{name: string, url: string}];
  name: string;
  height: string;
  weight: string;
  sprite: string;
  species: string;
  moves: [Moves];
}

interface Moves {
  move: {
    name: string;
    url: string;
  }
}

const initialState: PokemonState = {
  pokemonDetails: {
    abilities: [{name: '', url: ''}],
    name: '',
    height: '',
    weight: '',
    sprite: '',
    species: '',
    moves: [{move:{name: '', url: ''}}]
  },
  status: 'idle',
  history: []
};

export const pokedexSearch = createAsyncThunk(
  'pokedex/fetchPokemon',
  async (name: string) => {
    const response = await fetchPokemon(name);
    return response;
  }
);

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(pokedexSearch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(pokedexSearch.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.pokemonDetails = action.payload;
        !state.history.includes(action.payload.name) && state.history.push(action.payload.name);
      })
      .addCase(pokedexSearch.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectPokemon = (state: RootState) => state.pokedex.pokemonDetails;
export const selectStatus = (state: RootState) => state.pokedex.status;
export const selectHistory = (state: RootState) => state.pokedex.history;

export default pokedexSlice.reducer;
