import { configureStore } from '@reduxjs/toolkit'
import homeSlices from './homeSlices'
export const store = configureStore({
  reducer: {
    home: homeSlices,
  },
})