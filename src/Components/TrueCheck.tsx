import React from "react";
import jwt_decode from "jwt-decode";
import InstructorPage from "./Pages/InstructorPage";
import StudentPage from "./Pages/StudentPage";
import { useSelector } from "react-redux";

const TrueCheck: React.FC = () => {
    

    const isInstructor = useSelector((state : any) => state.security.isInstructor);

    return (
        <>
        {
            isInstructor === true ? 
            <InstructorPage/>
            :
            <StudentPage/>
        }
        </>
    )
}

export default TrueCheck;