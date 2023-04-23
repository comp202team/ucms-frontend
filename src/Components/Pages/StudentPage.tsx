import React, {useState} from 'react'
import {SideBarStudent} from "../SideBar/SideBarStudent";
import {Box, Button} from "@mui/material";
import "../../Styles/StudentPage.css"
import StudentDashboard from '../Dashboard/StudentDashboard';

type Props = {}

const StudentPage = (props: Props) => {

    return (
        <div>
            <Box className="container">
                <div className="sidebar">
                    <SideBarStudent />
                </div>
                <div className="content">
                    <div> Test Test Ttessttt</div>
                    <StudentDashboard/>
                </div>
            </Box>
        </div>
    )
}

export default StudentPage
