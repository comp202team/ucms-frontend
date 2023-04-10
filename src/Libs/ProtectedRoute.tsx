import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser, logout } from '../Store/securityslice';
import { Navigate } from "react-router-dom";


const ProtectedRoute =(props : any) => {
    const dispatch = useDispatch();

    const isAuthenticated = useSelector((state : any) => state.security.isAuthenticated);
    const loading = useSelector((state : any) => state.security.loading);

    if(!isAuthenticated){
        if(localStorage.getItem("token")){
            dispatch(getCurrentUser());
        }
        else{
            dispatch(logout())
            return <Navigate to={"/"}/>;
        }
    }
    return (
        <>
            {loading ? <></>
            :
            <>{props.children}</>
            }
        </>
    );
}

export default ProtectedRoute;