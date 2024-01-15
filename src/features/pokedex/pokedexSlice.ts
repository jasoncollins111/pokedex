import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchPokemon } from './pokedexAPI';

interface PokemonState {
  pokemonDetails: Pokemon;
  status: 'idle' | 'loading' | 'failed' | 'fulfilled';
}

interface Pokemon {
  abilities: string[];
  name: string;
  height: string;
  weight: string;
  sprite: string;
}

const initialState: PokemonState = {
  pokemonDetails: {
    abilities: [],
    name: '',
    height: '',
    weight: '',
    sprite: ''
  },
  status: 'idle'
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
      })
      .addCase(pokedexSearch.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectPokemon = (state: RootState) => state.pokedex.pokemonDetails;

export default pokedexSlice.reducer;
