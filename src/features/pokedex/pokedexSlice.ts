import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchPokemon } from './pokedexAPI';


const initialState = {
  pokemon: 0,
  status: 'idle'
};

export const pokedexAsync = createAsyncThunk(
  'pokedex/fetchPokemon',
  async () => {
    const response = await fetchPokemon();
    return response;
  }
);

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(pokedexAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(pokedexAsync.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(pokedexAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectPokemon = (state: RootState) => state.pokedex;

export default pokedexSlice.reducer;
