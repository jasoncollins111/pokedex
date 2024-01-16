import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pokedexReducer from '../features/pokedex/slices/pokedexSlice';
import pokemonReducer from '../features/pokedex/slices/pokemonSlice';

export const store = configureStore({
  reducer: {
    pokedex: pokedexReducer,
    pokemon: pokemonReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
