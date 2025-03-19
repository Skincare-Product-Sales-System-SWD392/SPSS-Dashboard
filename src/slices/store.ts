import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './dashboard/reducer';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    // ... other reducers
  },
});

// These two lines are important:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;