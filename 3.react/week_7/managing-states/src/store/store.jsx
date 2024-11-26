import { configureStore } from "@reduxjs/toolkit";
// import { configure } from "@testing-library/react";
import counterReducer from '../slices/CounterSlice'
import postReducer from '../slices/PostSlice'

export const store = configureStore({  // store has nothing but the reducer and states: reducer: { state: string}
    reducer: {
        counter: counterReducer,    // this counter is now our state variable
        // * We can also initialized multiple state variables with their reducers here. Hence, it called store.
        // filter: filterReducer, // filter state variable
        // cart: createReducer,    // cart state variable
        posts: postReducer,
    }
})