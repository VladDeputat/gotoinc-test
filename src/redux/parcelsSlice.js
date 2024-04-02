import { createSlice } from "@reduxjs/toolkit";

export const parcelsSlice = createSlice({
  name: "parcels",
  initialState: {
    curUser: "",
    requests: [],
  },
  reducers: {
    setCurrentUserAction: (state, { payload }) => {
      state.curUser = payload;
    },
    createRequestAction: (state, { payload }) => {
      state.requests = [...state.requests, payload];
    },
    updateRequestAction: (state, { payload }) => {
      const updatedReqArray = state.requests.map((item) =>
        item.requestId === payload.requestId ? { ...item, ...payload } : item,
      );
      state.requests = updatedReqArray;
    },
    deleteRequestAction: (state, { payload }) => {
      state.requests = [
        ...state.requests.filter((req) => req.requestId !== payload),
      ];
    },
  },
});

export const {
  setCurrentUserAction,
  createRequestAction,
  deleteRequestAction,
  updateRequestAction,
} = parcelsSlice.actions;

export default parcelsSlice.reducer;
