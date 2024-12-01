import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "idle",
};

// parameters = action type and payload callback function
// -> automatically creates three actionType: actionloadpost.pending loadpost.rejected, loadpost.fulfilled
// -> payload callback function returns a promise
export const loadPost = createAsyncThunk("post/loadpost", async () => {
  try {
    const {data: {posts}} = await axios.get("https://dummyjson.com/posts");
    console.log("returning: ", posts);
    return posts;
  } catch (error) {
    return error;
  }
});

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
//         [loadPost.rejected]: (state) => {
//             state.status = 'rejected';
//         },
//     }
// })

// * As per the latest version of Redux Toolkit, you need to use the builder callback notation for extraReducers.

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadPost.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.posts = action.payload;
      })
      .addCase(loadPost.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default postSlice.reducer;
