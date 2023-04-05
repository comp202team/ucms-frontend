import {AsyncThunkAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../Libs/api";
import { create } from "domain";


const initialState = {
    loading: true,
    isAuthenticated: false,
    token: "",
    user: {},
    err:"",
};

export const login : any = createAsyncThunk("auth/login", async (loginCred, thunkApi) => {
    try{
        const response = await api.post("/auth/login", loginCred);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        return response.data;
    }
    catch(error : any){
        thunkApi.rejectWithValue(error.response?.data );
    }
})

export const register : any = createAsyncThunk("auth/register", async (registerCred, thunkApi) => {
    try{
        const response = await api.post("/auth/register", registerCred);
        return response.data;
    }
    catch(error : any){
        thunkApi.rejectWithValue(error.response?.data );
    }
})

export const getCurrentUser : any = createAsyncThunk("auth/getcurrentuser", async (registerCred, thunkApi) => {
    try{
        const response = await api.get("/auth/getcurrentuser");
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
    }
    catch(error : any){
        thunkApi.rejectWithValue(error.response?.data );
    }
})


export const securitySlice : any = createSlice({
    name:"security",
    initialState,
    reducers: {
        logout(state) {
            state.isAuthenticated = false;
            localStorage.removeItem("token");
            localStorage.removeItem("user")
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.loading = false;
            state.isAuthenticated = true;
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isAuthenticated = false;
            state.user = {};
            state.token = "";
            state.loading = false;
            state.err = "Invalid Credentials"
        })


        builder.addCase(register.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.err="";
        })
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.err="Username or Email existed."
        })


        builder.addCase(getCurrentUser.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.isAuthenticated = true;
        })
        builder.addCase(getCurrentUser.rejected, (state, action) => {
            state.isAuthenticated = false;
            state.user = {};
            state.token = "";
            state.loading = false;
        })
    }
})

export default securitySlice.reducer;