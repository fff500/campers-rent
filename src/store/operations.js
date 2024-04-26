import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_URL, ITEMS_PER_PAGE } from './constants';

axios.defaults.baseURL = BASE_URL;

export const fetchCampers = createAsyncThunk(
  'campers/fetchPage',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get('/campers', {
        params: { page, limit: ITEMS_PER_PAGE },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
