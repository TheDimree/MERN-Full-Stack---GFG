// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';

// const initialState = {
//     posts: [],
//     status: 'idle',

// }

// // parameters = action type and payload callback function
//     // -> automatically creates three actionType: actionloadpost.pending loadpost.rejected, loadpost.fulfilled
//     // -> payload callback function returns a promise
// export const loadPost = createAsyncThunk('post/loadpost', async ()=> {   
//     try {
//         const data = await axios.get('https://dummyjson.com/posts')
//         console.log(data)
//         return data;
//     } catch(error) {
//         return error;
//     }
// })

// const postSlice = createSlice({
//     name: 'posts',
//     initialState,
//     reducers: {},
//     extraReducers: {
//         [loadPost.pending]: (state) => {
//             state.status = 'loading';
//         },
//         [loadPost.fulfilled]: (state, action) => {
//             state.status ='fulfilled';
//             state.posts = action.payload;
//         },
//         [loadPost.pending]: (state, action) => {
//             state.status = 'error';
//         },
//     }
// })

// export default postSlice.reducer;