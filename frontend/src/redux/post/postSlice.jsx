import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const getPostsAsync = createAsyncThunk("posts/getPostsAsync", async () => {
    const res = await axios.get("http://localhost:8000/api/posts/getAll");
    return res.data;
})

export const addPostsAsync = createAsyncThunk("posts/addPostsAsync", async (data) => {
    const res = await axios.post("http://localhost:8000/api/posts/new", data,{
    headers: {
        'Authorization': `token ${localStorage.getItem("token")}`
      }})
    return res.data;
})


export const postSlice = createSlice({
    name: "posts",
    initialState: {
        items: [],
    },
    reducers: {
          },
    extraReducers: {
        [getPostsAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
        },

        [addPostsAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload);
        },
    }

})

export const { toggle } = postSlice.actions;
export const selectPost = (state) => state.posts.items;
export default postSlice.reducer;

