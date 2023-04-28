import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Coords = {
  lat: number;
  lng: number;
};

const initialState = {
  coords: {
    lat: 0,
    lng: 0,
  },
};

export const coords = createSlice({
  name: "coords",
  initialState,
  reducers: {
    reset: () => initialState,
    assign: (state, action: PayloadAction<Coords>) => {
      state.coords = action.payload;
    },
  },
});

export const { reset, assign } = coords.actions;
export default coords.reducer;
