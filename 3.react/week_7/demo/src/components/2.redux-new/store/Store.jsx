import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice' // Correct default import

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
