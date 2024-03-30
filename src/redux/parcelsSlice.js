import { createSlice } from "@reduxjs/toolkit";

export const parcelsSlice = createSlice({
  name: "parcels",
  initialState: {
    requests: [],
    error: "",
  },
  reducers: {
    createRequest: (state, action) => {
      state.requests = [...state.requests, action.payload];
    },
    catchError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createRequest, catchError } = parcelsSlice.actions;

export default parcelsSlice.reducer;
