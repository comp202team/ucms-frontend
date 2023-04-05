import React, {useEffect, useState} from 'react';
import LoginPage from "./Components/LoginPage";
// @ts-ignore
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import RegisterPage from "./Components/RegisterPage";
import TrueCheck from "./Components/TrueCheck";
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './Store/securityslice';
import ProtectedRoute from './Libs/ProtectedRoute';
import NotFound from './Libs/NotFound';
function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            dispatch(getCurrentUser())
        }
    });

    return (

        <div>
            <BrowserRouter>
                <HeaderComponent/>
                <div className="container" style={{
                    margin: "auto",
                    display : 'flex',
                    padding: "15px",
                    maxWidth: "1500px", 
                    alignContent: "center",
                }}>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/page1" element={<ProtectedRoute><TrueCheck/></ProtectedRoute>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
                {<FooterComponent/>}
            </BrowserRouter>
        </div>
    )
}

export default App;