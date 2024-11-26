import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchPosts=createAsyncThunk(`posts/fetchposts`,
    async ()=>{
        const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
        const data=await res.data;
        return data;
    }
)