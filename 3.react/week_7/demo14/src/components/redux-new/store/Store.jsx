import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice' // Correct default import
import postsReducer from '../features/counter/PostsSlice'
import cartReducer from '../features/cart/CartSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts:postsReducer,
    cart:cartReducer,
  },
})