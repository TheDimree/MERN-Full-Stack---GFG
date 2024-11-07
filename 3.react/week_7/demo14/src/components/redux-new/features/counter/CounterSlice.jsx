import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        },
    },
})

console.log("counter slice: ", counterSlice)    //check this
// Action creators are generated for each case reducer function
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions

// Default export the reducer, so it can be used directly in the store
export default counterSlice.reducer