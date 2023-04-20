import React from "react";
import jwt_decode from "jwt-decode";
import InstructorPage from "./Pages/InstructorPage";
import StudentPage from "./Pages/StudentPage";

const TrueCheck: React.FC = () => {

    const token : string | null = localStorage.getItem("token");
    const decodedToken : any = token ? jwt_decode(token) : null;

    return (
        <>
        {
            decodedToken.scopes.includes("ROLE_INSTRUCTOR") ? 
            <InstructorPage/>
            :
            <StudentPage/>
        }
        </>
    )
}

export default TrueCheck;