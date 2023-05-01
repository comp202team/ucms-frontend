import {Box, Card, CardContent, Typography} from '@mui/material';
import React from 'react';
import {Course} from "../../Store/courseSlice";

type CourseDashboardProps = {
    courses: Course[];
};

const CourseDashboard = ({courses}: CourseDashboardProps) => {
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