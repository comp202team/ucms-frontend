import React, { useEffect, useState } from "react";
import {Course, createCourse, Department, getInstructorCourses, Instructor} from "../../Store/courseSlice";
import {Button, MenuItem, Select, SelectChangeEvent, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../../Libs/api"


export const CourseForm: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state : any) => state.security.user);

    const [loading, setLoading] : any = useState(true);
    const [departments, setDepartments] : Array<any> = useState([]);

    const [course, setCourse] = useState({
        courseCode: "",
        courseName: "",
        courseDesc: "",
        creditHours: 0,
        deptId: 0,
    });

    useEffect(() => {
        const getDepartments = async () => {
            const response = await api.get("/departments");
            await setDepartments(response.data);  
            setLoading(false);
            setCourse((prevCourse) => ({...prevCourse, deptId: response.data[0].departmentId}))
        }
        getDepartments();
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createCourse(course));
        dispatch(getInstructorCourses(user.id));
        navigate("/dashboard");
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
    };
    const handleSelectChange = (event: SelectChangeEvent<number>) => {
        const { name, value } = event.target;
        setCourse((prevCourse) => ({
            ...prevCourse,
            [name]: value,
        }));
    };

    return (
        <>
            {loading ? 
                <></>
            :
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
                    <Select
                        label="Department"
                        name="deptId"
                        value={course.deptId}
                        onChange={handleSelectChange}
                        fullWidth
                        sx={{margin:2}}
                    >
                        {departments.map((dep : any) => (
                            <MenuItem key={dep.departmentId} value={dep.departmentId}>
                                {dep.departmentName}
                            </MenuItem>
                        ))}
                    </Select>
                    <Button type="submit" variant="contained" color="primary" sx={{margin:2}}>
                        Create
                    </Button>
                </form>
            }
        </>
    );
};