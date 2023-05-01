import React, { useState } from "react";
// @ts-ignore
import { useHistory } from "react-router-dom";
import {Course, createCourse, Department, Instructor} from "../../Store/courseSlice";
import {Button, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";

interface CourseFormProps {}

const CourseForm: React.FC<CourseFormProps> = () => {
    const dispatch = useDispatch();

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
        instructor: {
            id: 0,
            firstName: "",
            lastName: "",
            email: "",
            username: "",
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createCourse(course));
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
    const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const { name, value } = event.target;
        setCourse((prevCourse) => ({
            ...prevCourse,
            [name]: departments.find((dep) => dep.departmentId === value),
        }));
    };
    const handleInstructorChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setCourse((prevState) => ({
            ...prevState,
            instructor: { ...prevState.instructor, [name]: value },
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h4">Create Course</Typography>
            <TextField
                label="Course Code"
                name="courseCode"
                value={course.courseCode}
                onChange={handleChange}
                required
                fullWidth
            />
            <TextField
                label="Course Name"
                name="courseName"
                value={course.courseName}
                onChange={handleChange}
                required
                fullWidth
            />
            <TextField
                label="Course Description"
                name="courseDesc"
                value={course.courseDesc}
                onChange={handleChange}
                required
                fullWidth
            />
            <TextField
                label="Credit Hours"
                name="creditHours"
                type="number"
                value={course.creditHours}
                onChange={handleChange}
                required
                fullWidth
            />
            <TextField
                select
                label="Department"
                name="department"
                value={course.department.departmentId}
                onChange={handleSelectChange}
                required
                fullWidth
            >
                {departments.map((dep) => (
                    <option key={dep.departmentId} value={dep.departmentId}>
                        {dep.departmentName}
                    </option>
                ))}
            </TextField>
            <TextField
                select
                label="Instructor"
                name="instructor"
                value={course.instructor.firstName}
                onChange={handleInstructorChange}
                required
                fullWidth
            >
                {instructors.map((ins) => (
                    <option key={ins.instructorId} value={ins.instructorId}>
                        {ins.instructorName}
                    </option>
                ))}
            </TextField>
            <Button type="submit" variant="contained" color="primary">
                Create
            </Button>
        </form>
    );
};