import React from "react";
import jwt_decode from "jwt-decode";
import InstructorPage from "./InstructorPage";
import StudentPage from "./StudentPage";

const TrueCheck: React.FC = () => {

    const token : string |null = localStorage.getItem("token");
    const decodedToken : any = token ? jwt_decode(token) : null;

    return (
        <>
        {
            decodedToken.scopes.includes("ROLE_ADMIN") ? 
            <InstructorPage/>
            :
            <StudentPage/>
        }
        </>
    )
}

export default TrueCheck;