import { createSlice } from '@reduxjs/toolkit';

export const parcelsSlice = createSlice({
  name: 'parcels',
  initialState: {
    orders: [],
    deliveries: [],
  },
  reducers: {
    createOrder: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
    createDelivery: (state, action) => {
      state.deliveries = [...state.deliveries, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { createOrder, createDelivery } = parcelsSlice.actions;

export default parcelsSlice.reducer;
