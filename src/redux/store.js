import { configureStore } from '@reduxjs/toolkit';
import parcelsSlice from './parcelsSlice';

export default configureStore({
  reducer: {
    parcels: parcelsSlice,
  },
});
