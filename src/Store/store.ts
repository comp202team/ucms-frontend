import { configureStore } from "@reduxjs/toolkit";
import securityslice from "./securityslice";


const store = configureStore({
    reducer: {
        security: securityslice, 
    }
});


export default store;
