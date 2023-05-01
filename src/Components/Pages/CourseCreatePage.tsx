import React, { useState } from "react";
import {Course, createCourse, Department, getInstructorCourses, Instructor} from "../../Store/courseSlice";
import {Button, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

interface CourseFormProps {}

export const CourseForm: React.FC<CourseFormProps> = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state : any) => state.security.user);

    const departments : any = [];

    const [course, setCourse] = useState({
        courseCode: "",
        courseName: "",
        courseDesc: "",
        creditHours: 0,
        department: {
            departmentId: 0,
            departmentName: "",
            departmentCode: "",
            departmentHead: "",
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createCourse(course));
        dispatch(getInstructorCourses(user.id));
        navigate("/dashboard");
    };

    const handleCourseChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setCourse((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleCreditHoursChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const creditHours = Number(e.target.value);
        setCourse((prevState) => ({ ...prevState, creditHours }));
    };

    const handleDepartmentChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setCourse((prevState) => ({
            ...prevState,
            department: { ...prevState.department, [name]: value },
        }));
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

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h4" margin={2}>Create Course</Typography>
            <TextField
                label="Course Code"
                name="courseCode"
                value={course.courseCode}
                onChange={handleChange}
                required
                fullWidth
                sx={{margin:2}}
            />
            <TextField
                label="Course Name"
                name="courseName"
                value={course.courseName}
                onChange={handleChange}
                required
                fullWidth
                sx={{margin:2}}
            />
            <TextField
                label="Course Description"
                name="courseDesc"
                value={course.courseDesc}
                onChange={handleChange}
                required
                fullWidth
                sx={{margin:2}}
            />
            <TextField
                label="Credit Hours"
                name="creditHours"
                type="number"
                value={course.creditHours}
                onChange={handleChange}
                required
                fullWidth
                sx={{margin:2}}
            />
            <TextField
                select
                label="Department"
                name="department"
                value={course.department.departmentId}
                onChange={handleSelectChange}
                fullWidth
                sx={{margin:2}}
            >
                {departments.map((dep : any) => (
                    <option key={dep.departmentId} value={dep.departmentId}>
                        {dep.departmentName}
                    </option>
                ))}
            </TextField>
            <Button type="submit" variant="contained" color="primary" sx={{margin:2}}>
                Create
            </Button>
        </form>
    );
};