import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {UpdateCoursePage} from './UpdateCoursePage';
import {useParams} from 'react-router-dom';
import {getAssignmentsByCourseCode, getCourseById} from '../../Store/courseSlice';
import {Box, Card, CardContent, Typography} from "@mui/material";


const CourseDetailPage = (props: any) => {

    const {courseId} = useParams();

    const dispatch = useDispatch();

    const isInstructor = useSelector((state: any) => state.security.isInstructor);
    const course = useSelector((state: any) => state.course.course);
    const assignments = useSelector((state: any) => state.course.assignments);

    useEffect(() => {
        dispatch(getCourseById(courseId)).then((response: any) => {
            if (!response.error) {
                dispatch(getAssignmentsByCourseCode(response.payload.courseCode))
            }
        });
    }, [])
    return (
        <div>
            {isInstructor ?
                <Box sx={{marginBottom: 5}}>
                    <UpdateCoursePage course={course}/>
                    <Typography sx={{margin: 2, fontSize : 24}}>Assignments</Typography>

                    {assignments.map((assignment: any) =>
                        <Card sx={{minWidth: 275, margin: 2}}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {assignment.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {assignment.description}
                                </Typography>
                                <Box sx={{display: "flex", justifyContent: "space-between", pt: 2}}>
                                    <Typography variant="caption" color="text.secondary">
                                        Deadline:
                                    </Typography>
                                    <Typography variant="caption" color="text.primary">
                                        {assignment.deadline}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>)}

                </Box>
                :
                <>

                </>
            }
        </div>
    )
}

export default CourseDetailPage