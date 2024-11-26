import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import postsReducer from './postsSlice';
import cartReducer from './cartSlice';
const store=configureStore({
    reducer:{
      counter:counterReducer,
      posts:postsReducer,
      cart:cartReducer
    }
})
export default store;