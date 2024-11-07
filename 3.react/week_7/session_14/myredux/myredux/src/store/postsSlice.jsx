import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./myThunk";
const initialvalues={
    posts:[],
    isLoading:false,
    error:null
}
export const postsSlice=createSlice(
    {
      name:'posts',
      initialState:initialvalues,
      reducers:{},
      extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.posts=action.payload
        })
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            state.isLoading=false;
            state.posts=action.error.message
        })
      }
    }
)
export default postsSlice.reducer;