import { createSlice } from "@reduxjs/toolkit";

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


export const courseSlice : any = createSlice({
    name:"course",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
    }
})


export default courseSlice.reducer;