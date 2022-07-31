import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import setAuthorizationToken from "../../auth/auth";

export const uploadImageAsync = createAsyncThunk("images/uploadImageAsync/", async (data) => {
    const res = await axios.post("http://localhost:8000/api/images/upload", data);
    return res.data;

})

export const updateImageAsync = createAsyncThunk("images/updateImageAsync/", async (data) => {
    const res = await axios.post("http://localhost:8000/api/images/update/" + data.id, data);
    return res.data;
})

export const imageSlice = createSlice({
    name: "images",
    initialState: {
        items:[],
        isLoading: true,
        isUpdated:false,
    },

    reducers: {},


    extraReducers: {
        [uploadImageAsync.pending]: (state, action) => {
            state.isLoading = true;
        },

        [uploadImageAsync.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.items.push(action.payload.file)
        },
        [uploadImageAsync.rejected]: (state, action) => {
            state.isLoading = false;
        },
        [updateImageAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [updateImageAsync.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.items.push(action.payload)
        },
        
        [updateImageAsync.rejected]: (state, action) => {
            state.isLoading = false;
        },
    },
})

export const selectImage = (state) => state.users.items;
export default imageSlice.reducer;

