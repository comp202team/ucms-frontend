import {Box, Card, CardContent, Typography} from '@mui/material';
import React, {useState} from 'react';
import {Course, createCourse, getInstructorCourses} from "../../Store/courseSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

type CourseDashboardProps = {
    courses: Course[];
};

const CourseDashboard = ({courses}: CourseDashboardProps) => {


    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [course, setCourse] = useState({
        courseCode: "",
        courseName: "",
        courseDesc: "",
        creditHours: 0,
        department: {
            departmentId: 0,
            departmentName: "",
            departmentCode: "",
            departmentHead: "",
        },
    });

    const user = useSelector((state : any) => state.security.user);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, course : Course) => {
        e.preventDefault();
        navigate(`/course/${course.id}`);
    };

    return (
        <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            bgcolor="#F8F8F8"
            padding="20px"
        >
            {courses && courses.map((course: Course) => (
                <Card
                    onClick={(e : any) => handleSubmit(e, course)}
                    key={course.id}
                    style={{
                        backgroundColor: '#fff',
                        width: '320px',
                        height: '320px',
                        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
                        borderRadius: '8px',
                        padding: '16px',
                        margin: '20px',
                         display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}
                >
                    <CardContent>
                        <Typography
                            variant="h6"
                            component="h2"
                            style={{
                                marginBottom: '8px',
                                fontWeight: 'bold',
                                color: '#555'
                            }}
                        >
                            {course.courseName}
                        </Typography>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            style={{
                                marginBottom: '16px',
                                fontSize: '14px',
                                color: '#888'
                            }}
                        >
                            {course.courseCode}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            style={{
                                marginBottom: '8px',
                                fontSize: '16px',
                                color: '#333'
                            }}
                        >
                            {course.courseDesc}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            style={{
                                fontSize: '14px',
                                color: '#888'
                            }}
                        >
                            Credit hours: {course.creditHours}
                        </Typography>

                        <Typography
                            variant="body2"
                            component="p"
                            style={{
                                fontSize: '14px',
                                color: '#888'
                            }}
                        >
                            Instructor: {course.instructor.firstName + " " + course.instructor.lastName}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default CourseDashboard;