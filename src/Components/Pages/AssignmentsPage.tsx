import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Box, Card, CardContent, Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { getAssignmentsByStudentId } from '../../Store/courseSlice';
import { SideBarStudent } from '../SideBar/SideBarStudent';


const AssignmentsPage = (props: any) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isInstructor = useSelector((state: any) => state.security.isInstructor);

    const assignments = useSelector((state: any) => state.course.assignments);

    const user = useSelector((state : any) => state.security.user);

    useEffect(() => {
        if(isInstructor){
            navigate("/")
        }
        else{
            dispatch(getAssignmentsByStudentId(user.id))
        }
    }, [isInstructor])

    return (
        <div>
            <>            
            <Box className="container">
                <Box className="sidebar">
                    <SideBarStudent/>
                </Box>
                <Box>
                    
                </Box>
            </Box>
                <Box sx={{marginBottom: 5, marginX:2}}>
                <Typography sx={{marginY: 2, fontSize : 24}}>Assignments</Typography>

                    {assignments && assignments.map((assignment: any) =>
                        <Card sx={{minWidth: 400, marginY: 2}}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {assignment.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {assignment.description}
                                </Typography>
                                <Box sx={{display: "flex", justifyContent: "flex-start", pt: 1, alignItems:"center",}}>
                                    <Typography variant="caption" color="text.secondary" fontSize={16}>
                                        Course:
                                    </Typography>
                                    <Typography variant="caption" color="text.primary" fontSize={14} sx={{marginX:1}}> 
                                        {assignment.course.courseName} ({assignment.course.courseCode})
                                    </Typography>
                                </Box>

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
        </div>
    )
}

export default AssignmentsPage