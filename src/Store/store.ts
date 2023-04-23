import { configureStore } from "@reduxjs/toolkit";
import securitySlice from "./securityslice";
import courseSlice from "./courseSlice";

const store = configureStore({
    reducer: {
        security: securitySlice,
        course: courseSlice,
    }
});

export default store;