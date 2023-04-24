import React, {useState, useEffect} from 'react'
import {SideBarStudent} from "../SideBar/SideBarStudent";
import {Box, Button} from "@mui/material";
import "../../Styles/StudentPage.css"
import StudentDashboard from '../Dashboard/StudentDashboard';
import { useDispatch, useSelector } from 'react-redux';
import { Course, getStudentCourses } from '../../Store/courseSlice';

type Props = {}

const StudentPage = (props: Props) => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.security.user);
    const courses = useSelector((state : any) => state.course.courses);

    useEffect(() => {
        dispatch(getStudentCourses(user.id));
      },[])
    return (
        <div>
            <Box className="container">
                <div className="sidebar">
                    <SideBarStudent />
                </div>
                <div className="content">
                    <div> Test Test Ttessttt</div>
                    <StudentDashboard/>
                </div>
            {/* Course'lar bu şekilde maplenebilir */}
            <div>
                Courses: <br/>
                {courses && courses.map((course : Course) => {
                    return <div>{course.courseName}</div>
                })}
            </div>
            </Box>
        </div>
    )
}

export default StudentPage
