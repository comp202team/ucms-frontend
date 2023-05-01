import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Libs/api"

export interface Course {
    id: number;
    courseCode: string;
    courseName: string;
    courseDesc: string;
    creditHours: number;
    department: Department;
    instructor: Instructor;
}

export interface Department {
    departmentId: number;
    departmentName: string;
    departmentCode: string;
    departmentHead: string;
}

export interface Instructor {
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



export const getStudentCourses : any = createAsyncThunk("courses/getStudentCourses", async (studentId, thunkApi) => {
    try{
        const response = await api.get(`/courses?userId=${studentId}`);
        return response.data;
    }
    catch(error : any){
        thunkApi.rejectWithValue(error.response?.data );
    }
})


export const getInstructorCourses : any = createAsyncThunk("courses/getInstructorCourses", async (instructorId, thunkApi) => {
    try{
        const response = await api.get(`/courses?userId=${instructorId}`);
        return response.data;
    }
    catch(error : any){
        thunkApi.rejectWithValue(error.response?.data );
    }
})

export const getCourseById : any = createAsyncThunk("courses/getCourseById", async (courseId, thunkApi) => {
    try{
        const response = await api.get(`/courses/${courseId}`);
        return response.data;
    }
    catch(error : any){
        thunkApi.rejectWithValue(error.response?.data );
    }
})

export const createCourse : any = createAsyncThunk("courses/createCourse", async (courseCred, thunkApi) => {
    try{
        const response = await api.post("/courses", courseCred);
        return response.data;
    }
    catch(error : any){
        thunkApi.rejectWithValue(error.response?.data );
    }
})

export const updateCourse : any = createAsyncThunk("courses/updateCourse", async (courseCred : Course, thunkApi) => {
    try{
        const response = await api.put(`/courses/${courseCred.id}`, courseCred);
        return response.data;
    }
    catch(error : any){
        thunkApi.rejectWithValue(error.response?.data );
    }
})

export const addStudentToCourse : any = createAsyncThunk("courses/addStudent", async (enrollmentCreateDto : any, thunkApi) => {
    try{
        const response = await api.post(`/enrollments`, enrollmentCreateDto);
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

        builder.addCase(getInstructorCourses.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getInstructorCourses.fulfilled, (state, action) => {
            state.loading = false;
            state.courses = action.payload;
        })
        builder.addCase(getInstructorCourses.rejected, (state, action) => {
            state.loading = false;
        })

        builder.addCase(getCourseById.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getCourseById.fulfilled, (state, action) => {
            state.loading = false;
            state.course = action.payload;
        })
        builder.addCase(getCourseById.rejected, (state, action) => {
            state.loading = false;
        })

        builder.addCase(createCourse.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(createCourse.fulfilled, (state, action) => {
            state.loading = false;
            state.course = action.payload;
        })
        builder.addCase(createCourse.rejected, (state, action) => {
            state.loading = false;  
        })

        builder.addCase(updateCourse.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(updateCourse.fulfilled, (state, action) => {
            state.loading = false;
            state.course = action.payload;
        })
        builder.addCase(updateCourse.rejected, (state, action) => {
            state.loading = false;  
        })
    }
})


export default courseSlice.reducer;