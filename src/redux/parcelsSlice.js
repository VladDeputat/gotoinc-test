import { createSlice } from "@reduxjs/toolkit";

export const parcelsSlice = createSlice({
  name: "parcels",
  initialState: {
    curUser: "",
    requests: [],
    error: "",
  },
  reducers: {
    setCurrentUserAction: (state, action) => {
      state.curUser = action.payload;
    },
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
export const {
  setCurrentUserAction,
  createRequestAction,
  deleteRequestAction,
  catchErrorAction,
} = parcelsSlice.actions;

export default parcelsSlice.reducer;
