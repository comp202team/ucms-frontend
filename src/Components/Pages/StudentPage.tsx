import React, {useState, useEffect} from 'react'
import {SideBarStudent} from "../SideBar/SideBarStudent";
import {Box, Button} from "@mui/material";
import "../../Styles/StudentPage.css"
import StudentDashboard from '../Dashboard/StudentDashboard';
import {useDispatch, useSelector} from 'react-redux';
import {Course, getStudentCourses} from '../../Store/courseSlice';
import CourseDashboard from "./CourseDashboard";

type Props = {}

const StudentPage = (props: Props) => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.security.user);
    const courses = useSelector((state: any) => state.course.courses);

    useEffect(() => {
        dispatch(getStudentCourses(user.id));
    }, [])
    return (
             <Box className="container">
                <Box className="sidebar">
                    <SideBarStudent/>
                </Box>
                <Box>
                    <CourseDashboard courses={courses}/>
                </Box>
            </Box>
     )
}

export default StudentPage
