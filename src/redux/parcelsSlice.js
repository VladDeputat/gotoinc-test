import { createSlice } from "@reduxjs/toolkit";

export const parcelsSlice = createSlice({
  name: "parcels",
  initialState: {
    requests: [],
    error: "",
  },
  reducers: {
    createRequestAction: (state, action) => {
      state.requests = [...state.requests, action.payload];
    },
    deleteRequestAction: (state, action) => {
      state.requests = [
        ...state.requests.filter((req) => req.requestId !== action.payload),
      ];
    },
    catchErrorAction: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createRequestAction, deleteRequestAction, catchErrorAction } =
  parcelsSlice.actions;

export default parcelsSlice.reducer;
