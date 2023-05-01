import React, {useEffect} from 'react'
import { SideBarInstructor } from '../SideBar/SideBarInstructor'
import { Box } from '@mui/material'
import InstructorDashboard from '../Dashboard/InstructorDashboard'
import { useDispatch, useSelector } from 'react-redux'
import { Course, getInstructorCourses } from '../../Store/courseSlice'
import {SideBarStudent} from "../SideBar/SideBarStudent";
import CourseDashboard from "./CourseDashboard";

type Props = {}

const InstructorPage = (props: Props) => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.security.user);
  const courses = useSelector((state : any) => state.course.courses);

  useEffect(() => {
    dispatch(getInstructorCourses(user.id));
  },[])

  return (
      <Box className="container">
          <Box className="sidebar">
              <SideBarInstructor/>
          </Box>
          <Box>
              <CourseDashboard courses={courses}/>
          </Box>
      </Box>
  )
}

export default InstructorPage