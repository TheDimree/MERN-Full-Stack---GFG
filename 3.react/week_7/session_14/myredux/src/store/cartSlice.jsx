import { createSlice} from '@reduxjs/toolkit';
const initialStateData={
    cartData:localStorage.getItem('cartdata')!=undefined?JSON.parse(localStorage.getItem('cartdata')):[]
}
export const cartSlice=createSlice({
    name:'cart',
    initialState:initialStateData,
    reducers:{
        UPDATE_CART:(state,actions)=>{
            state.cartData=actions.payload
        },
       
    }
})
//methods in reducers are work as a actions 
export const {UPDATE_CART}=cartSlice.actions;
export default cartSlice.reducer;