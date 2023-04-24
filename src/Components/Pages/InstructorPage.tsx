import React, {useEffect} from 'react'
import { SideBarInstructor } from '../SideBar/SideBarInstructor'
import { Box } from '@mui/material'
import InstructorDashboard from '../Dashboard/InstructorDashboard'
import { useDispatch, useSelector } from 'react-redux'
import { Course, getInstructorCourses } from '../../Store/courseSlice'

type Props = {}

const InstructorPage = (props: Props) => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.security.user);
  const courses = useSelector((state : any) => state.course.courses);

  useEffect(() => {
    dispatch(getInstructorCourses(user.id));
  },[])

  return (
    <div>
      <Box className="container">
        <div className="sidebar">
            <SideBarInstructor/>
        </div>
        <div className="content">
            <div> Test Test Ttessttt</div>
            <InstructorDashboard />

            {/* Course'lar bu şekilde maplenebilir */}
            <div>Courses: <br/>{courses && courses.map((course : Course) => {
              return <div>{course.courseName}</div>
            })}</div>
        </div>
    </Box>
    </div>
  )
}

export default InstructorPage