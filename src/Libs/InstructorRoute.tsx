import React, { useEffect } from 'react'
import ProtectedRoute from './ProtectedRoute'
import jwt_decode from "jwt-decode";
import { Navigate, useNavigate } from 'react-router-dom';
import { SideBarInstructor } from '../Components/SideBar/SideBarInstructor';


const InstructorRoute = (props: any) => {
    const token : string | null = localStorage.getItem("token");
    const decodedToken : any = token ? jwt_decode(token) : null;

  return (
    <ProtectedRoute>
        {decodedToken.scopes.includes("ROLE_INSTRUCTOR") ? 
        <>
            <SideBarInstructor/>
            {props.children}
        </>
        :
        <Navigate to={"/"}/>
        }
    </ProtectedRoute>
  )
}

export default InstructorRoute