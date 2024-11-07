import { createSlice,createAsyncThunk} from '@reduxjs/toolkit';
const initialStateData={
    count:0
}
export const counterSlice=createSlice({
    name:'counter',
    initialState:initialStateData,
    reducers:{
        INC:(state,actions)=>{
            state.count+=actions.payload
        },
        DEC:(state,actions)=>{
            state.count-=actions.payload
        },
        RESET:(state)=>{
            state.count=0
        }
    }
})
//methods in reducers are work as a actions 
export const {INC,DEC,RESET}=counterSlice.actions;
export default counterSlice.reducer;