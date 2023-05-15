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

                    {assignments && assignments.map((assignment: any) =>
                        <Card sx={{maxWidth: 500, margin: 2}}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {assignment.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {assignment.description}
                                </Typography>
                                <Box sx={{display: "flex", justifyContent: "flex-start", pt: 1, alignItems:"center",}}>
                                    <Typography variant="caption" color="text.secondary" fontSize={16}>
                                        Deadline:
                                    </Typography>
                                    <Typography variant="caption" color="text.primary" fontSize={14} sx={{marginX:1}}>
                                        {assignment.deadline}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>)}

                </Box>
                :

                <>
                  <Box sx={{marginBottom: 5, marginX:2}}>

                    <Typography variant='h3' sx={{marginY:2}}>{course.courseName} ({course.courseCode})</Typography>
                    <Typography >{course.courseDesc}</Typography>
                    <Typography >Credit Hours : {course.creditHours}</Typography>
                    <Typography >Instructor : {course.instructor && course.instructor.firstName} {course.instructor && course.instructor.lastName}</Typography>

                      <Typography sx={{marginY: 2, fontSize : 24}}>Assignments</Typography>

                      {assignments && assignments.map((assignment: any) =>
                          <Card sx={{maxWidth: 400, marginY: 2}}>
                              <CardContent>
                                  <Typography variant="h5" component="div">
                                      {assignment.name}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                      {assignment.description}
                                  </Typography>
                                  <Box sx={{display: "flex", justifyContent: "flex-start", pt: 1, alignItems:"center",}}>
                                    <Typography variant="caption" color="text.secondary" fontSize={16}>
                                        Deadline:
                                    </Typography>
                                    <Typography variant="caption" color="text.primary" fontSize={14} sx={{marginX:1}}>
                                        {assignment.deadline}
                                    </Typography>
                                  </Box>
                              </CardContent>
                          </Card>)}

                  </Box>
                </>
            }
        </div>
    )
}

export default CourseDetailPage