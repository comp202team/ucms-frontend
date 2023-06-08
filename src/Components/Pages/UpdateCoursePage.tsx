import React, {useState, useEffect} from "react";
import {
    addStudentToCourse,
    Course,
    createAnnouncement,
    createAssignment,
    createCourse,
    Department,
    getAnnouncementsByCourseId,
    getAssignmentsByCourseCode,
    getAssignmentsByStudentId,
    getInstructorCourses,
    Instructor,
    updateCourse
} from "../../Store/courseSlice";
import {Button, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {DatePicker} from "@mui/x-date-pickers";
import dayjs, {Dayjs} from "dayjs";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';

interface Props {
    course: Course
}

export const UpdateCoursePage: React.FC<Props> = ({course}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state: any) => state.security.user);

    const [courseState, setCourse] = useState({
        id: course.id,
        courseCode: course.courseCode,
        courseName: course.courseName,
        courseDesc: course.courseDesc,
        creditHours: course.creditHours,
        department: {
            departmentId: 0,
            departmentName: "",
            departmentCode: "",
            departmentHead: "",
        },
    });

    const [assignmentState, setAssignment] = useState({
        courseCode: course.courseCode,
        name: "",
        description: "",
        deadline: "2023-05-16",
    });

    const [announcementState, setAnnouncement] = useState({
        courseId: course.id,
        title: "",
        description: "",
    });

    const [addStudentControl, setAddStudentControl] = useState(false);

    const [assignmentControl, setAssignmentControl] = useState(false);

    const [announcementControl, setAnnouncementControl] = useState(false);

    const [studentEmail, setStudentEmail] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(updateCourse(courseState));
        dispatch(getInstructorCourses(user.id));
    };

    const handleAssignmentSubmit = (e: any) => {
        dispatch(createAssignment({...assignmentState, courseCode: course.courseCode})).then(() => {
            dispatch(getAssignmentsByCourseCode(course.courseCode))
        });
        setAssignmentControl(true);
    };

    const handleAnnouncementSubmit = (e: any) => {
        dispatch(createAnnouncement({...announcementState, courseId: course.id})).then(() => {
            dispatch(getAnnouncementsByCourseId(course.id))
        });
        setAnnouncementControl(true);
    };

    const handleCourseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCourse((prevCourse) => ({...prevCourse, [name]: value}));
    };

    const handleAssignmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setAssignment((prevAssignment) => ({...prevAssignment, [name]: value}));
    };

    const handleAnnouncementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setAnnouncement((prevAnnouncement) => ({...prevAnnouncement, [name]: value}));
    };


    const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'));

    const handleAddStudent = () => {
        dispatch(addStudentToCourse({email: studentEmail, courseId: course.id}))
        setAddStudentControl(true)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Typography variant="h4" margin={2}>Update Course</Typography>
                <TextField
                    label="Course Code"
                    name="courseCode"
                    value={courseState.courseCode}
                    onChange={handleCourseChange}
                    required
                    fullWidth
                    sx={{margin: 2}}
                />
                <TextField
                    label="Course Name"
                    name="courseName"
                    value={courseState.courseName}
                    onChange={handleCourseChange}
                    required
                    fullWidth
                    sx={{margin: 2}}
                />
                <TextField
                    label="Course Description"
                    name="courseDesc"
                    value={courseState.courseDesc}
                    onChange={handleCourseChange}
                    required
                    fullWidth
                    sx={{margin: 2}}
                />
                <TextField
                    label="Credit Hours"
                    name="creditHours"
                    type="number"
                    value={courseState.creditHours}
                    onChange={handleCourseChange}
                    required
                    fullWidth
                    sx={{margin: 2}}
                />
                <Button type="submit" variant="contained" color="primary" sx={{margin: 2}}>
                    Update
                </Button>

                <TextField
                    label="Add Student"
                    name="Add Student"
                    type={"email"}
                    value={studentEmail}
                    onChange={(e: any) => setStudentEmail(e.target.value)}
                    sx={{margin: 2, display: "block"}}
                >
                </TextField>

                {addStudentControl && <Typography marginX={2} color={"#81c784"}>Student added to course</Typography>}

                <Button onClick={() => handleAddStudent()} variant="contained" color="primary" sx={{margin: 2}}>
                    Add Student
                </Button>
            </form>
            <form>
                <Typography variant="h4" margin={2}>Create Announcement</Typography>
                <TextField
                    label="Announcement Title"
                    name="title"
                    value={announcementState.title}
                    onChange={handleAnnouncementChange}
                    required
                    fullWidth
                    sx={{margin: 2}}
                />
                <TextField
                    label="Announcement Description"
                    name="description"
                    value={announcementState.description}
                    onChange={handleAnnouncementChange}
                    required
                    fullWidth
                    sx={{margin: 2}}
                />
                
                {announcementControl && <Typography marginX={2} color={"#81c784"}>Announcement created</Typography>}
                <Button onClick={handleAnnouncementSubmit} variant="contained" color="primary"
                        sx={{margin: 2, marginBottom: 5}}>
                    Create
                </Button>
            </form>

            <form>
                <Typography variant="h4" margin={2}>Create Assignment</Typography>
                <TextField
                    label="Assignment Title"
                    name="name"
                    value={assignmentState.name}
                    onChange={handleAssignmentChange}
                    required
                    fullWidth
                    sx={{margin: 2}}
                />
                <TextField
                    label="Assignment Description"
                    name="description"
                    value={assignmentState.description}
                    onChange={handleAssignmentChange}
                    required
                    fullWidth
                    sx={{margin: 2}}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        sx={{margin  : 2}}
                        label="Deadline"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                            if (newValue) {
                                const formattedDate = newValue.format("YYYY-MM-DD");
                                setAssignment((prevAssignment) => ({...prevAssignment, deadline: formattedDate}));
                            }
                        }}
                    />


                </LocalizationProvider>
                {assignmentControl && <Typography marginX={2} color={"#81c784"}>Assignment created</Typography>}
                <Button onClick={handleAssignmentSubmit} variant="contained" color="primary"
                        sx={{margin: 2, marginBottom: 5}}>
                    Create
                </Button>
            </form>
        </>
    );
};