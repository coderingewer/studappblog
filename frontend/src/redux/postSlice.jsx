import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const getPostsAsync = createAsyncThunk("todos/getPostsAsync", async ()=>{
    const res = await axios.get("http://localhost:8000/api/posts/getAll");
    return res.data;
})

export const postSlice = createSlice({
    name: "posts",
    initialState: {
        items: [],
    },
    reducers:{
        toggle: (state, action)=>{
            const {id} = action.payload;
            const item = state.items.find(item=> item.id === id);
            item.isCompleted = !item.isCompleted;
        },

    },
    extraReducers:{
        [getPostsAsync.fulfilled]: (state, action)=>{
            state.items = action.payload;
        }
    }
    
})

export const {toggle } = postSlice.actions;
export const selectPost = (state) => state.posts.items;
export default postSlice.reducer;

