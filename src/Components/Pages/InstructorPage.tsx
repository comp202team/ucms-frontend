import React from 'react'
import { SideBarInstructor } from '../SideBar/SideBarInstructor'
import { Box } from '@mui/material'
import InstructorDashboard from '../Dashboard/InstructorDashboard'

type Props = {}

const InstructorPage = (props: Props) => {
  return (
    <div>
      <Box className="container">
        <div className="sidebar">
            <SideBarInstructor/>
        </div>
        <div className="content">
            <div> Test Test Ttessttt</div>
            <InstructorDashboard />
        </div>
    </Box>
    </div>
  )
}

export default InstructorPage