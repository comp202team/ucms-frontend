import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Box, Card, CardContent, Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { getAnnouncementsByStudentId } from '../../Store/courseSlice';
import { SideBarStudent } from '../SideBar/SideBarStudent';


const AnnouncementsPage = (props: any) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isInstructor = useSelector((state: any) => state.security.isInstructor);

    const announcements = useSelector((state: any) => state.course.announcements);

    const user = useSelector((state : any) => state.security.user);

    useEffect(() => {
        if(isInstructor){
            navigate("/")
        }
        else{
            dispatch(getAnnouncementsByStudentId(user.id))
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
                <Typography sx={{marginY: 2, fontSize : 24}}>Announcements</Typography>

                    {announcements && announcements.map((annoucement: any) =>
                        <Card sx={{minWidth: 400, marginY: 2}}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {annoucement.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {annoucement.description}
                                </Typography>
                                <Box sx={{display: "flex", justifyContent: "flex-start", pt: 1, alignItems:"center",}}>
                                    <Typography variant="caption" color="text.secondary" fontSize={16}>
                                        Course:
                                    </Typography>
                                    <Typography variant="caption" color="text.primary" fontSize={14} sx={{marginX:1}}> 
                                        {annoucement.course.courseName} ({annoucement.course.courseCode})
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>)}

                </Box>
            </>
        </div>
    )
}

export default AnnouncementsPage