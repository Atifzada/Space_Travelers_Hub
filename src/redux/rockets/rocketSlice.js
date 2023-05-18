import { createSlice } from '@reduxjs/toolkit';
import RocketsData from './api';

const initialState = {
  rockets: [],
};
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(RocketsData.fulfilled, (state, action) => ({
        ...state,
        rockets: action.payload,
        status: false,
      }));
  },
});

export default rocketsSlice.reducer;
