import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './features/settings/settingSlice'

export const store = configureStore({
  reducer: {
    settings:settingsReducer,
  },
});