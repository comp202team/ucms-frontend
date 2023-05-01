import React, { useState, useEffect } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { instructorMode, login, studentMode } from "../../Store/securityslice";
import jwt_decode from "jwt-decode";

const StyledContainer = styled(Container)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    gap: "1rem",
});

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector((state: any) => state.security.isAuthenticated);
    const loginError = useSelector((state: any) => state.security.err); // Add this line to get the error message from Redux store

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegisterClick = () => {
        navigate("/register", { replace: false });
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard", { replace: true });
        }
    });

    const handleLoginClick = () => {
        dispatch(login({username, password})).then((response : any) => {
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
        // if (validateCredentials(username, password)) {
        //     console.log("Giriş başarılı!");
        //     history.push("/page1");
        // } else {
        //     console.log("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
        // }
    };


    return (
        <StyledContainer>
            <Typography variant="h4">Login</Typography>
            <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleLoginClick}>
                Login
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleRegisterClick}>
                Register
            </Button>
            {loginError && <Typography color="error">{loginError}</Typography>} {/* Add this line to display the error message */}
        </StyledContainer>
    );
};

export default LoginPage;