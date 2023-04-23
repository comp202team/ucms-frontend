import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Libs/api"

interface Course {
    courseId: number;
    courseCode: string;
    courseName: string;
    courseDesc: string;
    creditHours: number;
    department: Department;
    instructor: Instructor;
}

interface Department {
    departmentId: number;
    departmentName: string;
    departmentCode: string;
    departmentHead: string;
}

interface Instructor {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;

}

interface CourseState{
    courses: Course[];
    course: Course;
    loading: boolean;
}

const initialState: CourseState = {
    courses: [],
    course: {} as Course,
    loading: true,
};



export const getStudentCourses : any = createAsyncThunk("auth/login", async (loginCred, thunkApi) => {
    try{
        const response = await api.get("/courses");
        return response.data;
    }
    catch(error : any){
        thunkApi.rejectWithValue(error.response?.data );
    }
})


export const courseSlice : any = createSlice({
    name:"course",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getStudentCourses.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getStudentCourses.fulfilled, (state, action) => {
            state.loading = false;
            state.courses = action.payload;
        })
        builder.addCase(getStudentCourses.rejected, (state, action) => {
            state.loading = false;
        })
    }
})


export default courseSlice.reducer;