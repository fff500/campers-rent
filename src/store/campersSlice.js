import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const campersInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: campersInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export const campersReducer = campersSlice.reducer;