import { configureStore } from "@reduxjs/toolkit";
import { securitySlice } from "./securityslice";

const store = configureStore({
    reducer: {
        security: securitySlice.reducer,
    }
});

export default store;