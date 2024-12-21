// app/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import routinesReducer from './slices/routinesSlice';

export const store = configureStore({
  reducer: {
    routines: routinesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
