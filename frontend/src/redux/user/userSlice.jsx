import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { Navigate } from "react-router";
import setAuthorizationToken from "../../auth/auth";

export const loginAsync = createAsyncThunk("users/loginAsnyc/", async (data) => {
    const res = await axios.post("http://localhost:8000/login", data);
    return res.data;

})

export const registerAsync = createAsyncThunk("users/registerAsnyc/", async (data) => {
    const res = await axios.post("http://localhost:8000/api/users/new", data);
    return res.data;
})

export const getUserAsync = createAsyncThunk("users/getUserAsnyc/", async (id) => {
    const res = await axios.get("http://localhost:8000/api/users/getById/" + id);
    return res.data;
})

export const getCurrentUserAsync = createAsyncThunk("users/GetCurrentUserAsync/", async () => {
    const res = await axios.get("http://localhost:8000/api/users/getByToken/", {
        headers: {
            'Authorization': `token ${localStorage.getItem("token")}`
        }
    })
    return res.data;
})

export const editUserAsync = createAsyncThunk("users/editUserAsnyc/", async (data) => {
    const res = await axios.post("http://localhost:8000/api/users/update/" + data.id, data, {
        headers: {
            'Authorization': `token ${localStorage.getItem("token")}`
        }
    })
    return res.data;
})


export const userSlice = createSlice({
    name: "users",
    initialState: {
        items: [],
        current:[],
        CurrentUser: JSON.parse(localStorage.getItem("user_data")),
        isLoggined: false,
        isLoading: true,
        autharized: false,
        regiterError: null,
        isUpdated: false,
        isRegistered: false,
        isSignOut: false,
    },

    reducers: {
        signOut: (state) => {
            localStorage.removeItem("token");
            localStorage.removeItem("logined");
            localStorage.removeItem("user_data");
            state.isSignOut = true;
        }
    },


    extraReducers: {
        [registerAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [registerAsync.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.CurrentUser = action.payload;
        },
        [registerAsync.rejected]: (state, action) => {
            state.items.push(action.payload)
            state.isLoading = false;
            state.isRegistered = true;
        },
        [loginAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [loginAsync.fulfilled]: (state, action) => {
            state.isLoggined = true;
            state.isLoading = false;
            state.autharized = true;
            localStorage.setItem("logined", true);
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem('user_data', JSON.stringify(action.payload));
        },

        [loginAsync.rejected]: (state, action) => {
            state.isLoggined = false;
            state.isLoading = false;
        },
        [editUserAsync.fulfilled]: (state, action) => {
            state.isUpdated = true;
            localStorage.setItem("user_data", JSON.stringify(action.payload))
        },
        [getUserAsync.fulfilled]: (state, action) => {
            state.current = []
            state.current.push(action.payload)
            
        },

        [getCurrentUserAsync.fulfilled]: (state, action) => {
            localStorage.setItem('user_data', JSON.stringify(action.payload));
        },
    },
})

export const { signOut } = userSlice.actions;
export const selectUser = (state) => state.users.CurrentUser;
export default userSlice.reducer;

