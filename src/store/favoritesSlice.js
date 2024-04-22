import { createSlice } from '@reduxjs/toolkit';

const favoritesInitialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesInitialState,
  reducers: {
    addFavorite(state, action) {
      state.items = [...state.items, action.payload];
    },
    removeFavorite(state, action) {
      state.items = state.items.filter(({ _id }) => _id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
