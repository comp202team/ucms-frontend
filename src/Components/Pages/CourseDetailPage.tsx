import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateCoursePage } from './UpdateCoursePage';
import { useParams } from 'react-router-dom';
import { getCourseById } from '../../Store/courseSlice';


const CourseDetailPage = (props: any) => {
    
    const {courseId} = useParams();

    const dispatch = useDispatch();
    
    const isInstructor = useSelector((state : any) => state.security.isInstructor);
    const course = useSelector((state : any) => state.course.course);

    useEffect(() => {
        dispatch(getCourseById(courseId));
    }, [])
  return (
    <div>
        {isInstructor ? 
        <>
            <UpdateCoursePage course={course}/>
        </>
        :
        <>
        
        </>
        }
    </div>
  )
}

export default CourseDetailPage