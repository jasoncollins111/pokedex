import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pokedexReducer from '../features/pokedex/slices/pokedexSlice';
import pokemonMoveReducer from '../features/pokedex/slices/pokemonMoveSlice';
import pokemonAbilityReducer from '../features/pokedex/slices/pokemonAbilitySlice';

export const store = configureStore({
  reducer: {
    pokedex: pokedexReducer,
    pokemonMove: pokemonMoveReducer,
    pokemonAbility: pokemonAbilityReducer
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
