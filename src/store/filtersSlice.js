import { createSlice } from '@reduxjs/toolkit';

const initialFiltersState = {
  locationFilter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFiltersState,
  reducers: {
    setLocationFilter(state, action) {
      state.locationFilter = action.payload;
    },
  },
});

export const { setLocationFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
