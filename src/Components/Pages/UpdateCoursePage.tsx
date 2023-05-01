import React, { useState, useEffect } from "react";
import {addStudentToCourse, Course, createCourse, Department, getInstructorCourses, Instructor, updateCourse} from "../../Store/courseSlice";
import {Button, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

interface Props {
    course: Course
}

export const UpdateCoursePage: React.FC<Props> = ({course}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state : any) => state.security.user);

    const departments : any = [];
    const [courseState, setCourse] = useState({
        id: course.id,
        courseCode: course.courseCode,
        courseName:  course.courseName,
        courseDesc: course.courseDesc,
        creditHours: course.creditHours,
        department: {
            departmentId: 0,
            departmentName: "",
            departmentCode: "",
            departmentHead: "",
        },
    });

    const [studentEmail, setStudentEmail] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(updateCourse(courseState));
        dispatch(getInstructorCourses(user.id));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
    };
    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setCourse((prevCourse) => ({
            ...prevCourse,
            [name]: departments.find((dep : any) => dep.departmentId === value),
        }));
    };

    const handleAddStudent = () => {
        dispatch(addStudentToCourse({email: studentEmail, courseId: course.id}))
    }

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h4" margin={2}>Create Course</Typography>
            <TextField
                label="Course Code"
                name="courseCode"
                value={courseState.courseCode}
                onChange={handleChange}
                required
                fullWidth
                sx={{margin:2}}
            />
            <TextField
                label="Course Name"
                name="courseName"
                value={courseState.courseName}
                onChange={handleChange}
                required
                fullWidth
                sx={{margin:2}}
            />
            <TextField
                label="Course Description"
                name="courseDesc"
                value={courseState.courseDesc}
                onChange={handleChange}
                required
                fullWidth
                sx={{margin:2}}
            />
            <TextField
                label="Credit Hours"
                name="creditHours"
                type="number"
                value={courseState.creditHours}
                onChange={handleChange}
                required
                fullWidth
                sx={{margin:2}}
            />
            <Button type="submit" variant="contained" color="primary" sx={{margin:2}}>
                Update
            </Button>

            <TextField
                label = "Add Student"
                name  = "Add Student"
                type={"email"}
                value={studentEmail}
                onChange={(e: any) => setStudentEmail(e.target.value)}
                sx={{margin:2, display:"block"}}
            >
            </TextField>

            <Button onClick={() => handleAddStudent()} variant="contained" color="primary" sx={{margin:2}}>
                Add Student
            </Button>
        </form>
    );
};