import React, {useEffect, useState} from 'react';
import './App.css';
import LoginPage from "./Components/Pages/LoginPage";
// @ts-ignore
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import RegisterPage from "./Components/Pages/RegisterPage";
import TrueCheck from "./Components/TrueCheck";
import { useDispatch } from 'react-redux';
import { getCurrentUser, instructorMode, studentMode } from './Store/securityslice';
import ProtectedRoute from './Libs/ProtectedRoute';
import NotFound from './Libs/NotFound';
import {Box} from "@mui/material";
import InstructorRoute from './Libs/InstructorRoute';
import { CourseForm } from './Components/Pages/CourseCreatePage';
import { UpdateCoursePage } from './Components/Pages/UpdateCoursePage';
import CourseDetailPage from './Components/Pages/CourseDetailPage';
import jwt_decode from "jwt-decode";



function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            dispatch(getCurrentUser()).then((response : any) => {
                if(!response.error){            
                    const token : string | null = localStorage.getItem("token");
                    const decodedToken : any = token ? jwt_decode(token) : null;
                    if(decodedToken.scopes.includes("ROLE_INSTRUCTOR")){
                        dispatch(instructorMode());
                    }
                    else{
                        dispatch(studentMode());
                    }
                }
            })
        }
    });

    return (

        <Box>
            <BrowserRouter>
                <Box style={{display:'fixed'}}>
                <HeaderComponent />
                </Box>
                <Box className="container" style={{
                    margin: "auto",
                    display : 'flex',
                    padding: "15px",
                    maxWidth: "1500px",
                    alignContent: "center",
                }}>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/dashboard" element={<ProtectedRoute><TrueCheck/></ProtectedRoute>}/>
                        <Route path='/createCourse' element={<InstructorRoute><CourseForm/></InstructorRoute>}/>
                        <Route path='/course/:courseId' element={<ProtectedRoute><CourseDetailPage/></ProtectedRoute>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </Box>
                {<FooterComponent/>}
            </BrowserRouter>
        </Box>
    )
}

export default App;