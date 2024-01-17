import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { fetchAbilityDetails } from '../pokedexAPI';

interface PokemonMoveState {
  status: 'idle' | 'loading' | 'failed' | 'fulfilled';
  ability: string;
};

const initialState: PokemonMoveState = {
    status: 'idle',
    ability: ''
};

export const abilitySearch = createAsyncThunk(
  'pokedex/fetchAbilityDetails',
  async (url: string) => {
    const response = await fetchAbilityDetails(url);
    return response;
  }
);

export const abilitySlice = createSlice({
  name: 'pokemonAbility',
  initialState,
  reducers: {
    clearAbility: state => {
        state.ability = '';
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(abilitySearch.pending, (state) => {
        state.status = 'loading';
        state.ability = '';
      })
      .addCase(abilitySearch.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.ability = action.payload;
        state.status = 'idle'
      })
      .addCase(abilitySearch.rejected, (state) => {
        state.status = 'failed';
      })
  },
});

export const selectAbility = (state: RootState) => {
    return state.pokemonAbility.ability
};
export const {clearAbility} = abilitySlice.actions;

export default abilitySlice.reducer;
