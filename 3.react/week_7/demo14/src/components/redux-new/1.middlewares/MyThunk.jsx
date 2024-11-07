import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPosts = createAsyncThunk(`posts/fetchposts`,
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        const data = await response.data;
        return data
    }
)