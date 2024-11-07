import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from '../../1.middlewares/MyThunk'

const initialValues = {
    posts: [],
    isLoading: false,
    error: null
}

export const postsSlice = createSlice(
    {
        name: 'posts',
        initialState: initialValues,
        reducers: {},
        extraReducers: (builder)=>{
            builder.addCase(fetchPosts.pending, (state)=>{
                state.isLoading=true;
            })
            builder.addCase(fetchPosts.fulfilled, (state, action)=>{
                state.isLoading=false;
                state.posts=action.payload
            })
            builder.addCase(fetchPosts.rejected, (state, action)=>{
                state.isLoading=false;
                state.posts=action.error.message
            })
        }

    }

)

export default postsSlice.reducer;