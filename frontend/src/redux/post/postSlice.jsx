import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const getPostsAsync = createAsyncThunk("posts/getPostsAsync", async () => {
    const res = await axios.get("http://localhost:8000/api/posts/getAll");
    return res.data;
})

export const addPostsAsync = createAsyncThunk("posts/addPostsAsync", async (data) => {
    const res = await axios.post("http://localhost:8000/api/posts/new", data, {
        headers: {
            'Authorization': `token ${localStorage.getItem("token")}`
        }
    })
    console.log(data);
    return res.data;
})

export const updatePostsAsync = createAsyncThunk("posts/updatePostsAsync", async (data) => {
    const res = await axios.post("http://localhost:8000/api/posts/update/"+ data.id, data, {
        headers: {
            'Authorization': `token ${localStorage.getItem("token")}`
        }
    })
    return res.data;
})

export const getUserPostsAsync = createAsyncThunk("posts/getUserPostsAsync", async (data) => {
    const res = await axios.get("http://localhost:8000/api/posts/getByUserId/" + data.id)
    return res.data;
})

export const getPostAsync = createAsyncThunk("posts/getPostAsync", async (data) => {
    const res = await axios.get("http://localhost:8000/api/posts/getById/" + data.postId)
    return res.data;
})

export const deletePostsAsync = createAsyncThunk("posts/deletePostsAsync", async (id) => {
    const res = await axios.delete("http://localhost:8000/api/posts/delete/" + id, {
        headers: {
            'Authorization': `token ${localStorage.getItem("token")}`
        }
    })
    return res.data;
})


export const postSlice = createSlice({
    name: "posts",
    initialState: {
        items: [],
        currentPostId: {},
        currentPost: JSON.parse(localStorage.getItem("current_post")),
        posted:false,
    },
    reducers: {
    },
    extraReducers: {
        [getPostsAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
        [getUserPostsAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
        },

        [addPostsAsync.fulfilled]: (state, action) => {
            localStorage.setItem("currentId", action.payload.photoId)
            state.items.push(action.payload);
            console.log(action.payload)
            state.posted = true;
        }, 
        [addPostsAsync.rejected]: (state, action) => {
            console.log(action.payload)
        },
        [getPostAsync.fulfilled]: (state, action)=>{
            state.items.push(action.payload)
            localStorage.setItem("current_post",JSON.stringify(action.payload))
        }
    }

})

export const { toggle } = postSlice.actions;
export const selectPost = (state) => state.posts.items;
export default postSlice.reducer;

