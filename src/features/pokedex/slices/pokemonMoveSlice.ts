import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { fetchMoveDetails } from '../pokedexAPI';

interface PokemonMoveState {
  status: 'idle' | 'loading' | 'failed' | 'fulfilled';
  moveEffect: string;
};

const initialState: PokemonMoveState = {
    status: 'idle',
    moveEffect: '',
};

export const moveSearch = createAsyncThunk(
  'pokedex/fetchMoveDetails',
  async (url: string) => {
    const response = await fetchMoveDetails(url);
    return response;
  }
);

export const moveSlice = createSlice({
  name: 'pokemonMove',
  initialState,
  reducers: {
    clearMove: state => {
      state.moveEffect = '';
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(moveSearch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(moveSearch.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.moveEffect = action.payload;
      })
      .addCase(moveSearch.rejected, (state) => {
        state.status = 'failed';
      })
  },
});

export const selectMove = (state: RootState) => state.pokemonMove.moveEffect;
export const {clearMove} = moveSlice.actions;

export default moveSlice.reducer;
