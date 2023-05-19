import { createSlice } from '@reduxjs/toolkit';
import RocketsData from './api';

const initialState = {
  rockets: [],
};
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    RocketReservation: (state, { payload }) => {
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id === payload) return { ...rocket, booked: !rocket.booked };
        return rocket;
      });
      return { ...state, rockets };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(RocketsData.fulfilled, (state, action) => ({
        ...state,
        rockets: action.payload,
        status: false,
      }));
  },
});
export const { RocketReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
