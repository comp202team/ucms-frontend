import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    loading: true,
    isAuthenticated: false,
    isRegistered:false,
    token: "",
    user: {},
    err:"",
};

const securitySlice = createSlice({
    name:"security",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(login.pending, (state, action) => {
        //     state.loading = true;
        // })
    }
})