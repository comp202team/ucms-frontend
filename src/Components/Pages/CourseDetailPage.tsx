import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateCoursePage } from './UpdateCoursePage';
import { useParams } from 'react-router-dom';
import { getAssignmentsByCourseCode, getCourseById } from '../../Store/courseSlice';
import {Box, Typography} from "@mui/material";


const CourseDetailPage = (props: any) => {
    
    const {courseId} = useParams();

    const dispatch = useDispatch();
    
    const isInstructor = useSelector((state : any) => state.security.isInstructor);
    const course = useSelector((state : any) => state.course.course);
    const assignments = useSelector((state : any) => state.course.assignments);

    useEffect(() => {
        dispatch(getCourseById(courseId)).then((response : any) => {
          if(!response.error){
            dispatch(getAssignmentsByCourseCode(response.payload.courseCode))
          }
        });
    }, [])
  return (
    <div>
        {isInstructor ? 
        <Box sx={{marginBottom:5}}>
            <UpdateCoursePage course={course}/>
            <Typography>Assignments</Typography>
            {assignments.map((assignment:any) => <p key={assignment.id}>{assignment.name}</p>)}
            
        </Box>
        :
        <>
        
        </>
        }
    </div>
  )
}

export default CourseDetailPage