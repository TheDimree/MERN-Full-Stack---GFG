import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // * Syncing with loacal storage
    cartData: localStorage.getItem('cart') !== undefined ? JSON.parse(localStorage.getItem('cart')) : null,
}
 
export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        update_cart: (state, action) => {
            state.cartData = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { update_cart } = cartSlice.actions

// Default export the reducer, so it can be used directly in the store
export default cartSlice.reducer